// vue component
//const Vue = require('vue');
// state management
//const Vuex = require('vuex');

import Vue from 'vue';
import Vuex from 'vuex';

// component uses state management
Vue.use(Vuex);

// store, we define state here
// count init
const state = {
  count: 0
};

// store gets the action, what does the action do
// change part of the state.

// mutation is const.... why
// because we don't want people to change it.
// change, create new one
const mutations = {
  // increase value get state
  // we change part of state
  INCREMENT_VALUE(state) {
    state.count++;
  }
};

// export vuxe store
// store has state and mutation.....
export default new Vuex.Store({
  state, // data
  mutations // method to change data
});
