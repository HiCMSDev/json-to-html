!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var n="object"==typeof exports?t(require("react")):t(e.React);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.Node=function(e){var t=e.node,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["node"]);if(function(e){return Boolean(e.text)}(t))return o.default.createElement(u.LeafNode,r({node:t},n));return o.default.createElement(f.ContainerNode,r({node:t},n))};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),u=n(4),f=n(5)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHtmlTag=function(e,t){return e[t]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonToHtml=function(e){var t=e.document,n=e.config;return r.default.createElement(o.Node,{node:t,config:n})};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LeafNode=function(e){var t=e.node,n=e.config,u=(0,o.getHtmlTag)(n,t.type);return r.default.createElement(u,null,t.text)};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContainerNode=function(e){var t=e.node,n=e.config,f=(0,o.getHtmlTag)(n,t.type);return r.default.createElement(f,null,t.nodes.map(function(e,t){return r.default.createElement(u.Node,{node:e,config:n,key:t})}))};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(2),u=n(1)}])});