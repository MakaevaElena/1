// const foo = () => {
//   const arr = [10, 12, 15, 21];
//   for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//       console.log("Index: " + i + ", element: " + arr[i]);
//     }, 3000);
//   }
// };

// foo();

//значение let замыкается до i++
// var возьмет последнее значение 5
const foo = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 3000);
  }
};

foo();

// const foo = () => {
//   let t = setInterval(() => {
//     setTimeout(() => {
//       clearInterval(t);
//     }, 3000);
//     console.log("привет");
//   }, 1000);
// };

// foo();

// const foo = () => {
//   const promise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log(1);
//       reject("2");
//     }, 1000)
//   );
//   promise.then((result) => console.log(2)).catch((result) => console.log(3));
// };

// foo();

// const foo = () => {
//   let j = 1;
//   for (var i = 0; i < 5; i++) {
//     // console.log(j, i, "без setTime");

//     setTimeout(function () {
//       j = 2;
//       console.log(j, i);
//     }, 3000);
//     j = 3;
//     // console.log(j, "после setTime");
//   }
// };

// foo();
