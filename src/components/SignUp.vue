<template>
  <div class="sign-up">
    <h3>Create Account</h3>
    <input type="text" name="email" placeholder="Email" v-model="newUser.email">
    <input type="password" name="password" placeholder="Password" v-model="newUser.password">
    <button v-on:click="createUser">Create account</button>
    <button v-on:click="createGuest">Continue as guest</button>
    <p>{{user}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: function () {
    return {
      // Temporary placeholder for new user data
      newUser: {
        email: '',
        password: ''
      },
      user: firebase.auth()
    }
  },
  methods: {
    // Submits new user credentials to firebase and logs in
    createUser: function () {
      firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password)
      .then(function (res) {
        alert('You have created an account!')
        // this.$store.dispatch('logIn', res.uid)
        console.log(firebase.User.email)
      })
      .catch(function (err) { alert(err) })
    },
    /* Dispatches login action without credentials,
       which automatically create a guest account */
    createGuest: function () {
      this.$store.dispatch('logIn')
    }
  }
}
</script>

<style>
</style>
