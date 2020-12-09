import {reqGoodsList,reqGoodsCount} from '../../util/request'

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
}

const actions={
    requestGoodsCount(context){
        reqGoodsCount().then(res=>{
            context.commit('changeCount',res.data.list[0])
        })
    },
    requestGoodsList(context){
        reqGoodsList({ size: size, page: page,fid:fid,sid:sid}).then(res=>{
            context.commit('changeList',res.data.list)
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