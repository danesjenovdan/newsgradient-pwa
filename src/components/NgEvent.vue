<template>
  <div id="ng-event">
    <div class="container" v-if="event">
      <h1 class="event-title">{{ event.title }}</h1>
    </div>
    <hr class="top-line" />
    <div class="container">
      <div class="carousel">
        <div class="left-arrow">( &lt; ) <br> Liberal</div>
        <div class="event-articles" v-if="articles.length">
          <div
            class="event-article-container"
            v-for="article in articles.slice(0, 3)"
            :key="article.id"
          >
            <ng-article-preview :article-id="article.id" :image="article.image" />
          </div>
          <div class="section-title-container">
            <div class="section-title">FACT REPORTING AND ANALISYS</div>
          </div>
          <div
            class="event-article-container"
            v-for="article in articles.slice(3)"
            :key="article.id"
          >
            <ng-article-preview :article-id="article.id" :image="article.image" />
          </div>
        </div>
        <div class="right-arrow">( &gt; ) <br> Conservative</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import NgArticlePreview from '@/components/NgArticlePreview.vue';
import { getEvents, getArticles } from '../requests';

export default {
  components: {
    NgArticlePreview,
  },
  data() {
    return {
      event: null,
      articles: [],
    };
  },
  computed: {
    ...mapState(['currentNewsEvent']),
  },
  methods: {
    ...mapMutations(['SET_CURRENT_NEWS_EVENT']),
    ...mapActions(['updateArticleById']),
  },
  async created() {
    const eventId = Number(this.$route.params.eventId);

    // FIXME: this is not good, only fetches visible events and is inneficient
    // make a getter by id in api
    const events = await getEvents();
    this.event = events.results.find((e) => e.id === eventId);

    let articleId = null;

    // TODO: dont get articles like this
    if (articleId == null) {
      const event = await getArticles(eventId);
      this.SET_CURRENT_NEWS_EVENT(event);
      this.articles = event.results; // .slice(0, 12);
      const article = event.results[Math.floor(Math.random() * event.results.length)];
      articleId = article.id;
      // this.$router.replace(`/event/${eventId}/${article.id}`);
    }

    await this.updateArticleById({
      eventId,
      articleId,
    });
  },
};
</script>

<style lang="scss" scoped>
#ng-event {
  .event-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    font-style: italic;
  }

  hr.top-line {
    margin: 0;
    height: 5px;
    background: linear-gradient(to right, #07f 0%, #e00 100%);
    border: none;
  }

  .carousel {
    display: flex;

    .left-arrow,
    .right-arrow {
      flex-basis: 80px;
      flex-shrink: 0;
      font-size: 1rem;
      margin-top: 250px;
      text-align: center;
    }

    .event-articles {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 -0.5rem;
      margin-top: 2rem;

      .event-article-container {
        flex: 1;
        flex-basis: 33.333%;
        padding: 0 0.5rem;
        margin-bottom: 1rem;
      }

      .section-title-container {
        flex: 1;
        flex-basis: 100%;
        padding: 0 0.5rem;
        margin-bottom: 1rem;

        .section-title {
          text-align: center;
          border-top: 2px solid #ccc;
          padding: 0.25rem 0;
          background-image: linear-gradient(to bottom, #fff 0%, transparent 100%);
          font-weight: 700;
        }
      }
    }
  }
}
</style>
