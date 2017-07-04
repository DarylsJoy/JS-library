/**
* Cookie 操作
*/

const Cookie = {
    /**
     * 创建cookie
     * @param name Cookie 名称
     * @param value Cookie 值
     * @param expires Cookie 的过期时间，Unix 时间戳
     * @param path Cookie 有效的服务器路径，默认值是设置 Cookie 时的当前目录(设置成 '/' 时，Cookie 对整个域名 domain 有效)
     * @param domain Cookie 的有效域名/子域名
     * @param secure 设置这个 Cookie 是否仅仅通过安全的 HTTPS 连接传给客户端
     */
    setCookie: function (name, value, expires, path, domain, secure) {
        let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires;
        }
        if (path) {
            cookieText += '; expires=' + expires;
        }
        if (domain) {
            cookieText += '; domain=' + domain;
        }
        if (secure) {
            cookieText += '; secure';
        }
        document.cookie = cookieText;
    },

    //获取cookie
    getCookie: function (name) {
        let cookieName = encodeURIComponent(name) + '=';
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },

    //删除cookie
    unsetCookie: function (name) {
        document.cookie = name + "= ; expires=" + new Date(0);
    }
}

export default Cookie
