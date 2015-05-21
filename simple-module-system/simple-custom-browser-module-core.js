/**
 *
 *  #Simple Custom Browser Module System Core
 *
 *  - This implementation of a browser module system core
 *    can be custom named/branded and optionally assigned
 *    to an additional namespace as well.
 *
 *  - The code makes use of [String.trim](1) and
 *    [Object.keys](2), that are features of Mozilla's
 *    JavaScript versions 1.8.5.(1) respectively 1.8.1.(2).
 *
 *    (1) - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim]
 *    (2) - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys]
 *
 *  - Therefore it can be used safely in every ECMAScript-3
 *    (JavaScript 1.5) compatible environment as long as there
 *    are shims(3) included that do cover the mentioned functionality.
 *
 *    (3) - e.g. (1), (2), or recommended [https://github.com/es-shims/es5-shim/blob/master/es5-shim.min.js]
 *
 */


/**
 *
 *
 *
 */


//(function (global, moduleSystemName, namespace) {
(function (Function, moduleSystemName, namespace) {


  "use strict";


  var
    moduleSystem, // the "custom named" module system core.


  //global = (function (fct) {return fct("return this");}(Function)()),
    global = (Function("return this")()),

    Object = global.Object,
    RegExp = global.RegExp,

    object_prototype = Object.prototype,
    regexp_prototype = RegExp.prototype,


    expose_class_signature    = object_prototype.toString,
    regexp_prototype_compile  = regexp_prototype.compile,

    regX = (/(?:)/)
  ;


  /**
   *  fix some browser's (e.g. webkit's) "broken" prototypal [RegExp.compile] method.
   */
  if (("" + regX.compile("(?:)", "")) !== ("" + regX)) {
    regexp_prototype.compile = function (/*search, flags*/) {

      var regexp = this;
      regexp_prototype_compile.apply(regexp, arguments);

      return regexp;
    };
  }


  var
    createClassSignaturePattern = function (internalClassName) {
      return ["^\\[object\\s+", internalClassName, "\\]$"].join("");
    },
    getClassSignature = function (type) {
      return expose_class_signature.call(type);
    },
    PATTERN_CLASS_SIGNATURE_STRING  = createClassSignaturePattern("String"),

    isObject = function (type) {
      return (!!type && (("object" == (type = (typeof type))) || ("function" == type)));
    },
    isFunction = (function (TYPE_OF_FUNCTION_TYPE) {
      return function (type) {

        return (
             (typeof type == TYPE_OF_FUNCTION_TYPE)
          && (typeof type.call == TYPE_OF_FUNCTION_TYPE)
          && (typeof type.apply == TYPE_OF_FUNCTION_TYPE)
        );
      };
    }("function")),

    isString = function (type) {
      return regX.compile(PATTERN_CLASS_SIGNATURE_STRING).test(getClassSignature(type));
    }
  ;


  var
    object_keys = Object.keys,


    moduleIndex = {},


    getSanitizedIdentifier = function (identifier) {
      return ((isString(identifier) && identifier.trim()) || "");
    },
    require = function require_module (moduleIdentifier) {
      return moduleIndex[getSanitizedIdentifier(moduleIdentifier)];
    }
  ;
  namespace         = (isObject(namespace) && namespace) || global;
  moduleSystemName  = (((moduleSystemName = getSanitizedIdentifier(moduleSystemName)) != "") && moduleSystemName) || "module";


  moduleSystem = function module_system_core (moduleIdentifier, moduleFactory) {
    /**
     *  implementing the "custom named" module system core.
     */
    moduleIdentifier = getSanitizedIdentifier(moduleIdentifier);

    var module = (isFunction(moduleFactory) && moduleFactory(require, global));
    if (module && moduleIdentifier) {

      return (moduleIndex[moduleIdentifier] = module);
    }
  };
  moduleSystem.all = function get_all_module_names () {

    return object_keys(moduleIndex);
  };
  moduleSystem.all.size = function get_overall_module_size () {

    return object_keys(moduleIndex).length;
  };
  moduleSystem.require = require; // @NOTIFICATION :  do not forget to switch exposing and hiding
                                  //                  according to development, test or production.

  (function/* Enumerable_first_last_item_listGetterShorthands*/ () {
    var
      parseFloat = global.parseFloat,
      math_floor = global.Math.floor
    ;
    this.first = function get_first_item () {

      return (this()[0]);
    };
    this.last = function get_last_item () {
      var list;
      return ((list = this())[list.length - 1]);
    };
    this.item = function get_nth_item (idx) {

      return (this()[math_floor(parseFloat(idx, 10))]);
    };
  }).call(moduleSystem.all);  // applying the [first], [last] and [item] shorthand functionality of the anonymous (--named--)
                              // [Enumerable] Mixin onto the list getter method [all] of the "custom named" module system core.

  return (namespace[moduleSystemName] = moduleSystem);


}(Function, "module"/*SystemName, namespace*/));
//}((window || this), "module"/*, namespace*/));



/*


  [http://closure-compiler.appspot.com/home]


- Simple          -   949 byte
(function(b,d,e){var c=b("return this")();b=c.Object;var k=c.RegExp.prototype,p=b.prototype.toString,q=k.compile,g=/(?:)/;""+g.compile("(?:)","")!==""+g&&(k.compile=function(){q.apply(this,arguments);return this});var r=function(a){return function(b){return typeof b==a&&typeof b.call==a&&typeof b.apply==a}}("function"),l=b.keys,f={},h=function(a){return g.compile("^\\[object\\s+String\\]$").test(p.call(a))&&a.trim()||""},m=function(a){return f[h(a)]};e=function(a){return!!a&&("object"==(a=typeof a)||"function"==a)}(e)&&e||c;d=""!=(d=h(d))&&d||"module";b=function(a,b){a=h(a);var n=r(b)&&b(m,c);if(n&&a)return f[a]=n};b.all=function(){return l(f)};b.all.size=function(){return l(f).length};b.require=m;(function(){var a=c.parseFloat,b=c.Math.floor;this.first=function(){return this()[0]};this.last=function(){var a;return(a=this())[a.length-1]};this.item=function(c){return this()[b(a(c,10))]}}).call(b.all);return e[d]=b})(Function,"module");


*/
