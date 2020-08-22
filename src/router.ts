import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Articles from './views/articles.vue';
import Contact from './views/contact.vue';
import Home from './views/home.vue';
import NotFound from './views/notFound.vue';
import Skills from './views/skills.vue';

// Articles urls
import articles from './data/articles';

Vue.use(VueRouter);

const routes: any = [
  { path: '/', name: 'home', component: Home },
  { path: '/articles', name: 'articles', component: Articles },
  { path: '/skills', name: 'skills', component: Skills },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/notfound', name: 'not_found', component: NotFound },
  { path: '*', redirect: '/notfound' },
];

// Articles url redirect
articles.forEach(article => {
  const articleRoute = {
    path: article.url,
    beforeEnter() { location.href = article.redirectTo; },
  };

  routes.push(articleRoute);
});

export default new VueRouter({ mode: 'history', routes });
