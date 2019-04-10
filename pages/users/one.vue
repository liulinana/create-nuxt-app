<template>
  <div>
   <!--{{layout}}-->
    <h1 class="red">Hello {{ name }}!</h1>
    <nuxt-link to="/">返回</nuxt-link>
  </div>
</template>
<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'World' }
    },
    // page component definitions
  }
</script>
<!--<style lang="scss">-->
  <!--@import '../../assets/main.scss';-->
<!--</style>-->
