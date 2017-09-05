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
// This should really be editPoll, and the data that it's populated should either be blank for new polls or populated for existing polls

export default {
  data () {
    return {
      editablePoll: this.$store.state.currentPoll
    }
  },
  methods: {
    // Adds a poll to the choices array
    addEditableChoice: function () {
      this.editablePoll.choices.push({choiceName: ''})
    },
    // Remove a choice from the choices array
    removeEditableChoice: function (index) {
      this.editablePoll.choices.splice(index, 1)
    },
    // Submits this poll to the database
    submitPoll: function (pollData) {
      console.log('CreatePoll component dispatching submitPoll action')
      this.$store.dispatch('submitPoll', pollData)
    }
  },
  computed: {
    currentPoll: function () {
      // TODO: make this currentPoll, not user
      return this.$store.state.user.userTest
    },
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
