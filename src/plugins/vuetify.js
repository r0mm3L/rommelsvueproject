import Vue from 'vue';
import Vuetify from 'vuetify/lib';
/*import { mdiArrowRightBoldBoxOutline } from '@mdi/js';
import  'vuetify/src/stylus/app.slyl'*/
/*import Vuetify from 'vuetify';*/

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70'
        
    }
});
