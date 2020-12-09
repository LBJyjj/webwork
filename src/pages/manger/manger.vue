<template>
<div>
    <el-button type="primary" @click="addManger">添加</el-button>
    <v-add :info="info" ref='one' :key="info.page"></v-add>
    <v-List @edit='edit($event)' ref='two' @changePage="changePage($event)"></v-List>
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
         title:'管理员添加',
         isAdd:true,
         page:1
     },
 }
},
methods:{
    addManger(){
        this.info.isShow=true;
        this.info.title='管理员添加'
        this.info.isAdd=true,
        this.$refs.one.empty()
    },
    edit(e){
        this.info.isShow=true;
        this.info.title='管理员编辑'
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