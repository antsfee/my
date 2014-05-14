var Zepto=function(){function t(t){return null==t?t+"":B[H.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function u(t){return M.call(t,function(t){return null!=t})}function a(t){return t.length>0?x.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in $?$[t]:$[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[c(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?O.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:E})}function d(t,e,n){for(T in e)n&&(o(e[T])||W(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),W(e[T])&&!W(t[T])&&(t[T]=[]),d(t[T],e[T],n)):e[T]!==E&&(t[T]=e[T])}function g(t,e){return null==e?x(t):x(t).filter(e)}function m(t,n,r,i){return e(n)?n.call(t,r,i):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:(r?n.baseVal=e:t.className=e,E)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?x.parseJSON(t):t:e):t}catch(n){return t}}function b(t,e){e(t);for(var n in t.childNodes)b(t.childNodes[n],e)}var E,T,x,N,P,S,C=[],O=C.slice,M=C.filter,A=window.document,L={},$={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,_=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,j=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,z=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],V=A.createElement("table"),U=A.createElement("tr"),q={tr:A.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:U,th:U,"*":A.createElement("div")},F=/complete|loaded|interactive/,Y=/^[\w-]*$/,B={},H=B.toString,X={},J=A.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},W=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=J).appendChild(t),r=~X.qsa(i,e).indexOf(t),o&&J.removeChild(t),r},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return M.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var r,i,s;return _.test(t)&&(r=x(A.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(j,"<$1></$2>")),e===E&&(e=Z.test(t)&&RegExp.$1),e in q||(e="*"),s=q[e],s.innerHTML=""+t,r=x.each(O.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=x(r),x.each(n,function(t,e){R.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},X.Z=function(t,e){return t=t||[],t.__proto__=x.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var r;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))r=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return x(n).find(t);r=X.qsa(A,t)}else{if(e(t))return x(A).ready(t);if(X.isZ(t))return t;if(W(t))r=u(t);else if(i(t))r=[t],t=null;else if(Z.test(t))r=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return x(n).find(t);r=X.qsa(A,t)}}return X.Z(r,t)},x=function(t,e){return X.init(t,e)},x.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,u=Y.test(s);return r(t)&&u&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(u&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=function(t,e){return t!==e&&t.contains(e)},x.type=t,x.isFunction=e,x.isWindow=n,x.isArray=W,x.isPlainObject=o,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},x.camelCase=P,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;t.length>r;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return a(o)},x.each=function(t,e){var n,r;if(s(t)){for(n=0;t.length>n;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},x.grep=function(t,e){return M.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),x.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(t){return x(x.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return x(O.apply(this,arguments))},ready:function(t){return F.test(A.readyState)&&A.body?t(x):A.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===E?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return C.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):x(M.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return x(S(this.concat(x(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?O.call(t):x(t);this.forEach(function(t){0>r.indexOf(t)&&n.push(t)})}return x(n)},has:function(t){return this.filter(function(){return i(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:x(t)},find:function(t){var e,n=this;return e="object"==typeof t?x(t).filter(function(){var t=this;return C.some.call(n,function(e){return x.contains(e,t)})}):1==this.length?x(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=x(t));n&&!(i?i.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return x(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=x.map(n,function(t){return(t=t.parentNode)&&!r(t)&&0>e.indexOf(t)?(e.push(t),t):E});return g(e,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return M.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return x.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=x(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){x(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=x(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=x(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;x(this).empty().append(m(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===E?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===E?0==this.length||1!==this[0].nodeType?E:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(i(t))for(T in t)v(this,T,t[T]);else v(this,t,m(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=G[t]||t,e===E?this[0]&&this[0][t]:this.each(function(n){this[t]=m(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(z,"-$1").toLowerCase(),e);return null!==n?w(n):E},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=m(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=x(this),r=m(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(2>arguments.length){var r=this[0],i=getComputedStyle(r,"");if(!r)return;if("string"==typeof e)return r.style[P(e)]||i.getPropertyValue(e);if(W(e)){var o={};return x.each(W(e)?e:[e],function(t,e){o[e]=r.style[P(e)]||i.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?s+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?C.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){N=[];var n=y(this),r=m(this,t,e,n);r.split(/\s+/g).forEach(function(t){x(this).hasClass(t)||N.push(t)},this),N.length&&y(this,n+(n?" ":"")+N.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===E?y(this,""):(N=y(this),m(this,t,e,N).split(/\s+/g).forEach(function(t){N=N.replace(l(t)," ")}),y(this,N.trim()),E)})},toggleClass:function(t,e){return t?this.each(function(n){var r=x(this),i=m(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=k.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,r.top+=parseFloat(x(e[0]).css("border-top-width"))||0,r.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!k.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});x.fn[t]=function(i){var o,s=this[0];return i===E?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=x(this),s.css(t,m(this,i,e,s[t]()))})}}),I.forEach(function(e,n){var r=n%2;x.fn[e]=function(){var e,i,o=x.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),s=this.length>1;return 1>o.length?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return x(t).remove();b(i.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return x(t)[e](this),this}}),X.Z.prototype=x.fn,X.uniq=S,X.deserializeValue=w,x.zepto=X,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=r(n),n.ns)var u=i(n.ns);return(m[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!u.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function s(t){return b[t]||y&&w[t]||t}function u(n,i,u,a,l,h,p){var d=e(n),g=m[d]||(m[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(u);var i=r(e);i.fn=u,i.sel=l,i.e in b&&(u=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):f}),i.del=h;var d=h||u;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=a;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=g.length,g.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function a(t,r,i,u,a){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,u).forEach(function(e){delete m[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,a))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(N,function(t,r){var i=n[t];e[t]=function(){return this[r]=E,i&&i.apply(n,arguments)},e[r]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=E)),e}function l(t){var e,n={originalEvent:t};for(e in t)x.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,g=function(t){return"string"==typeof t},m={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:u,remove:a},t.proxy=function(n,r){if(d(n)){var i=function(){return n.apply(r,arguments)};return i._zid=e(n),i}if(g(r))return t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var E=function(){return!0},T=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,N={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,c,h=this;return e&&!g(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(g(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=T),h.each(function(h,d){o&&(s=function(t){return a(d,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,d).get(0);return o&&o!==d?(r=t.extend(l(e),{currentTarget:o,liveFired:d}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):f}),u(d,e,i,r,n,c||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!g(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(g(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=T),i.each(function(){a(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=g(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,u){i=l(g(e)?t.Event(e):e),i._args=r,i.target=u,t.each(n(u,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:f})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){g(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function r(){l&&clearTimeout(l),l=null}function i(){u&&clearTimeout(u),a&&clearTimeout(a),c&&clearTimeout(c),l&&clearTimeout(l),u=a=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function s(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var u,a,c,l,f,h={},p=750;t(document).ready(function(){var d,g,m,v,y=0,w=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":-1>t.velocityX?"Left":t.velocityY>1?"Down":-1>t.velocityY?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(v=s(e,"down"))||o(e))&&(m=v?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),g=d-(h.last||d),h.el=t("tagName"in m.target?m.target:m.target.parentNode),u&&clearTimeout(u),h.x1=m.pageX,h.y1=m.pageY,g>0&&250>=g&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&v&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(v=s(t,"move"))||o(t))&&(m=v?t:t.touches[0],r(),h.x2=m.pageX,h.y2=m.pageY,y+=Math.abs(h.x1-h.x2),w+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(v=s(n,"up"))||o(n))&&(r(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>w?a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=i,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):u=setTimeout(function(){u=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=w=0)}).on("touchcancel MSPointerCancel pointercancel",i),t(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(this===void 0||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in r){n=r[o++];break}if(++o>=i)throw new TypeError}for(;i>o;)o in r&&(n=e.call(t,n,r[o],o,r)),o++;return n})}();