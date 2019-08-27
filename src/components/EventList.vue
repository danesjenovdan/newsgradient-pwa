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
    <ng-slider @change="changeArticle" />
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
    articleSlantStatement() {
      const percentageMorePositive = ((this.currentArticleIndex + 1) / this.numberOfArticles * 100);
      const articleSlant = percentageMorePositive > 50 ? 'POSITIVE' : 'NEGATIVE';
      const percentage = percentageMorePositive > 50
        ? percentageMorePositive
        : 100 - percentageMorePositive;
      return `This article by ${this.currentNewshouse} is more ${articleSlant} than ${percentage.toFixed(2)}% of other coverage. Move the slider to see things from the other perspective.`;
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
        alert(`This is the most ${direction} article about this event.`);
      }
    },
    changeArticle: debounce(function changeArticle(this: Vue, sliderValue) {
      const newArticleIndex = Math.floor(sliderValue / 100 * (this.sortedArticles.length - 1));
      const newArticleId = this.sortedArticles[newArticleIndex].id;
      this.updateArticleById({
        eventId: this.$route.params.eventId,
        articleId: newArticleId,
      });
    }, 0),
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
  margin-top: -39px;

  #article-window {
    overflow: hidden;
    position: relative;

    .article-title {
      text-align: center;
      font-weight: 500;
      margin: 0.5rem 0;
      padding: 0 1rem;
      min-height: 75px;
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
      background-color: #e8e8e8;
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
      top: 185px;
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
