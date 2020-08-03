<template>
  <div id="login">
    <div class="login-warp">
      <div class="login-inner">
        <div class="login-title">
          <span
            :class="{ active: login.isActive === 'login' }"
            @click="loginSwitch('login')"
            >登录</span
          >
          <span
            :class="{ active: login.isActive !== 'login' }"
            @click="loginSwitch('register')"
            >注册</span
          >
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
              <el-input
                v-model="form.password"
                autocomplete="off"
                min="6"
                max="16"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="重复密码"
              prop="passwordAgin"
              min="6"
              max="16"
              v-show="login.isActive === 'register'"
            >
              <el-input
                v-model="form.passwordAgin"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="16">
                <el-form-item label="验证码" prop="keycode">
                  <el-input
                    v-model="form.keycode"
                    autocomplete="off"
                    min="6"
                    max="6"
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
import { patternEmali, patternPassword, patterKeyCode } from '@/utils/validator'
import { getLogin } from '@/api/login'

export default {
  data() {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }

      if (patternEmali(value)) {
        return callback()
      } else {
        return callback(new Error('请输入正确的邮箱格式'))
      }
    }

    let validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }

      if (patternPassword(value)) {
        return callback()
      } else {
        return callback(new Error('密码由6-16位组成'))
      }
    }

    let validatePassAgin = (rule, value, callback) => {
      // 如果是登录的话 这个框不需要验证直接通过验证
      if (this.login.isActive === 'login') callback()

      if (!value) {
        return callback(new Error('重复密码不能为空'))
      }

      if (patterKeyCode(value)) {
        return callback()
      } else if (value !== this.form.password) {
        return callback(new Error('两次输入的密码不一致'))
      } else {
        return callback(new Error('密码由6-16位组成'))
      }
    }

    let validateKeycode = (rule, value, callback) => {
      let parent = /^\d{6}$/

      if (!value) {
        return callback(new Error('验证码不能为空'))
      }

      if (parent.test(value)) {
        return callback()
      } else {
        return callback(new Error('验证码为6位数字组成'))
      }
    }
    return {
      form: {
        username: '',
        password: '',
        keycode: '',
        passwordAgin: ''
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        keycode: [{ validator: validateKeycode, trigger: 'blur' }],
        passwordAgin: [{ validator: validatePassAgin, trigger: 'blur' }]
      },
      login: {
        isActive: 'login'
      }
    }
  },
  methods: {
    loginSwitch(msgText) {
      this.login.isActive = msgText
      // 切换后将表单数据清空
      this.$refs.form.resetFields()
    },
    onSubmit(form) {
      this.$refs[form].validate((valid, obj) => {
        if (valid) {
          getLogin()
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
      cursor: pointer;
      &.active {
        background-color: #30353a54;
      }
    }
  }
}
</style>
