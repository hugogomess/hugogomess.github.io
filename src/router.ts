import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Blog from "./views/blog.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import AboutMe from "./views/about-me.vue";
import Tools from "./views/tools.vue";
import NotFound from "./views/not-found.vue";

// Blog posts urls
import posts from "./data/blog-posts";

Vue.use(VueRouter);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any = [
  { path: "/", name: "home", component: Home },
  { path: "/blog", name: "blog", component: Blog },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/about-me", name: "about-me", component: AboutMe },
  { path: "/tools", name: "tools", component: Tools },
  { path: "/404", name: "not-found", component: NotFound }
];

// Blog urls redirect
posts.forEach(post => {
  routes.push({
    path: post.url,
    beforeEnter() {
      location.href = post.redirectTo;
    }
  });
});

routes.push({ path: "/*", redirect: "/404" });

export default new VueRouter({ mode: "history", routes });
