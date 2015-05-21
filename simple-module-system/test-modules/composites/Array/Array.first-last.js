

module(/*"composites.Array_first_last"*/"", function (require, global) {

  "use strict";

  require("components.Enumerable_first_last").call(global.Array.prototype);

//return global.Array;

});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -    88 byte
module("",function(a,b){a("components.Enumerable_first_last").call(b.Array.prototype)});


*/
