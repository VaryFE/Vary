import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
//import hljs from 'highlight.js';

const title = require('./i18n/title.json');

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
})

// router.afterEach((route: any) => {
//   Vue.nextTick(() => {
//     // const blocks = document.querySelectorAll('pre code:not(.hljs)');
//     // Array.prototype.forEach.call(blocks, hljs.highlightBlock);
//   });
//   const data = title[route.meta.lang];
//   for (let val in data) {
//     if (new RegExp('^' + val, 'g').test(route.name)) {
//       document.title = data[val];
//       return;
//     }
//   }
//   document.title = 'VarUI';
// });

export default router;
