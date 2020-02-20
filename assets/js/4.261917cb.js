(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{423:function(e,t,r){},467:function(e,t,r){"use strict";var o=r(423);r.n(o).a},471:function(e,t,r){"use strict";r.r(t);r(92),r(93);var o={arrayOfObjects:{type:"object",properties:{array:{type:"array",title:"Users",items:{type:"object",properties:{name:{type:"string",title:"Username"}}}}}},basic:{type:"object",properties:{a:{type:"string",title:"Username"},b:{type:"boolean",title:"Use Avatar"},mySelect:{type:"string",title:"Account Type",enum:["User","Editor","Admin"]}}},conditions:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"}},if:{properties:{a:{const:"Vue"}}},then:{properties:{b:{minimum:1},c:{type:"boolean",title:"Are you sure?"}}}},conditionsAllOf:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"},c:{type:"boolean",title:"Are you sure?"}},if:{allOf:[{properties:{a:{const:"Vue"}}},{properties:{c:{const:!0}}}]},then:{properties:{x:{type:"string",title:"Field"}}}},conditionsAllOfSeveral:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"},c:{type:"boolean",title:"Are you sure?"}},allOf:[{if:{properties:{a:{const:"Vue"}}},then:{properties:{x:{type:"string",title:"Field"}}}},{if:{properties:{a:{const:"React"}}},then:{properties:{y:{type:"boolean",title:"Another"}}}}]},conditionsOneOf:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"}},if:{oneOf:[{properties:{a:{const:"Vue"}}},{properties:{a:{const:"React"}}}]},then:{properties:{b:{minimum:1},c:{type:"boolean",title:"Are you sure?"}}}},customComponents:{type:"object",properties:{a:{title:"Name",type:"string",description:"Very important field"},confirm:{type:"boolean"},c:{title:"Planet",type:"string",enum:["Earth","Mars","Jupiter"],default:"Mars"},date:{type:"string"}}},defaults:{type:"object",properties:{a:{title:"User Provider",type:"string",default:"Fabric №1"},b:{type:"boolean",title:"Yes?"}}},home:{type:"object",properties:{a:{type:"string",title:"Name",minLength:1},b:{type:"number",title:"Age",maximum:99},c:{type:"boolean",title:"Agree"}}},nested:{type:"object",properties:{a:{type:"string",title:"Username"},b:{type:"object",title:"",properties:{c:{type:"boolean",title:"Is Admin"}}}}},order:{type:"object",properties:{a:{type:"string",title:"Name"},b:{type:"boolean",title:"Superuser"},c:{type:"string",title:"Surname"}}},radio:{type:"object",properties:{a:{type:"string",title:"User Type",enum:["User","Editor","Admin"]}}},selectTitles:{home:{type:"object",properties:{a:{type:"string",title:"Name",minLength:1},b:{type:"number",title:"Age",maximum:99},c:{type:"boolean",title:"Agree"}}},basic:{type:"object",properties:{a:{type:"string",title:"Username"},b:{type:"boolean",title:"Use Avatar"},mySelect:{type:"string",title:"Account Type",enum:["User","Editor","Admin"],default:"User"}}},nested:{type:"object",properties:{a:{type:"string",title:"Username"},b:{type:"object",title:"",properties:{c:{type:"boolean",title:"Is Admin"}}}}},arrayOfObjects:{type:"object",properties:{array:{type:"array",title:"Users",items:{type:"object",properties:{name:{type:"string",title:"Username"}}}}}},conditions:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"}},if:{properties:{a:{const:"Vue"}}},then:{properties:{b:{minimum:1},c:{type:"boolean",title:"Are you sure?"}}}},conditionsOneOf:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"}},if:{oneOf:[{properties:{a:{const:"Vue"}}},{properties:{a:{const:"React"}}}]},then:{properties:{b:{minimum:1},c:{type:"boolean",title:"Are you sure?"}}}},conditionsAllOf:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"},c:{type:"boolean",title:"Are you sure?"}},if:{allOf:[{properties:{a:{const:"Vue"}}},{properties:{c:{const:!0}}}]},then:{properties:{x:{type:"string",title:"Field"}}}},conditionsAllOfSeveral:{type:"object",properties:{a:{type:"string",title:"Your favourite front-end framework?"},b:{type:"number",title:"Amount of likes"},c:{type:"boolean",title:"Are you sure?"}},allOf:[{if:{properties:{a:{const:"Vue"}}},then:{properties:{x:{type:"string",title:"Field"}}}},{if:{properties:{a:{const:"React"}}},then:{properties:{y:{type:"boolean",title:"Another"}}}}]},defaults:{type:"object",properties:{a:{title:"User Provider",type:"string",default:"Fabric №1"},b:{type:"boolean",title:"Yes?"}}},radio:{type:"object",properties:{a:{type:"string",title:"User Type",enum:["User","Editor","Admin"]}}},order:{type:"object",properties:{a:{type:"string",title:"Name"},b:{type:"boolean",title:"Superuser"},c:{type:"string",title:"Surname"}}},selectTitles:{type:"object",properties:{a:{type:"string",enum:["option 1","option 2","option 3"]}}},customComponents:{type:"object",properties:{a:{title:"Name",type:"string",description:"Very important field"},confirm:{type:"boolean"},c:{title:"Planet",type:"string",enum:["Earth","Mars","Jupiter"],default:"Mars"},date:{type:"string"}}}}},i={order:{properties:{c:{order:3},b:{order:2},a:{order:1}}},radio:{properties:{a:{uiType:"radio"}}},selectTitles:{properties:{a:{titles:["custom title","second","third one"]}}},customComponents:{properties:{date:{uiType:"datepicker"}}}},n={props:{schemaName:{type:String,required:!0},useUiSchema:{type:Boolean,default:!1},useDefaults:{type:Boolean,default:!1},useCustomComponents:{type:Boolean,default:!1},useCustomWrapper:{type:Boolean,default:!1},showSource:{type:Boolean,default:!0}},data:function(){return{value:{},activeTab:"JSON Schema"}},computed:{schema:function(){return o[this.schemaName]},uiSchema:function(){return i[this.schemaName]},tabs:function(){var e=["JSON Schema","Data Model"];return this.useUiSchema&&e.push("UI Schema"),e},codeContent:function(){switch(this.activeTab){case"JSON Schema":return JSON.stringify(this.schema,null,2);case"Data Model":return JSON.stringify(this.value,null,2);case"UI Schema":return JSON.stringify(this.uiSchema,null,2)}},customComponents:function(){return this.useCustomComponents?[{componentName:"VSelect",contains:"enum",props:function(e,t){return{label:t.title||e,items:t.enum,outlined:!0}},eventName:"change"},{componentName:"VSwitch",matcher:{type:"boolean"},eventName:"change",props:function(e,t){return{label:t.title||e}}},{componentName:"VTextField",matcher:{type:"string"},props:function(e,t){return{label:t.title||e,outlined:!0,clearable:!0,hint:t.description,"persistent-hint":!0}}},{componentName:"VDatePicker",uiSchemaMatcher:{uiType:"datepicker"},eventName:"change",props:function(e,t){return{"full-width":!0}}}]:[]},customWrapper:function(){return{componentName:"CustomWrapper",props:function(e,t,r){return{title:t.title||e}}}},wrapper:function(){return this.useCustomWrapper?this.customWrapper:this.useCustomComponents?{componentName:"InputWrapper"}:void 0},wrapperComponentName:function(){return this.useCustomComponents?"v-app":"div"}},methods:{handleDefaultValue:function(e){this.value=e}}},p=(r(467),r(3)),s=Object(p.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.wrapperComponentName,{tag:"component",staticClass:"demo"},[e.showSource?r("div",{staticClass:"tabs"},e._l(e.tabs,(function(t,o){return r("div",{key:o,class:{active:e.activeTab===t},on:{click:function(r){e.activeTab=t}}},[e._v("\n      "+e._s(t)+"\n    ")])})),0):e._e(),e._v(" "),r("div",{staticClass:"content"},[e.showSource?r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.codeContent,expression:"codeContent"}]},[r("code",{staticClass:"json"})]):e._e(),e._v(" "),r("JsonSchema",{staticClass:"json-schema-demo",attrs:{schema:e.schema,"ui-schema":e.uiSchema,components:e.customComponents,wrapper:e.wrapper,"use-default-styles":!e.useCustomComponents},on:{"init-default":e.handleDefaultValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])}),[],!1,null,"1e5c4ca8",null);t.default=s.exports}}]);