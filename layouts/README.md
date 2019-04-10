# LAYOUTS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Application Layouts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/views#layouts).

1.自定义布局
例如：创建一个 博客布局 并将其保存到layouts/blog.vue

  <template>
    <div>
      <div>我的博客导航栏在这里</div>
      <nuxt/>
    </div>
  </template>
  
然后我们必须告诉页面 (即pages/posts.vue) 使用您的自定义布局：
即：pages/index.vue

  <template>
    <!-- Your template -->
  </template>
  <script>
  export default {
    layout: 'blog'
    // page component definitions
  }
  </script>

2.可以自定义错误页面，你可以把这个布局文件当成是显示应用错误（404，500等）的组件。
举一个个性化错误页面的例子 layouts/error.vue:

  <template>
    <div class="container">
      <h1 v-if="error.statusCode === 404">页面不存在</h1>
      <h1 v-else>应用发生错误异常</h1>
      <nuxt-link to="/">首 页</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],
    layout: 'blog' // 你可以为错误页面指定自定义的布局
  }
  </script>
