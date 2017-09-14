<template>
  <div class="create-poll">
    <h1>Create a Poll</h1>
    <form>
      <label for="question">Question</label>
      <input class="question-input" type="text" name="question" v-model="editablePoll.question" placeholder="Question">
      <!-- Only displays if entered question is falsey-->
      <p class="err" v-show="!editablePoll.question">
        You must enter a question
      </p>
      <label class="choices-label">Choices</label>
      <table>
        <tr v-for='(choice, index) in editablePoll.choices'>
          <td>
            <button class="remove-choice" v-on:click.prevent="removeEditableChoice(index)" name="remove" tabindex="-1">Remove</button>
          </td>
          <td>
            <input type="text" v-model="choice.choiceName" placeholder="Choice">
          </td>
        </tr>
        <tr>
          <button class="add-choice" v-on:click.prevent="addEditableChoice">Add</button>
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
      <button class="submit" v-on:click.prevent="createPoll(editablePoll)"
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
      editablePoll: {
        question: '',
        choices: [{choiceName: ''}, {choiceName: ''}, {choiceName: ''}],
        votes: [
        ],
        results: {
        }
      }
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
    createPoll: function (pollData) {
      console.log('CreatePoll component dispatching createPoll action')
      this.$store.dispatch('createPoll', pollData)
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

  .create-poll {
    max-width:500px;
    margin:auto;
  }

  .create-poll form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin:0 auto;
    width:70%;
  }

  .question-input {
    margin-bottom: 10px;
  }

  .create-poll .choices-label {

  }

  .create-poll table {
    margin:0 0 20px 0;
  }

  td {
    width: 200px;
  }

  button {
    width:100%;
    border-radius: 5px;
    border:none;
    outline: none;
  }

  .remove-choice {
    background: tomato;
    color: white;
  }

  .add-choice {
    background: limegreen;
    border:none;
    color:white;
  }

  .create-poll .err {
    color:tomato;
    text-align: center;
    width:100%;
  }

  .submit {
    color: white;
    background: skyblue;
  }

  .submit:hover {
    background: lightskyblue;
  }
</style>
