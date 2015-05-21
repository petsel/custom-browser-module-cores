

module("./test-modules/composites/Array/Array.first-last", function (module, require, global) {

  "use strict";
/*
  var
    Array                 = global.Array,
    array_prototype       = Array.prototype,

    Enumerable_first_last = require("./test-modules/components/Enumerable/Enumerable.first-last")
  ;
  Enumerable_first_last.call(array_prototype);

  Array.first = function (list) {
    array_prototype.first.call(list);
  };
  Array.last = function (list) {
    array_prototype.last.call(list);
  };
*/
  require("./test-modules/components/Enumerable/Enumerable.first-last").call(global.Array.prototype);

  module.exports = global.Array;

});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   182 byte
module("./test-modules/composites/Array/Array.first-last",function(b,c,a){c("./test-modules/components/Enumerable/Enumerable.first-last").call(a.Array.prototype);b.exports=a.Array});


*/
