import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store, { IStore } from './store';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

// 将改造过后的 Store 类型声明到 vue 的原型上，这样就可以在.vue 文件中获得 IDE 的智能提示了
// 因为下面去声明一个新的 Store 类型的时候，无法覆盖 vue 原有的 $store 类型声明，所以采取一个新的名字 $$store 来应用新的类型，本质上都是 app.$store
Vue.prototype.$$store = app.$store;

app.$mount('#app');

declare module 'vue/types/vue' {
  interface Vue {
    $$store: IStore;
  }
}