class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    console.log('notified');
    this.subs.forEach(function(sub) {
      sub.update();
    });
  }
}

module.exports = Dep;