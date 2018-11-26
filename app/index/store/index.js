import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';


Vue.use(Vuex);

Vue.config.devtools = true;

export default new Vuex.Store({
    state,
    mutations

});