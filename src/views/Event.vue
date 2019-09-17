<template>
  <div id="event">
    <ng-header />
    <event-list />
    <ng-slider
      :switching="sliderSwitching"
      :value="sliderValue"
      :max="sliderMax"
    />
    <!-- <login-wall v-if="!loggedIn" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import NgHeader from '@/components/NgHeader.vue';
import EventList from '@/components/EventList.vue';
import NgSlider from '@/components/NgSlider.vue';
import LoginWall from '@/components/LoginWall.vue';

@Component({
  components: {
    NgHeader,
    EventList,
    NgSlider,
    LoginWall,
  },
  computed: {
    ...mapState([
      'sliderSwitching',
      'currentArticleIndex',
      'currentNewsEvent',
      'loggedIn',
    ]),
    sliderValue() {
      return this.currentArticleIndex;
    },
    sliderMax() {
      return this.currentNewsEvent.count;
    },
  },
})
export default class Event extends Vue {}
</script>

<style lang="scss" scoped>
#event {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
