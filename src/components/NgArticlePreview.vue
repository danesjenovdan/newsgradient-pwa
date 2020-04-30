<template>
  <div class="event-article-preview">
    <div class="image-ratio">
      <div
        class="article-image"
        :style="{ backgroundImage: `url(${image || '/img/washington-placeholder.jpg'})` }"
      ></div>
    </div>
    <div class="article-info">
      <div class="article-medium">
        <div class="medium-brand">
          <img
            src="https://www.google.com/s2/favicons?domain=cnn.com"
            alt="medium icon"
            class="favicon"
          />
          <span class="medium-name">CNN.com</span>
        </div>
        <router-link class="medium-link" :to="`/medium/TODO`">
          See this newshouse on the chart (>)
          <!-- TODO: replace (>) with icon -->
        </router-link>
      </div>
      <div v-if="showTags" class="tags">
        <div class="tag">FACT REPORTING AND ANALISYS</div>
      </div>
      <div class="article-content">
        <h4 class="article-title">Lorem ipsum dolor sit amet</h4>
        <div class="article-description">
          Consectetur adipisicing elit. Ipsam assumenda, error illo quibusdam animi fugiat debitis.
          Eius vitae dolor totam iure quasi. Et, accusantium est magni aspernatur sapiente
          distinctio aperiam.
        </div>
        <div>
          <router-link class="read-more" :to="`/event/${articleId}`">
            Read more
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleId: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    showTags: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.event-article-preview {
  border: 1px solid #3f3942;
  height: 100%;

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

  // TODO: this is copied in multiple places; extract to own component
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
        display: inline;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;

        &::after {
          content: ' /\a0';
        }
      }

      .article-description {
        display: inline;
      }

      .read-more {
        display: inline-block;
        color: #07f;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
