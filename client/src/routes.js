import Fund from './pages/fund/index';

const routes = [
  { path: '/', redirect: '/fund' },
  { path: '/fund', component: Fund }
];

export default routes;