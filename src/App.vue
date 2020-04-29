<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900&display=swap');

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  background-color: #efefef;
}

#app {
  overflow: hidden;
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
