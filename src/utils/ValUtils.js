/**
 * Created by dh on 2017/1/17.
 */
/***
 * 验证值是否有效
 * @param val
 * @returns {boolean}
 */
export function isValid (val) {
  if('' != val && undefined != val && 'undefined' != val && null != val && 'null' != val && {} != val){
    return true
  }else{
    return false
  }
}

//获取地址参数
export function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
