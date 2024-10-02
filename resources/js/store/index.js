// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    sideBarOpen: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    }
  },
  actions: {
    toggleSidebarAction({ commit }) {
      commit('toggleSidebar');
    }
  }
});
