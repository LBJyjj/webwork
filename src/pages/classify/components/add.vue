<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="width">
          <el-select v-model="form.pid" placeholder="---请选择---">
            <el-option label="顶级分类" :value="0"></el-option>
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类名称" :label-width="width">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="width" v-if="form.pid">
          <div class="upload">
            +
            <img v-if="imgUrl" :src="imgUrl" alt="" />
            <input
              v-if="info.isShow"
              type="file"
              class="file"
              @change="getFile"
            />
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
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reqCateAdd, reqCateInfo, reqCateEdit } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      list: "classify/list",
    }),
  },
  props: ["info"],
  components: {},
  data() {
    return {
      imgUrl: "",
      width: "160px",
      form: {
        pid: 0,
        catename: "",
        img: null,
        status: 1,
      },
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    ...mapActions({
      requestCateList: "classify/requestCateList",
    }),
    getFile(e) {
      let file = e.target.files[0];
      console.log(file);

      let imgExtArr = [".jpg", ".png", "jpeg", ".gif"];
      let extName = file.name.slice(file.name.lastIndexOf("."));
      if (!imgExtArr.some((item) => item == extName)) {
        alert("文件格式不正确");
        return;
      }

      this.imgUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    hide() {
      this.info.isShow = false;
    },
    add() {
      reqCateAdd(this.form).then((res) => {
        alert("添加成功");
        this.hide();
        this.requestCateList();
      });
    },
    look(id) {
      reqCateInfo({ id: id }).then((res) => {
        this.form = res.data.list;
        this.imgUrl =this.$imgUrl+this.form.img;
        this.form.id = id;
      });
    },
    updata() {

      reqCateEdit(this.form).then((res) => {
        this.hide();
        this.requestCateList();
      });
    },
    empty() {
      this.form = {
        pid: 0,
        catename: "",
        img: null,
        status: 1,
      };
      this.imgUrl = null;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.upload {
  width: 150px;
  height: 150px;
  border: 1px dashed #ccc;
  text-align: center;
  line-height: 150px;
  font-size: 30px;
  position: relative;
}
.upload .file {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  opacity: 0;
}
.upload img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>