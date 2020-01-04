import e from"vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function t(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */var o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function r(e,t,o){(o?Reflect.getOwnMetadataKeys(t,o):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var n=o?Reflect.getOwnMetadata(r,t,o):Reflect.getOwnMetadata(r,t);o?Reflect.defineMetadata(r,n,e,o):Reflect.defineMetadata(r,n,e)}))}var n={__proto__:[]}instanceof Array;function i(e){return function(t,o,r){var n="function"==typeof t?t:t.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof r&&(r=void 0),n.__decorators__.push((function(t){return e(t,o,r)}))}}var a=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function p(t,i){void 0===i&&(i={}),i.name=i.name||t._componentTag||t.name;var p=t.prototype;Object.getOwnPropertyNames(p).forEach((function(e){if("constructor"!==e)if(a.indexOf(e)>-1)i[e]=p[e];else{var t=Object.getOwnPropertyDescriptor(p,e);void 0!==t.value?"function"==typeof t.value?(i.methods||(i.methods={}))[e]=t.value:(i.mixins||(i.mixins=[])).push({data:function(){var o;return(o={})[e]=t.value,o}}):(t.get||t.set)&&((i.computed||(i.computed={}))[e]={get:t.get,set:t.set})}})),(i.mixins||(i.mixins=[])).push({data:function(){return function(e,t){var o=t.prototype._init;t.prototype._init=function(){var t=this,o=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||o.push(r);o.forEach((function(o){"_"!==o.charAt(0)&&Object.defineProperty(t,o,{get:function(){return e[o]},set:function(t){e[o]=t},configurable:!0})}))};var r=new t;t.prototype._init=o;var n={};return Object.keys(r).forEach((function(e){void 0!==r[e]&&(n[e]=r[e])})),n}(this,t)}});var s=t.__decorators__;s&&(s.forEach((function(e){return e(i)})),delete t.__decorators__);var u,d,m=Object.getPrototypeOf(t.prototype),l=m instanceof e?m.constructor:e,v=l.extend(i);return function(e,t,o){Object.getOwnPropertyNames(t).forEach((function(r){if(!c[r]){var i=Object.getOwnPropertyDescriptor(e,r);if(!i||i.configurable){var a,p,s=Object.getOwnPropertyDescriptor(t,r);if(!n){if("cid"===r)return;var u=Object.getOwnPropertyDescriptor(o,r);if(a=s.value,p=typeof a,null!=a&&("object"===p||"function"===p)&&u&&u.value===s.value)return}Object.defineProperty(e,r,s)}}}))}(v,t,l),o&&(r(u=v,d=t),Object.getOwnPropertyNames(d.prototype).forEach((function(e){r(u.prototype,d.prototype,e)})),Object.getOwnPropertyNames(d).forEach((function(e){r(u,d,e)}))),v}var c={prototype:!0,arguments:!0,callee:!0,caller:!0};function s(e){return"function"==typeof e?p(e):function(t){return p(t,e)}}function u(e){return i((function(t,o){void 0===t.inject&&(t.inject={}),Array.isArray(t.inject)||(t.inject[o]=e||o)}))}function d(e){return i((function(t,o){var r=t.provide;if("function"!=typeof r||!r.managed){var n=t.provide;(r=t.provide=function(){var e=Object.create(("function"==typeof n?n.call(this):n)||null);for(var t in r.managed)e[r.managed[t]]=this[t];return e}).managed={}}r.managed[o]=e||o}))}s.registerHooks=function(e){a.push.apply(a,e)};var m="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function l(e){return void 0===e&&(e={}),function(t,o){!function(e,t,o){m&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,o)))}(e,t,o),i((function(t,o){(t.props||(t.props={}))[o]=e}))(t,o)}}var v=function(e){var t=e.default;return"object"===e.type&&(t={},Object.entries(e.properties||{}).forEach((function(e){var o=e[0],r=e[1];(r.default||"object"===r.type)&&(t[o]=v(r))}))),t},f={minLength:function(e){return"Minimal length: "+e},maxLength:function(e){return"Maximum length: "+e},minValue:function(e){return"Minimal value: "+e},maxValue:function(e){return"Maximum value: "+e},required:"Field is required",default:"Invalid Value"},h=[{matcher:{type:"array"},componentName:"JsonSchemaArray",eventName:"input"},{uiSchemaMatcher:{uiType:"radio"},componentName:"Radio",eventName:"input",props:function(e,t){return{options:t.enum}}},{matcher:{type:"object"},componentName:"JsonSchemaForm",eventName:"input"},{contains:"enum",componentName:"Select",eventName:"input",props:function(e,t){return{options:t.enum}}},{matcher:{type:"number"},componentName:"TextInput",props:function(){return{type:"number"}},eventName:"input"},{matcher:{type:"string"},componentName:"TextInput",eventName:"input"},{matcher:{type:"boolean"},componentName:"Checkbox",eventName:"input"}],y={componentName:"InputWrapper",props:function(e,t,o){return{title:t.title||""===t.title?t.title:e,disabled:o&&o.disabled,vertical:"object"===t.type||"array"===t.type}}},_=function(e,t){return Object.entries(t).every((function(t){var o=t[0];return t[1]===e[o]}))};var g={bind:function(e,t){t.value.isNumber&&function(e,t){e.addEventListener("keydown",(function(e){var o=[46,8,9,27,13];t.modifiers.decimal&&o.push(110,190),-1!==o.indexOf(e.keyCode)||65===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||67===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||86===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||88===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||e.keyCode>=35&&e.keyCode<=39||!0===t.value.negativeNumber&&0===e.target.selectionStart&&189===e.keyCode||(e.target.value.includes(".")||!0!==t.value.isFloat||190!==e.keyCode)&&(t.modifiers.number&&(!e.shiftKey&&e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105)||e.preventDefault())}))}(e,t)}},b=function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={isNumber:{configurable:!0},isFloat:{configurable:!0},isNegative:{configurable:!0}};return o.isNumber.get=function(){return"number"===this.type||"float"===this.type},o.isFloat.get=function(){return"float"===this.type},o.isNegative.get=function(){return!0},t.prototype.handleInput=function(e){var t=e.target.value;this.$emit("input",this.isNumber&&t?parseInt(t):t)},Object.defineProperties(t.prototype,o),t}(e);t([l({default:""})],b.prototype,"value",void 0),t([l({default:"string"})],b.prototype,"type",void 0);var j=b=t([s({name:"TextInput",directives:{restrict:g}})],b);function O(e,t,o,r,n,i,a,p,c,s){"boolean"!=typeof a&&(c=p,p=a,a=!1);var u,d="function"==typeof o?o.options:o;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),r&&(d._scopeId=r),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):t&&(u=a?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,p(e))}),u)if(d.functional){var m=d.render;d.render=function(e,t){return u.call(t),m(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,u):[u]}return o}var x,C="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function w(e){return function(e,t){return function(e,t){var o=C?t.media||"default":e,r=N[o]||(N[o]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===x&&(x=document.head||document.getElementsByTagName("head")[0]),x.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(n),p=r.element.childNodes;p[i]&&r.element.removeChild(p[i]),p.length?r.element.insertBefore(a,p[i]):r.element.appendChild(a)}}}(e,t)}}var N={};var S=O({render:function(){var e=this.$createElement;return(this._self._c||e)("input",{directives:[{name:"restrict",rawName:"v-restrict.number",value:{isNumber:this.isNumber,isNegative:this.isNegative,isFloat:this.isFloat},expression:"{isNumber, isNegative, isFloat}",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:this.value},on:{input:this.handleInput}})},staticRenderFns:[]},void 0,j,void 0,!1,void 0,!1,void 0,void 0,void 0),P=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.handleInput=function(e){var t=e.target.checked;this.$emit("input",t)},t}(e);t([l({default:""})],P.prototype,"value",void 0);var $=O({render:function(){var e=this.$createElement;return(this._self._c||e)("input",{attrs:{type:"checkbox"},domProps:{checked:this.value},on:{input:this.handleInput}})},staticRenderFns:[]},void 0,P=t([s({name:"Checkbox"})],P),void 0,!1,void 0,!1,void 0,void 0,void 0),R=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.handleInput=function(e){var t=e.target.value;this.$emit("input",t)},t}(e);t([l({default:""})],R.prototype,"value",void 0),t([l({default:function(){return[]}})],R.prototype,"options",void 0);var k=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("select",{on:{input:e.handleInput}},e._l(e.options,(function(t,r){return o("option",{key:r,domProps:{selected:t===e.value?"true":"false",value:t}},[e._v(e._s(t))])})),0)},staticRenderFns:[]},void 0,R=t([s({name:"Select"})],R),void 0,!1,void 0,!1,void 0,void 0,void 0),I=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.handleInput=function(e){var t=e.target.value;this.$emit("input",t)},t}(e);t([l({default:""})],I.prototype,"value",void 0),t([l({default:function(){return[]}})],I.prototype,"options",void 0);var E=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.options,(function(t,r){return o("div",{key:r},[o("label",{attrs:{for:t+"radio"}},[o("input",{attrs:{type:"radio",name:"radio1",id:t+"radio"},domProps:{checked:e.value+""===t,value:t},on:{input:e.handleInput}}),e._v("\n      "+e._s(t)+"\n    ")])])})),0)},staticRenderFns:[]},void 0,I=t([s({name:"Radio"})],I),void 0,!1,void 0,!1,void 0,void 0,void 0),F=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(e);t([l({default:""})],F.prototype,"title",void 0),t([l({default:""})],F.prototype,"error",void 0),t([l({default:!1})],F.prototype,"vertical",void 0),t([l({default:!1})],F.prototype,"disabled",void 0);var M=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pure-control-group",class:{"pure-control-group--disabled":e.disabled}},[e.title?o("label",[e._v(e._s(e.title))]):e._e(),e._v(" "),e._t("default"),e._v(" "),e.error?o("span",{staticClass:"pure-form-message"},[e._v(e._s(e.error))]):e._e()],2)},staticRenderFns:[]},(function(e){e&&e("data-v-010a0d50_0",{source:".input-wrapper{margin-bottom:22px;position:relative;display:flex;align-items:baseline}.input-wrapper--vertical{flex-direction:column;margin-bottom:0;align-items:flex-start}.input-wrapper-title{font-size:14px;width:100px;text-align:right;flex-shrink:0;margin-right:10px}.input-wrapper-title--empty{display:none}.input-wrapper--vertical>.input-wrapper-title{font-weight:700;margin-bottom:10px}.input-wrapper-error{position:absolute;bottom:-19px;left:110px;font-size:12px;color:#db3b21;line-height:15px}.pure-form-message{position:relative;left:176px}.pure-control-group--disabled{opacity:.5;pointer-events:none}",map:void 0,media:void 0})}),F=t([s({name:"InputWrapper"})],F),void 0,!1,void 0,!1,w,void 0,void 0),A=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(e);t([l({required:!0})],A.prototype,"index",void 0),t([l({required:!0})],A.prototype,"length",void 0);var T=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"json-schema-array-item"},[o("div",{staticClass:"json-schema-array-item-controls"},[o("label",[e._v(e._s(e.index+1)+")")]),e._v(" "),e.index?o("button",{on:{click:function(t){return e.$emit("swap-up")}}},[e._v("▲")]):e._e(),e._v(" "),e.index<e.length-1?o("button",{on:{click:function(t){return e.$emit("swap-down")}}},[e._v("▼")]):e._e(),e._v(" "),o("button",{on:{click:function(t){return e.$emit("remove")}}},[e._v("✕")])]),e._v(" "),e._t("default")],2)},staticRenderFns:[]},(function(e){e&&e("data-v-464b89e6_0",{source:".json-schema-array-item{margin-bottom:25px}.json-schema-array-item-controls{margin-bottom:10px}.json-schema-array-item-controls button{margin-right:5px}",map:void 0,media:void 0})}),A=t([s({name:"JsonSchemaArrayFormWrap"})],A),void 0,!1,void 0,!1,w,void 0,void 0),J=function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={formWrapComponent:{configurable:!0}};return o.formWrapComponent.get=function(){return"JsonSchemaArrayFormWrap"},t.prototype.handleInput=function(e,t){this.$emit("input",{path:[""+e].concat(t.path),value:t.value})},t.prototype.addNewItem=function(){var e=v(this.schema.items);this.$emit("input",{path:[],value:this.value.concat([e])})},t.prototype.removeItem=function(e){var t=[].concat(this.value);t.splice(e,1),this.$emit("input",{path:[],value:t})},t.prototype.swapItems=function(e,t){var o=[].concat(this.value);o[e]=o.splice(t,1,o[e])[0],this.$emit("input",{path:[],value:o})},Object.defineProperties(t.prototype,o),t}(e);t([l({required:!0})],J.prototype,"schema",void 0),t([l()],J.prototype,"uiSchema",void 0),t([l({default:function(){return{}}})],J.prototype,"value",void 0),t([l()],J.prototype,"validations",void 0);var K=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"json-schema-array"},[e._l(e.value,(function(t,r){return o(e.formWrapComponent,{key:r,tag:"component",attrs:{index:r,length:e.value.length},on:{"swap-up":function(t){return e.swapItems(r,r-1)},"swap-down":function(t){return e.swapItems(r,r+1)},remove:function(t){return e.removeItem(r)}}},[o("JsonSchemaForm",{attrs:{schema:e.schema.items,value:t,validations:e.validations&&e.validations.$each&&e.validations.$each.$iter[r]||{}},on:{input:function(t){return e.handleInput(r,t)}}})],1)})),e._v(" "),o("label",{staticClass:"add-new-arr-item",on:{click:e.addNewItem}},[o("button",[e._v("+")])])],2)},staticRenderFns:[]},(function(e){e&&e("data-v-7a9eda7a_0",{source:".json-schema-array{width:100%}",map:void 0,media:void 0})}),J=t([s({name:"JsonSchemaArray",components:{JsonSchemaForm:function(){return Promise.resolve().then((function(){return W}))},JsonSchemaArrayFormWrap:T}})],J),void 0,!1,void 0,!1,w,void 0,void 0),L=function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={wrapperComponentParams:{configurable:!0},propComponents:{configurable:!0},sortedSchemaProperties:{configurable:!0},validationErrors:{configurable:!0}};return o.wrapperComponentParams.get=function(){return this.wrapperComponent||y},o.propComponents.get=function(){var e=this;return Object.entries(this.schema.properties).reduce((function(t,o){var r,n=o[0],i=o[1];return Object.assign({},t,((r={})[n]=function(e,t,o){void 0===t&&(t=[]);var r=t.concat(h).find((function(t){return t.matcher?_(e,t.matcher):t.uiSchemaMatcher?_(o||{},t.uiSchemaMatcher):t.contains?e.hasOwnProperty(t.contains):void 0}))||{},n=r.componentName;void 0===n&&(n="TextInput");var i=r.eventName;void 0===i&&(i="input");var a=r.props;return void 0===a&&(a=void 0),{componentName:n,eventName:i,props:a}}(i,e.componentsConfig,e.getUiSchemaByPropName(n)),r))}),{})},o.sortedSchemaProperties.get=function(){var e=this;return Object.entries(this.schema.properties).sort((function(t,o){return(e.uiSchema&&e.uiSchema.properties&&e.uiSchema.properties[t[0]]&&e.uiSchema.properties[t[0]].order||0)>(e.uiSchema&&e.uiSchema.properties&&e.uiSchema.properties[o[0]]&&e.uiSchema.properties[o[0]].order||0)?-1:1}))},o.validationErrors.get=function(){var e=this,t={};return this.validations?(Object.keys(this.schema.properties).forEach((function(o){var r,n=e.validations[o];n&&n.$invalid&&(t[o]=!1===(r=n).required?f.required:!1===r.minLength?f.minLength(r.$params.minLength.min):!1===r.maxLength?f.maxLength(r.$params.maxLength.max):!1===r.minValue?f.minValue(r.$params.minValue.min):!1===r.maxValue?f.maxValue(r.$params.maxValue.max):!1===r.url?f.url:f.default)})),t):t},t.prototype.getUiSchemaByPropName=function(e){return this.uiSchema&&this.uiSchema.properties&&this.uiSchema.properties[e]||void 0},t.prototype.getProps=function(e,t){var o=this.propComponents[e],r=o.props?o.props(e,t,{}):{},n=this.getUiSchemaByPropName(e),i="object"===t.type||"array"===t.type,a=Object.assign({},{value:this.value[e]},r);return i&&(a=Object.assign({},a,{schema:this.schema.properties[e],validations:this.validations&&this.validations[e]||{},uiSchema:n})),a},t.prototype.getWrapperProps=function(e,t){var o=this.getUiSchemaByPropName(e),r=this.wrapperComponentParams&&this.wrapperComponentParams.props&&this.wrapperComponentParams.props(e,t,o)||{},n="object"===t.type||"array"===t.type;return Object.assign({},{error:n?"":this.validationErrors[e]},r)},t.prototype.handleInput=function(e,t){var o="object"===this.schema.properties[e].type||"array"===this.schema.properties[e].type,r=o?[e].concat(t.path):[e],n=o?t.value:t;this.$emit("input",{path:r,value:n})},Object.defineProperties(t.prototype,o),t}(e);t([l({required:!0})],L.prototype,"schema",void 0),t([l()],L.prototype,"uiSchema",void 0),t([l({default:function(){return{}}})],L.prototype,"value",void 0),t([l()],L.prototype,"validations",void 0),t([u()],L.prototype,"componentsConfig",void 0),t([u()],L.prototype,"wrapperComponent",void 0);var V=O({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"json-schema-form pure-form pure-form-aligned"},e._l(e.sortedSchemaProperties,(function(t){var r=t[0],n=t[1];return o(e.wrapperComponentParams.componentName,e._b({key:r,tag:"component"},"component",e.getWrapperProps(r,n),!1),[o(e.propComponents[r].componentName,e._b({tag:"component",on:e._d({},[e.propComponents[r].eventName,function(t){return e.handleInput(r,t)}])},"component",e.getProps(r,n),!1))],1)})),1)},staticRenderFns:[]},(function(e){e&&e("data-v-077bccf7_0",{source:".json-schema-form{width:100%}",map:void 0,media:void 0})}),L=t([s({name:"JsonSchemaForm",components:{TextInput:S,Checkbox:$,Select:k,InputWrapper:M,JsonSchemaArray:K,Radio:E}})],L),void 0,!1,void 0,!1,w,void 0,void 0),W=Object.freeze({__proto__:null,default:V});export{s as C,V as J,l as P,t as _,d as a,O as b,w as c,v as g};
//# sourceMappingURL=JsonSchemaForm-fbe10040.js.map
