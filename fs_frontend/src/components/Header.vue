<template>
  <div class="header_container">
    <div>
      <img src alt />
      <span>Test tool platform</span>
    </div>
    <el-button type="info" @click="logout">Logout</el-button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header_container {
  background-color: #545c64;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
</style>
