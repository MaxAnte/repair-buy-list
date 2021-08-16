import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    params: [],
  },
  getters: {
    sumOfPrices(state) {
      if (state.items.length) {
        return state.items
          .map((el) => el.price * el.quantity)
          .reduce((prev, cur) => (prev += cur))
          .toFixed(2);
      }
    },
    sumOfSquareMeters(state) {
      if (state.params.length) {
        return state.params
          .map((el) => (el.width * el.length) / 10000)
          .reduce((prev, cur) => (prev += cur))
          .toFixed(2);
      }
    },
    sortedItems(state) {
      return state.items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    },
    sortedParams(state) {
      return state.params.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_PARAMS(state, params) {
      state.params = params;
    },
  },
  actions: {
    async getItems({ commit }) {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        commit("SET_ITEMS", Object.values(data));
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
    },
    async getParams({ commit }) {
      try {
        const response = await fetch("/api/params");
        const data = await response.json();
        commit("SET_PARAMS", Object.values(data));
      } catch (e) {
        console.error("Error on fetch from component:", e.message);
      }
    },
  },
  modules: {},
});
