(self.webpackJsonp=self.webpackJsonp||[]).push([[35],{829:function(e,n,t){"use strict";t.r(n);t(78);var r=t(4),o=t(32),i=(t(302),t(211),t(196),t(220)),a=t(215);t(243);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="iron-flex ha-style">\n        .content {\n          padding-bottom: 24px;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto;\n          margin-top: 24px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--error-color);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .card-actions a {\n          color: var(--primary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <hass-subpage header=[[localize(\'ui.panel.config.cloud.forgot_password.title\')]]>\n        <div class="content">\n          <ha-card header=[[localize(\'ui.panel.config.cloud.forgot_password.subtitle\')]]>\n            <div class="card-content">\n              <p>\n                [[localize(\'ui.panel.config.cloud.forgot_password.instructions\')]]\n              </p>\n              <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n              <paper-input\n                autofocus=""\n                id="email"\n                label="[[localize(\'ui.panel.config.cloud.forgot_password.email\')]]"\n                value="{{email}}"\n                type="email"\n                on-keydown="_keyDown"\n                error-message="[[localize(\'ui.panel.config.cloud.forgot_password.email_error_msg\')]]"\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-progress-button\n                on-click="_handleEmailPasswordReset"\n                progress="[[_requestInProgress]]"\n                >[[localize(\'ui.panel.config.cloud.forgot_password.send_reset_email\')]]</ha-progress-button\n              >\n            </div>\n          </ha-card>\n        </div>\n      </hass-subpage>\n    ']);return c=function(){return e},e}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(s,e);var n,t,o,i,a=(n=s,function(){var e,t=y(n);if(d()){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function s(){return l(this,s),a.apply(this,arguments)}return t=s,i=[{key:"template",get:function(){return Object(r.a)(c())}},{key:"properties",get:function(){return{hass:Object,email:{type:String,notify:!0,observer:"_emailChanged"},_requestInProgress:{type:Boolean,value:!1},_error:{type:String,value:""}}}}],(o=[{key:"_emailChanged",value:function(){this._error="",this.$.email.invalid=!1}},{key:"_keyDown",value:function(e){13===e.keyCode&&(this._handleEmailPasswordReset(),e.preventDefault())}},{key:"_handleEmailPasswordReset",value:function(){var e=this;this.email&&this.email.includes("@")||(this.$.email.invalid=!0),this.$.email.invalid||(this._requestInProgress=!0,this.hass.callApi("post","cloud/forgot_password",{email:this.email}).then((function(){e._requestInProgress=!1,e.fire("cloud-done",{flashMessage:e.hass.localize("ui.panel.config.cloud.forgot_password.check_your_email")})}),(function(n){return e.setProperties({_requestInProgress:!1,_error:n&&n.body&&n.body.message?n.body.message:"Unknown error"})})))}}])&&u(t.prototype,o),i&&u(t,i),s}(Object(a.a)(Object(i.a)(o.a)));customElements.define("cloud-forgot-password",h)}}]);
//# sourceMappingURL=chunk.74e8d7e3cc7f16285b48.js.map