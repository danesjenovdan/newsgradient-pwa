<template>
  <div id="header">
    <router-link
      v-if="$route.path !== '/'"
      to="/"
      id="back-to-listing"
    >&lt; List</router-link>
    Newsgradient
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NgHeader extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Averia Sans Libre', sans-serif;
  height: 30px;
  background-image: linear-gradient(to left, #f43b47 0%, #453a94 100%);
  color: #ffffff;
  line-height: 30px;
  font-weight: 700;

  position: fixed;
  top: 0;
  left: 0;

  #back-to-listing {
    text-transform: none;
    display: block;
    position: absolute;
    left: 5px;
    top: -2px;
    color: #ffffff;
  }
}
</style>
