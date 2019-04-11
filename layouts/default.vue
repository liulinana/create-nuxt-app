<template>
  <div>
    <div class="layout">
      <Row type="flex">
        <Col span="5" class="layout-menu-left">
          <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="openView">
            <div class="layout-logo-left"></div>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                导航一
              </template>
              <MenuItem name="users-one">users-one</MenuItem>
              <MenuItem name="users-two">users-two</MenuItem>
              <MenuItem name="1-3">选项 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                导航二
              </template>
              <MenuItem name="2-1">选项 1</MenuItem>
              <MenuItem name="2-2">选项 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                导航三
              </template>
              <MenuItem name="3-1">选项 1</MenuItem>
              <MenuItem name="3-2">选项 2</MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col span="19">
          <div class="layout-header"></div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb :style="{margin: '24px 0'}">
                <!--<BreadcrumbItem v-for="item in breadcrumbItem" >{{item}}</BreadcrumbItem>-->
                <BreadcrumbItem>首页</BreadcrumbItem>
              </Breadcrumb>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
              <nuxt/>
            </div>
          </div>
          <div class="layout-copy">
            author &copy; lln
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return{
                openItem:[],
                open:[],
            }
        },
        methods: {
            openView(e){
                this.$router.push({
                    name:e
                })

            },
        },
    }
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
