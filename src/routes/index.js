/**
 * 路由定义
 * Created by leon on 2016/11/25.
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)

const debug = process.env.NODE_ENV !== 'production'

const routes = [

]

// 创建 routes 实例，然后传 `routes` 配置
const router = new Router({
  //mode: 'history',
  base: __dirname,
  routes,
  // return 期望滚动到哪个的位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


// 全局导航钩子
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach(route => {
  // ...
})

export default router
