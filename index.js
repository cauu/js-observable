const { Observable, observe } = require('./Observable');
const Watcher = require('./Wathcer');
const Dep = require('./Dep');

const state1 = {test: null};
const state2 = {test: null};

const rootState = {
  state1: state1,
  state2: state2
};

const stateWathcer = new Observable(rootState, new Dep());
const state = stateWathcer.value;

function update() {
  console.log('callback', state);
}

const watcher = new Watcher(stateWathcer, update);

state.state1.test = 1;
state.state2.test = {haha: [1,2,3,4]};
state.state2.test.haha[0] = 'fuck';
state.state1.test = 2;
// let target = {};
// let testVal;
// Object.defineProperty(target, 'test', {
//   enumerable: true,
//   configurable: true,
//   get: () => testVal,
//   set: (newVal) => {
//     console.log('notify');
//     testVal = newVal;
//   }
// });

// console.log(target);
// target.test = 1;
// console.log(target.test);