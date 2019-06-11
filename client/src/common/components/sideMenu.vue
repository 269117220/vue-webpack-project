<template>
  <div v-bind:class="[sideNavClass]">
    <el-radio-group v-model="isCollapse">
      <el-radio-button  :label="false">展开</el-radio-button>
      <el-radio-button  :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>  
</template>

<style>
  .el-menu-vertical-demo {
    background-color: #eee;
    &:not(.el-menu--collapse) {
      min-height: 400px;
      max-width: 300px;
      margin-right: 50px;
    }
  }
</style>
<script>

export default {
    data() {
      return {
        isCollapse: true
      };
    },
    props: ['sideNavClass'],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>