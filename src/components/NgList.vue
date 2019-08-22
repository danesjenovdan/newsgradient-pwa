<template>
  <div id="events">
    <a
      v-for="event in events"
      :key="event.id"
      class="event"
      @click="openRandomArticle(event.id)"
    >
      <div class="ratio">
        <div class="ratio-item bg-image" :style="`background-image: url(${event.image || 'http://placekitten.com/720/405'})`"></div>
        <div class="ratio-item color-overlay"></div>
        <div class="ratio-item gradient-overlay"></div>
        <div class="ratio-item">
          <div class="event-content">
            <div class="event-bg-gradient">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-data">
                <div class="event-count">{{ event.count }} articles</div>
                <div class="event-time">
                  First published {{ getRelativeTime(event.computed_time) }}
                </div>
              </div>
            </div>
          </div>
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
    position: relative;
    border-top: 1px solid #ccc;

    .ratio {
      position: relative;
      height: 0;
      padding-top: 60%;

      .ratio-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .bg-image {
      background-repeat: no-repeat;
      background-position: bottom 25% center;
      background-size: cover;
      // filter: grayscale(100%);
    }

    // .color-overlay {
    //   mix-blend-mode: screen;
    //   background: #a00;
    // }

    // .gradient-overlay {
    //   background-image: linear-gradient(
    //     to bottom,
    //     rgba(#fff, 0) 0%,
    //     rgba(#fff, 0) 25%,
    //     rgba(#fff, 0.45) 40%,
    //     rgba(#fff, 1) 90%,
    //     rgba(#fff, 1) 100%
    //   );
    // }

    .event-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;


      .event-bg-gradient {
        padding: 1.25rem 1rem;
        background-image: linear-gradient(
          to bottom,
          rgba(#fff, 0) 0%,
          rgba(#fff, 0.35) 2rem,
          rgba(#fff, 1) calc(100% - 2rem)
        );

        .event-title,
        .event-data {
          width: 100%;
          line-height: 1;
        }

        .event-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.1;
          text-shadow: 0px 0px 10px rgba(#fff, 0.75);
        }

        .event-data {
          display: flex;
          // justify-content: space-between;
          align-items: flex-end;
          margin-top: 0.75rem;

          .event-count {
            font-size: 0.875rem;
            color: #e60000;
            font-weight: 500;
          }

          .event-time {
            font-size: 0.65rem;
            color: #07f;
            margin-left: 1rem;
            font-weight: 400;
            margin-bottom: 0.1em;
          }
        }
      }
    }
  }
}
</style>
