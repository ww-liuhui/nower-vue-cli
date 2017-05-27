/***
 * 判断是否是微信浏览器
 * @returns {boolean}
 */
export function isWeiXin(){
  let ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}
