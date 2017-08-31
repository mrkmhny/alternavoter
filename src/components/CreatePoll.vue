<template>
  <div class="create-poll">
    <form>
      <label for="question">Question</label>
      <input type="text" name="question" v-model="editablePoll.question" placeholder="Question">
      <!-- Only displays if entered question is falsey-->
      <p class="err" v-show="!editablePoll.question">
        You must enter a question
      </p>
      <div>Choices</div>
      <table>
        <tr v-for='(choice, index) in editablePoll.choices'>
          <td>
            <button v-on:click.prevent="removeEditableChoice(index)" name="remove" tabindex="-1">Remove Choice</button>
          </td>
          <td>
            <input type="text" v-model="choice.choiceName">
          </td>
        </tr>
        <tr>
          <button v-on:click.prevent="addEditableChoice">Add Choice</button>
        </tr>
      </table>
      <!-- Only displays if poll has < 3 choices-->
      <p class="err" v-show="!hasThreeChoices">
        Three or more choices are required for Instant Runoff Voting to work
      </p>
      <!-- Only displays if poll choices are not unique-->
      <p class="err" v-show="!choicesAreUnique">
        All choices must be unique
      </p>
      <button class="submit" v-on:click.prevent="submitPoll(editablePoll)"
      :disabled="!hasThreeChoices || !editablePoll.question" type="button" name="submit">
        Create Poll
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editablePoll: {
        question: 'test',
        choices: [{choiceName: 'a'}, {choiceName: 'b'}, {choiceName: 'c'}],
        votes: [],
        results: []
      }
    }
  },
  methods: {
    // Adds a poll from the choices array
    addEditableChoice: function () {
      this.editablePoll.choices.push({choiceName: ''})
    },
    // Remove a choice from the choices array
    removeEditableChoice: function (index) {
      this.editablePoll.choices.splice(index, 1)
    },
    // Submits this poll to the database
    submitPoll: function (newPoll) {
      this.$http.post('https://irv-app.firebaseio.com/polls.json', newPoll)
      .then(function (res) {
        console.log(res.body.name)
        /* Sends the unique poll key returned by firebase to Vuex
           to store on the user's owned polls */
        this.$store.dispatch('logIn', 'test')
      }).catch(function (err) { console.log(err) })
    }
  },
  computed: {
    // Confirms that poll has three choices: return a boolean
    hasThreeChoices: function () {
      var numberOfChoices = 0
      for (var i = 0; i < this.editablePoll.choices.length; i++) {
        if (this.editablePoll.choices[i].choiceName) { numberOfChoices++ }
      }
      return (numberOfChoices >= 3)
    },
    // Confirms that poll choices are unique -- returns a boolean
    choicesAreUnique: function () {
      for (var i = 0; i < this.editablePoll.choices.length; i++) {
        for (var j = i + 1; j < this.editablePoll.choices.length; j++) {
          if (this.editablePoll.choices[i].choiceName === this.editablePoll.choices[j].choiceName) {
            return false
          }
        }
      }
      return true
    }
  }
}
</script>

<style scoped>

  .create-poll form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin:0 auto;
    width:70%;
  }

  .create-poll table {
    margin:20px 0;
  }

  .create-poll .err {
    color:tomato;
  }
</style>
