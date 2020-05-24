<template>
  <div class="item">
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
.item {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;

  &__sub {
    width: calc(100% / 3);
  }
}
</style>
