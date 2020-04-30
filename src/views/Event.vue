<template>
  <div id="event">
    <ng-header />
    <ng-event />
  </div>
</template>

<script>
import NgHeader from '@/components/NgHeader.vue';
import NgEvent from '@/components/NgEvent.vue';

export default {
  components: {
    NgHeader,
    NgEvent,
  },
};
</script>
