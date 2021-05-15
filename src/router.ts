import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Blog from "./views/blog.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import NotFound from "./views/notFound.vue";

// Articles urls
import posts from "./data/blog-posts";

Vue.use(VueRouter);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any = [
  { path: "/", name: "home", component: Home },
  { path: "/blog", name: "blog", component: Blog },
  { path: "/contact", name: "contact", component: Contact },
  //{ path: "/about-me", name: "about-me", component: AboutMe },
  { path: "/notfound", name: "not_found", component: NotFound }
];

// Articles url redirect
posts.forEach(post => {
  routes.push({
    path: post.url,
    beforeEnter() {
      location.href = post.redirectTo;
    }
  });
});

routes.push({
  path: "/*",
  redirect: "/notfound"
});

export default new VueRouter({ mode: "history", routes });
