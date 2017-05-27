/**
 * 用于 store.commit, 实际修改 state
 *
 * Created by leon on 2016/11/26.
 */
import * as types from './types'
import Vue from 'vue'
import { set } from 'vue'
import router from '../routes/index'
import * as Common from './common'
import * as idCreator from '../utils/idCreator'
import * as DateUtils from '../utils/DateUtils'
import * as ValUtils from '../utils/ValUtils'

export default {
  // 接口返回异常提示
  [types.KRPANO_API_ERRO_RESPONSE] (state = {}, mutation = {}) {
    Message({
      message: '网络异常，请稍后重试 ！',
      type: 'success'
    })
  },

}
