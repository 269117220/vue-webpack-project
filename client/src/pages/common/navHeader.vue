<template>
    <div>
        <el-menu class="m-nav-header" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="#/fund">兴趣爱好</a></el-menu-item>
        </el-menu>
    </div>
</template>

<style>
    .m-nav-header {
        background-color: #eee;
        margin-bottom: 10px;
    }
</style>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect: function(index) {
            console.log('nav-header:', index);
        }
    }
}
</script>
