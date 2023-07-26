console.log(a); // undefined
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// var a = 1;
let b;

// console.log(b); // undefined

const c = "c";

// console.log(d); // ReferenceError: d is not defined

for (let index = 0; index < 5; index++) {
  var a = 2;
  // console.log(d);  // ReferenceError: Cannot access 'd' before initialization
  let d;
}
