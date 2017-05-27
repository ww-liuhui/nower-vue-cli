/**
 * 用于 store.dispatch, 提出对 mutation 的调用
 *
 * dispatch: 通常是调用另一个 Action
 * commit: 通常是调用一个 Mutation
 *
 * Created by leon on 2016/11/26.
 */
import router from '../routes/index'
import * as types from './types'
import * as mainResource from './resource/mainResource'
import * as idCreator from '../utils/idCreator'
import * as Common from './common'


/****************************************************** 微信 **************************************************************/
// 获取微信js接口权限
export const wxValidate = async ({ commit }, payload) => {
  return mainResource.wxValidate()
}

// 根据微信网页授权，获取用户信息
export const wxOauth = async ({ commit }, payload) => {
  return mainResource.wxOauth(payload.code)
}
