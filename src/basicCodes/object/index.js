/**
 * 通过 value 获取枚举对象的项
 * @param {Object} Enum { KEY1: { value: 1, label: 'a' }, KEY2: { value: 2, label: 'b' } }
 * @param value
 * @return {Object} { value: 1, label: 'a' }
 */
export function getEnumByValue(Enum, value) {
  const key = Object.keys(Enum).find(key => Enum[key].value === value);
  return Enum[key];
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */
function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (typeof val === 'object') {
      for (let subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * 将指定的 object 序列化为 x-www-form-urlencoded 格式
 * @param {Object} obj
 * @return {String}
 */
export function serializeToForm(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const pairs = [];
  for (let key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * 解析指定的 x-www-form-urlencoded 字符串
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */
export function parseFormString(str) {
  const obj = {};
  const pairs = str.split('&');
  let pair;
  let pos;

  for (let i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(
        pair.slice(pos + 1),
      );
    }
  }

  return obj;
}
