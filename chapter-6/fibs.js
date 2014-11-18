// rFibs(27875)
//=> Array[27875]

// rFibs(27876)
//=> Uncaught RangeError: Maximum call stack size exceeded

function rFibs(n, base) {
  base = base ? base : 0;
  if (n === base) {
    return [];
  } else if (n === base + 1) {
    return [base];
  } else if (n === base + 2) {
    return [base, base + 1];
  } else {
    var arr = rFibs(n - 1, base);
    var i = arr.length - 1;
    arr.push(arr[i - 1] + arr[i]);
    return arr;
  }
}

var fibs = [];
// fibs = fibs.concat(rFibs(25143));
fibs = fibs.concat(rFibs(25000));
console.log(fibs.length);
// last = fibs.pop();
// console.log(last);
// fibs = fibs.concat(rFibs(40000, last));
// console.log(fibs.length);

// var fibs = [];
// for (var i = 0; i < 50000; i += 5000) {
//   setTimeout(function() {
//     fibs = fibs.concat(rFibs(i));
//   }, 1)
// }
// console.log('---> fibs ', fibs.length);

// function tFibs(num, cb, acc) {
//   acc = acc || 1;
//   if (num === 0) {
//     callback(acc);
//   }
//   else {
//     setTimeout(function() {
//       tFibs(num - 1, cb, acc++);
//     }, 0);
//   }
// }

// ----------------------------

// function tail() {
//   var fn = tail.caller;
//   var args = arguments;
//   setTimeout(function() {
//     fn.apply(this, args);
//   }, 0);
// };

// function fibs2(n) {
//   setTimeout(function(n) {
//     if (n === 0) {
//       return [];
//     } else if (n === 1) {
//       return [0];
//     } else if (n === 2) {
//       return [0, 1];
//     } else {
//       // [0, 1]
//       // return fibs(n - 1);

//       var arr = fibs(n - 1);
//       var i = arr.length - 1;
//       arr.push(arr[i - 1] + arr[i]);
//       return arr;
//     }
//   }, 0, n);
// }

// // recursive fibonacci sequence
// function fibs(n, i) {
//   var arr;
//   i = i ? i : 0;
//   i++;

//   if (n === 0) {
//     return [];
//   } else if (n === 1) {
//     return [0];
//   } else if (n === 2) {
//     return [0, 1];
//   } else {
//     if (i > 5000) {
//       i = 0;
//       setTimeout(function() {
//         arr = fibs(n - 1, i);
//       }, 1);
//     } else {
//       arr = fibs(n - 1, i);
//     }

//     if(n === 0){
//       cb(arr)
//     }
//     // try {
//     //   arr = fibs(n - 1, i);
//     // }
//     // catch(e) {
//     //   // TODO: possibly try setTimeOut
//     //   // console.log(e);
//     //   setTimeout()
//     // }
//     var last_idx = arr.length - 1;
//     arr.push(arr[last_idx - 1] + arr[last_idx]);
//     return arr;
//   }
// }

// console.log(fibs(5000));
