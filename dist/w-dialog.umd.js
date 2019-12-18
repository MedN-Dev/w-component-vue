/*!
 * w-dialog v1.2.45
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-dialog"]=e()}(this,(function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==n(e)&&e&&e.Object===Object&&e,r="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,a=t||r||Function("return this")(),o=a.Symbol;var i=function(n,e){for(var t=-1,r=null==n?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a},c=Array.isArray,f=Object.prototype,u=f.hasOwnProperty,l=f.toString,d=o?o.toStringTag:void 0;var s=function(n){var e=u.call(n,d),t=n[d];try{n[d]=void 0;var r=!0}catch(n){}var a=l.call(n);return r&&(e?n[d]=t:delete n[d]),a},h=Object.prototype.toString;var p=function(n){return h.call(n)},v="[object Null]",g="[object Undefined]",b=o?o.toStringTag:void 0;var y=function(n){return null==n?void 0===n?g:v:b&&b in Object(n)?s(n):p(n)};var m=function(e){return null!=e&&"object"==n(e)},_="[object Symbol]";var k=function(e){return"symbol"==n(e)||m(e)&&y(e)==_},x=1/0,S=o?o.prototype:void 0,w=S?S.toString:void 0;var C=function n(e){if("string"==typeof e)return e;if(c(e))return i(e,n)+"";if(k(e))return w?w.call(e):"";var t=e+"";return"0"==t&&1/e==-x?"-0":t};var j=function(n){return null==n?"":C(n)};var z=function(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++r<a;)o[r]=n[r+e];return o};var O=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:z(n,e,t)},T=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(n){return T.test(n)};var B=function(n){return n.split("")},E="[\\ud800-\\udfff]",L="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",I="[^\\ud800-\\udfff]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",H="(?:"+L+"|"+R+")"+"?",M="[\\ufe0e\\ufe0f]?"+H+("(?:\\u200d(?:"+[I,$,V].join("|")+")[\\ufe0e\\ufe0f]?"+H+")*"),N="(?:"+[I+L+"?",L,$,V,E].join("|")+")",U=RegExp(R+"(?="+R+")|"+N+M,"g");var Z=function(n){return n.match(U)||[]};var P=function(n){return A(n)?Z(n):B(n)};var W=function(n){return function(e){e=j(e);var t=A(e)?P(e):void 0,r=t?t[0]:e.charAt(0),a=t?O(t,1).join(""):e.slice(1);return r[n]()+a}}("toUpperCase");var D=function(n){return W(j(n).toLowerCase())};var F=function(n,e,t,r){var a=-1,o=null==n?0:n.length;for(r&&o&&(t=n[++a]);++a<o;)t=e(t,n[a],a,n);return t};var G=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var X=function(n){return(n=j(n))&&n.replace(J,G).replace(Y,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(n){return n.match(q)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var nn=function(n){return Q.test(n)},en="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tn="["+en+"]",rn="\\d+",an="[\\u2700-\\u27bf]",on="[a-z\\xdf-\\xf6\\xf8-\\xff]",cn="[^\\ud800-\\udfff"+en+rn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",fn="(?:\\ud83c[\\udde6-\\uddff]){2}",un="[\\ud800-\\udbff][\\udc00-\\udfff]",ln="[A-Z\\xc0-\\xd6\\xd8-\\xde]",dn="(?:"+on+"|"+cn+")",sn="(?:"+ln+"|"+cn+")",hn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",pn="[\\ufe0e\\ufe0f]?"+hn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",fn,un].join("|")+")[\\ufe0e\\ufe0f]?"+hn+")*"),vn="(?:"+[an,fn,un].join("|")+")"+pn,gn=RegExp([ln+"?"+on+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[tn,ln,"$"].join("|")+")",sn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[tn,ln+dn,"$"].join("|")+")",ln+"?"+dn+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ln+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rn,vn].join("|"),"g");var bn=function(n){return n.match(gn)||[]};var yn=function(n,e,t){return n=j(n),void 0===(e=t?void 0:e)?nn(n)?bn(n):K(n):n.match(e)||[]},mn=RegExp("['’]","g");var _n=function(n){return function(e){return F(yn(X(e).replace(mn,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?D(e):e)}));var kn=function(n,e){return n===e||n!=n&&e!=e};var xn=function(e){var t=n(e);return null!=e&&("object"==t||"function"==t)},Sn="[object AsyncFunction]",wn="[object Function]",Cn="[object GeneratorFunction]",jn="[object Proxy]";var zn=function(n){if(!xn(n))return!1;var e=y(n);return e==wn||e==Cn||e==Sn||e==jn},On=9007199254740991;var Tn=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=On};var An=function(n){return null!=n&&Tn(n.length)&&!zn(n)},Bn=9007199254740991,En=/^(?:0|[1-9]\d*)$/;var Ln=function(e,t){var r=n(e);return!!(t=null==t?Bn:t)&&("number"==r||"symbol"!=r&&En.test(e))&&e>-1&&e%1==0&&e<t};var Rn=function(e,t,r){if(!xn(r))return!1;var a=n(t);return!!("number"==a?An(r)&&Ln(t,r.length):"string"==a&&t in r)&&kn(r[t],e)},In="[object RegExp]";var $n=function(n){return m(n)&&y(n)==In};var Vn=function(n){return function(e){return n(e)}},Hn=function(n,e){return n(e={exports:{}},e.exports),e.exports}((function(n,e){var r=e&&!e.nodeType&&e,a=r&&n&&!n.nodeType&&n,o=a&&a.exports===r&&t.process,i=function(){try{var n=a&&a.require&&a.require("util").types;return n||o&&o.binding&&o.binding("util")}catch(n){}}();n.exports=i})),Mn=Hn&&Hn.isRegExp,Nn=Mn?Vn(Mn):$n,Un=4294967295;var Zn=function(n,e,t){return t&&"number"!=typeof t&&Rn(n,e,t)&&(e=t=void 0),(t=void 0===t?Un:t>>>0)?(n=j(n))&&("string"==typeof e||null!=e&&!Nn(e))&&!(e=C(e))&&A(n)?O(P(n),0,t):n.split(e,t):[]},Pn=Object.prototype;var Wn=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Pn)};var Dn=function(n,e){return function(t){return n(e(t))}}(Object.keys,Object),Fn=Object.prototype.hasOwnProperty;var Gn,Jn=function(n){if(!Wn(n))return Dn(n);var e=[];for(var t in Object(n))Fn.call(n,t)&&"constructor"!=t&&e.push(t);return e},Yn=a["__core-js_shared__"],Xn=(Gn=/[^.]+$/.exec(Yn&&Yn.keys&&Yn.keys.IE_PROTO||""))?"Symbol(src)_1."+Gn:"";var qn=function(n){return!!Xn&&Xn in n},Kn=Function.prototype.toString;var Qn=function(n){if(null!=n){try{return Kn.call(n)}catch(n){}try{return n+""}catch(n){}}return""},ne=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,re=ee.toString,ae=te.hasOwnProperty,oe=RegExp("^"+re.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(n){return!(!xn(n)||qn(n))&&(zn(n)?oe:ne).test(Qn(n))};var ce=function(n,e){return null==n?void 0:n[e]};var fe=function(n,e){var t=ce(n,e);return ie(t)?t:void 0},ue=fe(a,"DataView"),le=fe(a,"Map"),de=fe(a,"Promise"),se=fe(a,"Set"),he=fe(a,"WeakMap"),pe=Qn(ue),ve=Qn(le),ge=Qn(de),be=Qn(se),ye=Qn(he),me=y;(ue&&"[object DataView]"!=me(new ue(new ArrayBuffer(1)))||le&&"[object Map]"!=me(new le)||de&&"[object Promise]"!=me(de.resolve())||se&&"[object Set]"!=me(new se)||he&&"[object WeakMap]"!=me(new he))&&(me=function(n){var e=y(n),t="[object Object]"==e?n.constructor:void 0,r=t?Qn(t):"";if(r)switch(r){case pe:return"[object DataView]";case ve:return"[object Map]";case ge:return"[object Promise]";case be:return"[object Set]";case ye:return"[object WeakMap]"}return e});var _e=me,ke="[object String]";var xe=function(n){return"string"==typeof n||!c(n)&&m(n)&&y(n)==ke};var Se=function(n){return function(e){return null==e?void 0:e[n]}}("length"),we="[\\ud800-\\udfff]",Ce="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",je="\\ud83c[\\udffb-\\udfff]",ze="[^\\ud800-\\udfff]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="(?:"+Ce+"|"+je+")"+"?",Be="[\\ufe0e\\ufe0f]?"+Ae+("(?:\\u200d(?:"+[ze,Oe,Te].join("|")+")[\\ufe0e\\ufe0f]?"+Ae+")*"),Ee="(?:"+[ze+Ce+"?",Ce,Oe,Te,we].join("|")+")",Le=RegExp(je+"(?="+je+")|"+Ee+Be,"g");var Re=function(n){for(var e=Le.lastIndex=0;Le.test(n);)++e;return e};var Ie=function(n){return A(n)?Re(n):Se(n)},$e="[object Map]",Ve="[object Set]";var He=function(n){if(null==n)return 0;if(An(n))return xe(n)?Ie(n):n.length;var e=_e(n);return e==$e||e==Ve?n.size:Jn(n).length},Me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ne=/^\w*$/;var Ue=function(e,t){if(c(e))return!1;var r=n(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!k(e))||(Ne.test(e)||!Me.test(e)||null!=t&&e in Object(t))},Ze=fe(Object,"create");var Pe=function(){this.__data__=Ze?Ze(null):{},this.size=0};var We=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},De="__lodash_hash_undefined__",Fe=Object.prototype.hasOwnProperty;var Ge=function(n){var e=this.__data__;if(Ze){var t=e[n];return t===De?void 0:t}return Fe.call(e,n)?e[n]:void 0},Je=Object.prototype.hasOwnProperty;var Ye=function(n){var e=this.__data__;return Ze?void 0!==e[n]:Je.call(e,n)},Xe="__lodash_hash_undefined__";var qe=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ze&&void 0===e?Xe:e,this};function Ke(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Ke.prototype.clear=Pe,Ke.prototype.delete=We,Ke.prototype.get=Ge,Ke.prototype.has=Ye,Ke.prototype.set=qe;var Qe=Ke;var nt=function(){this.__data__=[],this.size=0};var et=function(n,e){for(var t=n.length;t--;)if(kn(n[t][0],e))return t;return-1},tt=Array.prototype.splice;var rt=function(n){var e=this.__data__,t=et(e,n);return!(t<0)&&(t==e.length-1?e.pop():tt.call(e,t,1),--this.size,!0)};var at=function(n){var e=this.__data__,t=et(e,n);return t<0?void 0:e[t][1]};var ot=function(n){return et(this.__data__,n)>-1};var it=function(n,e){var t=this.__data__,r=et(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function ct(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}ct.prototype.clear=nt,ct.prototype.delete=rt,ct.prototype.get=at,ct.prototype.has=ot,ct.prototype.set=it;var ft=ct;var ut=function(){this.size=0,this.__data__={hash:new Qe,map:new(le||ft),string:new Qe}};var lt=function(e){var t=n(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(n,e){var t=n.__data__;return lt(e)?t["string"==typeof e?"string":"hash"]:t.map};var st=function(n){var e=dt(this,n).delete(n);return this.size-=e?1:0,e};var ht=function(n){return dt(this,n).get(n)};var pt=function(n){return dt(this,n).has(n)};var vt=function(n,e){var t=dt(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function gt(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}gt.prototype.clear=ut,gt.prototype.delete=st,gt.prototype.get=ht,gt.prototype.has=pt,gt.prototype.set=vt;var bt=gt,yt="Expected a function";function mt(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError(yt);var t=function t(){var r=arguments,a=e?e.apply(this,r):r[0],o=t.cache;if(o.has(a))return o.get(a);var i=n.apply(this,r);return t.cache=o.set(a,i)||o,i};return t.cache=new(mt.Cache||bt),t}mt.Cache=bt;var _t=mt,kt=500;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/\\(\\)?/g,wt=function(n){var e=_t(n,(function(n){return t.size===kt&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(xt,(function(n,t,r,a){e.push(r?a.replace(St,"$1"):t||n)})),e}));var Ct=function(n,e){return c(n)?n:Ue(n,e)?[n]:wt(j(n))},jt=1/0;var zt=function(n){if("string"==typeof n||k(n))return n;var e=n+"";return"0"==e&&1/n==-jt?"-0":e};var Ot=function(n,e){for(var t=0,r=(e=Ct(e,n)).length;null!=n&&t<r;)n=n[zt(e[t++])];return t&&t==r?n:void 0};var Tt=function(n,e,t){var r=null==n?void 0:Ot(n,e);return void 0===r?t:r},At={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var Bt={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var n=this.size;return this.icon.indexOf("fa-")>=0?n-4:n},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var Et=function(n,e,t,r,a,o,i,c,f,u){"boolean"!=typeof i&&(f=c,c=i,i=!1);var l,d="function"==typeof t?t.options:t;if(n&&n.render&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0,a&&(d.functional=!0)),r&&(d._scopeId=r),o?(l=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,f(n)),n&&n._registeredComponents&&n._registeredComponents.add(o)},d._ssrRegister=l):e&&(l=i?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(n){e.call(this,c(n))}),l)if(d.functional){var s=d.render;d.render=function(n,e){return l.call(e),s(n,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,l):[l]}return t},Lt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Rt=document.head||document.getElementsByTagName("head")[0],It={};var $t=function(n){return function(n,e){return function(n,e){var t=Lt?e.media||"default":n,r=It[t]||(It[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),Rt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var o=r.ids.size-1,i=document.createTextNode(a),c=r.element.childNodes;c[o]&&r.element.removeChild(c[o]),c.length?r.element.insertBefore(i,c[o]):r.element.appendChild(i)}}}(n,e)}};const Vt=Bt;var Ht=function(){var n=this,e=n.$createElement,t=n._self._c||e;return""!==n.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:n.useStyle,attrs:{color:n.color,size:n.useSize}},[n._v("\n        "+n._s(n.useIcon)+"\n    ")])],1):n._e()};Ht._withStripped=!0;const Mt={components:{WIcon:Et({render:Ht,staticRenderFns:[]},(function(n){n&&n("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),Vt,"data-v-5ea7e17f",!1,void 0,$t,void 0)},props:{tooltip:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"grey darken-1"},backgroundColor:{type:String,default:"transparent"},shadow:{type:Boolean,default:!0},small:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{clickBtn:function(){var n=this;setTimeout((function(){n.$emit("click")}),1)}}};var Nt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{display:"inline-block"}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===n.tooltip},scopedSlots:n._u([{key:"activator",fn:function(e){var r=e.on;return["transparent"===n.backgroundColor?t("v-btn",n._g({attrs:{icon:"",large:!n.small,elevation:n.shadow?4:0,color:n.iconColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},r),[t("w-icon",{attrs:{icon:n.icon}})],1):t("v-btn",n._g({attrs:{fab:"",small:n.small,elevation:n.shadow?4:0,color:n.backgroundColor,loading:n.loading,disabled:!n.editable},on:{click:n.clickBtn}},r),[t("w-icon",{attrs:{icon:n.icon,color:n.iconColor}})],1)]}}])},[n._v(" "),t("span",[n._v(n._s(n.tooltip))])])],1)};Nt._withStripped=!0;const Ut={components:{WButtonCircle:Et({render:Nt,staticRenderFns:[]},(function(n){n&&n("data-v-15566baa_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WButtonCircle.vue"},media:void 0})}),Mt,"data-v-15566baa",!1,void 0,$t,void 0)},props:{show:{type:Boolean,default:!1},icon:{type:String,default:""},title:{type:String,default:""},headerIconColor:{type:String,default:"white"},headerTextColor:{type:String,default:"white"},headerBackgroundColor:{type:String,default:"light-blue darken-3"},headerBtns:{type:Array,default:function(){return[]}},hasSaveBtn:{type:Boolean,default:!0},saveBtnTooltip:{type:String,default:"儲存"},hasCloseBtn:{type:Boolean,default:!0},closeBtnTooltip:{type:String,default:"關閉"},widthMax:{type:Number,default:1e3}},data:function(){return{mdiCheckCircle:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",mdiClose:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",mdiCheckerboard:"M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z",showTrans:null,fullscreen:!1}},mounted:function(){},watch:{show:function(n){var e=this;!e.showTrans&&n&&setTimeout((function(){e.$refs.scrollZone.scrollTop=0}),1)}},computed:{changeParam:function(){return this.showTrans=this.show,""},useHeaderTextColor:function(){return function(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Zn(n," ");if(2!==He(e))return n;var t=e[0].trim();t=_n(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Tt(At,"default.".concat(t,".").concat(r),null);return null===a&&(a=n),a}(this.headerTextColor)}},methods:{changeSize:function(){var n=this;n.widthMax<=0?n.fullscreen=!0:n.widthMax>window.innerWidth?n.fullscreen=!0:n.fullscreen=!1},clickBtns:function(n){var e=this;setTimeout((function(){e.$emit("click-btns",n)}),1)},clickSave:function(){var n=this;setTimeout((function(){n.$emit("click-save")}),1)},clickClose:function(n){var e=this;e.hasCloseBtn&&n||(e.showTrans=!1,setTimeout((function(){e.$emit("update:show",e.showTrans),e.$emit("click-close")}),1))}}};var Zt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-dialog",{directives:[{name:"resize",rawName:"v-resize",value:n.changeSize,expression:"changeSize"}],attrs:{changeParam:n.changeParam,scrollable:"",persistent:!n.fullscreen&&n.hasCloseBtn,"max-width":n.widthMax,fullscreen:n.fullscreen},on:{"click:outside":function(e){return n.clickClose(!0)}},model:{value:n.showTrans,callback:function(e){n.showTrans=e},expression:"showTrans"}},[n.show?t("v-card",[t("v-toolbar",{attrs:{"max-height":"64",color:n.headerBackgroundColor}},[t("div",{staticStyle:{"margin-right":"10px"}},[t("v-icon",{attrs:{color:n.headerIconColor}},[n.icon?[n._v(n._s(n.icon))]:[n._v(n._s(n.mdiCheckerboard))]],2)],1),n._v(" "),t("v-toolbar-title",[t("span",{style:"color:"+n.useHeaderTextColor},[n._v(n._s(n.title))])]),n._v(" "),n._t("headerLeft"),n._v(" "),t("v-spacer"),n._v(" "),n._t("headerRight"),n._v(" "),n._l(n.headerBtns,(function(e,r){return[t("WButtonCircle",{key:r,staticStyle:{"margin-left":"5px"},attrs:{icon:e.icon,shadow:!1,iconColor:n.headerIconColor,tooltip:e.tooltip},on:{click:function(t){return n.clickBtns(e.evName)}}})]})),n._v(" "),n.hasSaveBtn?[t("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:n.mdiCheckCircle,shadow:!1,iconColor:n.headerIconColor,tooltip:n.saveBtnTooltip},on:{click:function(e){return n.clickSave()}}})]:n._e(),n._v(" "),n.hasCloseBtn?[t("WButtonCircle",{staticStyle:{"margin-left":"5px"},attrs:{icon:n.mdiClose,shadow:!1,iconColor:n.headerIconColor,tooltip:n.closeBtnTooltip},on:{click:function(e){return n.clickClose(!1)}}})]:n._e()],2),n._v(" "),t("v-card-text",{ref:"scrollZone",staticStyle:{padding:"0px"}},[n._t("content")],2)],1):n._e()],1)};Zt._withStripped=!0;return Et({render:Zt,staticRenderFns:[]},(function(n){n&&n("data-v-58a98c5f_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDialog.vue"},media:void 0})}),Ut,"data-v-58a98c5f",!1,void 0,$t,void 0)}));
//# sourceMappingURL=w-dialog.umd.js.map
