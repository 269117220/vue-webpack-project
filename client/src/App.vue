<template>
  <div id="wrapper">
    <navHeader></navHeader>
    <el-row>
      <el-col :span="5">
        <sideMenu :sideNavClass="sideNavClass"></sideMenu>
      </el-col>
      <el-col :span="19">
        <div class="container">
            <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.m-side-menu {
  margin-left: 15px;
}
.container {
    margin-right: 10px;
    background-color: #eee;
    min-height: calc(100% - 80px);
}
</style>

<script>
/**
 * TODO:
 * import 动态加载
 */
import sideMenu from './pages/common/sideMenu';
import navHeader from './pages/common/navHeader';
export default {
    name: 'app',
    props: ['class'],
    components: {
        sideMenu,
        navHeader
    },
    data: {
      sideNavClass: 'm-side-menu'
    }
}
</script>