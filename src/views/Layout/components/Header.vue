<template>
  <div id="header" :class="{ close_collapse: Aside_Collapse }">
    <div class="header-left">
      <svg-icon
        iconName="menu"
        iconClass="font20 black"
        @click="handleChangeAside"
      />
    </div>
    <div class="header-right">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="lv">{{ GET_USERNAME || username || '管理员' }}</div>
      <svg-icon
        iconName="signOut"
        iconClass="font20 black"
        @click="handleSignOut"
      />
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisable"
      width="30%"
      :before-close="() => (dialogVisable = false)"
      :modal-append-to-body="false"
      append-to-body
    >
      <span>该操作会退出登录, 确定吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisable = false">取 消</el-button>
        <el-button type="parimary" @click="handleSignOutClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import cookie from 'cookiejs'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialogVisable: false
    }
  },
  methods: {
    ...mapMutations('aside', ['changeAsideCollapse']),
    handleChangeAside() {
      this.changeAsideCollapse()
      sessionStorage.setItem(
        'Aside_Collapse',
        JSON.stringify(this.Aside_Collapse)
      )
    },
    handleSignOut() {
      this.dialogVisable = true
    },
    handleSignOutClick() {
      this.$store.commit({
        type: 'login/Set_State',
        payload: {
          token: '',
          username: ''
        }
      })
      cookie.clear('token')
      cookie.clear('username')
      this.dialogVisable = false
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    ...mapState('aside', ['Aside_Collapse']),
    ...mapGetters('login', ['GET_USERNAME']),
    username: () => cookie.get('username')
  }
}
</script>

<style lang="scss" scoped>
#header {
  @import '@/styles/config.scss';

  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  left: $layout_width;
  right: 0;
  top: 0;
  @include transitionW1S(transition, left 0.5s);
  background-color: #fff;
  &.close_collapse {
    left: 50px;
  }
  .header-right {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    .lv {
      height: 100%;
      line-height: 75px;
      padding: 0 15px 0 20px;
      margin-right: 40px;
      border-right: 1px solid #ddd;
    }
  }
}
</style>
