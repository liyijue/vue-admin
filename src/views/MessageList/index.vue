<template>
  <div>
    <Search />
    <Table />
  </div>
</template>

<script>
import Search from './conponents/MessageSearch'
import Table from './conponents/MessageTable'

export default {
  components: {
    Search,
    Table
  }
}
</script>

<style lang="less" scoped></style>
