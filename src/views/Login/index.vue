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
                  :style="{
                    marginTop: '31px',
                    marginLeft: '8px',
                    width: '106px'
                  }"
                  @click="handleGetKeycode()"
                  :disabled="
                    login.keycodeActive && form.username ? false : true
                  "
                >
                  {{ login.keycodeText }}
                </el-button>
              </el-col>
            </el-row>
            <el-button
              type="danger"
              class="block"
              :style="{ width: '100%', marginTop: '20px' }"
              @click="onSubmit('form')"
              :disabled="form.keycode ? false : true"
            >
              {{ login.isActive === 'login' ? '登录' : '注册' }}
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { patternEmali, patternPassword, patterKeyCode } from '@/utils/validator'
import { POSTGetKeycode, POSTRegister, POSTLogin } from '@/api/login'

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

      if (value !== this.form.password) {
        return callback(new Error('两次输入的密码不一致'))
      } else if (patternPassword(value)) {
        return callback()
      } else {
        return callback(new Error('密码由6-16位组成'))
      }
    }

    let validateKeycode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }

      if (patterKeyCode(value)) {
        return callback()
      } else {
        return callback(new Error('验证码为6位数字+字母组成'))
      }
    }
    return {
      form: {
        username: 'u123@qq.com',
        password: '',
        keycode: '',
        passwordAgin: ''
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        passwordAgin: [{ validator: validatePassAgin, trigger: 'blur' }],
        keycode: [{ validator: validateKeycode, trigger: 'blur' }]
      },
      login: {
        isActive: 'login',
        keycodeText: '获取验证码',
        keycodeActive: true,
        timeId: ''
      }
    }
  },
  methods: {
    loginSwitch(msgText) {
      this.login.isActive = msgText
      // 切换后将表单数据清空
      this.$refs.form.resetFields()
      // 清空定时器和恢复验证码初始值
      clearInterval(this.login.timeId)
      this.login.keycodeText = '获取验证码'
      this.login.keycodeActive = true
    },
    // 获取验证码
    handleGetKeycode() {
      if (!patternEmali(this.form.username))
        return this.$message.error('请输入正确的邮箱格式！')

      let tempText = 3
      this.login.keycodeActive = false
      if (this.login.timeId) {
        clearInterval(this.login.timeId)
      }
      this.login.timeId = setInterval(() => {
        if (tempText < 1) {
          this.login.keycodeActive = true
          this.login.keycodeText = '再次获取'
          tempText = 3
          clearInterval(this.login.timeId)
          return
        }
        this.login.keycodeText = tempText
        tempText--
      }, 1000)

      POSTGetKeycode({
        username: this.form.username,
        module: this.login.isActive
      })
        .then(data => {
          if (data.resCode !== 0) return this.$message.error(data.message)
          this.$message({
            message: '获取验证码成功',
            type: 'success'
          })
          // 打印验证码
          console.log(data.message)
        })
        .catch(error => {
          new Error(error)
        })
    },
    onSubmit(form) {
      this.$refs[form].validate((valid, obj) => {
        if (valid) {
          // 登录 注册 模式
          let activeModel =
            this.login.isActive === 'register' ? POSTRegister : POSTLogin

          activeModel({
            username: this?.form?.username,
            password: this?.form?.password,
            code: this?.form?.keycode
          })
            .then(data => {
              if (data.resCode !== 0) return (this.form.keycode = '')

              this.$message({
                message:
                  this.login.isActive === 'register' ? '注册成功' : '登录成功',
                type: 'success'
              })
              this.loginSwitch('login')
            })
            .catch(error => {
              new Error(error)
            })
        } else {
          this.form.keycode = ''
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
