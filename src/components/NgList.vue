<template>
  <div id="events">
    <a
      v-for="event in events"
      :key="event.id"
      class="event"
      @click="openRandomArticle(event.id)"
    >
      <div class="ratio">
        <div
          class="ratio-item bg-image"
          :style="`background-image: url(${event.image || '/img/washington-placeholder.jpg'})`"
        />
        <div class="ratio-item color-overlay"></div>
        <div class="ratio-item gradient-overlay"></div>
        <div class="ratio-item">
          <div class="event-content">
            <div class="event-bg-gradient">
              <h3 class="event-title">
                {{ event.title }}
              </h3>
              <div class="event-data">
                <div class="event-detail">
                  <div class="event-count">{{ event.count }} articles</div>
                  <div class="event-time">
                    {{ getRelativeTime(event.computed_time) }}
                  </div>
                </div>
                <div class="event-button">Compare headlines</div>
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
    border-top: 1px solid #444;

    .ratio {
      position: relative;
      height: 0;
      padding-top: 70%;

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
      background-position: bottom 15% center;
      background-size: cover;
      background-color: #e8e8e8;
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
        padding: 1.5rem 1rem 0 1rem;
        background-image: linear-gradient(
          to bottom,
          rgba(#000, 0) 0%,
          rgba(#000, 0.35) 1.5rem,
          rgba(#000, 1) calc(100% - 3.5rem)
        );

        .event-title,
        .event-data {
          width: 100%;
          line-height: 1;
        }

        .event-title {
          margin: 0;
          padding-right: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.1;
          text-shadow: 0px 0px 10px rgba(#000, 0.75);
          color: #fff;
          position: relative;
        }

        .event-data {
          display: flex;
          flex-wrap: wrap;
          // flex-direction: column;
          align-items: center;
          margin-top: 0.75rem;
          border-top: 1px solid #444;
          line-height: 1;
          padding-top: 0.75rem;

          .event-detail {
            display: flex;
            align-items: center;
            line-height: 1.25rem;
            margin-bottom: 1rem;

            .event-count {
              font-size: 0.75rem;
              color: #edbdd3;
              font-weight: 500;
            }

            .event-time {
              font-size: 0.65rem;
              color: #aaa;
              margin-left: 0.5rem;
              font-weight: 400;
              font-style: italic;
              border-left: 1px solid #444;
              padding-left: 0.5rem;
            }
          }

          .event-button {
            background-color: #07f;
            font-size: 0.85rem;
            margin-left: auto;
            margin-bottom: 1rem;
            padding: 1px 2rem 0 1.25rem;
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
}
</style>
