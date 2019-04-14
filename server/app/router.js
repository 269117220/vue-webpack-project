module.exports = app => {
    const { router, controller } = app;
    /**
     * 页面路由
     */
    router.get('/', controller.home.index);
    /**
     * 异步接口路由
     */
    router.get('/api/interest', controller.interest.fund);
};