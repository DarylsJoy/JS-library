/**
 * 将URL字符串中的参数解析为对象格式，重复值存为数组，仅有键名的默认值为true
 * @param {String} str URL字符串
 * @return {Object} 解析后的对象
 */
function URLParams2Obj(str) {
  if (typeof str !== 'string') {
    return {};
  }

  return str.split('?')[1].split('&').map(param => {
    const tmp = decodeURI(param).split('=');
    const key = tmp[0];
    let value = tmp[1] || true;

    return {
      key,
      value
    }
  }).reduce((params, item) => {
    const {
      key,
      value
    } = item;
    // 判断是否已存在键名
    if (typeof params[key] === 'undefined') {
      params[key] = value;
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]];
      params[key].push(value);
    }
    return params;
  }, {})
}
