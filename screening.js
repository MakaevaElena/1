// const foo = (str) => {
//   let res ='';
//   const newArr = str.split('');
//   newArr.forEach((el) => res +=  `${newArr.filter((a) => el === a).length}${el}`);

//   return [...new Set(res)].join('');
// };

// console.log(foo('aabbbcccc'));

// const foo =(str)=>{
// newArr = str.split('');
// console.log(newArr.filter(el=>el === '(').length === newArr.filter(el=>el === ')').length);
// }

// foo('((vvv()');

// const foo = (num) =>{
//   const res = num.toString(2).split('').filter(el=> el === '1').length;
//   console.log(res);
// }

// foo(15);

// const foo = (x, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     } else return -1;
//   }
// };

// console.log(foo(3, [1, 2, 3, 4]));

function isBracketsBalanced(str) {
  if (str.includes("[") && str.includes("]")) {
    if (str.match(/\[/g).length === str.match(/\]/g).length) return true;
  }

  if (str.includes("{") && str.includes("}")) {
    if (str.match(/\{/g).length === str.match(/\}/g).length) return true;
  }

  if (str.includes("(") && str.includes(")")) {
    if (str.match(/\(/g).length === str.match(/\)/g).length) return true;
  }

  if (str.includes("<") && str.includes(">")) {
    if (str.match(/</g).length === str.match(/>/g).length) return true;
  }

  return false;
}

console.log(isBracketsBalanced("{)"));
