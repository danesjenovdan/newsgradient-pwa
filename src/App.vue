<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900,900i&display=swap');

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

::selection {
  background-color: #e00;
  color: #fff;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  background-color: #efefef;
  color: #3f3942;
}

#app {
  overflow: hidden;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  bottom: 1px;
  width: 100%;
}

// TODO: responsive breakpoints
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
