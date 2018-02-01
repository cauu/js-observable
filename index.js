const Observable = require('./Observable');

const state = {test: 0};

console.log(state.test);
const target = new Observable(state);
state.test = 1;
console.log(state.test);
state.test = 2;
console.log(state.test);

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