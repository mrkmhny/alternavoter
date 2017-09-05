import firebase from 'firebase'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Use Vuex plugin
Vue.use(Vuex)

// Create and export Vuex store
export default new Vuex.Store({ // eslint-disable-line no-unused-vars
  // TODO: Grab this from a database
  state: {
    user: {
      userTest: 'hey',
      userId: 'a',
      username: 'mrkmhny',
      email: 'mark.r.mahoney@gmail.com',
      ownedPolls: [414, 3],
      votedPolls: [2]
    },
    currentPoll: {
      // TODO: This will be initialized to blank
      pollId: '-KtF0Y6JTVk9_eNOKi9M',
      owner: 'mrkmhnyyyyyyy',
      question: 'Best Color',
      choices: [{choiceName: 'Blue'}, {choiceName: 'Red'}, {choiceName: 'Yellow'}, {choiceName: 'Green'}, {choiceName: 'Purple'}],
      votes: [
      ],
      results: {
      }
    },
    polls: [
      {
        pollId: '4144',
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
      // TODO: Grab the polls that user owns
    },
    // Adds a new poll to the list of user's owned polls
    addToOwned: function (state, payload) {
      state.user.ownedPolls.push(payload.pollId)
    }
  },
  actions: {
    getUserData: () => {
      if (firebase.auth().currentUser) {
        console.log('a user is logged in')
      }
    },
    getData: (context) => {
      // Get current user information asyncronously
      firebase.auth().onAuthStateChanged(function (loggedInUser) {
        if (loggedInUser) {
          var user = loggedInUser
          // Call setUser mutation with retrieved user info
          // TODO: Add the other user information, not just Id
          context.commit('setUser', {userId: user.uid})
        }
      })
      // TODO: Use userId to get the owned polls from database
      // TODO: Finish writing this function
      Vue.http.get('https://irv-app.firebaseio.com/test.json')
      .then(function (data) {
        // TODO: Make this actually do something, instead of just consolelogging
        console.log('got the data in the store')
      }).catch(function (err) { console.log(err) })
    },
    // Authenticates a user through firebase
    logIn: (context, credentials) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(function (res) {
        console.log('youre logged in')
        // Set the current user to this ID
        context.commit('setUser', {
          userId: res.uid,
          username: res.username // TODO: Make sure this is a real res item
        })
        // TODO redirect to dashboard
      }).catch(function (err) { alert(err) })
    },
    logOut: (context) => {
      // Log out user from firebase
      firebase.auth().signOut()
      .then(function (res) {
        console.log('Youre logged out')
        // Remove the user data from state
        context.commit('setUser', {
          userId: 'none',
          username: 'none' // TODO: Make sure this is a real res item
        })
        // Create a new guest account so activity can still be tracked
        context.dispatch('logInAsGuest')
      }).catch(function (err) { alert(err) })
    },
    logInAsGuest: (context) => {
      firebase.auth().signInAnonymously()
      .then((res) => {
        console.log('You have created a guest account!')
        // Set the current user to this ID
        context.commit('setUser', {
          userId: res.uid,
          username: 'Guest'
        })
      }).catch(function (err) { alert(err) })
    },
    submitPoll: (context, pollData) => {
      // If this is a new poll create a new entry in the database
      if (!pollData.pollId) {
        Vue.http.post('https://irv-app.firebaseio.com/polls.json', pollData)
        .then(function (res) {
          // TODO: save this new poll as an ownedpoll in the user database
          // Vue.http.post('https://irv-app.firebaseio.com/users.json', )
          console.log('This appears to be new poll')
          /* Send the unique poll key returned by firebase to Vuex
             to store on the user's owned polls */
          context.commit('addToOwned', {pollId: res.body.name})
        }).catch(function (err) { console.log(err) })
      } else { // If this is an existing poll, update it by it's key
        Vue.http.put('https://irv-app.firebaseio.com/polls/' + pollData.pollId + '.json', pollData)
        .then(function () {
          console.log('this appears to be an old poll')
        }).catch(function (err) { console.log(err) })
        // TODO: Redirect to dashboard
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
