<template>
  <el-container class="home_container">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Navigation />
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navigation from './Navigation'
import Header from './Header'

export default {
  name: 'home',
  components: { Navigation, Header }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
  background-color: #fff;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
