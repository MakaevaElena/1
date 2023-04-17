// function foo(a, b) {
//   return a * b;
// }

// const bar = foo.bind(null, 2);
// bar(2);

// let f = function g(){
//   return 23;
// };
// console.log(typeof g());

// "use strict";

// function getThis(){
//     return this;
// }
// console.log(getThis());

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// console.log(message);
// var message = 'Hello';

// 'use strict';

// const details = {
//   message: 'Hello!',
// };

// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details));

// function foo() {
//   console.log(this);
// }
// foo.call(null);

// function foo(){
//     return {bar:1};
// }

// console.log(typeof foo().bar);

// printMessage();

// function printMessage(){
//     console.log('Hello!');
// }

// var a = 1,
//   b = function a(x) {
//     x && a(--x);
//   };
// console.log(a);

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// (function (a) {
//   arguments[0] = 10;
//   return a;
// })(5);

// var name = 'John';
// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// var printMessage = user.printMessage;
// printMessage();

// let name = 'John';
// function printName(){
//     let name ='Peter';
//     console.log(name);
// }
// printName();

// for(var i =0;i<10;i++){
//     // ...
//     // return i+3;
// }

// console.log(i);

// const foo = bar();
// const number = 2;

// function bar() {
//   return number;
// }

// let f = function(a,b) { return a+b }
// let f = new Function("a,b", "return a+b")
// let f = new Function("a", "b", "return a+b")
// let f = (a, b) => a + b
// let f = (a, b) => { a + b }
// console.log(f(3,5));

// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);

// function getThis() {
//   return this;
// }

// console.log(getThis());

// var name ='John';
// function printName(){
//     console.log(name)
//     var name ='Peter';
//     console.log(name);
// }
// printName();

// console.log(message);
// let message = 'Hello';

const details = {
  name: 'John',
};

function getMessage(message) {
  return `${message} ${this.name}`;
}

console.log(getMessage.apply(details, ['Hello']));
