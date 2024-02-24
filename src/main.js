import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount("#app");
