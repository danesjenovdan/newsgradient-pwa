<template>
  <div id="event-list">
    <div id="article-window">
      <h3>{{ currentArticle.title }}</h3>
      <img :src="currentArticle.og_image || currentArticle.image || 'http://placekitten.com/400/250'">
      <p class="og-text">{{ currentArticle.og_description || currentArticle.content ? `${currentArticle.content.substring(0, 200)}...` : 'No text :(' }}</p>
      <a
        :href="currentArticle.url"
        target="_blank"
      >READ ARTICLE</a>
      <p class="sentiment">{{ articleSlantStatement }} Move the slider to see things from the other perspective.</p>
      <div>SLIDER</div>
      <div
        @click="nextArticle('negative')"
        class="arrow minus"
      >&lt;</div>
      <div
        @click="nextArticle('positive')"
        class="arrow plus"
      >&gt;</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';

@Component({
  components: {},

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
        alert('This is the most negative article about this event.');
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

  #article-window {
    width: calc(100% - 20px);
    margin-left: 10px;
    overflow: hidden;
    position: relative;

    text-align: center;

    h3 {
      text-align: center;
    }

    img {
      width: calc(100% - 40px);
      height: auto;
    }

    .og-text {
      padding: 0 10px;
      text-align: left;
    }

    .sentiment {
      background: #ffd001;
    }

    .arrow {
      position: absolute;
      top: 150px;
      font-size: 20px;
      cursor: pointer;

      &.minus {
        left: 0;
      }

      &.plus {
        right: 0;
      }
    }
  }
}
</style>
