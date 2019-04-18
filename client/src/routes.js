import Fund from './pages/fund/index';
import Info from './pages/info/index';

const routes = [
  { path: '/', redirect: '/fund' },
  { path: '/fund', component: Fund },
  { path: '/info', component: Info }
  
];

export default routes;