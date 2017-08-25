// Polls you own
// -- create new poll

// Polls you participated in

<template>
  <div>
    <h1>Dashboard</h1>
    <PollsList v-bind:polls="polls"></PollsList>
  </div>
</template>

<script>
import PollsList from '../components/PollsList'

export default {
  name: 'home',
  components: {PollsList},
  data () {
    return {
      polls: [
        {
          pollId: 12345,
          question: 'Best City?',
          choices: [
            {choiceId: 132, choiceName: 'NY', tally: ['NY', 'NY', 'NY', 'DC', 'BO'], eliminated: 0},
            {choiceId: 232, choiceName: 'DC', tally: ['DC', 'NY'], eliminated: 0},
            {choiceId: 434, choiceName: 'LA', tally: ['LA', 'LA', 'LA', 'SF'], eliminated: 0},
            {choiceId: 535, choiceName: 'SF', tally: ['SF', 'LA'], eliminated: 0},
            {choiceId: 633, choiceName: 'BO', tally: ['BO', 'NY'], eliminated: 0}
          ],
          votes: [
            {voteId: 1, voter: 'mark', voteOrder: ['NY', 'DC']},
            {voteId: 2, voter: 'fred', voteOrder: ['LA', 'DC']},
            {voteId: 3, voter: 'casey', voteOrder: ['SF', 'DC', 'NY']},
            {voteId: 4, voter: 'david', voteOrder: ['BO', 'DC', 'LA']},
            {voteId: 5, voter: 'eddy', voteOrder: ['LA']},
            {voteId: 6, voter: 'george', voterOrder: ['NY', 'LA']},
            {voteId: 6, voter: 'george', voterOrder: ['DC', 'NY']}
          ]
        },
        {
          pollId: 12345,
          question: 'Best City?',
          choices: [
            {choiceId: 132, choiceName: 'NY', tally: ['NY', 'NY', 'NY', 'DC', 'BO'], eliminated: 0},
            {choiceId: 232, choiceName: 'DC', tally: ['DC', 'NY'], eliminated: 0},
            {choiceId: 434, choiceName: 'LA', tally: ['LA', 'LA', 'LA', 'SF'], eliminated: 0},
            {choiceId: 535, choiceName: 'SF', tally: ['SF', 'LA'], eliminated: 0},
            {choiceId: 633, choiceName: 'BO', tally: ['BO', 'NY'], eliminated: 0}
          ],
          votes: [
            {voteId: 1, voter: 'mark', voteOrder: ['NY', 'DC']},
            {voteId: 2, voter: 'fred', voteOrder: ['LA', 'DC']},
            {voteId: 3, voter: 'casey', voteOrder: ['SF', 'DC', 'NY']},
            {voteId: 4, voter: 'david', voteOrder: ['BO', 'DC', 'LA']},
            {voteId: 5, voter: 'eddy', voteOrder: ['LA']},
            {voteId: 6, voter: 'george', voterOrder: ['NY', 'LA']},
            {voteId: 6, voter: 'george', voterOrder: ['DC', 'NY']}
          ]
        },
        {
          pollId: 12345,
          question: 'Best City?',
          choices: [
            {choiceId: 132, choiceName: 'NY', tally: ['NY', 'NY', 'NY', 'DC', 'BO'], eliminated: 0},
            {choiceId: 232, choiceName: 'DC', tally: ['DC', 'NY'], eliminated: 0},
            {choiceId: 434, choiceName: 'LA', tally: ['LA', 'LA', 'LA', 'SF'], eliminated: 0},
            {choiceId: 535, choiceName: 'SF', tally: ['SF', 'LA'], eliminated: 0},
            {choiceId: 633, choiceName: 'BO', tally: ['BO', 'NY'], eliminated: 0}
          ],
          votes: [
            {voteId: 1, voter: 'mark', voteOrder: ['NY', 'DC']},
            {voteId: 2, voter: 'fred', voteOrder: ['LA', 'DC']},
            {voteId: 3, voter: 'casey', voteOrder: ['SF', 'DC', 'NY']},
            {voteId: 4, voter: 'david', voteOrder: ['BO', 'DC', 'LA']},
            {voteId: 5, voter: 'eddy', voteOrder: ['LA']},
            {voteId: 6, voter: 'george', voterOrder: ['NY', 'LA']},
            {voteId: 6, voter: 'george', voterOrder: ['DC', 'NY']}
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
