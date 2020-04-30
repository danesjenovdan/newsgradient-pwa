<template>
  <div class="event-article-headline">
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
    <div class="article-info">
      <div class="image-ratio">
        <div
          class="article-image"
          :style="{ backgroundImage: `url(${image || '/img/washington-placeholder.jpg'})` }"
        ></div>
      </div>
      <div class="article-content">
        <div class="tags">
          <div class="tag">FACT REPORTING AND ANALISYS</div>
        </div>
        <h4 class="article-title">Lorem ipsum dolor sit amet</h4>
        <router-link class="read-more" :to="`/event/${articleId}`">
          Read more
        </router-link>
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
  },
};
</script>

<style lang="scss" scoped>
.event-article-headline {
  padding-top: 0.75rem;
  border-bottom: 1px solid #000;

  .article-medium {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .medium-brand {
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
      font-size: 0.65rem;
      color: #07f;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .article-info {
    display: flex;

    .image-ratio {
      flex-basis: 33.333%;
      flex-shrink: 0;

      .article-image {
        height: 0;
        padding-top: 56.25%;
        background-position: center center;
        background-size: cover;
        position: relative;
      }
    }

    .article-content {
      margin-left: 1rem;

      .tags {
        display: flex;
        margin-bottom: 0.25rem;

        .tag {
          display: inline-block;
          font-size: 0.65rem;
          background-color: #07f;
          color: #fff;
          padding: 0.25rem 0.5rem;
        }
      }

      .article-title {
        display: inline;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;

        &::after {
          content: ' /\a0';
        }
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
