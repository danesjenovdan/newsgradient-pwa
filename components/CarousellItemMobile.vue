<template>
  <div class="item row">
    <div v-for="article in articles" :key="article.id" class="col-12 mb8">
      <ArticleCardMobile
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
import ArticleCardMobile from './ArticleCardMobile'
export default {
  name: 'CarousellItemMobile',
  components: { ArticleCardMobile },
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
