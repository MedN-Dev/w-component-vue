/*!
 * w-panel-bulge v1.3.9
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-panel-bulge"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=t||r||Function("return this")(),o=a.Symbol;var f=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},c=Array.isArray,u=Object.prototype,i=u.hasOwnProperty,d=u.toString,l=o?o.toStringTag:void 0;var s=function(e){var n=i.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=d.call(e);return r&&(n?e[l]=t:delete e[l]),a},p=Object.prototype.toString;var h=function(e){return p.call(e)},g=o?o.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?s(e):h(e)};var v=function(n){return null!=n&&"object"==e(n)};var y=function(n){return"symbol"==e(n)||v(n)&&"[object Symbol]"==b(n)},x=o?o.prototype:void 0,m=x?x.toString:void 0;var k=function e(n){if("string"==typeof n)return n;if(c(n))return f(n,e)+"";if(y(n))return m?m.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var _=function(e){return null==e?"":k(e)};var C=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+n];return o};var j=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:C(e,n,t)},w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return w.test(e)};var S=function(e){return e.split("")},O="[\\ud800-\\udfff]",T="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",E="\\ud83c[\\udffb-\\udfff]",B="[^\\ud800-\\udfff]",R="(?:\\ud83c[\\udde6-\\uddff]){2}",N="[\\ud800-\\udbff][\\udc00-\\udfff]",P="(?:"+T+"|"+E+")"+"?",$="[\\ufe0e\\ufe0f]?"+P+("(?:\\u200d(?:"+[B,R,N].join("|")+")[\\ufe0e\\ufe0f]?"+P+")*"),z="(?:"+[B+T+"?",T,R,N,O].join("|")+")",L=RegExp(E+"(?="+E+")|"+z+$,"g");var I=function(e){return e.match(L)||[]};var U=function(e){return A(e)?I(e):S(e)};var H=function(e){return function(n){n=_(n);var t=A(n)?U(n):void 0,r=t?t[0]:n.charAt(0),a=t?j(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var D=function(e){return H(_(e).toLowerCase())};var Z=function(e,n,t,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++a]);++a<o;)t=n(t,e[a],a,e);return t};var M=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),F=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(e){return(e=_(e))&&e.replace(F,M).replace(G,"")},W=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Y=function(e){return e.match(W)||[]},J=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q=function(e){return J.test(e)},X="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="["+X+"]",Q="\\d+",ee="[\\u2700-\\u27bf]",ne="[a-z\\xdf-\\xf6\\xf8-\\xff]",te="[^\\ud800-\\udfff"+X+Q+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",re="(?:\\ud83c[\\udde6-\\uddff]){2}",ae="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="[A-Z\\xc0-\\xd6\\xd8-\\xde]",fe="(?:"+ne+"|"+te+")",ce="(?:"+oe+"|"+te+")",ue="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ie="[\\ufe0e\\ufe0f]?"+ue+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",re,ae].join("|")+")[\\ufe0e\\ufe0f]?"+ue+")*"),de="(?:"+[ee,re,ae].join("|")+")"+ie,le=RegExp([oe+"?"+ne+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[K,oe,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[K,oe+fe,"$"].join("|")+")",oe+"?"+fe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Q,de].join("|"),"g");var se=function(e){return e.match(le)||[]};var pe=function(e,n,t){return e=_(e),void 0===(n=t?void 0:n)?q(e)?se(e):Y(e):e.match(n)||[]},he=RegExp("['’]","g");var ge=function(e){return function(n){return Z(pe(V(n).replace(he,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?D(n):n)}));var be=function(e,n){return e===n||e!=e&&n!=n};var ve=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)};var ye=function(e){if(!ve(e))return!1;var n=b(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var me=function(e){return null!=e&&xe(e.length)&&!ye(e)},ke=/^(?:0|[1-9]\d*)$/;var _e=function(n,t){var r=e(n);return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ke.test(n))&&n>-1&&n%1==0&&n<t};var Ce=function(n,t,r){if(!ve(r))return!1;var a=e(t);return!!("number"==a?me(r)&&_e(t,r.length):"string"==a&&t in r)&&be(r[t],n)};var je=function(e){return v(e)&&"[object RegExp]"==b(e)};var we=function(e){return function(n){return e(n)}},Ae=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var r=n&&!n.nodeType&&n,a=r&&e&&!e.nodeType&&e,o=a&&a.exports===r&&t.process,f=function(){try{var e=a&&a.require&&a.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=f})),Se=Ae&&Ae.isRegExp,Oe=Se?we(Se):je;var Te=function(e,n,t){return t&&"number"!=typeof t&&Ce(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=_(e))&&("string"==typeof n||null!=n&&!Oe(n))&&!(n=k(n))&&A(e)?j(U(e),0,t):e.split(n,t):[]},Ee=Object.prototype;var Be=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Ee)};var Re=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Ne=Object.prototype.hasOwnProperty;var Pe,$e=function(e){if(!Be(e))return Re(e);var n=[];for(var t in Object(e))Ne.call(e,t)&&"constructor"!=t&&n.push(t);return n},ze=a["__core-js_shared__"],Le=(Pe=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||""))?"Symbol(src)_1."+Pe:"";var Ie=function(e){return!!Le&&Le in e},Ue=Function.prototype.toString;var He=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Me=Object.prototype,Fe=Ze.toString,Ge=Me.hasOwnProperty,Ve=RegExp("^"+Fe.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var We=function(e){return!(!ve(e)||Ie(e))&&(ye(e)?Ve:De).test(He(e))};var Ye=function(e,n){return null==e?void 0:e[n]};var Je=function(e,n){var t=Ye(e,n);return We(t)?t:void 0},qe=Je(a,"DataView"),Xe=Je(a,"Map"),Ke=Je(a,"Promise"),Qe=Je(a,"Set"),en=Je(a,"WeakMap"),nn=He(qe),tn=He(Xe),rn=He(Ke),an=He(Qe),on=He(en),fn=b;(qe&&"[object DataView]"!=fn(new qe(new ArrayBuffer(1)))||Xe&&"[object Map]"!=fn(new Xe)||Ke&&"[object Promise]"!=fn(Ke.resolve())||Qe&&"[object Set]"!=fn(new Qe)||en&&"[object WeakMap]"!=fn(new en))&&(fn=function(e){var n=b(e),t="[object Object]"==n?e.constructor:void 0,r=t?He(t):"";if(r)switch(r){case nn:return"[object DataView]";case tn:return"[object Map]";case rn:return"[object Promise]";case an:return"[object Set]";case on:return"[object WeakMap]"}return n});var cn=fn;var un=function(e){return"string"==typeof e||!c(e)&&v(e)&&"[object String]"==b(e)};var dn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),ln="[\\ud800-\\udfff]",sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",pn="\\ud83c[\\udffb-\\udfff]",hn="[^\\ud800-\\udfff]",gn="(?:\\ud83c[\\udde6-\\uddff]){2}",bn="[\\ud800-\\udbff][\\udc00-\\udfff]",vn="(?:"+sn+"|"+pn+")"+"?",yn="[\\ufe0e\\ufe0f]?"+vn+("(?:\\u200d(?:"+[hn,gn,bn].join("|")+")[\\ufe0e\\ufe0f]?"+vn+")*"),xn="(?:"+[hn+sn+"?",sn,gn,bn,ln].join("|")+")",mn=RegExp(pn+"(?="+pn+")|"+xn+yn,"g");var kn=function(e){for(var n=mn.lastIndex=0;mn.test(e);)++n;return n};var _n=function(e){return A(e)?kn(e):dn(e)};var Cn=function(e){if(null==e)return 0;if(me(e))return un(e)?_n(e):e.length;var n=cn(e);return"[object Map]"==n||"[object Set]"==n?e.size:$e(e).length},jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var An=function(n,t){if(c(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!y(n))||(wn.test(n)||!jn.test(n)||null!=t&&n in Object(t))},Sn=Je(Object,"create");var On=function(){this.__data__=Sn?Sn(null):{},this.size=0};var Tn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},En=Object.prototype.hasOwnProperty;var Bn=function(e){var n=this.__data__;if(Sn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return En.call(n,e)?n[e]:void 0},Rn=Object.prototype.hasOwnProperty;var Nn=function(e){var n=this.__data__;return Sn?void 0!==n[e]:Rn.call(n,e)};var Pn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Sn&&void 0===n?"__lodash_hash_undefined__":n,this};function $n(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}$n.prototype.clear=On,$n.prototype.delete=Tn,$n.prototype.get=Bn,$n.prototype.has=Nn,$n.prototype.set=Pn;var zn=$n;var Ln=function(){this.__data__=[],this.size=0};var In=function(e,n){for(var t=e.length;t--;)if(be(e[t][0],n))return t;return-1},Un=Array.prototype.splice;var Hn=function(e){var n=this.__data__,t=In(n,e);return!(t<0)&&(t==n.length-1?n.pop():Un.call(n,t,1),--this.size,!0)};var Dn=function(e){var n=this.__data__,t=In(n,e);return t<0?void 0:n[t][1]};var Zn=function(e){return In(this.__data__,e)>-1};var Mn=function(e,n){var t=this.__data__,r=In(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Fn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Fn.prototype.clear=Ln,Fn.prototype.delete=Hn,Fn.prototype.get=Dn,Fn.prototype.has=Zn,Fn.prototype.set=Mn;var Gn=Fn;var Vn=function(){this.size=0,this.__data__={hash:new zn,map:new(Xe||Gn),string:new zn}};var Wn=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var Yn=function(e,n){var t=e.__data__;return Wn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Jn=function(e){var n=Yn(this,e).delete(e);return this.size-=n?1:0,n};var qn=function(e){return Yn(this,e).get(e)};var Xn=function(e){return Yn(this,e).has(e)};var Kn=function(e,n){var t=Yn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function Qn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Qn.prototype.clear=Vn,Qn.prototype.delete=Jn,Qn.prototype.get=qn,Qn.prototype.has=Xn,Qn.prototype.set=Kn;var et=Qn;function nt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],o=t.cache;if(o.has(a))return o.get(a);var f=e.apply(this,r);return t.cache=o.set(a,f)||o,f};return t.cache=new(nt.Cache||et),t}nt.Cache=et;var tt=nt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,ot=function(e){var n=tt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(rt,(function(e,t,r,a){n.push(r?a.replace(at,"$1"):t||e)})),n}));var ft=function(e,n){return c(e)?e:An(e,n)?[e]:ot(_(e))};var ct=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var ut=function(e,n){for(var t=0,r=(n=ft(n,e)).length;null!=e&&t<r;)e=e[ct(n[t++])];return t&&t==r?e:void 0};var it=function(e,n,t){var r=null==e?void 0:ut(e,n);return void 0===r?t:r},dt={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function lt(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Te(e," ");if(2!==Cn(n))return e;var t=n[0].trim();t=ge(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=it(dt,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}function st(e){return!(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)||""===e)}function pt(e){var n=!1;return st(e)?n=!isNaN(Number(e)):function(e){return"[object Number]"===Object.prototype.toString.call(e)}(e)&&(n=!0),n}var ht={props:{borderRadius:{type:Number,default:0},headerLeft:{type:Number,default:20},headerOpacity:{type:Number,default:.8},headerText:{type:String,default:""},headerTextColor:{type:String,default:"white"},headerBackgroundColor:{type:String,default:"teal lighten-2"},contentPadding:{type:[Number,String],default:20},contentBackgroundColor:{type:String,default:"white"},borderShadow:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{useHeaderTextColor:function(){return lt(this.headerTextColor)},useHeaderBackgroundColor:function(){return lt(this.headerBackgroundColor)},useContentBackgroundColor:function(){return lt(this.contentBackgroundColor)},useContentPadding:function(){return pt(this.contentPadding)?"".concat(this.contentPadding,"px"):this.contentPadding}},methods:{}};var gt=function(e,n,t,r,a,o,f,c,u,i){"boolean"!=typeof f&&(u=c,c=f,f=!1);var d,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),r&&(l._scopeId=r),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):n&&(d=f?function(){n.call(this,i(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return t},bt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var vt=document.head||document.getElementsByTagName("head")[0],yt={};var xt=function(e){return function(e,n){return function(e,n){var t=bt?n.media||"default":e,r=yt[t]||(yt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),vt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,f=document.createTextNode(a),c=r.element.childNodes;c[o]&&r.element.removeChild(c[o]),c.length?r.element.insertBefore(f,c[o]):r.element.appendChild(f)}}}(e,n)}};const mt=ht;var kt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"padding-top":"20px"}},[t("div",{class:{trans:!0,shadow:e.borderShadow},style:"position:relative; background-color:"+e.useContentBackgroundColor+"; border-radius:"+e.borderRadius+"px;"},[t("div",{staticClass:"shadow-header",style:"position:absolute; top:0px; left:"+e.headerLeft+"px; transform:translateY(-50%); padding:5px 10px; background-color:"+e.useHeaderBackgroundColor+"; color:"+e.useHeaderTextColor+"; opacity:"+e.headerOpacity+";"},[e._v("\n            "+e._s(e.headerText)+"\n        ")]),e._v(" "),t("div",{style:"padding:"+e.useContentPadding+";"},[e._t("default")],2)])])};kt._withStripped=!0;return gt({render:kt,staticRenderFns:[]},(function(e){e&&e("data-v-116dc4fc_0",{source:"\n.trans[data-v-116dc4fc] {\r\n    transition: all 0.5s;\n}\n.shadow[data-v-116dc4fc] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow-header[data-v-116dc4fc] {\r\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WPanelBulge.vue"],names:[],mappings:";AA4HA;IACA,oBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,4HAAA;AACA",file:"WPanelBulge.vue",sourcesContent:["<template>\r\n    <div style=\"padding-top:20px;\">\r\n        <div :class=\"{'trans':true,'shadow':borderShadow}\" :style=\"`position:relative; background-color:${useContentBackgroundColor}; border-radius:${borderRadius}px;`\">\r\n\r\n            <div\r\n                class=\"shadow-header\"\r\n                :style=\"`position:absolute; top:0px; left:${headerLeft}px; transform:translateY(-50%); padding:5px 10px; background-color:${useHeaderBackgroundColor}; color:${useHeaderTextColor}; opacity:${headerOpacity};`\">\r\n                {{headerText}}\r\n            </div>\r\n\r\n            <div :style=\"`padding:${useContentPadding};`\">\r\n                <slot></slot>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport isnum from 'wsemi/src/isnum.mjs'\r\n\r\n/**\r\n * @vue-prop {Number} [borderRadius=0] 輸入圓角寬度，單位為px，預設0\r\n * @vue-prop {Number} [headerLeft=20] 輸入標題離左側邊界長度，單位為px，預設20\r\n * @vue-prop {Number} [headerOpacity=0.8] 輸入標題區塊透明度，預設0.8\r\n * @vue-prop {String} [headerText=''] 輸入標題文字字串，預設''\r\n * @vue-prop {String} [headerTextColor='white'] 輸入標題文字顏色字串，預設'white'\r\n * @vue-prop {String} [headerBackgroundColor='teal lighten-2'] 輸入標題背景顏色字串，預設'teal lighten-2'\r\n * @vue-prop {Number|String} [contentPadding=20] 輸入內容區塊邊寬長度數字或字串，若輸入數字則單位為px，預設20，若輸入字串則需自己添加單位\r\n * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        headerLeft: {\r\n            type: Number,\r\n            default: 20,\r\n        },\r\n        headerOpacity: {\r\n            type: Number,\r\n            default: 0.8,\r\n        },\r\n        headerText: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        headerTextColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        headerBackgroundColor: {\r\n            type: String,\r\n            default: 'teal lighten-2',\r\n        },\r\n        contentPadding: {\r\n            type: [Number, String],\r\n            default: 20,\r\n        },\r\n        contentBackgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useHeaderTextColor: function() {\r\n            //console.log('computed useHeaderTextColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.headerTextColor)\r\n        },\r\n\r\n        useHeaderBackgroundColor: function() {\r\n            //console.log('computed useHeaderBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.headerBackgroundColor)\r\n        },\r\n\r\n        useContentBackgroundColor: function() {\r\n            //console.log('computed useContentBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.contentBackgroundColor)\r\n        },\r\n\r\n        useContentPadding: function() {\r\n            //console.log('computed useContentPadding')\r\n\r\n            let vo = this\r\n\r\n            if (isnum(vo.contentPadding)) {\r\n                return `${vo.contentPadding}px`\r\n            }\r\n            else {\r\n                return vo.contentPadding\r\n            }\r\n        },\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.trans {\r\n    transition: all 0.5s;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow-header {\r\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n</style>\r\n"]},media:void 0})}),mt,"data-v-116dc4fc",!1,void 0,xt,void 0)}));
//# sourceMappingURL=w-panel-bulge.umd.js.map
