import Vuex, { Commit } from 'vuex';

const state: any = {
  menulist: [],
};

const mutations: any = {
  saveMenuList(states: any, params: object) {
    states.menulist = params;
  },
};

const actions: any = {
  saveMenuList(context: { commit: Commit }, params: object) {
    context.commit('saveMenuList', params);
  },
};

export default {
  namespaced: true,     // namespace 为 false 的时候，state，mutations, actions 可以全局调用，为 true,生成作用域，引用时声明模块名称
  state,
  mutations,
  actions,
}