<template>
  <div class="container">
    <div>
      <div class="section-title">
        <p>Trump’s impeachment speech comments</p>
      </div>
      <div class="section-line"></div>
    </div>
    <b-row>
      <b-col>
        <ArticleCard />
      </b-col>
      <b-col>
        <ArticleCard />
      </b-col>
      <b-col>
        <ArticleCard />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Selector />
      </b-col>
    </b-row>
  </div>
</template>

<style>
.section-title {
  text-align: center;
  margin: 1.5rem 0;
  font-size: 40px;
  font-weight: 400;
  line-height: 35px;
}
.section-line {
  /*width: 1923px;*/
  height: 5px;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);
}
</style>
<script>
import Selector from '../components/Selector'
import ArticleCard from '../components/ArticleCard'
export default {
  components: { ArticleCard, Selector }
}
</script>
