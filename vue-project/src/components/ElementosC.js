import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserProfileView from "@/views/UserProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/user/:id", component: UserProfileView }, // Ruta dinámica con ":id"
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


