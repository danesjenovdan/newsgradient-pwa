<template>
  <div id="listing">
    <ng-header />
    <ng-listing />
  </div>
</template>

<script>
import NgHeader from '@/components/NgHeader.vue';
import NgListing from '@/components/NgListing.vue';

export default {
  components: {
    NgHeader,
    NgListing,
  },
};
</script>
