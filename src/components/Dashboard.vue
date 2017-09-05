<template>
  <div class="dash">
    <button v-on:click="addPoll(editablePoll)">Test function</button
    <h1>{{msg}}</h1>
    <!-- TO DO: make these display owned and other polls -->
    <pollsTable :polls="polls"></pollsTable>
    <h1>Other polls I've voted on</h1>
    <pollsTable :polls="polls"></pollsTable>
  </div>
</template>

<script>
import pollsTable from './pollsTableTemplate.vue'

export default {
  name: 'hello',
  components: {pollsTable: pollsTable},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    polls () { return this.$store.state.polls },
    editablePoll () { return this.$store.state.editablePoll }
  },
  methods: {
    getData: function () {
      console.log('the method is fired')
      // Triggers getData action in store
      this.$store.dispatch('getData')
    },
    addPoll: function (editablePoll) {
      console.log(editablePoll)
      // Triggers addPoll action in store
      this.$store.dispatch('addPoll', editablePoll)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
