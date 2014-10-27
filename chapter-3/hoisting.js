function hoist(n) {
  for (var i = 0; i < n; i++);
  return i;
}

// via hoisting, hoist above is equivalent:
function hoist2(n) {
  var i;
  for (i; i < n; i++);
  return i;
}

console.log(hoist(127));
//=> 127

function weirdness(n) {
  for (this['i'] = 0; this['i'] < n; this['i']++);
  return this['i'];
}

console.log(weirdness(127));
//=> 127;

// i was hoisted to global var
console.log(i);
//=> 127;

// given a namespace
console.log(weirdness.call({}, 418));
//=> 418

// global is untouched
console.log(i);
//=> 127;
