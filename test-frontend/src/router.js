import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/molecule",
    name: "molecule",
    component: () => import("./components/MoleculeList")
  },
  {
    path: "/molecule/:id",
    name: "molecule-detail",
    component: () => import("./components/MoleculeDetail")
  },
  {
    path: "/molecule/:id/activity/",
    name: "molecule-activity",
    component: () => import("./components/MoleculeActivity")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;