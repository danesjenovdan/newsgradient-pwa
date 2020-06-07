<template>
  <div class="flex flex--column">
    <Divider class="w-100" />
    <div :class="{ 'title--small': !isMain }" class="title">
      {{ title }}
    </div>
    <div>
      <span class="date-display">Last published:</span> <span class="date-display__date">{{ lastPublished }}</span>
    </div>
    <div class="articles mt16 mb8">{{ articleCount }} articles</div>
    <div v-if="isMain" class="flex flex-justify--space-between">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :content="article.content"
        :image-url="article.image"
        :source-title="article.medium.title"
        :article-url="article.url"
        class="article-wrapper"
      />
    </div>
    <div v-else class="flex flex--column flex">
      <ArticleCardSmall
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :content="article.content"
        :image-url="article.image"
        :source-title="article.medium.title"
        :article-url="article.url"
        class="article-wrapper"
      />
    </div>
    <div class="w-100 flex flex-justify--end text--uppercase mt16">
      <button class="more-button">
        More Articles <img src="@/assets/svg/small-right-arrow.svg" style="vertical-align: inherit;" />
      </button>
    </div>
  </div>
</template>

<script>
import Divider from './Divider'
import ArticleCard from './ArticleCard'
import ArticleCardSmall from './ArticleCardSmall'
export default {
  name: 'EventWrapper',
  components: { ArticleCardSmall, ArticleCard, Divider },
  props: {
    isMain: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title'
    },
    lastPublished: {
      type: String,
      default: '20 hours ago'
    },
    articleCount: {
      type: Number,
      default: 0
    },
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;

  &--small {
    font-size: 1.8rem;
  }
}
.date-display {
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;

  &__date {
    font-weight: 300;
    font-size: 1rem;
  }
}
.articles {
  font-size: 1rem;
  color: #e50001;
}
</style>
