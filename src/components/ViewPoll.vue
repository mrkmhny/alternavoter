<template lang="html">

</template>

<script>
export default {
  data () {
    return {}
  },
  beforeMount: function () {
    this.$store.dispatch('getPollData', this.$route.params.pollId)
  }
}
</script>

<style lang="css">
</style>
