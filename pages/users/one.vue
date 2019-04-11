<template>
  <div>
   <!--{{layout}}-->
    <h1 class="red">Hello {{ name }}!</h1>
      this is a table
      <span style="color: brown">{{this.$route.params.name}}</span>
  </div>
</template>
<script>
  export default {
      transition: 'test',
    asyncData (context) {
      // called every time before loading the component
      return { name: 'World' }
    },
      methods: {
          getParams () {
              // 取到路由带过来的参数
              let routerParams = this.$route.params.name;
              // 将数据放在当前组件的数据内
              return this.msg = routerParams

          }
      },
      watch: {
          // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
          $route: "getParams"
      },
    // page component definitions
  }
</script>
<!--<style lang="scss">-->
  <!--@import '../../assets/main.scss';-->
<!--</style>-->
