<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="width">
          <el-tree
            :data="list"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="{
              children: 'children',
              label: 'title',
            }"
          >
          </el-tree>
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
import { reqRoleAdd, reqRoleEdit, reqRoleInfo } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      list: "menu/list",
    }),
  },
  components: {},
  data() {
    return {
      width: "160px",
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
    };
  },
  methods: {
    hide(){
          this.info.isShow = false
    },
    add() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleAdd(this.form).then((res) => {
        this.hide()
        this.requestRoleList();
      });
    },
    empty() {
      this.form = {
        rolename: "",
        menus: "",
        status: 1,
      };
            this.form.menus =this.$refs.tree.setCheckedKeys([]);

     
    },

    ...mapActions({
      requestMenuList: "menu/requestMenuList",
      requestRoleList: "role/requestRoleList",
    }),
    look(id) {
      reqRoleInfo({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.menus = this.$refs.tree.setCheckedKeys(
          JSON.parse(res.data.list.menus)
        );
        this.form.id = id;
      });
    },
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleEdit(this.form).then((res) => {
        this.hide()
        this.requestRoleList();
      });
    },
  },
  mounted() {
    if (this.list.length == 0) {
      this.requestMenuList();
    }
    this.requestRoleList()
  },
};
</script>
<style scoped>
</style>