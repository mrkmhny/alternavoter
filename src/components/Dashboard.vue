<template>
  <div class="dash">
    <button v-on:click="addPoll(editablePoll)">Test function</button>
    <!-- TO DO: make these display owned and other polls -->
    <h1>My Polls</h1>
    <pollsTable :polls="pollsList"></pollsTable>
    <router-link to="/create" class="btn btn-success">+ Create Poll</router-link>
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
    this.$store.dispatch('getPollsData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
