<template>
  <div class="item row">
    <div v-for="article in articles" :key="article.id" class="col-lg-4 col-md-6 article-card-wrapper">
      <ArticleCard
        :title="article.title"
        :content="article.content"
        :image-url="article.image"
        :source-title="article.medium.title"
        :article-url="article.url"
        :favicon-url="article.medium.favicon"
        :medium-name="article.medium.title"
        class="item__sub"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
  name: 'CarousellItem',
  components: { ArticleCard },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.item {
  overflow: hidden;
}

.article-card-wrapper {
  margin-bottom: 16px;
  padding-right: 8px;
  padding-left: 8px;
}
</style>
