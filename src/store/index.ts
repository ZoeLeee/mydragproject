import { IElement } from '@/application/interfaces/element';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//类型 参考 https://forum.vuejs.org/t/vuex-typescript/66635

export interface State {
  components: IElement[];
}

const DEAULT_COMPONENTS: IElement[] = [
  {
    type: "v-text",
    title: "文字",
  },
  {
    type: "v-button",
    title: "按钮",
  }
];


// 将 getter 函数转换成 {getterName: getterFuncsReturnType} 的对象类型
// export type ReturnGetters<T extends { [key: string]: (...args: any) => any; }> = {
//   [P in keyof T]: ReturnType<T[P]>;
// };


const store = new Vuex.Store<State>({
  state: {
    components: [...DEAULT_COMPONENTS],
  },
  mutations: {
    pushComponent(state: State, com: IElement) {
      state.components.push(com);
    }
  },
  actions: {
  },
  modules: {
  }
});


export default store;

// type Getters = { [key: string]: () => void; };
// type Commit = {
//   [key: string]: any;
// };
// type Dispatch = any;

// 其他 ts 文件解构导入时获得每个对象的改造后类型
export const { state } = store;
// export const { getters }: { getters: Getters; } = store; // 定义 getters 的类型
// export const { commit }: { commit: Commit; } = store; // 定义 commit 的类型
// export const { dispatch }: { dispatch: Dispatch; } = store; // 定义 commit 的类型

// 导出类型 Store 以便在 Vue 原型上定义类型
export interface IStore {
  state: State;
  // getters: Getters;
  // commit: Commit;
  // dispatch: Dispatch;
}