<template>
  <div>
    <div class="container--fluid">
      <SubHeader v-if="isMobile">
        <div class="flex flex-align--center">
          <div class="flex--1">
            <img
              @click="$router.push('/')"
              src="@/assets/svg/carousel/right-arrow.svg"
              class="back-button back-button--header"
            />
          </div>
          <div class="flex--5 text--center header--title">{{ $store.state.events.eventTitle }}</div>
          <div class="flex--1"></div>
        </div>
      </SubHeader>
      <Header v-else />
      <div v-if="!isMobile" class="flex flex-align--center flex-justify--center">
        <h1>
          {{ $store.state.events.eventTitle }}
        </h1>
      </div>
      <Divider v-if="!isMobile" />
    </div>
    <div class="mt24">
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

h1 {
  text-align: center;
  font-style: italic;
  margin: 36px 0 25px 0;
  font-weight: 900;
  font-size: 36px;
  color: #3f3942;
  max-width: 60vw;
}
</style>
<script>
import Selector from '../../components/Selector'
import Carousell from '../../components/Carousell'
import SubHeader from '../../components/SubHeader'
import Header from '../../components/Header'
import Divider from '../../components/Divider'
export default {
  components: { Divider, Header, SubHeader, Carousell, Selector },
  computed: {
    isMobile() {
      return this.$store.state.sizing.windowWidth <= 768
    }
  },
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
