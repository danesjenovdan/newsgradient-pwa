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
import { mapState, mapMutations, mapActions } from 'vuex';

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
      'SET_CURRENT_NEWS_EVENT',
    ]),
    ...mapActions([
      'updateArticleById',
    ]),
    async refreshEvents() {
      const data = await getEvents(this.currentEventRange, this.currentSlant);
      this.events = data.results;
    },
    async openRandomArticle(eventId) {
      const event = await getArticles(eventId);
      this.SET_CURRENT_NEWS_EVENT(event);
      const article = event.results[Math.floor(Math.random() * event.results.length)];
      this.updateArticleById({
          eventId: eventId,
          articleId: article.id,
        });;
      this.$router.push(`/article/${eventId}/${article.id}`);
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
