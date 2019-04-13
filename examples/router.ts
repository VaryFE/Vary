import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.config"

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

// router.afterEach(route => {
//   // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
//   Vue.nextTick(() => {
//     // const blocks = document.querySelectorAll('pre code:not(.hljs)');
//     // Array.prototype.forEach.call(blocks, hljs.highlightBlock);
//   });
//   const title = require('./i18n/title');
//   const data = title[route.meta.lang];
//   for (let val in data) {
//     if (new RegExp('^' + val, 'g').test((route as any).name)) {
//       document.title = data[val];
//       return;
//     }
//   }
//   document.title = 'VarUI';
// });

export default router;
