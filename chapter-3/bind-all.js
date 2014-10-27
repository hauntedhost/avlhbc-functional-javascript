var _ = require('../lib/underscore');

var target = {
  helloName: function() {
    return 'hello, ' + this.name;
  },

  sayHello: function(name) {
    this.name = name;
    console.log(this.helloName());
  }
};

var wat = {
  helloName: function() {
    return 'wat';
  }
}

target.sayHello.call(wat, 'sean');
//=> wat

_.bindAll(target, 'helloName', 'sayHello');
target.sayHello.call(wat, 'sean');
//=> hello, sean
