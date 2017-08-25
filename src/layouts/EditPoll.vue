<template>
  <div>
    <PollEditor></PollEditor>
    <button v-on:click="please">Working button?</button>
  </div>
</template>

<script>
  import PollEditor from '../components/PollEditor'

  export default {
    components: {PollEditor},
    data () {
      return {

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
      please: function () {
        console.log('yoooo')
      }
    }
  }
</script>

<style

</style>
