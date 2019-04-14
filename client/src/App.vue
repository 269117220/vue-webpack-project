<template>
  <div id="wrapper">
    <navHeader></navHeader>
    <el-row>
      <el-col :span="5">
        <div class="m-user-info">
          <img style="width: 100px;" src="https://haitao.nos.netease.com/9e701a25-1bd8-4ae1-b124-45d1e3d34c4e_700_700.jpeg"/>
        </div>
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
.m-user-info {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  margin: 10% auto auto auto;
  overflow: hidden;
}
.m-side-menu {
  margin-left: 25px;
  margin-top: 5%;
}
.container {
    margin-right: 25px;
    background-color: #eee;
    min-height: calc(100% - 80px);
}
</style>

<script>
/**
 * TODO:
 * import 动态加载
 */
// import sideMenu from './pages/common/sideMenu';
import navHeader from './pages/common/navHeader';
export default {
    name: 'app',
    props: ['class'],
    components: {
        navHeader
    },
    data: {
      // sideNavClass: 'm-side-menu'
    }
}
</script>