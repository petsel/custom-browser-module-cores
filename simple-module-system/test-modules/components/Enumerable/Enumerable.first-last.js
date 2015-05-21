

module("components.Enumerable_first_last", function (/*require, global*/) {


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
    var
      enumerable = this
    ;
    enumerable.first = first;
    enumerable.last = last;
  };


  return Mixin;


});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   173 byte
module("components.Enumerable_first_last",function(){var a=function(){return this[0]},b=function(){return this[this.length-1]};return function(){this.first=a;this.last=b}});


*/
