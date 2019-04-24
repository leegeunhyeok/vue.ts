import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const STORAGE_KEY = 'todo';

export default new Vuex.Store({
  state: {
    todoData: new Array<string>(),
  },
  mutations: {
    addItem(state, item: string): void {
      state.todoData.push(item);
    },
    removeItem(state, target: string): void {
      const targetIndex = state.todoData.indexOf(target);
      if (targetIndex !== -1) {
        state.todoData.splice(targetIndex, 1);
      }
    },
    updateItem(state, { target, update }): void {
      const targetIndex = state.todoData.indexOf(target);
      if (targetIndex !== -1) {
        state.todoData[targetIndex] = update;
      }
    },
  },
  actions: {
    loadData({ commit }): void {
      try {
        const data: any = localStorage.getItem(STORAGE_KEY);
        JSON.parse(data).forEach((item: string) => {
          commit('addItem', item);
        });
      } catch (e) {
        commit('addItem', 'Hello!');
      }
    },
    saveData({ state }): void {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todoData));
      } catch (e) {
        // tslint:disable-next-line
        console.error('Save error!', e)
      }
    },
  },
});
