<template>
    <el-table
      :data="list"
      style="width: 100%"
      height="90%"
      :row-class-name="tableRowClassName"
      :default-sort = "{prop: 'date', order: 'ascending'}">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gsz"
        sortable
        label="单位净值"
        width="180">
      </el-table-column>
      <el-table-column
        prop="oldValues"
        sortable
        label="历史增长率">
      </el-table-column>
      <el-table-column
        prop="currValue"
        sortable
        label="当前估值">
      </el-table-column>
    </el-table>
</template>

<style>
  .el-table .up-row {
    background: #FFC0CB;
  }

  .el-table .down-row {
    background: #f0f9eb;
  }
</style>

<script>
export default {
    data: function() {
        return {
            list: []
        }
    },
    created: function() {
        this.getDate();
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            return row.currValue > 0 ? 'up-row' : (row.currValue == 0 ? '' : 'down-row');
        },
        getCurrFundValues() {
            fetch('/api/interest/currFundValue').then(res => {
                return res.json();
            }).then(res => {
                this.list = this.list && this.list.map((item = {}) => {
                    res.some(_curItem => {
                        if(_curItem.fundcode == item.fundcode) {
                            item.currValue = _curItem.gszzl;
                            return true;
                        }
                    });
                    return item;
                });
                setTimeout(() => {
                    this.getCurrFundValues();
                }, 60000);
            });
        },
        getDate: function() {
            fetch('/api/interest/fund').then(res => {
                return res.json();
            }).then(res => {
                this.list = res.list;
                this.getCurrFundValues();
            });
        },
    }
}
</script>