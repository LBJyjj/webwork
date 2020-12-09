<template>
<div>
      <el-button type="primary" @click="addClassify">添加</el-button>
      <v-add :info='info' ref='one'></v-add>
      <v-list @edit='edit($event)'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
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
     }
 }
},
methods:{
    addClassify(){
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
    }
},
mounted(){
}
}
</script>
<style scoped>
</style>