import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                success: "#009B72"
            },
            dark: {
                success: "#009B72"
            }
        },
    }
});
