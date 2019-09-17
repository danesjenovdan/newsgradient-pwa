<template>
  <div id="subheader">
    <p>
      Top 5 political events of the day as reported by US media.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NgSubHeader extends Vue {}
</script>

<style scoped lang="scss">
#subheader {
  width: 100%;
  position: fixed;
  position: sticky;
  top: 40px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 39px;

  p {
    width: 100%;
    padding: 5px 30px;
    margin: 0;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    font-weight: 400;
  }
}
</style>
