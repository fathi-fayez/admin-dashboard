import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/dashboard/dashboard.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
