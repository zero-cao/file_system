<template>
  <div class="navigation_container">
    <el-menu active-text-color="#ffd04b" class="el-menu-demo">
      <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>{{subItem.name}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  created() {
    this.getMenuList()
  },
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    getMenuList() {
      this.axios
        .get('menu_list')
        .then(result => {
          this.menuList = result.data
        })
        .catch(error => {
          if (error.response.data.code !== 200) {
            return this.$message.error(error.response.data.status)
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.navigation_container {
  background-color: #d3dce6;
  width: '100px';
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
