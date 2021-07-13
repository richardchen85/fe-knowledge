/**
 * 为手机号加空格分隔符
 * @param {String} mobile 手机号
 * @return {string}
 */
export function formatMobile(mobile) {
  return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
}
