var SushiPizza = (function() {
  var addSushi = function() {
    console.log('sushi added');
  }

  var makePizza = function() {
    console.log('pizza made');
  }

  return {
    makeSushiPizza: function() {
      addSushi();
      makePizza();
    }
  }
})();
