<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>


        
        </el-form-item>
           <el-form-item
          label="规格属性"
          v-for="(item, index) in attrArr"
          :key="index"
        >
          <div class="con">
            <div class="input-wrap">
              <el-input v-model="item.value"></el-input>
            </div>
            <el-button type="primary" v-if="index == 0" @click="addAttr"
              >新增规格属性</el-button
            >
            <el-button type="danger" v-else @click="del(index)">删除</el-button>
          </div>
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
        <el-button type="primary" @click="update" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {reqSpecsAdd,reqSpecsInfo,reqSpecsEdit} from '../../../util/request'
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  computed:{
       ...mapGetters({
      list: "specs/list",
      total:'specs/total'
    }),
  },
  components: {},
  data() {
    return {
      width: "80px",
      attrArr: [{ value: "" }, { value: "" }],
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
    };
  },
  methods: {
       del(index) {
      this.attrArr.splice(index, 1);
    },
     ...mapActions({
      requestSpecsList: "specs/requestSpecsList",
       requestSpecsCount:'specs/requestSpecsCount',
       requestSpecsChange:'specs/requestSpecsChange'
    }),
    addAttr() {
      this.attrArr.push({ value: "" });
    },
    hide(){
          this.info.isShow = false
    },
    add() {
        this.form.attrs = JSON.stringify(this.attrArr.map(item=>item.value));
       reqSpecsAdd(this.form).then(res=>{
            this.hide()
            this.requestSpecsCount()
              if(this.total.total%2==0){
                 this.requestSpecsChange(this.info.page+1)
              }else{
                this.requestSpecsChange(this.info.page)
              }
       })
    },
    look(id){
        reqSpecsInfo({ id: id }).then((res) => {
        this.form = res.data.list[0];
        this.attrArr = JSON.parse(this.form.attrs).map((item) => ({
            value: item,
          }));
        this.form.id = id
        });
    },
    update(form) {
          this.form.attrs = JSON.stringify(
          this.attrArr.map((item) => item.value));
          reqSpecsEdit(this.form).then(res=>{
             this.hide()
             this.requestSpecsChange(this.info.page)
        })
    },
    empty(){
      this.form={ 
        specsname: "",
        attrs: "",
        status: 1,
      }
      this.attrArr=[{ value: "" }, { value: "" }];
    }
  },
  mounted() {
    this.requestSpecsList()
  },
};
</script>
<style scoped>
.con {
  display: flex;
}
.input-wrap {
  flex: 1;
}
</style>