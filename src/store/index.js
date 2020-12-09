import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import menu from './modules/menu'
import role from './modules/role'
import manger from './modules/manger'
import classify from './modules/classify'
import specs from './modules/specs'
import goods from './modules/goods'
import user from './modules/user'
export default new Vuex.Store({
        modules:{
            menu,
            role,
            manger,
            classify,
            specs,
            goods,
            user
        }
})