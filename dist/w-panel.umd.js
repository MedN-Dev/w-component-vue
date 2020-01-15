/*!
 * w-panel v1.3.2
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-panel"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="object"==e(n)&&n&&n.Object===Object&&n,t="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=r||t||Function("return this")(),o=a.Symbol;var f=function(e,n){for(var r=-1,t=null==e?0:e.length,a=Array(t);++r<t;)a[r]=n(e[r],r,e);return a},c=Array.isArray,i=Object.prototype,u=i.hasOwnProperty,d=i.toString,l=o?o.toStringTag:void 0;var s=function(e){var n=u.call(e,l),r=e[l];try{e[l]=void 0;var t=!0}catch(e){}var a=d.call(e);return t&&(n?e[l]=r:delete e[l]),a},p=Object.prototype.toString;var h=function(e){return p.call(e)},b=o?o.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?s(e):h(e)};var v=function(n){return null!=n&&"object"==e(n)};var y=function(n){return"symbol"==e(n)||v(n)&&"[object Symbol]"==g(n)},x=o?o.prototype:void 0,m=x?x.toString:void 0;var k=function e(n){if("string"==typeof n)return n;if(c(n))return f(n,e)+"";if(y(n))return m?m.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var _=function(e){return null==e?"":k(e)};var S=function(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(r=r>a?a:r)<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(a);++t<a;)o[t]=e[t+n];return o};var j=function(e,n,r){var t=e.length;return r=void 0===r?t:r,!n&&r>=t?e:S(e,n,r)},w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return w.test(e)};var C=function(e){return e.split("")},R="[\\ud800-\\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",E="\\ud83c[\\udffb-\\udfff]",$="[^\\ud800-\\udfff]",B="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",T="(?:"+O+"|"+E+")"+"?",F="[\\ufe0e\\ufe0f]?"+T+("(?:\\u200d(?:"+[$,B,z].join("|")+")[\\ufe0e\\ufe0f]?"+T+")*"),N="(?:"+[$+O+"?",O,B,z,R].join("|")+")",P=RegExp(E+"(?="+E+")|"+N+F,"g");var I=function(e){return e.match(P)||[]};var U=function(e){return A(e)?I(e):C(e)};var H=function(e){return function(n){n=_(n);var r=A(n)?U(n):void 0,t=r?r[0]:n.charAt(0),a=r?j(r,1).join(""):n.slice(1);return t[e]()+a}}("toUpperCase");var L=function(e){return H(_(e).toLowerCase())};var D=function(e,n,r,t){var a=-1,o=null==e?0:e.length;for(t&&o&&(r=e[++a]);++a<o;)r=n(r,e[a],a,e);return r};var Z=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),M=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(e){return(e=_(e))&&e.replace(M,Z).replace(G,"")},W=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(e){return e.match(W)||[]},Y=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var q=function(e){return Y.test(e)},X="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="["+X+"]",Q="\\d+",ee="[\\u2700-\\u27bf]",ne="[a-z\\xdf-\\xf6\\xf8-\\xff]",re="[^\\ud800-\\udfff"+X+Q+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",ae="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="[A-Z\\xc0-\\xd6\\xd8-\\xde]",fe="(?:"+ne+"|"+re+")",ce="(?:"+oe+"|"+re+")",ie="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ue="[\\ufe0e\\ufe0f]?"+ie+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",te,ae].join("|")+")[\\ufe0e\\ufe0f]?"+ie+")*"),de="(?:"+[ee,te,ae].join("|")+")"+ue,le=RegExp([oe+"?"+ne+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[K,oe,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[K,oe+fe,"$"].join("|")+")",oe+"?"+fe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",oe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Q,de].join("|"),"g");var se=function(e){return e.match(le)||[]};var pe=function(e,n,r){return e=_(e),void 0===(n=r?void 0:n)?q(e)?se(e):J(e):e.match(n)||[]},he=RegExp("['’]","g");var be=function(e){return function(n){return D(pe(V(n).replace(he,"")),e,"")}}((function(e,n,r){return n=n.toLowerCase(),e+(r?L(n):n)}));var ge=function(e,n){return e===n||e!=e&&n!=n};var ve=function(n){var r=e(n);return null!=n&&("object"==r||"function"==r)};var ye=function(e){if(!ve(e))return!1;var n=g(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var me=function(e){return null!=e&&xe(e.length)&&!ye(e)},ke=/^(?:0|[1-9]\d*)$/;var _e=function(n,r){var t=e(n);return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ke.test(n))&&n>-1&&n%1==0&&n<r};var Se=function(n,r,t){if(!ve(t))return!1;var a=e(r);return!!("number"==a?me(t)&&_e(r,t.length):"string"==a&&r in t)&&ge(t[r],n)};var je=function(e){return v(e)&&"[object RegExp]"==g(e)};var we=function(e){return function(n){return e(n)}},Ae=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,o=a&&a.exports===t&&r.process,f=function(){try{var e=a&&a.require&&a.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=f})),Ce=Ae&&Ae.isRegExp,Re=Ce?we(Ce):je;var Oe=function(e,n,r){return r&&"number"!=typeof r&&Se(e,n,r)&&(n=r=void 0),(r=void 0===r?4294967295:r>>>0)?(e=_(e))&&("string"==typeof n||null!=n&&!Re(n))&&!(n=k(n))&&A(e)?j(U(e),0,r):e.split(n,r):[]},Ee=Object.prototype;var $e=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Ee)};var Be=function(e,n){return function(r){return e(n(r))}}(Object.keys,Object),ze=Object.prototype.hasOwnProperty;var Te,Fe=function(e){if(!$e(e))return Be(e);var n=[];for(var r in Object(e))ze.call(e,r)&&"constructor"!=r&&n.push(r);return n},Ne=a["__core-js_shared__"],Pe=(Te=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||""))?"Symbol(src)_1."+Te:"";var Ie=function(e){return!!Pe&&Pe in e},Ue=Function.prototype.toString;var He=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Le=/^\[object .+?Constructor\]$/,De=Function.prototype,Ze=Object.prototype,Me=De.toString,Ge=Ze.hasOwnProperty,Ve=RegExp("^"+Me.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var We=function(e){return!(!ve(e)||Ie(e))&&(ye(e)?Ve:Le).test(He(e))};var Je=function(e,n){return null==e?void 0:e[n]};var Ye=function(e,n){var r=Je(e,n);return We(r)?r:void 0},qe=Ye(a,"DataView"),Xe=Ye(a,"Map"),Ke=Ye(a,"Promise"),Qe=Ye(a,"Set"),en=Ye(a,"WeakMap"),nn=He(qe),rn=He(Xe),tn=He(Ke),an=He(Qe),on=He(en),fn=g;(qe&&"[object DataView]"!=fn(new qe(new ArrayBuffer(1)))||Xe&&"[object Map]"!=fn(new Xe)||Ke&&"[object Promise]"!=fn(Ke.resolve())||Qe&&"[object Set]"!=fn(new Qe)||en&&"[object WeakMap]"!=fn(new en))&&(fn=function(e){var n=g(e),r="[object Object]"==n?e.constructor:void 0,t=r?He(r):"";if(t)switch(t){case nn:return"[object DataView]";case rn:return"[object Map]";case tn:return"[object Promise]";case an:return"[object Set]";case on:return"[object WeakMap]"}return n});var cn=fn;var un=function(e){return"string"==typeof e||!c(e)&&v(e)&&"[object String]"==g(e)};var dn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),ln="[\\ud800-\\udfff]",sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",pn="\\ud83c[\\udffb-\\udfff]",hn="[^\\ud800-\\udfff]",bn="(?:\\ud83c[\\udde6-\\uddff]){2}",gn="[\\ud800-\\udbff][\\udc00-\\udfff]",vn="(?:"+sn+"|"+pn+")"+"?",yn="[\\ufe0e\\ufe0f]?"+vn+("(?:\\u200d(?:"+[hn,bn,gn].join("|")+")[\\ufe0e\\ufe0f]?"+vn+")*"),xn="(?:"+[hn+sn+"?",sn,bn,gn,ln].join("|")+")",mn=RegExp(pn+"(?="+pn+")|"+xn+yn,"g");var kn=function(e){for(var n=mn.lastIndex=0;mn.test(e);)++n;return n};var _n=function(e){return A(e)?kn(e):dn(e)};var Sn=function(e){if(null==e)return 0;if(me(e))return un(e)?_n(e):e.length;var n=cn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Fe(e).length},jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var An=function(n,r){if(c(n))return!1;var t=e(n);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!y(n))||(wn.test(n)||!jn.test(n)||null!=r&&n in Object(r))},Cn=Ye(Object,"create");var Rn=function(){this.__data__=Cn?Cn(null):{},this.size=0};var On=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},En=Object.prototype.hasOwnProperty;var $n=function(e){var n=this.__data__;if(Cn){var r=n[e];return"__lodash_hash_undefined__"===r?void 0:r}return En.call(n,e)?n[e]:void 0},Bn=Object.prototype.hasOwnProperty;var zn=function(e){var n=this.__data__;return Cn?void 0!==n[e]:Bn.call(n,e)};var Tn=function(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Cn&&void 0===n?"__lodash_hash_undefined__":n,this};function Fn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Fn.prototype.clear=Rn,Fn.prototype.delete=On,Fn.prototype.get=$n,Fn.prototype.has=zn,Fn.prototype.set=Tn;var Nn=Fn;var Pn=function(){this.__data__=[],this.size=0};var In=function(e,n){for(var r=e.length;r--;)if(ge(e[r][0],n))return r;return-1},Un=Array.prototype.splice;var Hn=function(e){var n=this.__data__,r=In(n,e);return!(r<0)&&(r==n.length-1?n.pop():Un.call(n,r,1),--this.size,!0)};var Ln=function(e){var n=this.__data__,r=In(n,e);return r<0?void 0:n[r][1]};var Dn=function(e){return In(this.__data__,e)>-1};var Zn=function(e,n){var r=this.__data__,t=In(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this};function Mn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Mn.prototype.clear=Pn,Mn.prototype.delete=Hn,Mn.prototype.get=Ln,Mn.prototype.has=Dn,Mn.prototype.set=Zn;var Gn=Mn;var Vn=function(){this.size=0,this.__data__={hash:new Nn,map:new(Xe||Gn),string:new Nn}};var Wn=function(n){var r=e(n);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n};var Jn=function(e,n){var r=e.__data__;return Wn(n)?r["string"==typeof n?"string":"hash"]:r.map};var Yn=function(e){var n=Jn(this,e).delete(e);return this.size-=n?1:0,n};var qn=function(e){return Jn(this,e).get(e)};var Xn=function(e){return Jn(this,e).has(e)};var Kn=function(e,n){var r=Jn(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this};function Qn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Qn.prototype.clear=Vn,Qn.prototype.delete=Yn,Qn.prototype.get=qn,Qn.prototype.has=Xn,Qn.prototype.set=Kn;var er=Qn;function nr(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var t=arguments,a=n?n.apply(this,t):t[0],o=r.cache;if(o.has(a))return o.get(a);var f=e.apply(this,t);return r.cache=o.set(a,f)||o,f};return r.cache=new(nr.Cache||er),r}nr.Cache=er;var rr=nr;var tr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ar=/\\(\\)?/g,or=function(e){var n=rr(e,(function(e){return 500===r.size&&r.clear(),e})),r=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(tr,(function(e,r,t,a){n.push(t?a.replace(ar,"$1"):r||e)})),n}));var fr=function(e,n){return c(e)?e:An(e,n)?[e]:or(_(e))};var cr=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var ir=function(e,n){for(var r=0,t=(n=fr(n,e)).length;null!=e&&r<t;)e=e[cr(n[r++])];return r&&r==t?e:void 0};var ur=function(e,n,r){var t=null==e?void 0:ir(e,n);return void 0===t?r:t},dr={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function lr(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Oe(e," ");if(2!==Sn(n))return e;var r=n[0].trim();r=be(r);var t=n[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var a=ur(dr,"default.".concat(r,".").concat(t),null);return null===a&&(a=e),a}var sr={props:{hasHeader:{type:Boolean,default:!0},hasFooter:{type:Boolean,default:!0},padding:{type:Number,default:20},borderRadius:{type:Number,default:5},headerBackgroundColor:{type:String,default:"grey lighten-5"},contentBackgroundColor:{type:String,default:"white"},footerBackgroundColor:{type:String,default:"grey lighten-5"},borderShadow:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{usePanelStyle:function(){var e={};return e["background-color"]=lr(this.contentBackgroundColor),e["border-radius"]="".concat(this.borderRadius,"px"),e},useHeaderStyle:function(){var e={};return e.padding="".concat(this.padding,"px"),e["border-bottom"]="1px solid #ddd",e["background-color"]=lr(this.headerBackgroundColor),e["border-radius"]="".concat(this.borderRadius,"px ").concat(this.borderRadius,"px 0 0"),e.display="flex",e["justify-content"]="flex-start",e["align-items"]="center",e},useContentStyle:function(){var e=this,n={},r="0 0",t="0 0";return e.hasHeader||(r="".concat(e.borderRadius,"px ").concat(e.borderRadius,"px")),e.hasFooter||(t="".concat(e.borderRadius,"px ").concat(e.borderRadius,"px")),n["border-radius"]="".concat(r," ").concat(t),n},useFooterStyle:function(){var e={};return e.padding="".concat(this.padding,"px"),e["border-top"]="1px solid #ddd",e["background-color"]=lr(this.footerBackgroundColor),e["border-radius"]="0 0 ".concat(this.borderRadius,"px ").concat(this.borderRadius,"px"),e}},methods:{}};var pr=function(e,n,r,t,a,o,f,c,i,u){"boolean"!=typeof f&&(i=c,c=f,f=!1);var d,l="function"==typeof r?r.options:r;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),t&&(l._scopeId=t),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):n&&(d=f?function(){n.call(this,u(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return r},hr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var br=document.head||document.getElementsByTagName("head")[0],gr={};var vr=function(e){return function(e,n){return function(e,n){var r=hr?n.media||"default":e,t=gr[r]||(gr[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),br.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(a),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var o=t.ids.size-1,f=document.createTextNode(a),c=t.element.childNodes;c[o]&&t.element.removeChild(c[o]),c.length?t.element.insertBefore(f,c[o]):t.element.appendChild(f)}}}(e,n)}};const yr=sr;var xr=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:{shadow:e.borderShadow},style:[e.usePanelStyle]},[e.hasHeader?r("div",{style:[e.useHeaderStyle]},[e._t("icon"),e._v(" "),r("div",[e._t("title"),e._v(" "),e._t("description")],2)],2):e._e(),e._v(" "),r("div",{style:[e.useContentStyle]},[e._t("content")],2),e._v(" "),e.hasFooter?r("div",{style:[e.useFooterStyle]},[e._t("footer")],2):e._e()])};xr._withStripped=!0;return pr({render:xr,staticRenderFns:[]},(function(e){e&&e("data-v-9f1ad518_0",{source:"\n.shadow[data-v-9f1ad518] {\r\n    transition: all 0.7s;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-9f1ad518]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WPanel.vue"],names:[],mappings:";AAmJA;IACA,oBAAA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WPanel.vue",sourcesContent:["<template>\r\n    <div :class=\"{'shadow':borderShadow}\" :style=\"[usePanelStyle]\">\r\n\r\n        <div :style=\"[useHeaderStyle]\" v-if=\"hasHeader\">\r\n            <slot name=\"icon\"></slot>\r\n            <div>\r\n                <slot name=\"title\"></slot>\r\n                <slot name=\"description\"></slot>\r\n            </div>\r\n        </div>\r\n\r\n        <div :style=\"[useContentStyle]\">\r\n            <slot name=\"content\"></slot>\r\n        </div>\r\n\r\n        <div :style=\"[useFooterStyle]\" v-if=\"hasFooter\">\r\n            <slot name=\"footer\"></slot>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\n\r\n/**\r\n * @vue-prop {Boolean} [hasHeader=true] 輸入是否有上部標題區，預設true\r\n * @vue-prop {Boolean} [hasFooter=true] 輸入是否有下部基底區，預設true\r\n * @vue-prop {Number} [padding=20] 輸入內間距，單位為px，預設20\r\n * @vue-prop {Number} [borderRadius=5] 輸入圓角寬度，單位為px，預設5\r\n * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'\r\n * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        hasHeader: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        hasFooter: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        padding: {\r\n            type: Number,\r\n            default: 20,\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 5,\r\n        },\r\n        headerBackgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        contentBackgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        footerBackgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        usePanelStyle: function() {\r\n            //console.log('computed usePanelStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['background-color'] = color2hex(vo.contentBackgroundColor)\r\n            s['border-radius'] = `${vo.borderRadius}px`\r\n\r\n            return s\r\n        },\r\n\r\n        useHeaderStyle: function() {\r\n            //console.log('computed useHeaderStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding'] = `${vo.padding}px`\r\n            s['border-bottom'] = '1px solid #ddd'\r\n            s['background-color'] = color2hex(vo.headerBackgroundColor)\r\n            s['border-radius'] = `${vo.borderRadius}px ${vo.borderRadius}px 0 0`\r\n            s['display'] = 'flex'\r\n            s['justify-content'] = 'flex-start'\r\n            s['align-items'] = 'center'\r\n\r\n            return s\r\n        },\r\n\r\n        useContentStyle: function() {\r\n            //console.log('computed useContentStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            let ch = '0 0'\r\n            let cf = '0 0'\r\n            if (!vo.hasHeader) {\r\n                ch = `${vo.borderRadius}px ${vo.borderRadius}px`\r\n            }\r\n            if (!vo.hasFooter) {\r\n                cf = `${vo.borderRadius}px ${vo.borderRadius}px`\r\n            }\r\n            s['border-radius'] = `${ch} ${cf}`\r\n\r\n            return s\r\n        },\r\n\r\n        useFooterStyle: function() {\r\n            //console.log('computed useFooterStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding'] = `${vo.padding}px`\r\n            s['border-top'] = '1px solid #ddd'\r\n            s['background-color'] = color2hex(vo.footerBackgroundColor)\r\n            s['border-radius'] = `0 0 ${vo.borderRadius}px ${vo.borderRadius}px`\r\n\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.shadow {\r\n    transition: all 0.7s;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})}),yr,"data-v-9f1ad518",!1,void 0,vr,void 0)}));
//# sourceMappingURL=w-panel.umd.js.map
