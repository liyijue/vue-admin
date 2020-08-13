<template>
  <div id="aside" :class="{ close_collapse: Aside_Collapse }">
    <el-menu
      @open="handleOpen"
      background-color="#344a5f"
      text-color="#fff"
      :style="{ width: '100%' }"
      active-text-color="pink"
      :collapse="Aside_Collapse"
      collapse-transition
      router
    >
      <template v-for="(item, index) in this.menuList">
        <el-submenu
          :key="item.id"
          :index="index + ''"
          v-if="!item.hiden"
          popper-class="el-menu-subitem.is-active"
        >
          <template slot="title">
            <svg-icon
              :iconName="item.meta.icon"
              iconClass="font20 marginR10"
            ></svg-icon>
            <span>{{ item.meta.text }}</span>
          </template>
          <template v-if="item.children">
            <el-menu-item-group>
              <el-menu-item
                v-for="childItem in item.children"
                :key="childItem.id"
                :index="childItem.meta.index"
              >
                {{ childItem.meta.text }}
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      menuList: this.$router.options.routes
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapState(['Aside_Collapse'])
  }
}
</script>

<style lang="scss" scoped>
#aside {
  width: $layout_width;
  height: 100vh;
  background-color: #344a5f;
  &.close_collapse {
    width: 50px;
  }
}
</style>
