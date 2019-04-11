<template>
    <div>
        <button @click="sendParams">传递</button>
        <nuxt-link to="/users/one">hello world</nuxt-link>
        {{aa}}
        <Button type="primary" @click="count">vuex</Button>
    </div>
</template>
<script>
    import {increaseCounter} from '../../store/actions';
    import store from '../../store/index'
    export default {
        computed: {
            aa () {
                return store().getters.counts
            },
        },
        methods: {
            count () {
                // this.$store.dispatch("INCREASE")
                // store.dispatch("increaseCounter")
                increaseCounter("INCREASE",10);
                console.log("withRouter",this.props)
                // store.commit("INCREASE",{
                //     amount: 10
                // })
            },
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
