<template>
  <div class="item">
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
    <ArticleCard class="item__sub" />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
  name: 'CarousellItem',
  components: { ArticleCard }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__sub {
    width: calc(90% / 3);

    @media (max-width: $medium) {
      width: calc(90% / 2);
    }
  }
}
</style>
