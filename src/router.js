import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";

import main from "./layouts/main.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import dash from "./layouts/dash.vue";
import Users from "./views/Users.vue";
import Corsi from "./views/Corsi.vue";

const requireAuth = async (to, form, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("login");
  }
};

const routes = [
  { path: "/", name: Home, component: Home, meta: { layout: main } },
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: requireAuth,
    meta: { layout: dash },
    children: [
      {
        path: "users",
        component: Users,
      },
      {
        path: "",
        component: Corsi,
      },
    ],
  },
  { path: "/login", component: Login, meta: { layout: main } },
  { path: "/register", component: Register, meta: { layout: main } },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
