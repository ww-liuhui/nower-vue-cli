/**
 * 集成数据模块
 *
 * Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
 *
 * 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 mutations。
 * 这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
 *
 * Created by leon on 2016/11/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// 业务对象
import * as state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
// 辅助数据
import message from './supports/message'
// 模块数据
import userStore from './modules/user'
import resourceStore from './modules/resource'

Vue.use(Vuex)

// 不要在生产环境使用严格模式, 这会严重影响应用的整体性能
const debug = process.env.NODE_ENV !== 'production'

// 应用程序的统一状态数据存储
const store = new Vuex.Store({
  message,
  state,
  actions,
  getters,
  mutations,

  strict: debug, // true 意味着必须通过 mutation 来修改 state
  plugins: debug ? [ createLogger() ] : [], // 是否使用日志输出

  modules: {
    user: userStore,
    resource: resourceStore
  }
})

export default store

/*

 types 记录所有的事件名

 mutations 注册各种数据变化的方法

 actions 则可以编写异步的逻辑或者是一些逻辑，再去commit 事件

 getter 可以把一些需要处理返回的数据放在这即可，不进行业务操作

 */
