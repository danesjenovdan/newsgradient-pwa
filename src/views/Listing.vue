<template>
  <div id="home">
    <ng-header />
    <ng-list />
    <!-- <login-wall v-if="!loggedIn" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import NgHeader from '@/components/NgHeader.vue';
import NgList from '@/components/NgList.vue';
import LoginWall from '@/components/LoginWall.vue';

@Component({
  computed: {
    ...mapState(['loggedIn']),
  },

  components: {
    NgHeader,
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
