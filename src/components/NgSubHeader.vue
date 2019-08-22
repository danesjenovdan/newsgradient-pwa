<template>
  <div id="subheader">
    <p>
      Five most important political events of the day as reported by
      <strong>all</strong> US media.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapState(['currentSlant']),
  },

  methods: {},

  data() {
    return {};
  },
})
export default class NgSubHeader extends Vue {}
</script>

<style scoped lang="scss">
#subheader {
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  p {
    padding: 5px 50px;
    margin: 0;
    text-align: center;
    font-family: "Averia Sans Libre", sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    font-weight: 400;
  }
}
</style>
