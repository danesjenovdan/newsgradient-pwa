<template>
  <div id="gradient">
    <div id="newshouses-overlay">
      <div
        class="ng-step negative"
        @click="stepNegative()"
      >&lt;</div>
      <div
        class="ng-step positive"
        @click="stepPositive()"
      >&gt;</div>
    </div>
    <div
      id="gradient-marker"
      :style="{ left: gradientMarkerLeft }"
    >
      <div id="newshouse-name">
        {{ `${currentNewshouse.substring(0, 10)}${currentNewshouse.length > 10 ? '...' : ''}`
          .replace(' ', '\xa0') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'currentArticleId',
      'currentNewshouse',
      'currentSentiment',
      'currentNewsEvent',
    ]),

    minSentiment() {
      // @ts-ignore
      const sortedNewsEvent = this.currentNewsEvent.results
        // @ts-ignore
        .sort((a, b) => a.sentiment - b.sentiment);
      return sortedNewsEvent.length > 0 ? sortedNewsEvent[0].sentiment : 0;
    },

    maxSentiment() {
      // @ts-ignore
      const sortedNewsEvent = this.currentNewsEvent.results
        // @ts-ignore
        .sort((a, b) => b.sentiment - a.sentiment);
      return sortedNewsEvent.length > 0 ? sortedNewsEvent[0].sentiment : 0;
    },

    gradientMarkerLeft() {
      // @ts-ignore
      return `${(((this.currentSentiment - this.minSentiment) / (this.maxSentiment - this.minSentiment)) * 80) + 10}%`;
    },
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions([
      'updateArticleById',
    ]),

    stepNegative() {
      // @ts-ignore
      const sortedArticles = this.currentNewsEvent.results
        // @ts-ignore
        .sort((a, b) => a.sentiment - b.sentiment);
      const currentArticleIndex = sortedArticles
        // @ts-ignore
        .indexOf(sortedArticles.find((article) => article.id === this.currentArticleId));

      if (currentArticleIndex > 0) {
        const newArticleId = sortedArticles[currentArticleIndex - 1].id;
        // @ts-ignore
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
        this.$router.push(`/article/${this.$route.params.eventId}/${newArticleId}`);
      } else {
        alert('This is the most negative article about this event.');
      }
    },

    stepPositive() {
      // @ts-ignore
      const sortedArticles = this.currentNewsEvent.results
        // @ts-ignore
        .sort((a, b) => b.sentiment - a.sentiment);
      const currentArticleIndex = sortedArticles
        // @ts-ignore
        .indexOf(sortedArticles.find((article) => article.id === this.currentArticleId));

      if (currentArticleIndex > 0) {
        const newArticleId = sortedArticles[currentArticleIndex - 1].id;
        // @ts-ignore
        this.updateArticleById({
          eventId: this.$route.params.eventId,
          articleId: newArticleId,
        });
        this.$router.push(`/article/${this.$route.params.eventId}/${newArticleId}`);
      } else {
        alert('This is the most positive article about this event.');
      }
    },
  },
})

export default class NewsGradient extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#gradient {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  height: 30px;
  background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%);
  color: #ffffff;
  line-height: 30px;
  font-weight: 700;

  position: fixed;
  top: 30px;
  left: 0;

  #newshouses-overlay {
    width: 100%;
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;

    background-color: #ffffff;

    .ng-step {
      position: absolute;
      top: -7px;
      color: #000000;
      font-size: 30px;

      &.negative {
        left: 10px;
      }
      &.positive {
        right: 10px;
      }
    }
  }

  #gradient-marker {
    display: block;
    position: absolute;
    left: 50%;
    top: 17px;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #000000;
    font-size: 0;
    line-height: 0;

    #newshouse-name {
      position: absolute;
      left: -40px;
      top: -20px;
      color: #000000;
      font-size: 12px;
      width: 1px;
      overflow: visible;
      text-align: center;
    }
  }
}
</style>
