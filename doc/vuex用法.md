## 创建

> new Vuex.Store({ ...options })

options 包含以下内容:

- state Object：存放应用状态
- actions Object：注册 action
- mutations Object：注册 mutation
- getters Object：注册 getter
- modules Object：注册 module

> state

state 是一个 Object,  存储着整个应用程序的状态


> actions

actions 是一个 Object, key 就是 action 的名字，value 就是对应的 action (一个方法), 用于激发 state 的变更

store.dispatch: 触发一个 action
store.commit: 触发一个 mutation

所有 action 方法接受当前 store 的实例作为第一个参数，调用传递的参数会作为第二个参数传入 (因此, 多个参数需要封装为一个对象)


> mutations

mutations 也是一个对象，key 就是 mutation 的名字，value 就是对应的 mutation

mutation 用于更新应用的 state, 借用 ES6 对象方法可以使用变量和省略的特点，调用 mutation 可以直接通过命名找到相应的处理方法

mutation 对当前 state 进行操作，而不能返回一个新的 state


> getters

getters 也是一个对象，用于注册 getter，每个 getter 都是一个 function 用于返回一部分的 state

getter 方法接受 state 作为第一个参数


> modules

modules 也是一个对象，key 是对应的 module 名，在 state 中会创建相应的 key，而 value 是一个用于配置如何创建 module 的对象

模块是可以嵌套的，使用 modules 就可以将 state 划分为各个模块


> state

是给 state 中的每个属性设初始值，这样在第一次计算 getter 的值时就会返回对应的初始值，而这个初始值是在 vue 的系统中的，
所以当异步请求结束后调用 mutation 改变 state 中对应的值后，getter 会自动触发更新，此时，组件中对应的值也就被修改了

为每个属性设置初始化 state ！！！


> Helper 方法

mapActions 接受一个数组或对象，根据相应的值将对应的 action 绑定到组件上

mapState 和 mapGetters 同样接受一个数组或对象，并根据相应的值将 store 中的 state 或 getter 绑定到组件上


## 容器组件 vs 展示组件

容器组件就是用于包裹展示组件的组件，它和界面展示无关，它负责数据的获取和传递, 除了根元素 section 以外，不包含其他任何的 html 标签

展示组件单单用于展示，自己不获取任何数据，数据都通过 props 传递

