define("ipycallback",["@jupyter-widgets/base"],(function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(2);n.MODULE_VERSION=r.version,n.MODULE_NAME=r.name},function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(t(0)),r(t(3))},function(e){e.exports=JSON.parse('{"name":"ipycallback","version":"0.2.2","description":"Use this widget to allow client side (javascript) to trigger event on the server side (python)","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["lib/**/*.js","dist/*.js","css/*.css"],"homepage":"https://github.com/binh-vu/ipycallback","bugs":{"url":"https://github.com/binh-vu/ipycallback/issues"},"license":"BSD-3-Clause","author":{"name":"Binh Vu","email":"binh@toan2.com"},"main":"lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/binh-vu/ipycallback"},"scripts":{"build":"npm run build:lib && npm run build:nbextension","build:labextension":"npm run clean:labextension && mkdirp ipycallback/labextension && cd ipycallback/labextension && npm pack ../..","build:lib":"tsc","build:nbextension":"webpack -p","build:all":"npm run build:labextension && npm run build:nbextension","clean":"npm run clean:lib && npm run clean:nbextension","clean:lib":"rimraf lib","clean:labextension":"rimraf ipycallback/labextension","clean:nbextension":"rimraf ipycallback/nbextension/static/index.js","prepack":"npm run build:lib","test":"npm run test:firefox","test:chrome":"karma start --browsers=Chrome tests/karma.conf.js","test:debug":"karma start --browsers=Chrome --singleRun=false --debug=true tests/karma.conf.js","test:firefox":"karma start --browsers=Firefox tests/karma.conf.js","test:ie":"karma start --browsers=IE tests/karma.conf.js","watch":"npm-run-all -p watch:*","watch:lib":"tsc -w","watch:nbextension":"webpack --watch"},"dependencies":{"@jupyter-widgets/base":"^1.1.10 || ^2 || ^3"},"devDependencies":{"@phosphor/application":"^1.6.0","@phosphor/widgets":"^1.6.0","@types/expect.js":"^0.3.29","@types/mocha":"^5.2.5","@types/node":"^10.11.6","@types/webpack-env":"^1.13.6","acorn":"^7.2.0","css-loader":"^3.2.0","expect.js":"^0.3.1","fs-extra":"^7.0.0","karma":"^3.1.0","karma-chrome-launcher":"^2.2.0","karma-firefox-launcher":"^1.1.0","karma-ie-launcher":"^1.0.0","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-typescript":"^5.0.3","karma-typescript-es6-transform":"^5.0.3","mkdirp":"^0.5.1","mocha":"^5.2.0","npm-run-all":"^4.1.3","rimraf":"^2.6.2","source-map-loader":"^0.2.4","style-loader":"^1.0.0","ts-loader":"^5.2.1","typescript":"~3.8","webpack":"^4.20.2","webpack-cli":"^3.1.2"},"jupyterlab":{"extension":"lib/plugin"}}')},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t(4),i=t(0);t(5);class o extends r.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:o.model_name,_model_module:o.model_module,_model_module_version:o.model_module_version,_view_name:o.view_name,_view_module:o.view_module,_view_module_version:o.view_module_version,py_endpoint:[0,""],js_endpoint:[0,""]})}}n.SlowTunnelModel=o,o.serializers=Object.assign({},r.DOMWidgetModel.serializers),o.model_name="SlowTunnelModel",o.model_module=i.MODULE_NAME,o.model_module_version=i.MODULE_VERSION,o.view_name="SlowTunnelView",o.view_module=i.MODULE_NAME,o.view_module_version=i.MODULE_VERSION;class a extends r.DOMWidgetView{constructor(){super(...arguments),this.onReceiveHandler=s}render(){this.el.classList.add("ipycallback"),this.model.on("change:js_endpoint",this.receive_msg,this),void 0===window.IPyCallback&&(window.IPyCallback=new Map),window.IPyCallback.set(this.model.model_id,this)}send_msg(e){let n=this.model.get("py_endpoint")[0]+1;return this.model.set("py_endpoint",[n,e]),this.model.save_changes(),n}receive_msg(){var e=this.model.get("js_endpoint");this.onReceiveHandler(e[0],e[1])}on_receive(e){this.onReceiveHandler=e}}function s(e,n){}n.SlowTunnelView=a},function(n,t){n.exports=e},function(e,n,t){var r=t(6),i=t(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var o=e[i],c=n.base?o[0]+n.base:o[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=s(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(e,n){var t,r,i;if(n.singleton){var o=b++;t=m||(m=l(n)),r=p.bind(null,t,o,!1),i=p.bind(null,t,o,!0)}else t=l(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=s(t[r]);a[i].references--}for(var o=c(e,n),l=0;l<t.length;l++){var u=s(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=o}}}},function(e,n,t){(n=t(8)(!1)).push([e.i,".ipycallback {\n  display: none;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}}])}));
//# sourceMappingURL=embed-bundle.js.map