(function(){function a(){for(var e=arguments.length,t=0;t<e;t++){var r=t<0||arguments.length<=t?void 0:arguments[t];r.nodeType===1||r.nodeType===11?this.appendChild(r):this.appendChild(document.createTextNode(String(r)))}}function p(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function i(){for(var e=this.parentNode,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];var o=r.length;if(e)for(o||e.removeChild(this);o--;){var n=r[o];typeof n!="object"?n=this.ownerDocument.createTextNode(n):n.parentNode&&n.parentNode.removeChild(n),o?e.insertBefore(this.previousSibling,n):e.replaceChild(n,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=a,DocumentFragment.prototype.append=a),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=p,DocumentFragment.prototype.replaceChildren=p),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function s(a,p){return Object.getOwnPropertyNames(Object(a)).reduce(function(i,e){var t=Object.getOwnPropertyDescriptor(Object(a),e),r=Object.getOwnPropertyDescriptor(Object(p),e);return Object.defineProperty(i,e,r||t)},{})}var h={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};s(h,{});
