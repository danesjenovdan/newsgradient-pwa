<template>
  <div id="home">
    <ng-header />
    <ng-sub-header />
    <ng-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NgHeader from '@/components/NgHeader.vue';
import NgSubHeader from '@/components/NgSubHeader.vue';
import NgList from '@/components/NgList.vue';
import { slants } from '@/requests';

@Component({
  components: {
    NgHeader,
    NgSubHeader,
    NgList,
  },
})

export default class Listing extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
}
</style>
