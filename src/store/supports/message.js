/**
 * 显示系统的通知消息
 *
 * Created by leon on 2016/11/26.
 */
import { SHOW_MESSAGE, HIDE_MESSAGE } from '../types'

const state = {
  message: {
    type: '',
    content: '',
    title: ''
  }
}

const mutations = {
  [SHOW_MESSAGE] (state, action) {
    state.message = { ...action }
  },

  [HIDE_MESSAGE] (state, action) {
    state.message = {
      type: '',
      content: '',
      title: ''
    }
  }
}

export default {
  state,
  mutations
}
