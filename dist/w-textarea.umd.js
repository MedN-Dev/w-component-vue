/*!
 * w-textarea v1.1.6
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-textarea"]=b())})(this,function(){'use strict';function a(a,c){var f=d?c.media||"default":a,g=e[f]||(e[f]={ids:new Set,styles:[]});if(!g.ids.has(a)){g.ids.add(a);var h=c.source;if(c.map&&(h+="\n/*# sourceURL="+c.map.sources[0]+" */",h+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c.map))))+" */"),g.element||(g.element=document.createElement("style"),g.element.type="text/css",c.media&&g.element.setAttribute("media",c.media),void 0===b&&(b=document.head||document.getElementsByTagName("head")[0]),b.appendChild(g.element)),"styleSheet"in g.element)g.styles.push(h),g.element.styleSheet.cssText=g.styles.filter(Boolean).join("\n");else{var i=g.ids.size-1,j=document.createTextNode(h),k=g.element.childNodes;k[i]&&g.element.removeChild(k[i]),k.length?g.element.insertBefore(j,k[i]):g.element.appendChild(j)}}}var b,c={props:{value:{type:String,default:""},placeholder:{type:String,default:""},borderColorHover:{type:String,default:"purple lighten-3"},editable:{type:Boolean,default:!0}},data:function(){return{value_trans:""}},mounted:function(){},computed:{ch_param:function(){var a=this;return a.value_trans=a.value,""}},methods:{ch_content:function(a){var b=this;setTimeout(function(){b.$emit("input",a)},1)}}},d="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),e={};var f=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{attrs:{ch_param:a.ch_param}},[c("v-textarea",{staticStyle:{margin:"0px",padding:"0px"},attrs:{"auto-grow":"","hide-details":"",rows:"1",color:a.borderColorHover,placeholder:a.placeholder,disabled:!a.editable},on:{change:a.ch_content},model:{value:a.value_trans,callback:function(b){a.value_trans=b},expression:"value_trans"}})],1)};f._withStripped=!0;var g=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:f,staticRenderFns:[]},function(a){a&&a("data-v-47d165fc_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WTextarea.vue"},media:void 0})},c,"data-v-47d165fc",!1,void 0,function(){return function(b,c){return a(b,c)}},void 0);return g});
//# sourceMappingURL=w-textarea.umd.js.map
