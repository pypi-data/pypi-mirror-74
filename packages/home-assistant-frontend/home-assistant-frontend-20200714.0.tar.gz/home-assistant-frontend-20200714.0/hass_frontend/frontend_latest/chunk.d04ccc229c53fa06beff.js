(self.webpackJsonp=self.webpackJsonp||[]).push([[205],{717:function(e,t,r){e.exports=r(718)},718:function(e,t,r){var i,n,o;n="undefined"==typeof window?this:window,o=function(e,t){var r=e.document,i=Array.prototype.slice,n=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)};return function(){var e=50,t=50,o={dialRadius:40,dialStartAngle:135,dialEndAngle:45,value:0,max:100,min:0,valueDialClass:"value",valueClass:"value-text",dialClass:"dial",gaugeClass:"gauge",showValue:!0,gaugeColor:null,label:function(e){return Math.round(e)}};function a(e,t,i){var n=r.createElementNS("http://www.w3.org/2000/svg",e);for(var o in t)n.setAttribute(o,t[o]);return i&&i.forEach((function(e){n.appendChild(e)})),n}function s(e,t){return e*t/100}function l(e,t,r){var i=Number(e);return i>r?r:i<t?t:i}function c(e,t,r,i){var n=i*Math.PI/180;return{x:Math.round(1e3*(e+r*Math.cos(n)))/1e3,y:Math.round(1e3*(t+r*Math.sin(n)))/1e3}}return function(r,u){var d,f,h,p=r,m=(u=function(){var e=arguments[0],t=i.call(arguments,1);return t.forEach((function(t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})),e}({},o,u)).max,v=u.min,g=l(u.value,v,m),y=u.dialRadius,b=u.showValue,w=u.dialStartAngle,k=u.dialEndAngle,E=u.valueDialClass,x=u.valueClass,_=(u.valueLabelClass,u.dialClass),A=u.gaugeClass,C=u.color,O=u.label,j=u.viewBox;if(w<k){console.log("WARN! startAngle < endAngle, Swapping");var P=w;w=k,k=P}function D(r,i,n,o){var a=function(r,i,n){var o=e,a=t;return{end:c(o,a,r,n),start:c(o,a,r,i)}}(r,i,n),s=a.start,l=a.end,u=void 0===o?1:o;return["M",s.x,s.y,"A",r,r,0,u,1,l.x,l.y].join(" ")}function S(e,t){var r=s(function(e,t,r){return 100*(e-t)/(r-t)}(e,v,m),360-Math.abs(w-k)),i=r<=180?0:1;b&&(d.textContent=O.call(u,e)),f.setAttribute("d",D(y,w,r+w,i))}function z(e,t){var r=C(e),i="stroke "+1e3*t+"ms ease";f.style=["stroke: "+r,"-webkit-transition: "+i,"-moz-transition: "+i,"transition: "+i].join(";")}return h={setMaxValue:function(e){m=e},setValue:function(e){g=l(e,v,m),C&&z(g,0),S(g)},setValueAnimated:function(e,t){var r=g;r!==(g=l(e,v,m))&&(C&&z(g,t),function(e){var t=e.duration,r=1,i=60*t,o=e.start||0,a=e.end-o,s=e.step,l=e.easing||function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};n((function e(){var t=r/i,c=a*l(t)+o;s(c,r),r+=1,t<1&&n(e)}))}({start:r||0,end:g,duration:t||1,step:function(e,t){S(e)}}))},getValue:function(){return g}},function(e){d=a("text",{x:50,y:50,fill:"#999",class:x,"font-size":"100%","font-family":"sans-serif","font-weight":"normal","text-anchor":"middle","alignment-baseline":"middle","dominant-baseline":"central"}),f=a("path",{class:E,fill:"none",stroke:"#666","stroke-width":2.5,d:D(y,w,w)});var t=s(100,360-Math.abs(w-k)),r=a("svg",{viewBox:j||"0 0 100 100",class:A},[a("path",{class:_,fill:"none",stroke:"#eee","stroke-width":2,d:D(y,w,k,t<=180?0:1)}),d,f]);e.appendChild(r)}(p),h.setValue(g),h}}()}(n),void 0===(i=function(){return o}.call(t,r,t,e))||(e.exports=i)},787:function(e,t,r){"use strict";r.r(t),r.d(t,"severityMap",(function(){return E}));var i=r(717),n=r.n(i),o=r(0),a=r(100),s=r(13),l=r(204),c=r(301),u=(r(205),r(265)),d=r(232),f=r(227);function h(e){var t,r=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function m(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function w(e,t,r){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const E={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!m(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var u=0;u<c.length;u++)this.addElementPlacement(c[u],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(v(o.descriptor)||v(n.descriptor)){if(m(o)||m(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(m(o)){if(m(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}p(o,n)}else t.push(o)}return t}(a.d.map(h)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([Object(o.d)("hui-gauge-card")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(0),r.e(1),r.e(3),r.e(4),r.e(70)]).then(r.bind(null,731)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,r){return{type:"gauge",entity:Object(u.a)(e,1,t,r,["sensor"],e=>!isNaN(Number(e.state)))[0]||""}}},{kind:"field",decorators:[Object(o.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(o.h)()],key:"_config",value:void 0},{kind:"field",decorators:[Object(o.h)()],key:"_gauge",value:void 0},{kind:"field",decorators:[Object(o.i)("#gauge")],key:"_gaugeElement",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(e){if(!e||!e.entity)throw new Error("Invalid card configuration");if(!Object(c.b)(e.entity))throw new Error("Invalid Entity");this._config={min:0,max:100,...e},this._initGauge()}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o.f``;const e=this.hass.states[this._config.entity];if(!e)return o.f`
        <hui-warning>
          ${Object(f.a)(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=Number(e.state);return isNaN(t)?o.f`
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric","entity",this._config.entity)}</hui-warning
        >
      `:o.f`
      <ha-card @click=${this._handleClick} tabindex="0">
        <div id="gauge"></div>
        <div class="name">
          ${this._config.name||Object(l.a)(e)}
        </div>
      </ha-card>
    `}},{kind:"method",key:"shouldUpdate",value:function(e){return Object(d.a)(this,e)}},{kind:"method",key:"firstUpdated",value:function(e){w(k(i.prototype),"firstUpdated",this).call(this,e),this._gauge||this._initGauge()}},{kind:"method",key:"updated",value:function(e){if(w(k(i.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||Object(a.a)(this,this.hass.themes,this._config.theme);const n=null==t?void 0:t.states[this._config.entity],o=this.hass.states[this._config.entity];(null==n?void 0:n.state)!==o.state&&this._gauge.setValueAnimated(o.state,1)}},{kind:"method",key:"_initGauge",value:function(){this._gaugeElement&&this._config&&this.hass&&(this._gauge&&(this._gaugeElement.removeChild(this._gaugeElement.lastChild),this._gauge=void 0),this._gauge=n()(this._gaugeElement,{min:this._config.min,max:this._config.max,dialStartAngle:180,dialEndAngle:0,viewBox:"0 0 100 55",label:e=>{var t;return`${Math.round(e)}\n      ${this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||""}`},color:e=>{const t=this._config.severity;if(!t)return E.normal;const r=Object.keys(t).map(e=>[e,t[e]]);for(const i of r)if(null==E[i[0]]||isNaN(i[1]))return E.normal;return r.sort((e,t)=>e[1]-t[1]),e>=r[0][1]&&e<r[1][1]?E[r[0][0]]:e>=r[1][1]&&e<r[2][1]?E[r[1][0]]:e>=r[2][1]?E[r[2][0]]:E.normal}}))}},{kind:"method",key:"_handleClick",value:function(){Object(s.a)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return o.c`
      :host {
        display: block;
      }

      ha-card {
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
      }

      ha-card:focus {
        outline: none;
        background: var(--divider-color);
      }
      #gauge {
        width: 100%;
        max-width: 300px;
      }
      .dial {
        stroke: #ccc;
        stroke-width: 15;
      }
      .value {
        stroke-width: 15;
      }
      .value-text {
        fill: #000;
        font-size: var(--gauge-value-font-size, 1.1em);
        transform: translate(0, -5px);
        font-family: inherit;
      }
      .name {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        width: 100%;
        font-size: 15px;
      }

      }
    `}}]}}),o.a)}}]);
//# sourceMappingURL=chunk.d04ccc229c53fa06beff.js.map