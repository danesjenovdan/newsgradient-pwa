<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

#app {
  padding-top: 79px; // to offset headers
}
</style>
