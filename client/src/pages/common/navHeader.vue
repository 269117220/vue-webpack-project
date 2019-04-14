<template>
    <div>
        <el-menu class="m-nav-header" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><a href="#/fund">处理中心</a></el-menu-item>
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
    methods: {
        handleSelect: function(index) {
            console.log('nav-header:', index);
        }
    }
}
</script>
