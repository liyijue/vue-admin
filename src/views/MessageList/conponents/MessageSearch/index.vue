<template>
  <el-form :inline="true" :model="formInline" ref="searchForm">
    <el-form-item label="关键字" prop="keyCode">
      <el-select v-model="formInline.keyCode" placeholder="请选择">
        <el-option label="区域一" value="key1"></el-option>
        <el-option label="区域二" value="key2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="message">
      <el-input
        v-model="formInline.message"
        placeholder="请输入内容"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="onSubmit">搜索</el-button>
      <el-button @click="onReset('searchForm')">重置</el-button>
    </el-form-item>
    <el-form-item :style="{ position: 'absolute', right: '1.2%' }">
      <el-button type="danger">新增</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        keyCode: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log({
        keyCode: this.formInline.keyCode,
        message: this.formInline.message
      })
    },
    onReset(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped></style>
