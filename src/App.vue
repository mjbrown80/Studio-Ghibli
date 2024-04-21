<template>
  <div id="app">
    <ghibli-list></ghibli-list>
  </div>
</template>

<script>

import GhibliList from '../src/components/GhibliList.vue';
export default {
  name: 'App',
  components: {
    GhibliList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
