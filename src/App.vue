<template>
  <div id="app">
    Initial Commit.
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@font-face {
  font-family: "UnitedSans";
  src: local("UnitedSans"),
   url(./assets/fonts/UnitedSansCdBd.woff2) format("truetype");
}

@font-face {
  font-family: "UnitedSansItalic";
  src: local("UnitedSansItalic"),
   url(./assets/fonts/UnitedItalicSmCdMd.woff2) format("truetype");
}

body {
  background: #e60000;
}
#app {
  font-family: UnitedSans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
