<template>
  <div id="event-list">
    <div id="article-window">
      <h3 class="article-title">
        <div class="byline">
          <div class="name">{{ currentNewshouse }}</div>
        </div>
        <div class="title">{{ currentArticle.title }}</div>
      </h3>
      <div class="ratio">
        <div v-if="switching" class="ratio-item loader">
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
        >Read more</a>
      </p>
      <div class="arrows">
        <div
          @click="nextArticle('negative')"
          class="arrow minus"
        >More negative</div>
        <div
          @click="nextArticle('positive')"
          class="arrow plus"
        >More positive</div>
      </div>
    </div>
    <ng-slider
      :icon="faviconUrl"
      :switching="switching"
      :value="currentArticleIndex"
      :max="numberOfArticles"
      :article-slant="articleSlant"
      :percentage-slant="percentageSlant"
      @change="changeArticle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import debounce from 'lodash.debounce';
import AnimatedLoader from './AnimatedLoader.vue';
import NgSlider from '@/components/NgSlider.vue';

@Component({
  components: {
    AnimatedLoader,
    NgSlider,
  },

  data() {
    return {
      switching: false,
    };
  },

  computed: {
    ...mapState([
      'currentArticleId',
      'currentNewshouse',
      'currentNewsEvent',
      'currentArticle',
    ]),
    numberOfArticles() {
      return this.currentNewsEvent.count;
    },
    sortedArticles() {
      return this.currentNewsEvent.results.slice().sort((a, b) => a.sentimentRNN - b.sentimentRNN);
    },
    currentArticleIndex() {
      return this.sortedArticles.indexOf(this.currentArticle);
    },
    articleSlant() {
      const percentageMorePositive = ((this.currentArticleIndex + 1) / this.numberOfArticles * 100);
      return percentageMorePositive > 50 ? 'positive' : 'negative';
    },
    percentageSlant() {
      const percentageMorePositive = ((this.currentArticleIndex + 1) / this.numberOfArticles * 100);
      return percentageMorePositive > 50
        ? percentageMorePositive
        : 100 - percentageMorePositive;
    },
    faviconUrl() {
      const { url } = this.currentArticle;
      const start = url.indexOf('//') + 2;
      const domain = url.slice(start, url.indexOf('/', start));
      return `https://www.google.com/s2/favicons?domain=${domain}`;
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

  methods: {
    ...mapActions([
      'updateArticleById',
    ]),
    nextArticle(direction) {
      const newArticleIndex = direction === 'negative'
        ? this.currentArticleIndex - 1
        : this.currentArticleIndex + 1;

      if (newArticleIndex >= 0 && newArticleIndex < this.sortedArticles.length) {
        const newArticleId = this.sortedArticles[newArticleIndex].id;
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
        this.$router.push(`/event/${this.$route.params.eventId}/${newArticleId}`);
      } else {
        // eslint-disable-next-line no-alert
        alert(`This is the most ${direction} article about this event.`);
      }
    },
    changeArticle: debounce(function changeArticle(this: Vue, sliderValue) {
      this.switching = true;
      const newArticleIndex = sliderValue;
      const newArticleId = this.sortedArticles[newArticleIndex].id;
      this.updateArticleById({
        eventId: this.$route.params.eventId,
        articleId: newArticleId,
      });
      this.stopSwitching();
    }, 0),
    stopSwitching: debounce(function stopSwitching(this: Vue) {
      requestAnimationFrame(() => {
        this.switching = false;
        const newPath = `/event/${this.$route.params.eventId}/${this.currentArticle.id}`;
        if (newPath !== this.$route.path) {
          this.$router.push(newPath);
        }
      });
    }, 100),
  },
  created() {
    this.updateArticleById({
      eventId: this.$route.params.eventId,
      articleId: this.$route.params.articleId,
    });
  },
})
export default class EventList extends Vue {}
</script>

<style lang="scss">
#event-list {
  width: 100%;
  height: 100vh;
  margin-top: -79px;
  padding-top: 40px;
  background-color: #e8e8e8;

  #article-window {
    overflow: hidden;
    position: relative;
    overflow-y: auto;
    background-color: #fff;
    margin: 0.5rem;
    box-shadow: 0 0 6px -3px #ccc;

    .article-title {
      font-weight: 700;
      margin: 0.75rem 0;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 92px;
      font-size: 1.15rem;
      line-height: 1.2;

      .byline {
        margin-bottom: 0.25rem;
        font-weight: 400;
        font-size: 1rem;
        font-style: italic;
        color: #666;
        display: flex;
        align-items: center;

        .name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .title {
        max-height: calc(3 * 1.2 * 1.15rem);
        overflow: hidden;
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

    .arrows {
      border-top: 1px solid #eee;
      display: flex;
      padding: 0 0.75rem;
      margin: 0 -0.375rem;

      .arrow {
        flex: 1;
        border-radius: 5rem;
        height: 2rem;
        margin: 0.75rem 0.375rem;
        padding: 0 1rem;
        text-align: center;
        line-height: 2rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.7rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 2rem 35%;

        &.minus {
          color: #07f;
          background-color: rgba(#07f, 0.25);
          background-image: url('../assets/arrow-left-blue.svg');
          background-position: left center;
          padding-left: 1.5rem;
        }

        &.plus {
          color: #e60000;
          background-color: rgba(#e60000, 0.25);
          background-image: url('../assets/arrow-right-red.svg');
          background-position: right center;
          padding-right: 1.5rem;
        }
      }
    }
  }
}
</style>
