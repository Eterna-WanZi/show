import { createApp } from 'vue';
import App from '@/App.vue';
//element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import 'uno.css' // 导入UNOcss
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'; //引入中文，默认用英文
//引入svg插件需要的配置代码
import 'virtual:svg-icons-register';

//引入naive ui
import naive from 'naive-ui'

//引入全局样式
import '@/styles/index.scss';
import 'uno.css';

//引入路由
import router from './router';


createApp(App).use(ElementPlus, { locale: zhCn }).use(router).use(naive).mount('#app');

//获取环境变量方法
// console.log(import.meta.env,'获取环境变量');
