<template>
  <div id="event-list">
    <div id="article-window">
      <h3 class="article-title">{{ currentArticle.title }}</h3>
      <div class="ratio">
        <div class="ratio-item loader">
          <animated-loader />
        </div>
        <template v-if="'og_image' in currentArticle || 'image' in currentArticle">
          <div
            v-if="currentArticle.og_image || currentArticle.image"
            class="ratio-item article-image"
            :style="`background-image: url(${currentArticle.og_image || currentArticle.image})`"
          />
          <div
            v-else
            class="ratio-item article-image"
            :style="`background-image: url(http://placekitten.com/720/405)`"
          />
        </template>
      </div>
      <p class="og-text">{{
        currentArticle.og_description ||
        (currentArticle.content
          ? `${currentArticle.content.substring(0, 200)}...`
          : 'No text :(')
      }}</p>
      <a
        :href="currentArticle.url"
        class="read-more"
        target="_blank"
      >Read article</a>
      <p class="sentiment">
        {{ articleSlantStatement }}
      </p>
      <div
        @click="nextArticle('negative')"
        class="arrow minus"
      ></div>
      <div
        @click="nextArticle('positive')"
        class="arrow plus"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import AnimatedLoader from './AnimatedLoader.vue';

@Component({
  components: {
    AnimatedLoader,
  },

  data() {
    return {
      articleSlantStatement: '',
      numberOfArticles: 0,
    };
  },

  computed: {
    ...mapState([
      'currentArticleId',
      'currentNewshouse',
      'currentNewsEvent',
      'currentArticle',
    ]),
  },

  watch: {
    currentNewsEvent(newCurrentNewsEvent) {
      this.numberOfArticles = newCurrentNewsEvent.count;
    },
    currentArticle(newCurrentArticle) {
      this.updateArticleStatement(newCurrentArticle);
    },
  },

  methods: {
    ...mapActions([
      'updateArticleById',
    ]),
    nextArticle(direction) {
      const sortedArticles = direction == 'negative' ?
        this.currentNewsEvent.results.sort((a, b) => a.sentiment - b.sentiment) :
        this.currentNewsEvent.results.sort((b, a) => a.sentiment - b.sentiment);
      const currentArticleIndex = sortedArticles.indexOf(this.currentArticle);//sortedArticles.find(article => article.id === this.currentArticleId));

      if (currentArticleIndex > 0) {
        const newArticleId = sortedArticles[currentArticleIndex - 1].id
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
        this.$router.push(`/event/${this.$route.params.eventId}/${newArticleId}`)
      } else {
        alert(`his is the most ${direction} article about this event.`);
      }
    },
    updateArticleStatement(newCurrentArticle) {
      const articleOrder = this.currentNewsEvent.results
                            .sort((b, a) => a.sentiment - b.sentiment)
                            .indexOf(newCurrentArticle) + 1;

      const percentageMorePositive = (articleOrder / this.numberOfArticles * 100);
      const articleSlant = percentageMorePositive > 50 ? 'NEGATIVE' : 'POSITIVE';
      const percentage = percentageMorePositive > 50 ? percentageMorePositive : 100 - percentageMorePositive;
      this.articleSlantStatement = `This article by ${this.currentNewshouse} is more ${articleSlant} than ${percentage.toFixed(2)}% of other coverage. Move the slider to see things from the other perspective.`
    },
  },

  created() {
    this.updateArticleById({
      eventId: this.$route.params.eventId,
      articleId: this.$route.params.articleId,
    });
    this.numberOfArticles = this.currentNewsEvent.count;
    this.updateArticleStatement(this.currentArticle);
  },
})

export default class EventList extends Vue {};
</script>

<style lang="scss">
#event-list {
  width: 100%;
  margin-top: -39px;

  #article-window {
    overflow: hidden;
    position: relative;

    .article-title {
      text-align: center;
      font-weight: 500;
      padding: 0 1rem;
      min-height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
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
      }
    }

    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .article-image {
      background-repeat: none;
      background-position: center;
      background-size: cover;
    }

    .og-text {
      margin: 0;
      padding: 1rem;
      font-size: 0.85rem;
      line-height: 1.4;
      min-height: 76px;
    }

    .read-more {
      display: block;
      margin: 0.5rem auto;
      padding: 0.5rem 1rem;
      width: 150px;
      text-align: center;
      border: 1px solid #07f;
      border-radius: 0.5em;
      text-decoration: none;
      color: #07f;
    }

    .sentiment {
      background: #edbdd3;
      margin: 1.25rem 0 0 0;
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
      line-height: 1.4;
      text-align: center;
    }

    .arrow {
      position: absolute;
      top: 180px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #aaa;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;

      &.minus {
        left: 0.5rem;
        background-image: url('../assets/arrow-left.svg');
        background-position: left 40% center;
      }

      &.plus {
        right: 0.5rem;
        background-image: url('../assets/arrow-right.svg');
        background-position: left 55% center;
      }
    }
  }
}
</style>
