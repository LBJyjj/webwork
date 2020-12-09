<template>
<div>
    <el-button type="primary" @click="addRole">添加</el-button>
    <v-Add :info='info' ref='one'></v-Add>
    <v-List @edit='edit($event)'></v-List>
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
         title:'角色添加',
         isAdd:true
     }
    
 }
},
methods:{
    addRole(){
       this.info={
           isShow:true,
           title:'角色添加',
           isAdd:true
       }
        this.$refs.one.empty()
    },
     edit(e){
        console.log(e)
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