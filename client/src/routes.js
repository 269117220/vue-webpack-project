import app from './pages/test/app';
const Bar = { template: '<div>bar</div>' }
// 2. 定义路由
const routes = [
  { path: '/foo', component: app },
  { path: '/bar', component: Bar }
];

export default routes;