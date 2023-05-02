import { createRouter, createWebHistory } from "vue-router";
import UserDashboard from "@/views/UserDashboard.vue";
import Login from "../views/login.vue";
const routes = [
  {
    path: "/user-dashboard",
    name: "UserDashboard",
    component: UserDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: "home",
    component: Login,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
