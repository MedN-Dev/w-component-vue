!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-dialog"]=e()}(this,function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==n(e)&&e&&e.Object===Object&&e,o="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,r=(t||o||Function("return this")()).Symbol,i=Object.prototype,s=i.hasOwnProperty,a=i.toString,l=r?r.toStringTag:void 0;var c=function(n){var e=s.call(n,l),t=n[l];try{n[l]=void 0;var o=!0}catch(n){}var r=a.call(n);return o&&(e?n[l]=t:delete n[l]),r},u=Object.prototype.toString;var d=function(n){return u.call(n)},f="[object Null]",p="[object Undefined]",v=r?r.toStringTag:void 0;var m=function(n){return null==n?void 0===n?p:f:v&&v in Object(n)?c(n):d(n)};var h=function(e){return null!=e&&"object"==n(e)},y="[object Boolean]";var g=function(n){return!0===n||!1===n||h(n)&&m(n)==y};var S={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var _,b=function(n,e,t,o,r,i,s,a,l,c){"boolean"!=typeof s&&(l=a,a=s,s=!1);var u,d="function"==typeof t?t.options:t;if(n&&n.render&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),o&&(d._scopeId=o),i?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,l(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},d._ssrRegister=u):e&&(u=s?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(n){e.call(this,a(n))}),u)if(d.functional){var f=d.render;d.render=function(n,e){return u.call(e),f(n,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return t},w="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var C={};var x=function(n){return function(n,e){return function(n,e){var t=w?e.media||"default":n,o=C[t]||(C[t]={ids:new Set,styles:[]});if(!o.ids.has(n)){o.ids.add(n);var r=e.source;if(e.map&&(r+="\n/*# sourceURL="+e.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===_&&(_=document.head||document.getElementsByTagName("head")[0]),_.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,s=document.createTextNode(r),a=o.element.childNodes;a[i]&&o.element.removeChild(a[i]),a.length?o.element.insertBefore(s,a[i]):o.element.appendChild(s)}}}(n,e)}};const B=S;var k=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};k._withStripped=!0;const z={components:{WIcon:b({render:k,staticRenderFns:[]},function(n){n&&n("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},B,"data-v-c4e40804",!1,void 0,x,void 0)},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},buttonColor:{type:String,default:"grey darken-1"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var n=this;setTimeout(function(){n.$emit("click")},1)}}};var L=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var o=e.on;return[t("v-btn",n._g({attrs:{icon:"",large:!n.small,elevation:n.shadow?4:0,color:n.buttonColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},o),[t("w-icon",{attrs:{icon:n.icon,color:n.iconColor}})],1)]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};L._withStripped=!0;const T={components:{WButtonCircle:b({render:L,staticRenderFns:[]},function(n){n&&n("data-v-5b9fc89a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})},z,"data-v-5b9fc89a",!1,void 0,x,void 0)},props:{show:{type:Boolean,default:!1},icon:{type:String,default:""},title:{type:String,default:""},headerColor:{type:String,default:"light-blue darken-3"},headerBtns:{type:Array,default:function(){return[]}},hasSaveBtn:{type:Boolean,default:!0},saveBtnTooltip:{type:String,default:"儲存"},hasCloseBtn:{type:Boolean,default:!0},closeBtnTooltip:{type:String,default:"關閉"},widthMax:{type:Number,default:1e3}},data:function(){return{mdiCheckCircle:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",mdiClose:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",mdiCheckerboard:"M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z",show_trans:null,fullscreen:!1}},mounted:function(){},watch:{show:function(n){var e=this;!e.show_trans&&n&&setTimeout(function(){e.$refs.scrollZone.scrollTop=0},1)}},computed:{changeParam:function(){return this.show_trans=this.show,""}},methods:{changeSize:function(){var n=this;n.widthMax<=0?n.fullscreen=!0:n.widthMax>window.innerWidth?n.fullscreen=!0:n.fullscreen=!1},clickBtns:function(n){var e=this;setTimeout(function(){e.$emit("click-btns",n)},1)},clickSave:function(){var n=this;setTimeout(function(){n.$emit("click-save")},1)},clickClose:function(n){var e=this;g(n)&&(e.show_trans=n),setTimeout(function(){e.$emit("update:show",e.show_trans),e.$emit("click-close")},1)}}};var j=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-dialog",{directives:[{name:"resize",rawName:"v-resize",value:n.changeSize,expression:"changeSize"}],attrs:{changeParam:n.changeParam,scrollable:"",persistent:n.hasCloseBtn,"max-width":n.widthMax,fullscreen:n.fullscreen},on:{"click:outside":n.clickClose},model:{value:n.show_trans,callback:function(e){n.show_trans=e},expression:"show_trans"}},[t("v-card",[t("v-toolbar",{attrs:{dark:"","max-height":"64",color:n.headerColor}},[t("div",{staticStyle:{"margin-right":"10px"}},[n.icon?t("v-icon",[n._v(n._s(n.icon))]):t("v-icon",[n._v(n._s(n.mdiCheckerboard))])],1),n._v(" "),t("v-toolbar-title",[n._v(n._s(n.title))]),n._v(" "),t("v-spacer"),n._v(" "),n._t("header"),n._v(" "),n._l(n.headerBtns,function(e,o){return[t("WButtonCircle",{key:o,staticStyle:{"margin-left":"5px"},attrs:{icon:e.icon,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:e.tooltip},on:{click:function(t){return n.clickBtns(e.evName)}}})]}),n._v(" "),n.hasSaveBtn?[t("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:n.mdiCheckCircle,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:n.saveBtnTooltip},on:{click:function(e){return n.clickSave()}}})]:n._e(),n._v(" "),n.hasCloseBtn?[t("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:n.mdiClose,shadow:!1,iconColor:"white",buttonColor:"white",tooltip:n.closeBtnTooltip},on:{click:function(e){return n.clickClose(!1)}}})]:n._e()],2),n._v(" "),t("v-card-text",{ref:"scrollZone",staticStyle:{padding:"0px"}},[n._t("content")],2)],1)],1)};j._withStripped=!0;return b({render:j,staticRenderFns:[]},function(n){n&&n("data-v-778e68e4_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDialog.vue"},media:void 0})},T,"data-v-778e68e4",!1,void 0,x,void 0)});
//# sourceMappingURL=w-dialog.umd.js.map