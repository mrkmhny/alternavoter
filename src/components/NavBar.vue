<template>
  <nav class="navbar">
    <router-link to="/" class="brand">AlternaVoter</router-link>
    <ul class="navbar-nav">
      <li class="nav-item"v-if="!userEmail"><router-link v-if="!userEmail" to="/login">Log In</router-link></li>
      <li class="nav-item"v-else>
        <div class="dropdown">
          <button class="dropbtn">{{userId}}</button>
          <div class="dropdown-content">
            <router-link to="/">Dashboard</router-link>
            <a v-on:click="logout"class="logout">
              Logout
            </a>
          </div>
        </div>
      </li>
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
      userId () { return this.$store.state.user.userId },
      userEmail () { return this.$store.state.user.userEmail }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logOut')
        this.$router.push('/')
        // TODO: Go to a landing page
      }
    }
  }
</script>
<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    background:lightgrey;
    padding: 5px 10px;
    margin-top: 0px;
  }
  .navbar-nav {
    display: flex;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  .nav-item {
    margin-left: 5px;
  }
  /* Dropdown Button */
.dropbtn {
    border: none;
    cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
      position: relative;
      display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #f1f1f1}

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
      display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
      background-color: #3e8e41;
  }
</style>
