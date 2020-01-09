import Vue from 'vue';
import Vuex from 'vuex';

import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  COMPLETE_TASK,
  COMPLETE_TASK_SUCCESS,
} from '@/store/types';
import State from '@/types/State';
import Task from '@/types/Task';

Vue.use(Vuex);

const data: State = {
  tasks: [],
};

const getters = {
  getTasks: (state: State) => state.tasks,
};

const mutations = {
  [ADD_TASK_SUCCESS]: (state: State, item: string) => {
    state.tasks.push({ description: item, completed: false });
  },
  [COMPLETE_TASK_SUCCESS]: (state: State, task: Task) => {
    const index = state.tasks.findIndex((item) => item.description === task.description);
    state.tasks[index].completed = !state.tasks[index].completed;
  },
};

const actions = {
  [ADD_TASK]: ({ commit }, item: string) => {
    commit(ADD_TASK_SUCCESS, item);
  },
  [COMPLETE_TASK]: ({ commit }, task: Task) => {
    commit(COMPLETE_TASK_SUCCESS, task);
  },
};

export default new Vuex.Store ({
  state: data,
  getters,
  mutations,
  actions,
});
