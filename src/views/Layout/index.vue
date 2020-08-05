<template>
  <div>
    <el-container :style="{ height: '100vh' }">
      <el-aside width="200px" :style="{ backgroundColor: 'pink' }"
        >Aside</el-aside
      >
      <el-container>
        <el-header :style="{ backgroundColor: 'orange' }">Header</el-header>
        <el-main :style="{ backgroundColor: 'blue' }">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
