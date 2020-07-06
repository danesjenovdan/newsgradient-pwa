<template>
  <transition :name="slideDirection ? 'slide-left' : 'slide-right'">
    <div :key="selectedSlantString" class="carousel__container flex flex-justify--center flex-align--center">
      <template v-if="!isMobile">
        <div v-if="this.$store.state.carousel.selectedSlant !== 1" class="carousel__subitem carousel__item--left">
          <CarousellItem
            :articles="getArticles(this.$store.state.carousel.selectedSlant - 1)"
            class="carousel-item-selector"
          />
        </div>
        <div @click="decrement" class="carousel__arrow carousel__arrow--left">
          <svg
            v-if="this.$store.state.carousel.selectedSlant !== 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3.1 3.1 93.8 93.8"
          >
            <defs>
              <linearGradient
                id="6c9a0"
                x1="3.1"
                x2="96.9"
                y1="52"
                y2="52"
                gradientTransform="rotate(180 50 51)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#0177ff" />
                <stop offset="1" stop-color="#e50001" />
              </linearGradient>
            </defs>
            <g fill="url(#6c9a0)" class="arrow-icon-color">
              <path
                d="M3.1 50A46.9 46.9 0 1150 96.9 46.9 46.9 0 013.1 50zm6.3 0A40.6 40.6 0 1050 9.4 40.6 40.6 0 009.4 50z"
              />
              <path d="M36.2 50l24.9-24.8 4.3 4.3-24.8 24.9z" />
              <path d="M40.6 45.6L45 50l20.5 20.4-4.4 4.4-20.5-20.4-4.4-4.4 4.4-4.4z" />
            </g>
          </svg>
          <span v-if="this.$store.state.carousel.selectedSlant !== 1">
            {{ getLeftArrowText }}
          </span>
        </div>
        <div :class="{ 'carousel__item--empty': noArticles }" class="carousel__item">
          <template v-if="noArticles">
            <div class="flex flex--column flex-justify--center flex-align--center empty__holder--main">
              <img src="@/assets/svg/missing-icon.svg" class="missing-icon" />
              <span class="empty__text">Ni jedan {{ selectedSlantString }} medij nije izvijestio o ovom dogadjaju.</span>
            </div>
          </template>
          <CarousellItem
            v-else
            :articles="getArticles(this.$store.state.carousel.selectedSlant)"
            class="carousel-item-selector"
          />
        </div>
        <div @click="increment" class="carousel__arrow carousel__arrow--right">
          <svg
            v-if="this.$store.state.carousel.selectedSlant !== 3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3.1 3.1 93.8 93.8"
            transform="scale(-1 1)"
          >
            <defs>
              <linearGradient
                id="adf5b"
                x1="3.1"
                x2="96.9"
                y1="52"
                y2="52"
                gradientTransform="rotate(180 50 51)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#0177ff" />
                <stop offset="1" stop-color="#e50001" />
              </linearGradient>
            </defs>
            <g fill="url(#adf5b)" class="arrow-icon-color">
              <path
                d="M3.1 50A46.9 46.9 0 1150 96.9 46.9 46.9 0 013.1 50zm6.3 0A40.6 40.6 0 1050 9.4 40.6 40.6 0 009.4 50z"
              />
              <path d="M36.2 50l24.9-24.8 4.3 4.3-24.8 24.9z" />
              <path d="M40.6 45.6L45 50l20.5 20.4-4.4 4.4-20.5-20.4-4.4-4.4 4.4-4.4z" />
            </g>
          </svg>
          <span v-if="this.$store.state.carousel.selectedSlant !== 3">
            {{ getRightArrowText }}
          </span>
        </div>
        <div v-if="this.$store.state.carousel.selectedSlant !== 3" class="carousel__subitem carousel__item--right">
          <CarousellItem
            :articles="getArticles(this.$store.state.carousel.selectedSlant + 1)"
            class="carousel-item-selector-item"
          />
        </div>
      </template>
      <template v-else>
        <div class="carousel__item">
          <template v-if="noArticles">
            <div class="flex flex--column flex-justify--center flex-align--center empty__holder--main">
              <img src="@/assets/svg/missing-icon.svg" class="missing-icon" />
              <span class="empty__text">Ni jedan {{ selectedSlantString }} medij nije izvijestio o ovom dogadjaju.</span>
            </div>
          </template>
          <CarousellItemMobile
            :articles="getArticles(this.$store.state.carousel.selectedSlant)"
            class="carousel-item-selector"
          />
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import { SLANTS } from '../constants'
import CarousellItem from './CarousellItem'
import CarousellItemMobile from './CarousellItemMobile'

