<template>
  <div id="ng-listing">
    <div class="container">
      <div class="row">
        <div :class="['event', { wide: i === 0 }]" v-for="(event, i) in events" :key="event.id">
          <hr class="top-line" />
          <div class="event-content">
            <h3 class="event-title">
              <span class="clamp">{{ event.title }}</span>
              <div class="event-time">
                <em>First published:</em> {{ getRelativeTime(event.computed_time) }}
              </div>
            </h3>
            <div class="event-data">
              <div class="event-count">{{ event.count }} articles</div>
            </div>
            <div class="event-articles">
              <div class="event-article-container" v-for="n in 3" :key="n">
                <ng-article-preview
                  v-if="i === 0"
                  :article-id="event.id"
                  :image="event.image"
                  show-tags
                />
                <ng-article-headline v-else :article-id="event.id" :image="event.image" />
              </div>
            </div>
          </div>
          <router-link class="event-button" :to="`/event/${event.id}`">MORE ARTICLES</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
import { mapState } from 'vuex';
import NgArticleHeadline from '@/components/NgArticleHeadline.vue';
import NgArticlePreview from '@/components/NgArticlePreview.vue';
import { getEvents } from '../requests';

export default {
  components: {
    NgArticleHeadline,
    NgArticlePreview,
  },
  data() {
    return {
      events: [],
    };
  },
  computed: {
    ...mapState(['currentEventRange']),
  },
  async created() {
    this.refreshEvents();
  },
  methods: {
    getRelativeTime(timestamp) {
      return DateTime.fromISO(timestamp).toRelative();
    },
    async refreshEvents() {
      const data = await getEvents(this.currentEventRange);
      this.events = data.results;
    },
  },
};
</script>

<style lang="scss" scoped>
#ng-listing {
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;

    .event {
      padding: 0 1rem;
      flex-basis: 33.333%;

      hr.top-line {
        margin: 2rem 0 1rem;
        height: 5px;
        background: linear-gradient(to right, #07f 0%, #e00 100%);
        border: none;
      }

      .event-button {
        margin-top: 1rem;
        float: right;
        background-color: #07f;
        font-size: 0.95rem;
        font-weight: 900;
        padding: 0.5em 2.25em 0.5em 1em;
        transform: rotate(0.05deg);
        color: #fff;
        border-radius: 10rem;
        background-image: url('../assets/arrow-right-white.svg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 2.5rem 30%;
        text-decoration: none;
      }

      .event-content {
        .event-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 900;
          font-style: italic;

          .clamp {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .event-time {
            margin-top: 0.25rem;
            color: #000;
            font-size: 0.85rem;
            font-weight: 300;
            font-style: normal;

            em {
              font-style: italic;
            }
          }
        }

        .event-data {
          margin-top: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #000;

          .event-count {
            color: #e00;
            font-size: 1.15rem;
            font-weight: 400;
          }
        }

        .event-articles {
          display: flex;
          flex-direction: column;
          margin: 0 -0.5rem;

          .event-article-container {
            flex: 1;
            padding: 0 0.5rem;
          }
        }
      }

      &.wide {
        flex-basis: 66.666%;

        .event-content {
          .event-title {
            font-size: 1.85rem;

            .event-time {
              font-size: 1.15rem;
            }
          }

          .event-data {
            border-bottom: 0;
            padding-bottom: 1rem;

            .event-count {
              font-size: 1.35rem;
            }
          }

          .event-articles {
            flex-direction: row;
          }
        }
      }
    }
  }
}
</style>
