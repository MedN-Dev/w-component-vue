/*!
 * w-icon-svg v1.2.50
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-icon-svg"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=t||r||Function("return this")(),f=a.Symbol;var c=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},i=Array.isArray,u=Object.prototype,o=u.hasOwnProperty,d=u.toString,l=f?f.toStringTag:void 0;var s=function(e){var n=o.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=d.call(e);return r&&(n?e[l]=t:delete e[l]),a},h=Object.prototype.toString;var b=function(e){return h.call(e)},p="[object Null]",g="[object Undefined]",v=f?f.toStringTag:void 0;var y=function(e){return null==e?void 0===e?g:p:v&&v in Object(e)?s(e):b(e)};var _=function(n){return null!=n&&"object"==e(n)},k="[object Symbol]";var m=function(n){return"symbol"==e(n)||_(n)&&y(n)==k},x=1/0,j=f?f.prototype:void 0,O=j?j.toString:void 0;var S=function e(n){if("string"==typeof n)return n;if(i(n))return c(n,e)+"";if(m(n))return O?O.call(n):"";var t=n+"";return"0"==t&&1/n==-x?"-0":t};var w=function(e){return null==e?"":S(e)};var E=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var f=Array(a);++r<a;)f[r]=e[r+n];return f};var z=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:E(e,n,t)},A=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var C=function(e){return A.test(e)};var R=function(e){return e.split("")},T="[\\ud800-\\udfff]",$="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",I="\\ud83c[\\udffb-\\udfff]",U="[^\\ud800-\\udfff]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",P="(?:"+$+"|"+I+")"+"?",Z="[\\ufe0e\\ufe0f]?"+P+("(?:\\u200d(?:"+[U,N,L].join("|")+")[\\ufe0e\\ufe0f]?"+P+")*"),D="(?:"+[U+$+"?",$,N,L,T].join("|")+")",M=RegExp(I+"(?="+I+")|"+D+Z,"g");var F=function(e){return e.match(M)||[]};var G=function(e){return C(e)?F(e):R(e)};var V=function(e){return function(n){n=w(n);var t=C(n)?G(n):void 0,r=t?t[0]:n.charAt(0),a=t?z(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var B=function(e){return V(w(e).toLowerCase())};var H=function(e,n,t,r){var a=-1,f=null==e?0:e.length;for(r&&f&&(t=e[++a]);++a<f;)t=n(t,e[a],a,e);return t};var W=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var q=function(e){return(e=w(e))&&e.replace(J,W).replace(Y,"")},X=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(e){return e.match(X)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ee=function(e){return Q.test(e)},ne="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="["+ne+"]",re="\\d+",ae="[\\u2700-\\u27bf]",fe="[a-z\\xdf-\\xf6\\xf8-\\xff]",ce="[^\\ud800-\\udfff"+ne+re+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ue="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="[A-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:"+fe+"|"+ce+")",le="(?:"+oe+"|"+ce+")",se="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",he="[\\ufe0e\\ufe0f]?"+se+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ie,ue].join("|")+")[\\ufe0e\\ufe0f]?"+se+")*"),be="(?:"+[ae,ie,ue].join("|")+")"+he,pe=RegExp([oe+"?"+fe+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[te,oe,"$"].join("|")+")",le+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[te,oe+de,"$"].join("|")+")",oe+"?"+de+"+(?:['’](?:d|ll|m|re|s|t|ve))?",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",re,be].join("|"),"g");var ge=function(e){return e.match(pe)||[]};var ve=function(e,n,t){return e=w(e),void 0===(n=t?void 0:n)?ee(e)?ge(e):K(e):e.match(n)||[]},ye=RegExp("['’]","g");var _e=function(e){return function(n){return H(ve(q(n).replace(ye,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?B(n):n)}));var ke=function(e,n){return e===n||e!=e&&n!=n};var me=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)},xe="[object AsyncFunction]",je="[object Function]",Oe="[object GeneratorFunction]",Se="[object Proxy]";var we=function(e){if(!me(e))return!1;var n=y(e);return n==je||n==Oe||n==xe||n==Se},Ee=9007199254740991;var ze=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ee};var Ae=function(e){return null!=e&&ze(e.length)&&!we(e)},Ce=9007199254740991,Re=/^(?:0|[1-9]\d*)$/;var Te=function(n,t){var r=e(n);return!!(t=null==t?Ce:t)&&("number"==r||"symbol"!=r&&Re.test(n))&&n>-1&&n%1==0&&n<t};var $e=function(n,t,r){if(!me(r))return!1;var a=e(t);return!!("number"==a?Ae(r)&&Te(t,r.length):"string"==a&&t in r)&&ke(r[t],n)},Ie="[object RegExp]";var Ue=function(e){return _(e)&&y(e)==Ie};var Ne=function(e){return function(n){return e(n)}},Le=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var r=n&&!n.nodeType&&n,a=r&&e&&!e.nodeType&&e,f=a&&a.exports===r&&t.process,c=function(){try{var e=a&&a.require&&a.require("util").types;return e||f&&f.binding&&f.binding("util")}catch(e){}}();e.exports=c})),Pe=Le&&Le.isRegExp,Ze=Pe?Ne(Pe):Ue,De=4294967295;var Me=function(e,n,t){return t&&"number"!=typeof t&&$e(e,n,t)&&(n=t=void 0),(t=void 0===t?De:t>>>0)?(e=w(e))&&("string"==typeof n||null!=n&&!Ze(n))&&!(n=S(n))&&C(e)?z(G(e),0,t):e.split(n,t):[]},Fe=Object.prototype;var Ge=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Fe)};var Ve=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Be=Object.prototype.hasOwnProperty;var He,We=function(e){if(!Ge(e))return Ve(e);var n=[];for(var t in Object(e))Be.call(e,t)&&"constructor"!=t&&n.push(t);return n},Je=a["__core-js_shared__"],Ye=(He=/[^.]+$/.exec(Je&&Je.keys&&Je.keys.IE_PROTO||""))?"Symbol(src)_1."+He:"";var qe=function(e){return!!Ye&&Ye in e},Xe=Function.prototype.toString;var Ke=function(e){if(null!=e){try{return Xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Qe=/^\[object .+?Constructor\]$/,en=Function.prototype,nn=Object.prototype,tn=en.toString,rn=nn.hasOwnProperty,an=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fn=function(e){return!(!me(e)||qe(e))&&(we(e)?an:Qe).test(Ke(e))};var cn=function(e,n){return null==e?void 0:e[n]};var un=function(e,n){var t=cn(e,n);return fn(t)?t:void 0},on=un(a,"DataView"),dn=un(a,"Map"),ln=un(a,"Promise"),sn=un(a,"Set"),hn=un(a,"WeakMap"),bn=Ke(on),pn=Ke(dn),gn=Ke(ln),vn=Ke(sn),yn=Ke(hn),_n=y;(on&&"[object DataView]"!=_n(new on(new ArrayBuffer(1)))||dn&&"[object Map]"!=_n(new dn)||ln&&"[object Promise]"!=_n(ln.resolve())||sn&&"[object Set]"!=_n(new sn)||hn&&"[object WeakMap]"!=_n(new hn))&&(_n=function(e){var n=y(e),t="[object Object]"==n?e.constructor:void 0,r=t?Ke(t):"";if(r)switch(r){case bn:return"[object DataView]";case pn:return"[object Map]";case gn:return"[object Promise]";case vn:return"[object Set]";case yn:return"[object WeakMap]"}return n});var kn=_n,mn="[object String]";var xn=function(e){return"string"==typeof e||!i(e)&&_(e)&&y(e)==mn};var jn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),On="[\\ud800-\\udfff]",Sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",wn="\\ud83c[\\udffb-\\udfff]",En="[^\\ud800-\\udfff]",zn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="(?:"+Sn+"|"+wn+")"+"?",Rn="[\\ufe0e\\ufe0f]?"+Cn+("(?:\\u200d(?:"+[En,zn,An].join("|")+")[\\ufe0e\\ufe0f]?"+Cn+")*"),Tn="(?:"+[En+Sn+"?",Sn,zn,An,On].join("|")+")",$n=RegExp(wn+"(?="+wn+")|"+Tn+Rn,"g");var In=function(e){for(var n=$n.lastIndex=0;$n.test(e);)++n;return n};var Un=function(e){return C(e)?In(e):jn(e)},Nn="[object Map]",Ln="[object Set]";var Pn=function(e){if(null==e)return 0;if(Ae(e))return xn(e)?Un(e):e.length;var n=kn(e);return n==Nn||n==Ln?e.size:We(e).length},Zn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dn=/^\w*$/;var Mn=function(n,t){if(i(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!m(n))||(Dn.test(n)||!Zn.test(n)||null!=t&&n in Object(t))},Fn=un(Object,"create");var Gn=function(){this.__data__=Fn?Fn(null):{},this.size=0};var Vn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Bn="__lodash_hash_undefined__",Hn=Object.prototype.hasOwnProperty;var Wn=function(e){var n=this.__data__;if(Fn){var t=n[e];return t===Bn?void 0:t}return Hn.call(n,e)?n[e]:void 0},Jn=Object.prototype.hasOwnProperty;var Yn=function(e){var n=this.__data__;return Fn?void 0!==n[e]:Jn.call(n,e)},qn="__lodash_hash_undefined__";var Xn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Fn&&void 0===n?qn:n,this};function Kn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Kn.prototype.clear=Gn,Kn.prototype.delete=Vn,Kn.prototype.get=Wn,Kn.prototype.has=Yn,Kn.prototype.set=Xn;var Qn=Kn;var et=function(){this.__data__=[],this.size=0};var nt=function(e,n){for(var t=e.length;t--;)if(ke(e[t][0],n))return t;return-1},tt=Array.prototype.splice;var rt=function(e){var n=this.__data__,t=nt(n,e);return!(t<0)&&(t==n.length-1?n.pop():tt.call(n,t,1),--this.size,!0)};var at=function(e){var n=this.__data__,t=nt(n,e);return t<0?void 0:n[t][1]};var ft=function(e){return nt(this.__data__,e)>-1};var ct=function(e,n){var t=this.__data__,r=nt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function it(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}it.prototype.clear=et,it.prototype.delete=rt,it.prototype.get=at,it.prototype.has=ft,it.prototype.set=ct;var ut=it;var ot=function(){this.size=0,this.__data__={hash:new Qn,map:new(dn||ut),string:new Qn}};var dt=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var lt=function(e,n){var t=e.__data__;return dt(n)?t["string"==typeof n?"string":"hash"]:t.map};var st=function(e){var n=lt(this,e).delete(e);return this.size-=n?1:0,n};var ht=function(e){return lt(this,e).get(e)};var bt=function(e){return lt(this,e).has(e)};var pt=function(e,n){var t=lt(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function gt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}gt.prototype.clear=ot,gt.prototype.delete=st,gt.prototype.get=ht,gt.prototype.has=bt,gt.prototype.set=pt;var vt=gt,yt="Expected a function";function _t(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(yt);var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],f=t.cache;if(f.has(a))return f.get(a);var c=e.apply(this,r);return t.cache=f.set(a,c)||f,c};return t.cache=new(_t.Cache||vt),t}_t.Cache=vt;var kt=_t,mt=500;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,Ot=function(e){var n=kt(e,(function(e){return t.size===mt&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(xt,(function(e,t,r,a){n.push(r?a.replace(jt,"$1"):t||e)})),n}));var St=function(e,n){return i(e)?e:Mn(e,n)?[e]:Ot(w(e))},wt=1/0;var Et=function(e){if("string"==typeof e||m(e))return e;var n=e+"";return"0"==n&&1/e==-wt?"-0":n};var zt=function(e,n){for(var t=0,r=(n=St(n,e)).length;null!=e&&t<r;)e=e[Et(n[t++])];return t&&t==r?e:void 0};var At=function(e,n,t){var r=null==e?void 0:zt(e,n);return void 0===r?t:r},Ct={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function Rt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Me(e," ");if(2!==Pn(n))return e;var t=n[0].trim();t=_e(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=At(Ct,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var Tt={components:{},props:{color:{type:String,default:"grey darken-1"},colorHover:{type:String,default:"grey darken-3"},sizeOriginal:{type:Number,default:24},size:{type:Number,default:24},path:{type:[String,Array],default:""},styleTransition:{type:String,default:"all 0.5s linear"}},data:function(){return{mouseEnter:!1,paths:[]}},computed:{usePaths:function(){var e,n=this.path;return e=this.path,"[object Array]"!==Object.prototype.toString.call(e)&&(n=[this.path]),n},useIconColor:function(){return this.mouseEnter?Rt(this.colorHover):Rt(this.color)}},methods:{}};var $t=function(e,n,t,r,a,f,c,i,u,o){"boolean"!=typeof c&&(u=i,i=c,c=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),f?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(f)},l._ssrRegister=d):n&&(d=c?function(){n.call(this,o(this.$root.$options.shadowRoot))}:function(e){n.call(this,i(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return t},It="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Ut=document.head||document.getElementsByTagName("head")[0],Nt={};var Lt=function(e){return function(e,n){return function(e,n){var t=It?n.media||"default":e,r=Nt[t]||(Nt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),Ut.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var f=r.ids.size-1,c=document.createTextNode(a),i=r.element.childNodes;i[f]&&r.element.removeChild(i[f]),i.length?r.element.insertBefore(c,i[f]):r.element.appendChild(c)}}}(e,n)}};const Pt=Tt;var Zt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-block"}},[t("svg",{style:"fill:"+e.useIconColor+"; transition:"+e.styleTransition+";",attrs:{width:e.size,height:e.size,viewBox:"0 0 "+e.sizeOriginal+" "+e.sizeOriginal},on:{mouseenter:function(n){e.mouseEnter=!0},mouseleave:function(n){e.mouseEnter=!1}}},e._l(e.usePaths,(function(e,n){return t("path",{key:n,attrs:{d:e}})})),0)])};Zt._withStripped=!0;return $t({render:Zt,staticRenderFns:[]},(function(e){e&&e("data-v-2bd23429_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconSvg.vue"},media:void 0})}),Pt,"data-v-2bd23429",!1,void 0,Lt,void 0)}));
//# sourceMappingURL=w-icon-svg.umd.js.map
