<template>
<div>
    
 
 <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px;text-align: center;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="分类编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="catename" label="分类名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="img" label="图片"> 
      <template slot-scope="scope">
        <img :src='$imgUrl+scope.row.img' alt="">
      </template>
      </el-table-column>
   
      <el-table-column prop="status" label="状态">
         <template slot-scope="scope">
          <el-button type='primary' v-if='scope.row.status==1'>启用</el-button>
          <el-button type='danger' v-else>禁用</el-button>
        </template>
      </el-table-column>

      

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type='primary' @click="edit(scope.row.id)">编辑</el-button>
          <el-button type='danger' @click='del(scope.row.id)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>


</div>
</template>
<script>
import {reqCateDel} from '../../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
    computed:{
       ...mapGetters({
           list:'classify/list'
       })
    },
components:{
 },
data () {
 return {
 }
},
methods:{
    ...mapActions({
        requestCateList:'classify/requestCateList'
    }),
    edit(id){
        this.$emit('edit',id)
    },
     del(id){
      reqCateDel({id:id}).then((res)=>{
          alert('删除成功')
          this.requestCateList()
      })
    }
},
mounted(){
    this.requestCateList()
}
}
</script>
<style scoped>
img{
    width: 100px;
    height: 100px;
    margin-left: 150px;
}

</style>