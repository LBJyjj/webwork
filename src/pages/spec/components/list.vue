<template>
<div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="id" label="规格编号" >
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" >
      </el-table-column>

       <el-table-column prop='attrs'  label="规格属性" >
        <template slot-scope="scope">
          <el-tag v-for="(item,index) in scope.row.attrs" :key="index">{{
            item
          }}</el-tag>
        </template>
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


     <el-pagination background layout="prev, pager, next" :total="total.total" :page-size='2' @current-change='change'>
    </el-pagination>
</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {reqSpecsDel} from '../../../util/request'
export default {
     computed:{
       ...mapGetters({
      list: "specs/list",
      total:'specs/total'
    }),
     },
components:{
 },
data () {
 return {
     page:0,
 }
},
methods:{
     ...mapActions({
       requestSpecsCount:'specs/requestSpecsCount',
      requestSpecsList: "specs/requestSpecsList",
      requestSpecsChange:'specs/requestSpecsChange'
      
    }),
    change(e){
      this.requestSpecsChange(e);
      this.page = e
      this.$emit('changePage',e);
    },
    edit(e){
       this.$emit('edit',e)
    },
    del(id){
        reqSpecsDel({id:id}).then(res=>{
             alert('删除成功')
             this.requestSpecsCount();
             this.requestSpecsChange(this.page-1);
             this.requestSpecsList();
        })
    }
},
mounted(){
    this.requestSpecsCount()
    this.requestSpecsList()
}
}
</script>
<style scoped>
.box{
    margin-top: 20px;
}
</style>