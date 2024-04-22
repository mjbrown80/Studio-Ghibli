<template>
  <div id="app">
    <header>
      <h1></h1>
    </header>
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
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Lora,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #CFEED1;
  
}
body {
  min-height: 100%;
  background-color: #FFF3D9;
}
header {
  max-height: 300px;
}
</style>
