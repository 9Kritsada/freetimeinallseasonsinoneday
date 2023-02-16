import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "./views/Content.vue";
import Test from "./views/Test.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "test",
    path: "/test",
    component: Test
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
