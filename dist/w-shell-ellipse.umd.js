/*!
 * w-shell-ellipse v1.3.12
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-shell-ellipse"]=n()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n){return e(n={exports:{}},n.exports),n.exports}var r=n((function(e){function n(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(r)}e.exports=n})),t="object"==r(e)&&e&&e.Object===Object&&e,o="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=t||o||Function("return this")(),i=a.Symbol;var c=function(e,n){for(var r=-1,t=null==e?0:e.length,o=Array(t);++r<t;)o[r]=n(e[r],r,e);return o},f=Array.isArray,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,s=i?i.toStringTag:void 0;var p=function(e){var n=u.call(e,s),r=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=d.call(e);return t&&(n?e[s]=r:delete e[s]),o},g=Object.prototype.toString;var h=function(e){return g.call(e)},v=i?i.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?p(e):h(e)};var y=function(e){return null!=e&&"object"==r(e)};var m=function(e){return"symbol"==r(e)||y(e)&&"[object Symbol]"==b(e)},x=i?i.prototype:void 0,k=x?x.toString:void 0;var S=function e(n){if("string"==typeof n)return n;if(f(n))return c(n,e)+"";if(m(n))return k?k.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var _=function(e){return null==e?"":S(e)};var C=function(e,n,r){var t=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var a=Array(o);++t<o;)a[t]=e[t+n];return a};var I=function(e,n,r){var t=e.length;return r=void 0===r?t:r,!n&&r>=t?e:C(e,n,r)},w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return w.test(e)};var j=function(e){return e.split("")},T="[\\ud800-\\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",z="\\ud83c[\\udffb-\\udfff]",E="[^\\ud800-\\udfff]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",B="(?:"+O+"|"+z+")"+"?",P="[\\ufe0e\\ufe0f]?"+B+("(?:\\u200d(?:"+[E,F,R].join("|")+")[\\ufe0e\\ufe0f]?"+B+")*"),$="(?:"+[E+O+"?",O,F,R,T].join("|")+")",N=RegExp(z+"(?="+z+")|"+$+P,"g");var U=function(e){return e.match(N)||[]};var L=function(e){return A(e)?U(e):j(e)};var D=function(e){return function(n){n=_(n);var r=A(n)?L(n):void 0,t=r?r[0]:n.charAt(0),o=r?I(r,1).join(""):n.slice(1);return t[e]()+o}}("toUpperCase");var W=function(e){return D(_(e).toLowerCase())};var Z=function(e,n,r,t){var o=-1,a=null==e?0:e.length;for(t&&a&&(r=e[++o]);++o<a;)r=n(r,e[o],o,e);return r};var M=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),G=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,V=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Y=function(e){return(e=_(e))&&e.replace(G,M).replace(V,"")},J=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var q=function(e){return e.match(J)||[]},H=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var X=function(e){return H.test(e)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",ne="[\\u2700-\\u27bf]",re="[a-z\\xdf-\\xf6\\xf8-\\xff]",te="[^\\ud800-\\udfff"+K+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",oe="(?:\\ud83c[\\udde6-\\uddff]){2}",ae="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ce="(?:"+re+"|"+te+")",fe="(?:"+ie+"|"+te+")",le="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ue="[\\ufe0e\\ufe0f]?"+le+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",oe,ae].join("|")+")[\\ufe0e\\ufe0f]?"+le+")*"),de="(?:"+[ne,oe,ae].join("|")+")"+ue,se=RegExp([ie+"?"+re+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,ie,"$"].join("|")+")",fe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,ie+ce,"$"].join("|")+")",ie+"?"+ce+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ie+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,de].join("|"),"g");var pe=function(e){return e.match(se)||[]};var ge=function(e,n,r){return e=_(e),void 0===(n=r?void 0:n)?X(e)?pe(e):q(e):e.match(n)||[]},he=RegExp("['’]","g");var ve=function(e){return function(n){return Z(ge(Y(n).replace(he,"")),e,"")}}((function(e,n,r){return n=n.toLowerCase(),e+(r?W(n):n)}));var be=function(e,n){return e===n||e!=e&&n!=n};var ye=function(e){var n=r(e);return null!=e&&("object"==n||"function"==n)};var me=function(e){if(!ye(e))return!1;var n=b(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ke=function(e){return null!=e&&xe(e.length)&&!me(e)},Se=/^(?:0|[1-9]\d*)$/;var _e=function(e,n){var t=r(e);return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Se.test(e))&&e>-1&&e%1==0&&e<n};var Ce=function(e,n,t){if(!ye(t))return!1;var o=r(n);return!!("number"==o?ke(t)&&_e(n,t.length):"string"==o&&n in t)&&be(t[n],e)};var Ie=function(e){return y(e)&&"[object RegExp]"==b(e)};var we=function(e){return function(n){return e(n)}},Ae=n((function(e,n){var r=n&&!n.nodeType&&n,o=r&&e&&!e.nodeType&&e,a=o&&o.exports===r&&t.process,i=function(){try{var e=o&&o.require&&o.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i})),je=Ae&&Ae.isRegExp,Te=je?we(je):Ie;var Oe=function(e,n,r){return r&&"number"!=typeof r&&Ce(e,n,r)&&(n=r=void 0),(r=void 0===r?4294967295:r>>>0)?(e=_(e))&&("string"==typeof n||null!=n&&!Te(n))&&!(n=S(n))&&A(e)?I(L(e),0,r):e.split(n,r):[]},ze=Object.prototype;var Ee=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||ze)};var Fe=function(e,n){return function(r){return e(n(r))}}(Object.keys,Object),Re=Object.prototype.hasOwnProperty;var Be,Pe=function(e){if(!Ee(e))return Fe(e);var n=[];for(var r in Object(e))Re.call(e,r)&&"constructor"!=r&&n.push(r);return n},$e=a["__core-js_shared__"],Ne=(Be=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var Ue=function(e){return!!Ne&&Ne in e},Le=Function.prototype.toString;var De=function(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},We=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Me=Object.prototype,Ge=Ze.toString,Ve=Me.hasOwnProperty,Ye=RegExp("^"+Ge.call(Ve).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Je=function(e){return!(!ye(e)||Ue(e))&&(me(e)?Ye:We).test(De(e))};var qe=function(e,n){return null==e?void 0:e[n]};var He=function(e,n){var r=qe(e,n);return Je(r)?r:void 0},Xe=He(a,"DataView"),Ke=He(a,"Map"),Qe=He(a,"Promise"),en=He(a,"Set"),nn=He(a,"WeakMap"),rn=De(Xe),tn=De(Ke),on=De(Qe),an=De(en),cn=De(nn),fn=b;(Xe&&"[object DataView]"!=fn(new Xe(new ArrayBuffer(1)))||Ke&&"[object Map]"!=fn(new Ke)||Qe&&"[object Promise]"!=fn(Qe.resolve())||en&&"[object Set]"!=fn(new en)||nn&&"[object WeakMap]"!=fn(new nn))&&(fn=function(e){var n=b(e),r="[object Object]"==n?e.constructor:void 0,t=r?De(r):"";if(t)switch(t){case rn:return"[object DataView]";case tn:return"[object Map]";case on:return"[object Promise]";case an:return"[object Set]";case cn:return"[object WeakMap]"}return n});var ln=fn;var un=function(e){return"string"==typeof e||!f(e)&&y(e)&&"[object String]"==b(e)};var dn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),sn="[\\ud800-\\udfff]",pn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",gn="\\ud83c[\\udffb-\\udfff]",hn="[^\\ud800-\\udfff]",vn="(?:\\ud83c[\\udde6-\\uddff]){2}",bn="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="(?:"+pn+"|"+gn+")"+"?",mn="[\\ufe0e\\ufe0f]?"+yn+("(?:\\u200d(?:"+[hn,vn,bn].join("|")+")[\\ufe0e\\ufe0f]?"+yn+")*"),xn="(?:"+[hn+pn+"?",pn,vn,bn,sn].join("|")+")",kn=RegExp(gn+"(?="+gn+")|"+xn+mn,"g");var Sn=function(e){for(var n=kn.lastIndex=0;kn.test(e);)++n;return n};var _n=function(e){return A(e)?Sn(e):dn(e)};var Cn=function(e){if(null==e)return 0;if(ke(e))return un(e)?_n(e):e.length;var n=ln(e);return"[object Map]"==n||"[object Set]"==n?e.size:Pe(e).length},In=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var An=function(e,n){if(f(e))return!1;var t=r(e);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!m(e))||(wn.test(e)||!In.test(e)||null!=n&&e in Object(n))},jn=He(Object,"create");var Tn=function(){this.__data__=jn?jn(null):{},this.size=0};var On=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},zn=Object.prototype.hasOwnProperty;var En=function(e){var n=this.__data__;if(jn){var r=n[e];return"__lodash_hash_undefined__"===r?void 0:r}return zn.call(n,e)?n[e]:void 0},Fn=Object.prototype.hasOwnProperty;var Rn=function(e){var n=this.__data__;return jn?void 0!==n[e]:Fn.call(n,e)};var Bn=function(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=jn&&void 0===n?"__lodash_hash_undefined__":n,this};function Pn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Pn.prototype.clear=Tn,Pn.prototype.delete=On,Pn.prototype.get=En,Pn.prototype.has=Rn,Pn.prototype.set=Bn;var $n=Pn;var Nn=function(){this.__data__=[],this.size=0};var Un=function(e,n){for(var r=e.length;r--;)if(be(e[r][0],n))return r;return-1},Ln=Array.prototype.splice;var Dn=function(e){var n=this.__data__,r=Un(n,e);return!(r<0)&&(r==n.length-1?n.pop():Ln.call(n,r,1),--this.size,!0)};var Wn=function(e){var n=this.__data__,r=Un(n,e);return r<0?void 0:n[r][1]};var Zn=function(e){return Un(this.__data__,e)>-1};var Mn=function(e,n){var r=this.__data__,t=Un(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this};function Gn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Gn.prototype.clear=Nn,Gn.prototype.delete=Dn,Gn.prototype.get=Wn,Gn.prototype.has=Zn,Gn.prototype.set=Mn;var Vn=Gn;var Yn=function(){this.size=0,this.__data__={hash:new $n,map:new(Ke||Vn),string:new $n}};var Jn=function(e){var n=r(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var qn=function(e,n){var r=e.__data__;return Jn(n)?r["string"==typeof n?"string":"hash"]:r.map};var Hn=function(e){var n=qn(this,e).delete(e);return this.size-=n?1:0,n};var Xn=function(e){return qn(this,e).get(e)};var Kn=function(e){return qn(this,e).has(e)};var Qn=function(e,n){var r=qn(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this};function er(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}er.prototype.clear=Yn,er.prototype.delete=Hn,er.prototype.get=Xn,er.prototype.has=Kn,er.prototype.set=Qn;var nr=er;function rr(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var t=arguments,o=n?n.apply(this,t):t[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,t);return r.cache=a.set(o,i)||a,i};return r.cache=new(rr.Cache||nr),r}rr.Cache=nr;var tr=rr;var or=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ar=/\\(\\)?/g,ir=function(e){var n=tr(e,(function(e){return 500===r.size&&r.clear(),e})),r=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(or,(function(e,r,t,o){n.push(t?o.replace(ar,"$1"):r||e)})),n}));var cr=function(e,n){return f(e)?e:An(e,n)?[e]:ir(_(e))};var fr=function(e){if("string"==typeof e||m(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var lr=function(e,n){for(var r=0,t=(n=cr(n,e)).length;null!=e&&r<t;)e=e[fr(n[r++])];return r&&r==t?e:void 0};var ur=function(e,n,r){var t=null==e?void 0:lr(e,n);return void 0===t?r:t},dr={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function sr(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Oe(e," ");if(2!==Cn(n))return e;var r=n[0].trim();r=ve(r);var t=n[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var o=ur(dr,"default.".concat(r,".").concat(t),null);return null===o&&(o=e),o}var pr={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};function gr(e,n,r,t,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof r?r.options:r;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),t&&(d._scopeId=t),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,f(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):n&&(u=i?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),u)if(d.functional){var s=d.render;d.render=function(e,n){return u.call(n),s(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return r}var hr,vr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function br(e){return function(e,n){return function(e,n){var r=vr?n.media||"default":e,t=yr[r]||(yr[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),void 0===hr&&(hr=document.head||document.getElementsByTagName("head")[0]),hr.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(o),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var a=t.ids.size-1,i=document.createTextNode(o),c=t.element.childNodes;c[a]&&t.element.removeChild(c[a]),c.length?t.element.insertBefore(i,c[a]):t.element.appendChild(i)}}}(e,n)}}var yr={};const mr=pr;var xr=function(){var e=this,n=e.$createElement,r=e._self._c||n;return""!==e.icon?r("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[r("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};xr._withStripped=!0;const kr={components:{WIcon:gr({render:xr,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),mr,"data-v-5ea7e17f",!1,void 0,!1,br,void 0,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},backgroundColor:{type:String,default:"white"},backgroundColorFocus:{type:String,default:"white"},borderRadius:{type:Number,default:30},borderColor:{type:String,default:"white"},borderColorFocus:{type:String,default:"white"},borderShadow:{type:Boolean,default:!0},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useBackgroundColor:function(){var e={};return this.focusedTrans?e["background-color"]=sr(this.backgroundColorFocus):e["background-color"]=sr(this.backgroundColor),e},useBorder:function(){var e={};return this.focusedTrans?e.border="1px solid "+sr(this.borderColorFocus):e.border="1px solid "+sr(this.borderColor),e},useTitleColor:function(){var e={};return e.color=sr(this.titleColor),e},usePadding:function(){var e={};return this.small?e.padding="0px":e.padding="3px 6px",e},usePaddingSlot:function(){var e={"padding-top":"0px","padding-bottom":"0px","padding-left":"15px","padding-right":"15px"};return""!==this.leftIcon&&(e["padding-left"]="10px"),""!==this.rightIcon&&(e["padding-right"]="10px"),e}},methods:{clickIcon:function(e){var n=this;!1!==n.editable&&setTimeout((function(){n.$emit("click-"+e)}),1)}}};var Sr=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{changeParam:e.changeParam}},[r("div",{staticStyle:{position:"relative"}},[r("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n            "+e._s(e.title)+"\n        ")])]),e._v(" "),r("div",{class:{group:!0,shadow:e.borderShadow},style:[e.useBackgroundColor,e.useBorder,e.usePadding,{"border-radius":e.borderRadius+"px"},{opacity:e.editable?1:.6}]},[e.leftIcon?r("div",{staticStyle:{"margin-left":"5px",cursor:"pointer"},on:{click:function(n){return e.clickIcon("left")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on;return[r("div",e._g({attrs:{ShellEllipse:"leftIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:e.leftIcon,color:e.focusedTrans?e.leftIconColorFocus:e.leftIconColor}})],1)]}}],null,!1,4098432623)},[e._v(" "),r("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),r("div",{style:[{width:"100%"},e.usePaddingSlot]},[e._t("default")],2),e._v(" "),e.rightIcon?r("div",{staticStyle:{"margin-right":"5px",cursor:"pointer"},on:{click:function(n){return e.clickIcon("right")}}},[r("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on;return[r("div",e._g({attrs:{ShellEllipse:"rightIcon"}},Object.assign({},t)),[r("w-icon",{attrs:{icon:e.rightIcon,color:e.focusedTrans?e.rightIconColorFocus:e.rightIconColor}})],1)]}}],null,!1,264035119)},[e._v(" "),r("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])])};Sr._withStripped=!0;return gr({render:Sr,staticRenderFns:[]},(function(e){e&&e("data-v-7c729620_0",{source:"\n.group[data-v-7c729620] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\n.shadow[data-v-7c729620] {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-7c729620]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WShellEllipse.vue"],names:[],mappings:";AAqSA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA;AACA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WShellEllipse.vue",sourcesContent:["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <div style=\"position:relative;\">\r\n\r\n            <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                {{title}}\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div\r\n            :class=\"{'group':true,'shadow':borderShadow}\"\r\n            :style=\"[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]\"\r\n        >\r\n\r\n            <div style=\"margin-left:5px; cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseLeft }\">\r\n                        <div ShellEllipse=\"leftIcon\" v-on=\"{...ttShellEllipseLeft}\">\r\n                            <w-icon\r\n                                :icon=\"leftIcon\"\r\n                                :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{leftIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n            <div :style=\"[{'width':'100%'},usePaddingSlot]\">\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-right:5px; cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n                <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                    <template v-slot:activator=\"{ on: ttShellEllipseRight }\">\r\n                        <div ShellEllipse=\"rightIcon\" v-on=\"{...ttShellEllipseRight}\">\r\n                            <w-icon\r\n                                :icon=\"rightIcon\"\r\n                                :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                            ></w-icon>\r\n                        </div>\r\n                    </template>\r\n\r\n                    <span>{{rightIconTooltip}}</span>\r\n\r\n                </v-tooltip>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30\r\n * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'\r\n * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'\r\n * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'\r\n * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        backgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        backgroundColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 30,\r\n        },\r\n        borderColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderColorFocus: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useBackgroundColor: function() {\r\n            //console.log('computed useBackgroundColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['background-color'] = color2hex(vo.backgroundColorFocus)\r\n            }\r\n            else {\r\n                s['background-color'] = color2hex(vo.backgroundColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useBorder: function() {\r\n            //console.log('computed useBorder')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.focusedTrans) {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColorFocus)\r\n            }\r\n            else {\r\n                s['border'] = '1px solid ' + color2hex(vo.borderColor)\r\n            }\r\n            return s\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '15px'\r\n            s['padding-right'] = '15px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.shadow {\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),kr,"data-v-7c729620",!1,void 0,!1,br,void 0,void 0)}));
//# sourceMappingURL=w-shell-ellipse.umd.js.map
