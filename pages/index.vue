<template>
  <div class="container--fluid flex flex-align--center flex-justify--center flex--column">
    <Header />
    <div class="container-landing ">
      <div v-if="isMobile" class="description-container">
        Pet najaktuelnijih vijesti u izvještajima bosanskohercegovačkih medija, poredanih po ideološkoj orijentaciji
      </div>
      <div v-if="!isMobile" class="flex flex--wrap">
        <div v-for="(event, index) in topEvents" :key="event.id" class="col-xl-8 col-12 mb30">
          <EventWrapper
            :title="event.title"
            :articles="event.articles"
            :article-count="event.articleCount"
            :all-articles-count="event.allArticlesCount"
            :event-uri="event.id"
            :is-main="index === 0"
            :first-publish="event.firstPublish"
          />
        </div>
        <div v-for="event in otherEvents" :key="event.id" class="col-xl-4 col-lg-6 col-12 mb30">
          <EventWrapper
            :title="event.title"
            :articles="event.articles"
            :is-main="false"
            :event-uri="event.id"
            :article-count="event.articleCount"
            :all-articles-count="event.allArticlesCount"
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
            :all-articles-count="ev.allArticlesCount"
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
import MobileEvent from '../components/MobileEvent'
import Header from '../components/Header'
export default {
  components: { Header, MobileEvent, Selector, EventWrapper },
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
      return this.$store.state.sizing.windowWidth <= 768
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
@import '@/assets/style/variables';

.container-landing {
  width: 90%;
  margin-bottom: 100px;
  margin-top: 80px;

  @media (max-width: $medium) {
    margin-top: 0;
    margin-bottom: 80px;
    width: auto;
    padding: 0 8px;
  }
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
  line-height: 1.1;

  @media (max-width: $medium) {
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
