function cat() {
  var head = _.first(arguments);
  if (exists(head)) {
    return head.concat.apply(head, _.rest(arguments));
  } else {
    return [];
  }
}

function cat() {
  return [].concat.apply([], arguments);
}

var c = cat([1, 2, 3], [5,5], [99, 98]);
console.log(c);
//=> [1, 2, 3, 5, 5, 99, 98]


var c2 = cat2([1, 2, 3], [5,5], [99, 98])
console.log(c2);
//=> [1, 2, 3, 5, 5, 99, 98]
