import {reqSpecsList,reqSpecsCount} from '../../util/request'

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
    changeTotal(state,arr2){
        state.list = arr2
    },

}

const actions={
    requestSpecsCount(context){
        reqSpecsCount().then(res=>{
            context.commit('changeCount',res.data.list[0])
        })
    },
    requestSpecsList(context){
        reqSpecsList({ size: 2, page: 1,}).then(res=>{
            var arr = res.data.list;
            arr.forEach(item => {
                item.attrs =JSON.parse(item.attrs)
            });
            context.commit('changeList',arr)
        })
    },
    requestSpecsChange(context,data){
        reqSpecsList({ size: 2, page: data}).then(res=>{
            var arr = res.data.list;
            arr.forEach(item => {
                item.attrs =JSON.parse(item.attrs)
            });
            context.commit('changeOtherList',arr)
        })
    },
    requestSpecsTotal(context){
        reqSpecsList({ size: context.state.total.total, page: 1}).then(res=>{
            var arr = res.data.list;
            arr.forEach(item => {
                item.attrs =JSON.parse(item.attrs)
            });
            context.commit('changeTotal',arr)
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