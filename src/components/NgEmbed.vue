<template>
  <div id="embed">
    <iframe
      width="100%"
      :src="articleUrl"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NgEmbed extends Vue {
  @Prop({
    default: 'https://djnd.si',
  }) articleUrl!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#embed {
  width: 100%;
  height: calc(100vh - 65px);
  // background-color: #ffffff;
  position: absolute;

  iframe {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    margin: 0;
  }
}
</style>
