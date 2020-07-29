<template>
  <div @click="$router.push('/events/' + eventUri)" class="card flex">
    <div class="flex">
      <div class="image-ratio">
        <div
          :style="{
            backgroundImage: `linear-gradient(to right, rgba(228, 0, 1, 0.6) 0%, rgba(65, 153, 254, 0.6) 100%), url(https://images.weserv.nl/?url=${imageUrl}&w=120&h=120&fit=cover)`
          }"
          class="article-image"
        ></div>
      </div>
      <div class="card__body flex flex--column flex-justify--space-between">
        <div>
          <div class="card__text-wrapper">
            <span class="card__title"> {{ title | trim }} </span>
          </div>
          <span v-if="firstPublish" class="text--italic">First published: </span>{{ firstPublish }}
        </div>
        <div>
          <div class="flex flex-justify--space-between flex-align--center">
            <span class="articles">{{ `${allArticlesCount} ${allArticlesCount === 1 ? 'članak' : 'članaka'}` }}</span>
            <button
              :to="'/events/' + eventUri"
              @click="$router.push('/events/' + eventUri)"
              class="more-button text--uppercase flex flex-align--center"
            >
              Uporedite naslove
              <img src="@/assets/svg/puscica-bela.svg" style="vertical-align: inherit; width: 12px; margin-left: 2px" />
            </button>
          </div>
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
    },
    allArticlesCount: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.$store.dispatch('carousel/setSlant', 2)
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
  font-weight: 300;

  .image-ratio {
    width: 120px;

    .article-image {
      height: 0;
      padding-top: 120px;
      width: 110px;
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
    margin: 10px;
  }

  &__image {
    width: 100px;
    height: 80px;
  }

  &__header {
    width: 90%;
  }

  &__title {
    font-size: 16px;
    font-weight: 900;
    line-height: 1.1;
    color: #3f3942;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding-bottom: 0.18em;
  }

  &__text {
    font-size: 0.8rem;
  }
}

.articles {
  font-size: 12px;
  color: #e50001;
  font-weight: 400;
}
</style>