export default {
  name: 'Carousell',
  components: { CarousellItemMobile, CarousellItem },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slideDirection: false
    }
  },
  computed: {
    calculateMainHeight() {
      const carouselItems = document.getElementsByClassName('carousel-item-selector')
      let height = 0
      Array.from(carouselItems).forEach((elem) => {
        const box = elem.getBoundingClientRect()
        if (box.height > height) {
          height = box.height
        }
      })
      return height
    },
    getLeftArrowText() {
      return SLANTS[this.$store.state.carousel.selectedSlant - 1]
    },
    getRightArrowText() {
      return SLANTS[this.$store.state.carousel.selectedSlant + 1]
    },
    noArticles() {
      const slant = this.$store.state.carousel.selectedSlant
      if (!this.$store.state.events.articles[slant]) {
        return false
      }
      return this.$store.state.events.articles[slant].length === 0
    },
    selectedSlantString() {
      const slant = this.$store.state.carousel.selectedSlant
      return slant === 2 ? 'neutralan' : slant < 2 ? 'lijevo orijentiran' : 'desno orijentiran'
    }
  },
  methods: {
    decrement() {
      this.slideDirection = false
      this.$store.commit('carousel/DECREMENT_ITEM')
    },
    increment() {
      this.slideDirection = true
      this.$store.commit('carousel/INCREMENT_ITEM')
    },
    getArticles(slant) {
      // if (slant - 1 < 1 || slant + 1 > 3) {
      //   return []
      // }
      return this.$store.state.events.articles[slant]
    }
  }
}
</script>

<style>
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave,
.slide-left-leave {
  opacity: 0;
}

.slide-left-enter-active,
.slide-right-enter-active {
  opacity: 1;
  transition: all 0.15s cubic-bezier(0.19, 1, 0.22, 1);
}

/* .slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
} */
</style>

<style scoped lang="scss">
@import '@/assets/style/variables';

.carousel {
  &__container {
    position: relative;
    overflow: hidden;
    margin-bottom: 15vh;
  }

  &__subitem {
    width: 65vw;
    position: absolute;
    opacity: 0.3;
    top: 0;

    &,
    & /deep/ *,
    & /deep/ .stretched-link::after {
      pointer-events: none !important;
    }
  }

  &__item {
    width: 60vw;

    @media (max-width: $medium) {
      width: auto;
      padding: 0 8px;
    }

    &--left {
      left: -60vw;
      overflow: hidden;
      @media (max-width: $large) {
        left: -68vw;
      }
    }

    &--right {
      right: -60vw;
      overflow: hidden;
      @media (max-width: $large) {
        right: -68vw;
      }
    }

    &--empty {
      height: 100vh;
    }
  }

  &__arrow {
    cursor: pointer;
    margin: 25px;
    position: fixed;
    top: 45%;

    &--left {
      text-align: right;
      right: 80%;
    }

    &--right {
      left: 80%;
    }

    svg {
      width: 60px;
      margin-bottom: 5px;
    }

    span {
      display: block;
      font-weight: 700;
      font-style: italic;
      text-align: center;
    }

    &:not(:hover) {
      svg .arrow-icon-color {
        fill: #0177ff;
      }
    }
  }
}

.empty {
  &__holder {
    margin-top: 40%;
    &--main {
      margin-top: 22%;
    }
  }

  &__wrapper {
    height: 100%;
    // border-top: 1px solid black;
  }

  &__text {
    margin-top: 8px;
    font-weight: 300;
    font-style: italic;
    font-size: 22px;
    max-width: 350px;
    text-align: center;
    line-height: 1.1;
    padding-bottom: 0.18em;
  }
}

.missing-icon {
  width: 70px;
}
</style>
