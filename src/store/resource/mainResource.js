import Vue from 'vue'
import * as Common from '../common'
import 'whatwg-fetch'

const debug = process.env.NODE_ENV !== 'production'
// 微信登陆
export function wxLogin (code) {
  let url = Common.loadapiurl(Common.VTOUR_WX_LOGIN).replace(':code', code)
  return fetchGetBinary(url)
}
/**************************************************  微信  ******************************************************/
// 获取微信js接口权限
export function wxValidate () {
  let wxApiHost = process.env.API_HOST
  let url = wxApiHost + '/wxapi/validate' + '?url=' + window.location.href
  return fetchGet(url)
}

// 根据微信网页授权，获取用户信息
export function wxOauth (code) {
  let wxApiHost = process.env.API_HOST
  let url = wxApiHost + '/wxapi/oauth?code=' + code
  return fetchGet(url)
}

/******************************************************************************************************/
/**
 * 验证链接是否有效
 * @param response
 * @returns {*}
 */
export function checkUrl(url) {
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  }).then((response) => {
    try {
      if (response.status >= 200 && response.status < 400) {
        return true
      } else {
        return false
      }
    }catch (e) {
    }
    return false
  })

}

/**
 * fetch get
 * @param response
 * @returns {*}
 */
function fetchGetBinaryNoCheck(url) {
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  })
}
/**
 * fetch get
 * @param response
 * @returns {*}
 */
function fetchGet(url) {
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  }).then(parseText)
    .catch(function(error) {
      console.log('request failed', error)
    })
}
/**
 * fetch get 二进制数据
 * @param response
 * @returns {*}
 */
function fetchGetBinary(url) {
  return fetch(url, {
    method: 'GET',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }).then(parseText)
    .catch(function(error) {
      console.log('request failed', error)
    })
}
/**
 * fetch post
 * @param response
 * @returns {*}
 */
function fetchPost(url, jsonData) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }).then(parseText)
    .catch(function(error) {
      console.log('request failed', error)
  })
}
/**
 * fetch post 二进制数据
 * @param response
 * @returns {*}
 */
function fetchPostBinary(url, binaryData) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/octet-stream'
    },
    body: binaryData
  }).then(parseText)
    .catch(function(error) {
      console.log('request failed', error)
    })
}

/**
 *  fetchPutNoCheck
 * @param response
 * @returns {*}
 */
function fetchPutNoCheck(url, jsonData) {
  return fetch(url, {
    method: 'PUT',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
}
/**
 * fetch put
 * @param response
 * @returns {*}
 */
function fetchPut(url, jsonData) {
  return fetch(url, {
    method: 'PUT',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }).then(parseText).catch(function(error) {
    console.log('request failed', error)
  })
}
/**
 * fetch put二进制数据
 * @param response
 * @returns {*}
 */
function fetchPutBinary(url, binaryData) {
  return fetch(url, {
    method: 'PUT',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/octet-stream'
    },
    body: binaryData
  }).then(parseText)
    .catch(function(error) {
      console.log('request failed', error)
    })
}
/**
 * 检查返回状态
 * @param response
 * @returns {*}
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 400) {
    return response
  } else {
    if(debug){
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}
/**
 * fetch delete
 * @param response
 * @returns {*}
 */
function fetchDelete(url, jsonData) {
  return fetch(url, {
    method: 'DELETE',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }).then(parseText).catch(function(error) {
      console.log('request failed', error)
    })
}
/**
 * fetch patch
 * @param response
 * @returns {*}
 */
function fetchPatch(url, jsonData) {
  return fetch(url, {
    method: 'PATCH',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  }).then(parseText).catch(function(error) {
      console.log('request failed', error)
    })
}
/**
 * fetch patch 不检查状态
 * @param response
 * @returns {*}
 */
function fetchPatchNoCheck(url, jsonData) {
  return fetch(url, {
    method: 'PATCH',
    mode: 'cors', // 允许跨域
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
}
/**
 * 返回json数据
 * @param response
 * @returns {*}
 */
function parseJSON(response) {
  return response.json()
}
/**
 * 返回text数据
 * @param response
 * @returns {*}
 */
function parseText(response) {
  // 检查状态
  if (response.status >= 200 && response.status < 400) {
    return response.text()
  } else {
    if(debug){
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
    return Common.API_ERRO_RESPONSE
  }
  //
  //return response.text()
}
/**
 * 返回blob数据
 * @param response
 * @returns {*}
 */
function parseBlob(response) {
  return response.blob()
}
