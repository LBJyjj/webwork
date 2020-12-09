<template>
  <div class="box">
    <div class="con">
      <h3>登录</h3>
      <div class="inp"> <input type="text" v-model="form.username" placeholder="用户名"> </div>
      <div class="inp"><input type="text" v-model="form.password" placeholder="密码"></div>
      <div class="inp"> <button @click="login">登录</button> </div>
    </div>
  </div>
</template>
<script>
import {reqUserLogin} from '../../util/request'
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {},
  data() {
    return {
      form:{
            username:'',
            password:''
      }
     
    };
  },
  methods: {
    ...mapActions({
requestUserList:'user/requestUserList'
    }),
    login(){
       reqUserLogin(this.form).then(res=>{
         alert(res.data.msg)
         if(res.data.code == '200'){
           this.$router.push('/index')
             this. requestUserList(res.data.list)
         }
        
       });
      
    }
  },
  mounted() {},
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d60);
  overflow: hidden;
}
.con {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.con h3 {
  display: block;
  width: 100%;
  height: 60px;
 text-align: center;
 line-height: 60px;
  font-size: 24px;
}
.con .inp {
  width: 60%;
  height: 30px;
  margin: 30px auto;
}
.con .inp input {
  width: 100%;
  height: 30px;
  border: 1px solid silver;
  border-radius: 5px;
  text-indent: 1em;
}

.con button {
  width: 100%;
  height: 30px;
  background-color: #409eff;
  color: #fff;
  outline: none;
  border: none;
}
</style>