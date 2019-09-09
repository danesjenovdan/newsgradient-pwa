<template>
  <div id="home">
    <ng-header />
    <ng-sub-header />
    <ng-list />
    <login-wall v-if="!loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import NgHeader from '@/components/NgHeader.vue';
import NgSubHeader from '@/components/NgSubHeader.vue';
import NgList from '@/components/NgList.vue';
import LoginWall from '@/components/LoginWall.vue';

@Component({
  computed: {
    ...mapState(['loggedIn']),
  },

  components: {
    NgHeader,
    NgSubHeader,
    NgList,
    LoginWall,
  },
})

export default class Listing extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
}
</style>
