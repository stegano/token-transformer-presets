(()=>{"use strict";var e={554:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,i)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(r(712),t);var u=r(712);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(u).default}})},712:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JwtViewer=void 0;const i=o(r(411)),n=e=>JSON.stringify(JSON.parse(e),null,2);t.JwtViewer={preProcessors:[e=>{const[t,r,o]=e.split(".");return{header:n(Buffer.from(t,"base64").toString()),payload:n(Buffer.from(r,"base64").toString()),signature:o}}],templateFile:i.default.resolve(__dirname,"jwt-viewer.hbs")},t.default=t.JwtViewer},411:e=>{e.exports=require("node:path")}},t={},r=function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(554),o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();