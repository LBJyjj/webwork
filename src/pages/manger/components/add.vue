<template>
<div>
     <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
       
        <el-form-item label="所属角色" :label-width="width"  disabled>
          <el-select
            v-model="form.roleid"
            placeholder="---请选择---"
           
          >
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>


          <el-form-item label="用户名" :label-width="width">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>

           <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添加</el-button
        >
        <el-button type="primary" @click="update()" v-else>修改</el-button>
      </div>
    </el-dialog>
</div>
</template>
<script>
import {reqUserAdd,reqUserInfo,reqUserEdit,reqUserList} from '../../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
    props:['info'],
    computed:{
       ...mapGetters({
           list:'role/list',
           manList:'manger/list',
           total:'manger/total'
       })
    },
components:{
 },
data () {
 return {
     width:'160px',
     form:{
         uid:'',
         roleid:1,
         username:'',
         password:'',
         status:1
     },
 }
},
methods:{
    hide(){
        this.info.isShow = false
    },
    add(){
         reqUserAdd(this.form).then(res =>{
             alert('添加成功')
            
             this.hide();
              this.requestUserCount()
              
              if(this.total.total%2==0){
                 this.reqUserChange(this.info.page+1)
              }else{
                this.reqUserChange(this.info.page)
              }

         })
    },
    update(){
      console.log(this.info.page);
        reqUserEdit(this.form).then(res=>{
             this.hide();
             this.reqUserChange(this.info.page)
             
        })
    },
    look(uid) {
      reqUserInfo({ uid: uid }).then((res) => {
        this.form = res.data.list;
        this.form.password = '';
        this.form.uid = uid
      });
    },
    ...mapActions({
        requestRoleList:'role/requestRoleList',
        requestUserList:'manger/requestUserList',
        requestUserCount:'manger/requestUserCount',
        reqUserChange:'manger/reqUserChange'
        
    }),
    empty(){
        this.form={
         uid:'',
         roleid:1,
         username:'',
         password:'',
         status:1
     }
    }
},
mounted(){
    this.requestRoleList()
    console.log(this.info.page);
}
}
</script>
<style scoped>
</style>