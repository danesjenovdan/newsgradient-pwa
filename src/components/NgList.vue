<template>
  <div id="events">
    <a
      v-for="event in events"
      :key="event.id"
      class="event"
      @click="openRandomArticle(event.id)"
    >
      <div
        class="event-image"
        :style="`background-image: url(${event.image || '/img/washington-placeholder.jpg'})`"
      ></div>
      <div class="event-content">
        <h3 class="event-title">
          <span class="clamp">
            {{ event.title }}
          </span>
          <div class="event-detail">
            <div class="event-time">
              <em>First published:</em> {{ getRelativeTime(event.computed_time) }}
            </div>
          </div>
        </h3>
        <div class="event-data">
          <div class="event-detail">
            <div class="event-count">{{ event.count }} articles</div>
          </div>
          <div class="event-button">Compare headlines</div>
        </div>
      </div>
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
      this.$matomo.trackEvent('openRandomArticle', `${eventId}`, `${article.id}`);
      this.$router.push(`/event/${eventId}/${article.id}`);
    },
  },
})

export default class NgList extends Vue {};
</script>

<style lang="scss" scoped>
#events {
  width: 100%;
  background-color: #e8e8e8;
  padding: 0.5rem;

  .event {
    display: flex;
    text-decoration: none;
    position: relative;
    background: #fff;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);
    margin-bottom: 0.5rem;

    .event-image {
      flex: 1;
      background-position: center center;
      background-size: cover;
    }

    .event-content {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      padding: 0.5rem;

      .event-title,
      .event-data {
        width: 100%;
        line-height: 1;
      }

      .event-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.1;
        position: relative;

        .clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .event-detail {
          display: flex;
          align-items: center;
          line-height: 1.25rem;

          .event-time {
            font-size: 0.625rem;
            font-weight: 400;
          }
        }
      }

      .event-data {
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        align-items: center;
        margin-top: 0.5rem;
        border-top: 1px solid #444;
        line-height: 1;
        padding-top: 0.5rem;

        .event-detail {
          display: flex;
          align-items: center;
          line-height: 1.25rem;

          .event-count {
            font-size: 0.625rem;
            color: #e60000;
            font-weight: 500;
          }
        }

        .event-button {
          background-color: #07f;
          font-size: 0.6875rem;
          margin-left: auto;
          // margin-bottom: 1rem;
          padding: 1px 1.75rem 0 1rem;
          transform: rotate(0.05deg);
          color: #fff;
          text-transform: uppercase;
          line-height: 2rem;
          border-radius: 5rem;
          background-image: url('../assets/arrow-right-white.svg');
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 2rem 35%;
        }
      }
    }
  }
}
</style>
