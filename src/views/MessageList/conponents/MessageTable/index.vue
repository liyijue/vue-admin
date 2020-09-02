<template>
  <div>
    <el-table
      ref="multipleTable"
      border
      :data="tableData"
      style="width: 98%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="userName"
        label="邮箱/用户名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="真实姓名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="地区"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="disable"
        label="禁用状态"
        align="center"
        width="150"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.disable"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="deleteList()">批量删除</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        :style="{ display: 'inline-block', position: 'absolute', right: '1%' }"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        },
        {
          userName: '1754812312@qq.com',
          name: '绝绝',
          phone: '18707983053',
          address: '江西省 景德镇 乐平市',
          role: '超管',
          disable: true
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    ...mapActions('messageList', ['FetchMessageList']),
    handleSelectionChange(selectList) {
      this.multipleSelection = selectList
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    deleteList() {
      console.log(this.multipleSelection)
    }
  },
  created() {
    this.FetchMessageList({})
  }
}
</script>

<style lang="less" scoped></style>
