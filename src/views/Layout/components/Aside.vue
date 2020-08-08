<template>
  <div id="aside">
    <el-menu
      @open="handleOpen"
      background-color="#344a5f"
      text-color="#fff"
      :style="{ width: '100%' }"
      active-text-color="pink"
      router
    >
      <template v-for="item in this.menuList">
        <el-submenu
          :key="item.id"
          :index="item.meta.index"
          v-if="!item.hiden"
          popper-class="el-menu-subitem.is-active"
        >
          <span slot="title">{{ item.meta.text }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
#aside {
  width: $layout_width;
  height: 100vh;
  background-color: #344a5f;
}
</style>
