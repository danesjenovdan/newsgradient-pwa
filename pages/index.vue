<template>
  <div class="container--fluid flex flex-align--center flex-justify--center">
    <div class="container-landing ">
      <div v-if="!isMobile" class="col-md-3 mt16 mb16">
        <TimingSelect @change="timerangeChanged" />
      </div>
      <div v-else class="description-container">
        5 most reported events by Bosnian<br />
        press sorted by the partisan bias.
      </div>
      <div v-if="!isMobile" class="flex flex--wrap">
        <div
          v-for="(event, index) in topEvents"
          :key="event.id"
          v-if="event.articles.length"
          class="col-lg-8 col-12 mb40"
        >
          <EventWrapper
            v-if="event.articles.length"
            :title="event.title"
            :articles="event.articles"
            :article-count="event.articleCount"
            :event-uri="event.id"
            :is-main="index === 0"
            :first-publish="event.firstPublish"
          />
        </div>
        <div v-for="event in otherEvents" :key="event.id" v-if="event.articles.length" class="col-lg-4 col-12">
          <EventWrapper
            :title="event.title"
            :articles="event.articles"
            :is-main="false"
            :event-uri="event.id"
            :article-count="event.articleCount"
            :first-publish="event.firstPublish"
          />
        </div>
      </div>
      <div v-else>
        <div v-for="ev in allEvents" :key="ev.title">
          <MobileEvent
            v-if="ev.articles.length"
            :title="ev.title"
            :image-url="ev.image"
            :first-publish="ev.firstPublish"
            :article-count="ev.articleCount"
            :event-uri="ev.id"
          />
        </div>
      </div>
    </div>
    <div v-if="!isMobile">
      <Selector @change="slantChanged" />
    </div>
  </div>
</template>

<script>
import EventWrapper from '../components/EventWrapper'
import Selector from '../components/Selector'
import TimingSelect from '../components/TimingSelect'
import MobileEvent from '../components/MobileEvent'
export default {
  components: { MobileEvent, TimingSelect, Selector, EventWrapper },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    topEvents() {
      return this.$store.state.events.topEvents.slice(0, 1)
    },
    allEvents() {
      return this.$store.state.events.topEvents
    },
    otherEvents() {
      return this.$store.state.events.topEvents.slice(1)
    },
    currentSlant() {
      return this.$store.state.carousel.selectedSlant
    },
    currentTimerange() {
      return this.$store.state.events.timerange
    },
    isMobile() {
      return this.windowWidth <= 768
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
    window.addEventListener('resize', this.calcWidth)
    const params = { slant: this.$store.state.carousel.selectedSlant, timerange: this.$store.state.events.timerange }
    this.getEvents(params)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcWidth)
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
    },
    calcWidth() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/style/variables';

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

.timing-container {
  display: none;
  @media (min-width: $medium) {
    display: block;
  }
}

.description-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
