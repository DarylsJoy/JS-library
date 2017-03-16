/**
 * 获取URL包含的查询字符串参数
 */

function getQueryStringArgs() {
  // 取得字符串并去掉?
  var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
      args = {},
      items = qs.length ? qs.split("&") : [],
      item = null,
      name = null,
      value = null,

      i = 0,
      len = items.length;

  // 逐个将值添加到args中
  for (i = 0; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}