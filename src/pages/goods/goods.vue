<template>
<div>
      <el-button type="primary" @click="addGoods">添加</el-button>
      <v-add :info='info' ref='one'></v-add>
      <v-list @edit='edit($event)'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
import { mapGetters, mapActions } from "vuex";
export default {
     ...mapGetters({
      list: "classify/list",
    }),
components:{
    vAdd,
     vList
 },
data () {
 return {
     info:{
         isShow:false,
         title:'商品分类添加',
         isAdd:true,
     },
 }
},
methods:{
    addGoods(){
          this.info = {
            isShow:true,
            title:'商品分类添加',
            isAdd:true,       
        }
        this.$refs.one.empty()
        
    },
      edit(e){
       this.info={
           isShow:true,
           title:'角色编辑',
           isAdd:false
       }
        this.$refs.one.look(e)
    },
     ...mapActions({
      requestCateList: "classify/requestCateList",
    }),
},
mounted(){
}
}
</script>
<style scoped>
</style>