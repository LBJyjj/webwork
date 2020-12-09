<template>
<div>
     <div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="id" label="角色编号" >
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" >
      </el-table-column>
      <el-table-column prop="status" label="状态" >
           <template slot-scope="scope">
          <el-button type='primary'  v-if='scope.row.status==1'>启用</el-button>
          <el-button type='danger' v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
          
           <template slot-scope="scope">
          <el-button type='primary' @click="edit(scope.row.id)">编辑</el-button>
          <el-button type='danger' @click="del(scope.row.id)">删除</el-button>
        </template>

           </el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {reqRoleDel} from '../../../util/request'
export default {
components:{
 },
 computed:{
    ...mapGetters({
        list:'role/list'
    })
 },
data () {
 return {
     form:{
         rolename:'',
         menus:'',
         status:1
     }
 }
},
methods:{
    edit(id){
         this.$emit('edit',id)
    },
    del(id){
        reqRoleDel({id:id}).then(res => {
            alert('删除成功');
            this.requestRoleList()
        })
    },
    ...mapActions({
         requestRoleList:'role/requestRoleList'
    })
},
mounted(){
    this.requestRoleList()
}
}
</script>
<style scoped>
.box {
    margin-top: 20px;
}
</style>