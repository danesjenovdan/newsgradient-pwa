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
            <div class="event-article" v-for="n in 3" :key="n">
              <div class="article-medium">
                <img
                  src="https://www.google.com/s2/favicons?domain=cnn.com"
                  alt="medium icon"
                  class="favicon"
                />
                <router-link :to="`/medium/${n}`">
                  See this newshouse on the chart (>)
                </router-link>
              </div>
              <div class="article-content">
                <div class="image-ratio">
                  <div
                    class="article-image"
                    :style="{
                      backgroundImage: `url(${event.image || '/img/washington-placeholder.jpg'})`,
                    }"
                  ></div>
                </div>
                <div class="article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas hic quibusdam
                  voluptatibus, ex alias id quae in voluptas repellendus nesciunt rerum nulla harum
                  quos ullam atque, natus labore eveniet!
                </div>
              </div>
            </div>
          </div>
          <router-link class="event-button" :to="`/event/${event.id}`">MORE ARTICLES</router-link>
        </div>
      </div>
    </div>
    <!-- <router-link :to="`/event/${event.id}`">

    </router-link> -->
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
    ...mapState(['currentEventRange']),
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

          .event-count {
            color: #e00;
            font-size: 1.15rem;
            font-weight: 400;
          }
        }

        .event-article {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid #000;

          .article-medium {
            //
          }

          .article-content {
            display: flex;

            .image-ratio {
              flex-basis: 33.333%;
              flex-shrink: 0;

              .article-image {
                height: 0;
                padding-top: 50%;
                background-position: center center;
                background-size: cover;
                position: relative;
              }
            }
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
            .event-count {
              font-size: 1.35rem;
            }
          }
        }
      }
    }
  }

  // TODO: mobile views
  // .event {
  //   display: flex;
  //   text-decoration: none;
  //   color: inherit;
  //   position: relative;
  //   background: #fff;
  //   box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);
  //   margin-bottom: 0.5rem;

  //   &:last-child {
  //     margin-bottom: 0;
  //   }

  //   .event-image {
  //     flex: 1;
  //     background-position: center center;
  //     background-size: cover;
  //     position: relative;

  //     &::after {
  //       content: '';
  //       display: block;
  //       position: absolute;
  //       width: 100%;
  //       height: 100%;
  //       background-image: linear-gradient(to bottom right, #e60000, #07f);
  //       mix-blend-mode: color;
  //     }
  //   }

  //   .event-content {
  //     flex: 2.25;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: flex-end;
  //     height: 100%;
  //     padding: 0.5rem;

  //     .event-title,
  //     .event-data {
  //       width: 100%;
  //       line-height: 1;
  //     }

  //     .event-title {
  //       margin: 0;
  //       font-size: 0.875rem;
  //       font-weight: 700;
  //       line-height: 1.2;
  //       position: relative;

  //       .event-detail {
  //         display: flex;
  //         align-items: center;
  //         line-height: 1.25rem;

  //         .event-time {
  //           font-size: 0.625rem;
  //           font-weight: 400;
  //         }
  //       }
  //     }

  //     .event-data {
  //       display: flex;
  //       flex-wrap: wrap;
  //       align-items: center;
  //       line-height: 1;
  //       padding-top: 0.5rem;

  //       .event-detail {
  //         display: flex;
  //         align-items: center;
  //         line-height: 1.25rem;

  //         .event-count {
  //           font-size: 0.625rem;
  //           color: #e60000;
  //           font-weight: 500;
  //         }
  //       }

  //     }
  //   }
  // }
}
</style>
