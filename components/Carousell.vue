<template>
  <div class="carousel__container flex flex-justify--center flex-align--center">
    <div class="carousel__subitem carousel__subitem--left">
      <CarousellItem />
    </div>
    <div class="carousel__arrow flex flex-align--center flex-justify--center">
      <img src="@/assets/svg/carousel/left-arrow.svg" />
    </div>
    <div class="carousel__item">
      <CarousellItem />
    </div>
    <div class="carousel__arrow flex flex-align--center flex-justify--center">
      <img src="@/assets/svg/carousel/right-arrow.svg" />
    </div>
    <div class="carousel__subitem carousel__subitem--right">
      <CarousellItem />
    </div>
  </div>
</template>

<script>
import CarousellItem from './CarousellItem'
export default {
  name: 'Carousell',
  components: { CarousellItem }
}
</script>

<style scoped lang="scss">
.carousel {
  &__container {
    width: 100vw;
  }

  &__item {
    position: relative;
  }

  &__subitem {
    position: relative;

    &--left {
      left: 0;
    }
    &--right {
      right: 0;
    }
  }

  &__arrow {
    width: 5vw;
    cursor: pointer;
    position: relative;
  }
}
</style>
