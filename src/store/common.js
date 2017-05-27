/**
 * Created by dh on 2016/12/10.
 * 定义接口地址
 */

/**
 * 接口域名
 * @type {*|string}
 */
export const apihost = process.env.API_HOST
/**
 * 接口组装
 * @param apistr api字符串
 * @param name 参数名称
 * @param data 参数数据
 * @returns {*}
 */
export function loadapiurl (apistr) {
  return apihost + apistr
}

/******************************************************** 接口字符串定义 ************************************************************************/
/**
 * 微信登陆
 * @type {string}
 */
export const VTOUR_WX_LOGIN = '/login/weixin/:code'
