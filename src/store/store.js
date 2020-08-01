/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleTestYourSelf from "./test-yourself/moduleTestYourSelf";
import moduleHome from "./home/moduleHome";

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      testYourSelf: moduleTestYourSelf,
        home: moduleHome
    },
    strict: process.env.NODE_ENV !== 'production'
})
