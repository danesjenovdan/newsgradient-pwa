<template>
  <div id="event">
    <ng-header />
    <event-list />
    <login-wall v-if="!loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import NgHeader from '@/components/NgHeader.vue';
import EventList from '@/components/EventList.vue';
import LoginWall from '@/components/LoginWall.vue';

@Component({
  computed: {
    ...mapState(['loggedIn']),
  },

  components: {
    NgHeader,
    EventList,
    LoginWall,
  },
})
export default class Event extends Vue {}
</script>

<style lang="scss" scoped>
#event {
  width: 100%;
}
</style>
