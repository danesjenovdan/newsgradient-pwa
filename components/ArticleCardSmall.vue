<template>
  <div class="card flex">
    <div class="flex flex-justify--space-between flex-align--center card__header">
      <span class="text--italic">{{ sourceTitle }}</span>
      <span class="text--italic">See this newshouse on the chart</span>
    </div>
    <div class="flex">
      <img :src="imageUrl" class="card__image" />
      <div class="card__body">
        <div class="card__text-wrapper">
          <span class="card__title">
            {{ title }}
          </span>
          <a :href="articleUrl">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCardSmall',
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    sourceTitle: {
      type: String,
      default: 'NewsHouse'
    },
    articleUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    setLogo() {
      return {
        /* LOGO */
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: transparent;
  width: 100%;
  height: 33%;
  text-overflow: ellipsis;
  overflow: hidden;
  border-bottom: 1px solid black;
  border-right: none;
  border-left: none;
  border-radius: 0;
  &:first-child {
    border-top: 1px solid black;
  }

  &--small {
    background: transparent;
    width: 100%;
    border: 1px solid black;
    border-radius: 0;
  }

  &__body {
    width: 90%;
  }

  &__image {
    width: 40%;
  }

  &__header {
    width: 90%;
  }

  &__title {
    font-size: 1rem;
    font-weight: bold;
  }

  &__text-wrapper {
  }

  &__text {
    font-size: 0.8rem;
  }
}
</style>
