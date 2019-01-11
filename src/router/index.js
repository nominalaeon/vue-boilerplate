import Vue from "vue";
import Router from "vue-router";

import Home from "../views/home/Home.vue";

Vue.use(Router);

let redirectRoute = {
  // 404 Redirect
  path: "*",
  redirect: "/"
};

let homeRoute = {
  component: Home,
  name: "home",
  path: "/"
};

export default new Router({
  routes: [homeRoute]
});