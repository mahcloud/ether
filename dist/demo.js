!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define("Ether",["React","ReactDOM"],t):"object"==typeof exports?exports.Ether=t(require("React"),require("ReactDOM")):e.Ether=t(e.React,e.ReactDOM)}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=131)}({128:function(e,t){e.exports="css/ether.css"},129:function(e,n){e.exports=t},130:function(e,t,n){"use strict";var r=n(129),o=n(66),u=function(e){return e&&e.__esModule?e:{default:e}}(n(49));n(128),document.addEventListener("DOMContentLoaded",function(){(0,r.render)(u.default.createElement(o.Ellipsis,null),document.getElementById("demo"))})},131:function(e,t,n){e.exports=n(130)},49:function(t,n){t.exports=e},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(49));var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n._interval=setInterval(function(){return n.updateDots()},500),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillUnmount",value:function(){clearInterval(this._interval)}},{key:"updateDots",value:function(){var e=this.state.count>=3?0:this.state.count+1;this.setState({count:e})}},{key:"render",value:function(){for(var e="",t=0;t<this.state.count;t++)e+=".";return o.default.createElement("span",{className:"loading-ellipsis"},this.props.children||"Loading",o.default.createElement("span",{className:"dots"},e))}}]),t}();t.default=u},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Ellipsis=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(65));t.Ellipsis=r.default}})});