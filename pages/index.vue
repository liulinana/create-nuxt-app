<template>
  <!--<section class="container">-->
    <!--<div>-->
      <!--<logo />-->
      <!--<h1 class="title">-->
        <!--create-nuxt-app-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--My stellar Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green"-->
        <!--&gt;Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey"-->
        <!--&gt;GitHub</a>-->
      <!--</div>-->
      <!--<br/>-->
      <!--<nuxt-link to="/users/one/dd">首页</nuxt-link>-->
      <!--<el-row>-->
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="success">成功按钮</el-button>-->
        <!--<el-button type="info">信息按钮</el-button>-->
        <!--<el-button type="warning">警告按钮</el-button>-->
        <!--<el-button type="danger">危险按钮</el-button>-->
      <!--</el-row>-->
      <!--<Button type="primary">Primary</Button>-->
      <!--<Button type="dashed">Dashed</Button>-->
      <!--<Button type="text">Text</Button>-->
    <!--</div>-->
    <div class="layout">
      <!--<button @click="sendParams">传递</button>-->
      <!--<nuxt-link to="/users/one">hello world</nuxt-link>-->
      <!--<nuxt-link to="/users/two">首页</nuxt-link>-->
    </div>
  <!--</section>-->
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
      sendParams () {
          this.$router.push({
              path: '/users/one',
              name: 'users-one',
              params: {
                  name: '我是路由获取过来的值',
                  dataObj: 'test message'
              }
              /*query: {
                  name: 'name',
                  dataObj: this.msg
              }*/
          })
      }
  },
    // computed: {
    //     breadcrumbItem(){
    //         return this.open.concat(this.openItem)
    //     }
    //
    // },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
