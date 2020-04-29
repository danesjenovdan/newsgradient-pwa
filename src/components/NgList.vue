<template>
  <div id="events">
    <router-link
      v-for="event in events"
      :key="event.id"
      :to="`/event/${event.id}`"
      class="event"
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
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';
import { mapState } from 'vuex';
import { getEvents } from '../requests';

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
    ]),
  },

  async created() {
    // @ts-ignore
    this.refreshEvents();
  },

  methods: {
    getRelativeTime(timestamp) {
      return DateTime.fromISO(timestamp).toRelative();
    },
    async refreshEvents() {
      // @ts-ignore
      const data = await getEvents(this.currentEventRange);
      // @ts-ignore
      this.events = data.results;
    },
  },
})

export default class NgList extends Vue {}
</script>

<style lang="scss" scoped>
#events {
  width: 100%;
  background-color: #e8e8e8;
  padding: 0.5rem;

  .event {
    display: flex;
    text-decoration: none;
    color: inherit;
    position: relative;
    background: #fff;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .event-image {
      flex: 1;
      background-position: center center;
      background-size: cover;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom right, #e60000, #07f);
        mix-blend-mode: color;
      }
    }

    .event-content {
      flex: 2.25;
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
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.2;
        position: relative;

        .clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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
        align-items: center;
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
          font-size: 0.625rem;
          margin-left: auto;
          padding: 0 1.75rem 0 0.75rem;
          transform: rotate(0.05deg);
          color: #fff;
          text-transform: uppercase;
          line-height: 1.5rem;
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
