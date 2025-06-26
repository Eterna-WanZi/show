//对外暴露路由配置（常量路由）
//静态路由：全部人都可以访问
export const constantRoute = [
  {
    path: '/',
    redirect: "/login",
    component: () => import('@/views/login/index.vue'),
    name: 'frist', //命名路由
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    redirect: "/Home/store",
    children: [
      {
        path: 'store',
        name: 'store',
        component: () => import('@/views/home/components/store.vue'),
      },
      {
        path: 'permissions',
        name: 'permissions',
        component: () => import('@/views/home/components/permissions.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/home/components/user.vue'),
      }
    ]
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404/index.vue'),
  //   name: '404',
  // },
  // {
  //   path: '/testline',
  //   component: () => import('@/views/testline/index.vue'),
  //   name: 'testline', //命名路由
  // },
  // {
  //   path: '/wanzi',
  //   component: () => import('@/views/wanzi/index.vue'),
  //   name: 'wanzi',
  // },
  // {
  //   path: '/bishe',
  //   component: () => import('@/views/bishe/index.vue'),
  //   name: 'bishe',
  // },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    name: 'register',
  },
];

// 异步路由
export const asnycRoute = [
  // {
  //   path: '/wanzi',
  //   component: () => import('@/views/wanzi/index.vue'),
  //   name: 'wanzi',
  // },
];

export const anyRoute = [
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404',
  //   name: 'any',
  //   meta: {
  //     title: '任意路由',
  //     hidden: true,
  //   },
  // },
];
