

module("./test-modules/composites/Array/Array.first-last", function (module, require, global) {

  "use strict";

  require("./test-modules/components/Enumerable/Enumerable.first-last").call(global.Array.prototype);

  return global.Array;

});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   179 byte
module("./test-modules/composites/Array/Array.first-last",function(c,b,a){b("./test-modules/components/Enumerable/Enumerable.first-last").call(a.Array.prototype);return a.Array});


*/
