<template lang="html">
  <div class="view-poll">
    <div v-if="!userHasVoted" class="poll-vote-form">
      <h3 class="question">Question: {{currentPoll.question}}</h3>
      <div class="choices">
        <div class="row row-labels">
          <div class="rank-label col-rank">Rank</div>
          <div class="choices-label col-choice">Choices</div>
        </div>
        <div class="row row-choice" v-for="choice in currentChoices">
          <input class="rank-select col-rank" type="number" min="0" v-bind:max="currentChoices.length" v-model="choice.preference">
          <div class="choice-name col-choice">{{choice.choiceName}}</div>
        </div>
      </div>
      <h1>{{ballot}}</h1>
      <button v-on:click="castVote" class="cast-vote">Cast Vote</button>
    </div>

    <div v-if="userHasVoted" class="poll-results">
      <h1>Poll Results</h1>
      <Results></Results>
    </div>
  </div>
</template>

<script>
import Results from './Results'

export default {
  components: { Results },
  data () {
    return {
      currentPoll: {},
      currentChoices: [],
      userHasVoted: false
    }
  },
  beforeMount: function () {
    // Check if user already voted
    this.userHasVoted = this.checkIfUserVoted()
    // Before loading, get the Poll data from the DB for this particular poll
    this.$store.dispatch('getPollData', this.$route.params.pollId)
    .then(() => {
      console.log('okay the poll is set, so now...')
      // Create a list of choices using the choices from the current poll
      this.currentPoll = this.$store.state.currentPoll
      // Initialize preferences to 0
      for (var i = 0; i < this.$store.state.currentPoll.choices.length; i++) {
        this.currentChoices.push({
          choiceName: this.$store.state.currentPoll.choices[i].choiceName,
          preference: ''
        })
      }
    })
    .catch(function (err) { console.log(`Error in ViewPoll: ${err}`) })
  },
  methods: {
    castVote: function () {
      if (!this.userHasVoted) {
        this.userHasVoted = true
        this.$store.dispatch('castVote', this.ballot)
        console.log('vote was casted')
      }
    },
    checkIfUserVoted: function () {
      if (localStorage[this.$route.params.pollId] === 'voted') {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    ballot: function () {
      var ranking = []
      // Start from rank 1, and move up until we've searched for all possible ranks
      for (var rank = 1; rank <= this.currentChoices.length; rank++) {
        // find the choice that matches with that rank
        var selection = this.currentChoices.filter(function (item) {
          return (parseInt(item.preference) === rank)
        })
        // If one was found, add it to the ballot list
        if (selection[0]) {
          ranking.push(selection[0].choiceName)
        }
      }
      // Return the ballot object
      return {ranking}
    },
    ranksAreUnique: function () {
      for (var i = 0; i < this.currentChoices.length; i++) {
        // TODO: Make sure the ranks are unique
      }
    }
  }
}
</script>

<style>

  .poll-vote-form {
    width:50%;
    margin: 0 auto;
  }

  .row {
    width:50%;
    margin: auto;
  }

  .row-labels {
    display: flex;
  }

  .row-labels > * {
    font-weight: bold;
  }

  .row-choice {
    display: flex;
    text-align: left;
    vertical-align: bottom;
    line-height: 20px;
    margin-bottom: 5px;
  }

  .col-rank {
    width:30px;
    margin-left: 10px;
  }

  .col-choice {
    margin-left:20px;
  }

  .rank-select {
    height:15px;
  }

  .rank-label {
    width:34px;
  }

  .choice-name {
  }

  .cast-vote {
    width:90px;
    margin-top: 10px;
    border-radius: 5px;
    border:none;
    outline: none;
    color: white;
    background: skyblue;
  }

  .cast-vote:hover {
    background: lightskyblue;
  }
</style>
