import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import store from "./views/store";
import Vuelidate from "vuelidate";
const app = createApp(App);
app
  .use(Vuelidate)
  .use(store)
  .use(router)
  .use(ToastPlugin, { position: "top-right" })
  .mount("#app");
