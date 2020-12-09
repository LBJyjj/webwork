<template>
  <div>
    <el-dialog :title="show.title" :visible.sync="show.addShow">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="width">
          <el-select
            v-model="form.pid"
            placeholder="---请选择---"
            @change="changePid"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型" :label-width="width">
          <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>

        <el-form-item
          label="菜单图标"
          :label-width="width"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="---请选择---">
            <el-option label="星星" value="el-icon-star-on">
              <i class="el-icon-star-on"></i>
            </el-option>
            <el-option label="人物" value="el-icon-user-solid">
              <i class="el-icon-user-solid"></i>
            </el-option>
            <el-option label="铃铛" value="el-icon-message-solid">
              <i class="el-icon-message-solid"></i>
            </el-option>
            <el-option label="书签" value="el-icon-collection-tag">
              <i class="el-icon-collection-tag"></i>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="width" v-else>
          <el-select v-model="form.url" placeholder="---请选择---">
            <el-option
              v-for="item in indexRouters"
              :key="item.path"
              :label="'/' + item.path"
              :value="item.name"
            >
            </el-option>
          </el-select>
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
        <el-button @click="show.addShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="show.isAdd"
          >添加</el-button
        >
        <el-button type="primary" @click="change()" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reqMenuAdd, reqMenuListOne,reqChangeMenu } from "../../../util/request";
import { indexRouters } from "../../../router/index";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["show"],
  computed: {
    ...mapGetters({
      menuList: "menu/list",
    }),
  },
  components: {},
  data() {
    return {
      //   isShow: true,
      width: "160px",
      form: {
        pid: "",
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1,
      },
      indexRouters: indexRouters,
    };
  },
  methods: {
    hide() {
      this.show.addShow = false;
    },
    ...mapActions({
        requestMenuList:'menu/requestMenuList'
    }),
    empty() {
      this.form = {
        pid: "",
        title: "",
        icon: "",
        type: 1,
        url: "",
        status: 1,
      };
    },
    add() {
      reqMenuAdd(this.form).then((res) => {
        this.hide();
        this.requestMenuList()
      });
    },
    changePid() {
      this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    look(id) {
      reqMenuListOne({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.id = id
      });
    },
    change() {
      reqChangeMenu(this.form).then((res)=>{
          this.hide();
          this.requestMenuList()
      })
    }
  },
  mounted() {
    // this.reqMenuList()
  },
};
</script>
<style scoped>
</style>