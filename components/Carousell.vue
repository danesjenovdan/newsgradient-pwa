<template>
  <div class="carousel__container flex flex-justify--center flex-align--center">
    <div v-if="this.$store.state.carousel.selectedItem !== 1" class="carousel__subitem carousel__item--left">
      <CarousellItem />
    </div>
    <div @click="decrement" class="carousel__arrow">
      <img src="@/assets/svg/carousel/left-arrow.svg" />
    </div>
    <div class="carousel__item">
      <CarousellItem />
    </div>
    <div @click="increment" class="carousel__arrow">
      <img src="@/assets/svg/carousel/right-arrow.svg" />
    </div>
    <div v-if="this.$store.state.carousel.selectedItem !== 5" class="carousel__subitem carousel__item--right">
      <CarousellItem />
    </div>
  </div>
</template>

<script>
import CarousellItem from './CarousellItem'

export default {
  name: 'Carousell',
  components: { CarousellItem },
  methods: {
    decrement() {
      this.$store.commit('carousel/DECREMENT_ITEM')
    },
    increment() {
      this.$store.commit('carousel/INCREMENT_ITEM')
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  &__container {
    position: relative;
  }

  &__subitem {
    width: 65vw;
    position: absolute;
    opacity: 0.3;
  }

  &__item {
    width: 65vw;

    &--left {
      left: -55vw;
    }

    &--right {
      right: -55vw;
    }
  }

  &__arrow {
    width: 5vw;
    cursor: pointer;

    img {
      position: fixed;
      top: 45%;
    }
  }
}
</style>
