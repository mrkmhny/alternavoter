<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>What is this?</h2>
    <p>AlternaVoter is a simple application to quickly create polls using the Instant Runoff Voting Method (IRV), also known as the Alternative Vote.</p>
    <p>Rather than selecting only your top choice, IRV allows for voters to choose multiple choices, in order of preference. This prevents the "spoiler effect" that occurs when voting for a third party in a two-party system</p>
    <div class="button-primary">
      <router-link to="/create">+ Create a Poll</router-link>
    </div>
    <h2>Learn more about Instant Runoff Voting</h2>
    <ul>
      <li><a href="https://en.wikipedia.org/wiki/Instant-runoff_voting" target="_blank">Wikipedia Page</a></li>
      <li><a href="https://www.youtube.com/embed/3Y3jE3B8HsE" target="_blank">Video Explanation</a></li>
      <li><router-link to="/example">Example Poll</router-link></li>
    </ul>
  </div>
</template>

<script>

// TODO: delete this file

export default {
  name: 'hello',
  data () {
    return {
      title: 'AlternaVoter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

p {
  max-width: 500px;
  text-align: center;
  margin: 20px auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.button-primary {
  display: inline-block;
  border-radius: 5px;
  background: skyblue;
  padding:10px 10px;
}
.button-primary a {
  text-decoration: none;
  color:white;
}

.button-primary:hover {
  background: lightskyblue;
}
</style>
