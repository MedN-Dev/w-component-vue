/*!
 * w-badge v1.1.25
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-badge"]=b())})(this,function(){'use strict';function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":D&&D in Object(a)?z(a):C(a)}function c(b){return null!=b&&"object"==a(b)}function d(b){return"symbol"==a(b)||F(b)&&E(b)=="[object Symbol]"}function e(a){if("string"==typeof a)return a;if(u(a))return s(a,e)+"";if(G(a))return J?J.call(a):"";var b=a+"";return"0"==b&&1/a==-H?"-0":b}function f(b){var c=a(b);return null!=b&&("object"==c||"function"==c)}function g(b,c){var d=a(b);return c=null==c?9007199254740991:c,!!c&&("number"==d||"symbol"!=d&&Sa.test(b))&&-1<b&&0==b%1&&b<c}function h(b,c,d){if(!Oa(d))return!1;var e=a(c);return!("number"==e?!(Ra(d)&&Ta(c,d.length)):!("string"==e&&c in d))&&Na(d[c],b)}function i(a){if("white"===a)return"#fff";if("black"===a)return"#000";if("transparent"===a)return"#rgba(0,0,0,0)";var b=Xa(a," "),c=b[0].trim();c=Ma(c);var d=b[1];d===void 0&&(d="base"),d=d.replace("-","").trim();var e="#666";try{e=Ya.default[c][d]}catch(b){console.log("can not convert color: "+a,Ya.default)}return e}function j(a,b){var c=$a?b.media||"default":a,d=_a[c]||(_a[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var e=b.source;if(b.map&&(e+="\n/*# sourceURL="+b.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===k&&(k=document.head||document.getElementsByTagName("head")[0]),k.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var f=d.ids.size-1,g=document.createTextNode(e),h=d.element.childNodes;h[f]&&d.element.removeChild(h[f]),h.length?d.element.insertBefore(g,h[f]):d.element.appendChild(g)}}}var k,l="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,m="object"==a(l)&&l&&l.Object===Object&&l,n=m,o="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,p=n||o||Function("return this")(),q=p.Symbol,r=q,s=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e},t=Array.isArray,u=t,v=Object.prototype,w=v.hasOwnProperty,x=v.toString,y=r?r.toStringTag:void 0,z=function(a){var b=w.call(a,y),c=a[y];try{a[y]=void 0;var d=!0}catch(a){}var e=x.call(a);return d&&(b?a[y]=c:delete a[y]),e},A=Object.prototype,B=A.toString,C=function(a){return B.call(a)},D=r?r.toStringTag:void 0,E=b,F=c,G=d,H=1/0,I=r?r.prototype:void 0,J=I?I.toString:void 0,K=e,L=function(a){return null==a?"":K(a)},M=function(a,b,c){var d=-1,e=a.length;0>b&&(b=-b>e?0:e+b),c=c>e?e:c,0>c&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f},N=function(a,b,c){var d=a.length;return c=void 0===c?d:c,!b&&c>=d?a:M(a,b,c)},O=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),P=function(a){return O.test(a)},Q=function(a){return a.split("")},R="\\ud800-\\udfff",S="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",T="\\ud83c[\\udffb-\\udfff]",U="[^"+R+"]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",W="[\\ud800-\\udbff][\\udc00-\\udfff]",X="(?:"+S+"|"+T+")"+"?",Y="["+"\\ufe0e\\ufe0f"+"]?",Z="(?:"+"\\u200d"+"(?:"+[U,V,W].join("|")+")"+Y+X+")*",$="(?:"+[U+S+"?",S,V,W,"["+R+"]"].join("|")+")",_=RegExp(T+"(?="+T+")|"+$+(Y+X+Z),"g"),aa=function(a){return a.match(_)||[]},ba=function(a){return P(a)?aa(a):Q(a)},ca=function(a){return function(b){b=L(b);var c=P(b)?ba(b):void 0,d=c?c[0]:b.charAt(0),e=c?N(c,1).join(""):b.slice(1);return d[a]()+e}}("toUpperCase"),da=function(a){return ca(L(a).toLowerCase())},ea=function(a,b,c,d){var e=-1,f=null==a?0:a.length;for(d&&f&&(c=a[++e]);++e<f;)c=b(c,a[e],e,a);return c},fa=function(a){return function(b){return null==a?void 0:a[b]}}({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),ga=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ha=RegExp("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]","g"),ia=function(a){return a=L(a),a&&a.replace(ga,fa).replace(ha,"")},ja=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ka=function(a){return a.match(ja)||[]},la=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ma=function(a){return la.test(a)},na="\\ud800-\\udfff",oa="\\u2700-\\u27bf",pa="a-z\\xdf-\\xf6\\xf8-\\xff",qa="A-Z\\xc0-\\xd6\\xd8-\\xde",ra="\\xac\\xb1\\xd7\\xf7"+"\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"+"\\u2000-\\u206f"+" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sa="['\u2019]",ta="["+ra+"]",ua="\\d+",va="["+pa+"]",wa="[^"+na+ra+ua+oa+pa+qa+"]",xa="(?:\\ud83c[\\udde6-\\uddff]){2}",ya="[\\ud800-\\udbff][\\udc00-\\udfff]",za="["+qa+"]",Aa="(?:"+va+"|"+wa+")",Ba="(?:"+sa+"(?:d|ll|m|re|s|t|ve))?",Ca="(?:"+sa+"(?:D|LL|M|RE|S|T|VE))?",Da="(?:"+("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]")+"|"+"\\ud83c[\\udffb-\\udfff]"+")"+"?",Ea="["+"\\ufe0e\\ufe0f"+"]?",Fa="(?:"+"\\u200d"+"(?:"+["[^"+na+"]",xa,ya].join("|")+")"+Ea+Da+")*",Ga="(?:"+["["+oa+"]",xa,ya].join("|")+")"+(Ea+Da+Fa),Ha=RegExp([za+"?"+va+"+"+Ba+"(?="+[ta,za,"$"].join("|")+")","(?:"+za+"|"+wa+")"+"+"+Ca+"(?="+[ta,za+Aa,"$"].join("|")+")",za+"?"+Aa+"+"+Ba,za+"+"+Ca,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ua,Ga].join("|"),"g"),Ia=function(a){return a.match(Ha)||[]},Ja=function(a,b,c){return a=L(a),b=c?void 0:b,void 0===b?ma(a)?Ia(a):ka(a):a.match(b)||[]},Ka=RegExp("['\u2019]","g"),La=function(a){return function(b){return ea(Ja(ia(b).replace(Ka,"")),a,"")}}(function(a,b,c){return b=b.toLowerCase(),a+(c?da(b):b)}),Ma=La,Na=function(a,b){return a===b||a!==a&&b!==b},Oa=f,Pa=function(a){if(!Oa(a))return!1;var b=E(a);return b=="[object Function]"||b=="[object GeneratorFunction]"||b=="[object AsyncFunction]"||b=="[object Proxy]"},Qa=function(a){return"number"==typeof a&&-1<a&&0==a%1&&a<=9007199254740991},Ra=function(a){return null!=a&&Qa(a.length)&&!Pa(a)},Sa=/^(?:0|[1-9]\d*)$/,Ta=g,Ua=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){var c=b&&!b.nodeType&&b,d=c&&!0&&a&&!a.nodeType&&a,e=d&&d.exports===c,f=e&&n.process,g=function(){try{var a=d&&d.require&&d.require("util").types;return a?a:f&&f.binding&&f.binding("util")}catch(a){}}();a.exports=g}),Va=Ua&&Ua.isRegExp,Wa=Va?function(a){return function(b){return a(b)}}(Va):function(a){return F(a)&&E(a)=="[object RegExp]"},Xa=function(a,b,c){return(c&&"number"!=typeof c&&h(a,b,c)&&(b=c=void 0),c=void 0===c?4294967295:c>>>0,!c)?[]:(a=L(a),a&&("string"==typeof b||null!=b&&!Wa(b))&&(b=K(b),!b&&P(a))?N(ba(a),0,c):a.split(b,c))},Ya={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}},Za={props:{text:{type:String,default:""},textColor:{type:String,default:"white"},backgroundColor:{type:String,default:"red"}},data:function(){return{}},mounted:function(){},computed:{useStyle:function(){var a=this;return{padding:"2px 8px 3px","font-size":"0.8rem","border-radius":"10px","white-space":"nowrap",color:i(a.textColor),"background-color":i(a.backgroundColor)}}},methods:{}},$a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),_a={};var ab=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block",margin:"5px 20px 5px 0px",position:"relative"}},[a._t("default"),a._v(" "),c("div",{staticStyle:{position:"absolute",top:"0px",right:"10px",transform:"translateX(100%) translateY(-50%)"}},[c("span",{style:a.useStyle},[a._v(a._s(a.text))])])],2)};ab._withStripped=!0;var bb=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:ab,staticRenderFns:[]},function(a){a&&a("data-v-3c5647b9_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WBadge.vue"},media:void 0})},Za,"data-v-3c5647b9",!1,void 0,function(){return function(a,b){return j(a,b)}},void 0);return bb});
//# sourceMappingURL=w-badge.umd.js.map
