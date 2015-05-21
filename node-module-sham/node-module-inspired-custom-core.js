/*!
 *
 *  # Node Module Inspired Custom Core
 *
 *  ## Custom Browser Module System Cores
 *
 *  There are 2 approaches targeting custom browser module system cores.
 *
 *  - Each approach does exemplarily implement a browser module system core
 *    that can be custom named/branded and optionally assigned to an additional
 *    namespace as well.
 *
 *  - A core modules code base does make use of `String.trim`[^trim] and
 *    `Object.keys`[^keys] that are features of Mozilla's JavaScript versions
 *    1.8.5. respectively 1.8.1.
 *
 *  - Therefore it can be used safely in every ECMAScript-3 (JavaScript 1.5)
 *    compatible environment as long as there are *shims*[^trim] [^keys] [^shim]
 *    included that do cover the mentioned functionality.
 *
 *  [^trim]: developer.mozilla.org: [`String.trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim "developer.mozilla.org :: »String.trim«")
 *
 *  [^keys]: developer.mozilla.org: [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "developer.mozilla.org :: »Object.keys«")
 *
 *  [^shim]: recommended - github.com: [»es5-shim«](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "github.com :: »es5-shim«")
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

    var
      module = {
        exports: {},
        require: require
      }/*,
      exports = module.exports*/
    ;
    if (isFunction(moduleFactory) && moduleIdentifier) {

    //moduleFactory(module, exports, require, global); // [exports] injected standalone and than used instead of [module.exports] won't survive js-minification processes.
      moduleFactory(module, require, global);

      return (moduleIndex[moduleIdentifier] = module.exports);
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


- Simple          -   979 byte
(function(b,d,e){var c=b("return this")();b=c.Object;var l=c.RegExp.prototype,p=b.prototype.toString,q=l.compile,g=/(?:)/;""+g.compile("(?:)","")!==""+g&&(l.compile=function(){q.apply(this,arguments);return this});var r=function(a){return function(b){return typeof b==a&&typeof b.call==a&&typeof b.apply==a}}("function"),m=b.keys,f={},h=function(a){return g.compile("^\\[object\\s+String\\]$").test(p.call(a))&&a.trim()||""},k=function(a){return f[h(a)]};e=function(a){return!!a&&("object"==(a=typeof a)||"function"==a)}(e)&&e||c;d=""!=(d=h(d))&&d||"module";b=function(a,b){a=h(a);var n={exports:{},require:k};if(r(b)&&a)return b(n,k,c),f[a]=n.exports};b.all=function(){return m(f)};b.all.size=function(){return m(f).length};b.require=k;(function(){var a=c.parseFloat,b=c.Math.floor;this.first=function(){return this()[0]};this.last=function(){var a;return(a=this())[a.length-1]};this.item=function(c){return this()[b(a(c,10))]}}).call(b.all);return e[d]=b})(Function,"module");


*/
