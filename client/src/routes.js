import Home from './pages/home/index';
const Bar = { template: '<div>bar</div>' }
// 2. 定义路由
const routes = [
  { path: '/home', component: Home },
  { path: '/bar', component: Bar }
];

export default routes;