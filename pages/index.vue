<template>
  <div>
    <div class="container content-wrapper">
      <div>
        <div class="section-title">
          <p>Trump’s impeachment speech comments</p>
        </div>
        <div class="section-line"></div>
      </div>
      <b-row>
        <b-col sm="12" md="6" lg="4">
          <ArticleCard />
        </b-col>
        <b-col sm="12" md="6" lg="4">
          <ArticleCard />
        </b-col>
        <b-col sm="12" md="6" lg="4">
          <ArticleCard />
        </b-col>
      </b-row>
    </div>
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
  height: 5px;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);
}

.content-wrapper {
  margin-bottom: 15vh;
}
</style>
<script>
import Selector from '../components/Selector'
import ArticleCard from '../components/ArticleCard'
export default {
  components: { ArticleCard, Selector }
}
</script>
