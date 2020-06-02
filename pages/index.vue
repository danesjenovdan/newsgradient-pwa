<template>
  <div class="flex flex-align--center flex-justify--center">
    <div class="container-landing ">
      <div class="mt16 mb16">
        Select component
      </div>
      <div class="flex flex--wrap">
        <div
          v-for="(event, index) in topEvents"
          :key="event.id"
          :class="{ 'large-container': index === 0, 'small-container': index > 0 }"
        >
          <EventWrapper :title="event.title" :articles="event.articles" :is-main="index === 0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventWrapper from '../components/EventWrapper'
export default {
  components: { EventWrapper },
  computed: {
    topEvents() {
      return this.$store.state.events.topEvents
    }
  },
  mounted() {
    this.$store.dispatch('events/getTopEvents')
  }
}
</script>
<style scoped>
.container-landing {
  width: 90%;
}
.large-container {
  width: 66%;
}

.small-container {
  width: 33%;
}
</style>
