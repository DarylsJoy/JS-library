/**
 * Ajax对象
 * method: 请求方式:GET/POST,默认值:'GET';
 * url:    发送请求的地址, 默认值: 当前页地址;
 * data:   string,json;
 * async: 是否异步:true/false,默认值:true;
 * cache: 是否缓存：true/false,默认值:true;
 * contentType: HTTP头信息，默认值：'application/x-www-form-urlencoded';
 * success: 请求成功后的回调函数;
 * error: 请求失败后的回调函数;
 */
function Ajax(opts) {
  // 默认参数
  var defaults = {
    method: 'GET',
    url: '',
    data: '',
    async: true,
    cache: true,
    contentType: 'application/x-www-form-urlencoded',
    success: function () {},
    error: function () {}
  };


  for (var key in opts) {
    defaults[key] = opts[key];
  }

  if (typeof defaults.data === 'object') {    // 处理data
    var str = '';
    for (var key in defaults.data) {
      str += key + '=' + defaults.data[key] + '&';
    }
    defaults.data = str.substring(0, str.length - 1);
  }

  defaults.method = defaults.method.toUpperCase();    // 处理method

  defaults.cache = defaults.cache ? '' : '&' + new Date().getTime();    // 处理cache

  if (defaults.method === 'GET' && (defaults.data || defaults.cache)) defaults.url += '?' + defaults.data + defaults.cache;    // 处理url

  var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  oXhr.open(defaults.method, defaults.url, defaults.async);

  if (defaults.method === 'GET') {
    oXhr.send(null);
  } else {
    oXhr.setRequestHeader("Content-type", defaults.contentType);
    oXhr.send(defaults.data);
  }

  oXhr.onload = function () {
    if ((oXhr.status >= 200 && oXhr.status < 300) || oXhr.status === 304) {
      defaults.success.call(oXhr, oXhr.responseText);
    } else {
      defaults.error();
    }
  };
}