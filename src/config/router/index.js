import { createRouter, createWebHistory } from "vue-router";
import Home from "../../components/pages/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

/* // Role access
router.beforeEach(() => isAuthenticated);
 router.beforeEach((to, from, next) => {
  if (!isAuthenticated) {
    next(false);
  }
  else { 
    next();
  }
})
*/

export default router;
