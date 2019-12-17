/*!
 * w-json-view-core v1.2.43
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-json-view-core"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=t||r||Function("return this")(),i=a.Symbol;var o=function(e,n){for(var t=-1,r=null==e?0:e.length,a=Array(r);++t<r;)a[t]=n(e[t],t,e);return a},f=Array.isArray,c=Object.prototype,l=c.hasOwnProperty,u=c.toString,s=i?i.toStringTag:void 0;var d=function(e){var n=l.call(e,s),t=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=u.call(e);return r&&(n?e[s]=t:delete e[s]),a},p=Object.prototype.toString;var h=function(e){return p.call(e)},v="[object Null]",g="[object Undefined]",b=i?i.toStringTag:void 0;var y=function(e){return null==e?void 0===e?g:v:b&&b in Object(e)?d(e):h(e)};var m=function(n){return null!=n&&"object"==e(n)},k="[object Symbol]";var x=function(n){return"symbol"==e(n)||m(n)&&y(n)==k},_=1/0,C=i?i.prototype:void 0,w=C?C.toString:void 0;var A=function e(n){if("string"==typeof n)return n;if(f(n))return o(n,e)+"";if(x(n))return w?w.call(n):"";var t=n+"";return"0"==t&&1/n==-_?"-0":t};var j=function(e){return null==e?"":A(e)};var S=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+n];return i};var N=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:S(e,n,t)},O=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var I=function(e){return O.test(e)};var $=function(e){return e.split("")},E="[\\ud800-\\udfff]",z="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="\\ud83c[\\udffb-\\udfff]",T="[^\\ud800-\\udfff]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",U="[\\ud800-\\udbff][\\udc00-\\udfff]",B="(?:"+z+"|"+R+")"+"?",M="[\\ufe0e\\ufe0f]?"+B+("(?:\\u200d(?:"+[T,L,U].join("|")+")[\\ufe0e\\ufe0f]?"+B+")*"),P="(?:"+[T+z+"?",z,L,U,E].join("|")+")",D=RegExp(R+"(?="+R+")|"+P+M,"g");var V=function(e){return e.match(D)||[]};var W=function(e){return I(e)?V(e):$(e)};var Z=function(e){return function(n){n=j(n);var t=I(n)?W(n):void 0,r=t?t[0]:n.charAt(0),a=t?N(t,1).join(""):n.slice(1);return r[e]()+a}}("toUpperCase");var F=function(e){return Z(j(e).toLowerCase())};var G=function(e,n,t,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(t=e[++a]);++a<i;)t=n(t,e[a],a,e);return t};var J=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Y=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,K=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var X=function(e){return(e=j(e))&&e.replace(Y,J).replace(K,"")},q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var H=function(e){return e.match(q)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ee=function(e){return Q.test(e)},ne="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="["+ne+"]",re="\\d+",ae="[\\u2700-\\u27bf]",ie="[a-z\\xdf-\\xf6\\xf8-\\xff]",oe="[^\\ud800-\\udfff"+ne+re+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",fe="(?:\\ud83c[\\udde6-\\uddff]){2}",ce="[\\ud800-\\udbff][\\udc00-\\udfff]",le="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ue="(?:"+ie+"|"+oe+")",se="(?:"+le+"|"+oe+")",de="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",pe="[\\ufe0e\\ufe0f]?"+de+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",fe,ce].join("|")+")[\\ufe0e\\ufe0f]?"+de+")*"),he="(?:"+[ae,fe,ce].join("|")+")"+pe,ve=RegExp([le+"?"+ie+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[te,le,"$"].join("|")+")",se+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[te,le+ue,"$"].join("|")+")",le+"?"+ue+"+(?:['’](?:d|ll|m|re|s|t|ve))?",le+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",re,he].join("|"),"g");var ge=function(e){return e.match(ve)||[]};var be=function(e,n,t){return e=j(e),void 0===(n=t?void 0:n)?ee(e)?ge(e):H(e):e.match(n)||[]},ye=RegExp("['’]","g");var me=function(e){return function(n){return G(be(X(n).replace(ye,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?F(n):n)}));var ke=function(e,n){return e===n||e!=e&&n!=n};var xe=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)},_e="[object AsyncFunction]",Ce="[object Function]",we="[object GeneratorFunction]",Ae="[object Proxy]";var je=function(e){if(!xe(e))return!1;var n=y(e);return n==Ce||n==we||n==_e||n==Ae},Se=9007199254740991;var Ne=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Se};var Oe=function(e){return null!=e&&Ne(e.length)&&!je(e)},Ie=9007199254740991,$e=/^(?:0|[1-9]\d*)$/;var Ee=function(n,t){var r=e(n);return!!(t=null==t?Ie:t)&&("number"==r||"symbol"!=r&&$e.test(n))&&n>-1&&n%1==0&&n<t};var ze=function(n,t,r){if(!xe(r))return!1;var a=e(t);return!!("number"==a?Oe(r)&&Ee(t,r.length):"string"==a&&t in r)&&ke(r[t],n)},Re="[object RegExp]";var Te=function(e){return m(e)&&y(e)==Re};var Le=function(e){return function(n){return e(n)}},Ue=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var r=n&&!n.nodeType&&n,a=r&&e&&!e.nodeType&&e,i=a&&a.exports===r&&t.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o})),Be=Ue&&Ue.isRegExp,Me=Be?Le(Be):Te,Pe=4294967295;var De=function(e,n,t){return t&&"number"!=typeof t&&ze(e,n,t)&&(n=t=void 0),(t=void 0===t?Pe:t>>>0)?(e=j(e))&&("string"==typeof n||null!=n&&!Me(n))&&!(n=A(n))&&I(e)?N(W(e),0,t):e.split(n,t):[]},Ve=Object.prototype;var We=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Ve)};var Ze=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Fe=Object.prototype.hasOwnProperty;var Ge,Je=function(e){if(!We(e))return Ze(e);var n=[];for(var t in Object(e))Fe.call(e,t)&&"constructor"!=t&&n.push(t);return n},Ye=a["__core-js_shared__"],Ke=(Ge=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||""))?"Symbol(src)_1."+Ge:"";var Xe=function(e){return!!Ke&&Ke in e},qe=Function.prototype.toString;var He=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Qe=/^\[object .+?Constructor\]$/,en=Function.prototype,nn=Object.prototype,tn=en.toString,rn=nn.hasOwnProperty,an=RegExp("^"+tn.call(rn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e){return!(!xe(e)||Xe(e))&&(je(e)?an:Qe).test(He(e))};var fn=function(e,n){return null==e?void 0:e[n]};var cn=function(e,n){var t=fn(e,n);return on(t)?t:void 0},ln=cn(a,"DataView"),un=cn(a,"Map"),sn=cn(a,"Promise"),dn=cn(a,"Set"),pn=cn(a,"WeakMap"),hn=He(ln),vn=He(un),gn=He(sn),bn=He(dn),yn=He(pn),mn=y;(ln&&"[object DataView]"!=mn(new ln(new ArrayBuffer(1)))||un&&"[object Map]"!=mn(new un)||sn&&"[object Promise]"!=mn(sn.resolve())||dn&&"[object Set]"!=mn(new dn)||pn&&"[object WeakMap]"!=mn(new pn))&&(mn=function(e){var n=y(e),t="[object Object]"==n?e.constructor:void 0,r=t?He(t):"";if(r)switch(r){case hn:return"[object DataView]";case vn:return"[object Map]";case gn:return"[object Promise]";case bn:return"[object Set]";case yn:return"[object WeakMap]"}return n});var kn=mn,xn="[object String]";var _n=function(e){return"string"==typeof e||!f(e)&&m(e)&&y(e)==xn};var Cn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),wn="[\\ud800-\\udfff]",An="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",jn="\\ud83c[\\udffb-\\udfff]",Sn="[^\\ud800-\\udfff]",Nn="(?:\\ud83c[\\udde6-\\uddff]){2}",On="[\\ud800-\\udbff][\\udc00-\\udfff]",In="(?:"+An+"|"+jn+")"+"?",$n="[\\ufe0e\\ufe0f]?"+In+("(?:\\u200d(?:"+[Sn,Nn,On].join("|")+")[\\ufe0e\\ufe0f]?"+In+")*"),En="(?:"+[Sn+An+"?",An,Nn,On,wn].join("|")+")",zn=RegExp(jn+"(?="+jn+")|"+En+$n,"g");var Rn=function(e){for(var n=zn.lastIndex=0;zn.test(e);)++n;return n};var Tn=function(e){return I(e)?Rn(e):Cn(e)},Ln="[object Map]",Un="[object Set]";var Bn=function(e){if(null==e)return 0;if(Oe(e))return _n(e)?Tn(e):e.length;var n=kn(e);return n==Ln||n==Un?e.size:Je(e).length},Mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pn=/^\w*$/;var Dn=function(n,t){if(f(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!x(n))||(Pn.test(n)||!Mn.test(n)||null!=t&&n in Object(t))},Vn=cn(Object,"create");var Wn=function(){this.__data__=Vn?Vn(null):{},this.size=0};var Zn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Fn="__lodash_hash_undefined__",Gn=Object.prototype.hasOwnProperty;var Jn=function(e){var n=this.__data__;if(Vn){var t=n[e];return t===Fn?void 0:t}return Gn.call(n,e)?n[e]:void 0},Yn=Object.prototype.hasOwnProperty;var Kn=function(e){var n=this.__data__;return Vn?void 0!==n[e]:Yn.call(n,e)},Xn="__lodash_hash_undefined__";var qn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Vn&&void 0===n?Xn:n,this};function Hn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Hn.prototype.clear=Wn,Hn.prototype.delete=Zn,Hn.prototype.get=Jn,Hn.prototype.has=Kn,Hn.prototype.set=qn;var Qn=Hn;var et=function(){this.__data__=[],this.size=0};var nt=function(e,n){for(var t=e.length;t--;)if(ke(e[t][0],n))return t;return-1},tt=Array.prototype.splice;var rt=function(e){var n=this.__data__,t=nt(n,e);return!(t<0)&&(t==n.length-1?n.pop():tt.call(n,t,1),--this.size,!0)};var at=function(e){var n=this.__data__,t=nt(n,e);return t<0?void 0:n[t][1]};var it=function(e){return nt(this.__data__,e)>-1};var ot=function(e,n){var t=this.__data__,r=nt(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function ft(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ft.prototype.clear=et,ft.prototype.delete=rt,ft.prototype.get=at,ft.prototype.has=it,ft.prototype.set=ot;var ct=ft;var lt=function(){this.size=0,this.__data__={hash:new Qn,map:new(un||ct),string:new Qn}};var ut=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var st=function(e,n){var t=e.__data__;return ut(n)?t["string"==typeof n?"string":"hash"]:t.map};var dt=function(e){var n=st(this,e).delete(e);return this.size-=n?1:0,n};var pt=function(e){return st(this,e).get(e)};var ht=function(e){return st(this,e).has(e)};var vt=function(e,n){var t=st(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function gt(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}gt.prototype.clear=lt,gt.prototype.delete=dt,gt.prototype.get=pt,gt.prototype.has=ht,gt.prototype.set=vt;var bt=gt,yt="Expected a function";function mt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(yt);var t=function t(){var r=arguments,a=n?n.apply(this,r):r[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return t.cache=i.set(a,o)||i,o};return t.cache=new(mt.Cache||bt),t}mt.Cache=bt;var kt=mt,xt=500;var _t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,wt=function(e){var n=kt(e,(function(e){return t.size===xt&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(_t,(function(e,t,r,a){n.push(r?a.replace(Ct,"$1"):t||e)})),n}));var At=function(e,n){return f(e)?e:Dn(e,n)?[e]:wt(j(e))},jt=1/0;var St=function(e){if("string"==typeof e||x(e))return e;var n=e+"";return"0"==n&&1/e==-jt?"-0":n};var Nt=function(e,n){for(var t=0,r=(n=At(n,e)).length;null!=e&&t<r;)e=e[St(n[t++])];return t&&t==r?e:void 0};var Ot=function(e,n,t){var r=null==e?void 0:Nt(e,n);return void 0===r?t:r},It={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function $t(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=De(e," ");if(2!==Bn(n))return e;var t=n[0].trim();t=me(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var a=Ot(It,"default.".concat(t,".").concat(r),null);return null===a&&(a=e),a}var Et={props:{item:{type:Object,default:function(){}},lineNumberWidth:{type:Number,default:0},iconColor:{type:String,default:"grey"},keyColor:{type:String,default:"grey darken-2"},keyNumbersColor:{type:String,default:"grey lighten-1"}},data:function(){return{styleLineNumber:"padding-right:10px; text-align:right; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;",styleCell:"display:table-cell; vertical-align:top;"}},mounted:function(){},computed:{useIconColor:function(){return $t(this.iconColor)},useKeyColor:function(){return $t(this.keyColor)},usekeyNumbersColor:function(){return $t(this.keyNumbersColor)}},methods:{toggleItems:function(e){this.$emit("toggleItems",e)}}};var zt=function(e,n,t,r,a,i,o,f,c,l){"boolean"!=typeof o&&(c=f,f=o,o=!1);var u,s="function"==typeof t?t.options:t;if(e&&e.render&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,a&&(s.functional=!0)),r&&(s._scopeId=r),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):n&&(u=o?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,f(e))}),u)if(s.functional){var d=s.render;s.render=function(e,n){return u.call(n),d(e,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,u):[u]}return t},Rt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Tt=document.head||document.getElementsByTagName("head")[0],Lt={};var Ut=function(e){return function(e,n){return function(e,n){var t=Rt?n.media||"default":e,r=Lt[t]||(Lt[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),Tt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(a),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,o=document.createTextNode(a),f=r.element.childNodes;f[i]&&r.element.removeChild(f[i]),f.length?r.element.insertBefore(o,f[i]):r.element.appendChild(o)}}}(e,n)}};const Bt=Et;var Mt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.item.show&&e.item.filterShow?t("div",{style:"position:absolute; top:"+e.item.screenY+"px; width:100%; opacity:"+(e.item.nowShow?1:.001)+";",attrs:{index:e.item.index,nowShow:e.item.nowShow}},[t("div",{style:e.styleCell+"; "+e.styleLineNumber+"; width:"+e.lineNumberWidth+"px;"},[e._v(e._s(e.item.index+1))]),e._v(" "),t("div",{style:e.styleCell+"; padding-left:"+e.item.paddingLeft+"px;"},[t("div",{staticStyle:{position:"relative"}},[t("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",transform:"translateX(-100%)","user-select":"none"}},[1===e.item.stateChildren?t("div",{on:{"!click":function(n){return e.toggleItems(e.item)}}},[t("span",{class:[{caretRight:!0,showChildren:e.item.displayChildren}]},[t("span",{staticClass:"center"},[t("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:e.useIconColor,width:"11px",height:"11px",x:"0px",y:"0px",viewBox:"0 0 415.346 415.346","xml:space":"preserve"}},[t("g",[t("path",{attrs:{d:"M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"}})])])])])]):t("div",{staticStyle:{display:"inline-block",width:"16px"}})]),e._v(" "),t("div",{},[e.item.key?t("div",{style:e.styleCell+"; white-space:pre; color:"+e.useKeyColor+";"},[t("span",[e._v(e._s(e.item.key))]),e._v(" "),e.item.keyNumbers?t("span",{style:"margin:0px 10px; color:"+e.usekeyNumbersColor+";"},["arr"===e.item.keyNumbers.type?t("span",[e._v("["+e._s(e.item.keyNumbers.n)+"]")]):e._e(),e._v(" "),"obj"===e.item.keyNumbers.type?t("span",[t("span",[e._v("{")]),t("span",[e._v(e._s(e.item.keyNumbers.n))]),t("span",[e._v("}")])]):e._e()]):e._e(),e._v(" "),e.item.displayChildren?e._e():t("span",[t("span",{staticStyle:{"margin-right":"10px"}},[e._v("...")]),e._v(e._s(e.item.valueTail))])]):e._e(),e._v(" "),e.item.value?[t("div",{style:e.styleCell+"; color:"+e.item.valueColor},[e._v(e._s(e.item.value))]),e._v(" "),e.item.valueComma?t("div",{style:e.styleCell+"; color:"+e.item.keyColor},[e._v(",")]):e._e()]:e._e()],2)])])]):e._e()};Mt._withStripped=!0;return zt({render:Mt,staticRenderFns:[]},(function(e){e&&e("data-v-373f0500_0",{source:"\n.caretRight[data-v-373f0500] {\r\n    transform: translateY(-1px);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\n}\n.center[data-v-373f0500] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.showChildren[data-v-373f0500] {\r\n    transform: rotate(90deg);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WJsonViewCore.vue"],names:[],mappings:";AAgJA;IACA,2BAAA;IACA,eAAA;IACA,qBAAA;IACA,sBAAA;IACA,iBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;AACA;AACA;IACA,wBAAA;AACA",file:"WJsonViewCore.vue",sourcesContent:['<template>\r\n    <div\r\n        :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${item.nowShow?1:0.001};`"\r\n        :index="item.index"\r\n        :nowShow="item.nowShow"\r\n        v-if="item.show && item.filterShow"\r\n    >\r\n\r\n        <div :style="`${styleCell}; ${styleLineNumber}; width:${lineNumberWidth}px;`">{{item.index+1}}</div>\r\n\r\n        <div :style="`${styleCell}; padding-left:${item.paddingLeft}px;`">\r\n\r\n            <div style="position:relative;">\r\n\r\n                <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%); user-select:none;">\r\n                    <div v-if="item.stateChildren===1" @click.capture="toggleItems(item)">\r\n                        <span :class="[{\'caretRight\':true,\'showChildren\':item.displayChildren}]">\r\n                            <span class="center">\r\n                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <div style="display:inline-block; width:16px;" v-else></div>\r\n                </div>\r\n\r\n                <div style="">\r\n\r\n                    <div :style="`${styleCell}; white-space:pre; color:${useKeyColor};`" v-if="item.key">\r\n\r\n                        <span>{{item.key}}</span>\r\n\r\n                        <span :style="`margin:0px 10px; color:${usekeyNumbersColor};`" v-if="item.keyNumbers">\r\n                            <span v-if="item.keyNumbers.type===\'arr\'">[{{item.keyNumbers.n}}]</span>\r\n                            <span v-if="item.keyNumbers.type===\'obj\'"><span>{</span><span>{{item.keyNumbers.n}}</span><span>}</span></span>\r\n                        </span>\r\n\r\n                        <span v-if="!item.displayChildren"><span style="margin-right:10px;">...</span>{{item.valueTail}}</span>\r\n\r\n                    </div>\r\n\r\n                    <template v-if="item.value">\r\n\r\n                        <div :style="`${styleCell}; color:${item.valueColor}`">{{item.value}}</div>\r\n\r\n                        <div :style="`${styleCell}; color:${item.keyColor}`" v-if="item.valueComma">,</div>\r\n\r\n                    </template>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from \'../js/vuetifyColor.mjs\'\r\n\r\n/**\r\n * @vue-prop {Object} item 輸入物件\r\n * @vue-prop {Number} [lineNumberWidth=0] 輸入列號區寬度，單位為px，預設0\r\n * @vue-prop {String} [iconColor=\'grey\'] 輸入顯隱icon按鈕顏色字串，預設\'grey\'\r\n * @vue-prop {String} [keyColor=\'grey darken-2\'] 輸入鍵值顏色字串，預設\'grey darken-2\'\r\n * @vue-prop {String} [keyNumbersColor=\'grey lighten-1\'] 輸入鍵值內含子節點數量顏色字串，預設\'grey lighten-1\'\r\n */\r\nexport default {\r\n    props: {\r\n        item: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        lineNumberWidth: {\r\n            type: Number,\r\n            default: 0,\r\n        },\r\n        iconColor: {\r\n            type: String,\r\n            default: \'grey\',\r\n        },\r\n        keyColor: {\r\n            type: String,\r\n            default: \'grey darken-2\',\r\n        },\r\n        keyNumbersColor: {\r\n            type: String,\r\n            default: \'grey lighten-1\',\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            //line-height = ( 1 / 0.8(font-size) )^2\r\n            styleLineNumber: `padding-right:10px; text-align:right; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;`,\r\n            styleCell: `display:table-cell; vertical-align:top;`,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIconColor: function() {\r\n            //console.log(\'computed useIconColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.iconColor)\r\n        },\r\n\r\n        useKeyColor: function() {\r\n            //console.log(\'computed useKeyColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.keyColor)\r\n        },\r\n\r\n        usekeyNumbersColor: function() {\r\n            //console.log(\'computed usekeyNumbersColor\')\r\n\r\n            let vo = this\r\n\r\n            return color2hex(vo.keyNumbersColor)\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        toggleItems: function(item) {\r\n            //console.log(\'methods toggleItems\', item)\r\n            //記得click需使用capture, 先處理完自己節點點擊才釋出事件, 適用於窄板裝置\r\n\r\n            let vo = this\r\n\r\n            //emit\r\n            vo.$emit(\'toggleItems\', item)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.caretRight {\r\n    transform: translateY(-1px);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\r\n}\r\n.center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.showChildren {\r\n    transform: rotate(90deg);\r\n}\r\n</style>\r\n\r\n']},media:void 0})}),Bt,"data-v-373f0500",!1,void 0,Ut,void 0)}));
//# sourceMappingURL=w-json-view-core.umd.js.map
