import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import 'vue-toast/dist/vue-toast.min.css'
import 'assets/css/index.css'

// 基础组件
import store from './store/index'
import router from './routes/index'
import * as filters from './filters'
// 界面组件
import App from './App.vue'

const debug = process.env.NODE_ENV !== 'production'

// 开启debug模式
Vue.config.debug = debug
// 是否压制警告信息
Vue.config.silent = debug
// 是否关闭调试工具
Vue.config.devtools = debug

Vue.use(ElementUI)
Vue.use(Vuex)
// 集成过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[ key ])
})

// 现在可以启动应用
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上
const app = new Vue({
  // 把 routes 对象提供给 “routes” 选项，这可以把 routes 的实例注入所有的子组件
  router,

  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { App },
  // 渲染默认的主页面
  render: h => h(App)
}).$mount('#app')

export { app, router, store }
