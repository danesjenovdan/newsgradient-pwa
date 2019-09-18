<template>
  <div id="event-list">
    <div id="article-window"
      v-if="!loading"
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler"
    >
      <h3 class="article-title">
        <div class="byline">
          <div class="icon-container">
            <img class="icon" :src="faviconUrl" alt="icon" />
          </div>
          <div class="name">{{ currentNewshouse }}</div>
        </div>
        <div class="title">
          <span class="clamp">
            {{ currentArticle.title }}
          </span>
        </div>
      </h3>
      <div class="ratio">
        <div v-if="sliderSwitching" class="ratio-item loader">
          <animated-loader />
        </div>
        <template v-else-if="'og_image' in currentArticle || 'image' in currentArticle">
          <div
            v-if="currentArticle.og_image || currentArticle.image"
            class="ratio-item"
          >
            <div
              class="article-image"
              :style="`background-image: url(${currentArticle.og_image || currentArticle.image})`"
            ></div>
          </div>
          <div
            v-else
            class="ratio-item"
          >
            <div
              class="article-image"
              :style="`background-image: url('/img/washington-placeholder.jpg')`"
            ></div>
          </div>
        </template>
      </div>
      <p class="og-text">
        {{ shortArticleText }}
        <a
          :href="currentArticle.url"
          class="read-more"
          target="_blank"
          @click="$matomo.trackEvent('readArticle', `${this.$route.params.eventId}`, `${currentArticle.id}`)"
        >Read more</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions, mapMutations } from 'vuex';
import debounce from 'lodash.debounce';
import AnimatedLoader from './AnimatedLoader.vue';
import { getArticles } from '../requests';

@Component({
  components: {
    AnimatedLoader,
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    ...mapState([
      'currentNewshouse',
      'currentArticle',
      'currentSortedArticles',
      'currentArticleIndex',
      'sliderSwitching',
      'sliderSwitchToValue',
    ]),
    faviconUrl() {
      const { url } = this.currentArticle;
      if (url) {
        const start = url.indexOf('//') + 2;
        const domain = url.slice(start, url.indexOf('/', start));
        return `https://www.google.com/s2/favicons?domain=${domain}`;
      }
      return '';
    },
    shortArticleText() {
      const max = 170;
      const text = this.currentArticle.og_description || this.currentArticle.content || 'No article description available.';
      if (text.length <= max) {
        return text;
      }
      return `${text.slice(0, text.lastIndexOf(' ', max))}...`;
    },
  },

  watch: {
    sliderSwitchToValue(newSwitchToValue) {
      this.changeArticle(newSwitchToValue);
    },
  },

  methods: {
    ...mapMutations([
      'SET_CURRENT_NEWS_EVENT',
      'SET_SLIDER_SWITCHING',
      'SET_SLIDER_VALUE',
    ]),
    ...mapActions([
      'updateArticleById',
    ]),
    nextArticle(direction: String) {
      const newArticleIndex = direction === 'negative'
        ? this.currentArticleIndex - 1
        : this.currentArticleIndex + 1;

      if (newArticleIndex >= 0 && newArticleIndex < this.currentSortedArticles.length) {
        const newArticleId = this.currentSortedArticles[newArticleIndex].id;
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
        this.$matomo.trackEvent(`openNext${direction}Article`, `${this.$route.params.eventId}`, `${newArticleId}`);
        this.$router.push(`/event/${this.$route.params.eventId}/${newArticleId}`);
      } else {
        // eslint-disable-next-line no-alert
        alert(`This is the most ${direction} article about this event.`);
      }
    },
    changeArticle: debounce(function changeArticle(this: Vue, sliderValue) {
      this.SET_SLIDER_SWITCHING(true);
      const newArticleIndex = sliderValue;
      const newArticle = this.currentSortedArticles[newArticleIndex];
      if (newArticle) {
        const newArticleId = newArticle.id;
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
      }
      this.stopSwitching();
    }, 0),
    stopSwitching: debounce(function stopSwitching(this: Vue) {
      requestAnimationFrame(() => {
        this.SET_SLIDER_SWITCHING(false);
        const newPath = `/event/${this.$route.params.eventId}/${this.currentArticle.id}`;
        if (newPath !== this.$route.path) {
          this.$matomo.trackEvent(`openSliderArticle`, `${this.$route.params.eventId}`, `${this.currentArticle.id}`);
          this.$router.push(newPath);
        }
      });
    }, 100),
    swipeLeftHandler() {
      this.nextArticle('positive');
    },
    swipeRightHandler() {
      this.nextArticle('negative');
    },
  },
  async created() {
    this.loading = true;

    const eventId = Number(this.$route.params.eventId);
    let articleId = this.$route.params.articleId != null
      ? Number(this.$route.params.articleId)
      : null;

    if (articleId == null) {
      const event = await getArticles(eventId);
      this.SET_CURRENT_NEWS_EVENT(event);
      const article = event.results[Math.floor(Math.random() * event.results.length)];
      articleId = article.id;

      this.$matomo.trackEvent('openRandomArticle', `${eventId}`, `${article.id}`);
      this.$router.replace(`/event/${eventId}/${article.id}`);
    }

    await this.updateArticleById({
      eventId,
      articleId,
    });

    this.loading = false;

    if (typeof window !== 'undefined') {
      window.onpopstate = (event) => {
        const { pathname: path } = window.location;
        const match = /\/event\/(\d+)\/(\d+)\/?$/.exec(path);
        if (match) {
          const [, eventId, articleId] = match;
          this.updateArticleById({
            eventId,
            articleId,
          });
        }
      };
    }
  },
})
export default class EventList extends Vue {}
</script>

<style lang="scss">
#event-list {
  overflow-y: auto;
  background-color: #e8e8e8;
  margin-top: auto;
  margin-bottom: auto;

  #article-window {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: #fff;
    margin: 0.5rem;
    min-height: calc(100% - 73px);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);

    .article-title {
      font-weight: 700;
      margin: 0.75rem 0 0.5rem;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 89px;
      font-size: 1.1rem;
      line-height: 1.2;

      .byline {
        margin-bottom: 0.25rem;
        font-weight: 400;
        font-size: 0.85rem;
        font-style: italic;
        color: #333;
        display: flex;
        align-items: center;

        .icon-container {
          position: relative;
          height: 16px;
          margin-right: 0.5rem;

          .icon {
            display: block;
            width: 16px;
            height: 16px;
          }
        }

        .name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .title {
        margin: auto 0;

        .clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }

    .ratio {
      position: relative;
      height: 0;
      padding-top: 56.25%;

      .ratio-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
    }

    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: #e8e8e8;
    }

    .article-image {
      background-repeat: none;
      background-position: center;
      background-size: cover;
      // background-color: #fff;
      height: 100%;
    }

    .og-text {
      margin: 0;
      padding: 0.75rem;
      font-size: 0.85rem;
      line-height: 1.4;
      min-height: 100px;
    }

    .read-more {
      display: inline;
      margin: 0.5rem auto;
      text-align: center;
      text-decoration: underline;
      color: #07f;
    }
  }
}
</style>
