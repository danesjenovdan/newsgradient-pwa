<template>
  <div class="event-article-preview">
    <div class="image-ratio">
      <div :style="{ backgroundImage: `url(${fixedImageUrl}), url(/missing-image.png)` }" class="article-image"></div>
    </div>
    <div class="article-info">
      <div class="article-medium">
        <div class="medium-brand">
          <img :src="`https://www.google.com/s2/favicons?sz=32&domain_url=${mediumUrl}`" class="favicon" />
          <a :href="mediumUrl" class="medium-name" target="_blank">{{ fixedMediumName }}</a>
        </div>
      </div>
      <div class="article-content">
        <span class="article-title">{{ title }} /</span>
        <span class="article-description">
          {{ content | trim }}
        </span>

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
export default {
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
      default: ''
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
      return `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=334`
    }
  }
}
</script>

<style lang="scss" scoped>
.event-article-preview {
  border: 1px solid #a8a5a9;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #f6f6f6;
  transition: background-color 0.15s ease-in-out;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #fdfdfd;
  }

  .image-ratio {
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
    margin-bottom: 18px;

    .medium-brand {
      flex-shrink: 0;
      display: flex;
      align-items: center;

      .favicon {
        width: 26px;
        height: 26px;
        background-color: #ededed;
      }

      .medium-name {
        margin-left: 0.5rem;
        color: #000;
        font-size: 1rem;
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
    padding: 15px 21px;

    .article-content {
      display: block;
      line-height: 1;

      .article-title {
        display: inline;
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        color: #3f3942;
        line-height: 1.1;
        word-break: break-word;
      }

      .article-description {
        display: inline;
        line-height: 1.3;
        word-break: break-word;
      }

      .read-more {
        display: inline-block;
        color: #07f;
        text-decoration: underline;
        line-height: 1.3;
      }
    }
  }
}
</style>
