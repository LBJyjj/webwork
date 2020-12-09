<template>
  <div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号"> </el-table-column>
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column prop="rolename" label="所属角色"> </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :current-page='info.page' :total="total.total" :page-size='2' @current-change='change'>
    </el-pagination>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import { reqUserCount,reqUserDelete } from "../../../util/request";
export default {
  components: {},
  computed:{
      ...mapGetters({
          list:'manger/list',
          total:'manger/total'
      })    
     
  },
  data() {
    return {
      info:{
        page:1
      }
    };
  },
  methods: {
    edit(e) {
      this.$emit('edit',e)
      console.log(e);
    },
    del(uid){
        reqUserDelete({uid:uid}).then(res=>{
          alert('删除成功')
         
          this.requestUserCount() 
          this.reqUserChange(this.info.page-1)
           this.requestUserList()
          
          
        })
    },
    ...mapActions({
      requestUserCount:'manger/requestUserCount',
       requestUserList:'manger/requestUserList',
       reqUserChange:'manger/reqUserChange'
        
    }),
    change(e){
      this.reqUserChange(e);
      this.$emit('changePage',e);
      this.info.page=e;
    }
  },
  mounted() {
    this.requestUserCount();
    this.requestUserList();
   
  }
}
</script>
<style scoped>
.box {
  margin-top: 20px;
}
</style>