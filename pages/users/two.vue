<template>
    <div>
        <button @click="sendParams">传递</button>
        <nuxt-link to="/users/one">hello world</nuxt-link>
    </div>
</template>
<script>
    export default {
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
        }
    }
</script>
