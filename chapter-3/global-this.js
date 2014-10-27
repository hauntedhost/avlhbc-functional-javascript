function globalThis() {
  return this;
}

var gthis = globalThis();
console.log(gthis == global);
//=> true

var gthis = globalThis.call('bourbon');
console.log(gthis == 'bourbon');
//=> true

var gthis = globalThis.apply('coffee', [])
console.log(gthis == 'coffee');
//=> true

var a = { name: 'a', fun: function() { return this; }};
console.log(a.fun());
//=> { name: 'a', fun: [Function] }
