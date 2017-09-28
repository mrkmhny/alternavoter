<template>
  <div id="app">
    <!--<NavBar></NavBar>-->
    <!--<button v-on:click="debug">debug</button>-->
    <router-view></router-view>
    <!-- TODO: Insert footer here-->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import firebase from 'firebase'

export default {
  components: {NavBar},
  name: 'app',

  // Fire these actions automatically whenever app first loads
  created: function () {
    this.$store.dispatch('getUserData')
  },
  methods: {
    // TODO: remove this
    debug: function () {
      this.$store.dispatch('getPollsData')
      console.log('debug fired')
    }
  }
}
</script>

<style>

#app {
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
