<template>
  <div id="events">
    <a
      v-for="event in events"
      :key="event.id"
      class="event"
      @click="openRandomArticle(event.id)"
    >
      <img :src="event.image || 'http://placekitten.com/400/250'" />
      <h3>{{ event.title }}</h3>
      <p class="article-counter">{{ event.count }} articles</p>
      <p class="article-timestamp">{{ getRelativeTime(event.computed_time) }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';
import { mapState, mapMutations, mapActions } from 'vuex';
import { eventRanges, getEvents, getArticles } from '../requests';

@Component({
  components: {},

  data() {
    return {
      events: [],
    };
  },

  computed: {
    ...mapState([
      'currentEventRange',
      'currentNewsEvent',
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
    getRelativeTime(timestamp) {
      return DateTime.fromISO(timestamp).toRelative();
    },
    async refreshEvents() {
      const data = await getEvents(this.currentEventRange);
      console.log(data);
      this.events = data.results;
    },
    async openRandomArticle(eventId) {
      const event = await getArticles(eventId);
      this.SET_CURRENT_NEWS_EVENT(event);
      const article = event.results[Math.floor(Math.random() * event.results.length)];
      this.updateArticleById({
        eventId: eventId,
        articleId: article.id,
      });
      this.$router.push(`/event/${eventId}/${article.id}`);
    },
  },
})

export default class NgList extends Vue {};
</script>

<style lang="scss" scoped>
#events {
  width: 100%;

  .event {
    display: block;
    text-decoration: none;
    border: 1px solid #000000;
    margin: 5px 10px;
    position: relative;
    padding-bottom: 50px;

    img {
      width: 100%;
      height: auto;
    }

    h3 {
      padding: 5px;
      margin: 0;
    }

    p {
      font-size: 12px;
      padding: 0 8px;
      width: calc(50% - 30px);
      position: absolute;
      bottom: 0;

      &.article-counter {
        text-align: left;
        left: 0;
      }
      &.article-timestamp {
        text-align: right;
        right: 0;
      }
    }
  }
}
</style>
