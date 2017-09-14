<template lang="html">
  <div class="view-poll">
    <h3 class="question">Question: {{currentPoll.question}}</h3>
    <div class="choices">
      <div class="row-labels">
        <div class="rank-label col-rank">Rank</div>
        <div class="choices-label col-choice">Choices</div>
      </div>
      <div class="row-choice" v-for="choice in currentChoices">
        <input class="rank-select col-rank" type="number" min="0" v-model="choice.preference">
        <div class="choice-name col-choice">{{choice.choiceName}}</div>
      </div>
    </div>
    <button v-on:click="castVote" class="cast-vote">Cast Vote</button>
  </div>


</template>

<script>
export default {
  data () {
    return {
      currentPoll: {},
      otherPoll: {
        choices: [
          { choiceName: 'a choice', preference: 0 },
          { choiceName: 'a choice', preference: 0 },
          { choiceName: 'a choice', preference: 0 }
        ]
      },
      currentChoices: []
    }
  },
  beforeMount: function () {
    // Before loading, get the Poll data from the DB for this particular poll
    this.$store.dispatch('getPollData', this.$route.params.pollId)
    .then(() => {
      console.log('okay the poll is set, so now...')
      // Create a list of choices using the choices from the current poll
      this.currentPoll = this.$store.state.currentPoll
      // Initialize preferences to 0
      for (var each in this.currentPoll.choices) {
        this.currentChoices.push({
          choiceName: this.currentPoll.choices[each].choiceName,
          preference: 0
        })
      }
    }).catch(function (err) {
      console.log(`Error in ViewPoll: ${err}`)
    })
  },
  methods: {
    castVote: function () {
      this.$store.dispatch('castVote', {test: '1'})
    }
  },
  computed: {
    results: function () {
      for (var each in this.currentPoll.choices) {
        this.currentPoll.choices[each].preference = 1
      }
    }
  }
}
</script>

<style>

  .view-poll {
    width:50%;
    margin: 0 auto;
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
    margin-left: 50px;
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
    width:100%;
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
