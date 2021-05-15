import Vue from "vue";
import App from "./App.vue";
import router from "./router";

export default new Vue({
  router,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (h: any) => h(App)
}).$mount("#app");
