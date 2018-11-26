import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件 

import todos from './views/task4';
import Header from './components/header'

// 告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
    path: '*', // 其他没有的页面都重定向到 home页面去
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    components: {
      Header: Header
    }
  },
  {
    path: '/event',
    name: 'event',
    component: resolve => require(['./views/task2_4'], resolve)
  },
  {
    path: '/form',
    name: 'form',
    component: resolve => require(['./views/task2_5'], resolve)
  },
  {
    path: '/taskMenu',
    name: 'taskMenu',
    component: resolve => require(['./views/task2_6'], resolve)
  },
  {
    path: '/cascade',
    name: 'cascade',
    component: resolve => require(['./views/task3_1'], resolve)
  },
  {
    path: '/todos',
    name: 'todos',
    component: resolve => require(['./views/task4'], resolve),
  },
  {
    path: '/editTodo/:editedTodoId',
    name: 'editTodo',
    component: resolve => require(['./components/editTodo'], resolve)
  },
  {
    path: '/addTodo',
    name: 'addTodo',
    component: resolve => require(['./components/addTodo'], resolve)
  },
  {
    path: '/editTag',
    name: 'editTag',
    component: resolve => require(['./components/editTag'], resolve)
  },


];


['all', 'active', 'completed'].forEach(visibility => {
  routes.push({
    path: '/todos/' + visibility,
    component: {
      extends: todos,
      data: function () {
        return {
          visibility: visibility
        }
      }
    }
  })
})
var router = new VueRouter({
  base: '/app/index', // 配置单页应用的基路径
  routes: routes
});

export default router;