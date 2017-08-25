<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        info: 'Built by Mark Mahoney'
      }
    }
  }

</script>

<style scoped>
  p {
    background: skyblue;
    padding:10px;
  }
</style>
