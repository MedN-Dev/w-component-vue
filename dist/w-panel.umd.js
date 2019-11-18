!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-panel"]=n()}(this,function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="object"==e(n)&&n&&n.Object===Object&&n,t="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,a=r||t||Function("return this")(),o=a.Symbol;var f=function(e,n){for(var r=-1,t=null==e?0:e.length,a=Array(t);++r<t;)a[r]=n(e[r],r,e);return a},c=Array.isArray,i=Object.prototype,u=i.hasOwnProperty,d=i.toString,l=o?o.toStringTag:void 0;var s=function(e){var n=u.call(e,l),r=e[l];try{e[l]=void 0;var t=!0}catch(e){}var a=d.call(e);return t&&(n?e[l]=r:delete e[l]),a},p=Object.prototype.toString;var h=function(e){return p.call(e)},b="[object Null]",g="[object Undefined]",v=o?o.toStringTag:void 0;var y=function(e){return null==e?void 0===e?g:b:v&&v in Object(e)?s(e):h(e)};var x=function(n){return null!=n&&"object"==e(n)},m="[object Symbol]";var k=function(n){return"symbol"==e(n)||x(n)&&y(n)==m},_=1/0,S=o?o.prototype:void 0,j=S?S.toString:void 0;var w=function e(n){if("string"==typeof n)return n;if(c(n))return f(n,e)+"";if(k(n))return j?j.call(n):"";var r=n+"";return"0"==r&&1/n==-_?"-0":r};var A=function(e){return null==e?"":w(e)};var C=function(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(r=r>a?a:r)<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(a);++t<a;)o[t]=e[t+n];return o};var R=function(e,n,r){var t=e.length;return r=void 0===r?t:r,!n&&r>=t?e:C(e,n,r)},O=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var E=function(e){return O.test(e)};var $=function(e){return e.split("")},B="[\\ud800-\\udfff]",z="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",F="[^\\ud800-\\udfff]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",I="(?:"+z+"|"+T+")"+"?",U="[\\ufe0e\\ufe0f]?"+I+("(?:\\u200d(?:"+[F,N,P].join("|")+")[\\ufe0e\\ufe0f]?"+I+")*"),H="(?:"+[F+z+"?",z,N,P,B].join("|")+")",L=RegExp(T+"(?="+T+")|"+H+U,"g");var D=function(e){return e.match(L)||[]};var Z=function(e){return E(e)?D(e):$(e)};var M=function(e){return function(n){n=A(n);var r=E(n)?Z(n):void 0,t=r?r[0]:n.charAt(0),a=r?R(r,1).join(""):n.slice(1);return t[e]()+a}}("toUpperCase");var G=function(e){return M(A(e).toLowerCase())};var V=function(e,n,r,t){var a=-1,o=null==e?0:e.length;for(t&&o&&(r=e[++a]);++a<o;)r=n(r,e[a],a,e);return r};var W=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),J=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var q=function(e){return(e=A(e))&&e.replace(J,W).replace(Y,"")},X=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var K=function(e){return e.match(X)||[]},Q=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var ee=function(e){return Q.test(e)},ne="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",re="["+ne+"]",te="\\d+",ae="[\\u2700-\\u27bf]",oe="[a-z\\xdf-\\xf6\\xf8-\\xff]",fe="[^\\ud800-\\udfff"+ne+te+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",ue="[A-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:"+oe+"|"+fe+")",le="(?:"+ue+"|"+fe+")",se="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",pe="[\\ufe0e\\ufe0f]?"+se+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ce,ie].join("|")+")[\\ufe0e\\ufe0f]?"+se+")*"),he="(?:"+[ae,ce,ie].join("|")+")"+pe,be=RegExp([ue+"?"+oe+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[re,ue,"$"].join("|")+")",le+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[re,ue+de,"$"].join("|")+")",ue+"?"+de+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ue+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",te,he].join("|"),"g");var ge=function(e){return e.match(be)||[]};var ve=function(e,n,r){return e=A(e),void 0===(n=r?void 0:n)?ee(e)?ge(e):K(e):e.match(n)||[]},ye=RegExp("['’]","g");var xe=function(e){return function(n){return V(ve(q(n).replace(ye,"")),e,"")}}(function(e,n,r){return n=n.toLowerCase(),e+(r?G(n):n)});var me=function(e,n){return e===n||e!=e&&n!=n};var ke=function(n){var r=e(n);return null!=n&&("object"==r||"function"==r)},_e="[object AsyncFunction]",Se="[object Function]",je="[object GeneratorFunction]",we="[object Proxy]";var Ae=function(e){if(!ke(e))return!1;var n=y(e);return n==Se||n==je||n==_e||n==we},Ce=9007199254740991;var Re=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ce};var Oe=function(e){return null!=e&&Re(e.length)&&!Ae(e)},Ee=9007199254740991,$e=/^(?:0|[1-9]\d*)$/;var Be=function(n,r){var t=e(n);return!!(r=null==r?Ee:r)&&("number"==t||"symbol"!=t&&$e.test(n))&&n>-1&&n%1==0&&n<r};var ze=function(n,r,t){if(!ke(t))return!1;var a=e(r);return!!("number"==a?Oe(t)&&Be(r,t.length):"string"==a&&r in t)&&me(t[r],n)},Te="[object RegExp]";var Fe=function(e){return x(e)&&y(e)==Te};var Ne=function(e){return function(n){return e(n)}},Pe=function(e,n){return e(n={exports:{}},n.exports),n.exports}(function(e,n){var t=n&&!n.nodeType&&n,a=t&&e&&!e.nodeType&&e,o=a&&a.exports===t&&r.process,f=function(){try{var e=a&&a.require&&a.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=f}),Ie=Pe&&Pe.isRegExp,Ue=Ie?Ne(Ie):Fe,He=4294967295;var Le=function(e,n,r){return r&&"number"!=typeof r&&ze(e,n,r)&&(n=r=void 0),(r=void 0===r?He:r>>>0)?(e=A(e))&&("string"==typeof n||null!=n&&!Ue(n))&&!(n=w(n))&&E(e)?R(Z(e),0,r):e.split(n,r):[]},De=Object.prototype;var Ze=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||De)};var Me=function(e,n){return function(r){return e(n(r))}}(Object.keys,Object),Ge=Object.prototype.hasOwnProperty;var Ve,We=function(e){if(!Ze(e))return Me(e);var n=[];for(var r in Object(e))Ge.call(e,r)&&"constructor"!=r&&n.push(r);return n},Je=a["__core-js_shared__"],Ye=(Ve=/[^.]+$/.exec(Je&&Je.keys&&Je.keys.IE_PROTO||""))?"Symbol(src)_1."+Ve:"";var qe=function(e){return!!Ye&&Ye in e},Xe=Function.prototype.toString;var Ke=function(e){if(null!=e){try{return Xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Qe=/^\[object .+?Constructor\]$/,en=Function.prototype,nn=Object.prototype,rn=en.toString,tn=nn.hasOwnProperty,an=RegExp("^"+rn.call(tn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var on=function(e){return!(!ke(e)||qe(e))&&(Ae(e)?an:Qe).test(Ke(e))};var fn=function(e,n){return null==e?void 0:e[n]};var cn=function(e,n){var r=fn(e,n);return on(r)?r:void 0},un=cn(a,"DataView"),dn=cn(a,"Map"),ln=cn(a,"Promise"),sn=cn(a,"Set"),pn=cn(a,"WeakMap"),hn=Ke(un),bn=Ke(dn),gn=Ke(ln),vn=Ke(sn),yn=Ke(pn),xn=y;(un&&"[object DataView]"!=xn(new un(new ArrayBuffer(1)))||dn&&"[object Map]"!=xn(new dn)||ln&&"[object Promise]"!=xn(ln.resolve())||sn&&"[object Set]"!=xn(new sn)||pn&&"[object WeakMap]"!=xn(new pn))&&(xn=function(e){var n=y(e),r="[object Object]"==n?e.constructor:void 0,t=r?Ke(r):"";if(t)switch(t){case hn:return"[object DataView]";case bn:return"[object Map]";case gn:return"[object Promise]";case vn:return"[object Set]";case yn:return"[object WeakMap]"}return n});var mn=xn,kn="[object String]";var _n=function(e){return"string"==typeof e||!c(e)&&x(e)&&y(e)==kn};var Sn=function(e){return function(n){return null==n?void 0:n[e]}}("length"),jn="[\\ud800-\\udfff]",wn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",An="\\ud83c[\\udffb-\\udfff]",Cn="[^\\ud800-\\udfff]",Rn="(?:\\ud83c[\\udde6-\\uddff]){2}",On="[\\ud800-\\udbff][\\udc00-\\udfff]",En="(?:"+wn+"|"+An+")"+"?",$n="[\\ufe0e\\ufe0f]?"+En+("(?:\\u200d(?:"+[Cn,Rn,On].join("|")+")[\\ufe0e\\ufe0f]?"+En+")*"),Bn="(?:"+[Cn+wn+"?",wn,Rn,On,jn].join("|")+")",zn=RegExp(An+"(?="+An+")|"+Bn+$n,"g");var Tn=function(e){for(var n=zn.lastIndex=0;zn.test(e);)++n;return n};var Fn=function(e){return E(e)?Tn(e):Sn(e)},Nn="[object Map]",Pn="[object Set]";var In=function(e){if(null==e)return 0;if(Oe(e))return _n(e)?Fn(e):e.length;var n=mn(e);return n==Nn||n==Pn?e.size:We(e).length},Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hn=/^\w*$/;var Ln=function(n,r){if(c(n))return!1;var t=e(n);return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!k(n))||(Hn.test(n)||!Un.test(n)||null!=r&&n in Object(r))},Dn=cn(Object,"create");var Zn=function(){this.__data__=Dn?Dn(null):{},this.size=0};var Mn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},Gn="__lodash_hash_undefined__",Vn=Object.prototype.hasOwnProperty;var Wn=function(e){var n=this.__data__;if(Dn){var r=n[e];return r===Gn?void 0:r}return Vn.call(n,e)?n[e]:void 0},Jn=Object.prototype.hasOwnProperty;var Yn=function(e){var n=this.__data__;return Dn?void 0!==n[e]:Jn.call(n,e)},qn="__lodash_hash_undefined__";var Xn=function(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Dn&&void 0===n?qn:n,this};function Kn(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}Kn.prototype.clear=Zn,Kn.prototype.delete=Mn,Kn.prototype.get=Wn,Kn.prototype.has=Yn,Kn.prototype.set=Xn;var Qn=Kn;var er=function(){this.__data__=[],this.size=0};var nr=function(e,n){for(var r=e.length;r--;)if(me(e[r][0],n))return r;return-1},rr=Array.prototype.splice;var tr=function(e){var n=this.__data__,r=nr(n,e);return!(r<0)&&(r==n.length-1?n.pop():rr.call(n,r,1),--this.size,!0)};var ar=function(e){var n=this.__data__,r=nr(n,e);return r<0?void 0:n[r][1]};var or=function(e){return nr(this.__data__,e)>-1};var fr=function(e,n){var r=this.__data__,t=nr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this};function cr(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}cr.prototype.clear=er,cr.prototype.delete=tr,cr.prototype.get=ar,cr.prototype.has=or,cr.prototype.set=fr;var ir=cr;var ur=function(){this.size=0,this.__data__={hash:new Qn,map:new(dn||ir),string:new Qn}};var dr=function(n){var r=e(n);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n};var lr=function(e,n){var r=e.__data__;return dr(n)?r["string"==typeof n?"string":"hash"]:r.map};var sr=function(e){var n=lr(this,e).delete(e);return this.size-=n?1:0,n};var pr=function(e){return lr(this,e).get(e)};var hr=function(e){return lr(this,e).has(e)};var br=function(e,n){var r=lr(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this};function gr(e){var n=-1,r=null==e?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}gr.prototype.clear=ur,gr.prototype.delete=sr,gr.prototype.get=pr,gr.prototype.has=hr,gr.prototype.set=br;var vr=gr,yr="Expected a function";function xr(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(yr);var r=function r(){var t=arguments,a=n?n.apply(this,t):t[0],o=r.cache;if(o.has(a))return o.get(a);var f=e.apply(this,t);return r.cache=o.set(a,f)||o,f};return r.cache=new(xr.Cache||vr),r}xr.Cache=vr;var mr=xr,kr=500;var _r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sr=/\\(\\)?/g,jr=function(e){var n=mr(e,function(e){return r.size===kr&&r.clear(),e}),r=n.cache;return n}(function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(_r,function(e,r,t,a){n.push(t?a.replace(Sr,"$1"):r||e)}),n});var wr=function(e,n){return c(e)?e:Ln(e,n)?[e]:jr(A(e))},Ar=1/0;var Cr=function(e){if("string"==typeof e||k(e))return e;var n=e+"";return"0"==n&&1/e==-Ar?"-0":n};var Rr=function(e,n){for(var r=0,t=(n=wr(n,e)).length;null!=e&&r<t;)e=e[Cr(n[r++])];return r&&r==t?e:void 0};var Or=function(e,n,r){var t=null==e?void 0:Rr(e,n);return void 0===t?r:t},Er={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};function $r(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Le(e," ");if(2!==In(n))return e;var r=n[0].trim();r=xe(r);var t=n[1];void 0===t&&(t="base"),t=t.replace("-","").trim();var a=Or(Er,"default.".concat(r,".").concat(t),null);return null===a&&(a=e),a}var Br={props:{hasHeader:{type:Boolean,default:!0},hasFooter:{type:Boolean,default:!0},padding:{type:Number,default:20},borderRadius:{type:Number,default:5},headerBackgroundColor:{type:String,default:"grey lighten-5"},contentBackgroundColor:{type:String,default:"white"},footerBackgroundColor:{type:String,default:"grey lighten-5"},borderShadow:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{usePanelStyle:function(){var e={};return e["background-color"]=$r(this.contentBackgroundColor),e["border-radius"]="".concat(this.borderRadius,"px"),e},useHeaderStyle:function(){var e={};return e.padding="".concat(this.padding,"px"),e["border-bottom"]="1px solid #ddd",e["background-color"]=$r(this.headerBackgroundColor),e["border-radius"]="".concat(this.borderRadius,"px ").concat(this.borderRadius,"px 0 0"),e.display="flex",e["justify-content"]="flex-start",e["align-items"]="center",e},useContentStyle:function(){var e=this,n={},r="0 0",t="0 0";return e.hasHeader||(r="".concat(e.borderRadius,"px ").concat(e.borderRadius,"px")),e.hasFooter||(t="".concat(e.borderRadius,"px ").concat(e.borderRadius,"px")),n["border-radius"]="".concat(r," ").concat(t),n},useFooterStyle:function(){var e={};return e.padding="".concat(this.padding,"px"),e["border-top"]="1px solid #ddd",e["background-color"]=$r(this.footerBackgroundColor),e["border-radius"]="0 0 ".concat(this.borderRadius,"px ").concat(this.borderRadius,"px"),e}},methods:{}};var zr=function(e,n,r,t,a,o,f,c,i,u){"boolean"!=typeof f&&(i=c,c=f,f=!1);var d,l="function"==typeof r?r.options:r;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),t&&(l._scopeId=t),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):n&&(d=f?function(){n.call(this,u(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),d)if(l.functional){var s=l.render;l.render=function(e,n){return d.call(n),s(e,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return r},Tr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Fr=document.head||document.getElementsByTagName("head")[0],Nr={};var Pr=function(e){return function(e,n){return function(e,n){var r=Tr?n.media||"default":e,t=Nr[r]||(Nr[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);var a=n.source;if(n.map&&(a+="\n/*# sourceURL="+n.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),Fr.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(a),t.element.styleSheet.cssText=t.styles.filter(Boolean).join("\n");else{var o=t.ids.size-1,f=document.createTextNode(a),c=t.element.childNodes;c[o]&&t.element.removeChild(c[o]),c.length?t.element.insertBefore(f,c[o]):t.element.appendChild(f)}}}(e,n)}};const Ir=Br;var Ur=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:{shadow:e.borderShadow},style:[e.usePanelStyle]},[e.hasHeader?r("div",{style:[e.useHeaderStyle]},[e._t("icon"),e._v(" "),r("div",[e._t("title"),e._v(" "),e._t("description")],2)],2):e._e(),e._v(" "),r("div",{style:[e.useContentStyle]},[e._t("content")],2),e._v(" "),e.hasFooter?r("div",{style:[e.useFooterStyle]},[e._t("footer")],2):e._e()])};Ur._withStripped=!0;return zr({render:Ur,staticRenderFns:[]},function(e){e&&e("data-v-675ec275_0",{source:"\n.shadow[data-v-675ec275] {\r\n    transition: all 0.7s;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.shadow[data-v-675ec275]:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-3-w-component-vue\\w-component-vue\\src\\components\\WPanel.vue"],names:[],mappings:";AAmJA;IACA,oBAAA;IACA,mGAAA;AACA;AACA;IACA,mGAAA;AACA",file:"WPanel.vue",sourcesContent:["<template>\r\n    <div :class=\"{'shadow':borderShadow}\" :style=\"[usePanelStyle]\">\r\n\r\n        <div :style=\"[useHeaderStyle]\" v-if=\"hasHeader\">\r\n            <slot name=\"icon\"></slot>\r\n            <div>\r\n                <slot name=\"title\"></slot>\r\n                <slot name=\"description\"></slot>\r\n            </div>\r\n        </div>\r\n\r\n        <div :style=\"[useContentStyle]\">\r\n            <slot name=\"content\"></slot>\r\n        </div>\r\n\r\n        <div :style=\"[useFooterStyle]\" v-if=\"hasFooter\">\r\n            <slot name=\"footer\"></slot>\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\n\r\n/**\r\n * @vue-prop {Boolean} [hasHeader=true] 輸入是否有上部標題區，預設true\r\n * @vue-prop {Boolean} [hasFooter=true] 輸入是否有下部基底區，預設true\r\n * @vue-prop {Number} [padding=20] 輸入內間距，單位為px，預設20\r\n * @vue-prop {Number} [borderRadius=5] 輸入圓角寬度，單位為px，預設5\r\n * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'\r\n * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'\r\n * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true\r\n */\r\nexport default {\r\n    props: {\r\n        hasHeader: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        hasFooter: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        padding: {\r\n            type: Number,\r\n            default: 20,\r\n        },\r\n        borderRadius: {\r\n            type: Number,\r\n            default: 5,\r\n        },\r\n        headerBackgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        contentBackgroundColor: {\r\n            type: String,\r\n            default: 'white',\r\n        },\r\n        footerBackgroundColor: {\r\n            type: String,\r\n            default: 'grey lighten-5',\r\n        },\r\n        borderShadow: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        usePanelStyle: function() {\r\n            //console.log('computed usePanelStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['background-color'] = color2hex(vo.contentBackgroundColor)\r\n            s['border-radius'] = `${vo.borderRadius}px`\r\n\r\n            return s\r\n        },\r\n\r\n        useHeaderStyle: function() {\r\n            //console.log('computed useHeaderStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding'] = `${vo.padding}px`\r\n            s['border-bottom'] = '1px solid #ddd'\r\n            s['background-color'] = color2hex(vo.headerBackgroundColor)\r\n            s['border-radius'] = `${vo.borderRadius}px ${vo.borderRadius}px 0 0`\r\n            s['display'] = 'flex'\r\n            s['justify-content'] = 'flex-start'\r\n            s['align-items'] = 'center'\r\n\r\n            return s\r\n        },\r\n\r\n        useContentStyle: function() {\r\n            //console.log('computed useContentStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            let ch = '0 0'\r\n            let cf = '0 0'\r\n            if (!vo.hasHeader) {\r\n                ch = `${vo.borderRadius}px ${vo.borderRadius}px`\r\n            }\r\n            if (!vo.hasFooter) {\r\n                cf = `${vo.borderRadius}px ${vo.borderRadius}px`\r\n            }\r\n            s['border-radius'] = `${ch} ${cf}`\r\n\r\n            return s\r\n        },\r\n\r\n        useFooterStyle: function() {\r\n            //console.log('computed useFooterStyle')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding'] = `${vo.padding}px`\r\n            s['border-top'] = '1px solid #ddd'\r\n            s['background-color'] = color2hex(vo.footerBackgroundColor)\r\n            s['border-radius'] = `0 0 ${vo.borderRadius}px ${vo.borderRadius}px`\r\n\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.shadow {\r\n    transition: all 0.7s;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.shadow:hover {\r\n    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n</style>\r\n"]},media:void 0})},Ir,"data-v-675ec275",!1,void 0,Pr,void 0)});
//# sourceMappingURL=w-panel.umd.js.map
