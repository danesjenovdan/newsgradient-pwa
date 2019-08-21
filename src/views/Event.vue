<template>
  <div id="event">
    <ng-header />
    <event-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NgHeader from '@/components/NgHeader.vue';
import EventList from '@/components/EventList.vue';

@Component({
  components: {
    NgHeader,
    EventList,
  },
})

export default class Event extends Vue {}
</script>

<style lang="scss" scoped>
#event {
  width: 100%;
}
</style>
