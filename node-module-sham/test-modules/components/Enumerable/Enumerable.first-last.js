

module("./test-modules/components/Enumerable/Enumerable.first-last", function (module/*, exports*/ /*, require, global*/) {


  "use strict";


  var
    Mixin, // the "Enumerable_first_last" mixin module.


  //parseFloat = global.parseFloat,
  //math_floor = global.Math.floor,


//  parseFloat("1.999999999999999" , 10); // 1.999999999999999
//  parseFloat( 1.999999999999999  , 10); // 1.999999999999999
//  parseInt  ("1.999999999999999" , 10); // 1
//  parseInt  ( 1.999999999999999  , 10); // 1
//
//  parseFloat("1.9999999999999999", 10); // 2
//  parseFloat( 1.9999999999999999 , 10); // 2
//  parseInt  ("1.9999999999999999", 10); // 1  // inconsistency ...
//  parseInt  ( 1.9999999999999999 , 10); // 2  // ... within [parseInt]
//
//  Math.floor(parseFloat("1.999999999999999" , 10)); // 1
//  Math.floor(parseFloat( 1.999999999999999  , 10)); // 1
//  Math.floor(parseFloat("1.9999999999999999", 10)); // 2  // no inconsistency anymore ...
//  Math.floor(parseFloat( 1.9999999999999999 , 10)); // 2  // ... where it had been before.


    first = function get_first_item () {

      return this[0];
    },
    last = function get_last_item () {
      var list = this;

      return list[list.length - 1];
    //return list[math_floor(parseFloat(list.length - 1))]; // in case the [length property was spoofed]
    }
  ;


  Mixin = function () {
    /**
     *  implementing the "Enumerable_first_last" mixin module.
     */
    this.first = first;
    this.last = last;
  };


//exports = Mixin;
  module.exports/* = exports*/ = Mixin; // [exports] injected standalone and than used instead of [module.exports] won't survive js-minification processes.


});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   203 byte
module("./test-modules/components/Enumerable/Enumerable.first-last",function(a){var b=function(){return this[0]},c=function(){return this[this.length-1]};a.exports=function(){this.first=b;this.last=c}});


*/
