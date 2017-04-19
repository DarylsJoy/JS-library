/**
 * 根据某个属性排序
 */
 
const customPropSort = (propName) => {
  return (obj1, obj2) => {
    let value1 = obj1[propName];
    let value2 = obj2[propName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

let data = [{name: 'zhangsan', age: 28}, {name: 'lisi', age: 19}];
data.sort(customPropSort('age'));
