/**
 * 千分位打点
 * @param {Number} number 数字
 * @param {Number} digits 精度（小数点后x位）
 * @return {string}
 */
export function kComma(number, digits = 2) {
  if (digits > 3) {
    throw new Error('parameter digits must little than 4');
  }
  return number.toFixed(digits).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

/**
 * 百分比计算
 * @param {Number} value 要转换的小数（0.223235523）
 * @return {String} 22.32%
 */
export function percent(value) {
  if (typeof value !== 'number') {
    throw new Error('parameter value must be a number');
  }
  return (value * 100).toFixed(2) + '%';
}
