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
    },
    selectedSlantString() {
      const slant = this.$store.state.carousel.selectedSlant
      return slant === 2 ? 'neutralan' : slant < 2 ? 'lijevo orijentiran' : 'desno orijentiran'
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
      // if (slant - 1 < 1 || slant + 1 > 3) {
      //   return []
      // }
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

    &,
    & /deep/ *,
    & /deep/ .stretched-link::after {
      pointer-events: none !important;
    }
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

    img {
      width: 60px;
      margin-bottom: 5px;
    }

    span {
      display: block;
      font-weight: 700;
      font-style: italic;
      text-align: center;
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
  }
}

.missing-icon {
  width: 70px;
}
</style>
