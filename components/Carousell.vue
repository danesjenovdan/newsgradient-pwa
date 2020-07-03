<template>
  <div class="carousel__container flex flex-justify--center flex-align--center">
    <template v-if="!isMobile">
      <div v-if="this.$store.state.carousel.selectedSlant !== 1" class="carousel__subitem carousel__item--left">
        <CarousellItem
          :articles="getArticles(this.$store.state.carousel.selectedSlant - 1)"
          class="carousel-item-selector"
        />
      </div>
      <div @click="decrement" class="carousel__arrow carousel__arrow--left">
        <img
          v-if="this.$store.state.carousel.selectedSlant !== 1"
          src="@/assets/svg/carousel/right-arrow.svg"
          class="back-button"
        />
        <span v-if="this.$store.state.carousel.selectedSlant !== 1">
          {{ getLeftArrowText }}
        </span>
      </div>
      <div :class="{ 'carousel__item--empty': noArticles }" class="carousel__item">
        <CarousellItem
          :articles="getArticles(this.$store.state.carousel.selectedSlant)"
          class="carousel-item-selector"
        />
      </div>
      <div @click="increment" class="carousel__arrow carousel__arrow--right">
        <img
          v-if="this.$store.state.carousel.selectedSlant !== 3"
          src="@/assets/svg/carousel/right-arrow.svg"
          alt="arrow"
        />
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
        <CarousellItemMobile
          :articles="getArticles(this.$store.state.carousel.selectedSlant)"
          class="carousel-item-selector"
        />
      </div>
    </template>
  </div>
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
    }
  },
  methods: {
    decrement() {
      this.$store.commit('carousel/DECREMENT_ITEM')
    },
    increment() {
      this.$store.commit('carousel/INCREMENT_ITEM')
    },
    getArticles(slant) {
      if (slant - 1 < 1 || slant + 1 > 3) {
        return []
      }
      return this.$store.state.events.articles[slant]
    }
  }
}
</script>

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
  }

  &__item {
    width: 60vw;
    @media (max-width: $medium) {
      width: 90%;
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
    width: 60px;
    cursor: pointer;
    margin: 25px;
    text-align: center;
    position: fixed;
    top: 45%;

    &--left {
      left: 14%;
    }

    &--right {
      right: 14%;
    }

    img {
      width: 60px;
      margin-bottom: 5px;
    }

    span {
      font-weight: 700;
      font-style: italic;
    }
  }
}
</style>
