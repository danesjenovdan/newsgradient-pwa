<template>
  <div id="ng-selector">
    <ul class="choice-bar">
      <li
        v-for="choice in choices"
        :key="choice.key"
        :class="{ active: choice.key === $store.state.carousel.selectedItem }"
        @click="setChoice(choice.key)"
      >
        {{ choice.name }}
      </li>
    </ul>
  </div>
</template>
<script>
const NEUTRAL = 'NEUTRAL'
const LIBERAL = 'LIBERAL'
const FAR_LEFT = 'FAR LEFT'
const CONSERVATIVE = 'CONSERVATIVE'
const FAR_RIGHT = 'FAR RIGHT'

export default {
  name: 'Selector',
  data() {
    return {
      choices: [
        { key: 1, name: FAR_LEFT },
        { key: 2, name: LIBERAL },
        { key: 3, name: NEUTRAL },
        { key: 4, name: CONSERVATIVE },
        { key: 5, name: FAR_RIGHT }
      ]
    }
  },
  methods: {
    setChoice(key) {
      this.$store.commit('carousel/SET_ITEM', key)
    }
  }
}
</script>

<style lang="scss" scoped>
#ng-selector {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  background-color: white;
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 0;
}

.choice-bar {
  margin: 0 20%;

  li {
    list-style-type: none;
    width: 20%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
  }

  li:before {
    width: 60px;
    height: 60px;
    content: '';
    line-height: 30px;
    border: 7px solid #dddddd;
    background-color: #dddddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
  }

  li:after {
    width: 100%;
    height: 7px;
    content: '';
    position: absolute;
    background-color: #dddddd;
    top: 25px;
    left: -50%;
    z-index: -1;
  }

  li:first-child:after {
    content: none;
  }

  li.active:before {
    border-color: #dddddd;
    background-color: #0177ff;
  }

  li.active + li:after {
    background-color: #dddddd;
  }
}
</style>
