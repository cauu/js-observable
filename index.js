const { Observable, observe } = require('./Observable');
const Watcher = require('./Wathcer');
const Dep = require('./Dep');

const state1 = {};
const state2 = {};

const rootState = {
  state1: state1,
  state2: state2
};

const stateWathcer = new Observable(rootState);
const state = stateWathcer.value;

/**
 * @todo
 * 定义一个对数据stateWatcher进行监听的监听者watcher
 * 我们只需要在watcher上注册回调函数，就可以实现对监听对象的回调
 * watcher只关心需要watch的对象，而不关心对象如何通知他进行notify
 */
const watcher = new Watcher(stateWathcer);

watcher.register((result) => {
  console.log('watcher is notified', JSON.stringify(result.value));
});

state.state1 = {test: {haha: 'fuck'}};
state.state2 = {test: null};
state.state1.test.haha = 123;
state.state2.test = {haha:[]};
state.state2.test.haha[0] = 'fuck';
state.state1.test = 2;

// /**
//  * @description
//  * debug
//  */
// let target = {};
// let testVal;
// Object.defineProperty(target, 'test', {
//   enumerable: true,
//   configurable: true,
//   get: () => {
//     return testVal
//   },
//   set: (newVal) => {
//     console.log('notify');
//     testVal = newVal;
//   }
// });

// console.log(target);
// target.test = {};
// target.test.hehe = 'fuck';
// target.test.hehe.ew = 'fuck';
// console.log(target.test);