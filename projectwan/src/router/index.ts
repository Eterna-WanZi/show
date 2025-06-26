import { createRouter, createWebHistory } from 'vue-router';
import { constantRoute } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoute,
});

export default router;

//在获取用户的地方动态添加路由，
// ['需要添加的路由展开包括新加入的异步路由和任意路由'].forEach((route:any)=>{
//   router.addRoute(route);
// })
// 加载异步路由时候的守卫
// next({...to}),这种方式是加载完再放行，就不会空白了
