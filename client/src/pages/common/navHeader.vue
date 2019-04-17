<template>
    <div>
        <el-menu class="m-nav-header" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <li v-if="isPhone" class="el-menu-item u-user-header" >
                <img class="u-img" src="https://haitao.nos.netease.com/9e701a25-1bd8-4ae1-b124-45d1e3d34c4e_700_700.jpeg" />
            </li>
            <el-menu-item index="1"><a href="#/fund">兴趣爱好</a></el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped>
    .m-nav-header {
        background-color: #eee;
        margin-bottom: 10px;
    }
    .u-user-header {
        height: 60px;
        padding: 0 8 0 5;
        border-radius: 50%;
    }
    .u-img {
        height: 85%;
    }
</style>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            isPhone: false
        }
    },
    created() {
     this.$eventBus.$on('currAgent', (agent) => {
       this.isPhone = agent;
     }); 
    },
    methods: {
        handleSelect: function(index) {
            console.log('nav-header:', index);
        }
    }
}
</script>
