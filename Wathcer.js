const Dep = require('./Dep');
/**
 * @description
 * watcher需要监听dep
 */
class Watcher {
  constructor(target) {
    this.target = target;

    this.dep = new Dep();

    this.target.addDep(this.dep);
  }

  register(cb) {
    cb && this.dep.addSub({
      update: () => cb(this.target)
    });
  }
}

module.exports = Watcher;
