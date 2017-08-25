<template>
  <table cellspacing="10">
    <tr>
      <th>Poll Question</th>
      <th>Number of Votes</th>
      <th>Current Winner</th>
    </tr>
    <tr v-for="poll in polls">
      <td>{{poll.question}}</td>
      <td>{{poll.votes.length}}</td>
      <td>Not yet calculated</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'PollsList',
    props: ['polls'],
    data () {
      return {
      }
    }
  }

</script>

<style scoped>

</style>
