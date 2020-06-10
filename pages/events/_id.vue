<template>
  <div>
    <div class="content-wrapper">
      <div class="container--width">
        <div>
          <div>
            <h1 class="section-title">{{ $store.state.events.eventTitle }}</h1>
          </div>
        </div>
        <div class="section-line mb24"></div>
      </div>
    </div>
    <div>
      <Carousell :is-mobile="isMobile" />
    </div>
    <b-row>
      <b-col>
        <Selector @change="slantChanged" />
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables';

.section-title {
  text-align: center;
  margin: 1.5rem 0;
  font-size: 40px;
  font-weight: 400;
  line-height: 35px;

  @media (max-width: $medium) {
    font-size: 1.5rem;
    line-height: unset;
  }
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
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    }
  },
  mounted() {
    window.addEventListener('resize', this.calcWidth)
    this.$store.dispatch('events/getEventArticles', { eventId: this.$route.params.id })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcWidth)
  },
  methods: {
    slantChanged(slant) {
      this.$store.dispatch('carousel/setSlant', slant)
    },
    calcWidth() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
