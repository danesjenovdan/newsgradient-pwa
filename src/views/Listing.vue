<template>
  <div id="listing">
    <ng-header />
    <ng-list />
  </div>
</template>

<script>
import NgHeader from '@/components/NgHeader.vue';
import NgList from '@/components/NgList.vue';

export default {
  components: {
    NgHeader,
    NgList,
  },
};
</script>
