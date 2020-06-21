<template>
  <div @click="$router.push('/events/' + eventUri)" class="card flex">
    <div class="flex">
      <div class="image-ratio">
        <div
          :style="{
            backgroundImage: `linear-gradient(to right, rgba(228, 0, 1, 0.6) 0%, rgba(65, 153, 254, 0.6) 100%), url(${imageUrl})`
          }"
          class="article-image"
        ></div>
      </div>
      <div class="card__body">
        <div class="card__text-wrapper">
          <span class="card__title"> {{ title | trim }} </span>
        </div>
        <span v-if="firstPublish" class="text--italic">First published: {{ firstPublish }}</span
        ><br />
        <div class="flex flex-justify--space-between flex-align--center">
          <span class="articles">{{ articleCount }} articles</span>
          <button
            :to="'/events/' + eventUri"
            @click="$router.push('/events/' + eventUri)"
            class="more-button text--uppercase flex flex-align--center"
          >
            Compare headlines
            <img src="@/assets/svg/small-right-arrow.svg" style="vertical-align: inherit; margin-left: 2px" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileEvent',
  filters: {
    trim(value) {
      if (value.toString().length <= 70) {
        return value
      }
      return value.toString().slice(0, 70) + ' ...'
    }
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    firstPublish: {
      type: String,
      default: ''
    },
    eventUri: {
      type: String,
      default: ''
    },
    articleCount: {
      type: Number,
      default: 0
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
  background: white;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  border-right: none;
  border-left: none;
  border-radius: 0;
  margin-bottom: 10px;

  .image-ratio {
    width: 120px;
    .article-image {
      height: 0;
      padding-top: 120px;
      width: 120px;
      background-position: center center;
      background-size: cover;
      position: relative;
    }
  }

  &--small {
    background: transparent;
    width: 100%;
    border: 1px solid black;
    border-radius: 0;
  }

  &__body {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
  }

  &__image {
    width: 100px;
    height: 80px;
  }

  &__header {
    width: 90%;
  }

  &__title {
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1;
  }

  &__text {
    font-size: 0.8rem;
  }
}
.articles {
  font-size: 0.7rem;
  color: #e50001;
}
</style>
