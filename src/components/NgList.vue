<template>
  <div id="events">
    <a
      v-for="event in events"
      :key="event.id"
      class="event"
      @click="openRandomArticle(event.id)"
    >
      <h3>{{ event.title }}</h3>
      <p>{{ event.summary }}...</p>
      <p>Number of articles: {{ event.counter.total }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventRanges, slants, getEvents, getArticles } from '../requests';
import { mapState, mapMutations } from 'vuex';

@Component({
  components: {},

  data() {
    return {
      events: [],
    }
  },

  computed: {
    ...mapState([
      'currentSlant',
      'currentEventRange',
    ]),
  },

  async created() {
    this.refreshEvents();
  },

  methods: {
    ...mapMutations([
      'SET_CURRENT_ARTICLE_URL',
      'SET_CURRENT_ARTICLE_ID',
      'SET_CURRENT_NEWSHOUSE',
      'SET_CURRENT_SENTIMENT',
      'SET_CURRENT_EVENT',
    ]),
    async refreshEvents() {
      const data = await getEvents(this.currentEventRange, this.currentSlant);
      this.events = data.results;
    },
    async openRandomArticle(eventId) {
      const articles = await getArticles(eventId);
      const article = articles.results[Math.floor(Math.random() * articles.results.length)];
      this.SET_CURRENT_ARTICLE_URL(article.url);
      this.SET_CURRENT_ARTICLE_ID(article.id);
      this.SET_CURRENT_NEWSHOUSE(article.medium.title);
      this.SET_CURRENT_SENTIMENT(article.sentiment);
      this.SET_CURRENT_EVENT(articles.results);
      this.$router.push('/article');
    },
  },

  watch: {
    currentSlant(newSlant) {
      this.refreshEvents();
    }
  }
})

export default class NgList extends Vue {}
</script>

<style lang="scss" scoped>
#events {
  width: 100%;

  .event {
    display: block;
    text-decoration: none;
    border: 1px solid #000000;
    margin-bottom: 3px;
  }
}
</style>
