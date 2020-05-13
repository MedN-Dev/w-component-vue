/*!
 * w-panel-scrolly-core v1.3.17
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self)["w-panel-scrolly-core"]=e()}(this,(function(){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(n,e){return n(e={exports:{}},e.exports),e.exports}var t=e((function(n){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e})),r="object"==t(n)&&n&&n.Object===Object&&n,a="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,i=r||a||Function("return this")(),o=i.Symbol;var f=function(n,e){for(var t=-1,r=null==n?0:n.length,a=Array(r);++t<r;)a[t]=e(n[t],t,n);return a},c=Array.isArray,u=Object.prototype,d=u.hasOwnProperty,s=u.toString,l=o?o.toStringTag:void 0;var h=function(n){var e=d.call(n,l),t=n[l];try{n[l]=void 0;var r=!0}catch(n){}var a=s.call(n);return r&&(e?n[l]=t:delete n[l]),a},v=Object.prototype.toString;var b=function(n){return v.call(n)},g=o?o.toStringTag:void 0;var p=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":g&&g in Object(n)?h(n):b(n)};var m=function(n){return null!=n&&"object"==t(n)};var y=function(n){return"symbol"==t(n)||m(n)&&"[object Symbol]"==p(n)},x=o?o.prototype:void 0,k=x?x.toString:void 0;var w=function n(e){if("string"==typeof e)return e;if(c(e))return f(e,n)+"";if(y(e))return k?k.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var _=function(n){return null==n?"":w(n)};var j=function(n,e,t){var r=-1,a=n.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(a);++r<a;)i[r]=n[r+e];return i};var E=function(n,e,t){var r=n.length;return t=void 0===t?r:t,!e&&t>=r?n:j(n,e,t)},T=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var M=function(n){return T.test(n)};var O=function(n){return n.split("")},S="[\\ud800-\\udfff]",B="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",L="[^\\ud800-\\udfff]",C="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",H="(?:"+B+"|"+R+")"+"?",$="[\\ufe0e\\ufe0f]?"+H+("(?:\\u200d(?:"+[L,C,z].join("|")+")[\\ufe0e\\ufe0f]?"+H+")*"),A="(?:"+[L+B+"?",B,C,z,S].join("|")+")",N=RegExp(R+"(?="+R+")|"+A+$,"g");var P=function(n){return n.match(N)||[]};var D=function(n){return M(n)?P(n):O(n)};var U=function(n){return function(e){e=_(e);var t=M(e)?D(e):void 0,r=t?t[0]:e.charAt(0),a=t?E(t,1).join(""):e.slice(1);return r[n]()+a}}("toUpperCase");var Y=function(n){return U(_(n).toLowerCase())};var I=function(n,e,t,r){var a=-1,i=null==n?0:n.length;for(r&&i&&(t=n[++a]);++a<i;)t=e(t,n[a],a,n);return t};var W=function(n){return function(e){return null==n?void 0:n[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Z=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,F=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var G=function(n){return(n=_(n))&&n.replace(Z,W).replace(F,"")},V=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(n){return n.match(V)||[]},q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var X=function(n){return q.test(n)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",nn="\\d+",en="[\\u2700-\\u27bf]",tn="[a-z\\xdf-\\xf6\\xf8-\\xff]",rn="[^\\ud800-\\udfff"+K+nn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",an="(?:\\ud83c[\\udde6-\\uddff]){2}",on="[\\ud800-\\udbff][\\udc00-\\udfff]",fn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",cn="(?:"+tn+"|"+rn+")",un="(?:"+fn+"|"+rn+")",dn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",sn="[\\ufe0e\\ufe0f]?"+dn+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",an,on].join("|")+")[\\ufe0e\\ufe0f]?"+dn+")*"),ln="(?:"+[en,an,on].join("|")+")"+sn,hn=RegExp([fn+"?"+tn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,fn,"$"].join("|")+")",un+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,fn+cn,"$"].join("|")+")",fn+"?"+cn+"+(?:['’](?:d|ll|m|re|s|t|ve))?",fn+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nn,ln].join("|"),"g");var vn=function(n){return n.match(hn)||[]};var bn=function(n,e,t){return n=_(n),void 0===(e=t?void 0:e)?X(n)?vn(n):J(n):n.match(e)||[]},gn=RegExp("['’]","g");var pn=function(n){return function(e){return I(bn(G(e).replace(gn,"")),n,"")}}((function(n,e,t){return e=e.toLowerCase(),n+(t?Y(e):e)}));var mn=function(n,e){return n===e||n!=n&&e!=e};var yn=function(n){var e=t(n);return null!=n&&("object"==e||"function"==e)};var xn=function(n){if(!yn(n))return!1;var e=p(n);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var kn=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};var wn=function(n){return null!=n&&kn(n.length)&&!xn(n)},_n=/^(?:0|[1-9]\d*)$/;var jn=function(n,e){var r=t(n);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&_n.test(n))&&n>-1&&n%1==0&&n<e};var En=function(n,e,r){if(!yn(r))return!1;var a=t(e);return!!("number"==a?wn(r)&&jn(e,r.length):"string"==a&&e in r)&&mn(r[e],n)};var Tn=function(n){return m(n)&&"[object RegExp]"==p(n)};var Mn=function(n){return function(e){return n(e)}},On=e((function(n,e){var t=e&&!e.nodeType&&e,a=t&&n&&!n.nodeType&&n,i=a&&a.exports===t&&r.process,o=function(){try{var n=a&&a.require&&a.require("util").types;return n||i&&i.binding&&i.binding("util")}catch(n){}}();n.exports=o})),Sn=On&&On.isRegExp,Bn=Sn?Mn(Sn):Tn;var Rn=function(n,e,t){return t&&"number"!=typeof t&&En(n,e,t)&&(e=t=void 0),(t=void 0===t?4294967295:t>>>0)?(n=_(n))&&("string"==typeof e||null!=e&&!Bn(e))&&!(e=w(e))&&M(n)?E(D(n),0,t):n.split(e,t):[]},Ln=Object.prototype;var Cn=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||Ln)};var zn=function(n,e){return function(t){return n(e(t))}}(Object.keys,Object),Hn=Object.prototype.hasOwnProperty;var $n,An=function(n){if(!Cn(n))return zn(n);var e=[];for(var t in Object(n))Hn.call(n,t)&&"constructor"!=t&&e.push(t);return e},Nn=i["__core-js_shared__"],Pn=($n=/[^.]+$/.exec(Nn&&Nn.keys&&Nn.keys.IE_PROTO||""))?"Symbol(src)_1."+$n:"";var Dn=function(n){return!!Pn&&Pn in n},Un=Function.prototype.toString;var Yn=function(n){if(null!=n){try{return Un.call(n)}catch(n){}try{return n+""}catch(n){}}return""},In=/^\[object .+?Constructor\]$/,Wn=Function.prototype,Zn=Object.prototype,Fn=Wn.toString,Gn=Zn.hasOwnProperty,Vn=RegExp("^"+Fn.call(Gn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Jn=function(n){return!(!yn(n)||Dn(n))&&(xn(n)?Vn:In).test(Yn(n))};var qn=function(n,e){return null==n?void 0:n[e]};var Xn=function(n,e){var t=qn(n,e);return Jn(t)?t:void 0},Kn=Xn(i,"DataView"),Qn=Xn(i,"Map"),ne=Xn(i,"Promise"),ee=Xn(i,"Set"),te=Xn(i,"WeakMap"),re=Yn(Kn),ae=Yn(Qn),ie=Yn(ne),oe=Yn(ee),fe=Yn(te),ce=p;(Kn&&"[object DataView]"!=ce(new Kn(new ArrayBuffer(1)))||Qn&&"[object Map]"!=ce(new Qn)||ne&&"[object Promise]"!=ce(ne.resolve())||ee&&"[object Set]"!=ce(new ee)||te&&"[object WeakMap]"!=ce(new te))&&(ce=function(n){var e=p(n),t="[object Object]"==e?n.constructor:void 0,r=t?Yn(t):"";if(r)switch(r){case re:return"[object DataView]";case ae:return"[object Map]";case ie:return"[object Promise]";case oe:return"[object Set]";case fe:return"[object WeakMap]"}return e});var ue=ce;var de=function(n){return"string"==typeof n||!c(n)&&m(n)&&"[object String]"==p(n)};var se=function(n){return function(e){return null==e?void 0:e[n]}}("length"),le="[\\ud800-\\udfff]",he="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ve="\\ud83c[\\udffb-\\udfff]",be="[^\\ud800-\\udfff]",ge="(?:\\ud83c[\\udde6-\\uddff]){2}",pe="[\\ud800-\\udbff][\\udc00-\\udfff]",me="(?:"+he+"|"+ve+")"+"?",ye="[\\ufe0e\\ufe0f]?"+me+("(?:\\u200d(?:"+[be,ge,pe].join("|")+")[\\ufe0e\\ufe0f]?"+me+")*"),xe="(?:"+[be+he+"?",he,ge,pe,le].join("|")+")",ke=RegExp(ve+"(?="+ve+")|"+xe+ye,"g");var we=function(n){for(var e=ke.lastIndex=0;ke.test(n);)++e;return e};var _e=function(n){return M(n)?we(n):se(n)};var je=function(n){if(null==n)return 0;if(wn(n))return de(n)?_e(n):n.length;var e=ue(n);return"[object Map]"==e||"[object Set]"==e?n.size:An(n).length},Ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/;var Me=function(n,e){if(c(n))return!1;var r=t(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!y(n))||(Te.test(n)||!Ee.test(n)||null!=e&&n in Object(e))},Oe=Xn(Object,"create");var Se=function(){this.__data__=Oe?Oe(null):{},this.size=0};var Be=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e},Re=Object.prototype.hasOwnProperty;var Le=function(n){var e=this.__data__;if(Oe){var t=e[n];return"__lodash_hash_undefined__"===t?void 0:t}return Re.call(e,n)?e[n]:void 0},Ce=Object.prototype.hasOwnProperty;var ze=function(n){var e=this.__data__;return Oe?void 0!==e[n]:Ce.call(e,n)};var He=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Oe&&void 0===e?"__lodash_hash_undefined__":e,this};function $e(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}$e.prototype.clear=Se,$e.prototype.delete=Be,$e.prototype.get=Le,$e.prototype.has=ze,$e.prototype.set=He;var Ae=$e;var Ne=function(){this.__data__=[],this.size=0};var Pe=function(n,e){for(var t=n.length;t--;)if(mn(n[t][0],e))return t;return-1},De=Array.prototype.splice;var Ue=function(n){var e=this.__data__,t=Pe(e,n);return!(t<0)&&(t==e.length-1?e.pop():De.call(e,t,1),--this.size,!0)};var Ye=function(n){var e=this.__data__,t=Pe(e,n);return t<0?void 0:e[t][1]};var Ie=function(n){return Pe(this.__data__,n)>-1};var We=function(n,e){var t=this.__data__,r=Pe(t,n);return r<0?(++this.size,t.push([n,e])):t[r][1]=e,this};function Ze(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}Ze.prototype.clear=Ne,Ze.prototype.delete=Ue,Ze.prototype.get=Ye,Ze.prototype.has=Ie,Ze.prototype.set=We;var Fe=Ze;var Ge=function(){this.size=0,this.__data__={hash:new Ae,map:new(Qn||Fe),string:new Ae}};var Ve=function(n){var e=t(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var Je=function(n,e){var t=n.__data__;return Ve(e)?t["string"==typeof e?"string":"hash"]:t.map};var qe=function(n){var e=Je(this,n).delete(n);return this.size-=e?1:0,e};var Xe=function(n){return Je(this,n).get(n)};var Ke=function(n){return Je(this,n).has(n)};var Qe=function(n,e){var t=Je(this,n),r=t.size;return t.set(n,e),this.size+=t.size==r?0:1,this};function nt(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}nt.prototype.clear=Ge,nt.prototype.delete=qe,nt.prototype.get=Xe,nt.prototype.has=Ke,nt.prototype.set=Qe;var et=nt;function tt(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function t(){var r=arguments,a=e?e.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(tt.Cache||et),t}tt.Cache=et;var rt=tt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,ot=function(n){var e=rt(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e}((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(at,(function(n,t,r,a){e.push(r?a.replace(it,"$1"):t||n)})),e}));var ft=function(n,e){return c(n)?n:Me(n,e)?[n]:ot(_(n))};var ct=function(n){if("string"==typeof n||y(n))return n;var e=n+"";return"0"==e&&1/n==-1/0?"-0":e};var ut=function(n,e){for(var t=0,r=(e=ft(e,n)).length;null!=n&&t<r;)n=n[ct(e[t++])];return t&&t==r?n:void 0};var dt=function(n,e,t){var r=null==n?void 0:ut(n,e);return void 0===r?t:r},st={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function lt(n){if("white"===n)return"#fff";if("black"===n)return"#000";if("transparent"===n)return"rgba(0,0,0,0)";var e=Rn(n," ");if(2!==je(e))return n;var t=e[0].trim();t=pn(t);var r=e[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=dt(st,"default.".concat(t,".").concat(r),null);return null===a&&(a=n),a}var ht=/^\s+|\s+$/g,vt=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,pt=parseInt;var mt=function(n){if("number"==typeof n)return n;if(y(n))return NaN;if(yn(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=yn(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(ht,"");var t=bt.test(n);return t||gt.test(n)?pt(n.slice(2),t?2:8):vt.test(n)?NaN:+n};var yt=function(n){return n?(n=mt(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0};var xt=function(n){var e=yt(n),t=e%1;return e==e?t?e-t:e:0};var kt=function(n){return"number"==typeof n&&n==xt(n)};function wt(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function _t(n){var e=!1;return wt(n)?e=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(e=!0),e}function jt(n){return _t(n)?yt(n):0}var Et=i.isFinite,Tt=Math.min;var Mt=function(n){var e=Math[n];return function(n,t){if(n=mt(n),(t=null==t?0:Tt(xt(t),292))&&Et(n)){var r=(_(n)+"e").split("e"),a=e(r[0]+"e"+(+r[1]+t));return+((r=(_(a)+"e").split("e"))[0]+"e"+(+r[1]-t))}return e(n)}}("round");function Ot(n){if(!_t(n))return 0;n=jt(n);var e=Mt(n);return"0"===String(e)?0:e}function St(n){return!!function(n){return!!_t(n)&&(n=jt(n),kt(n))}(n)&&Ot(n)>0}var Bt="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Rt=Bt.length;function Lt(n){window.event?n.cancelBubble=!0:n.stopPropagation(),n.preventDefault()}var Ct={props:{viewHeightMax:{type:Number,default:400},contentHeight:{type:Number,default:1e4},scrollDelta:{type:Number,default:100},barColor:{type:String,default:"rgba(0,0,0,0.2)"},barBackgroundColor:{type:String,default:"transparent"},barWidth:{type:Number,default:8},barHeightMin:{type:Number,default:50},ratio:{type:Number,default:0}},data:function(){return{mmkey:null,ratioTrans:0,barPressY:null,barPressing:!1,barOpacity:.5,eleWheel:null,eleTouchstart:null,eleTouchmove:null,eleTouchend:null,barMousedown:null,barTouchstart:null,barTouchmove:null,barTouchend:null,windowMousemove:null,windowMouseup:null}},mounted:function(){var n=this;n.mmkey=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=[];n=St(n)?Ot(n):32;for(var t=0;t<n;t++)e[t]=Bt[0|Math.random()*Rt];var r=e.join("");return r}();var e=n.$refs.divPanel;n.eleWheel=function(e){var t=e.deltaY/Math.abs(e.deltaY);n.scrollPanel(n.mmkey,t),Lt(e)},e.addEventListener("wheel",n.eleWheel),n.eleTouchstart=function(e){n.pressBar(n.mmkey,-e.touches[0].clientY*n.heighRatio)},e.addEventListener("touchstart",n.eleTouchstart),n.eleTouchmove=function(e){n.dragBar(n.mmkey,-e.touches[0].clientY*n.heighRatio),Lt(e)},e.addEventListener("touchmove",n.eleTouchmove),n.eleTouchend=function(e){n.freedBar(n.mmkey)},e.addEventListener("touchend",n.eleTouchend);var t=n.$refs.divBar;n.barMousedown=function(e){n.pressBar(n.mmkey,e.clientY)},t.addEventListener("mousedown",n.barMousedown),n.barTouchstart=function(e){n.pressBar(n.mmkey,e.touches[0].clientY)},t.addEventListener("touchstart",n.barTouchstart),n.barTouchmove=function(e){n.dragBar(n.mmkey,e.touches[0].clientY),Lt(e)},t.addEventListener("touchmove",n.barTouchmove),n.barTouchend=function(e){n.freedBar(n.mmkey)},t.addEventListener("touchend",n.barTouchend),n.windowMousemove=function(e){n.dragBar(n.mmkey,e.clientY)},window.addEventListener("mousemove",n.windowMousemove),n.windowMouseup=function(e){n.freedBar(n.mmkey),Lt(e)},window.addEventListener("mouseup",n.windowMouseup)},beforeDestroy:function(){var n=this,e=n.$refs.divPanel;e.removeEventListener("wheel",n.eleWheel),e.removeEventListener("touchstart",n.eleTouchstart),e.removeEventListener("touchmove",n.eleTouchmove),e.removeEventListener("touchend",n.eleTouchend);var t=n.$refs.divBar;t.removeEventListener("mousedown",n.barMousedown),t.removeEventListener("touchstart",n.barTouchstart),t.removeEventListener("touchmove",n.barTouchmove),t.removeEventListener("touchend",n.barTouchend),window.removeEventListener("mousemove",n.windowMousemove),window.removeEventListener("mouseup",n.windowMouseup)},computed:{useBarColor:function(){return lt(this.barColor)},useBarBackgroundColor:function(){return lt(this.barBackgroundColor)},changeRatio:function(){var n=this.ratio;return n=Math.max(n,0),n=Math.min(n,1),this.ratioTrans=n,""},heighRatio:function(){return this.viewHeightMax/Math.max(this.contentHeight,1)},barSize:function(){var n=this.viewHeightMax/this.contentHeight,e=Math.max(n*this.viewHeightMax,this.barHeightMin);return e},barLoc:function(){return this.ratioTrans*this.viewHeightEff},contentHeightEff:function(){var n=this.contentHeight-this.viewHeightMax;return n=Math.max(n,0)},viewHeightEff:function(){var n=this.viewHeightMax-this.barSize-4;return n=Math.max(n,0)},viewTop:function(){return this.ratioTrans*this.contentHeightEff},viewBottom:function(){return this.viewTop+this.viewHeightMax}},methods:{updateRatioTrans:function(n){n=Math.max(n,0),n=Math.min(n,1),0===this.contentHeightEff&&(n=0);var e=this.ratioTrans!==n;return e&&(this.ratioTrans=n),e},pressBar:function(n,e){this.mmkey===n&&(this.barPressing=!0,e&&(this.barPressY=e))},dragBar:function(n,e){var t=this;if(t.mmkey===n&&t.barPressing){var r=(e-t.barPressY)/t.viewHeightEff;t.scrollByDeltaRatio(r),t.barPressY=e}},freedBar:function(n){this.mmkey===n&&this.barPressing&&(this.barPressing=!1,this.triggerEvent("freedBar"))},triggerEvent:function(n){var e=this;e.$nextTick((function(){var t={from:n,r:e.ratioTrans,t:e.viewTop,b:e.viewBottom,ch:e.contentHeight};e.$emit("update:ratio",e.ratioTrans),e.$emit("change",t),n&&e.$emit(n,t)}))},scrollByDeltaRatio:function(n){var e=this.ratioTrans;e>=0&&e<=1&&(e+=n),this.updateRatioTrans(e)&&this.triggerEvent()},scrollByDelta:function(n){var e=n/this.contentHeight;this.scrollByDeltaRatio(e)},scrollPanel:function(n,e){if(this.mmkey===n){var t=e*this.scrollDelta;this.scrollByDelta(t)}},refresh:function(n,e){e&&this.triggerEvent()}}};function zt(n,e,t,r,a,i,o,f,c,u){"boolean"!=typeof o&&(c=f,f=o,o=!1);var d,s="function"==typeof t?t.options:t;if(n&&n.render&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0,a&&(s.functional=!0)),r&&(s._scopeId=r),i?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},s._ssrRegister=d):e&&(d=o?function(n){e.call(this,u(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,f(n))}),d)if(s.functional){var l=s.render;s.render=function(n,e){return d.call(e),l(n,e)}}else{var h=s.beforeCreate;s.beforeCreate=h?[].concat(h,d):[d]}return t}var Ht,$t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function At(n){return function(n,e){return function(n,e){var t=$t?e.media||"default":n,r=Nt[t]||(Nt[t]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===Ht&&(Ht=document.head||document.getElementsByTagName("head")[0]),Ht.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(n,e)}}var Nt={};const Pt=Ct;var Dt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:"overflow:hidden; height:"+Math.min(n.contentHeight,n.viewHeightMax)+"px; box-sizing:content-box;"},[t("div",{style:"position:relative; overflow:hidden; height:"+n.viewHeightMax+"px; box-sizing:border-box;",attrs:{changeRatio:n.changeRatio},on:{mouseenter:function(e){n.barOpacity=1},mouseleave:function(e){n.barOpacity=.8}}},[t("div",{style:"height:"+(n.viewHeightMax+1)+"px;"}),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.contentHeightEff>0,expression:"contentHeightEff>0"}],staticStyle:{position:"absolute",top:"0",right:"0px",height:"100%","z-index":"1"}},[t("div",{style:"position:relative; width:"+n.barWidth+"px; height:100%; background-color:"+n.useBarBackgroundColor+"; padding:2px 1px; box-sizing:border-box;"},[t("div",{ref:"divBar",style:"width:100%; height:"+n.barSize+"px; background-color:"+n.useBarColor+"; border-radius:15px; user-select:none; transform:translateY("+n.barLoc+"px); cursor:pointer; opacity:"+n.barOpacity+"; transition:opacity 0.5s;"})])]),n._v(" "),t("div",{ref:"divPanel",style:"position:absolute; top:0px; width:calc(100% + 18px); overflow-y:scroll; overflow-x:hidden; height:"+n.viewHeightMax+"px;"},[n._t("default")],2)])])};Dt._withStripped=!0;return zt({render:Dt,staticRenderFns:[]},(function(n){n&&n("data-v-906d3700_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WPanelScrollyCore.vue"},media:void 0})}),Pt,"data-v-906d3700",!1,void 0,!1,At,void 0,void 0)}));
//# sourceMappingURL=w-panel-scrolly-core.umd.js.map
