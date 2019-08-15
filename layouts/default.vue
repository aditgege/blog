<template>
  <div class="container app">
    <Navbar />
    <nuxt class="wrapper clearfix" />
    <BaseFooter />
  </div>
</template>
<script>
// import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
import Navbar from '../components/Navbar'

export default {
  name: 'DefaultLayout',
  components: {
    BaseFooter,
    // BaseHeader,
    Navbar
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  margin: 1em 0;
  min-height: 60vh;
}
</style>
