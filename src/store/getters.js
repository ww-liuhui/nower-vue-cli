/**
 * 对 state 进行计算型的处理
 *
 * 主要是从 store 中的 state 中派生出一些状态，用于简单计算并获得
 *
 * Created by leon on 2016/11/26.
 */

const imageListCount = state => state.stageList.length

export default { imageListCount }

/*

 types 记录所有的事件名

 mutations 注册各种数据变化的方法

 actions 则可以编写异步的逻辑或者是一些逻辑，再去commit 事件

 getter 可以把一些需要处理返回的数据放在这即可，不进行业务操作

 */
