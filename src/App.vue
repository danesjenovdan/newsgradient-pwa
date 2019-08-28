<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
}

#app {
  padding-top: 79px; // to offset headers
}
</style>
