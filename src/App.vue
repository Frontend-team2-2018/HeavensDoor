<template>
  <div>
    <menu-header />
    <div id="container"><!-- <div id="app"> -->
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/components/header/MenuHeader.vue'
export default {
  name: 'app',//name: 'App',
  components: {
      MenuHeader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
