<template>
  <div id="subheader">
    <div
      :class="['subheader-item', {selected: currentSlant === slants.farLeft}]"
      @click="redirectToSlant(slants.farLeft)"
    >
      Far left
    </div>
    <div
      :class="['subheader-item', {selected: currentSlant === slants.liberal}]"
      @click="redirectToSlant(slants.liberal)"
    >
      Liberal
    </div>
    <div
      :class="['subheader-item', {selected: currentSlant === slants.all}]"
      @click="redirectToSlant(slants.all)"
    >
      Balanced
    </div>
    <div
      :class="['subheader-item', {selected: currentSlant === slants.conservative}]"
      @click="redirectToSlant(slants.conservative)"
    >
      Conservative
    </div>
    <div
      :class="['subheader-item', {selected: currentSlant === slants.farRight}]"
      @click="redirectToSlant(slants.farRight)"
    >
      Far right
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';
import { slants } from '@/requests';

@Component({
  computed: {
    ...mapState([
      'currentSlant',
    ]),
  },

  methods: {
    ...mapMutations([
      'SET_CURRENT_SLANT',
    ]),
    redirectToSlant(slant) {
      this.SET_CURRENT_SLANT(slant);
      if (this.$route.name !== 'listing') {
        this.$router.push('/');
      }
    }
  },
  
  data() {
    return {
      slants,
    };
  }
})

export default class NgSubHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#subheader {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Averia Sans Libre', sans-serif;
  height: 30px;
  color: #000000;
  line-height: 30px;
  font-weight: 400;
  background-color: #ffffff;

  position: fixed;
  top: 30px;
  left: 0;

  .subheader-item {
    display: inline-block;
    padding: 0 5px;
    font-size: 12px;

    &.selected {
      font-weight: 900;
      text-decoration: underline;
    }
  }
}
</style>
