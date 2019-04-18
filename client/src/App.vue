<template>
  <div id="wrapper">
    <navHeader></navHeader>
    <el-row style="margin:0 8px;">
      <el-col v-if="!isPhone" :span="5">
        <div class="m-user-info">
          <img style="width: 100px;" src="https://haitao.nos.netease.com/9e701a25-1bd8-4ae1-b124-45d1e3d34c4e_700_700.jpeg"/>
        </div>
      </el-col>
      <el-col :span="contentCol">
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
  margin: 30% auto auto auto;
  overflow: hidden;
}
.m-side-menu {
  margin-left: 25px;
  margin-top: 5%;
}
.container {
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
    components: {
        navHeader
    },
    data: {
      isPhone: false,
      contentCol: 24
      // sideNavClass: 'm-side-menu'
    },
    created() {
     this.$eventBus.$on('currAgent', (agent) => {
       this.isPhone = agent;
       this.contentCol = agent ? 24 : 19;
     }); 
    }
}
</script>