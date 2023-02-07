import Vue from "vue";
import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
