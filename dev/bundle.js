/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*! svg.js v2.6.3 MIT*/;!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e,i,n){return i+n.replace(g.regex.dots," .")}function n(t){for(var e=t.slice(0),i=e.length;i--;)Array.isArray(e[i])&&(e[i]=n(e[i]));return e}function r(t,e){return t instanceof e}function s(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function o(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function u(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function l(t,e,i){if(null==e||null==i){var n=t.bbox();null==e?e=n.width/n.height*i:null==i&&(i=n.height/n.width*e)}return{width:e,height:i}}function c(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function d(t){return t instanceof g.Matrix||(t=new g.Matrix(t)),t}function p(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function m(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e][0],null!=t[e][1]&&(n+=t[e][1],null!=t[e][2]&&(n+=" ",n+=t[e][2],null!=t[e][3]&&(n+=" ",n+=t[e][3],n+=" ",n+=t[e][4],null!=t[e][5]&&(n+=" ",n+=t[e][5],n+=" ",n+=t[e][6],null!=t[e][7]&&(n+=" ",n+=t[e][7])))));return n+" "}function x(e){for(var i=e.childNodes.length-1;i>=0;i--)e.childNodes[i]instanceof t.SVGElement&&x(e.childNodes[i]);return g.adopt(e).id(g.eid(e.nodeName))}function y(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function v(t){var e=t.toString().match(g.regex.reference);if(e)return e[1]}var g=this.SVG=function(t){if(g.supported)return t=new g.Doc(t),g.parser.draw||g.prepare(),t};if(g.ns="http://www.w3.org/2000/svg",g.xmlns="http://www.w3.org/2000/xmlns/",g.xlink="http://www.w3.org/1999/xlink",g.svgjs="http://svgjs.com/svgjs",g.supported=function(){return!!e.createElementNS&&!!e.createElementNS(g.ns,"svg").createSVGRect}(),!g.supported)return!1;g.did=1e3,g.eid=function(t){return"Svgjs"+a(t)+g.did++},g.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},g.extend=function(){var t,e,i,n;for(t=[].slice.call(arguments),e=t.pop(),n=t.length-1;n>=0;n--)if(t[n])for(i in e)t[n].prototype[i]=e[i];g.Set&&g.Set.inherit&&g.Set.inherit()},g.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,g.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&g.extend(e,t.extend),t.construct&&g.extend(t.parent||g.Container,t.construct),e},g.adopt=function(e){if(!e)return null;if(e.instance)return e.instance;var i;return i="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new g.Nested:new g.Doc:"linearGradient"==e.nodeName?new g.Gradient("linear"):"radialGradient"==e.nodeName?new g.Gradient("radial"):g[a(e.nodeName)]?new(g[a(e.nodeName)]):new g.Element(e),i.type=e.nodeName,i.node=e,e.instance=i,i instanceof g.Doc&&i.namespace().defs(),i.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),i},g.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new g.Doc(t):g.adopt(e.documentElement).nested()).size(2,0);g.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:i.polyline().node,path:i.path().node,native:g.create("svg")}},g.parser={native:g.create("svg")},e.addEventListener("DOMContentLoaded",function(){g.parser.draw||g.prepare()},!1),g.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},g.utils={map:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)r.push(e(t[i]));return r},filter:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)e(t[i])&&r.push(t[i]);return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(e){return this.filter(e,function(e){return e instanceof t.SVGElement})}},g.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},g.Color=function(t){var e;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?g.regex.isRgb.test(t)?(e=g.regex.rgb.exec(t.replace(g.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):g.regex.isHex.test(t)&&(e=g.regex.hex.exec(h(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b))},g.extend(g.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+u(this.r)+u(this.g)+u(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new g.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new g.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),g.Color.test=function(t){return t+="",g.regex.isHex.test(t)||g.regex.isRgb.test(t)},g.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},g.Color.isColor=function(t){return g.Color.isRgb(t)||g.Color.test(t)},g.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},g.extend(g.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new g.Array(n)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(g.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=n(this.value),t}}),g.PointArray=function(t,e){g.Array.call(this,t,e||[[0,0]])},g.PointArray.prototype=new g.Array,g.PointArray.prototype.constructor=g.PointArray,g.extend(g.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new g.PointArray(n)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t}else t=t.trim().split(g.regex.delimiter).map(parseFloat);t.length%2!=0&&t.pop();for(var i=0,n=t.length;i<n;i+=2)e.push([t[i],t[i+1]]);return e},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n=this.value.length-1;n>=0;n--)this.value[n]=[this.value[n][0]+t,this.value[n][1]+e];return this},size:function(t,e){var i,n=this.bbox();for(i=this.value.length-1;i>=0;i--)n.width&&(this.value[i][0]=(this.value[i][0]-n.x)*t/n.width+n.x),n.height&&(this.value[i][1]=(this.value[i][1]-n.y)*e/n.height+n.y);return this},bbox:function(){return g.parser.poly.setAttribute("points",this.toString()),g.parser.poly.getBBox()}});for(var w={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},b="mlhvqtcsaz".split(""),C=0,N=b.length;C<N;++C)w[b[C]]=function(t){return function(e,i,n){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,s=e.length;r<s;++r)e[r]=e[r]+(r%2?i.y:i.x);return w[t](e,i,n)}}(b[C].toUpperCase());g.PathArray=function(t,e){g.Array.call(this,t,e||[["M",0,0]])},g.PathArray.prototype=new g.Array,g.PathArray.prototype.constructor=g.PathArray,g.extend(g.PathArray,{toString:function(){return m(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n,r=this.value.length-1;r>=0;r--)n=this.value[r][0],"M"==n||"L"==n||"T"==n?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==n?this.value[r][1]+=t:"V"==n?this.value[r][1]+=e:"C"==n||"S"==n||"Q"==n?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==n&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==n&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var i,n,r=this.bbox();for(i=this.value.length-1;i>=0;i--)n=this.value[i][0],"M"==n||"L"==n||"T"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y):"H"==n?this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x:"V"==n?this.value[i][1]=(this.value[i][1]-r.y)*e/r.height+r.y:"C"==n||"S"==n||"Q"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y,this.value[i][3]=(this.value[i][3]-r.x)*t/r.width+r.x,this.value[i][4]=(this.value[i][4]-r.y)*e/r.height+r.y,"C"==n&&(this.value[i][5]=(this.value[i][5]-r.x)*t/r.width+r.x,this.value[i][6]=(this.value[i][6]-r.y)*e/r.height+r.y)):"A"==n&&(this.value[i][1]=this.value[i][1]*t/r.width,this.value[i][2]=this.value[i][2]*e/r.height,this.value[i][6]=(this.value[i][6]-r.x)*t/r.width+r.x,this.value[i][7]=(this.value[i][7]-r.y)*e/r.height+r.y);return this},equalCommands:function(t){var e,i,n;for(t=new g.PathArray(t),n=this.value.length===t.value.length,e=0,i=this.value.length;n&&e<i;e++)n=this.value[e][0]===t.value[e][0];return n},morph:function(t){return t=new g.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,i,n,r,s=this.value,o=this.destination.value,a=[],h=new g.PathArray;for(e=0,i=s.length;e<i;e++){for(a[e]=[s[e][0]],n=1,r=s[e].length;n<r;n++)a[e][n]=s[e][n]+(o[e][n]-s[e][n])*t;"A"===a[e][0]&&(a[e][4]=+(0!=a[e][4]),a[e][5]=+(0!=a[e][5]))}return h.value=a,h},parse:function(t){if(t instanceof g.PathArray)return t.valueOf();var e,n,r={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(g.regex.numbersWithDots,i).replace(g.regex.pathLetters," $& ").replace(g.regex.hyphen,"$1 -").trim().split(g.regex.delimiter):t.reduce(function(t,e){return[].concat.call(t,e)},[]);var n=[],s=new g.Point,o=new g.Point,a=0,h=t.length;do{g.regex.isPathLetter.test(t[a])?(e=t[a],++a):"M"==e?e="L":"m"==e&&(e="l"),n.push(w[e].call(null,t.slice(a,a+=r[e.toUpperCase()]).map(parseFloat),s,o))}while(h>a);return n},bbox:function(){return g.parser.path.setAttribute("d",this.toString()),g.parser.path.getBBox()}}),g.Number=g.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(g.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof g.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new g.Number(t),new g.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new g.Number(t),new g.Number(this-t,this.unit||t.unit)},times:function(t){return t=new g.Number(t),new g.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new g.Number(t),new g.Number(this/t,this.unit||t.unit)},to:function(t){var e=new g.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new g.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new g.Number(this.destination).minus(this).times(t).plus(this):this}}}),g.Element=g.invent({create:function(t){this._stroke=g.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=l(this,t,e);return this.width(new g.Number(i.width)).height(new g.Number(i.height))},clone:function(t,e){this.writeDataToDom();var i=x(this.node.cloneNode(!0));return t?t.add(i):this.after(i),i},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(g.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return g.get(this.attr(t))},parent:function(e){var i=this;if(!i.node.parentNode)return null;if(i=g.adopt(i.node.parentNode),!e)return i;for(;i&&i.node instanceof t.SVGElement;){if("string"==typeof e?i.matches(e):i instanceof e)return i;if("#document"==i.node.parentNode.nodeName)return null;i=g.adopt(i.node.parentNode)}},doc:function(){return this instanceof g.Doc?this:this.parent(g.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return s(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof g.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var n=0,r=i.firstChild.childNodes.length;n<r;n++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){(this.each?this:this.lines()).each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return r(this,t)}}}),g.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},g.morph=function(t){return function(e,i){return new g.MorphObj(e,i).at(t)}},g.Situation=g.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new g.Number(t.duration).valueOf(),this.delay=new g.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),g.FX=g.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,i){"object"==typeof t&&(e=t.ease,i=t.delay,t=t.duration);var n=new g.Situation({duration:t||1e3,delay:i||0,ease:g.easing[e||"-"]||e});return this.queue(n),this},delay:function(t){var e=new g.Situation({duration:t,delay:0,ease:g.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof g.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof g.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof g.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,i,n=this.situation;if(n.init)return this;for(t in n.animations)for(i=this.target()[t](),Array.isArray(i)||(i=[i]),Array.isArray(n.animations[t])||(n.animations[t]=[n.animations[t]]),e=i.length;e--;)n.animations[t][e]instanceof g.Number&&(i[e]=new g.Number(i[e])),n.animations[t][e]=i[e].morph(n.animations[t][e]);for(t in n.attrs)n.attrs[t]=new g.MorphObj(this.target().attr(t),n.attrs[t]);for(t in n.styles)n.styles[t]=new g.MorphObj(this.target().style(t),n.styles[t]);return n.initialTransformation=this.target().matrixify(),n.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return!0===this.situation.loops&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var i=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*i,this.situation.finish=this.situation.start+i,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var i=this.last();return i.loops=null==t||t,i.loop=0,e&&(i.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return e.reversed=void 0===t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last(),i=function i(n){n.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))};return this.target().on("finished.fx",i),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,g.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)}),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,g.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){if(t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops){var e,i,n;e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,n=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,n=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-n)%2))}else this.absPos=Math.min(this.absPos,1),this.pos=this.absPos;this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var r=this.situation.ease(this.pos);for(var s in this.situation.once)s>this.lastPos&&s<=r&&(this.situation.once[s].call(this.target(),this.pos,r),delete this.situation.once[s]);return this.active&&this.target().fire("during",{pos:this.pos,eased:r,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=r,this):this},eachAt:function(){var t,e,i,n=this,r=this.target(),s=this.situation;for(t in s.animations)i=[].concat(s.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r[t].apply(r,i);for(t in s.attrs)i=[t].concat(s.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r.attr.apply(r,i);for(t in s.styles)i=[t].concat(s.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r.style.apply(r,i);if(s.transforms.length){for(i=s.initialTransformation,t=0,e=s.transforms.length;t<e;t++){var o=s.transforms[t];o instanceof g.Matrix?i=o.relative?i.multiply((new g.Matrix).morph(o).at(s.ease(this.pos))):i.morph(o).at(s.ease(this.pos)):(o.relative||o.undo(i.extract()),i=i.multiply(o.at(s.ease(this.pos))))}r.matrix(i)}return this},once:function(t,e,i){var n=this.last();return i||(t=n.ease(t)),n.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:g.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new g.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new g.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),g.MorphObj=g.invent({create:function(t,e){return g.Color.isColor(e)?new g.Color(t).morph(e):g.regex.delimiter.test(t)?new g.Array(t).morph(e):g.regex.numberAndUnit.test(e)?new g.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),g.extend(g.FX,{attr:function(t,e,i){if("object"==typeof t)for(var n in t)this.attr(n,t[n]);else this.add(t,e,"attrs");return this},style:function(t,e){if("object"==typeof t)for(var i in t)this.style(i,t[i]);else this.add(t,e,"styles");return this},x:function(t,e){if(this.target()instanceof g.G)return this.transform({x:t},e),this;var i=new g.Number(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof g.G)return this.transform({y:t},e),this;var i=new g.Number(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",new g.Number(t))},cy:function(t){return this.add("cy",new g.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target()instanceof g.Text)this.attr("font-size",t);else{var i;t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",new g.Number(t)).add("height",new g.Number(e))}return this},width:function(t){return this.add("width",new g.Number(t))},height:function(t){return this.add("height",new g.Number(t))},plot:function(t,e,i,n){return 4==arguments.length?this.plot([t,e,i,n]):this.add("plot",new(this.target().morphArray)(t))},leading:function(t){return this.target().leading?this.add("leading",new g.Number(t)):this},viewbox:function(t,e,i,n){return this.target()instanceof g.Container&&this.add("viewbox",new g.ViewBox(t,e,i,n)),this},update:function(t){if(this.target()instanceof g.Stop){if("number"==typeof t||t instanceof g.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),g.Box=g.invent({create:function(t,e,i,n){if(!("object"!=typeof t||t instanceof g.Element))return g.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=i,this.height=n),y(this)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,y(e)},transform:function(t){var e,i=1/0,n=-1/0,r=1/0,s=-1/0;return[new g.Point(this.x,this.y),new g.Point(this.x2,this.y),new g.Point(this.x,this.y2),new g.Point(this.x2,this.y2)].forEach(function(e){e=e.transform(t),i=Math.min(i,e.x),n=Math.max(n,e.x),r=Math.min(r,e.y),s=Math.max(s,e.y)}),e=new this.constructor,e.x=i,e.width=n-i,e.y=r,e.height=s-r,y(e),e}}}),g.BBox=g.invent({create:function(t){if(g.Box.apply(this,[].slice.call(arguments)),t instanceof g.Element){var i;try{if(e.documentElement.contains){if(!e.documentElement.contains(t.node))throw new Exception("Element not in the dom")}else{for(var n=t.node;n.parentNode;)n=n.parentNode;if(n!=e)throw new Exception("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof g.Shape){var r=t.clone(g.parser.draw.instance).show();i=r.node.getBBox(),r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}g.Box.call(this,i)}},inherit:g.Box,parent:g.Element,construct:{bbox:function(){return new g.BBox(this)}}}),g.BBox.prototype.constructor=g.BBox,g.extend(g.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),g.RBox=g.invent({create:function(t){g.Box.apply(this,[].slice.call(arguments)),t instanceof g.Element&&g.Box.call(this,t.node.getBoundingClientRect())},inherit:g.Box,parent:g.Element,extend:{addOffset:function(){return this.x+=t.pageXOffset,this.y+=t.pageYOffset,this}},construct:{rbox:function(t){return t?new g.RBox(this).transform(t.screenCTM().inverse()):new g.RBox(this).addOffset()}}}),g.RBox.prototype.constructor=g.RBox,g.Matrix=g.invent({create:function(t){var e,i=f([1,0,0,1,0,0]);for(t=t instanceof g.Element?t.matrixify():"string"==typeof t?f(t.split(g.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):"object"==typeof t?t:i,e=M.length-1;e>=0;--e)this[M[e]]=null!=t[M[e]]?t[M[e]]:i[M[e]]},extend:{extract:function(){var t=c(this,0,1),e=c(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new g.Matrix(this)}},clone:function(){return new g.Matrix(this)},morph:function(t){return this.destination=new g.Matrix(t),this},at:function(t){return this.destination?new g.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t}):this},multiply:function(t){return new g.Matrix(this.native().multiply(d(t).native()))},inverse:function(){return new g.Matrix(this.native().inverse())},translate:function(t,e){return new g.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,n){return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),this.around(i,n,new g.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=g.utils.radians(t),this.around(e,i,new g.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,t,null!=e?e:t)},skew:function(t,e,i,n){return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),t=g.utils.radians(t),e=g.utils.radians(e),this.around(i,n,new g.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,i){return this.skew(t,0,e,i)},skewY:function(t,e,i){return this.skew(0,t,e,i)},around:function(t,e,i){
return this.multiply(new g.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new g.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=g.parser.native.createSVGMatrix(),e=M.length-1;e>=0;e--)t[M[e]]=this[M[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:g.Element,construct:{ctm:function(){return new g.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof g.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new g.Matrix(e)}return new g.Matrix(this.node.getScreenCTM())}}}),g.Point=g.invent({create:function(t,e){var i,n={x:0,y:0};i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:n,this.x=i.x,this.y=i.y},extend:{clone:function(){return new g.Point(this)},morph:function(t,e){return this.destination=new g.Point(t,e),this},at:function(t){return this.destination?new g.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t}):this},native:function(){var t=g.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new g.Point(this.native().matrixTransform(t.native()))}}}),g.extend(g.Element,{point:function(t,e){return new g.Point(t,e).transform(this.screenCTM().inverse())}}),g.extend(g.Element,{attr:function(t,e,i){if(null==t){for(t={},e=this.node.attributes,i=e.length-1;i>=0;i--)t[e[i].nodeName]=g.regex.isNumber.test(e[i].nodeValue)?parseFloat(e[i].nodeValue):e[i].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?g.defaults.attrs[t]:g.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(g.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof g.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new g.Number(e):g.Color.isColor(e)?e=new g.Color(e):Array.isArray(e)&&(e=new g.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),g.extend(g.Element,{transform:function(t,e){var i,n,r=this;if("object"!=typeof t)return i=new g.Matrix(r).extract(),"string"==typeof t?i[t]:i;if(i=new g.Matrix(r),e=!!e||!!t.relative,null!=t.a)i=e?i.multiply(new g.Matrix(t)):new g.Matrix(t);else if(null!=t.rotation)p(t,r),i=e?i.rotate(t.rotation,t.cx,t.cy):i.rotate(t.rotation-i.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(p(t,r),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var s=i.extract();t.scaleX=1*t.scaleX/s.scaleX,t.scaleY=1*t.scaleY/s.scaleY}i=i.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skew||null!=t.skewX||null!=t.skewY){if(p(t,r),t.skewX=null!=t.skew?t.skew:null!=t.skewX?t.skewX:0,t.skewY=null!=t.skew?t.skew:null!=t.skewY?t.skewY:0,!e){var s=i.extract();i=i.multiply((new g.Matrix).skew(s.skewX,s.skewY,t.cx,t.cy).inverse())}i=i.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?r.bbox()["c"+t.flip]:t.offset:null==t.offset?(n=r.bbox(),t.flip=n.cx,t.offset=n.cy):t.flip=t.offset,i=(new g.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(e?i=i.translate(t.x,t.y):(null!=t.x&&(i.e=t.x),null!=t.y&&(i.f=t.y)));return this.attr("transform",i)}}),g.extend(g.FX,{transform:function(t,e){var i,n,r=this.target();return"object"!=typeof t?(i=new g.Matrix(r).extract(),"string"==typeof t?i[t]:i):(e=!!e||!!t.relative,null!=t.a?i=new g.Matrix(t):null!=t.rotation?(p(t,r),i=new g.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(p(t,r),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,i=new g.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(p(t,r),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,i=new g.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?r.bbox()["c"+t.flip]:t.offset:null==t.offset?(n=r.bbox(),t.flip=n.cx,t.offset=n.cy):t.flip=t.offset,i=(new g.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(i=new g.Translate(t.x,t.y)),i?(i.relative=e,this.last().transforms.push(i),this._callStart()):this)}}),g.extend(g.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(g.regex.transforms).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(g.regex.delimiter).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])},new g.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),g.Transformation=g.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[i];else if("object"==typeof t)for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[this.arguments[i]];this.inversed=!1,!0===e&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],i=0,n=this.arguments.length;i<n;++i)e.push(this[this.arguments[i]]);var r=this._undo||new g.Matrix;return r=(new g.Matrix).morph(g.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){for(var e=0,i=this.arguments.length;e<i;++e)t[this.arguments[e]]=void 0===this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(g[a(this.method)])(t,!0).at(1),this}}}),g.Translate=g.invent({parent:g.Matrix,inherit:g.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),g.Rotate=g.invent({parent:g.Matrix,inherit:g.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new g.Matrix).rotate((new g.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){return this._undo=t,this}}}),g.Scale=g.invent({parent:g.Matrix,inherit:g.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),g.Skew=g.invent({parent:g.Matrix,inherit:g.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),g.extend(g.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!g.regex.isCss.test(t))return this.node.style[o(t)];for(t=t.split(/\s*;\s*/).filter(function(t){return!!t}).map(function(t){return t.split(/\s*:\s*/)});e=t.pop();)this.style(e[0],e[1])}else this.node.style[o(t)]=null===e||g.regex.isBlank.test(e)?"":e;return this}}),g.Parent=g.invent({create:function(t){this.constructor.call(this,t)},inherit:g.Element,extend:{children:function(){return g.utils.map(g.utils.filterSVGElements(this.node.childNodes),function(t){return g.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return g.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var i,n,r=this.children();for(i=0,n=r.length;i<n;i++)r[i]instanceof g.Element&&t.apply(r[i],[i,r]),e&&r[i]instanceof g.Container&&r[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),g.extend(g.Parent,{ungroup:function(t,e){return 0===e||this instanceof g.Defs||this.node==g.parser.draw?this:(t=t||(this instanceof g.Doc?this:this.parent(g.Parent)),e=e||1/0,this.each(function(){return this instanceof g.Defs?this:this instanceof g.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),g.Container=g.invent({create:function(t){this.constructor.call(this,t)},inherit:g.Parent}),g.ViewBox=g.invent({create:function(t){var e,i,n,r,s,o,a,h=[0,0,0,0],u=1,l=1,c=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof g.Element){for(o=t,a=t,s=(t.attr("viewBox")||"").match(c),t.bbox,n=new g.Number(t.width()),r=new g.Number(t.height());"%"==n.unit;)u*=n.value,n=new g.Number(o instanceof g.Doc?o.parent().offsetWidth:o.parent().width()),o=o.parent();for(;"%"==r.unit;)l*=r.value,r=new g.Number(a instanceof g.Doc?a.parent().offsetHeight:a.parent().height()),a=a.parent();this.x=0,this.y=0,this.width=n*u,this.height=r*l,this.zoom=1,s&&(e=parseFloat(s[0]),i=parseFloat(s[1]),n=parseFloat(s[2]),r=parseFloat(s[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=e,this.y=i,this.width=n,this.height=r)}else t="string"==typeof t?t.match(c).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):h,this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,i,n){return this.destination=new g.ViewBox(t,e,i,n),this},at:function(t){return this.destination?new g.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:g.Container,construct:{viewbox:function(t,e,i,n){return 0==arguments.length?new g.ViewBox(this):this.attr("viewBox",new g.ViewBox(t,e,i,n))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){g.Element.prototype[t]=function(e){return g.on(this.node,t,e),this}}),g.listeners=[],g.handlerMap=[],g.listenerId=0,g.on=function(t,e,i,n,r){var s=i.bind(n||t.instance||t),o=(g.handlerMap.indexOf(t)+1||g.handlerMap.push(t))-1,a=e.split(".")[0],h=e.split(".")[1]||"*";g.listeners[o]=g.listeners[o]||{},g.listeners[o][a]=g.listeners[o][a]||{},g.listeners[o][a][h]=g.listeners[o][a][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++g.listenerId),g.listeners[o][a][h][i._svgjsListenerId]=s,t.addEventListener(a,s,r||!1)},g.off=function(t,e,i){var n=g.handlerMap.indexOf(t),r=e&&e.split(".")[0],s=e&&e.split(".")[1],o="";if(-1!=n)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;g.listeners[n][r]&&g.listeners[n][r][s||"*"]&&(t.removeEventListener(r,g.listeners[n][r][s||"*"][i],!1),delete g.listeners[n][r][s||"*"][i])}else if(s&&r){if(g.listeners[n][r]&&g.listeners[n][r][s]){for(i in g.listeners[n][r][s])g.off(t,[r,s].join("."),i);delete g.listeners[n][r][s]}}else if(s)for(e in g.listeners[n])for(o in g.listeners[n][e])s===o&&g.off(t,[e,s].join("."));else if(r){if(g.listeners[n][r]){for(o in g.listeners[n][r])g.off(t,[r,o].join("."));delete g.listeners[n][r]}}else{for(e in g.listeners[n])g.off(t,e);delete g.listeners[n],delete g.handlerMap[n]}},g.extend(g.Element,{on:function(t,e,i,n){return g.on(this.node,t,e,i,n),this},off:function(t,e){return g.off(this.node,t,e),this},fire:function(e,i){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new t.CustomEvent(e,{detail:i,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),g.Defs=g.invent({create:"defs",inherit:g.Container}),g.G=g.invent({create:"g",inherit:g.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new g.G)}}}),g.extend(g.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof g.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof g.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),g.Mask=g.invent({create:function(){this.constructor.call(this,g.create("mask")),this.targets=[]},inherit:g.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new g.Mask)}}}),g.extend(g.Element,{maskWith:function(t){return this.masker=t instanceof g.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),g.ClipPath=g.invent({create:function(){this.constructor.call(this,g.create("clipPath")),this.targets=[]},inherit:g.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new g.ClipPath)}}}),g.extend(g.Element,{clipWith:function(t){return this.clipper=t instanceof g.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),g.Gradient=g.invent({create:function(t){this.constructor.call(this,g.create(t+"Gradient")),this.type=t},inherit:g.Container,extend:{at:function(t,e,i){return this.put(new g.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),g.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),g.extend(g.Gradient,g.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new g.Number(t),fy:new g.Number(e)}):this.attr({x1:new g.Number(t),y1:new g.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new g.Number(t),cy:new g.Number(e)}):this.attr({x2:new g.Number(t),y2:new g.Number(e)})}}),g.extend(g.Defs,{gradient:function(t,e){return this.put(new g.Gradient(t)).update(e)}}),g.Stop=g.invent({create:"stop",inherit:g.Element,extend:{update:function(t){return("number"==typeof t||t instanceof g.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new g.Number(t.offset)),this}}}),g.Pattern=g.invent({create:"pattern",inherit:g.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),g.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),g.extend(g.Defs,{pattern:function(t,e,i){return this.put(new g.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),g.Doc=g.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,g.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:g.Container,extend:{namespace:function(){return this.attr({xmlns:g.ns,version:"1.1"}).attr("xmlns:xlink",g.xlink,g.xmlns).attr("xmlns:svgjs",g.svgjs,g.xmlns)},defs:function(){if(!this._defs){var t;(t=this.node.getElementsByTagName("defs")[0])?this._defs=g.adopt(t):this._defs=new g.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,g.parser.draw.parentNode||this.node.appendChild(g.parser.draw),this}}}),g.Shape=g.invent({create:function(t){this.constructor.call(this,t)},inherit:g.Element}),g.Bare=g.invent({create:function(t,e){if(this.constructor.call(this,g.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:g.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),g.extend(g.Parent,{element:function(t,e){return this.put(new g.Bare(t,e))}}),g.Symbol=g.invent({create:"symbol",inherit:g.Container,construct:{symbol:function(){return this.put(new g.Symbol)}}}),g.Use=g.invent({create:"use",inherit:g.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,g.xlink)}},construct:{use:function(t,e){return this.put(new g.Use).element(t,e)}}}),g.Rect=g.invent({create:"rect",inherit:g.Shape,construct:{rect:function(t,e){return this.put(new g.Rect).size(t,e)}}}),g.Circle=g.invent({create:"circle",inherit:g.Shape,construct:{circle:function(t){return this.put(new g.Circle).rx(new g.Number(t).divide(2)).move(0,0)}}}),g.extend(g.Circle,g.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),g.Ellipse=g.invent({create:"ellipse",inherit:g.Shape,construct:{ellipse:function(t,e){return this.put(new g.Ellipse).size(t,e).move(0,0)}}}),g.extend(g.Ellipse,g.Rect,g.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),g.extend(g.Circle,g.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new g.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new g.Number(t).divide(2))},size:function(t,e){var i=l(this,t,e);return this.rx(new g.Number(i.width).divide(2)).ry(new g.Number(i.height).divide(2))}}),g.Line=g.invent({create:"line",inherit:g.Shape,extend:{array:function(){return new g.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,n){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:n}:new g.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=l(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,n){return g.Line.prototype.plot.apply(this.put(new g.Line),null!=t?[t,e,i,n]:[0,0,0,0])}}}),g.Polyline=g.invent({create:"polyline",inherit:g.Shape,construct:{polyline:function(t){return this.put(new g.Polyline).plot(t||new g.PointArray)}}}),g.Polygon=g.invent({create:"polygon",inherit:g.Shape,construct:{polygon:function(t){return this.put(new g.Polygon).plot(t||new g.PointArray)}}}),g.extend(g.Polyline,g.Polygon,{array:function(){return this._array||(this._array=new g.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new g.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=l(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),g.extend(g.Line,g.Polyline,g.Polygon,{morphArray:g.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),g.Path=g.invent({create:"path",inherit:g.Shape,extend:{morphArray:g.PathArray,array:function(){return this._array||(this._array=new g.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new g.PathArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=l(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new g.Path).plot(t||new g.PathArray)}}}),g.Image=g.invent({create:"image",inherit:g.Shape,extend:{load:function(e){if(!e)return this;var i=this,n=new t.Image;return g.on(n,"load",function(){var t=i.parent(g.Pattern);null!==t&&(0==i.width()&&0==i.height()&&i.size(n.width,n.height),t&&0==t.width()&&0==t.height()&&t.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:n.width,height:n.height,ratio:n.width/n.height,url:e}))}),g.on(n,"error",function(t){"function"==typeof i._error&&i._error.call(i,t)}),this.attr("href",n.src=this.src=e,g.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new g.Image).load(t).size(e||0,i||e||0)}}}),g.Text=g.invent({create:function(){this.constructor.call(this,g.create("text")),this.dom.leading=new g.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",g.defaults.attrs["font-family"])},inherit:g.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if(void 0===t){for(var t="",e=this.node.childNodes,i=0,n=e.length;i<n;++i)0!=i&&3!=e[i].nodeType&&1==g.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var i=0,r=t.length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new g.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=g.utils.map(g.utils.filterSVGElements(t.childNodes),function(t){return g.adopt(t)});return new g.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,n=this.dom.leading*new g.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=n:(this.attr("dy",n+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new g.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new g.Text).text(t)},plain:function(t){return this.put(new g.Text).plain(t)}}}),g.Tspan=g.invent({create:"tspan",inherit:g.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(g.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),g.extend(g.Text,g.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new g.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),g.TextPath=g.invent({create:"textPath",inherit:g.Parent,parent:g.Text,construct:{morphArray:g.PathArray,path:function(t){for(var e=new g.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,g.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return g.adopt(this.node.firstChild)}}}),g.Nested=g.invent({create:function(){this.constructor.call(this,g.create("svg")),this.style("overflow","visible")},inherit:g.Container,construct:{nested:function(){return this.put(new g.Nested)}}}),g.A=g.invent({create:"a",inherit:g.Container,extend:{to:function(t){return this.attr("href",t,g.xlink)},show:function(t){return this.attr("show",t,g.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new g.A).to(t)}}}),g.extend(g.Element,{linkTo:function(t){var e=new g.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),g.Marker=g.invent({create:"marker",inherit:g.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),g.extend(g.Defs,{marker:function(t,e,i){return this.put(new g.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),g.extend(g.Line,g.Polyline,g.Polygon,g.Path,{marker:function(t,e,i,n){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof g.Marker?arguments[1]:this.doc().marker(e,i,n),this.attr(r,t)}});var A={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if(void 0===i)return this;if("string"==typeof i||g.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=A[t].length-1;e>=0;e--)null!=i[A[t][e]]&&this.attr(A.prefix(t,A[t][e]),i[A[t][e]]);return this},g.extend(g.Element,g.FX,i)}),g.extend(g.Element,g.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:i}):this.transform({skewX:t,skewY:e,cx:i,cy:n})},scale:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:n})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new g.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new g.Number(t).plus(this instanceof g.FX?0:this.x()),!0)},dy:function(t){return this.y(new g.Number(t).plus(this instanceof g.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),g.extend(g.Rect,g.Ellipse,g.Circle,g.Gradient,g.FX,{radius:function(t,e){var i=(this._target||this).type;return"radial"==i||"circle"==i?this.attr("r",new g.Number(t)):this.rx(t).ry(null==e?t:e)}}),g.extend(g.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),g.extend(g.Parent,g.Text,g.Tspan,g.FX,{font:function(t,e){if("object"==typeof t)for(e in t)this.font(e,t[e]);return"leading"==t?this.leading(e):"anchor"==t?this.attr("text-anchor",e):"size"==t||"family"==t||"weight"==t||"stretch"==t||"variant"==t||"style"==t?this.attr("font-"+t,e):this.attr(t,e)}}),g.Set=g.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;t<e;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new g.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){return new g.Set(t)}}}),g.FX.Set=g.invent({create:function(t){this.set=t}}),g.Set.inherit=function(){var t,e=[];for(var t in g.Shape.prototype)"function"==typeof g.Shape.prototype[t]&&"function"!=typeof g.Set.prototype[t]&&e.push(t);e.forEach(function(t){g.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new g.FX.Set(this)):this}}),e=[]
;for(var t in g.FX.prototype)"function"==typeof g.FX.prototype[t]&&"function"!=typeof g.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){g.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},g.extend(g.Element,{data:function(t,e,i){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:!0===i||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),g.extend(g.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),g.get=function(t){var i=e.getElementById(v(t)||t);return g.adopt(i)},g.select=function(t,i){return new g.Set(g.utils.map((i||e).querySelectorAll(t),function(t){return g.adopt(t)}))},g.extend(g.Parent,{select:function(t){return g.select(t,this.node)}});var M="abcdef".split("");if("function"!=typeof t.CustomEvent){var P=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=e.createEvent("CustomEvent");return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n};P.prototype=t.Event.prototype,t.CustomEvent=P}return function(e){for(var i=0,n=["moz","webkit"],r=0;r<n.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[r]+"CancelAnimationFrame"]||e[n[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+r)},r);return i=n+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),g});
class PaperdollDisplayer {

  constructor(dollConfig, DOMElementID) {
    this.dollConfig = dollConfig;
    this.DOMElement = $('#'+DOMElementID);
    //REPLACE 'drawing' with DOMElement.id
    this.doll = {};
    this.animationInterval;
    this.animation = {};
    this.connectionPoints = [];
    this.axlePoints = [];

    this.canvasSize = {
      width: this.DOMElement.width(),
      height: this.DOMElement.height()
    }
    this.draw = SVG(DOMElementID).size(this.canvasSize.width, this.canvasSize.height);
    for (var part in dollConfig) {
      this.drawLimb(part);
    }

    this.updateInterval = setInterval(this.update.bind(this), 10);
    this.freshState = {
      time:0,
      groups: this.createKeyframeObject(this.doll)
    };

    this.playAnimation({keyframes:[], cameraSetting: 'body'})
  }

  /*
  *  DRAWING 
  *  SVGS
  */

  drawLimb(limbName) {
    var wrapper = this.draw.nested();
    wrapper.viewbox(0,0,this.canvasSize.width,this.canvasSize.height);
    wrapper.width(this.canvasSize.width);
    wrapper.height(this.canvasSize.height);
    this.doll[limbName] = Object.assign({},this.dollConfig[limbName]);
    this.doll[limbName].wrapper = wrapper;
    this.doll[limbName].group = wrapper.group();
    this.doll[limbName].parts = [];


    this.doll[limbName].wrapper.center(
      this.doll[limbName].wrapper.parent().node.clientWidth/2,
      this.doll[limbName].wrapper.parent().node.clientHeight/3.3      
    );

    for (var partIndex in this.dollConfig[limbName].parts) {
      var part = this.dollConfig[limbName].parts[partIndex];
      var drawnPart = 
      wrapper.rect(
        part.width, 
        part.height
      ).attr({ 
        fill: part.fill, 
        opacity: 1, 
        id: limbName,
        rx: part.radius,
        ry: part.radius
      });
      drawnPart.center(
        this.doll[limbName].wrapper.width()/2+part.offsetX,
        this.doll[limbName].wrapper.height()/2+part.offsetY
      );
      var dollPart = {element: drawnPart, data: part};
      this.doll[limbName].parts.push(dollPart);
      this.doll[limbName].group.add(drawnPart);
    }

    this.drawConnectionPoints(limbName);
    this.drawAxlePoint(limbName);
  }


  drawAxlePoint(limbName, visible) {
    this.doll[limbName].axle = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#0f0', opacity: visible ? 0.2 : 0 });
    this.axlePoints.push(this.doll[limbName].axle);
  }
  drawConnectionPoints(limbName, visible) {
    //connectionpoints
    for (var connectionFor in this.dollConfig[limbName].connectionsFor) {
      var connection = this.dollConfig[limbName].connectionsFor[connectionFor];
      connection.point = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#f00', opacity: visible ? 0.2 : 0 });
      connection.point.center(
        this.doll[limbName].wrapper.width()/2,
        this.doll[limbName].wrapper.height()/2
      );
      this.connectionPoints.push(connection.point);
      //doll[limbName].group.add(connection.point);
    }
  }

  toggleVisibleConnectionPoints(visible) {
    this.connectionPoints.forEach(function(connectionPoint) {
      connectionPoint.attr({ fill: '#f00', opacity: visible ? 0.2 : 0 });
    });
  }

  toggleVisibleAxlePoints(visible) {
    this.axlePoints.forEach(function(axlePoint) {
      axlePoint.attr({ fill: '#0f0', opacity: visible ? 0.2 : 0 });
    });
  }

  /*
  * CAMERA
  *
  */
  cameraZoomToLimb(limbName, zoomLevel, duration) {
    setTimeout(function(){
      this.draw.animate(duration,'<>').viewbox(
        this.doll[limbName].wrapper.cx()-(this.canvasSize.width/zoomLevel)/2,
        this.doll[limbName].wrapper.cy()-(this.canvasSize.height/zoomLevel)/2,
        this.canvasSize.width/zoomLevel,
        this.canvasSize.height/zoomLevel
      );
    }.bind(this),50)
  }


  /*
  * ANIMATION & KEYFRAMES
  *
  */
  playAnimation(config, loop, cbFinished, timelineEditor) {
    if(config.cameraSetting) {
      if (config.cameraSetting === 'face') {
        this.cameraZoomToLimb('head', 2, 750)
      }
      if (config.cameraSetting === 'body') {
        this.cameraZoomToLimb('torso', 1.5, 750)
      }
    }
    this.animation = {
      keyframes: config.keyframes ? config.keyframes : [],
      msBetweenFrames: 10,
      frameCurrent: 0,
      framesRemaining: 0,
      currentAnimations: {},
      loop: loop
    }
    var currentKeyFrame = 0;

    if (this.animation.keyframes.length == 0) {
      this.animation.keyframes.unshift(this.freshState)
    }
    
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(function(){


      if (currentKeyFrame === this.animation.keyframes.length-1) {
        //If animation is done
        clearInterval(this.animationInterval);
        if (this.animation.loop) {
          this.playAnimation(config, true)
          if(cbFinished) {
            cbFinished();
          }
        }
        return;
      } else {
        //If animation is in progress
        for (var k in this.animation.keyframes) {
          var keyframe = this.animation.keyframes[k];
          if (keyframe.time == this.animation.frameCurrent) {
            currentKeyFrame = Number(k);
            if (currentKeyFrame !== this.animation.keyframes.length-1) {
              //Make sure we haven't hit our last keyframe before trying to process the next one
              this.processKeyframe(keyframe, this.animation.frameCurrent);
              this.animation.framesRemaining = (this.animation.keyframes.length-1)-this.animation.keyframes.indexOf(keyframe);
            }
          }
        }

        for (var g in this.animation.currentAnimations) {
          for (var limbName in this.animation.currentAnimations[g]) {
            if(!this.animation.currentAnimations[g][limbName].to) {
              continue;
            }
            var values = this.animation.currentAnimations[g][limbName];
            if (this.doll[g][limbName] !== this.animation.currentAnimations[g][limbName].to) {
              this.doll[g][limbName] = this.doll[g][limbName] + values.stepPerFrame;

            }
            if (Math.round(this.doll[g][limbName]) == Math.round(values.to)) {
              delete this.animation.currentAnimations[g][limbName];
            }
          }
        }
        if (timelineEditor) {
          timelineEditor.updateTimeline(this.animation.keyframes);
        }
        this.animation.frameCurrent += 10;
      }

    }.bind(this), this.animation.msBetweenFrames);
    //reset
    this.poseCharacter(config.keyframes[0]);

  }

  processKeyframe(keyframe, frameCurrent) {

    //Info from this keyframe
    for (var g in keyframe.groups) {
      var group = keyframe.groups[g];
      this.animation.currentAnimations[g] = {};
      for (var limbName in group) {
        var value = group[limbName];
        this.animation.currentAnimations[g][limbName] = {
          from: this.doll[g][limbName]
        }
      }
    }

    for (var g in this.animation.currentAnimations) {
      var currentGroupAnim = this.animation.currentAnimations[g];
      var nextKeyFrame = this.animation.keyframes[this.animation.keyframes.indexOf(keyframe)+1];
      var nextGroupAnimInfo = nextKeyFrame.groups[g];
      for (var limbName in nextGroupAnimInfo) {
        if (currentGroupAnim[limbName] == undefined) {continue;}
        if (!currentGroupAnim[limbName].to) {
          if (currentGroupAnim[limbName].from === nextGroupAnimInfo[limbName]) {
            continue;
          }
          console.log('keyframe: ', this.animation.keyframes.indexOf(keyframe), '- animate', g, limbName)
          currentGroupAnim[limbName].to = nextGroupAnimInfo[limbName];

          var aDiff = this.angleDiff(currentGroupAnim[limbName].from, currentGroupAnim[limbName].to)
          var framesToPlayWith = (nextKeyFrame.time - frameCurrent) / this.animation.msBetweenFrames;
          currentGroupAnim[limbName].stepPerFrame = aDiff.direction * (aDiff.distance / framesToPlayWith);
          currentGroupAnim[limbName].current = currentGroupAnim[limbName].from;
        }
      }
      
    }

  }


  createKeyframeObject(char){
    var groups = {};
    var props = [
      'rotation',
      'xscale',
      'yscale',
    ];
    
    for (var group in char) {
      groups[group] = {};
      for (var index in props) {
        var limbName = props[index];
        groups[group][limbName] = Number(char[group][limbName]);
      }
    }
    return groups;
  }

  poseCharacter(keyframe) {
    //reset
    for (var g in keyframe.groups) {
      for (var limbName in keyframe.groups[g]) {
        this.doll[g][limbName] = keyframe.groups[g][limbName];
      }
    }
  }

  /*
  * UPDATE
  *
  */

  update() {

    for (var limbName in this.doll) {


      for (var i = 0; i < this.doll[limbName].parts.length; i++) {
        var part = this.doll[limbName].parts[i];

        part.element.width(part.data.width*this.doll[limbName].xscale);
        part.element.height(part.data.height*this.doll[limbName].yscale);

        var posFromEdge = this.positionFromEdge(part, this.doll[limbName].wrapper);
        part.element.center(
          posFromEdge.x,
          posFromEdge.y
        );
      }

      this.updateAxlePoint(limbName);
      this.updateConnectionPoints(limbName);

      //limbName has connection
      if (this.doll[limbName].connectsTo) {
        var connectsTo = this.doll[this.doll[limbName].connectsTo];
        var connection = connectsTo.connectionsFor[limbName];
        this.doll[limbName].wrapper.center(
          connectsTo.wrapper.x() + connection.point.cx(),
          connectsTo.wrapper.y() + connection.point.cy()
        );

      }
      if (this.doll[limbName].rotation !== undefined) {
        if(this.doll[limbName].inheritsRotation) {
          var connectedTo = this.doll[this.doll[limbName].connectsTo];
          this.doll[limbName].group.rotate(connectedTo.rotation+this.doll[limbName].rotation, this.doll[limbName].wrapper.width()/2, this.doll[limbName].wrapper.height()/2);

        } else {
          this.doll[limbName].group.rotate(this.doll[limbName].rotation, this.doll[limbName].wrapper.width()/2, this.doll[limbName].wrapper.height()/2);
        }
      }

    }


  }

  updateAxlePoint(limbName) {
    if (this.doll[limbName].axle) {
      this.doll[limbName].axle.center(
        this.doll[limbName].wrapper.width()/2,
        this.doll[limbName].wrapper.height()/2
      );
    }
  }


  updateConnectionPoints(limbName) {
    //connectionpoints
    for (var connectionFor in this.doll[limbName].connectionsFor) {
      var connection = this.doll[limbName].connectionsFor[connectionFor];
      var posFromEdge = this.positionFromEdge2(connection, this.doll[limbName]);

      var pointDir = this.pointDirection({x:this.doll[limbName].wrapper.width()/2,y:this.doll[limbName].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      var pointDist = this.pointDistance({x:this.doll[limbName].wrapper.width()/2,y:this.doll[limbName].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      
      var pdir1 = this.normalizeAngle(pointDir) / 57;
      var pdir2 = this.normalizeAngle(this.doll[limbName].group.transform().rotation) / 57;
      var pdir3 = pdir1+pdir2;

      var offset = this.lengthDir(pointDist,pdir3);

      connection.point.center(
        ((this.doll[limbName].wrapper.width()/2)+offset.x),
        ((this.doll[limbName].wrapper.height()/2)+offset.y)
      );

    }
  }

  /*
  * UTILS
  *
  */

  positionFromEdge(part, wrapper) {
    var horizontal, vertical;

    if (part.data.left) {
      var templeft = part.data.left;
      if (isNaN(templeft)) {templeft = part.element.width()/2;}
      horizontal = (wrapper.width()/2)-(part.element.width()/2)+templeft;
    } else if (part.data.right) {
      var tempright = part.data.right;
      if (isNaN(tempright)) {tempright = part.element.width()/2;}
      horizontal = (wrapper.width()/2)+(part.element.width()/2)-tempright;
    }

    if (part.data.top) {
      var temptop = part.data.top;
      if (isNaN(temptop)) {temptop = part.element.height()/2;}
      vertical = (wrapper.height()/2)+(part.element.height()/2)-temptop;
    } else if (part.data.bottom) {
      var tempbottom = part.data.bottom;
      if (isNaN(tempbottom)) {tempbottom = part.element.height()/2;}
      vertical = (wrapper.height()/2)-(part.element.height()/2)+tempbottom;
    }
    return {x:horizontal, y:vertical};
  }

  positionFromEdge2(info, limb) {
    var horizontal, vertical;

    if (info.left !== undefined) {
      var templeft = info.left;
      if (isNaN(templeft)) {templeft = limb.parts[0].element.width()/2;}
      horizontal = limb.parts[0].element.x() + templeft;
    } else if (info.right !== undefined) {
      var tempright = info.right;
      if (isNaN(tempright)) {tempright = limb.parts[0].element.width()/2;}
      horizontal = limb.parts[0].element.x() + limb.parts[0].element.width() - tempright;
    }

    if (info.top !== undefined) {
      var temptop = info.top;
      if (isNaN(temptop)) {temptop = limb.parts[0].element.height()/2;}
      vertical = limb.parts[0].element.y() + temptop;
    } else if (info.bottom !== undefined) {
      var tempbottom = info.bottom;
      if (isNaN(tempbottom)) {tempbottom = limb.parts[0].element.height()/2;}
      vertical = limb.parts[0].element.y() + limb.parts[0].element.height() - tempbottom;
    }
    return {x:horizontal, y:vertical};
  }

  angleDiff(a, b) {
    var direction = 1;
    //Takes angles between 0 and 360
    var checkNegativeLength = 0; 
    var checkPositiveLength = 0;
    if(a>b){
      checkNegativeLength = a-b;
      checkPositiveLength = (360-a)+b;
    }
    if(b>a){
      checkNegativeLength = Math.abs(((b-360)-a));
      checkPositiveLength = Math.abs(a-b);
    }
    if (checkNegativeLength < checkPositiveLength) {
      direction = -1;
    }
    //Returns the smallest of the two lengths and its direction
    return {
      direction: direction,
      distance: Math.min(checkNegativeLength, checkPositiveLength)
    };
  }


  pointDirection(pointA, pointB) {
    // Returns angle between two vectors
    return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
  }

  pointDistance(pointA, pointB) {
    //Returns Distance between two points
    //pythagoras squareRoot(a*a + b*b = c*c) = c
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)); 
  }


  lengthDir(length, direction) { //vector, magnitude
    if (direction < 0) direction += 360;

    return {
      x: length*Math.cos(direction),
      y: length*Math.sin(direction)
    };
  }

  normalizeAngle(angle) {
    return Number((angle+360)%360).toFixed(2);
  }

}
class PaperdollTimelineEditor {

  constructor(paperdollDisplayer) {
    this.keyframedragging;
    this.basisPoint = $('#timeline')[0].offsetWidth/10000;
    this.timeline = {}
    this.paperdollDisplayer = paperdollDisplayer;
    setTimeout(function(){
      this.updateTimeline(this.paperdollDisplayer.animation.keyframes)
      this.paperdollDisplayer.toggleVisibleConnectionPoints(true);
      this.paperdollDisplayer.toggleVisibleAxlePoints(true);
      this.ui();

    }.bind(this),300)
    this.createSelectListOfAnimations();
  }

  createSelectListOfAnimations() {
    this.animationSelectorInput = $("<select></select>").attr("id", "animations").attr("name", "animations");
    
    Object.keys(presetAnimations).forEach(function(animationName){
      this.animationSelectorInput
        .append($("<option></option>")
        .attr("value", animationName)
        .text(animationName));
    }.bind(this))
    $("#options").append(this.animationSelectorInput);
  }


  /*
  * TIMELINE/EDITOR
  *
  */

  updateTimeline(keyframes) {
    this.timeline.keyframes = keyframes;
    (this.timeline.keyframes).sort(function(a, b) { 
      return a.time - b.time;
    })
    $('#timeline__keyframes').empty();
    for(var index in this.timeline.keyframes) {
      var keyframe = this.timeline.keyframes[index];
      var keyframeElement = $('<div class="keyframe"></div>');
      keyframeElement.css({'left':(keyframe.time*this.basisPoint)-10});
      $('#timeline__keyframes').append(keyframeElement);
      keyframe.element = keyframeElement;
    }
    $(this.timeline.keyframes[this.timeline.keyframes.length-1].element).addClass('keyframe--selected');
    $('#timeline__indicator').css({'left': this.paperdollDisplayer.animation.frameCurrent*this.basisPoint});
  }

  moveKeyframe(element){
    $(element).css({'left':window.mouseLocation.x-10});
    var newFrameTime = Math.round((window.mouseLocation.x/this.basisPoint) / 10) * 10;
    var frameIndex = $(element).parent().children().index(element);
    var keyframe = this.timeline.keyframes[frameIndex];
    keyframe.time = newFrameTime;
    $('#timeline__indicator').css({'left': keyframe.time*this.basisPoint});
  }

  selectKeyframe(index){
    $('.keyframe').removeClass('keyframe--selected');
    var keyframe;
    if (index != undefined) {
      keyframe = this.timeline.keyframes[index];
      this.paperdollDisplayer.poseCharacter(keyframe);
      $('#timeline__indicator').css({'left': keyframe.time*this.basisPoint});
      this.paperdollDisplayer.animation.frameCurrent = keyframe.time;
      $(keyframe.element).addClass('keyframe--selected');
    }
    this.timeline.keyframeSelected = keyframe;
    this.selectTarget(window.currentPropNode);

  }

  updateCurrentKeyframe() {

    if (!this.timeline.keyframeSelected) {
      //No keyframe on current timestamp, create one
      var newKeyframe = this.paperdollDisplayer.createKeyframeObject(this.paperdollDisplayer.doll);
      var time = this.paperdollDisplayer.animation.frameCurrent;
      newKeyframe = {
        time: time,
        groups: newKeyframe
      };
      this.timeline.keyframes.push(newKeyframe);
      this.updateTimeline(this.timeline.keyframes);
      this.selectKeyframe(this.timeline.keyframes.indexOf(newKeyframe));

    } else {
      //keyframe selected, update it
      this.timeline.keyframeSelected.groups = this.paperdollDisplayer.createKeyframeObject(this.paperdollDisplayer.doll);
    }
  }


  /*
  * UI
  *
  */

  selectTarget(target) {
    if(!target) {return null;}
    let node = target;
    for (var partIndex=0; (node=node.previousSibling); partIndex++);
    var limbName = target.id;
    var part = this.paperdollDisplayer.doll[limbName].parts[partIndex];
    window.currentProp = limbName;
    window.currentPropPart = part;
    window.currentPropNode = target;

    var axle = this.paperdollDisplayer.doll[limbName].wrapper.last();
    var axlePosition = axle.node.getBoundingClientRect();
    $('#tools').css({
      left: (axlePosition.left + axle.width()/2) - $('#tools')[0].clientWidth/2,
      top: (axlePosition.top + axle.height()/2) - $('#tools')[0].clientHeight/2
    })
    var angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.doll[limbName].rotation);
    angle = this.paperdollDisplayer.normalizeAngle(Number(angle)+90)
    $('#tools__circle').css({
      '-webkit-transform' : 'rotate('+Number(angle) +'deg)',
         '-moz-transform' : 'rotate('+Number(angle) +'deg)',  
          '-ms-transform' : 'rotate('+Number(angle) +'deg)',  
           '-o-transform' : 'rotate('+Number(angle) +'deg)',  
              'transform' : 'rotate('+Number(angle) +'deg)',  
                   'zoom' : 1
    });


    var options_width = part.data.width;
    var options_height = part.data.height;
    var options_rotation = part.data.rotation;
    var options_top = part.data.top;
    var options_left = part.data.left;
    var options_right = part.data.right;
    var options_bottom = part.data.bottom;
    var options_radius = part.data.radius;
    var options_fill = part.data.fill;

    //group
    $('#options__group').empty();
    $('#options__group').append('<h3>'+limbName+'</h3>');
    for (var key in this.paperdollDisplayer.doll[limbName]) {
      if (typeof(this.paperdollDisplayer.doll[limbName][key]) !== 'object') {
        $('#options__group').append('<label for="options__group--'+key+'">'+key+'</label><input id="options__group--'+key+'" value="'+this.paperdollDisplayer.doll[limbName][key]+'"/><br>');
        
      }
    }
    $('#options__group--xscale').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['xscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--yscale').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['yscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--rotation').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['rotation'] = Number($(this).val()); this.updateCurrentKeyframe()});


    //parts
    $('#options__part').empty();
    $('#options__part').append('<h3>'+' part: '+ partIndex+'</h3>');
    for (var key in part.data) {
      $('#options__part').append('<label for="options__part--'+key+'">'+key+'</label><input id="options__part--'+key+'" value="'+part.data[key]+'"/><br>');
    }

    $('#options__part--width').val(options_width);
    $('#options__part--height').val(options_height);
    $('#options__part--rotation').val(options_rotation);
    $('#options__part--top').val(options_top);
    $('#options__part--left').val(options_left);
    $('#options__part--right').val(options_right);
    $('#options__part--bottom').val(options_bottom);
    $('#options__part--radius').val(options_radius);
    $('#options__part--fill').val(options_fill);
    
    $('#options__part--width').on('keyup', function(e){part.data.width = Number($(this).val())});
    $('#options__part--height').on('keyup', function(e){part.data.height = Number($(this).val())});
    $('#options__part--rotation').on('keyup', function(e){part.data.rotation = Number($(this).val())});
    $('#options__part--top').on('keyup', function(e){part.data.top = Number($(this).val())});
    $('#options__part--left').on('keyup', function(e){part.data.left = Number($(this).val())});
    $('#options__part--right').on('keyup', function(e){part.data.right = Number($(this).val())});
    $('#options__part--bottom').on('keyup', function(e){part.data.bottom = Number($(this).val())});
    $('#options__part--radius').on('keyup', function(e){part.data.radius = Number($(this).val())});
    $('#options__part--fill').on('keyup', function(e){part.data.fill = Number($(this).val())});
  }


  ui() {
    $('#options__play').on('click', function(e){
      this.paperdollDisplayer.playAnimation({keyframes: this.timeline.keyframes},false,false,this);
    }.bind(this))

    $('#options__save-copy').on('click', function(e){
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', JSON.stringify(this.timeline.keyframes));
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }.bind(this))

    $('#timeline__keyframes').on('mousedown',function (event) {
      clearInterval(this.paperdollDisplayer.animationInterval);
      if ( $(event.target).hasClass('keyframe') ) {
        var keyframeIndex = $(event.target).parent().children().index(event.target);
        this.selectKeyframe(keyframeIndex);

        this.keyframedragging = setInterval(function () {
          this.moveKeyframe(event.target);
        }.bind(this), 100);
      }
      if ( $(event.target).is($('#timeline__keyframes')) ) {
        var newFrameTime = Math.round((window.mouseLocation.x/this.basisPoint) / 10) * 10;
        this.paperdollDisplayer.animation.frameCurrent = newFrameTime;
        this.timeline.keyframeSelected = undefined;
        this.selectKeyframe();
        $('#timeline__indicator').css({'left': this.paperdollDisplayer.animation.frameCurrent*this.basisPoint});

      }
      return false;
    }.bind(this));


    $('#tools__circle').on('mousedown',function (event) {
      if (event.which == 1) {
        this.rotatedragging = setInterval(function () {
          var circleCenter = {
            y: event.target.offsetTop+event.target.parentElement.offsetTop+event.target.offsetHeight/2,
            x: event.target.offsetLeft+event.target.parentElement.offsetLeft+event.target.offsetWidth/2
          }
          var angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.pointDirection(circleCenter,window.mouseLocation)-90);
          this.paperdollDisplayer.doll[window.currentProp].rotation = Number(angle).toFixed(2);
          angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.doll[window.currentProp].rotation);
          angle = this.paperdollDisplayer.normalizeAngle(Number(angle)+90)
          this.updateCurrentKeyframe();
          $('#tools__circle').css({
            '-webkit-transform' : 'rotate('+angle+'deg)',
               '-moz-transform' : 'rotate('+angle+'deg)',  
                '-ms-transform' : 'rotate('+angle+'deg)',  
                 '-o-transform' : 'rotate('+angle+'deg)',  
                    'transform' : 'rotate('+angle+'deg)',  
                         'zoom' : 1
          });
        }.bind(this), 100);
        return false;
      }
    }.bind(this));

    $(document).on('mousedown',function (event) {
      window.lastClickCords = {
        x:event.clientX,
        y:event.clientY
      }
    });

    $(document).on('mouseup',function (event) {
      clearInterval(this.keyframedragging)
      clearInterval(this.rotatedragging);
    }.bind(this));

    $(document).on('mousemove',function (event) {
      window.mouseLocation = {
        x: event.clientX,
        y: event.clientY
      }
    });

    $('#drawing').on('mousedown',function(event) {
      if (event.target.nodeName == 'rect' && event.which == 1) {
        var node = event.target;
        this.selectTarget(node);
      } else {
        $('#tools').css({
          left: -999,
          top: -999
        })
      }
    }.bind(this));

    $( ".target" ).change(function() {
      alert( "Handler for .change() called." );
    });

    $( this.animationSelectorInput ).change(function(event) {
      var animationName = event.target.value;
      this.paperdollDisplayer.playAnimation(presetAnimations[animationName],false,false,this);
    }.bind(this));

  }

}
window.paperdoll = {
  belly: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 60,
      height: 50,
      top: 'center',
      left: 'center',
      rotation: 0,
      radius: 15
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'legLeftUpper': {
        'left': 17,
        'bottom': 10
      },
      'legRightUpper': {
        'right': 17,
        'bottom': 10
      }
    }
  },
  legLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legLeftLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  legLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'legLeftUpper'
  },
  legRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legRightLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  legRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'legRightUpper'
  },
  torso: {
    xscale: 1,
    yscale: 1,
    rotation: 1,
    parts: [{
      width: 70,
      height: 80,
      top: 'center',
      right: 'center',
      rotation: 0,
      radius: 30
    }],
    connectionsFor: {
      'neck': {
        'left': 'center',
        'top': 2
      },
      'armLeftUpper': {
        'left': 7,
        'top': 15
      },
      'armRightUpper': {
        'right': 7,
        'top': 15
      },
      'belly': {
        'left': 'center',
        'bottom': 0
      }
    }
  },
  neck: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 50,
      left: 'center',
      bottom: 10,
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'head': {
        'left': 'center',
        'top': 5
      }
    }
  },
  head: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 50,
      height: 70,
      left: 'center',
      bottom: 'center',
      rotation: 0,
      radius: 20,
      fill: '#f7cbc4'
    }],
    connectsTo: 'neck',
    connectionsFor: {
      'leftEye': {
        'left': 'center',
        'top': 'center'
      },
      'rightEye': {
        'left': 'center',
        'top': 'center'
      }
    }
  },
  leftEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      width: 12,
      height: 10,
      left: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000000'
    }],
    connectsTo: 'head'
  },
  rightEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      width: 12,
      height: 10,
      right: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000000'
    }],
    connectsTo: 'head'
  },
  armLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armLeftLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  armLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armLeftUpper',
    connectionsFor: {
      'handLeft': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handLeft: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armLeftLower'
  },
  armRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armRightLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  armRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armRightUpper',
    connectionsFor: {
      'handRight': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handRight: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armRightLower'
  },
};
window.presetAnimations = {
  wavesalute: {
    by: 'jonathan',
    cameraSetting: 'face',
    keyframes: [
      {
        "time": 0,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 1,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 3190,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 1,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 158.55,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 181.64,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 4960,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 1,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": -2.24999999999993,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      }
    ]
  },
  tjoho: {
    by: 'jonathan',
    cameraSetting: 'body',
    "keyframes": [
      {
        "time": 0,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 1,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "leftEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "rightEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handLeft": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handRight": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 1270,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 1,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "leftEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "rightEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 63.43,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handLeft": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 293.96,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handRight": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 287.87,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 1470,
        "groups": {
          "belly": {
            "rotation": 9.46,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 19.98,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "leftEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "rightEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 63.43,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 74.05,
            "xscale": 1,
            "yscale": 1
          },
          "handLeft": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 293.96,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 327.99,
            "xscale": 1,
            "yscale": 1
          },
          "handRight": {
            "rotation": 282.5,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 287.87,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 1660,
        "groups": {
          "belly": {
            "rotation": 8.630175438596485,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 19.647017543859654,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "leftEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "rightEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 62.939313441083144,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 74.05000000000003,
            "xscale": 1,
            "yscale": 1
          },
          "handLeft": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": -66.04000000000016,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": -32.57157894736841,
            "xscale": 1,
            "yscale": 1
          },
          "handRight": {
            "rotation": -78.85964912280704,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 311.19,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 296.57,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": -72.12999999999981,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 81.25,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      },
      {
        "time": 2850,
        "groups": {
          "belly": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "torso": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "neck": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "head": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "leftEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "rightEye": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftUpper": {
            "rotation": 18.43,
            "xscale": 1,
            "yscale": 1
          },
          "armLeftLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handLeft": {
            "rotation": 55.01,
            "xscale": 1,
            "yscale": 1
          },
          "armRightUpper": {
            "rotation": 348.69,
            "xscale": 1,
            "yscale": 1
          },
          "armRightLower": {
            "rotation": 0,
            "xscale": 1,
            "yscale": 1
          },
          "handRight": {
            "rotation": -78.85964912280704,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftUpper": {
            "rotation": 354.81,
            "xscale": 1,
            "yscale": 1
          },
          "legLeftLower": {
            "rotation": 8.13,
            "xscale": 1,
            "yscale": 1
          },
          "legRightUpper": {
            "rotation": 354.81,
            "xscale": 1,
            "yscale": 1
          },
          "legRightLower": {
            "rotation": 329.04,
            "xscale": 1,
            "yscale": 1
          }
        },
        "element": {
          "0": {},
          "length": 1
        }
      }
    ],
    "msBetweenFrames": 10,
    "frameCurrent": 2860,
    "framesRemaining": 1,
    "currentAnimations": {
      "belly": {
        "rotation": {
          "from": 8.520114496768235,
          "to": 0,
          "stepPerFrame": -0.07159760081317844,
          "current": 8.520114496768235
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "torso": {
        "rotation": {
          "from": 19.96247460757157,
          "to": 0,
          "stepPerFrame": -0.1677518874585846,
          "current": 19.96247460757157
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "neck": {
        "rotation": {
          "from": 0
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "head": {
        "rotation": {
          "from": 0
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "leftEye": {
        "rotation": {
          "from": 0
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "rightEye": {
        "rotation": {
          "from": 0
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "armLeftUpper": {
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "armLeftLower": {
        "rotation": {
          "from": 74.05,
          "to": 0,
          "stepPerFrame": -0.6222689075630252,
          "current": 74.05
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "handLeft": {
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "armRightUpper": {
        "rotation": {
          "from": -66.04000000000016,
          "to": 348.69,
          "stepPerFrame": -0.45991596638655596,
          "current": -66.04000000000016
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "armRightLower": {
        "rotation": {
          "from": -32.51246537396122,
          "to": 0,
          "stepPerFrame": 0.2732139947391699,
          "current": -32.51246537396122
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "handRight": {
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "legLeftUpper": {
        "rotation": {
          "from": -48.80999999999999,
          "to": 354.81,
          "stepPerFrame": -0.36655462184873944,
          "current": -48.80999999999999
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "legLeftLower": {
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "legRightUpper": {
        "rotation": {
          "from": -72.13000000000008,
          "to": 354.81,
          "stepPerFrame": -0.562521008403362,
          "current": -72.13000000000008
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      },
      "legRightLower": {
        "rotation": {
          "from": 81.25,
          "to": 329.04,
          "stepPerFrame": -0.9429411764705881,
          "current": 81.25
        },
        "xscale": {
          "from": 1
        },
        "yscale": {
          "from": 1
        }
      }
    },
    "loop": false
  },
  rock: {
    by: 'jonathan',
    cameraSetting: 'body',
    keyframes: [{"time":0,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":1,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"armLeftLower":{"rotation":0,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":0,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":520,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":344.05,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"armLeftLower":{"rotation":0,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":0,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":1340,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":28.61,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"armLeftLower":{"rotation":0,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":0,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":1990,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":339.44,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"armLeftLower":{"rotation":0,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":0,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}}]
  },
  meow: {
    by: 'jonathan',
    cameraSetting: 'face',
    keyframes: [{"time":0,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":1,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"armLeftLower":{"rotation":0,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":0,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":490,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":26.57,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":149.42,"xscale":1,"yscale":1},"armLeftLower":{"rotation":130.6,"xscale":1,"yscale":1},"handLeft":{"rotation":0,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":343.3,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":910,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":26.57,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":186.58,"xscale":1,"yscale":1},"armLeftLower":{"rotation":174.29,"xscale":1,"yscale":1},"handLeft":{"rotation":52.59,"xscale":1,"yscale":1},"armRightUpper":{"rotation":0,"xscale":1,"yscale":1},"armRightLower":{"rotation":311.1,"xscale":1,"yscale":1},"handRight":{"rotation":0,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":0,"xscale":1,"yscale":1},"legRightLower":{"rotation":0,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}},{"time":2060,"groups":{"belly":{"rotation":0,"xscale":1,"yscale":1},"torso":{"rotation":312.65,"xscale":1,"yscale":1},"neck":{"rotation":0,"xscale":1,"yscale":1},"head":{"rotation":0,"xscale":1,"yscale":1},"leftEye":{"rotation":0,"xscale":1,"yscale":1},"rightEye":{"rotation":0,"xscale":1,"yscale":1},"armLeftUpper":{"rotation":149.42,"xscale":1,"yscale":1},"armLeftLower":{"rotation":130.6,"xscale":1,"yscale":1},"handLeft":{"rotation":100.3,"xscale":1,"yscale":1},"armRightUpper":{"rotation":242.1,"xscale":1,"yscale":1},"armRightLower":{"rotation":145.01,"xscale":1,"yscale":1},"handRight":{"rotation":151.19,"xscale":1,"yscale":1},"legLeftUpper":{"rotation":0,"xscale":1,"yscale":1},"legLeftLower":{"rotation":0,"xscale":1,"yscale":1},"legRightUpper":{"rotation":311.99,"xscale":1,"yscale":1},"legRightLower":{"rotation":230.71,"xscale":1,"yscale":1}},"element":{"0":{},"length":1}}]
  }
}