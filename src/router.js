import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/books",
    name: "books",
    component: () => import("@/views/BooksView.vue"),
  },
  {
    path: "/books/add",
    name: "addBook",
    component: () => import("@/views/NewBookView.vue"),
  },
  {
    path: "/authors",
    name: "authors",
    component: () => import("@/views/AuthorsView.vue"),
  },
  {
    path: "/authors/add",
    name: "addAuthor",
    component: () => import("@/views/NewAuthorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
