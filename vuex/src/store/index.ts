import Vue from 'vue';
import Vuex, {Action, ActionContext, StoreOptions} from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    },
  },
  actions: {
    // increase({state, getters, dispatch, commit}): ActionContext<State. State> {
    increase({state, commit}: ActionContext<State, State>) {
      commit('setCount', state.count + 1);
    },
    decrease({state, commit }: ActionContext<State, State>) {
      commit('setCount', state.count - 1);
    },
  },
  getters: {
    count: (state: State) => state.count,
  },
};

export default new Vuex.Store(store);