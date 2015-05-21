

module(/*"composites.Array_first_last"*/"", function (require, global) {

  "use strict";
/*
  var
    Array                 = global.Array,
    array_prototype       = Array.prototype,

    Enumerable_first_last = require("components.Enumerable_first_last")
  ;
  Enumerable_first_last.call(array_prototype);

  Array.first = function (list) {
    array_prototype.first.call(list);
  };
  Array.last = function (list) {
    array_prototype.last.call(list);
  };
*/
  require("components.Enumerable_first_last").call(global.Array.prototype);

//return global.Array;

});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -    88 byte
module("",function(a,b){a("components.Enumerable_first_last").call(b.Array.prototype)});


*/
