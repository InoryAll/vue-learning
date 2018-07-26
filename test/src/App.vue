<template>
  <div id="app">
    <router-view name="header" />
    <router-view/>
    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  color: #333;
  font-family: "PingFangSC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
