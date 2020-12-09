import {reqUserList,reqUserCount} from '../../util/request'

const state={
    list:[],
    total:{}//请求回来的数据
}
const mutations={
    changeCount(state,obj){
        state.total = obj
    },
    changeList(state,arr){
        state.list = arr
    },
    changeOtherList(state,arr1){
        state.list = arr1
    },

}

const actions={
    requestUserCount(context){
        reqUserCount().then(res=>{
            context.commit('changeCount',res.data.list[0])
        })
    },
    requestUserList(context){
        reqUserList({ size: 2, page: 1,}).then(res=>{
            context.commit('changeList',res.data.list)
        })
    },
    reqUserChange(context,data){
        reqUserList({ size: 2, page: data,}).then(res=>{
            context.commit('changeOtherList',res.data.list)
        })
    }
}
const getters={
     total(state){
         return state.total
     },
     list(state){
         return state.list
     },

}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}