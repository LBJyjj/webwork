import { reqCateList } from '../../util/request'

const state = {
    list: sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):{},
}
const mutations = {
    changeUser(state, obj) {
        state.list = obj
        sessionStorage.setItem('list',JSON.stringify(obj))
    },

}

const actions = {
    requestUserList(context, obj) {
        context.commit('changeUser', obj)
    }

}
const getters = {
    list(state) {
        return state.list
    },

}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}