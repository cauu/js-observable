const _ = require('lodash');

function observe(value, vm) {
}

/**
 * @todo
 * 给Observable赋值后,
 * 修改Observable.value的值，
 * 会自动通知所有的订阅者
 */
class Observable {
  constructor(value) {
    this.value = value;
    
    this.walk(this.value);
  }

  walk(obj) {
    Object.keys(obj).forEach((k) => {
      let val = obj[k];
      // observe k
      Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get: () => val,
        set: (newVal) => {
          console.log('notify: ', this.value);
          if(newVal === val) {
            return;
          }

          val = newVal;          
          // notify all watchers
          console.log('notify: ', this.value);
        }
      })
    });
  }
}

module.exports = Observable;
