<template>
<div>
   <el-button type="primary" @click="addSpec">添加</el-button>
   <v-add :info='info' ref='one'></v-add>
   <v-list @edit='edit($event)'  @changePage="changePage($event)"></v-list>
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
         title:'规格添加',
         isAdd:true,
         page:1
     }

 }
},
methods:{
   addSpec(){
         this.info.isShow=true;
        this.info.title='规格添加'
        this.info.isAdd=true,
       this.$refs.one.empty()
   },
   edit(e){
        this.info.isShow=true;
        this.info.title='规格编辑'
        this.info.isAdd=false,
       this.$refs.one.look(e)
   },
   changePage(e){
        this.info.page = e;
    }
},
mounted(){
}
}
</script>
<style scoped>
</style>