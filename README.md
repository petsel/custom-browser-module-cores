# Custom Browser Module System Cores


There are 2 approaches targeting custom browser module system cores.

- Each approach does exemplarily implement a browser module system core that can be custom named/branded and optionally assigned to an additional namespace as well.
- A core modules code base does make use of `String.trim`[^trim] and `Object.keys`[^keys] that are features of Mozilla's JavaScript versions 1.8.5. respectively 1.8.1.
- Therefore it can be used safely in every ECMAScript-3 (JavaScript 1.5) compatible environment as long as there are *shims*[^trim] [^keys] [^shim] included that do cover the mentioned functionality.


This mini project is considered to be done. All provided code should be taken/seen as proof of concept of how beneficial developing might become, if one makes use of a custom browser module system.


[^trim]: developer.mozilla.org: [`String.trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim "developer.mozilla.org :: »String.trim«")

[^keys]: developer.mozilla.org: [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "developer.mozilla.org :: »Object.keys«")

[^shim]: recommended - github.com: [»es5-shim«](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys "github.com :: »es5-shim«")
