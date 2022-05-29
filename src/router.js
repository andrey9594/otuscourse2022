import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomeView";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/books",
    component: () => import("./views/BooksView.vue"),
  },
  {
    path: "/books/add",
    component: () => import("./views/NewBookView.vue"),
  },
  {
    path: "/authors",
    component: () => import("./views/AuthorsView.vue"),
  },
  {
    path: "/authors/add",
    component: () => import("./views/NewAuthorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
