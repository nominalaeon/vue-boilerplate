import Vue from "vue";
import VueRS from "vuex-router-sync";

import Router from "./router";
import Store from "./store";

var apps = document.querySelectorAll(".app");

apps.forEach(initApp);

function initApp(appNode) {
    new Vue({
        el: appNode,

        router: Router,
        store: Store
    });
}
