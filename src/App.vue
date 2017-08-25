<template>
  <div id="app">
    <AppHeader></AppHeader>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <AppFooter></AppFooter>
    <button></button>
    <button v-on:click.prevent.native="why">Oh my god?</button>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {AppHeader, AppFooter},
  name: 'app',
  methods: {
    why: function () {
      console.log('yoooo')
    }
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
}
</style>
