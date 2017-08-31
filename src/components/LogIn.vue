<template>
  <div class="sign-up">
    <h3>Log in</h3>
    <input type="text" name="email" placeholder="Email" v-model="credentials.email">
    <input type="password" name="password" placeholder="Password" v-model="credentials.password">
    <button v-on:click="logIn(credentials.email, credentials.password)">Log in</button>
  </div>
</template>

<script>
// import firebase from 'firebase'

export default {
  data: function () {
    return {
      // Temporary placeholder for new user data
      credentials: {
        email: 'hi@hi.com',
        password: '123456'
      }
    }
  },
  methods: {
    // Authenticates user based on entered credentials
    logIn: function (email, password) {
      this.$store.dispatch('logIn', {email: email, password: password})
    }
  }
}
</script>

<style>
</style>
