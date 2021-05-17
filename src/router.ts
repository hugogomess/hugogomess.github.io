import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import AboutMe from "./views/about-me.vue";
import Tools from "./views/tools.vue";
import NotFound from "./views/not-found.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/about-me", name: "about-me", component: AboutMe },
  { path: "/tools", name: "tools", component: Tools },
  { path: "/404", name: "not-found", component: NotFound },
  { path: "/*", redirect: "/404" }
];

export default new VueRouter({ mode: "history", routes });
