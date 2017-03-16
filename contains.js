/**
 * 判断一个节点是否是另一个节点的后代。
 * 第一个参数是参考节点，第二个参数是待检查节点
 */

function contains(refNode, otherNode) {
  if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)) {
    return refNode.contains(otherNode);
  } else if (typeof refNode.compareDocumentPosition == "function") {
    return !!(refNode.compareDocumentPosition(otherNode) & 16);
  } else {
    var node = otherNode.parentNode;
    do {
      if (node === refNode) {
        return true;
      } else {
        node = node.parentNode;
      }
    } while (node !== null);

    return false;
  }
}