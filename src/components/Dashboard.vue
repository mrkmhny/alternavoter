<template>
  <div class="dash">
    <button v-on:click="addPoll(editablePoll)">Test function</button>
    <!-- TO DO: make these display owned and other polls -->
    <pollsTable :polls="pollsList">{{pollsList}}</pollsTable>
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
      pollsList: this.$store.state.pollsList
    }
  },
  computed: {
    polls: function () { return this.$store.state.pollsList }
  },
  beforeMount () {
    console.log(this.pollsList)
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
