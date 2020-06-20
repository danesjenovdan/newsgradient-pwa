<template>
  <div class="event-article-preview">
    <div class="image-ratio">
      <div :style="{ backgroundImage: `url(${imageUrl})` }" class="article-image"></div>
    </div>
    <div class="article-info">
      <div class="article-medium">
        <div class="medium-brand">
          <img :src="faviconUrl" alt="" class="favicon" />
          <a :href="'https://' + mediumUrl" class="medium-name" target="_blank">{{ mediumName }}</a>
        </div>
      </div>
      <div class="article-content">
        <h4 class="article-title">{{ title }}</h4>
        <div class="article-description">
          {{ content | trim }}
        </div>
        <div>
          <a :href="articleUrl" class="read-more" target="_blank">
            Read more
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
      return value.toString().slice(0, 220) + ' ...'
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
    },
    mediumUrl: {
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
.event-article-preview {
  border: 1px solid #3f3942;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 0.15s;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #fbfbfb;
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
    margin-bottom: 0.5rem;
    .medium-brand {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      .favicon {
        width: 1.25rem;
        height: 1.25rem;
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
    padding: 0 0.65rem 0.65rem;
    .article-content {
      .article-title {
        display: block;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: #3f3942;
        line-height: 1;
        &::after {
          content: ' /\a0';
        }
      }
      .article-description {
        display: block;
        line-height: 1.3;
      }
      .read-more {
        display: inline-block;
        color: #07f;
        text-decoration: underline;
      }
    }
  }
}
</style>
