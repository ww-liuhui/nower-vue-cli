/**
 * Created by dh on 2017/1/24.
 */

export function addHotspot(hotspotItem,editStatus){

}

/***
 * 是否是微信打开
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
