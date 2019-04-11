import { SOME_MUTATION } from '../mutation-types';
import {increaseCounter} from '../actions'

export const modelA = {
    state : {
        list:[{
            name:'张三'
        }],
        count:1,
    },

    //定义动作
    mutations: {//模仿ajax获取新数据后 动态更新data
        GETLIST(state, amount) {
            state.list = amount
        },
        //官方例子，加减
        INCREASE(state, amount) {
            state.count = state.count + amount
        },
        REDUCE(state, amount) {
            state.count = state.count - amount
        },
        [SOME_MUTATION](state) {
            // mutate state
        }
    },

    getters: {
        counts: state => {
            return state.count
        }
    },

    actions: {
        increaseCounter
    }
};




