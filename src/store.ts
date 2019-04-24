import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const STORAGE_KEY = 'todo';

export default new Vuex.Store({
  state: {
    todoData: new Array<string>(),
  },
  mutations: {
    addItem({ todoData }, item: string): void {
      todoData.push(item);
    },
    removeItem({ todoData }, target: string): void {
      const targetIndex = todoData.indexOf(target);
      if (targetIndex !== -1) {
        todoData.splice(targetIndex, 1);
      }
    },
    updateItem({ todoData }, { target, update }): void {
      const targetIndex = todoData.indexOf(target);
      if (targetIndex !== -1) {
        todoData[targetIndex] = update;
      }
    },
  },
  actions: {
    loadData({ commit, dispatch }): void {
      try {
        const data: any = localStorage.getItem(STORAGE_KEY);
        JSON.parse(data).forEach((item: string) => {
          commit('addItem', item);
        });
      } catch (e) {
        commit('addItem', 'Hello!');
        dispatch('saveData');
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
