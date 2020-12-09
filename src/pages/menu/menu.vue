<template>
<div>
     <el-button type="primary" @click="addMenu">添加</el-button>
     <v-add :show='show' ref='one'></v-add>
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
      show:{
           addShow:false,
           isAdd:true,  
           title:'菜单添加'
      }
     
 }
},
methods:{
     addMenu(){
          this.show={
             addShow:true,
             isAdd:true,  
             title:'菜单添加'
          }
     //     this.show.addShow = !this.show.addShow
           this.$refs.one.empty()
          
     },
     edit(e){
        // console.log(e)
       this.show={
             addShow:true,
             isAdd:false,  
             title:'菜单编辑'
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