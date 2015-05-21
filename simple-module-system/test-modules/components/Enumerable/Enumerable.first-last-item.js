

module("components.Enumerable_first_last_item", function (require, global) {


  "use strict";


  var
    Mixin, // the "Enumerable_first_last_item" mixin module.


    parseFloat = global.parseFloat,
    math_floor = global.Math.floor,


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
    },
    item = function get_nth_item (idx) {

      return this[math_floor(parseFloat(idx, 10))];
    }
  ;


  Mixin = function () {
    /**
     *  implementing the "Enumerable_first_last_item" mixin module.
     */
    var
      enumerable = this
    ;
    enumerable.first = first;
    enumerable.last = last;
    enumerable.item = item;
  };


  return Mixin;


});



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   262 byte
module("components.Enumerable_first_last_item",function(g,a){var b=a.parseFloat,c=a.Math.floor,d=function(){return this[0]},e=function(){return this[this.length-1]},f=function(a){return this[c(b(a,10))]};return function(){this.first=d;this.last=e;this.item=f}});


*/
