import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
      // extendRoutes(routes, resolve) {
      //     let index = routes.findIndex(route => route.name === 'main');
      //     routes[index] = {
      //         ...routes[index],
      //         components: {
      //             default: routes[index].component,
      //             top: resolve(__dirname, 'components/mainTop.vue')
      //         },
      //         chunkNames: {
      //             top: 'components/mainTop'
      //         }
      //     }
      // }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
    // 'bulma',
    // 项目里要用的 CSS 文件
    // '@/assets/css/style.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/main.scss',
      'assets/style.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~plugins/elementUI',
      '~plugins/iview'
  ],

  /*
  ** Nuxt.js modules
  */
  /**
   * 当您需要在页面中注入一些变量和mixin而不必每次都导入它们时，这非常有用。
   * styleResources
   */
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: './assets/main.scss',
    less: './assets/**/*.less',
  },
  /*
  ** Build configuration
  */
  build: {
      vendor: [
          'axios',
          'element-ui'
      ],
    /**
     * 使用 webpack-bundle-analyzer 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它。
     * 执行语句:yarn build --analyzer 或者 yarn build -a
     */
    // analyze: true,
    /**
     * 默认为 @nuxt/babel-preset-app 在client构建中是ie：'9'，在server构建中是node:'current'。
     * build.babel.presets 中配置的预设将应用于客户端和服务器构建。
     * 目标将由Nuxt相应地设置（客户端/服务器）。
     * 建议使用默认
     */
    babel: {
      // presets({ isServer }) {
      //   const targets = isServer ? { node: 'current' } : { ie: '11' };
      //   return [
      //     [ require.resolve('@nuxt/babel-preset-app'), { targets }]
      //   ]
      // },
      "plugins": [
        // [
        //     "component",
        //     {
        //         "libraryName": "element-ui",
        //         "styleLibraryName": "theme-chalk"
        //     },
        // ],
        // [
        //   {
        //       "libraryName": "iview",
        //       "libraryDirectory": "src/components"
        //   }
        // ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
