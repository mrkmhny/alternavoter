<template>
  <div class="topnav" id="myTopnav">
    <h1>AlternaVoter</h1>
    <a href="#home">Home</a>
    <a href="#news">Test</a>
    <div class="right">
      <a href="#">Create Poll</a>
      <a href="#">Username</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        title: 'AlternaVoter'
      }
    }
  }

</script>

<style scoped>
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #333;
    overflow: hidden;
  }

  /* Remove default margin from h1 */
  .topnav h1 {
    margin:0;
  }

  /* Style the links inside the navigation bar */
  .topnav a, h1 {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Justify .right elements to right */
  .topnav .right {
    float:right;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }
</style>
