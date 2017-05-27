/**
 * 个人数据模块
 *
 * Created by leon on 2016/11/25.
 */

const userStore = {
  state: {
    status: {
      headerShow: true
    },
    info: {
      id: 0,
      name: '',
      headimg: ''
    },
    paging: {
      image: {
        index: 0,
        size: 10,
        lineCount: 0,
        pageCount: 0
      }
    },
    tags: []
  },
  actions: {},
  getters: {
    headerShow: state => {
      return state.status.headerShow
        ? state.status.headerShow
        : false
    },
    tags: state => {
      return state.tags
        ? state.tags
        : []
    },
    paging:  state => {
      return state.paging
        ? state.paging
        : {}
    }
  },
  mutations: {}
}

export default userStore
