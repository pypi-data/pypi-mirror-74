(self.webpackJsonp=self.webpackJsonp||[]).push([[213],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a}));var r=function(t,e,n){return new Promise((function(r,s){var i=document.createElement(t),a="src",o="body";switch(i.onload=function(){return r(e)},i.onerror=function(){return s(e)},t){case"script":i.async=!0,n&&(i.type=n,i.crossOrigin="/"===e.substr(0,1)?"use-credentials":"anonymous");break;case"link":i.type="text/css",i.rel="stylesheet",a="href",o="head"}i[a]=e,document[o].appendChild(i)}))},s=function(t){return r("link",t)},i=function(t){return r("script",t)},a=function(t){return r("script",t,"module")}},765:function(t,e,n){"use strict";n.r(e);var r,s,i=n(118),a=n(569),o=n(516),u=n(568);function c(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,s=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw s}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"CastManager",(function(){return d})),n.d(e,"getCastManager",(function(){return v}));var d=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"auth",void 0),l(this,"status",void 0),l(this,"_eventListeners",{}),this.auth=e;var r=this.castContext;r.setOptions({receiverApplicationId:a.a,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),r.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,(function(t){return n._sessionStateChanged(t)})),r.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,(function(t){return n._castStateChanged(t)}))}var e,n,r;return e=t,(n=[{key:"addEventListener",value:function(t,e){var n=this;return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),function(){n._eventListeners[t].splice(n._eventListeners[t].indexOf(e))}}},{key:"sendMessage",value:function(t){this.castSession.sendMessage(a.c,t)}},{key:"requestSession",value:function(){return this.castContext.requestSession()}},{key:"_fireEvent",value:function(t){var e,n=c(this._eventListeners[t]||[]);try{for(n.s();!(e=n.n()).done;)(0,e.value)()}catch(r){n.e(r)}finally{n.f()}}},{key:"_receiveMessage",value:function(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}},{key:"_sessionStateChanged",value:function(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?Object(u.a)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))}},{key:"_castStateChanged",value:function(t){this._fireEvent("state-changed")}},{key:"_attachMessageListener",value:function(){var t=this;this.castSession.addMessageListener(a.c,(function(e,n){return t._receiveMessage(JSON.parse(n))}))}},{key:"castConnectedToOurHass",get:function(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||a.b&&this.status.hassUrl===o.b)}},{key:"castState",get:function(){return this.castContext.getCastState()}},{key:"castContext",get:function(){return cast.framework.CastContext.getInstance()}},{key:"castSession",get:function(){return this.castContext.getCurrentSession()}}])&&h(e.prototype,n),r&&h(e,r),t}(),v=function(t){return s||(s=function(){if(r)return r;r=new Promise((function(t){window.__onGCastApiAvailable=t}));var t=document.createElement("div");return t.id="cast",document.body.append(t),Object(i.b)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),r}().then((function(e){if(!e)throw new Error("No Cast API available");return new d(t)}))),s}}}]);
//# sourceMappingURL=chunk.3c45beb9aee1e1bf6c81.js.map