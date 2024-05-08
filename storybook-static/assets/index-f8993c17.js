var T=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,z=Object.getOwnPropertyNames,F=Object.prototype.hasOwnProperty,G=(n,o)=>{for(var u in o)T(n,u,{get:o[u],enumerable:!0})},X=(n,o,u,v)=>{if(o&&typeof o=="object"||typeof o=="function")for(let _ of z(o))!F.call(n,_)&&_!==u&&T(n,_,{get:()=>o[_],enumerable:!(v=Y(o,_))||v.enumerable});return n},B=n=>X(T({},"__esModule",{value:!0}),n),N={};G(N,{InvariantError:()=>V,format:()=>U,invariant:()=>K});var re=B(N),H=/(%?)(%([sdijo]))/g;function Q(n,o){switch(o){case"s":return n;case"d":case"i":return Number(n);case"j":return JSON.stringify(n);case"o":{if(typeof n=="string")return n;const u=JSON.stringify(n);return u==="{}"||u==="[]"||/^\[object .+?\]$/.test(u)?n:u}}}function U(n,...o){if(o.length===0)return n;let u=0,v=n.replace(H,(_,O,I,E)=>{const k=o[u],S=Q(k,E);return O?_:(u++,S)});return u<o.length&&(v+=` ${o.slice(u).join(" ")}`),v=v.replace(/%{2,2}/g,"%"),v}var Z=2;function ee(n){if(!n.stack)return;const o=n.stack.split(`
`);o.splice(1,Z),n.stack=o.join(`
`)}var V=class extends Error{constructor(n,...o){super(n),this.message=n,this.name="Invariant Violation",this.message=U(n,...o),ee(this)}},K=(n,o,...u)=>{if(!n)throw new V(o,...u)};K.as=(n,o,u,...v)=>{if(!o){const _=v.length===0?u:U(u,v);let O;try{O=Reflect.construct(n,[_])}catch{O=n(_)}throw O}};var q,W;function te(){if(W)return q;W=1;var n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,v=Object.prototype.hasOwnProperty,_=(e,t)=>{for(var i in t)n(e,i,{get:t[i],enumerable:!0})},O=(e,t,i,g)=>{if(t&&typeof t=="object"||typeof t=="function")for(let b of u(t))!v.call(e,b)&&b!==i&&n(e,b,{get:()=>t[b],enumerable:!(g=o(t,b))||g.enumerable});return e},I=e=>O(n({},"__esModule",{value:!0}),e),E={};_(E,{Emitter:()=>A,MemoryLeakError:()=>k}),q=I(E);var k=class extends Error{constructor(e,t,i){super(`Possible EventEmitter memory leak detected. ${i} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=e,this.type=t,this.count=i,this.name="MaxListenersExceededWarning"}},S=class{static listenerCount(e,t){return e.listenerCount(t)}constructor(){this.events=new Map,this.maxListeners=S.defaultMaxListeners,this.hasWarnedAboutPotentialMemoryLeak=!1}_emitInternalEvent(e,t,i){this.emit(e,t,i)}_getListeners(e){return Array.prototype.concat.apply([],this.events.get(e))||[]}_removeListener(e,t){const i=e.indexOf(t);return i>-1&&e.splice(i,1),[]}_wrapOnceListener(e,t){const i=(...g)=>(this.removeListener(e,i),t.apply(this,g));return Object.defineProperty(i,"name",{value:t.name}),i}setMaxListeners(e){return this.maxListeners=e,this}getMaxListeners(){return this.maxListeners}eventNames(){return Array.from(this.events.keys())}emit(e,...t){const i=this._getListeners(e);return i.forEach(g=>{g.apply(this,t)}),i.length>0}addListener(e,t){this._emitInternalEvent("newListener",e,t);const i=this._getListeners(e).concat(t);if(this.events.set(e,i),this.maxListeners>0&&this.listenerCount(e)>this.maxListeners&&!this.hasWarnedAboutPotentialMemoryLeak){this.hasWarnedAboutPotentialMemoryLeak=!0;const g=new k(this,e,this.listenerCount(e));console.warn(g)}return this}on(e,t){return this.addListener(e,t)}once(e,t){return this.addListener(e,this._wrapOnceListener(e,t))}prependListener(e,t){const i=this._getListeners(e);if(i.length>0){const g=[t].concat(i);this.events.set(e,g)}else this.events.set(e,i.concat(t));return this}prependOnceListener(e,t){return this.prependListener(e,this._wrapOnceListener(e,t))}removeListener(e,t){const i=this._getListeners(e);return i.length>0&&(this._removeListener(i,t),this.events.set(e,i),this._emitInternalEvent("removeListener",e,t)),this}off(e,t){return this.removeListener(e,t)}removeAllListeners(e){return e?this.events.delete(e):this.events.clear(),this}listeners(e){return Array.from(this._getListeners(e))}listenerCount(e){return this._getListeners(e).length}rawListeners(e){return this.listeners(e)}},A=S;return A.defaultMaxListeners=10,q}var R={},J;function se(){if(J)return R;J=1,Object.defineProperty(R,"__esModule",{value:!0});var n=Object.create,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,_=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,I=(s,a)=>function(){return a||(0,s[v(s)[0]])((a={exports:{}}).exports,a),a.exports},E=(s,a,l,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let f of v(a))!O.call(s,f)&&f!==l&&o(s,f,{get:()=>a[f],enumerable:!(d=u(a,f))||d.enumerable});return s},k=(s,a,l)=>(l=s!=null?n(_(s)):{},E(a||!s||!s.__esModule?o(l,"default",{value:s,enumerable:!0}):l,s)),S=I({"node_modules/set-cookie-parser/lib/set-cookie.js"(s,a){var l={decodeValues:!0,map:!1,silent:!1};function d(r){return typeof r=="string"&&!!r.trim()}function f(r,h){var c=r.split(";").filter(d),m=c.shift(),p=j(m),x=p.name,y=p.value;h=h?Object.assign({},l,h):l;try{y=h.decodeValues?decodeURIComponent(y):y}catch(C){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+y+"'. Set options.decodeValues to false to disable this feature.",C)}var w={name:x,value:y};return c.forEach(function(C){var D=C.split("="),M=D.shift().trimLeft().toLowerCase(),$=D.join("=");M==="expires"?w.expires=new Date($):M==="max-age"?w.maxAge=parseInt($,10):M==="secure"?w.secure=!0:M==="httponly"?w.httpOnly=!0:M==="samesite"?w.sameSite=$:w[M]=$}),w}function j(r){var h="",c="",m=r.split("=");return m.length>1?(h=m.shift(),c=m.join("=")):c=r,{name:h,value:c}}function P(r,h){if(h=h?Object.assign({},l,h):l,!r)return h.map?{}:[];if(r.headers)if(typeof r.headers.getSetCookie=="function")r=r.headers.getSetCookie();else if(r.headers["set-cookie"])r=r.headers["set-cookie"];else{var c=r.headers[Object.keys(r.headers).find(function(p){return p.toLowerCase()==="set-cookie"})];!c&&r.headers.cookie&&!h.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),r=c}if(Array.isArray(r)||(r=[r]),h=h?Object.assign({},l,h):l,h.map){var m={};return r.filter(d).reduce(function(p,x){var y=f(x,h);return p[y.name]=y,p},m)}else return r.filter(d).map(function(p){return f(p,h)})}function L(r){if(Array.isArray(r))return r;if(typeof r!="string")return[];var h=[],c=0,m,p,x,y,w;function C(){for(;c<r.length&&/\s/.test(r.charAt(c));)c+=1;return c<r.length}function D(){return p=r.charAt(c),p!=="="&&p!==";"&&p!==","}for(;c<r.length;){for(m=c,w=!1;C();)if(p=r.charAt(c),p===","){for(x=c,c+=1,C(),y=c;c<r.length&&D();)c+=1;c<r.length&&r.charAt(c)==="="?(w=!0,c=y,h.push(r.substring(m,x)),m=c):c=x+1}else c+=1;(!w||c>=r.length)&&h.push(r.substring(m,r.length))}return h}a.exports=P,a.exports.parse=P,a.exports.parseString=f,a.exports.splitCookiesString=L}}),A=k(S()),e="MSW_COOKIE_STORE";function t(){try{if(localStorage==null)return!1;const s=e+"_test";return localStorage.setItem(s,"test"),localStorage.getItem(s),localStorage.removeItem(s),!0}catch{return!1}}function i(s,a){try{return s[a],!0}catch{return!1}}var g=class{constructor(){this.store=new Map}add(s,a){if(i(s,"credentials")&&s.credentials==="omit")return;const l=new URL(s.url),d=a.headers.get("set-cookie");if(!d)return;const f=Date.now(),j=(0,A.parse)(d).map(({maxAge:L,...r})=>({...r,expires:L===void 0?r.expires:new Date(f+L*1e3),maxAge:L})),P=this.store.get(l.origin)||new Map;j.forEach(L=>{this.store.set(l.origin,P.set(L.name,L))})}get(s){this.deleteExpiredCookies();const a=new URL(s.url),l=this.store.get(a.origin)||new Map;if(!i(s,"credentials"))return l;switch(s.credentials){case"include":return typeof document>"u"||(0,A.parse)(document.cookie).forEach(f=>{l.set(f.name,f)}),l;case"same-origin":return l;default:return new Map}}getAll(){return this.deleteExpiredCookies(),this.store}deleteAll(s){const a=new URL(s.url);this.store.delete(a.origin)}clear(){this.store.clear()}hydrate(){if(!t())return;const s=localStorage.getItem(e);if(s)try{JSON.parse(s).forEach(([l,d])=>{this.store.set(l,new Map(d.map(([f,{expires:j,...P}])=>[f,j===void 0?P:{...P,expires:new Date(j)}])))})}catch(a){console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${e}").

Stored value:
${localStorage.getItem(e)}

Thrown exception:
${a}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`),localStorage.removeItem(e)}}persist(){if(!t())return;const s=Array.from(this.store.entries()).map(([a,l])=>[a,Array.from(l.entries())]);localStorage.setItem(e,JSON.stringify(s))}deleteExpiredCookies(){const s=Date.now();this.store.forEach((a,l)=>{a.forEach(({expires:d,name:f})=>{d!==void 0&&d.getTime()<=s&&a.delete(f)}),a.size===0&&this.store.delete(l)})}},b=new g;return R.PERSISTENCY_KEY=e,R.store=b,R}export{te as a,re as l,se as r};