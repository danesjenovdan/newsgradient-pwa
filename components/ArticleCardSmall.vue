<template>
  <div :class="{ 'card--one': onlyOne }" class="card flex">
    <div class="flex flex-justify--space-between flex-align--center card__header">
      <div class="medium-brand">
        <img :src="`https://www.google.com/s2/favicons?sz=32&domain_url=${mediumUrl}`" class="favicon" />
        <a :href="mediumUrl" class="medium-name" target="_blank">{{ fixedMediumName }}</a>
      </div>
    </div>
    <div class="flex">
      <div class="image-ratio">
        <div :style="{ backgroundImage: `url(${fixedImageUrl}), url(/missing-image.png)` }" class="article-image"></div>
      </div>
      <div class="card__body">
        <div class="card__text-wrapper">
          <span class="card__title">{{ title }} /</span>
        </div>
        <a :href="articleUrl" target="_blank" class="read-more stretched-link">Pročitaj više</a>
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
    },
    faviconUrl: {
      type: String,
      default: ''
    },
    mediumName: {
      type: String,
      default: ''
    },
    // mediumUrl: {
    //   type: String,
    //   default: ''
    // },
    onlyOne: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mediumUrl() {
      return this.articleUrl.slice(0, this.articleUrl.indexOf('/', this.articleUrl.indexOf('://') + 3))
    },
    fixedMediumName() {
      return this.mediumName.replace('Oslobo?enje', 'Oslobođenje')
    },
    fixedImageUrl() {
      let imageUrl = this.imageUrl
      if (imageUrl.includes('balkans.aljazeera.net') || imageUrl.includes('federalna.ba')) {
        imageUrl = imageUrl.replace('https://', 'http://')
      }
      return `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=194`
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: transparent;
  width: 100%;
  height: 55%;
  text-overflow: ellipsis;
  border-bottom: 1px solid #a8a5a9;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  background-color: #f6f6f6;
  transition: background-color 0.15s;

  &:hover {
    background-color: #fbfbfb;
  }

  // &--one {
  //   border: none;
  // }

  .image-ratio {
    width: 60%;

    .article-image {
      height: 0;
      padding-top: 56.25%;
      background-position: center center;
      background-size: cover;
      position: relative;
    }
  }

  &:first-child {
    border-top: 1px solid #a8a5a9;
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
    line-height: 1;
  }

  &__image {
    width: 100px;
    height: 80px;
  }

  &__header {
    width: 90%;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #3f3942;
    line-height: 1.1;
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

.medium-brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  .favicon {
    width: 26px;
    height: 26px;
  }

  .medium-name {
    margin-left: 0.5rem;
    color: #000;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.25rem;
  }
}

.read-more {
  display: inline-block;
  color: #07f;
  text-decoration: underline;
  line-height: 1.3;
}
</style>
