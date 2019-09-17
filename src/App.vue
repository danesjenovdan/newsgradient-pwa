<template>
  <div id="app">
    <div id="deviceframe"></div>
    <div id="devicecontent">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700&display=swap');

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
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 1px;
  width: 100%;
}

#devicecontent {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #e8e8e8;
}

@media (min-width: 768px) {
  #deviceframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(assets/iphonexs-frame.svg);
    background-position: top center;
    background-size: 500px 856px;
    background-repeat: no-repeat;
    z-index: 3;
    pointer-events: none;
  }

  #devicecontent {
    width: 375px;
    height: 783px;
    max-height: calc(100vh - 55px);
    margin: 0 auto;
    margin-top: 55px;
    overflow-y: scroll;

    /deep/ #header {
      width: 375px;
    }
  }
}
</style>
