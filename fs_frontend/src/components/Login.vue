<template>
  <div class="login_container">
    <div class="login_box">
      <!-- image area -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- form area -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
        <!-- username -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-s-goods" type="password"></el-input>
        </el-form-item>
        <!-- buttons -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">Login</el-button>
          <el-button type="warning" @click="resetLoginForm">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // login form data
      loginForm: {
        username: 'admin',
        password: '123456'
      },

      // login form data validation
      loginFormRules: {
        username: [
          { required: true, message: 'Please input username', trigger: 'blur' },
          {
            min: 5,
            max: 10,
            message: 'Length should be 5 to 10',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: 'Length should be 6 to 20',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // reset all fields for login form
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },

    // validate all fields, if ok, send them to server
    login() {
      this.$refs.loginFormRef.validate(
        /** async **/ valid => {
          if (!valid) return null
          // const { data: result } = await this.$http.post('login', this.loginForm)
          // if (result.meta.status !== 200) return this.$message.error('Failed to login')
          // this.$message.success('Login successfully')
          this.axios
            .post('login', this.loginForm)
            .then(result => {
              window.sessionStorage.setItem('token', result.data.token)
              // this.$message.success('Login successfully')
              this.$router.push('/home')
            })
            .catch(error => {
              if (error.response.data.code !== 200) {
                return this.$message.error(error.response.data.status)
              }
            })
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #ddd;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
