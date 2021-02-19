
<template>
  <div>
    <div>cinema1</div>
    
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" style="width: 100%">
      //---:data="用于存放请求数据回来的数组"
      <el-table-column label="索引值" width="400">
        <template slot-scope="scope">
          //--- 这里取到当前单元格
          <span>{{ scope.$index }}</span >
          //--- scope.$index就是索引
        </template>
      </el-table-column>
      <el-table-column label="标题" width="350">
        <template slot-scope="scope">
          //--- 这里取到当前单元格
          <span>{{ scope.row.title }}</span>
          //--- scope.row
          直接取到该单元格对象，就是数组里的元素对象，即是tableData[scope.$index]
          //---.title 是对象里面的title属性的值
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          //--- 这里取到当前单元格
          <el-dropdown size="medium" split-button type="primary">
            更多
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                @click.native.prevent="handleEdit(scope.$index, scope.row)"
              >
                编辑
              </el-dropdown-item>
              <el-dropdown-item
                @click.native.prevent="getUp(scope.$index, scope.row)"
              >
                上升
              </el-dropdown-item>
              <el-dropdown-item
                @click.native.prevent="getDown(scope.$index, scope.row)"
              >
                下降
              </el-dropdown-item>
              <el-dropdown-item
                @click.native.prevent="handleDelete(scope.$index, scope.row)"
              >
                删除
              </el-dropdown-item>
              //---这里的点击事件已经不是在根元素上了，因为多套了几层结构。
              //---这里的点击事件如果没有加上 .native 则点击无效！
              //---这里的点击事件要加上 .native 表示监听组件根元素的原生事件。
              //---这里的点击事件不需要 .prevent 也可以实现相同效果
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      input1: '',
      input2: '',
      input3: '',
      select: '',
      tableData: [
        { title: 123, age: 11 },
        { title: 456, age: 18 },
      ],
      // ---为了效果先给值，一般情况下为空，其实际值是后台接口请求回来的
    };
  },
  methods: {
    handleDelete(index, row) {
      this.tableData.splice(index + 1, 1); // ---前端删除index要+1 !!!!!!!
      // ---下面是后端数据删除，可以不看
      axios
        .post(
          config.newsDelete, // ---后端数据删除
          {
            id: row.id, // ---传入被删除的对象的id值
          },
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"), // ---请求头验证
            },
          }
        )
        .then((res) => {
          this.rendering(); // ---删除了重新渲染
        });
    },
  },
};
</script>
<style lang="scss">
/*   */
.el-input-group__append{
  border-radius: 0;
}
.el-select {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

