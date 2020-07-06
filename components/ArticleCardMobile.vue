<template>
  <div class="event-article-preview">
    <Divider />
    <div class="title-section">
      <div class="article-medium">
        <div class="medium-brand">
          <img :src="`https://www.google.com/s2/favicons?sz=32&domain_url=${mediumUrl}`" class="favicon" />
          <a :href="mediumUrl" class="medium-name" target="_blank">{{ fixedMediumName }}</a>
        </div>
      </div>
      <hr />
      <h4 class="article-title">{{ title }}</h4>
    </div>
    <div class="image-ratio">
      <div :style="{ backgroundImage: `url(${fixedImageUrl}), url(/missing-image.png)` }" class="article-image"></div>
    </div>
    <div class="article-info">
      <div class="article-content">
        <div class="article-description">
          {{ content | trim }}
        </div>
        <div>
          <a :href="articleUrl" class="read-more stretched-link" target="_blank">
            Pročitaj više
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from './Divider'
export default {
  name: 'ArticleCardMobile',
  components: { Divider },
  filters: {
    trim(value) {
      return value.toString().slice(0, 150) + ' ...'
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
    }
    // mediumUrl: {
    //   type: String,
    //   default: ''
    // }
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
      return `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=359`
    }
  }
}
</script>

<style lang="scss" scoped>
.event-article-preview {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  .image-ratio {
    margin-bottom: 0.65rem;
    .article-image {
      height: 0;
      padding-top: 56.25%;
      background-position: center center;
      background-size: cover;
      position: relative;
    }
  }
  .article-medium {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .medium-brand {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      .favicon {
        width: 16px;
        height: 16px;
      }
      .medium-name {
        margin-left: 0.5rem;
        color: #000;
        font-size: 12px;
        font-style: italic;
        line-height: 1.25rem;
      }
    }
    .medium-link {
      flex-shrink: 0;
      font-size: 0.65rem;
      color: #07f;
      line-height: 1.25rem;
      margin-left: auto;
      display: inline;
      vertical-align: middle;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .tags {
    margin: 0.75rem 0 0.5rem;
    .tag {
      display: inline-block;
      font-size: 0.75rem;
      background-color: #07f;
      color: #fff;
      padding: 0.25rem 0.5rem;
    }
  }
  .article-info {
    .article-content {
      .article-description {
        display: block;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.2;
        word-break: break-all;
      }
      .read-more {
        font-size: 13px;
        display: inline-block;
        color: #07f;
        text-decoration: underline;
      }
    }
  }
}
.title-section {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
}

.article-title {
  display: block;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #3f3942;
  line-height: 1.2;
  word-break: break-word;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
