import Vue from 'vue';
import Vuex from 'vuex';
import {modelA} from './modules/modelA';
import {modelB} from './modules/modelB';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        a:modelA,
        b:modelB,
    },
});
export default store