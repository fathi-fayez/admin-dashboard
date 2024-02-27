import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../pages/dashboard/dashboard.vue"
      ),
  },
  {
    path: "/MangeTeam",
    name: "MangeTeam",
    component: () =>
      import(
        /* webpackChunkName: "MangeTeam" */ "../pages/mangeTeam/mangeTeam.vue"
      ),
  },
  {
    path: "/ContactsInformation",
    name: "ContactsInformation",
    component: () =>
      import(
        /* webpackChunkName: "ContactsInformation" */ "../pages/contacts Information/contactInfo.vue"
      ),
  },
  {
    path: "/ProfileForm",
    name: "Profile Form",
    component: () =>
      import(
        /* webpackChunkName: "Calendar" */ "../pages/Profile Form/profileForm.vue"
      ),
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: () =>
      import(
        /* webpackChunkName: "Calendar" */ "../pages/Calendar/calendar.vue"
      ),
  },
  {
    path: "/F&QPage",
    name: "F&Q Page",
    component: () =>
      import(
        /* webpackChunkName: "Calendar" */ "../pages/F&Q Page/F&QPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
