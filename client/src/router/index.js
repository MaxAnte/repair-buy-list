import { createRouter, createWebHistory } from "vue-router";
import List from "../views/List";

const routes = [
  {
    path: "/",
    name: "Home",
    component: List,
  },
  {
    path: "/params",
    name: "Parameters",
    component: () => import("../views/Parameters"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
