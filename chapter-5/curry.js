var _ = require('../lib/underscore');

function curry2(fun) {
  // actual function returned
  return function(secondArg) {
    // second function returned when first function, above, is called
    return function(firstArg) {
      // return application of both arguments to original function passed
      return fun(firstArg, secondArg);
    }
  }
}

//                        ---- secondArg
//                        |
var div = function(num, divisor) { return num / divisor; }
//                 |
//                 ----firstArg

//                      --- secondArg (divisor)
//                      |
var div10 = curry2(div)(10);
//                  |
//                  ---- fun

//                ------ firstArg (num)
//                |
console.log(div10(50));
//=> 5

