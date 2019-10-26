import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, item) {
      state.items.push({ title: item, done: false })
    }
  }
})

export default store
