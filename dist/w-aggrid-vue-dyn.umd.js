/*!
 * w-aggrid-vue-dyn v1.2.54
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t=t||self)["w-aggrid-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var u="object"==o(i)&&i&&i.Object===Object&&i,c="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,p=l.toString,d=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=p.call(t);return r&&(e?t[d]=n:delete t[d]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},g="[object Null]",_="[object Undefined]",m=f?f.toStringTag:void 0;var j=function(t){return null==t?void 0===t?_:g:m&&m in Object(t)?h(t):b(t)};var w=function(t){return null!=t&&"object"==o(t)},O="[object Arguments]";var S=function(t){return w(t)&&j(t)==O},A=Object.prototype,k=A.hasOwnProperty,x=A.propertyIsEnumerable,z=S(function(){return arguments}())?S:function(t){return w(t)&&k.call(t,"callee")&&!x.call(t,"callee")},N=Array.isArray;var T=function(){return!1},E=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,i=(o?o.isBuffer:void 0)||T;t.exports=i})),C=9007199254740991,$=/^(?:0|[1-9]\d*)$/;var P=function(t,e){var n=o(t);return!!(e=null==e?C:e)&&("number"==n||"symbol"!=n&&$.test(t))&&t>-1&&t%1==0&&t<e},I=9007199254740991;var M=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=I},F={};F["[object Float32Array]"]=F["[object Float64Array]"]=F["[object Int8Array]"]=F["[object Int16Array]"]=F["[object Int32Array]"]=F["[object Uint8Array]"]=F["[object Uint8ClampedArray]"]=F["[object Uint16Array]"]=F["[object Uint32Array]"]=!0,F["[object Arguments]"]=F["[object Array]"]=F["[object ArrayBuffer]"]=F["[object Boolean]"]=F["[object DataView]"]=F["[object Date]"]=F["[object Error]"]=F["[object Function]"]=F["[object Map]"]=F["[object Number]"]=F["[object Object]"]=F["[object RegExp]"]=F["[object Set]"]=F["[object String]"]=F["[object WeakMap]"]=!1;var R=function(t){return w(t)&&M(t.length)&&!!F[j(t)]};var L=function(t){return function(e){return t(e)}},B=a((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),V=B&&B.isTypedArray,U=V?L(V):R,D=Object.prototype.hasOwnProperty;var W=function(t,e){var n=N(t),o=!n&&z(t),i=!n&&!o&&E(t),a=!n&&!o&&!i&&U(t),u=n||o||i||a,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!D.call(t,f)||u&&("length"==f||i&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||P(f,s))||c.push(f);return c},q=Object.prototype;var X=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)};var G=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),J=Object.prototype.hasOwnProperty;var Y=function(t){if(!X(t))return G(t);var e=[];for(var n in Object(t))J.call(t,n)&&"constructor"!=n&&e.push(n);return e};var H=function(t){var e=o(t);return null!=t&&("object"==e||"function"==e)},K="[object AsyncFunction]",Q="[object Function]",Z="[object GeneratorFunction]",tt="[object Proxy]";var et=function(t){if(!H(t))return!1;var e=j(t);return e==Q||e==Z||e==K||e==tt};var nt=function(t){return null!=t&&M(t.length)&&!et(t)};var rt=function(t){return nt(t)?W(t):Y(t)};var ot=function(t,e){return function(n,r){if(null==n)return n;if(!nt(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Object(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}((function(t,e){return t&&n(t,e,rt)}));var it=function(t){return t};var at=function(t){return"function"==typeof t?t:it};var ut=function(t,n){return(N(t)?e:ot)(t,at(n))};var ct=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var st=function(){this.__data__=[],this.size=0};var ft=function(t,e){return t===e||t!=t&&e!=e};var lt=function(t,e){for(var n=t.length;n--;)if(ft(t[n][0],e))return n;return-1},vt=Array.prototype.splice;var pt=function(t){var e=this.__data__,n=lt(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)};var dt=function(t){var e=this.__data__,n=lt(e,t);return n<0?void 0:e[n][1]};var ht=function(t){return lt(this.__data__,t)>-1};var yt=function(t,e){var n=this.__data__,r=lt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=st,bt.prototype.delete=pt,bt.prototype.get=dt,bt.prototype.has=ht,bt.prototype.set=yt;var gt=bt;var _t=function(){this.__data__=new gt,this.size=0};var mt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var jt=function(t){return this.__data__.get(t)};var wt,Ot=function(t){return this.__data__.has(t)},St=s["__core-js_shared__"],At=(wt=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||""))?"Symbol(src)_1."+wt:"";var kt=function(t){return!!At&&At in t},xt=Function.prototype.toString;var zt=function(t){if(null!=t){try{return xt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Nt=/^\[object .+?Constructor\]$/,Tt=Function.prototype,Et=Object.prototype,Ct=Tt.toString,$t=Et.hasOwnProperty,Pt=RegExp("^"+Ct.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var It=function(t){return!(!H(t)||kt(t))&&(et(t)?Pt:Nt).test(zt(t))};var Mt=function(t,e){return null==t?void 0:t[e]};var Ft=function(t,e){var n=Mt(t,e);return It(n)?n:void 0},Rt=Ft(s,"Map"),Lt=Ft(Object,"create");var Bt=function(){this.__data__=Lt?Lt(null):{},this.size=0};var Vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ut="__lodash_hash_undefined__",Dt=Object.prototype.hasOwnProperty;var Wt=function(t){var e=this.__data__;if(Lt){var n=e[t];return n===Ut?void 0:n}return Dt.call(e,t)?e[t]:void 0},qt=Object.prototype.hasOwnProperty;var Xt=function(t){var e=this.__data__;return Lt?void 0!==e[t]:qt.call(e,t)},Gt="__lodash_hash_undefined__";var Jt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Lt&&void 0===e?Gt:e,this};function Yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Yt.prototype.clear=Bt,Yt.prototype.delete=Vt,Yt.prototype.get=Wt,Yt.prototype.has=Xt,Yt.prototype.set=Jt;var Ht=Yt;var Kt=function(){this.size=0,this.__data__={hash:new Ht,map:new(Rt||gt),string:new Ht}};var Qt=function(t){var e=o(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Zt=function(t,e){var n=t.__data__;return Qt(e)?n["string"==typeof e?"string":"hash"]:n.map};var te=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e};var ee=function(t){return Zt(this,t).get(t)};var ne=function(t){return Zt(this,t).has(t)};var re=function(t,e){var n=Zt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function oe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}oe.prototype.clear=Kt,oe.prototype.delete=te,oe.prototype.get=ee,oe.prototype.has=ne,oe.prototype.set=re;var ie=oe,ae=200;var ue=function(t,e){var n=this.__data__;if(n instanceof gt){var r=n.__data__;if(!Rt||r.length<ae-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ie(r)}return n.set(t,e),this.size=n.size,this};function ce(t){var e=this.__data__=new gt(t);this.size=e.size}ce.prototype.clear=_t,ce.prototype.delete=mt,ce.prototype.get=jt,ce.prototype.has=Ot,ce.prototype.set=ue;var se=ce,fe="__lodash_hash_undefined__";var le=function(t){return this.__data__.set(t,fe),this};var ve=function(t){return this.__data__.has(t)};function pe(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new ie;++e<n;)this.add(t[e])}pe.prototype.add=pe.prototype.push=le,pe.prototype.has=ve;var de=pe;var he=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var ye=function(t,e){return t.has(e)},be=1,ge=2;var _e=function(t,e,n,r,o,i){var a=n&be,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var f=-1,l=!0,v=n&ge?new de:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var p=t[f],d=e[f];if(r)var h=a?r(d,p,f,e,t,i):r(p,d,f,t,e,i);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!he(e,(function(t,e){if(!ye(v,e)&&(p===t||o(p,t,n,r,i)))return v.push(e)}))){l=!1;break}}else if(p!==d&&!o(p,d,n,r,i)){l=!1;break}}return i.delete(t),i.delete(e),l},me=s.Uint8Array;var je=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var we=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Oe=1,Se=2,Ae="[object Boolean]",ke="[object Date]",xe="[object Error]",ze="[object Map]",Ne="[object Number]",Te="[object RegExp]",Ee="[object Set]",Ce="[object String]",$e="[object Symbol]",Pe="[object ArrayBuffer]",Ie="[object DataView]",Me=f?f.prototype:void 0,Fe=Me?Me.valueOf:void 0;var Re=function(t,e,n,r,o,i,a){switch(n){case Ie:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Pe:return!(t.byteLength!=e.byteLength||!i(new me(t),new me(e)));case Ae:case ke:case Ne:return ft(+t,+e);case xe:return t.name==e.name&&t.message==e.message;case Te:case Ce:return t==e+"";case ze:var u=je;case Ee:var c=r&Oe;if(u||(u=we),t.size!=e.size&&!c)return!1;var s=a.get(t);if(s)return s==e;r|=Se,a.set(t,e);var f=_e(u(t),u(e),r,o,i,a);return a.delete(t),f;case $e:if(Fe)return Fe.call(t)==Fe.call(e)}return!1};var Le=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var Be=function(t,e,n){var r=e(t);return N(t)?r:Le(r,n(t))};var Ve=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i};var Ue=function(){return[]},De=Object.prototype.propertyIsEnumerable,We=Object.getOwnPropertySymbols,qe=We?function(t){return null==t?[]:(t=Object(t),Ve(We(t),(function(e){return De.call(t,e)})))}:Ue;var Xe=function(t){return Be(t,rt,qe)},Ge=1,Je=Object.prototype.hasOwnProperty;var Ye=function(t,e,n,r,o,i){var a=n&Ge,u=Xe(t),c=u.length;if(c!=Xe(e).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in e:Je.call(e,f)))return!1}var l=i.get(t);if(l&&i.get(e))return l==e;var v=!0;i.set(t,e),i.set(e,t);for(var p=a;++s<c;){var d=t[f=u[s]],h=e[f];if(r)var y=a?r(h,d,f,e,t,i):r(d,h,f,t,e,i);if(!(void 0===y?d===h||o(d,h,n,r,i):y)){v=!1;break}p||(p="constructor"==f)}if(v&&!p){var b=t.constructor,g=e.constructor;b!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(v=!1)}return i.delete(t),i.delete(e),v},He=Ft(s,"DataView"),Ke=Ft(s,"Promise"),Qe=Ft(s,"Set"),Ze=Ft(s,"WeakMap"),tn=zt(He),en=zt(Rt),nn=zt(Ke),rn=zt(Qe),on=zt(Ze),an=j;(He&&"[object DataView]"!=an(new He(new ArrayBuffer(1)))||Rt&&"[object Map]"!=an(new Rt)||Ke&&"[object Promise]"!=an(Ke.resolve())||Qe&&"[object Set]"!=an(new Qe)||Ze&&"[object WeakMap]"!=an(new Ze))&&(an=function(t){var e=j(t),n="[object Object]"==e?t.constructor:void 0,r=n?zt(n):"";if(r)switch(r){case tn:return"[object DataView]";case en:return"[object Map]";case nn:return"[object Promise]";case rn:return"[object Set]";case on:return"[object WeakMap]"}return e});var un=an,cn=1,sn="[object Arguments]",fn="[object Array]",ln="[object Object]",vn=Object.prototype.hasOwnProperty;var pn=function(t,e,n,r,o,i){var a=N(t),u=N(e),c=a?fn:un(t),s=u?fn:un(e),f=(c=c==sn?ln:c)==ln,l=(s=s==sn?ln:s)==ln,v=c==s;if(v&&E(t)){if(!E(e))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new se),a||U(t)?_e(t,e,n,r,o,i):Re(t,e,c,n,r,o,i);if(!(n&cn)){var p=f&&vn.call(t,"__wrapped__"),d=l&&vn.call(e,"__wrapped__");if(p||d){var h=p?t.value():t,y=d?e.value():e;return i||(i=new se),o(h,y,n,r,i)}}return!!v&&(i||(i=new se),Ye(t,e,n,r,o,i))};var dn=function t(e,n,r,o,i){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:pn(e,n,r,o,t,i))},hn=1,yn=2;var bn=function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],s=t[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new se;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?dn(f,s,hn|yn,r,l):v))return!1}}return!0};var gn=function(t){return t==t&&!H(t)};var _n=function(t){for(var e=rt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,gn(o)]}return e};var mn=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var jn=function(t){var e=_n(t);return 1==e.length&&e[0][2]?mn(e[0][0],e[0][1]):function(n){return n===t||bn(n,t,e)}},wn="[object Symbol]";var On=function(t){return"symbol"==o(t)||w(t)&&j(t)==wn},Sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,An=/^\w*$/;var kn=function(t,e){if(N(t))return!1;var n=o(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!On(t))||(An.test(t)||!Sn.test(t)||null!=e&&t in Object(e))},xn="Expected a function";function zn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(xn);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(zn.Cache||ie),n}zn.Cache=ie;var Nn=zn,Tn=500;var En=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cn=/\\(\\)?/g,$n=function(t){var e=Nn(t,(function(t){return n.size===Tn&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(En,(function(t,n,r,o){e.push(r?o.replace(Cn,"$1"):n||t)})),e})),Pn=1/0,In=f?f.prototype:void 0,Mn=In?In.toString:void 0;var Fn=function t(e){if("string"==typeof e)return e;if(N(e))return ct(e,t)+"";if(On(e))return Mn?Mn.call(e):"";var n=e+"";return"0"==n&&1/e==-Pn?"-0":n};var Rn=function(t){return null==t?"":Fn(t)};var Ln=function(t,e){return N(t)?t:kn(t,e)?[t]:$n(Rn(t))},Bn=1/0;var Vn=function(t){if("string"==typeof t||On(t))return t;var e=t+"";return"0"==e&&1/t==-Bn?"-0":e};var Un=function(t,e){for(var n=0,r=(e=Ln(e,t)).length;null!=t&&n<r;)t=t[Vn(e[n++])];return n&&n==r?t:void 0};var Dn=function(t,e,n){var r=null==t?void 0:Un(t,e);return void 0===r?n:r};var Wn=function(t,e){return null!=t&&e in Object(t)};var qn=function(t,e,n){for(var r=-1,o=(e=Ln(e,t)).length,i=!1;++r<o;){var a=Vn(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&M(o)&&P(a,o)&&(N(t)||z(t))};var Xn=function(t,e){return null!=t&&qn(t,e,Wn)},Gn=1,Jn=2;var Yn=function(t,e){return kn(t)&&gn(e)?mn(Vn(t),e):function(n){var r=Dn(n,t);return void 0===r&&r===e?Xn(n,t):dn(e,r,Gn|Jn)}};var Hn=function(t){return function(e){return null==e?void 0:e[t]}};var Kn=function(t){return function(e){return Un(e,t)}};var Qn=function(t){return kn(t)?Hn(Vn(t)):Kn(t)};var Zn=function(t){return"function"==typeof t?t:null==t?it:"object"==o(t)?N(t)?Yn(t[0],t[1]):jn(t):Qn(t)};var tr=function(t,e){var n=-1,r=nt(t)?Array(t.length):[];return ot(t,(function(t,o,i){r[++n]=e(t,o,i)})),r};var er=function(t,e){return(N(t)?ct:tr)(t,Zn(e))},nr=Array.prototype.join;var rr=function(t,e){return null==t?"":nr.call(t,e)};function or(t){return"[object Array]"===Object.prototype.toString.call(t)}function ir(t){return"[object String]"===Object.prototype.toString.call(t)}function ar(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function ur(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var cr=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i},sr=NaN,fr=/^\s+|\s+$/g,lr=/^[-+]0x[0-9a-f]+$/i,vr=/^0b[01]+$/i,pr=/^0o[0-7]+$/i,dr=parseInt;var hr=function(t){if("number"==typeof t)return t;if(On(t))return sr;if(H(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=H(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(fr,"");var n=vr.test(t);return n||pr.test(t)?dr(t.slice(2),n?2:8):lr.test(t)?sr:+t},yr=1/0,br=17976931348623157e292;var gr=function(t){return t?(t=hr(t))===yr||t===-yr?(t<0?-1:1)*br:t==t?t:0:0===t?t:0};var _r=function(t){var e=gr(t),n=e%1;return e==e?n?e-n:e:0};var mr=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:_r(e),cr(t,e<0?0:e,r)):[]};var jr=function(t){return"number"==typeof t&&t==_r(t)};function wr(t){return!(!ir(t)||""===t)}function Or(t){var e=!1;return wr(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Sr(t){return Or(t)?gr(t):0}var Ar=s.isFinite,kr=Math.min;var xr=function(t){var e=Math[t];return function(t,n){if(t=hr(t),(n=null==n?0:kr(_r(n),292))&&Ar(t)){var r=(Rn(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Rn(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function zr(t){return!!function(t){return!!Or(t)&&(t=Sr(t),jr(t))}(t)&&function(t){if(!Or(t))return 0;t=Sr(t);var e=xr(t);return"0"===String(e)?0:e}(t)>0}function Nr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,n=ur();if(!ar(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;zr(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===t()&&(clearInterval(o),n.resolve()),r>=e&&(clearInterval(o),n.resolve())}),1e3);return n}function Tr(t,e){if(!wr(t))return"";if(!zr(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var Er={},Cr={};function $r(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,i=t.func,a=ur();if("done"===Er[n])return a.resolve("loaded"),a;if("loading"===Er[n])return Nr((function(){return"done"===Er[n]})).then((function(){a.resolve("loaded")})),a;Er[n]="loading";var u=document.createElement(e);return ut(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){a.resolve(u),Er[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;ar(i)?t=Nr(i):(t=ur()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Or(t)||(t=10);var e=ur();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){a.resolve(u),Er[n]="done"}))})),u.addEventListener("error",(function(){a.reject(u),Er[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),a}function Pr(t){var e=ur();or(t)||(t=[t]),ut(t,(function(e,n){ir(e)&&(t[n]={path:e})}));var n=rr(er(t,"path"),"|");return"done"===Cr[n]?(e.resolve("loaded"),e):"loading"===Cr[n]?(Nr((function(){return"done"===Cr[n]})).then((function(){e.resolve("loaded")})),e):(Cr[n]="loading",ut(t,(function(t,e){t.type||(".js"===Tr(t.path,3)?t.type="js":".css"===Tr(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=ur();if(!or(t))return n.reject("rs is not array"),n;ar(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),e(n,r+=1)}))}),Promise.resolve()).then((function(t){o.push(t),o=mr(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=ur();if("js"===t.type)e=$r({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=$r({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Cr[n]="done"})))}var Ir={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};var Mr=function(t,e,n,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):e&&(f=a?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return n},Fr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Rr=document.head||document.getElementsByTagName("head")[0],Lr={};var Br=function(t){return function(t,e){return function(t,e){var n=Fr?e.media||"default":t,r=Lr[n]||(Lr[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),Rr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(t,e)}};const Vr=Ir;var Ur=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Ur._withStripped=!0;var Dr=Mr({render:Ur,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Vr,"data-v-619e545c",!1,void 0,Br,void 0);function Wr(){var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:null;return t||e.Vue}t&&!window.Vue&&(window.Vue=t);const qr={components:{WIconLoading:Dr},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/ag-grid-community@22.0.0/dist/ag-grid-community.min.noStyle.js","https://cdn.jsdelivr.net/npm/ag-grid-vue@22.0.0/dist/ag-grid-vue.umd.min.js","https://cdn.jsdelivr.net/npm/w-aggrid-vue@1.0.31/dist/w-aggrid-vue.umd.js"]}},opt:{type:Object,default:function(){}},height:{type:Number,default:300},filterall:{type:String,default:""}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this;Pr(t.pathItems).then((function(e){if("loaded"!==e){var n=window["w-aggrid-vue"];n.default&&(n=n.default),Wr().component("w-aggrid-vue",n)}t.cmpName="w-aggrid-vue"}))},computed:{},methods:{}};var Xr=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{opt:this.opt,height:this.height,filterall:this.filterall}})};Xr._withStripped=!0;return Mr({render:Xr,staticRenderFns:[]},(function(t){t&&t("data-v-360b21d0_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WAggridVueDyn.vue"},media:void 0})}),qr,"data-v-360b21d0",!1,void 0,Br,void 0)}));
//# sourceMappingURL=w-aggrid-vue-dyn.umd.js.map
