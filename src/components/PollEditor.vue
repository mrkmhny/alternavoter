<template>
  <div>
    <h2>Edit Poll</h2>
    <form>
      <label>Question: </label>
      <input type="text" v-model="question">
      <div v-on:click="test">{{numb}}</div>
      <button @click="test" type="button" name="button">Submit</button>
    </form>
    <h2>Preview Poll</h2>
      <h3>Question: {{question}}</h3>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        question: '',
        numb: 0
      }
    },
    methods: {
      savePoll: function () {
        console.log('sending poll data')
        this.$http.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.question,
          body: 'This is the body',
          userId: 2
        }).then(function (data) {
          console.log(data)
        })
      },
      test: function () {
        console.log('yoooo')
      }
    }
  }
</script>

<style

</style>
