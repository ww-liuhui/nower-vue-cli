## 概念

Vuex 使用一个对象包含了全部的应用层级状态, 每个应用将仅仅包含一个 store 实例, 
从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态, 每当变化的时候, 
都会重新求取计算属性，并且触发更新相关联的 DOM

> State: 驱动应用的数据源

> View:  以声明方式将state映射到视图；

> Actions: 响应在view上的用户输入导致的状态变化

![结构图](../../doc/img/vuex.png)


## 安装

```
npm install vuex

```


## 引用

请确保在系统的开头调用了 Vue.use(Vuex)

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

```


## 开始

每一个 Vuex 应用的核心就是 store, 它基本上就是一个容器，它包含着你的应用中大部分的状态

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，
那么相应的组件也会相应地得到高效更新。

- 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 mutations。
这样使得可以方便地跟踪每一个状态的变化，从而让能够实现一些工具帮助更好地了解的应用。


需要提供一个初始 state 对象和一些 mutations

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

```

然后通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更

```
store.commit('increment')

```
通过提交 mutation 的方式，而非直接改变 store.state.count，是因为想要更明确地追踪到状态的变化

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
触发变化也仅仅是在组件的 methods 中提交 mutation



## 状态改变

由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态

```
const Counter = {
  template: `<div>{{ count }}</div>`,
  
  computed: {
    count () {
      return store.state.count
    }
  }
}

```

Vuex 通过 store 选项，提供了一种机制将状态从根组件『注入』到每一个子组件中（需调用 Vue.use(Vuex)）



## 多状态处理

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余, 为此, 提供了辅助函数 Vuex.mapState

```
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

当映射的计算属性的名称与 state 的子节点名称相同时，也可以给 mapState 传一个字符串数组。

```
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])
```


## 改变状态

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：
每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler), 
这个回调函数就是实际进行状态更改的地方，并且它会接受 state 作为第一个参数

```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    },
    
    increment2 (state, payload) {
        state.count += payload.amount
    }
  }
})
```

> 提交改变

方法1: 常规方法  
store.commit('increment', 10)
store.commit('increment2', {amount: 10})

方法1: 对象方法  
store.commit({
  type: 'increment',
  amount: 10
})



## Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。


Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 
提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters

```
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

Action 通过 store.dispatch 方法触发

```
store.dispatch('increment, {amount: 10})

# 或者, 使用对象方法
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

Mutation 必须同步执行, Action 就不受约束, 可以在 action 内部执行异步操作

```
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

> 更好的异步

```
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```


## 使用

从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
```text
template: `<div>{{ count }}</div>`,

computed: {
    count () {
      return this.$store.state.count
    }
}

```

界面组件引用的是 computed, 因此, state 的改变会自动传播出去

重要:

* 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
* 它必须在根组件内, 明确引入子组件 components: {...}




  

