//用户小仓库
import { defineStore } from 'pinia';

const userUserStore = defineStore('User', {
  state: () => {
    return {};
  },
  //异步逻辑
  actions: {
    userlogin() {},
  },
  getters: {},
});

//暴露
export default userUserStore;

// 多数据修改
// // 推荐使用下面这种方式 √
// store.$patch({
//   name: '张三',
//   age: 24,
//   sex: '男',
// })
