(self.webpackJsonp=self.webpackJsonp||[]).push([[199],{516:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r="5FE44367",i="http://192.168.1.234:8123"},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));var r=n(569),i=n(516),o=function(e,t){return e.sendMessage({type:"connect",refreshToken:t.data.refresh_token,clientId:t.data.clientId,hassUrl:r.b?i.b:t.data.hassUrl})},a=function(e,t,n){return e.sendMessage({type:"show_lovelace_view",viewPath:t,urlPath:n||null})},s=function(e,t){if(!e.castConnectedToOurHass)return new Promise((function(n){var r=e.addEventListener("connection-changed",(function(){e.castConnectedToOurHass&&(r(),n())}));o(e,t)}))}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a}));var r=n(516),i=!1,o=i?r.a:"B12CE3CA",a="urn:x-cast:com.nabucasa.hast"},812:function(e,t,n){"use strict";n.r(t);n(113);var r=n(0),i=n(48),o=n(568);n(154);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=m(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .controls {\n        display: flex;\n        align-items: center;\n      }\n      google-cast-launcher {\n        margin-right: 0.57em;\n        cursor: pointer;\n        display: inline-block;\n        height: 24px;\n        width: 24px;\n      }\n      .inactive {\n        padding: 0 4px;\n      }\n    "]);return s=function(){return e},e}function c(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function l(){var e=m(['\n              <div class="controls">\n                <google-cast-launcher></google-cast-launcher>\n                <mwc-button\n                  @click=',"\n                  class=","\n                  .unelevated=","\n                  .disabled=","\n                >\n                  SHOW\n                </mwc-button>\n              </div>\n            "]);return l=function(){return e},e}function u(){var e=m([" No devices found "]);return u=function(){return e},e}function f(){var e=m([" Cast API unavailable "]);return f=function(){return e},e}function d(){var e=m([""]);return d=function(){return e},e}function p(){var e=m([" Cast requires HTTPS "]);return p=function(){return e},e}function h(){var e=m(['\n      <ha-icon .icon="','"></ha-icon>\n      <div class="flex">\n        <div class="name">',"</div>\n        ","\n      </div>\n    "]);return h=function(){return e},e}function v(){var e=m([""]);return v=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){var t,n=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function P(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function S(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,n,r){var i=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!_(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=S(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:j(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=j(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),n),s=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(P(o.descriptor)||P(i.descriptor)){if(_(o)||_(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(_(o)){if(_(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}O(o,i)}else t.push(o)}return t}(a.d.map(E)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([Object(r.d)("hui-cast-row")],(function(e,t){var a,m,E=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,t);var n,r=(n=i,function(){var e,t=C(n);if(k()){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function i(){var t;y(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(w(t)),t}return i}(t);return{F:E,d:[{kind:"field",decorators:[Object(r.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"_config",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"_castManager",value:void 0},{kind:"field",decorators:[Object(r.h)()],key:"_noHTTPS",value:function(){return!1}},{kind:"method",key:"setConfig",value:function(e){if(!e||void 0===e.view||null===e.view)throw new Error("Invalid Configuration: 'view' required");this._config=Object.assign({icon:"hass:television",name:"Home Assistant Cast"},e)}},{kind:"method",key:"shouldUpdate",value:function(e){return!(1===e.size&&e.has("hass"))}},{kind:"method",key:"render",value:function(){if(!this._config)return Object(r.f)(v());var e=this._castManager&&this._castManager.status&&this._config.view===this._castManager.status.lovelacePath&&this._config.dashboard===this._castManager.status.urlPath;return Object(r.f)(h(),this._config.icon,this._config.name,this._noHTTPS?Object(r.f)(p()):void 0===this._castManager?Object(r.f)(d()):null===this._castManager?Object(r.f)(f()):"NO_DEVICES_AVAILABLE"===this._castManager.castState?Object(r.f)(u()):Object(r.f)(l(),this._sendLovelace,Object(i.a)({inactive:!e}),e,!this._castManager.status))}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;A(C(E.prototype),"firstUpdated",this).call(this,e),"http:"===location.protocol&&"localhost"!==location.hostname&&(this._noHTTPS=!0),n.e(213).then(n.bind(null,765)).then((function(e){return(0,e.getCastManager)(t.hass.auth).then((function(e){t._castManager=e,e.addEventListener("connection-changed",(function(){t.requestUpdate()})),e.addEventListener("state-changed",(function(){t.requestUpdate()}))}),(function(){t._castManager=null}))}))}},{kind:"method",key:"updated",value:function(e){A(C(E.prototype),"updated",this).call(this,e),this._config&&this._config.hide_if_unavailable&&(this.style.display=this._castManager&&"NO_DEVICES_AVAILABLE"!==this._castManager.castState?"":"none")}},{kind:"method",key:"_sendLovelace",value:(a=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(this._castManager,this.hass.auth);case 2:Object(o.b)(this._castManager,this._config.view,this._config.dashboard);case 3:case"end":return e.stop()}}),e,this)})),m=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){c(i,n,r,o,s,"next",e)}function s(e){c(i,n,r,o,s,"throw",e)}o(void 0)}))},function(){return m.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return Object(r.c)(s())}}]}}),r.a)}}]);
//# sourceMappingURL=chunk.884c5745b21958d01fb4.js.map