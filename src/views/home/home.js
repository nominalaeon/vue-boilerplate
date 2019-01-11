
import Vue from "vue";

import Example from '../../components/example/Example.vue';

var homeView = {
    name: "HomeView",

    components: {
        'example': Example
    },

    data: function assignData() {
        return {};
    },

    methods: {},

    mounted: function onMounted() {
        console.info("HomeView mounted", this);
    }
};

export default Vue.extend(homeView);

/**
 * General methods
 */
