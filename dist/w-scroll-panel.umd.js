!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-scroll-panel"]=e()}(this,function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var e=function(e){var t=n(e);return null!=e&&("object"==t||"function"==t)},t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r="object"==n(t)&&t&&t.Object===Object&&t,i="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),a=o.Symbol,s=Object.prototype,u=s.hasOwnProperty,c=s.toString,l=a?a.toStringTag:void 0;var f=function(n){var e=u.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var i=c.call(n);return r&&(e?n[l]=t:delete n[l]),i},d=Object.prototype.toString;var v=function(n){return d.call(n)},p="[object Null]",h="[object Undefined]",m=a?a.toStringTag:void 0;var g=function(n){return null==n?void 0===n?h:p:m&&m in Object(n)?f(n):v(n)};var b=function(e){return null!=e&&"object"==n(e)},y="[object Symbol]";var w=function(e){return"symbol"==n(e)||b(e)&&g(e)==y},S=NaN,E=/^\s+|\s+$/g,B=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,P=/^0o[0-7]+$/i,T=parseInt;var _=function(n){if("number"==typeof n)return n;if(w(n))return S;if(e(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=e(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(E,"");var r=x.test(n);return r||P.test(n)?T(n.slice(2),r?2:8):B.test(n)?S:+n},j=1/0,H=17976931348623157e292;var L=function(n){return n?(n=_(n))===j||n===-j?(n<0?-1:1)*H:n==n?n:0:0===n?n:0};var O=function(n){var e=L(n),t=e%1;return e==e?t?e-t:e:0};var N=function(n){return"number"==typeof n&&n==O(n)};function C(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function k(n){var e=!1;return C(n)?e=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(e=!0),e}function R(n){return k(n)?L(n):0}var D=function(n,e){for(var t=-1,r=null==n?0:n.length,i=Array(r);++t<r;)i[t]=e(n[t],t,n);return i},M=Array.isArray,$=1/0,Y=a?a.prototype:void 0,z=Y?Y.toString:void 0;var U=function n(e){if("string"==typeof e)return e;if(M(e))return D(e,n)+"";if(w(e))return z?z.call(e):"";var t=e+"";return"0"==t&&1/e==-$?"-0":t};var A=function(n){return null==n?"":U(n)},F=o.isFinite,W=Math.min;var I=function(n){var e=Math[n];return function(n,t){if(n=_(n),(t=null==t?0:W(O(t),292))&&F(n)){var r=(A(n)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+t));return+((r=(A(i)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function V(n){return!!function(n){return!!k(n)&&(n=R(n),N(n))}(n)&&function(n){if(!k(n))return 0;n=R(n);var e=I(n);return"0"===String(e)?0:e}(n)>0}var X={props:{viewHeight:{type:Number,default:400},contentHeight:{type:Number,default:1e4},scrollDelta:{type:Number,default:100},barSizeMin:{type:Number,default:50},barColor:{type:String,default:"#bbb"},barBackgroundColor:{type:String,default:"rgba(0,0,0,0)"},ratio:{type:Number,default:0}},data:function(){return{mmkey:null,ratioTrans:0,barPressY:null,barPressing:!1,barOpacity:.5}},mounted:function(){var n=this;n.mmkey=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],i=t.length;if(V(e))for(n=0;n<e;n++)r[n]=t[0|Math.random()*i];else{if("rfc4122"!==e)return"";var o;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",n=0;n<36;n++)r[n]||(o=0|16*Math.random(),r[n]=t[19===n?3&o|8:o])}return r.join("")}();var e=n.$refs.divPanel;e.addEventListener("wheel",function(e){var t=e.deltaY/Math.abs(e.deltaY);n.scrollPanel(n.mmkey,t),window.event?e.cancelBubble=!0:e.stopPropagation(),e.preventDefault()}),e.addEventListener("touchstart",function(e){n.pressBar(-e.touches[0].clientY/5),e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){n.dragBar(n.mmkey,-e.touches[0].clientY/5),e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("touchend",function(e){n.freedBar(n.mmkey),e.stopPropagation(),e.preventDefault()},!1),window.addEventListener("mousedown",function(e){n.pressWin(n.mmkey,e.clientY)}),window.addEventListener("mousemove",function(e){n.dragBar(n.mmkey,e.clientY)}),window.addEventListener("mouseup",function(e){n.freedBar(n.mmkey)})},beforeDestroy:function(){var n=this,e=n.$refs.divPanel;e.removeEventListener("wheel",n.mouseWheel),e.removeEventListener("touchstart",n.pressBar),e.removeEventListener("touchmove",n.dragBar),e.removeEventListener("touchend",n.freedBar),window.removeEventListener("mousedown",n.pressWin),window.removeEventListener("mousemove",n.dragBar),window.removeEventListener("mouseup",n.freedBar)},computed:{changeRatio:function(){var n=this.ratio;return n=Math.max(n,0),n=Math.min(n,1),this.ratioTrans=n,""},barSize:function(){var n=this.viewHeight/this.contentHeight,e=Math.max(n*this.viewHeight,this.barSizeMin);return e},barLoc:function(){return this.ratioTrans*this.viewHeightEff},contentHeightEff:function(){var n=this.contentHeight-this.viewHeight;return n=Math.max(n,0)},viewHeightEff:function(){var n=this.viewHeight-this.barSize-4;return n=Math.max(n,0)},viewTop:function(){return this.ratioTrans*this.contentHeightEff},viewBottom:function(){return this.viewTop+this.viewHeight}},methods:{pressWin:function(n,e){this.mmkey===n&&(this.barPressY=e)},pressBar:function(n){this.barPressing=!0,n&&(this.barPressY=n)},dragBar:function(n,e){var t=this;if(t.mmkey===n&&t.barPressing){var r=(e-t.barPressY)/t.viewHeightEff;t.scrollByDeltaRatio(r),t.barPressY=e}},freedBar:function(n){this.mmkey===n&&this.barPressing&&(this.barPressing=!1,this.triggerEvent("freedBar"))},triggerEvent:function(n){var e=this;setTimeout(function(){var t={from:n,r:e.ratioTrans,t:e.viewTop,b:e.viewBottom,ch:e.contentHeight};e.$emit("update:ratio",e.ratioTrans),e.$emit("change",t),n&&e.$emit(n,t)},1)},scrollByDeltaRatio:function(n){var e=this,t=e.ratioTrans;t>=0&&t<=1&&(t+=n),t=Math.max(t,0),t=Math.min(t,1),0===e.contentHeightEff&&(t=0),e.ratioTrans!==t&&(e.ratioTrans=t,e.triggerEvent())},scrollByDelta:function(n){var e=n/this.contentHeight;this.scrollByDeltaRatio(e)},scrollPanel:function(n,e){if(this.mmkey===n){var t=e*this.scrollDelta;this.scrollByDelta(t)}}}};var J,q=function(n,e,t,r,i,o,a,s,u,c){"boolean"!=typeof a&&(u=s,s=a,a=!1);var l,f="function"==typeof t?t.options:t;if(n&&n.render&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,u(n)),n&&n._registeredComponents&&n._registeredComponents.add(o)},f._ssrRegister=l):e&&(l=a?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(n){e.call(this,s(n))}),l)if(f.functional){var d=f.render;f.render=function(n,e){return l.call(e),d(n,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return t},G="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var K={};var Q=function(n){return function(n,e){return function(n,e){var t=G?e.media||"default":n,r=K[t]||(K[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===J&&(J=document.head||document.getElementsByTagName("head")[0]),J.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(i),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,a=document.createTextNode(i),s=r.element.childNodes;s[o]&&r.element.removeChild(s[o]),s.length?r.element.insertBefore(a,s[o]):r.element.appendChild(a)}}}(n,e)}};const Z=X;var nn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:"position:relative; overflow:hidden; height:"+n.viewHeight+";",attrs:{changeRatio:n.changeRatio},on:{mouseenter:function(e){n.barOpacity=1},mouseleave:function(e){n.barOpacity=.5}}},[t("div",{style:"height:"+(n.viewHeight+1)+"px;"}),n._v(" "),n.contentHeightEff>0?t("div",{staticStyle:{position:"absolute",top:"0",right:"0px",height:"100%","z-index":"1"}},[t("div",{style:"position:relative; width:10px; height:100%; background-color:"+n.barBackgroundColor+"; padding:2px;"},[t("div",{style:"width:100%; height:"+n.barSize+"px; background-color:"+n.barColor+"; border-radius:15px; user-select:none; transform:translateY("+n.barLoc+"px); cursor:pointer; opacity:"+n.barOpacity+"; transition:opacity 0.5s;",on:{mousedown:n.pressBar,dragstart:function(n){return n.stopPropagation(),n.preventDefault(),!1},dragover:function(n){return n.stopPropagation(),n.preventDefault(),!1},drop:function(n){return n.stopPropagation(),n.preventDefault(),!1}}})])]):n._e(),n._v(" "),t("div",{ref:"divPanel",style:"position:absolute; top:0px; width:calc(100% + 18px); overflow-y:auto; overflow-x:hidden; height:"+n.viewHeight+"px;"},[n._t("default")],2)])};nn._withStripped=!0;return q({render:nn,staticRenderFns:[]},function(n){n&&n("data-v-6bcd11fe_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WScrollPanel.vue"},media:void 0})},Z,"data-v-6bcd11fe",!1,void 0,Q,void 0)});
//# sourceMappingURL=w-scroll-panel.umd.js.map
