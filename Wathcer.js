/**
 * @description
 * watcher需要监听dep
 */
class Watcher {
  constructor(cb) {
    this.cb = cb;
  }

  addDept(dep) {
    dep.addSub(this);
  }

  update() {
    console.log('update');
  }
}

module.exports = Watcher;
