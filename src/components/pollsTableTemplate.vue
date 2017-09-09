<template>
  <div class="polls-table">
    <table cellspacing="10">
      <tr>
        <th>Poll Question</th>
        <th>Number of Votes</th>
        <th>Current Winner</th>
      </tr>
      <tr v-for="poll in polls">
        <td><router-link to="view">{{poll.question}}</router-link></td>
        <td>{{poll.choices.length}}</td>
        <td>Not yet calculated</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['polls']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
