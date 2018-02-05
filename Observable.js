const _ = require('lodash');

const Dep = require('./Dep');

function observe(value, dep) {
  if(_.isObject(value)) {
    const obVal = new Observable(value, dep);

    return new Observable(value).value;
  }

  return value;
}

function defReactive(obj, index, val, dep) {
  Object.defineProperty(obj, index, {
    enumerable: true,
    configurable: true,
    get: () => {
      return val;
    },
    set: (newVal) => {
      if(newVal === val) {
        return;
      }

      val = observe(newVal, dep);

      dep && dep.notify();
      // 最后需要考虑，此处如何通知到watchers?
      // console.log('notify ' + JSON.stringify(newVal));
    }
  });
}

/**
 * @todo
 * 给Observable赋值后,
 * 修改Observable.value的值，
 * 会自动通知所有的订阅者
 */
class Observable {
  constructor(value, dep) {
    this.value = value;

    if(!!dep) {
      this.dep = dep;

      this.walk(this.value);
    }
  }

  addDep(dep) {
    this.dep = dep;

    this.walk(this.value);
  }

  walk(obj) {
    const dep = this.dep;

    Object.keys(obj).forEach((k) => {
      let val = obj[k];

      // 如果赋值对象是object或array，那么递归
      if(_.isArray(val) || _.isObject(val)) {
        this.walk(obj[k]);
      }

      defReactive(obj, k, val, dep);
    });
  }
}

module.exports = {
  Observable,
  observe
};
