<template>
  <div class="container">
    <div>
      <div class="section-title">
        <p>Trump’s impeachment speech comments</p>
      </div>
      <div class="section-line"></div>
      <div class="row">
        <div class="column">
          <div class="side-column">
            Some Text in Column One
          </div>
        </div>
        <div class="column">
          <div class="main-column">
            Some Text in Column Two
          </div>
        </div>
        <div class="column">
          <div class="side-column">
            Some Text in Column Three
          </div>
        </div>
      </div>
    </div>
    <Selector />
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
  width: 1923px;
  height: 5px;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
}
</style>
<script>
import Selector from '../components/Selector'
export default {
  components: { Selector }
}
</script>
