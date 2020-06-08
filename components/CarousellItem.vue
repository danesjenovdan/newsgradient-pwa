<template>
  <div class="item row">
    <div v-for="article in articles" :key="article.id" class="col-4 mb8">
      <ArticleCard
        :title="article.title"
        :content="article.content"
        :image-url="article.image"
        :source-title="article.medium.title"
        :article-url="article.url"
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
</style>
