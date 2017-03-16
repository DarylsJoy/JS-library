/**
 * 跨浏览器的事件对象
 */

var EventUtil = {

  // 添加事件
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  // 返回对event对象的引用
  getEvent: function (event) {
    return event ? event : window.event;
  },

  // 返回事件的目标
  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  // 取消事件的默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  // 移除事件
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },

  // 阻止事件冒泡
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  // 获取鼠标滑动时相关元素
  getRelatedTarget: function (event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },

  // 获得鼠标点击情况
  getButton: function (event) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:       // <IE8 没有按下按钮
        case 1:       // <IE8 主按钮
        case 3:       // <IE8 主、次按钮
        case 5:       // <IE8 主、中按钮
        case 7:       // <IE8 同时按下三个按钮
          return 0;   // DOM  主按钮
        case 2:       // <IE8 次按钮
        case 6:       // <IE8 次、中按钮
          return 2;   // DOM  次按钮
        case 4:       // <IE8 中按钮
          return 1;   // DOM  中按钮
        default:
          return null;
      }
    }
  },

  // 返回滚轮变量值 （若为FireFox则乘-40以得到与其他浏览器相同结果->120）
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    } else {
      return - event.detail * 40;
    }
  },

  // 返回按键键码
  getCharCode: function (event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }

};