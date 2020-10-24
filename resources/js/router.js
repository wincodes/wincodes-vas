import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import NotFound from './Pages/NotFound.vue'
import Welcome from "./Jetstream/Welcome.vue"
import Airtime from "./Pages/Vas/Airtime.vue"

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Welcome,
  },
  {
      path: "/airtime",
      name: "airtime",
      component: Airtime
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});


export default router;
