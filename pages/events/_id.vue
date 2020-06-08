<template>
  <div>
    <div class="content-wrapper">
      <div class="container--width">
        <div>
          <div class="section-title">
            <p>Trump’s impeachment speech comments</p>
          </div>
        </div>
        <div class="section-line mb24"></div>
      </div>
    </div>
    <div>
      <Carousell />
    </div>
    <b-row>
      <b-col>
        <Selector @change="slantChanged" />
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
  width: 100vw;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);
}

.content-wrapper {
  margin-bottom: 5vh;
}
</style>
<script>
import Selector from '../../components/Selector'
import Carousell from '../../components/Carousell'
export default {
  components: { Carousell, Selector },
  mounted() {
    this.$store.dispatch('events/getEventArticles', { eventId: this.$route.params.id })
  },
  methods: {
    slantChanged(slant) {
      this.$store.dispatch('carousel/setSlant', slant)
    }
  }
}
</script>
