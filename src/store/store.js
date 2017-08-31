import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Use Vuex plugin
Vue.use(Vuex)

// Create and export Vuex store
export default new Vuex.Store({ // eslint-disable-line no-unused-vars
  // TODO: Grab this from a database
  state: {
    user: {
      userId: '',
      username: 'mrkmhny',
      email: 'mark.r.mahoney@gmail.com',
      ownedPolls: [414, 3],
      votedPolls: [2]
    },
    editablePoll: {
      // TODO: This will be blank eventually
      pollId: '414',
      owner: 'mrkmhny',
      question: 'Best Color',
      choices: ['Blue', 'Red', 'Yellow', 'Green', 'Purple'],
      votes: [
      ],
      results: {
      }
    },
    polls: [
      {
        pollId: '414',
        owner: 'mrkmhny',
        question: 'Best City',
        choices: ['NY', 'LA', 'BO', 'SF', 'DC'],
        votes: [
          {voter: 'mark', voteOrder: ['NY', 'DC']},
          {voter: 'fred', voteOrder: ['LA', 'DC']},
          {voter: 'casey', voteOrder: ['SF', 'DC', 'NY']},
          {voter: 'david', voteOrder: ['BO', 'DC', 'LA']},
          {voter: 'eddy', voteOrder: ['LA']},
          {voter: 'george', voterOrder: ['NY', 'LA']},
          {voter: 'george', voterOrder: ['DC', 'NY']}
        ],
        results: {
          NY: {tally: ['NY', 'NY', 'NY', 'DC', 'BO'], eliminated: 0},
          DC: {tally: ['DC', 'NY'], eliminated: 2},
          LA: {tally: ['LA', 'LA', 'LA', 'SF'], eliminated: 0},
          SF: {tally: ['SF', 'LA'], eliminated: 2},
          BO: {tally: ['BO', 'NY'], eliminated: 1}
        }
      },
      {
        pollId: '3',
        owner: 'mrkmhny',
        question: 'Best Food',
        choices: ['Steak', 'Eggs', 'Carrots', 'Potatoes'],
        votes: [
          {voter: 'mark', voteOrder: ['Steak', 'Eggs']},
          {voter: 'fred', voteOrder: ['Carrots']},
          {voter: 'casey', voteOrder: ['Carrots', 'Potatoes']}
        ],
        results: {}
      },
      {
        pollId: '2',
        owner: 'fred',
        question: 'Dumbest name',
        choices: ['Fred', 'Steve', 'Bill'],
        votes: [],
        results: {}
      }
    ]
  },
  mutations: {
    // TODO: SetPolls (don't know if we need this anymore)
    setPolls: function () {
    },
    // Sets the users id in the state (typically used when logging in)
    setUser: function (state, payload) {
      state.user.userId = payload.userId
      state.user.userId = payload.userId
      // TODO: Grab the polls that user owns
    },
    // Adds a new poll to the list of user's owned polls
    addToOwned: function () {
      console.log(this.state.user.ownedPolls)
    }
  },
  actions: {
    getData: () => {
      // TODO: Finish writing this function
      Vue.http.get('https://irv-app.firebaseio.com/test.json')
      .then(function (data) {
        // TODO: Make this actually do something, instead of just consolelogging
        console.log('got the data in the store')
      }).catch(function (err) { console.log(err) })
    },
    // Authenticates a user through firebase
    logIn: (context, payload) => {
      // If no user credentials are included, log in as guest
      if (!payload) {
        firebase.auth().signInAnonymously()
        .then((res) => {
          alert('You have created a guest account!')
          // Set the current user to this ID
          context.commit('setUser', {userId: res.uid})
        }).catch(function (err) { alert(err) })
      } else {
      // If user credentials are included, log in as that user
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(function (res) {
          // Set the current user to this ID
          context.commit('setUser', {userId: res.uid})
        }).catch(function (err) { alert(err) })
      }
    }
    /*,
    // Adds a new poll to the list of the user's owned polls
    addToOwned: (context, payload) => {
      // Adds the posts
      Vue.http.post('https://irv-app.firebaseio.com/users.json', pay)
      .then(function (data) {
        console.log('data that was added = %O', newPoll)
        console.log(data)
      }).catch(function (err) { console.log(err) })
    } */
  }
})
