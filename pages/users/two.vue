<template>
    <div>
        <button @click="sendParams">传递</button>
        <nuxt-link to="/users/one">hello world</nuxt-link>
        {{aa}}
        <Button type="primary" @click="count">vuex</Button>
        <Button type="primary" @click="reqAxios">axios</Button>
    </div>
</template>
<script>
    import {increaseCounter} from '../../store/actions';
    import store from '../../store/index';
    import api from '../../plugins/axios'
    export default {
        computed: {
            aa () {
                return store().getters.counts
            },
        },
        methods: {
            reqAxios () {
                // this.$Message.error('This is a info tip');
                // api.get(`/api/dd`);
                // this.$axios.$get('http://icanhazip.com')
            },
            count () {
                increaseCounter("INCREASE",10);
                // store().commit("INCREASE",10)
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
