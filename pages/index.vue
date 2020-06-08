<template>
  <div class="container--fluid flex flex-align--center flex-justify--center">
    <div class="container-landing ">
      <div class="col-2 mt16 mb16">
        <TimingSelect @change="timerangeChanged" />
      </div>
      <div class="flex flex--wrap">
        <div v-for="(event, index) in topEvents" :key="event.id" class="col-lg-8 col-12 mb40">
          <EventWrapper
            :title="event.title"
            :articles="event.articles"
            :article-count="event.articleCount"
            :event-uri="event.id"
            :is-main="index === 0"
          />
        </div>
        <div v-for="event in otherEvents" :key="event.id" class="col-lg-4 col-12">
          <EventWrapper
            :title="event.title"
            :articles="event.articles"
            :is-main="false"
            :event-uri="event.id"
            :article-count="event.articleCount"
          />
        </div>
      </div>
    </div>
    <div>
      <Selector @change="slantChanged" />
    </div>
  </div>
</template>

<script>
import EventWrapper from '../components/EventWrapper'
import Selector from '../components/Selector'
import TimingSelect from '../components/TimingSelect'
export default {
  components: { TimingSelect, Selector, EventWrapper },
  computed: {
    topEvents() {
      return this.$store.state.events.topEvents.slice(0, 1)
    },
    otherEvents() {
      return this.$store.state.events.topEvents.slice(1)
    },
    currentSlant() {
      return this.$store.state.carousel.selectedSlant
    },
    currentTimerange() {
      return this.$store.state.events.timerange
    }
  },
  watch: {
    currentSlant() {
      const params = { slant: this.$store.state.carousel.selectedSlant, timerange: this.$store.state.events.timerange }
      this.getEvents(params)
    },
    currentTimerange() {
      const params = { slant: this.$store.state.carousel.selectedSlant, timerange: this.$store.state.events.timerange }
      this.getEvents(params)
    }
  },
  mounted() {
    const params = { slant: this.$store.state.carousel.selectedSlant, timerange: this.$store.state.events.timerange }
    this.getEvents(params)
  },
  methods: {
    getEvents(params) {
      this.$store.dispatch('events/getTopEvents', params)
    },
    timerangeChanged(value) {
      this.$store.dispatch('events/setTimerange', value)
    },
    slantChanged(slant) {
      this.$store.dispatch('carousel/setSlant', slant)
    }
  }
}
</script>
<style scoped lang="scss">
.container-landing {
  width: 90%;
  margin-bottom: 15vh;
}
.large-container {
  width: 66%;
}

.small-container {
  width: 33%;
}
</style>
