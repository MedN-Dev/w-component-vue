/*!
 * w-popup-panel v1.2.50
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-popup-panel"]=e()}(this,(function(){"use strict";var n=Array.isArray;function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r="object"==e(t)&&t&&t.Object===Object&&t,o="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,i=r||o||Function("return this")(),a=i.Symbol,u=Object.prototype,c=u.hasOwnProperty,s=u.toString,l=a?a.toStringTag:void 0;var f=function(n){var e=c.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var o=s.call(n);return r&&(e?n[l]=t:delete n[l]),o},d=Object.prototype.toString;var v=function(n){return d.call(n)},p="[object Null]",h="[object Undefined]",y=a?a.toStringTag:void 0;var _=function(n){return null==n?void 0===n?h:p:y&&y in Object(n)?f(n):v(n)};var m=function(n){return null!=n&&"object"==e(n)},b="[object Symbol]";var g=function(n){return"symbol"==e(n)||m(n)&&_(n)==b},w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var S=function(t,r){if(n(t))return!1;var o=e(t);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=t&&!g(t))||(j.test(t)||!w.test(t)||null!=r&&t in Object(r))};var O=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)},$="[object AsyncFunction]",C="[object Function]",E="[object GeneratorFunction]",T="[object Proxy]";var M,N=function(n){if(!O(n))return!1;var e=_(n);return e==C||e==E||e==$||e==T},x=i["__core-js_shared__"],z=(M=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var k=function(n){return!!z&&z in n},F=Function.prototype.toString;var R=function(n){if(null!=n){try{return F.call(n)}catch(n){}try{return n+""}catch(n){}}return""},I=/^\[object .+?Constructor\]$/,P=Function.prototype,L=Object.prototype,A=P.toString,B=L.hasOwnProperty,U=RegExp("^"+A.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var V=function(n){return!(!O(n)||k(n))&&(N(n)?U:I).test(R(n))};var W=function(n,e){return null==n?void 0:n[e]};var D=function(n,e){var t=W(n,e);return V(t)?t:void 0},X=D(Object,"create");var Y=function(){this.__data__=X?X(null):{},this.size=0};var G=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},J="__lodash_hash_undefined__",q=Object.prototype.hasOwnProperty;var H=function(n){var e=this.__data__;if(X){var t=e[n];return t===J?void 0:t}return q.call(e,n)?e[n]:void 0},K=Object.prototype.hasOwnProperty;var Q=function(n){var e=this.__data__;return X?void 0!==e[n]:K.call(e,n)},Z="__lodash_hash_undefined__";var nn=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=X&&void 0===e?Z:e,this};function en(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}en.prototype.clear=Y,en.prototype.delete=G,en.prototype.get=H,en.prototype.has=Q,en.prototype.set=nn;var tn=en;var rn=function(){this.__data__=[],this.size=0};var on=function(n,e){return n===e||n!=n&&e!=e};var an=function(n,e){for(var t=n.length;t--;)if(on(n[t][0],e))return t;return-1},un=Array.prototype.splice;var cn=function(n){var e=this.__data__,t=an(e,n);return!(t<0)&&(t==e.length-1?e.pop():un.call(e,t,1),--this.size,!0)};var sn=function(n){var e=this.__data__,t=an(e,n);return t<0?void 0:e[t][1]};var ln=function(n){return an(this.__data__,n)>-1};var fn=function(n,e){var t=this.__data__,r=an(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function dn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}dn.prototype.clear=rn,dn.prototype.delete=cn,dn.prototype.get=sn,dn.prototype.has=ln,dn.prototype.set=fn;var vn=dn,pn=D(i,"Map");var hn=function(){this.size=0,this.__data__={hash:new tn,map:new(pn||vn),string:new tn}};var yn=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var _n=function(n,e){var t=n.__data__;return yn(e)?t["string"==typeof e?"string":"hash"]:t.map};var mn=function(n){var e=_n(this,n).delete(n);return this.size-=e?1:0,e};var bn=function(n){return _n(this,n).get(n)};var gn=function(n){return _n(this,n).has(n)};var wn=function(n,e){var t=_n(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function jn(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}jn.prototype.clear=hn,jn.prototype.delete=mn,jn.prototype.get=bn,jn.prototype.has=gn,jn.prototype.set=wn;var Sn=jn,On="Expected a function";function $n(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError(On);var t=function t(){var r=arguments,o=e?e.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var a=n.apply(this,r);return t.cache=i.set(o,a)||i,a};return t.cache=new($n.Cache||Sn),t}$n.Cache=Sn;var Cn=$n,En=500;var Tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,Nn=function(n){var e=Cn(n,(function(n){return t.size===En&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(Tn,(function(n,t,r,o){e.push(r?o.replace(Mn,"$1"):t||n)})),e}));var xn=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o},zn=1/0,kn=a?a.prototype:void 0,Fn=kn?kn.toString:void 0;var Rn=function e(t){if("string"==typeof t)return t;if(n(t))return xn(t,e)+"";if(g(t))return Fn?Fn.call(t):"";var r=t+"";return"0"==r&&1/t==-zn?"-0":r};var In=function(n){return null==n?"":Rn(n)};var Pn=function(e,t){return n(e)?e:S(e,t)?[e]:Nn(In(e))},Ln=1/0;var An=function(n){if("string"==typeof n||g(n))return n;var e=n+"";return"0"==e&&1/n==-Ln?"-0":e};var Bn=function(n,e){for(var t=0,r=(e=Pn(e,n)).length;null!=n&&t<r;)n=n[An(e[t++])];return t&&t==r?n:void 0};var Un=function(n,e,t){var r=null==n?void 0:Bn(n,e);return void 0===r?t:r};var Vn=NaN,Wn=/^\s+|\s+$/g,Dn=/^[-+]0x[0-9a-f]+$/i,Xn=/^0b[01]+$/i,Yn=/^0o[0-7]+$/i,Gn=parseInt;var Jn=function(n){if("number"==typeof n)return n;if(g(n))return Vn;if(O(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=O(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Wn,"");var t=Xn.test(n);return t||Yn.test(n)?Gn(n.slice(2),t?2:8):Dn.test(n)?Vn:+n},qn=1/0,Hn=17976931348623157e292;var Kn=function(n){return n?(n=Jn(n))===qn||n===-qn?(n<0?-1:1)*Hn:n==n?n:0:0===n?n:0};var Qn=function(n){var e=Kn(n),t=e%1;return e==e?t?e-t:e:0};var Zn=function(n){return"number"==typeof n&&n==Qn(n)};function ne(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function ee(n){var e=!1;return ne(n)?e=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(e=!0),e}function te(n){return ee(n)?Kn(n):0}var re=i.isFinite,oe=Math.min;var ie=function(n){var e=Math[n];return function(n,t){if(n=Jn(n),(t=null==t?0:oe(Qn(t),292))&&re(n)){var r=(In(n)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+t));return+((r=(In(o)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function ae(n){return!!function(n){return!!ee(n)&&(n=te(n),Zn(n))}(n)&&function(n){if(!ee(n))return 0;n=te(n);var e=ie(n);return"0"===String(e)?0:e}(n)>0}function ue(n){var e,t,r,o,i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,u=((r=new Promise((function(){e=arguments[0],t=arguments[1]}))).resolve=e,r.reject=t,r);if(o=n,"[object Function]"!==(i=Object.prototype.toString.call(o))&&"[object AsyncFunction]"!==i)return u.reject("waitfunction需輸入函數f"),u;if(!0===n())return u.resolve(),u;ae(a)||(a=180);var c=0,s=setInterval((function(){c+=1,!0===n()&&(clearInterval(s),u.resolve()),c>=a&&(clearInterval(s),u.resolve())}),1e3);return u}var ce={props:{value:{type:Boolean,default:!1},minWidth:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},distY:{type:Number,default:5},editable:{type:Boolean,default:!0}},data:function(){return{clickInner:!1,eleMousedown:null,windowMousedown:null,windowMouseup:null}},mounted:function(){var n=this;n.eleMousedown=function(e){n.clickInner=!0,function(n){window.event?n.cancelBubble=!0:n.stopPropagation(),n.preventDefault()}(e)},ue((function(){return null!==Un(n,"$refs.divContent.addEventListener",null)})).then((function(){var e=n.$refs.divContent;e&&e.addEventListener("mousedown",n.eleMousedown)})),n.windowMousedown=function(e){n.clickInner=!1},window.addEventListener("mousedown",n.windowMousedown),n.windowMouseup=function(e){!n.clickInner&&n.value&&n.changeValue(!1)},window.addEventListener("mouseup",n.windowMouseup)},beforeDestroy:function(){var n=Un(this,"$refs.divContent",null);n&&n.removeEventListener("mousedown",this.eleMousedown),window.removeEventListener("mousedown",this.windowMousedown),window.removeEventListener("mouseup",this.windowMouseup)},computed:{},methods:{changeValue:function(n){var e=this;setTimeout((function(){e.$emit("input",n)}),1)},clickTrigger:function(n){var e=this;e.value&&setTimeout((function(){e.$emit("input",!0)}),10)}}};var se=function(n,e,t,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var l,f="function"==typeof t?t.options:t;if(n&&n.render&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},f._ssrRegister=l):e&&(l=a?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(n){e.call(this,u(n))}),l)if(f.functional){var d=f.render;f.render=function(n,e){return l.call(e),d(n,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return t},le="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var fe=document.head||document.getElementsByTagName("head")[0],de={};var ve=function(n){return function(n,e){return function(n,e){var t=le?e.media||"default":n,r=de[t]||(de[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),fe.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(n,e)}};const pe=ce;var he=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-menu",{attrs:{"offset-y":"","min-width":n.minWidth,"max-width":n.maxWidth,"nudge-top":-n.distY,"close-on-click":!1,"close-on-content-click":!1,value:n.value,disabled:!n.editable},on:{input:n.changeValue},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return[t("div",n._g({on:{click:n.clickTrigger}},r),[n._t("trigger")],2)]}}],null,!0)},[n._v(" "),t("div",{ref:"divContent"},[n._t("content")],2)])};he._withStripped=!0;return se({render:he,staticRenderFns:[]},(function(n){n&&n("data-v-cd08eb7a_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPopupPanel.vue"},media:void 0})}),pe,"data-v-cd08eb7a",!1,void 0,ve,void 0)}));
//# sourceMappingURL=w-popup-panel.umd.js.map
