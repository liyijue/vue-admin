<template>
  <div id="login">
    <div class="login-warp">
      <div class="login-inner">
        <div class="login-title">
          <span class="active">登录</span>
          <span>注册</span>
        </div>
        <div class="login-content">
          <el-form
            :model="form"
            status-icon
            :rules="rules"
            ref="form"
            class="login-form"
            size="small"
          >
            <el-form-item label="邮箱" prop="username">
              <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="16">
                <el-form-item label="验证码" prop="keycode">
                  <el-input
                    v-model="form.keycode"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-button
                  size="mini"
                  class="block"
                  type="success"
                  :style="{ marginTop: '31px', marginLeft: '8px' }"
                >
                  获取验证码
                </el-button>
              </el-col>
            </el-row>
            <el-button
              type="danger"
              class="block"
              :style="{ width: '100%', marginTop: '20px' }"
              @click="onSubmit('form')"
            >
              登录
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        // 可以对value进行检测
      }, 1000)
    }

    let validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
    }

    let validateKeycode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
    }
    return {
      form: {
        username: '',
        password: '',
        keycode: ''
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        keycode: [{ validator: validateKeycode, trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid, obj) => {
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit!', obj)
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// 基本样式
.block {
  display: block;
}

// 页面样式
#login {
  width: 100vw;
  height: 100vh;
  background-color: #344a5f;
}

.login-warp {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-inner {
  width: 355px;
  height: 410px;
  .login-title {
    width: 100%;
    display: flex;
    justify-content: center;
    span {
      width: 88px;
      height: 35px;
      line-height: 35px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border-radius: 3px;
      &.active {
        background-color: #30353a54;
      }
    }
  }
}
</style>
