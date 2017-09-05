<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/" class="brand">AlternaVoter</router-link></li>
      <li><router-link to="/create" class="button-primary">+ Create Poll</router-link></li>
      <li>
        <div class="username-header">
          {{userId}}
        </div>
      </li>
      <li>
        <button v-on:click="logout"class="logout">
          Logout
        </button>
      </li>
      <li><router-link to="/login">Log In</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    computed: {
      userId () { return this.$store.state.user.userId }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>
<style>
  .navbar ul {
    display: flex;
    justify-content: space-between;
    background:lightgrey;
    padding: 5px 10px;
  }
</style>
