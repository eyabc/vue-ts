import { RootState } from "./index";
interface moduleA {
	data: string;
}

const module: Moudle<moduleA, RootState> = {
	namespace: true,
	state: {
		data: 'moduleA',
	},
	mutations: {
		setData(state, data: string) {
			state.data = data;
		},
	},
	actions: {
		setRootData({commit}, data: string) {
			commit('setData', data);
		},
	},
	getters: {
		data: (state) => state.data,
	},
};

export default module;