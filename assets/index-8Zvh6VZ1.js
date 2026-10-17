(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function a0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Iu={exports:{}},Da={},Du={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Ix(){if(qp)return Mt;qp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,L={};function w(D,Q,ve){this.props=D,this.context=Q,this.refs=L,this.updater=ve||M}w.prototype.isReactComponent={},w.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},w.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=w.prototype;function U(D,Q,ve){this.props=D,this.context=Q,this.refs=L,this.updater=ve||M}var z=U.prototype=new _;z.constructor=U,E(z,w.prototype),z.isPureReactComponent=!0;var T=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function b(D,Q,ve){var Re,Ne={},Ue=null,ae=null;if(Q!=null)for(Re in Q.ref!==void 0&&(ae=Q.ref),Q.key!==void 0&&(Ue=""+Q.key),Q)P.call(Q,Re)&&!A.hasOwnProperty(Re)&&(Ne[Re]=Q[Re]);var ce=arguments.length-2;if(ce===1)Ne.children=ve;else if(1<ce){for(var be=Array(ce),Ve=0;Ve<ce;Ve++)be[Ve]=arguments[Ve+2];Ne.children=be}if(D&&D.defaultProps)for(Re in ce=D.defaultProps,ce)Ne[Re]===void 0&&(Ne[Re]=ce[Re]);return{$$typeof:s,type:D,key:Ue,ref:ae,props:Ne,_owner:I.current}}function R(D,Q){return{$$typeof:s,type:D.type,key:Q,ref:D.ref,props:D.props,_owner:D._owner}}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function B(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return Q[ve]})}var V=/\/+/g;function F(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?B(""+D.key):Q.toString(36)}function G(D,Q,ve,Re,Ne){var Ue=typeof D;(Ue==="undefined"||Ue==="boolean")&&(D=null);var ae=!1;if(D===null)ae=!0;else switch(Ue){case"string":case"number":ae=!0;break;case"object":switch(D.$$typeof){case s:case e:ae=!0}}if(ae)return ae=D,Ne=Ne(ae),D=Re===""?"."+F(ae,0):Re,T(Ne)?(ve="",D!=null&&(ve=D.replace(V,"$&/")+"/"),G(Ne,Q,ve,"",function(Ve){return Ve})):Ne!=null&&(O(Ne)&&(Ne=R(Ne,ve+(!Ne.key||ae&&ae.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+D)),Q.push(Ne)),1;if(ae=0,Re=Re===""?".":Re+":",T(D))for(var ce=0;ce<D.length;ce++){Ue=D[ce];var be=Re+F(Ue,ce);ae+=G(Ue,Q,ve,be,Ne)}else if(be=x(D),typeof be=="function")for(D=be.call(D),ce=0;!(Ue=D.next()).done;)Ue=Ue.value,be=Re+F(Ue,ce++),ae+=G(Ue,Q,ve,be,Ne);else if(Ue==="object")throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ae}function Y(D,Q,ve){if(D==null)return D;var Re=[],Ne=0;return G(D,Re,"","",function(Ue){return Q.call(ve,Ue,Ne++)}),Re}function ie(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var Z={current:null},X={transition:null},j={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:X,ReactCurrentOwner:I};function H(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:Y,forEach:function(D,Q,ve){Y(D,function(){Q.apply(this,arguments)},ve)},count:function(D){var Q=0;return Y(D,function(){Q++}),Q},toArray:function(D){return Y(D,function(Q){return Q})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Mt.Component=w,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=U,Mt.StrictMode=r,Mt.Suspense=p,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,Mt.act=H,Mt.cloneElement=function(D,Q,ve){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Re=E({},D.props),Ne=D.key,Ue=D.ref,ae=D._owner;if(Q!=null){if(Q.ref!==void 0&&(Ue=Q.ref,ae=I.current),Q.key!==void 0&&(Ne=""+Q.key),D.type&&D.type.defaultProps)var ce=D.type.defaultProps;for(be in Q)P.call(Q,be)&&!A.hasOwnProperty(be)&&(Re[be]=Q[be]===void 0&&ce!==void 0?ce[be]:Q[be])}var be=arguments.length-2;if(be===1)Re.children=ve;else if(1<be){ce=Array(be);for(var Ve=0;Ve<be;Ve++)ce[Ve]=arguments[Ve+2];Re.children=ce}return{$$typeof:s,type:D.type,key:Ne,ref:Ue,props:Re,_owner:ae}},Mt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},Mt.createElement=b,Mt.createFactory=function(D){var Q=b.bind(null,D);return Q.type=D,Q},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(D){return{$$typeof:f,render:D}},Mt.isValidElement=O,Mt.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ie}},Mt.memo=function(D,Q){return{$$typeof:m,type:D,compare:Q===void 0?null:Q}},Mt.startTransition=function(D){var Q=X.transition;X.transition={};try{D()}finally{X.transition=Q}},Mt.unstable_act=H,Mt.useCallback=function(D,Q){return Z.current.useCallback(D,Q)},Mt.useContext=function(D){return Z.current.useContext(D)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(D){return Z.current.useDeferredValue(D)},Mt.useEffect=function(D,Q){return Z.current.useEffect(D,Q)},Mt.useId=function(){return Z.current.useId()},Mt.useImperativeHandle=function(D,Q,ve){return Z.current.useImperativeHandle(D,Q,ve)},Mt.useInsertionEffect=function(D,Q){return Z.current.useInsertionEffect(D,Q)},Mt.useLayoutEffect=function(D,Q){return Z.current.useLayoutEffect(D,Q)},Mt.useMemo=function(D,Q){return Z.current.useMemo(D,Q)},Mt.useReducer=function(D,Q,ve){return Z.current.useReducer(D,Q,ve)},Mt.useRef=function(D){return Z.current.useRef(D)},Mt.useState=function(D){return Z.current.useState(D)},Mt.useSyncExternalStore=function(D,Q,ve){return Z.current.useSyncExternalStore(D,Q,ve)},Mt.useTransition=function(){return Z.current.useTransition()},Mt.version="18.3.1",Mt}var $p;function hf(){return $p||($p=1,Du.exports=Ix()),Du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Dx(){if(Kp)return Da;Kp=1;var s=hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var y,S={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(y in p)r.call(p,y)&&!c.hasOwnProperty(y)&&(S[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)S[y]===void 0&&(S[y]=p[y]);return{$$typeof:e,type:f,key:x,ref:M,props:S,_owner:o.current}}return Da.Fragment=t,Da.jsx=d,Da.jsxs=d,Da}var Zp;function kx(){return Zp||(Zp=1,Iu.exports=Dx()),Iu.exports}var l=kx(),se=hf();const $l=a0(se);var rl={},ku={exports:{}},Fn={},Uu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Ux(){return Jp||(Jp=1,(function(s){function e(X,j){var H=X.length;X.push(j);e:for(;0<H;){var D=H-1>>>1,Q=X[D];if(0<o(Q,j))X[D]=j,X[H]=Q,H=D;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var j=X[0],H=X.pop();if(H!==j){X[0]=H;e:for(var D=0,Q=X.length,ve=Q>>>1;D<ve;){var Re=2*(D+1)-1,Ne=X[Re],Ue=Re+1,ae=X[Ue];if(0>o(Ne,H))Ue<Q&&0>o(ae,Ne)?(X[D]=ae,X[Ue]=H,D=Ue):(X[D]=Ne,X[Re]=H,D=Re);else if(Ue<Q&&0>o(ae,H))X[D]=ae,X[Ue]=H,D=Ue;else break e}}return j}function o(X,j){var H=X.sortIndex-j.sortIndex;return H!==0?H:X.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],y=1,S=null,x=3,M=!1,E=!1,L=!1,w=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(X){for(var j=t(m);j!==null;){if(j.callback===null)r(m);else if(j.startTime<=X)r(m),j.sortIndex=j.expirationTime,e(p,j);else break;j=t(m)}}function T(X){if(L=!1,z(X),!E)if(t(p)!==null)E=!0,ie(P);else{var j=t(m);j!==null&&Z(T,j.startTime-X)}}function P(X,j){E=!1,L&&(L=!1,_(b),b=-1),M=!0;var H=x;try{for(z(j),S=t(p);S!==null&&(!(S.expirationTime>j)||X&&!B());){var D=S.callback;if(typeof D=="function"){S.callback=null,x=S.priorityLevel;var Q=D(S.expirationTime<=j);j=s.unstable_now(),typeof Q=="function"?S.callback=Q:S===t(p)&&r(p),z(j)}else r(p);S=t(p)}if(S!==null)var ve=!0;else{var Re=t(m);Re!==null&&Z(T,Re.startTime-j),ve=!1}return ve}finally{S=null,x=H,M=!1}}var I=!1,A=null,b=-1,R=5,O=-1;function B(){return!(s.unstable_now()-O<R)}function V(){if(A!==null){var X=s.unstable_now();O=X;var j=!0;try{j=A(!0,X)}finally{j?F():(I=!1,A=null)}}else I=!1}var F;if(typeof U=="function")F=function(){U(V)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=V,F=function(){Y.postMessage(null)}}else F=function(){w(V,0)};function ie(X){A=X,I||(I=!0,F())}function Z(X,j){b=w(function(){X(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ie(P))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var H=x;x=j;try{return X()}finally{x=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,j){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var H=x;x=X;try{return j()}finally{x=H}},s.unstable_scheduleCallback=function(X,j,H){var D=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?D+H:D):H=D,X){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,X={id:y++,callback:j,priorityLevel:X,startTime:H,expirationTime:Q,sortIndex:-1},H>D?(X.sortIndex=H,e(m,X),t(p)===null&&X===t(m)&&(L?(_(b),b=-1):L=!0,Z(T,H-D))):(X.sortIndex=Q,e(p,X),E||M||(E=!0,ie(P))),X},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(X){var j=x;return function(){var H=x;x=j;try{return X.apply(this,arguments)}finally{x=H}}}})(Ou)),Ou}var Qp;function Ox(){return Qp||(Qp=1,Uu.exports=Ux()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Fx(){if(em)return Fn;em=1;var s=hf(),e=Ox();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function x(n){return p.call(S,n)?!0:p.call(y,n)?!1:m.test(n)?S[n]=!0:(y[n]=!0,!1)}function M(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||M(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(n,i,a,u,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){w[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];w[i]=new L(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){w[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){w[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){w[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){w[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){w[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){w[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){w[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);w[i]=new L(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);w[i]=new L(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);w[i]=new L(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){w[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),w.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){w[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,i,a,u){var h=w.hasOwnProperty(i)?w[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),X=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,D;function Q(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var ve=!1;function Re(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var u=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){u=me}n.call(i.prototype)}else{try{throw Error()}catch(me){u=me}n()}}catch(me){if(me&&u&&typeof me.stack=="string"){for(var h=me.stack.split(`
`),g=u.stack.split(`
`),C=h.length-1,W=g.length-1;1<=C&&0<=W&&h[C]!==g[W];)W--;for(;1<=C&&0<=W;C--,W--)if(h[C]!==g[W]){if(C!==1||W!==1)do if(C--,W--,0>W||h[C]!==g[W]){var q=`
`+h[C].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=C&&0<=W);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ne(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case I:return"Portal";case R:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:Ue(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return Ue(n(i))}catch{}}return null}function ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){u=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=Ve(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ot(n,i){var a=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _t(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&z(n,"checked",i,!1)}function ht(n,i){bt(n,i);var a=ce(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?de(n,i.type,a):i.hasOwnProperty("defaultValue")&&de(n,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Tt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function de(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function nt(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ce(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function at(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ce(a)}}function Ae(n,i){var a=ce(i.value),u=ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function We(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function v(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?k(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Ce.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function ge(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=ge(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var Ie=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var tt=null,ft=null,$=null;function ke(n){if(n=_a(n)){if(typeof tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=_o(i),tt(n.stateNode,n.type,i))}}function _e(n){ft?$?$.push(n):$=[n]:ft=n}function Le(){if(ft){var n=ft,i=$;if($=ft=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function ze(n,i){return n(i)}function ye(){}var Ke=!1;function $e(n,i,a){if(Ke)return n(i,a);Ke=!0;try{return ze(n,i,a)}finally{Ke=!1,(ft!==null||$!==null)&&(ye(),Le())}}function Lt(n,i){var a=n.stateNode;if(a===null)return null;var u=_o(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Et=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Et=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Et=!1}function fn(n,i,a,u,h,g,C,W,q){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Me){this.onError(Me)}}var Kn=!1,os=null,Ir=!1,Dr=null,nc={onError:function(n){Kn=!0,os=n}};function eo(n,i,a,u,h,g,C,W,q){Kn=!1,os=null,fn.apply(nc,arguments)}function to(n,i,a,u,h,g,C,W,q){if(eo.apply(this,arguments),Kn){if(Kn){var me=os;Kn=!1,os=null}else throw Error(t(198));Ir||(Ir=!0,Dr=me)}}function Rn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ls(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Js(n){if(Rn(n)!==n)throw Error(t(188))}function no(n){var i=n.alternate;if(!i){if(i=Rn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Js(h),n;if(g===u)return Js(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var C=!1,W=h.child;W;){if(W===a){C=!0,a=h,u=g;break}if(W===u){C=!0,u=h,a=g;break}W=W.sibling}if(!C){for(W=g.child;W;){if(W===a){C=!0,a=g,u=h;break}if(W===u){C=!0,u=g,a=h;break}W=W.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function kr(n){return n=no(n),n!==null?Qs(n):null}function Qs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Qs(n);if(i!==null)return i;n=n.sibling}return null}var Ur=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,io=e.unstable_shouldYield,ic=e.unstable_requestPaint,qt=e.unstable_now,rc=e.unstable_getCurrentPriorityLevel,ta=e.unstable_ImmediatePriority,na=e.unstable_UserBlockingPriority,N=e.unstable_NormalPriority,J=e.unstable_LowPriority,pe=e.unstable_IdlePriority,oe=null,re=null;function Ge(n){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:rt,Be=Math.log,Ze=Math.LN2;function rt(n){return n>>>=0,n===0?32:31-(Be(n)/Ze|0)|0}var xt=64,yt=4194304;function Ye(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function At(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var W=C&~h;W!==0?u=Ye(W):(g&=C,g!==0&&(u=Ye(g)))}else C=a&~h,C!==0?u=Ye(C):g!==0&&(u=Ye(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Fe(i),h=1<<a,u|=n[a],i&=~h;return u}function Zt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-Fe(g),W=1<<C,q=h[C];q===-1?((W&a)===0||(W&u)!==0)&&(h[C]=Zt(W,i)):q<=i&&(n.expiredLanes|=W),g&=~W}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function on(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function He(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function en(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Fe(i),n[i]=a}function Ct(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Fe(a),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function bn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Fe(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var St=0;function li(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bi,Ut,Xt,ci,Bt,Zn=!1,ui=[],di=null,or=null,lr=null,ia=new Map,ra=new Map,cr=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(n,i){switch(n){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(n,i,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=_a(i),i!==null&&Ut(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function ng(n,i,a,u,h){switch(i){case"focusin":return di=sa(di,n,i,a,u,h),!0;case"dragenter":return or=sa(or,n,i,a,u,h),!0;case"mouseover":return lr=sa(lr,n,i,a,u,h),!0;case"pointerover":var g=h.pointerId;return ia.set(g,sa(ia.get(g)||null,n,i,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,ra.set(g,sa(ra.get(g)||null,n,i,a,u,h)),!0}return!1}function Lf(n){var i=Or(n.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=ls(a),i!==null){n.blockedOn=i,Bt(n.priority,function(){Xt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Pe=u,a.target.dispatchEvent(u),Pe=null}else return i=_a(a),i!==null&&Ut(i),n.blockedOn=a,!1;i.shift()}return!0}function If(n,i,a){ro(n)&&a.delete(i)}function ig(){Zn=!1,di!==null&&ro(di)&&(di=null),or!==null&&ro(or)&&(or=null),lr!==null&&ro(lr)&&(lr=null),ia.forEach(If),ra.forEach(If)}function aa(n,i){n.blockedOn===i&&(n.blockedOn=null,Zn||(Zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ig)))}function oa(n){function i(h){return aa(h,n)}if(0<ui.length){aa(ui[0],n);for(var a=1;a<ui.length;a++){var u=ui[a];u.blockedOn===n&&(u.blockedOn=null)}}for(di!==null&&aa(di,n),or!==null&&aa(or,n),lr!==null&&aa(lr,n),ia.forEach(i),ra.forEach(i),a=0;a<cr.length;a++)u=cr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Lf(a),a.blockedOn===null&&cr.shift()}var cs=T.ReactCurrentBatchConfig,so=!0;function rg(n,i,a,u){var h=St,g=cs.transition;cs.transition=null;try{St=1,sc(n,i,a,u)}finally{St=h,cs.transition=g}}function sg(n,i,a,u){var h=St,g=cs.transition;cs.transition=null;try{St=4,sc(n,i,a,u)}finally{St=h,cs.transition=g}}function sc(n,i,a,u){if(so){var h=ac(n,i,a,u);if(h===null)wc(n,i,u,ao,a),Pf(n,u);else if(ng(h,n,i,a,u))u.stopPropagation();else if(Pf(n,u),i&4&&-1<tg.indexOf(n)){for(;h!==null;){var g=_a(h);if(g!==null&&Bi(g),g=ac(n,i,a,u),g===null&&wc(n,i,u,ao,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else wc(n,i,u,null,a)}}var ao=null;function ac(n,i,a,u){if(ao=null,n=et(u),n=Or(n),n!==null)if(i=Rn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ls(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ao=n,null}function Df(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rc()){case ta:return 1;case na:return 4;case N:case J:return 16;case pe:return 536870912;default:return 16}default:return 16}}var ur=null,oc=null,oo=null;function kf(){if(oo)return oo;var n,i=oc,a=i.length,u,h="value"in ur?ur.value:ur.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(u=1;u<=C&&i[a-u]===h[g-u];u++);return oo=h.slice(n,1<u?1-u:void 0)}function lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function co(){return!0}function Uf(){return!1}function Gn(n){function i(a,u,h,g,C){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var W in n)n.hasOwnProperty(W)&&(a=n[W],this[W]=a?a(g):g[W]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?co:Uf,this.isPropagationStopped=Uf,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Gn(us),la=H({},us,{view:0,detail:0}),ag=Gn(la),cc,uc,ca,uo=H({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ca&&(ca&&n.type==="mousemove"?(cc=n.screenX-ca.screenX,uc=n.screenY-ca.screenY):uc=cc=0,ca=n),cc)},movementY:function(n){return"movementY"in n?n.movementY:uc}}),Of=Gn(uo),og=H({},uo,{dataTransfer:0}),lg=Gn(og),cg=H({},la,{relatedTarget:0}),dc=Gn(cg),ug=H({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=Gn(ug),fg=H({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hg=Gn(fg),pg=H({},us,{data:0}),Ff=Gn(pg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=xg[n])?!!i[n]:!1}function fc(){return vg}var _g=H({},la,{key:function(n){if(n.key){var i=mg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yg=Gn(_g),bg=H({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=Gn(bg),Sg=H({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),wg=Gn(Sg),Mg=H({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=Gn(Mg),Tg=H({},uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=Gn(Tg),Cg=[9,13,27,32],hc=f&&"CompositionEvent"in window,ua=null;f&&"documentMode"in document&&(ua=document.documentMode);var Rg=f&&"TextEvent"in window&&!ua,Bf=f&&(!hc||ua&&8<ua&&11>=ua),Gf=" ",jf=!1;function Hf(n,i){switch(n){case"keyup":return Cg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function Ng(n,i){switch(n){case"compositionend":return Vf(i);case"keypress":return i.which!==32?null:(jf=!0,Gf);case"textInput":return n=i.data,n===Gf&&jf?null:n;default:return null}}function Pg(n,i){if(ds)return n==="compositionend"||!hc&&Hf(n,i)?(n=kf(),oo=oc=ur=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bf&&i.locale!=="ko"?null:i.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Lg[n.type]:i==="textarea"}function Xf(n,i,a,u){_e(u),i=go(i,"onChange"),0<i.length&&(a=new lc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var da=null,fa=null;function Ig(n){uh(n,0)}function fo(n){var i=gs(n);if(dt(i))return n}function Dg(n,i){if(n==="change")return i}var Yf=!1;if(f){var pc;if(f){var mc="oninput"in document;if(!mc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),mc=typeof qf.oninput=="function"}pc=mc}else pc=!1;Yf=pc&&(!document.documentMode||9<document.documentMode)}function $f(){da&&(da.detachEvent("onpropertychange",Kf),fa=da=null)}function Kf(n){if(n.propertyName==="value"&&fo(fa)){var i=[];Xf(i,fa,n,et(n)),$e(Ig,i)}}function kg(n,i,a){n==="focusin"?($f(),da=i,fa=a,da.attachEvent("onpropertychange",Kf)):n==="focusout"&&$f()}function Ug(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fo(fa)}function Og(n,i){if(n==="click")return fo(i)}function Fg(n,i){if(n==="input"||n==="change")return fo(i)}function zg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:zg;function ha(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!p.call(i,h)||!fi(n[h],i[h]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,i){var a=Zf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function Qf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bg(n){var i=eh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qf(a.ownerDocument.documentElement,a)){if(u!==null&&gc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Jf(a,g);var C=Jf(a,u);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gg=f&&"documentMode"in document&&11>=document.documentMode,fs=null,xc=null,pa=null,vc=!1;function th(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||fs==null||fs!==Pt(u)||(u=fs,"selectionStart"in u&&gc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pa&&ha(pa,u)||(pa=u,u=go(xc,"onSelect"),0<u.length&&(i=new lc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=fs)))}function ho(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var hs={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},_c={},nh={};f&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function po(n){if(_c[n])return _c[n];if(!hs[n])return n;var i=hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in nh)return _c[n]=i[a];return n}var ih=po("animationend"),rh=po("animationiteration"),sh=po("animationstart"),ah=po("transitionend"),oh=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,i){oh.set(n,i),c(i,[n])}for(var yc=0;yc<lh.length;yc++){var bc=lh[yc],jg=bc.toLowerCase(),Hg=bc[0].toUpperCase()+bc.slice(1);dr(jg,"on"+Hg)}dr(ih,"onAnimationEnd"),dr(rh,"onAnimationIteration"),dr(sh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(ah,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function ch(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,to(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var C=u.length-1;0<=C;C--){var W=u[C],q=W.instance,me=W.currentTarget;if(W=W.listener,q!==g&&h.isPropagationStopped())break e;ch(h,W,me),g=q}else for(C=0;C<u.length;C++){if(W=u[C],q=W.instance,me=W.currentTarget,W=W.listener,q!==g&&h.isPropagationStopped())break e;ch(h,W,me),g=q}}}if(Ir)throw n=Dr,Ir=!1,Dr=null,n}function Vt(n,i){var a=i[Rc];a===void 0&&(a=i[Rc]=new Set);var u=n+"__bubble";a.has(u)||(dh(i,n,2,!1),a.add(u))}function Sc(n,i,a){var u=0;i&&(u|=4),dh(a,n,u,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[mo]){n[mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Vg.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[mo]||(i[mo]=!0,Sc("selectionchange",!1,i))}}function dh(n,i,a,u){switch(Df(i)){case 1:var h=rg;break;case 4:h=sg;break;default:h=sc}a=h.bind(null,i,a,n),h=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function wc(n,i,a,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var W=u.stateNode.containerInfo;if(W===h||W.nodeType===8&&W.parentNode===h)break;if(C===4)for(C=u.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===h||q.nodeType===8&&q.parentNode===h))return;C=C.return}for(;W!==null;){if(C=Or(W),C===null)return;if(q=C.tag,q===5||q===6){u=g=C;continue e}W=W.parentNode}}u=u.return}$e(function(){var me=g,Me=et(a),Ee=[];e:{var Se=oh.get(n);if(Se!==void 0){var Xe=lc,Je=n;switch(n){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":Xe=yg;break;case"focusin":Je="focus",Xe=dc;break;case"focusout":Je="blur",Xe=dc;break;case"beforeblur":case"afterblur":Xe=dc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=wg;break;case ih:case rh:case sh:Xe=dg;break;case ah:Xe=Eg;break;case"scroll":Xe=ag;break;case"wheel":Xe=Ag;break;case"copy":case"cut":case"paste":Xe=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=zf}var it=(i&4)!==0,tn=!it&&n==="scroll",le=it?Se!==null?Se+"Capture":null:Se;it=[];for(var te=me,ue;te!==null;){ue=te;var Te=ue.stateNode;if(ue.tag===5&&Te!==null&&(ue=Te,le!==null&&(Te=Lt(te,le),Te!=null&&it.push(xa(te,Te,ue)))),tn)break;te=te.return}0<it.length&&(Se=new Xe(Se,Je,null,a,Me),Ee.push({event:Se,listeners:it}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",Se&&a!==Pe&&(Je=a.relatedTarget||a.fromElement)&&(Or(Je)||Je[Gi]))break e;if((Xe||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Xe?(Je=a.relatedTarget||a.toElement,Xe=me,Je=Je?Or(Je):null,Je!==null&&(tn=Rn(Je),Je!==tn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Xe=null,Je=me),Xe!==Je)){if(it=Of,Te="onMouseLeave",le="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(it=zf,Te="onPointerLeave",le="onPointerEnter",te="pointer"),tn=Xe==null?Se:gs(Xe),ue=Je==null?Se:gs(Je),Se=new it(Te,te+"leave",Xe,a,Me),Se.target=tn,Se.relatedTarget=ue,Te=null,Or(Me)===me&&(it=new it(le,te+"enter",Je,a,Me),it.target=ue,it.relatedTarget=tn,Te=it),tn=Te,Xe&&Je)t:{for(it=Xe,le=Je,te=0,ue=it;ue;ue=ps(ue))te++;for(ue=0,Te=le;Te;Te=ps(Te))ue++;for(;0<te-ue;)it=ps(it),te--;for(;0<ue-te;)le=ps(le),ue--;for(;te--;){if(it===le||le!==null&&it===le.alternate)break t;it=ps(it),le=ps(le)}it=null}else it=null;Xe!==null&&fh(Ee,Se,Xe,it,!1),Je!==null&&tn!==null&&fh(Ee,tn,Je,it,!0)}}e:{if(Se=me?gs(me):window,Xe=Se.nodeName&&Se.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Se.type==="file")var st=Dg;else if(Wf(Se))if(Yf)st=Fg;else{st=Ug;var ct=kg}else(Xe=Se.nodeName)&&Xe.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(st=Og);if(st&&(st=st(n,me))){Xf(Ee,st,a,Me);break e}ct&&ct(n,Se,me),n==="focusout"&&(ct=Se._wrapperState)&&ct.controlled&&Se.type==="number"&&de(Se,"number",Se.value)}switch(ct=me?gs(me):window,n){case"focusin":(Wf(ct)||ct.contentEditable==="true")&&(fs=ct,xc=me,pa=null);break;case"focusout":pa=xc=fs=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,th(Ee,a,Me);break;case"selectionchange":if(Gg)break;case"keydown":case"keyup":th(Ee,a,Me)}var ut;if(hc)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else ds?Hf(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Bf&&a.locale!=="ko"&&(ds||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&ds&&(ut=kf()):(ur=Me,oc="value"in ur?ur.value:ur.textContent,ds=!0)),ct=go(me,pt),0<ct.length&&(pt=new Ff(pt,n,null,a,Me),Ee.push({event:pt,listeners:ct}),ut?pt.data=ut:(ut=Vf(a),ut!==null&&(pt.data=ut)))),(ut=Rg?Ng(n,a):Pg(n,a))&&(me=go(me,"onBeforeInput"),0<me.length&&(Me=new Ff("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:me}),Me.data=ut))}uh(Ee,i)})}function xa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function go(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Lt(n,a),g!=null&&u.unshift(xa(n,g,h)),g=Lt(n,i),g!=null&&u.push(xa(n,g,h))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,i,a,u,h){for(var g=i._reactName,C=[];a!==null&&a!==u;){var W=a,q=W.alternate,me=W.stateNode;if(q!==null&&q===u)break;W.tag===5&&me!==null&&(W=me,h?(q=Lt(a,g),q!=null&&C.unshift(xa(a,q,W))):h||(q=Lt(a,g),q!=null&&C.push(xa(a,q,W)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Wg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function hh(n){return(typeof n=="string"?n:""+n).replace(Wg,`
`).replace(Xg,"")}function xo(n,i,a){if(i=hh(i),hh(n)!==i&&a)throw Error(t(425))}function vo(){}var Mc=null,Ec=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(n){return ph.resolve(null).then(n).catch($g)}:Ac;function $g(n){setTimeout(function(){throw n})}function Cc(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),oa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);oa(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ms,va="__reactProps$"+ms,Gi="__reactContainer$"+ms,Rc="__reactEvents$"+ms,Kg="__reactListeners$"+ms,Zg="__reactHandles$"+ms;function Or(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Gi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=mh(n);n!==null;){if(a=n[Ei])return a;n=mh(n)}return i}n=a,a=n.parentNode}return null}function _a(n){return n=n[Ei]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _o(n){return n[va]||null}var Nc=[],xs=-1;function hr(n){return{current:n}}function Wt(n){0>xs||(n.current=Nc[xs],Nc[xs]=null,xs--)}function Ht(n,i){xs++,Nc[xs]=n.current,n.current=i}var pr={},Sn=hr(pr),In=hr(!1),Fr=pr;function vs(n,i){var a=n.type.contextTypes;if(!a)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Dn(n){return n=n.childContextTypes,n!=null}function yo(){Wt(In),Wt(Sn)}function gh(n,i,a){if(Sn.current!==pr)throw Error(t(168));Ht(Sn,i),Ht(In,a)}function xh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,ae(n)||"Unknown",h));return H({},a,u)}function bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Fr=Sn.current,Ht(Sn,n),Ht(In,In.current),!0}function vh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=xh(n,i,Fr),u.__reactInternalMemoizedMergedChildContext=n,Wt(In),Wt(Sn),Ht(Sn,n)):Wt(In),Ht(In,a)}var ji=null,So=!1,Pc=!1;function _h(n){ji===null?ji=[n]:ji.push(n)}function Jg(n){So=!0,_h(n)}function mr(){if(!Pc&&ji!==null){Pc=!0;var n=0,i=St;try{var a=ji;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}ji=null,So=!1}catch(h){throw ji!==null&&(ji=ji.slice(n+1)),Ur(ta,mr),h}finally{St=i,Pc=!1}}return null}var _s=[],ys=0,wo=null,Mo=0,Jn=[],Qn=0,zr=null,Hi=1,Vi="";function Br(n,i){_s[ys++]=Mo,_s[ys++]=wo,wo=n,Mo=i}function yh(n,i,a){Jn[Qn++]=Hi,Jn[Qn++]=Vi,Jn[Qn++]=zr,zr=n;var u=Hi;n=Vi;var h=32-Fe(u)-1;u&=~(1<<h),a+=1;var g=32-Fe(i)+h;if(30<g){var C=h-h%5;g=(u&(1<<C)-1).toString(32),u>>=C,h-=C,Hi=1<<32-Fe(i)+h|a<<h|u,Vi=g+n}else Hi=1<<g|a<<h|u,Vi=n}function Lc(n){n.return!==null&&(Br(n,1),yh(n,1,0))}function Ic(n){for(;n===wo;)wo=_s[--ys],_s[ys]=null,Mo=_s[--ys],_s[ys]=null;for(;n===zr;)zr=Jn[--Qn],Jn[Qn]=null,Vi=Jn[--Qn],Jn[Qn]=null,Hi=Jn[--Qn],Jn[Qn]=null}var jn=null,Hn=null,Yt=!1,hi=null;function bh(n,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Sh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,Hn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:Hi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,Hn=null,!0):!1;default:return!1}}function Dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(Yt){var i=Hn;if(i){var a=i;if(!Sh(n,i)){if(Dc(n))throw Error(t(418));i=fr(a.nextSibling);var u=jn;i&&Sh(n,i)?bh(u,a):(n.flags=n.flags&-4097|2,Yt=!1,jn=n)}}else{if(Dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,jn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Eo(n){if(n!==jn)return!1;if(!Yt)return wh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=Hn)){if(Dc(n))throw Mh(),Error(t(418));for(;i;)bh(n,i),i=fr(i.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Hn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=jn?fr(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=Hn;n;)n=fr(n.nextSibling)}function bs(){Hn=jn=null,Yt=!1}function Uc(n){hi===null?hi=[n]:hi.push(n)}var Qg=T.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var W=h.refs;C===null?delete W[g]:W[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function To(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Eh(n){var i=n._init;return i(n._payload)}function Th(n){function i(le,te){if(n){var ue=le.deletions;ue===null?(le.deletions=[te],le.flags|=16):ue.push(te)}}function a(le,te){if(!n)return null;for(;te!==null;)i(le,te),te=te.sibling;return null}function u(le,te){for(le=new Map;te!==null;)te.key!==null?le.set(te.key,te):le.set(te.index,te),te=te.sibling;return le}function h(le,te){return le=wr(le,te),le.index=0,le.sibling=null,le}function g(le,te,ue){return le.index=ue,n?(ue=le.alternate,ue!==null?(ue=ue.index,ue<te?(le.flags|=2,te):ue):(le.flags|=2,te)):(le.flags|=1048576,te)}function C(le){return n&&le.alternate===null&&(le.flags|=2),le}function W(le,te,ue,Te){return te===null||te.tag!==6?(te=Au(ue,le.mode,Te),te.return=le,te):(te=h(te,ue),te.return=le,te)}function q(le,te,ue,Te){var st=ue.type;return st===A?Me(le,te,ue.props.children,Te,ue.key):te!==null&&(te.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ie&&Eh(st)===te.type)?(Te=h(te,ue.props),Te.ref=ya(le,te,ue),Te.return=le,Te):(Te=Ko(ue.type,ue.key,ue.props,null,le.mode,Te),Te.ref=ya(le,te,ue),Te.return=le,Te)}function me(le,te,ue,Te){return te===null||te.tag!==4||te.stateNode.containerInfo!==ue.containerInfo||te.stateNode.implementation!==ue.implementation?(te=Cu(ue,le.mode,Te),te.return=le,te):(te=h(te,ue.children||[]),te.return=le,te)}function Me(le,te,ue,Te,st){return te===null||te.tag!==7?(te=qr(ue,le.mode,Te,st),te.return=le,te):(te=h(te,ue),te.return=le,te)}function Ee(le,te,ue){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Au(""+te,le.mode,ue),te.return=le,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case P:return ue=Ko(te.type,te.key,te.props,null,le.mode,ue),ue.ref=ya(le,null,te),ue.return=le,ue;case I:return te=Cu(te,le.mode,ue),te.return=le,te;case ie:var Te=te._init;return Ee(le,Te(te._payload),ue)}if(lt(te)||j(te))return te=qr(te,le.mode,ue,null),te.return=le,te;To(le,te)}return null}function Se(le,te,ue,Te){var st=te!==null?te.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return st!==null?null:W(le,te,""+ue,Te);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case P:return ue.key===st?q(le,te,ue,Te):null;case I:return ue.key===st?me(le,te,ue,Te):null;case ie:return st=ue._init,Se(le,te,st(ue._payload),Te)}if(lt(ue)||j(ue))return st!==null?null:Me(le,te,ue,Te,null);To(le,ue)}return null}function Xe(le,te,ue,Te,st){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return le=le.get(ue)||null,W(te,le,""+Te,st);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case P:return le=le.get(Te.key===null?ue:Te.key)||null,q(te,le,Te,st);case I:return le=le.get(Te.key===null?ue:Te.key)||null,me(te,le,Te,st);case ie:var ct=Te._init;return Xe(le,te,ue,ct(Te._payload),st)}if(lt(Te)||j(Te))return le=le.get(ue)||null,Me(te,le,Te,st,null);To(te,Te)}return null}function Je(le,te,ue,Te){for(var st=null,ct=null,ut=te,pt=te=0,mn=null;ut!==null&&pt<ue.length;pt++){ut.index>pt?(mn=ut,ut=null):mn=ut.sibling;var Ot=Se(le,ut,ue[pt],Te);if(Ot===null){ut===null&&(ut=mn);break}n&&ut&&Ot.alternate===null&&i(le,ut),te=g(Ot,te,pt),ct===null?st=Ot:ct.sibling=Ot,ct=Ot,ut=mn}if(pt===ue.length)return a(le,ut),Yt&&Br(le,pt),st;if(ut===null){for(;pt<ue.length;pt++)ut=Ee(le,ue[pt],Te),ut!==null&&(te=g(ut,te,pt),ct===null?st=ut:ct.sibling=ut,ct=ut);return Yt&&Br(le,pt),st}for(ut=u(le,ut);pt<ue.length;pt++)mn=Xe(ut,le,pt,ue[pt],Te),mn!==null&&(n&&mn.alternate!==null&&ut.delete(mn.key===null?pt:mn.key),te=g(mn,te,pt),ct===null?st=mn:ct.sibling=mn,ct=mn);return n&&ut.forEach(function(Mr){return i(le,Mr)}),Yt&&Br(le,pt),st}function it(le,te,ue,Te){var st=j(ue);if(typeof st!="function")throw Error(t(150));if(ue=st.call(ue),ue==null)throw Error(t(151));for(var ct=st=null,ut=te,pt=te=0,mn=null,Ot=ue.next();ut!==null&&!Ot.done;pt++,Ot=ue.next()){ut.index>pt?(mn=ut,ut=null):mn=ut.sibling;var Mr=Se(le,ut,Ot.value,Te);if(Mr===null){ut===null&&(ut=mn);break}n&&ut&&Mr.alternate===null&&i(le,ut),te=g(Mr,te,pt),ct===null?st=Mr:ct.sibling=Mr,ct=Mr,ut=mn}if(Ot.done)return a(le,ut),Yt&&Br(le,pt),st;if(ut===null){for(;!Ot.done;pt++,Ot=ue.next())Ot=Ee(le,Ot.value,Te),Ot!==null&&(te=g(Ot,te,pt),ct===null?st=Ot:ct.sibling=Ot,ct=Ot);return Yt&&Br(le,pt),st}for(ut=u(le,ut);!Ot.done;pt++,Ot=ue.next())Ot=Xe(ut,le,pt,Ot.value,Te),Ot!==null&&(n&&Ot.alternate!==null&&ut.delete(Ot.key===null?pt:Ot.key),te=g(Ot,te,pt),ct===null?st=Ot:ct.sibling=Ot,ct=Ot);return n&&ut.forEach(function(Lx){return i(le,Lx)}),Yt&&Br(le,pt),st}function tn(le,te,ue,Te){if(typeof ue=="object"&&ue!==null&&ue.type===A&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case P:e:{for(var st=ue.key,ct=te;ct!==null;){if(ct.key===st){if(st=ue.type,st===A){if(ct.tag===7){a(le,ct.sibling),te=h(ct,ue.props.children),te.return=le,le=te;break e}}else if(ct.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===ie&&Eh(st)===ct.type){a(le,ct.sibling),te=h(ct,ue.props),te.ref=ya(le,ct,ue),te.return=le,le=te;break e}a(le,ct);break}else i(le,ct);ct=ct.sibling}ue.type===A?(te=qr(ue.props.children,le.mode,Te,ue.key),te.return=le,le=te):(Te=Ko(ue.type,ue.key,ue.props,null,le.mode,Te),Te.ref=ya(le,te,ue),Te.return=le,le=Te)}return C(le);case I:e:{for(ct=ue.key;te!==null;){if(te.key===ct)if(te.tag===4&&te.stateNode.containerInfo===ue.containerInfo&&te.stateNode.implementation===ue.implementation){a(le,te.sibling),te=h(te,ue.children||[]),te.return=le,le=te;break e}else{a(le,te);break}else i(le,te);te=te.sibling}te=Cu(ue,le.mode,Te),te.return=le,le=te}return C(le);case ie:return ct=ue._init,tn(le,te,ct(ue._payload),Te)}if(lt(ue))return Je(le,te,ue,Te);if(j(ue))return it(le,te,ue,Te);To(le,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,te!==null&&te.tag===6?(a(le,te.sibling),te=h(te,ue),te.return=le,le=te):(a(le,te),te=Au(ue,le.mode,Te),te.return=le,le=te),C(le)):a(le,te)}return tn}var Ss=Th(!0),Ah=Th(!1),Ao=hr(null),Co=null,ws=null,Oc=null;function Fc(){Oc=ws=Co=null}function zc(n){var i=Ao.current;Wt(Ao),n._currentValue=i}function Bc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ms(n,i){Co=n,Oc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(kn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Co===null)throw Error(t(308));ws=n,Co.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var Gr=null;function Gc(n){Gr===null?Gr=[n]:Gr.push(n)}function Ch(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Gc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Wi(n,u)}function Wi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Wi(n,a)}return h=u.interleaved,h===null?(i.next=i,Gc(u)):(i.next=h.next,h.next=i),u.interleaved=i,Wi(n,a)}function Ro(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,bn(n,a)}}function Nh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function No(n,i,a,u){var h=n.updateQueue;gr=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,W=h.shared.pending;if(W!==null){h.shared.pending=null;var q=W,me=q.next;q.next=null,C===null?g=me:C.next=me,C=q;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,W=Me.lastBaseUpdate,W!==C&&(W===null?Me.firstBaseUpdate=me:W.next=me,Me.lastBaseUpdate=q))}if(g!==null){var Ee=h.baseState;C=0,Me=me=q=null,W=g;do{var Se=W.lane,Xe=W.eventTime;if((u&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Xe,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var Je=n,it=W;switch(Se=i,Xe=a,it.tag){case 1:if(Je=it.payload,typeof Je=="function"){Ee=Je.call(Xe,Ee,Se);break e}Ee=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=it.payload,Se=typeof Je=="function"?Je.call(Xe,Ee,Se):Je,Se==null)break e;Ee=H({},Ee,Se);break e;case 2:gr=!0}}W.callback!==null&&W.lane!==0&&(n.flags|=64,Se=h.effects,Se===null?h.effects=[W]:Se.push(W))}else Xe={eventTime:Xe,lane:Se,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Me===null?(me=Me=Xe,q=Ee):Me=Me.next=Xe,C|=Se;if(W=W.next,W===null){if(W=h.shared.pending,W===null)break;Se=W,W=Se.next,Se.next=null,h.lastBaseUpdate=Se,h.shared.pending=null}}while(!0);if(Me===null&&(q=Ee),h.baseState=q,h.firstBaseUpdate=me,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Vr|=C,n.lanes=C,n.memoizedState=Ee}}function Ph(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var ba={},Ti=hr(ba),Sa=hr(ba),wa=hr(ba);function jr(n){if(n===ba)throw Error(t(174));return n}function Hc(n,i){switch(Ht(wa,i),Ht(Sa,n),Ht(Ti,ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:v(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=v(i,n)}Wt(Ti),Ht(Ti,i)}function Es(){Wt(Ti),Wt(Sa),Wt(wa)}function Lh(n){jr(wa.current);var i=jr(Ti.current),a=v(i,n.type);i!==a&&(Ht(Sa,n),Ht(Ti,a))}function Vc(n){Sa.current===n&&(Wt(Ti),Wt(Sa))}var $t=hr(0);function Po(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function Xc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var Lo=T.ReactCurrentDispatcher,Yc=T.ReactCurrentBatchConfig,Hr=0,Kt=null,ln=null,hn=null,Io=!1,Ma=!1,Ea=0,ex=0;function wn(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!fi(n[a],i[a]))return!1;return!0}function $c(n,i,a,u,h,g){if(Hr=g,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lo.current=n===null||n.memoizedState===null?rx:sx,n=a(u,h),Ma){g=0;do{if(Ma=!1,Ea=0,25<=g)throw Error(t(301));g+=1,hn=ln=null,i.updateQueue=null,Lo.current=ax,n=a(u,h)}while(Ma)}if(Lo.current=Uo,i=ln!==null&&ln.next!==null,Hr=0,hn=ln=Kt=null,Io=!1,i)throw Error(t(300));return n}function Kc(){var n=Ea!==0;return Ea=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Kt.memoizedState=hn=n:hn=hn.next=n,hn}function ti(){if(ln===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var i=hn===null?Kt.memoizedState:hn.next;if(i!==null)hn=i,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?Kt.memoizedState=hn=n:hn=hn.next=n}return hn}function Ta(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=ln,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var W=C=null,q=null,me=g;do{var Me=me.lane;if((Hr&Me)===Me)q!==null&&(q=q.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),u=me.hasEagerState?me.eagerState:n(u,me.action);else{var Ee={lane:Me,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};q===null?(W=q=Ee,C=u):q=q.next=Ee,Kt.lanes|=Me,Vr|=Me}me=me.next}while(me!==null&&me!==g);q===null?C=u:q.next=W,fi(u,i.memoizedState)||(kn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=q,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Kt.lanes|=g,Vr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Jc(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);fi(g,i.memoizedState)||(kn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function Ih(){}function Dh(n,i){var a=Kt,u=ti(),h=i(),g=!fi(u.memoizedState,h);if(g&&(u.memoizedState=h,kn=!0),u=u.queue,Qc(Oh.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Uh.bind(null,a,u,h,i),void 0,null),pn===null)throw Error(t(349));(Hr&30)!==0||kh(a,i,h)}return h}function kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Uh(n,i,a,u){i.value=a,i.getSnapshot=u,Fh(i)&&zh(n)}function Oh(n,i,a){return a(function(){Fh(i)&&zh(n)})}function Fh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!fi(n,a)}catch{return!0}}function zh(n){var i=Wi(n,1);i!==null&&xi(i,n,1,-1)}function Bh(n){var i=Ai();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=ix.bind(null,Kt,n),[i.memoizedState,n]}function Aa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Gh(){return ti().memoizedState}function Do(n,i,a,u){var h=Ai();Kt.flags|=n,h.memoizedState=Aa(1|i,a,void 0,u===void 0?null:u)}function ko(n,i,a,u){var h=ti();u=u===void 0?null:u;var g=void 0;if(ln!==null){var C=ln.memoizedState;if(g=C.destroy,u!==null&&qc(u,C.deps)){h.memoizedState=Aa(i,a,g,u);return}}Kt.flags|=n,h.memoizedState=Aa(1|i,a,g,u)}function jh(n,i){return Do(8390656,8,n,i)}function Qc(n,i){return ko(2048,8,n,i)}function Hh(n,i){return ko(4,2,n,i)}function Vh(n,i){return ko(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,a){return a=a!=null?a.concat([n]):null,ko(4,4,Wh.bind(null,i,n),a)}function eu(){}function Yh(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function qh(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function $h(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,kn=!0),n.memoizedState=a):(fi(a,i)||(a=on(),Kt.lanes|=a,Vr|=a,n.baseState=!0),i)}function tx(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=Yc.transition;Yc.transition={};try{n(!1),i()}finally{St=a,Yc.transition=u}}function Kh(){return ti().memoizedState}function nx(n,i,a){var u=br(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(n))Jh(i,a);else if(a=Ch(n,i,a,u),a!==null){var h=Pn();xi(a,n,u,h),Qh(a,i,u)}}function ix(n,i,a){var u=br(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))Jh(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,W=g(C,a);if(h.hasEagerState=!0,h.eagerState=W,fi(W,C)){var q=i.interleaved;q===null?(h.next=h,Gc(i)):(h.next=q.next,q.next=h),i.interleaved=h;return}}catch{}finally{}a=Ch(n,i,h,u),a!==null&&(h=Pn(),xi(a,n,u,h),Qh(a,i,u))}}function Zh(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function Jh(n,i){Ma=Io=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Qh(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,bn(n,a)}}var Uo={readContext:ei,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},rx={readContext:ei,useCallback:function(n,i){return Ai().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:jh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Do(4194308,4,Wh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Do(4194308,4,n,i)},useInsertionEffect:function(n,i){return Do(4,2,n,i)},useMemo:function(n,i){var a=Ai();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ai();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=nx.bind(null,Kt,n),[u.memoizedState,n]},useRef:function(n){var i=Ai();return n={current:n},i.memoizedState=n},useState:Bh,useDebugValue:eu,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Bh(!1),i=n[0];return n=tx.bind(null,n[1]),Ai().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Kt,h=Ai();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(Hr&30)!==0||kh(u,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,jh(Oh.bind(null,u,g,n),[n]),u.flags|=2048,Aa(9,Uh.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Ai(),i=pn.identifierPrefix;if(Yt){var a=Vi,u=Hi;a=(u&~(1<<32-Fe(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=ex++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},sx={readContext:ei,useCallback:Yh,useContext:ei,useEffect:Qc,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:qh,useReducer:Zc,useRef:Gh,useState:function(){return Zc(Ta)},useDebugValue:eu,useDeferredValue:function(n){var i=ti();return $h(i,ln.memoizedState,n)},useTransition:function(){var n=Zc(Ta)[0],i=ti().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Dh,useId:Kh,unstable_isNewReconciler:!1},ax={readContext:ei,useCallback:Yh,useContext:ei,useEffect:Qc,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:qh,useReducer:Jc,useRef:Gh,useState:function(){return Jc(Ta)},useDebugValue:eu,useDeferredValue:function(n){var i=ti();return ln===null?i.memoizedState=n:$h(i,ln.memoizedState,n)},useTransition:function(){var n=Jc(Ta)[0],i=ti().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Dh,useId:Kh,unstable_isNewReconciler:!1};function pi(n,i){if(n&&n.defaultProps){i=H({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function tu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:H({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Oo={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Pn(),h=br(n),g=Xi(u,h);g.payload=i,a!=null&&(g.callback=a),i=xr(n,g,h),i!==null&&(xi(i,n,h,u),Ro(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Pn(),h=br(n),g=Xi(u,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=xr(n,g,h),i!==null&&(xi(i,n,h,u),Ro(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Pn(),u=br(n),h=Xi(a,u);h.tag=2,i!=null&&(h.callback=i),i=xr(n,h,u),i!==null&&(xi(i,n,u,a),Ro(i,n,u))}};function ep(n,i,a,u,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,C):i.prototype&&i.prototype.isPureReactComponent?!ha(a,u)||!ha(h,g):!0}function tp(n,i,a){var u=!1,h=pr,g=i.contextType;return typeof g=="object"&&g!==null?g=ei(g):(h=Dn(i)?Fr:Sn.current,u=i.contextTypes,g=(u=u!=null)?vs(n,h):pr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function np(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Oo.enqueueReplaceState(i,i.state,null)}function nu(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},jc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=ei(g):(g=Dn(i)?Fr:Sn.current,h.context=vs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(tu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Oo.enqueueReplaceState(h,h.state,null),No(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,i){try{var a="",u=i;do a+=Ne(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function iu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ru(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function ip(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Vo||(Vo=!0,_u=u),ru(n,i)},a}function rp(n,i,a){a=Xi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){ru(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ru(n,i),typeof u!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function sp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new ox;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=bx.bind(null,n,i,a),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var lx=T.ReactCurrentOwner,kn=!1;function Nn(n,i,a,u){i.child=n===null?Ah(i,null,a,u):Ss(i,n.child,a,u)}function lp(n,i,a,u,h){a=a.render;var g=i.ref;return Ms(i,h),u=$c(n,i,a,u,g,h),a=Kc(),n!==null&&!kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Yi(n,i,h)):(Yt&&a&&Lc(i),i.flags|=1,Nn(n,i,u,h),i.child)}function cp(n,i,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!Tu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,up(n,i,g,u,h)):(n=Ko(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(C,u)&&n.ref===i.ref)return Yi(n,i,h)}return i.flags|=1,n=wr(g,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,a,u,h){if(n!==null){var g=n.memoizedProps;if(ha(g,u)&&n.ref===i.ref)if(kn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(kn=!0);else return i.lanes=n.lanes,Yi(n,i,h)}return su(n,i,a,u,h)}function dp(n,i,a){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Cs,Vn),Vn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Cs,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Ht(Cs,Vn),Vn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,Ht(Cs,Vn),Vn|=u;return Nn(n,i,h,a),i.child}function fp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function su(n,i,a,u,h){var g=Dn(a)?Fr:Sn.current;return g=vs(i,g),Ms(i,h),a=$c(n,i,a,u,g,h),u=Kc(),n!==null&&!kn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Yi(n,i,h)):(Yt&&u&&Lc(i),i.flags|=1,Nn(n,i,a,h),i.child)}function hp(n,i,a,u,h){if(Dn(a)){var g=!0;bo(i)}else g=!1;if(Ms(i,h),i.stateNode===null)zo(n,i),tp(i,a,u),nu(i,a,u,h),u=!0;else if(n===null){var C=i.stateNode,W=i.memoizedProps;C.props=W;var q=C.context,me=a.contextType;typeof me=="object"&&me!==null?me=ei(me):(me=Dn(a)?Fr:Sn.current,me=vs(i,me));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ee||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(W!==u||q!==me)&&np(i,C,u,me),gr=!1;var Se=i.memoizedState;C.state=Se,No(i,u,C,h),q=i.memoizedState,W!==u||Se!==q||In.current||gr?(typeof Me=="function"&&(tu(i,a,Me,u),q=i.memoizedState),(W=gr||ep(i,a,W,u,Se,q,me))?(Ee||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=q),C.props=u,C.state=q,C.context=me,u=W):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,Rh(n,i),W=i.memoizedProps,me=i.type===i.elementType?W:pi(i.type,W),C.props=me,Ee=i.pendingProps,Se=C.context,q=a.contextType,typeof q=="object"&&q!==null?q=ei(q):(q=Dn(a)?Fr:Sn.current,q=vs(i,q));var Xe=a.getDerivedStateFromProps;(Me=typeof Xe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(W!==Ee||Se!==q)&&np(i,C,u,q),gr=!1,Se=i.memoizedState,C.state=Se,No(i,u,C,h);var Je=i.memoizedState;W!==Ee||Se!==Je||In.current||gr?(typeof Xe=="function"&&(tu(i,a,Xe,u),Je=i.memoizedState),(me=gr||ep(i,a,me,u,Se,Je,q)||!1)?(Me||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,Je,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,Je,q)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||W===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Je),C.props=u,C.state=Je,C.context=q,u=me):(typeof C.componentDidUpdate!="function"||W===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),u=!1)}return au(n,i,a,u,g,h)}function au(n,i,a,u,h,g){fp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return h&&vh(i,a,!1),Yi(n,i,g);u=i.stateNode,lx.current=i;var W=C&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Ss(i,n.child,null,g),i.child=Ss(i,null,W,g)):Nn(n,i,W,g),i.memoizedState=u.state,h&&vh(i,a,!0),i.child}function pp(n){var i=n.stateNode;i.pendingContext?gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(n,i.context,!1),Hc(n,i.containerInfo)}function mp(n,i,a,u,h){return bs(),Uc(h),i.flags|=256,Nn(n,i,a,u),i.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function gp(n,i,a){var u=i.pendingProps,h=$t.current,g=!1,C=(i.flags&128)!==0,W;if((W=C)||(W=n!==null&&n.memoizedState===null?!1:(h&2)!==0),W?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ht($t,h&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,g?(u=i.mode,g=i.child,C={mode:"hidden",children:C},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Zo(C,u,0,null),n=qr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=lu(a),i.memoizedState=ou,n):cu(i,C));if(h=n.memoizedState,h!==null&&(W=h.dehydrated,W!==null))return cx(n,i,C,u,W,h,a);if(g){g=u.fallback,C=i.mode,h=n.child,W=h.sibling;var q={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=q,i.deletions=null):(u=wr(h,q),u.subtreeFlags=h.subtreeFlags&14680064),W!==null?g=wr(W,g):(g=qr(g,C,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,C=n.child.memoizedState,C=C===null?lu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=ou,u}return g=n.child,n=g.sibling,u=wr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function cu(n,i){return i=Zo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fo(n,i,a,u){return u!==null&&Uc(u),Ss(i,n.child,null,a),n=cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function cx(n,i,a,u,h,g,C){if(a)return i.flags&256?(i.flags&=-257,u=iu(Error(t(422))),Fo(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Zo({mode:"visible",children:u.children},h,0,null),g=qr(g,h,C,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Ss(i,n.child,null,C),i.child.memoizedState=lu(C),i.memoizedState=ou,g);if((i.mode&1)===0)return Fo(n,i,C,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var W=u.dgst;return u=W,g=Error(t(419)),u=iu(g,u,void 0),Fo(n,i,C,u)}if(W=(C&n.childLanes)!==0,kn||W){if(u=pn,u!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Wi(n,h),xi(u,n,h,-1))}return Eu(),u=iu(Error(t(421))),Fo(n,i,C,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Sx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Hn=fr(h.nextSibling),jn=i,Yt=!0,hi=null,n!==null&&(Jn[Qn++]=Hi,Jn[Qn++]=Vi,Jn[Qn++]=zr,Hi=n.id,Vi=n.overflow,zr=i),i=cu(i,u.children),i.flags|=4096,i)}function xp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Bc(n.return,i,a)}function uu(n,i,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function vp(n,i,a){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Nn(n,i,u.children,a),u=$t.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xp(n,a,i);else if(n.tag===19)xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht($t,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Po(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),uu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Po(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}uu(i,!0,a,null,g);break;case"together":uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Yi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ux(n,i,a){switch(i.tag){case 3:pp(i),bs();break;case 5:Lh(i);break;case 1:Dn(i.type)&&bo(i);break;case 4:Hc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Ht(Ao,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ht($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gp(n,i,a):(Ht($t,$t.current&1),n=Yi(n,i,a),n!==null?n.sibling:null);Ht($t,$t.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return vp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ht($t,$t.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(n,i,a)}return Yi(n,i,a)}var _p,du,yp,bp;_p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},du=function(){},yp=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,jr(Ti.current);var g=null;switch(a){case"input":h=ot(n,h),u=ot(n,u),g=[];break;case"select":h=H({},h,{value:void 0}),u=H({},u,{value:void 0}),g=[];break;case"textarea":h=at(n,h),u=at(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=vo)}Qe(a,u);var C;a=null;for(me in h)if(!u.hasOwnProperty(me)&&h.hasOwnProperty(me)&&h[me]!=null)if(me==="style"){var W=h[me];for(C in W)W.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?g||(g=[]):(g=g||[]).push(me,null));for(me in u){var q=u[me];if(W=h!=null?h[me]:void 0,u.hasOwnProperty(me)&&q!==W&&(q!=null||W!=null))if(me==="style")if(W){for(C in W)!W.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in q)q.hasOwnProperty(C)&&W[C]!==q[C]&&(a||(a={}),a[C]=q[C])}else a||(g||(g=[]),g.push(me,a)),a=q;else me==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,W=W?W.__html:void 0,q!=null&&W!==q&&(g=g||[]).push(me,q)):me==="children"?typeof q!="string"&&typeof q!="number"||(g=g||[]).push(me,""+q):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(q!=null&&me==="onScroll"&&Vt("scroll",n),g||W===q||(g=[])):(g=g||[]).push(me,q))}a&&(g=g||[]).push("style",a);var me=g;(i.updateQueue=me)&&(i.flags|=4)}},bp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ca(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function dx(n,i,a){var u=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Dn(i.type)&&yo(),Mn(i),null;case 3:return u=i.stateNode,Es(),Wt(In),Wt(Sn),Xc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Eo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hi!==null&&(Su(hi),hi=null))),du(n,i),Mn(i),null;case 5:Vc(i);var h=jr(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)yp(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=jr(Ti.current),Eo(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Ei]=i,u[va]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(h=0;h<ma.length;h++)Vt(ma[h],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":_t(u,g),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",u);break;case"textarea":K(u,g),Vt("invalid",u)}Qe(a,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var W=g[C];C==="children"?typeof W=="string"?u.textContent!==W&&(g.suppressHydrationWarning!==!0&&xo(u.textContent,W,n),h=["children",W]):typeof W=="number"&&u.textContent!==""+W&&(g.suppressHydrationWarning!==!0&&xo(u.textContent,W,n),h=["children",""+W]):o.hasOwnProperty(C)&&W!=null&&C==="onScroll"&&Vt("scroll",u)}switch(a){case"input":Oe(u),Tt(u,g,!0);break;case"textarea":Oe(u),We(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=vo)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(a,{is:u.is}):(n=C.createElement(a),a==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,a),n[Ei]=i,n[va]=u,_p(n,i,!1,!1),i.stateNode=n;e:{switch(C=De(a,u),a){case"dialog":Vt("cancel",n),Vt("close",n),h=u;break;case"iframe":case"object":case"embed":Vt("load",n),h=u;break;case"video":case"audio":for(h=0;h<ma.length;h++)Vt(ma[h],n);h=u;break;case"source":Vt("error",n),h=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),h=u;break;case"details":Vt("toggle",n),h=u;break;case"input":_t(n,u),h=ot(n,u),Vt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=H({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":K(n,u),h=at(n,u),Vt("invalid",n);break;default:h=u}Qe(a,h),W=h;for(g in W)if(W.hasOwnProperty(g)){var q=W[g];g==="style"?xe(n,q):g==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&ne(n,q)):g==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&he(n,q):typeof q=="number"&&he(n,""+q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?q!=null&&g==="onScroll"&&Vt("scroll",n):q!=null&&z(n,g,q,C))}switch(a){case"input":Oe(n),Tt(n,u,!1);break;case"textarea":Oe(n),We(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?nt(n,!!u.multiple,g,!1):u.defaultValue!=null&&nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(wa.current),jr(Ti.current),Eo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ei]=i,(g=u.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:xo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xo(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ei]=i,i.stateNode=u}return Mn(i),null;case 13:if(Wt($t),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),bs(),i.flags|=98560,g=!1;else if(g=Eo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ei]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),g=!1}else hi!==null&&(Su(hi),hi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?cn===0&&(cn=3):Eu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Es(),du(n,i),n===null&&ga(i.stateNode.containerInfo),Mn(i),null;case 10:return zc(i.type._context),Mn(i),null;case 17:return Dn(i.type)&&yo(),Mn(i),null;case 19:if(Wt($t),g=i.memoizedState,g===null)return Mn(i),null;if(u=(i.flags&128)!==0,C=g.rendering,C===null)if(u)Ca(g,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Po(n),C!==null){for(i.flags|=128,Ca(g,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht($t,$t.current&1|2),i.child}n=n.sibling}g.tail!==null&&qt()>Rs&&(i.flags|=128,u=!0,Ca(g,!1),i.lanes=4194304)}else{if(!u)if(n=Po(C),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Yt)return Mn(i),null}else 2*qt()-g.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,u=!0,Ca(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qt(),i.sibling=null,a=$t.current,Ht($t,u?a&1|2:a&1),i):(Mn(i),null);case 22:case 23:return Mu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function fx(n,i){switch(Ic(i),i.tag){case 1:return Dn(i.type)&&yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),Wt(In),Wt(Sn),Xc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vc(i),null;case 13:if(Wt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt($t),null;case 4:return Es(),null;case 10:return zc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Bo=!1,En=!1,hx=typeof WeakSet=="function"?WeakSet:Set,qe=null;function As(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Jt(n,i,u)}else a.current=null}function fu(n,i,a){try{a()}catch(u){Jt(n,i,u)}}var Sp=!1;function px(n,i){if(Mc=so,n=eh(),gc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,W=-1,q=-1,me=0,Me=0,Ee=n,Se=null;t:for(;;){for(var Xe;Ee!==a||h!==0&&Ee.nodeType!==3||(W=C+h),Ee!==g||u!==0&&Ee.nodeType!==3||(q=C+u),Ee.nodeType===3&&(C+=Ee.nodeValue.length),(Xe=Ee.firstChild)!==null;)Se=Ee,Ee=Xe;for(;;){if(Ee===n)break t;if(Se===a&&++me===h&&(W=C),Se===g&&++Me===u&&(q=C),(Xe=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=Xe}a=W===-1||q===-1?null:{start:W,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:n,selectionRange:a},so=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var it=Je.memoizedProps,tn=Je.memoizedState,le=i.stateNode,te=le.getSnapshotBeforeUpdate(i.elementType===i.type?it:pi(i.type,it),tn);le.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Jt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Je=Sp,Sp=!1,Je}function Ra(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&fu(i,a,g)}h=h.next}while(h!==u)}}function Go(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function hu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[va],delete i[Rc],delete i[Kg],delete i[Zg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vo));else if(u!==4&&(n=n.child,n!==null))for(pu(n,i,a),n=n.sibling;n!==null;)pu(n,i,a),n=n.sibling}function mu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(mu(n,i,a),n=n.sibling;n!==null;)mu(n,i,a),n=n.sibling}var vn=null,mi=!1;function vr(n,i,a){for(a=a.child;a!==null;)Tp(n,i,a),a=a.sibling}function Tp(n,i,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 5:En||As(a,i);case 6:var u=vn,h=mi;vn=null,vr(n,i,a),vn=u,mi=h,vn!==null&&(mi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(mi?(n=vn,a=a.stateNode,n.nodeType===8?Cc(n.parentNode,a):n.nodeType===1&&Cc(n,a),oa(n)):Cc(vn,a.stateNode));break;case 4:u=vn,h=mi,vn=a.stateNode.containerInfo,mi=!0,vr(n,i,a),vn=u,mi=h;break;case 0:case 11:case 14:case 15:if(!En&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&fu(a,i,C),h=h.next}while(h!==u)}vr(n,i,a);break;case 1:if(!En&&(As(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(W){Jt(a,i,W)}vr(n,i,a);break;case 21:vr(n,i,a);break;case 22:a.mode&1?(En=(u=En)||a.memoizedState!==null,vr(n,i,a),En=u):vr(n,i,a);break;default:vr(n,i,a)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new hx),i.forEach(function(u){var h=wx.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function gi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,C=i,W=C;e:for(;W!==null;){switch(W.tag){case 5:vn=W.stateNode,mi=!1;break e;case 3:vn=W.stateNode.containerInfo,mi=!0;break e;case 4:vn=W.stateNode.containerInfo,mi=!0;break e}W=W.return}if(vn===null)throw Error(t(160));Tp(g,C,h),vn=null,mi=!1;var q=h.alternate;q!==null&&(q.return=null),h.return=null}catch(me){Jt(h,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(i,n),Ci(n),u&4){try{Ra(3,n,n.return),Go(3,n)}catch(it){Jt(n,n.return,it)}try{Ra(5,n,n.return)}catch(it){Jt(n,n.return,it)}}break;case 1:gi(i,n),Ci(n),u&512&&a!==null&&As(a,a.return);break;case 5:if(gi(i,n),Ci(n),u&512&&a!==null&&As(a,a.return),n.flags&32){var h=n.stateNode;try{he(h,"")}catch(it){Jt(n,n.return,it)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,W=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{W==="input"&&g.type==="radio"&&g.name!=null&&bt(h,g),De(W,C);var me=De(W,g);for(C=0;C<q.length;C+=2){var Me=q[C],Ee=q[C+1];Me==="style"?xe(h,Ee):Me==="dangerouslySetInnerHTML"?ne(h,Ee):Me==="children"?he(h,Ee):z(h,Me,Ee,me)}switch(W){case"input":ht(h,g);break;case"textarea":Ae(h,g);break;case"select":var Se=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?nt(h,!!g.multiple,Xe,!1):Se!==!!g.multiple&&(g.defaultValue!=null?nt(h,!!g.multiple,g.defaultValue,!0):nt(h,!!g.multiple,g.multiple?[]:"",!1))}h[va]=g}catch(it){Jt(n,n.return,it)}}break;case 6:if(gi(i,n),Ci(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(it){Jt(n,n.return,it)}}break;case 3:if(gi(i,n),Ci(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(it){Jt(n,n.return,it)}break;case 4:gi(i,n),Ci(n);break;case 13:gi(i,n),Ci(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(vu=qt())),u&4&&Ap(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(En=(me=En)||Me,gi(i,n),En=me):gi(i,n),Ci(n),u&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Me&&(n.mode&1)!==0)for(qe=n,Me=n.child;Me!==null;){for(Ee=qe=Me;qe!==null;){switch(Se=qe,Xe=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ra(4,Se,Se.return);break;case 1:As(Se,Se.return);var Je=Se.stateNode;if(typeof Je.componentWillUnmount=="function"){u=Se,a=Se.return;try{i=u,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(it){Jt(u,a,it)}}break;case 5:As(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Pp(Ee);continue}}Xe!==null?(Xe.return=Se,qe=Xe):Pp(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{h=Ee.stateNode,me?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(W=Ee.stateNode,q=Ee.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,W.style.display=ge("display",C))}catch(it){Jt(n,n.return,it)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=me?"":Ee.memoizedProps}catch(it){Jt(n,n.return,it)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:gi(i,n),Ci(n),u&4&&Ap(n);break;case 21:break;default:gi(i,n),Ci(n)}}function Ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Mp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(he(h,""),u.flags&=-33);var g=Ep(n);mu(n,g,h);break;case 3:case 4:var C=u.stateNode.containerInfo,W=Ep(n);pu(n,W,C);break;default:throw Error(t(161))}}catch(q){Jt(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function mx(n,i,a){qe=n,Rp(n)}function Rp(n,i,a){for(var u=(n.mode&1)!==0;qe!==null;){var h=qe,g=h.child;if(h.tag===22&&u){var C=h.memoizedState!==null||Bo;if(!C){var W=h.alternate,q=W!==null&&W.memoizedState!==null||En;W=Bo;var me=En;if(Bo=C,(En=q)&&!me)for(qe=h;qe!==null;)C=qe,q=C.child,C.tag===22&&C.memoizedState!==null?Lp(h):q!==null?(q.return=C,qe=q):Lp(h);for(;g!==null;)qe=g,Rp(g),g=g.sibling;qe=h,Bo=W,En=me}Np(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,qe=g):Np(n)}}function Np(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||Go(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:pi(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Ph(i,g,u);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ph(i,C,a)}break;case 5:var W=i.stateNode;if(a===null&&i.flags&4){a=W;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Me=me.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&oa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&hu(i)}catch(Se){Jt(i,i.return,Se)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Pp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Lp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(q){Jt(i,a,q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(q){Jt(i,h,q)}}var g=i.return;try{hu(i)}catch(q){Jt(i,g,q)}break;case 5:var C=i.return;try{hu(i)}catch(q){Jt(i,C,q)}}}catch(q){Jt(i,i.return,q)}if(i===n){qe=null;break}var W=i.sibling;if(W!==null){W.return=i.return,qe=W;break}qe=i.return}}var gx=Math.ceil,jo=T.ReactCurrentDispatcher,gu=T.ReactCurrentOwner,ni=T.ReactCurrentBatchConfig,It=0,pn=null,rn=null,_n=0,Vn=0,Cs=hr(0),cn=0,Na=null,Vr=0,Ho=0,xu=0,Pa=null,Un=null,vu=0,Rs=1/0,qi=null,Vo=!1,_u=null,_r=null,Wo=!1,yr=null,Xo=0,La=0,yu=null,Yo=-1,qo=0;function Pn(){return(It&6)!==0?qt():Yo!==-1?Yo:Yo=qt()}function br(n){return(n.mode&1)===0?1:(It&2)!==0&&_n!==0?_n&-_n:Qg.transition!==null?(qo===0&&(qo=on()),qo):(n=St,n!==0||(n=window.event,n=n===void 0?16:Df(n.type)),n)}function xi(n,i,a,u){if(50<La)throw La=0,yu=null,Error(t(185));en(n,a,u),((It&2)===0||n!==pn)&&(n===pn&&((It&2)===0&&(Ho|=a),cn===4&&Sr(n,_n)),On(n,u),a===1&&It===0&&(i.mode&1)===0&&(Rs=qt()+500,So&&mr()))}function On(n,i){var a=n.callbackNode;jt(n,i);var u=At(n,n===pn?_n:0);if(u===0)a!==null&&ea(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ea(a),i===1)n.tag===0?Jg(Dp.bind(null,n)):_h(Dp.bind(null,n)),qg(function(){(It&6)===0&&mr()}),a=null;else{switch(li(u)){case 1:a=ta;break;case 4:a=na;break;case 16:a=N;break;case 536870912:a=pe;break;default:a=N}a=jp(a,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ip(n,i){if(Yo=-1,qo=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var u=At(n,n===pn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=$o(n,u);else{i=u;var h=It;It|=2;var g=Up();(pn!==n||_n!==i)&&(qi=null,Rs=qt()+500,Xr(n,i));do try{_x();break}catch(W){kp(n,W)}while(!0);Fc(),jo.current=g,It=h,rn!==null?i=0:(pn=null,_n=0,i=cn)}if(i!==0){if(i===2&&(h=Ft(n),h!==0&&(u=h,i=bu(n,h))),i===1)throw a=Na,Xr(n,0),Sr(n,u),On(n,qt()),a;if(i===6)Sr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!xx(h)&&(i=$o(n,u),i===2&&(g=Ft(n),g!==0&&(u=g,i=bu(n,g))),i===1))throw a=Na,Xr(n,0),Sr(n,u),On(n,qt()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Un,qi);break;case 3:if(Sr(n,u),(u&130023424)===u&&(i=vu+500-qt(),10<i)){if(At(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Ac(Yr.bind(null,n,Un,qi),i);break}Yr(n,Un,qi);break;case 4:if(Sr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var C=31-Fe(u);g=1<<C,C=i[C],C>h&&(h=C),u&=~g}if(u=h,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*gx(u/1960))-u,10<u){n.timeoutHandle=Ac(Yr.bind(null,n,Un,qi),u);break}Yr(n,Un,qi);break;case 5:Yr(n,Un,qi);break;default:throw Error(t(329))}}}return On(n,qt()),n.callbackNode===a?Ip.bind(null,n):null}function bu(n,i){var a=Pa;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=$o(n,i),n!==2&&(i=Un,Un=a,i!==null&&Su(i)),n}function Su(n){Un===null?Un=n:Un.push.apply(Un,n)}function xx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!fi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~xu,i&=~Ho,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Fe(i),u=1<<a;n[a]=-1,i&=~u}}function Dp(n){if((It&6)!==0)throw Error(t(327));Ns();var i=At(n,0);if((i&1)===0)return On(n,qt()),null;var a=$o(n,i);if(n.tag!==0&&a===2){var u=Ft(n);u!==0&&(i=u,a=bu(n,u))}if(a===1)throw a=Na,Xr(n,0),Sr(n,i),On(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Un,qi),On(n,qt()),null}function wu(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Rs=qt()+500,So&&mr())}}function Wr(n){yr!==null&&yr.tag===0&&(It&6)===0&&Ns();var i=It;It|=1;var a=ni.transition,u=St;try{if(ni.transition=null,St=1,n)return n()}finally{St=u,ni.transition=a,It=i,(It&6)===0&&mr()}}function Mu(){Vn=Cs.current,Wt(Cs)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Yg(a)),rn!==null)for(a=rn.return;a!==null;){var u=a;switch(Ic(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&yo();break;case 3:Es(),Wt(In),Wt(Sn),Xc();break;case 5:Vc(u);break;case 4:Es();break;case 13:Wt($t);break;case 19:Wt($t);break;case 10:zc(u.type._context);break;case 22:case 23:Mu()}a=a.return}if(pn=n,rn=n=wr(n.current,null),_n=Vn=i,cn=0,Na=null,xu=Ho=Vr=0,Un=Pa=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var C=g.next;g.next=h,u.next=C}a.pending=u}Gr=null}return n}function kp(n,i){do{var a=rn;try{if(Fc(),Lo.current=Uo,Io){for(var u=Kt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Io=!1}if(Hr=0,hn=ln=Kt=null,Ma=!1,Ea=0,gu.current=null,a===null||a.return===null){cn=1,Na=i,rn=null;break}e:{var g=n,C=a.return,W=a,q=i;if(i=_n,W.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var me=q,Me=W,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Xe=ap(C);if(Xe!==null){Xe.flags&=-257,op(Xe,C,W,g,i),Xe.mode&1&&sp(g,me,i),i=Xe,q=me;var Je=i.updateQueue;if(Je===null){var it=new Set;it.add(q),i.updateQueue=it}else Je.add(q);break e}else{if((i&1)===0){sp(g,me,i),Eu();break e}q=Error(t(426))}}else if(Yt&&W.mode&1){var tn=ap(C);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),op(tn,C,W,g,i),Uc(Ts(q,W));break e}}g=q=Ts(q,W),cn!==4&&(cn=2),Pa===null?Pa=[g]:Pa.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var le=ip(g,q,i);Nh(g,le);break e;case 1:W=q;var te=g.type,ue=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(_r===null||!_r.has(ue)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=rp(g,W,i);Nh(g,Te);break e}}g=g.return}while(g!==null)}Fp(a)}catch(st){i=st,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Up(){var n=jo.current;return jo.current=Uo,n===null?Uo:n}function Eu(){(cn===0||cn===3||cn===2)&&(cn=4),pn===null||(Vr&268435455)===0&&(Ho&268435455)===0||Sr(pn,_n)}function $o(n,i){var a=It;It|=2;var u=Up();(pn!==n||_n!==i)&&(qi=null,Xr(n,i));do try{vx();break}catch(h){kp(n,h)}while(!0);if(Fc(),It=a,jo.current=u,rn!==null)throw Error(t(261));return pn=null,_n=0,cn}function vx(){for(;rn!==null;)Op(rn)}function _x(){for(;rn!==null&&!io();)Op(rn)}function Op(n){var i=Gp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?Fp(n):rn=i,gu.current=null}function Fp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=dx(a,i,Vn),a!==null){rn=a;return}}else{if(a=fx(a,i),a!==null){a.flags&=32767,rn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);cn===0&&(cn=5)}function Yr(n,i,a){var u=St,h=ni.transition;try{ni.transition=null,St=1,yx(n,i,a,u)}finally{ni.transition=h,St=u}return null}function yx(n,i,a,u){do Ns();while(yr!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ct(n,g),n===pn&&(rn=pn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,jp(N,function(){return Ns(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ni.transition,ni.transition=null;var C=St;St=1;var W=It;It|=4,gu.current=null,px(n,a),Cp(a,n),Bg(Ec),so=!!Mc,Ec=Mc=null,n.current=a,mx(a),ic(),It=W,St=C,ni.transition=g}else n.current=a;if(Wo&&(Wo=!1,yr=n,Xo=h),g=n.pendingLanes,g===0&&(_r=null),Ge(a.stateNode),On(n,qt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Vo)throw Vo=!1,n=_u,_u=null,n;return(Xo&1)!==0&&n.tag!==0&&Ns(),g=n.pendingLanes,(g&1)!==0?n===yu?La++:(La=0,yu=n):La=0,mr(),null}function Ns(){if(yr!==null){var n=li(Xo),i=ni.transition,a=St;try{if(ni.transition=null,St=16>n?16:n,yr===null)var u=!1;else{if(n=yr,yr=null,Xo=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,qe=n.current;qe!==null;){var g=qe,C=g.child;if((qe.flags&16)!==0){var W=g.deletions;if(W!==null){for(var q=0;q<W.length;q++){var me=W[q];for(qe=me;qe!==null;){var Me=qe;switch(Me.tag){case 0:case 11:case 15:Ra(8,Me,g)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,qe=Ee;else for(;qe!==null;){Me=qe;var Se=Me.sibling,Xe=Me.return;if(wp(Me),Me===me){qe=null;break}if(Se!==null){Se.return=Xe,qe=Se;break}qe=Xe}}}var Je=g.alternate;if(Je!==null){var it=Je.child;if(it!==null){Je.child=null;do{var tn=it.sibling;it.sibling=null,it=tn}while(it!==null)}}qe=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,qe=C;else e:for(;qe!==null;){if(g=qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ra(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,qe=le;break e}qe=g.return}}var te=n.current;for(qe=te;qe!==null;){C=qe;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,qe=ue;else e:for(C=te;qe!==null;){if(W=qe,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:Go(9,W)}}catch(st){Jt(W,W.return,st)}if(W===C){qe=null;break e}var Te=W.sibling;if(Te!==null){Te.return=W.return,qe=Te;break e}qe=W.return}}if(It=h,mr(),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{St=a,ni.transition=i}}return!1}function zp(n,i,a){i=Ts(a,i),i=ip(n,i,1),n=xr(n,i,1),i=Pn(),n!==null&&(en(n,1,i),On(n,i))}function Jt(n,i,a){if(n.tag===3)zp(n,n,a);else for(;i!==null;){if(i.tag===3){zp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_r===null||!_r.has(u))){n=Ts(a,n),n=rp(i,n,1),i=xr(i,n,1),n=Pn(),i!==null&&(en(i,1,n),On(i,n));break}}i=i.return}}function bx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(_n&a)===a&&(cn===4||cn===3&&(_n&130023424)===_n&&500>qt()-vu?Xr(n,0):xu|=a),On(n,i)}function Bp(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var a=Pn();n=Wi(n,i),n!==null&&(en(n,i,a),On(n,a))}function Sx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Bp(n,a)}function wx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Bp(n,a)}var Gp;Gp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||In.current)kn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return kn=!1,ux(n,i,a);kn=(n.flags&131072)!==0}else kn=!1,Yt&&(i.flags&1048576)!==0&&yh(i,Mo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;zo(n,i),n=i.pendingProps;var h=vs(i,Sn.current);Ms(i,a),h=$c(null,i,u,n,h,a);var g=Kc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(u)?(g=!0,bo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,jc(i),h.updater=Oo,i.stateNode=h,h._reactInternals=i,nu(i,u,n,a),i=au(null,i,u,!0,g,a)):(i.tag=0,Yt&&g&&Lc(i),Nn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(zo(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Ex(u),n=pi(u,n),h){case 0:i=su(null,i,u,n,a);break e;case 1:i=hp(null,i,u,n,a);break e;case 11:i=lp(null,i,u,n,a);break e;case 14:i=cp(null,i,u,pi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:pi(u,h),su(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:pi(u,h),hp(n,i,u,h,a);case 3:e:{if(pp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,Rh(n,i),No(i,u,null,a);var C=i.memoizedState;if(u=C.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ts(Error(t(423)),i),i=mp(n,i,u,a,h);break e}else if(u!==h){h=Ts(Error(t(424)),i),i=mp(n,i,u,a,h);break e}else for(Hn=fr(i.stateNode.containerInfo.firstChild),jn=i,Yt=!0,hi=null,a=Ah(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),u===h){i=Yi(n,i,a);break e}Nn(n,i,u,a)}i=i.child}return i;case 5:return Lh(i),n===null&&kc(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,Tc(u,h)?C=null:g!==null&&Tc(u,g)&&(i.flags|=32),fp(n,i),Nn(n,i,C,a),i.child;case 6:return n===null&&kc(i),null;case 13:return gp(n,i,a);case 4:return Hc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ss(i,null,u,a):Nn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:pi(u,h),lp(n,i,u,h,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,Ht(Ao,u._currentValue),u._currentValue=C,g!==null)if(fi(g.value,C)){if(g.children===h.children&&!In.current){i=Yi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var W=g.dependencies;if(W!==null){C=g.child;for(var q=W.firstContext;q!==null;){if(q.context===u){if(g.tag===1){q=Xi(-1,a&-a),q.tag=2;var me=g.updateQueue;if(me!==null){me=me.shared;var Me=me.pending;Me===null?q.next=q:(q.next=Me.next,Me.next=q),me.pending=q}}g.lanes|=a,q=g.alternate,q!==null&&(q.lanes|=a),Bc(g.return,a,i),W.lanes|=a;break}q=q.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,W=C.alternate,W!==null&&(W.lanes|=a),Bc(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}Nn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Ms(i,a),h=ei(h),u=u(h),i.flags|=1,Nn(n,i,u,a),i.child;case 14:return u=i.type,h=pi(u,i.pendingProps),h=pi(u.type,h),cp(n,i,u,h,a);case 15:return up(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:pi(u,h),zo(n,i),i.tag=1,Dn(u)?(n=!0,bo(i)):n=!1,Ms(i,a),tp(i,u,h),nu(i,u,h,a),au(null,i,u,!0,n,a);case 19:return vp(n,i,a);case 22:return dp(n,i,a)}throw Error(t(156,i.tag))};function jp(n,i){return Ur(n,i)}function Mx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,a,u){return new Mx(n,i,a,u)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ex(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Y)return 14}return 2}function wr(n,i){var a=n.alternate;return a===null?(a=ii(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ko(n,i,a,u,h,g){var C=2;if(u=n,typeof n=="function")Tu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case A:return qr(a.children,h,g,i);case b:C=8,h|=8;break;case R:return n=ii(12,a,i,h|2),n.elementType=R,n.lanes=g,n;case F:return n=ii(13,a,i,h),n.elementType=F,n.lanes=g,n;case G:return n=ii(19,a,i,h),n.elementType=G,n.lanes=g,n;case Z:return Zo(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:C=10;break e;case B:C=9;break e;case V:C=11;break e;case Y:C=14;break e;case ie:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(C,a,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function qr(n,i,a,u){return n=ii(7,n,u,i),n.lanes=a,n}function Zo(n,i,a,u){return n=ii(22,n,u,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Au(n,i,a){return n=ii(6,n,null,i),n.lanes=a,n}function Cu(n,i,a){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tx(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=He(0),this.expirationTimes=He(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=He(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ru(n,i,a,u,h,g,C,W,q){return n=new Tx(n,i,a,W,q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ii(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(g),n}function Ax(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Hp(n){if(!n)return pr;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Dn(a))return xh(n,a,i)}return i}function Vp(n,i,a,u,h,g,C,W,q){return n=Ru(a,u,!0,n,h,g,C,W,q),n.context=Hp(null),a=n.current,u=Pn(),h=br(a),g=Xi(u,h),g.callback=i??null,xr(a,g,h),n.current.lanes=h,en(n,h,u),On(n,u),n}function Jo(n,i,a,u){var h=i.current,g=Pn(),C=br(h);return a=Hp(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(g,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=xr(h,i,C),n!==null&&(xi(n,h,C,g),Ro(n,h,C)),C}function Qo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Nu(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function Cx(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pu(n){this._internalRoot=n}el.prototype.render=Pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Jo(n,i,null,null)},el.prototype.unmount=Pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){Jo(null,n,null,null)}),i[Gi]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=ci();n={blockedOn:null,target:n,priority:i};for(var a=0;a<cr.length&&i!==0&&i<cr[a].priority;a++);cr.splice(a,0,n),a===0&&Lf(n)}};function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Rx(n,i,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var me=Qo(C);g.call(me)}}var C=Vp(i,u,n,0,null,!1,!1,"",Yp);return n._reactRootContainer=C,n[Gi]=C.current,ga(n.nodeType===8?n.parentNode:n),Wr(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var W=u;u=function(){var me=Qo(q);W.call(me)}}var q=Ru(n,0,!1,null,null,!1,!1,"",Yp);return n._reactRootContainer=q,n[Gi]=q.current,ga(n.nodeType===8?n.parentNode:n),Wr(function(){Jo(i,q,a,u)}),q}function nl(n,i,a,u,h){var g=a._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var W=h;h=function(){var q=Qo(C);W.call(q)}}Jo(i,C,n,h)}else C=Rx(a,i,n,h,u);return Qo(C)}Bi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ye(i.pendingLanes);a!==0&&(bn(i,a|1),On(i,qt()),(It&6)===0&&(Rs=qt()+500,mr()))}break;case 13:Wr(function(){var u=Wi(n,1);if(u!==null){var h=Pn();xi(u,n,1,h)}}),Nu(n,1)}},Ut=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var a=Pn();xi(i,n,134217728,a)}Nu(n,134217728)}},Xt=function(n){if(n.tag===13){var i=br(n),a=Wi(n,i);if(a!==null){var u=Pn();xi(a,n,i,u)}Nu(n,i)}},ci=function(){return St},Bt=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},tt=function(n,i,a){switch(i){case"input":if(ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=_o(u);if(!h)throw Error(t(90));dt(u),ht(u,h)}}}break;case"textarea":Ae(n,a);break;case"select":i=a.value,i!=null&&nt(n,!!a.multiple,i,!1)}},ze=wu,ye=Wr;var Nx={usingClientEntryPoint:!1,Events:[_a,gs,_o,_e,Le,wu]},Ia={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=kr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{oe=il.inject(Px),re=il}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(i))throw Error(t(200));return Ax(n,i,null,a)},Fn.createRoot=function(n,i){if(!Lu(n))throw Error(t(299));var a=!1,u="",h=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Ru(n,1,!1,null,null,a,!1,u,h),n[Gi]=i.current,ga(n.nodeType===8?n.parentNode:n),new Pu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=kr(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Wr(n)},Fn.hydrate=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!Lu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",C=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Vp(i,null,n,1,a??null,h,!1,g,C),n[Gi]=i.current,ga(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new el(i)},Fn.render=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Fn.unstable_batchedUpdates=wu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var tm;function zx(){if(tm)return ku.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ku.exports=Fx(),ku.exports}var nm;function Bx(){if(nm)return rl;nm=1;var s=zx();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var Gx=Bx();const jx=a0(Gx),Pi={personal:{name:"MD SAHADAT HOSSAIN",shortName:"Sahadat",headerLabelLeft:"AI AGENT ARCHITECT & PROMPT ENGINEER",headerLabelRight:"AVAILABLE FOR ARCHITECTURE & CONSULTING",greeting:"Hello, I'm",role:"AI AGENT ARCHITECT & PROMPT ENGINEER",badge:"AVAILABLE WORLDWIDE",bio:"I architect intelligent autonomous systems designed to eliminate complexity, compress execution timelines, and multiply human potential. Leveraging Autonomous AI Agents, Multi-Agent Orchestration, and custom AI web-builders to deliver production-ready software in days while cutting costs by 60–70%.",quoteBadge:"TURNING AUTONOMOUS INTELLIGENCE INTO HIGH-IMPACT DIGITAL SOLUTIONS.",stats:[{number:"10x+",label:"EXECUTION SPEED"},{number:"70%+",label:"COST REDUCTION"},{number:"24/7",label:"AUTONOMOUS AGENTS"}],avatarImage:"/sahadat-avatar.jpg",portraitImage:"/sahadat-portrait-full.png",email:"sahadat.info01@gmail.com",phone:"+880 1944-576159",location:"Barura, Cumilla, Chattogram, Bangladesh • Open to Remote Worldwide",github:"https://github.com/stl-sahadat",linkedin:"https://www.linkedin.com/in/mdsahadatconnact/",facebook:"https://facebook.com/stl.sahadat",twitter:"https://x.com/stl_sahadat",instagram:"https://www.instagram.com/stlsahadat/?hl=en",youtube:"https://www.youtube.com/@SahadatAutomation0",telegram:"https://t.me/stl_sahadat"},projects:[{id:"01",title:"MORNING MUG COFFEE HOUSE",category:"CAFE & BEVERAGE E-COMMERCE PLATFORM",badge:"FEATURED PRODUCTION",description:"A modern, high-craft coffee house platform featuring responsive aesthetics, dynamic menu catalog, and streamlined ordering flow with delightful micro-interactions.",tags:["React 18","Vite","Tailwind CSS","Modern JavaScript","HTML5","Responsive UI","E-Commerce","UX Design"],contributions:["Architected complete responsive client-side routing & product catalog.","Engineered zero-latency state transitions and interactive shopping basket.","Optimized Lighthouse scores (98+ performance, accessibility, SEO)."],demoUrl:"https://stl-sahadat.github.io/morning-mug-coffee-house/index.html",altUrl:"https://relaxed-dasik-3a69b2.netlify.app/",githubUrl:"https://github.com/stl-sahadat/morning-mug-coffee-house",image:"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80"},{id:"02",title:"CLOUD EXPENSE TRACKER SUITE",category:"FINANCIAL ANALYTICS & CLOUD RUN APP",badge:"CONTAINERIZED CLOUD",description:"Production financial tracking and analytics platform containerized with Docker and deployed on Google Cloud Run with real-time computation and zero operational overhead.",tags:["Google Cloud Run","Docker Container","Python","FastAPI","Financial Telemetry","Real-time Charts","REST API","CI/CD"],contributions:["Containerized full-stack deployment on GCP Cloud Run with automated autoscaling.","Built resilient expense analytics engine with sub-second aggregate calculations.","Integrated strict schema validation and token-based secure endpoints."],demoUrl:"https://ais-pre-5outvodj2oly3dlanlrfxg-873905991312.asia-southeast1.run.app",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"},{id:"03",title:"AUTONOMOUS AI WEB BUILDER",category:"PROPRIETARY MULTI-AGENT SYNTHESIS ENGINE",badge:"AUTONOMOUS AGENT",description:"Custom autonomous agent orchestration that translates natural specifications into full-stack web applications in minutes, cutting development cycles by 70%.",tags:["Autonomous Multi-Agent","CrewAI","LangChain","OpenAI GPT-4o","Claude 3.5 Sonnet","Prompt Architecture","Vector DB","Code Synthesis"],contributions:["Orchestrated autonomous multi-agent swarms for specification analysis and code scaffolding.","Engineered deterministic JSON schemas and automated self-healing AST lint verification.","Cut client time-to-market by 10x while maintaining enterprise production code quality."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"},{id:"04",title:"ENTERPRISE RAG KNOWLEDGE ENGINE",category:"VECTOR EMBEDDINGS & NEURAL RETRIEVAL",badge:"ENTERPRISE RAG",description:"High-throughput semantic retrieval engine combining hybrid vector search, dynamic re-ranking, and automated document ingestion pipelines.",tags:["Vector DB","Pinecone","LangChain","OpenAI Embeddings","FastAPI","Hybrid Search","Semantic Cache","Python"],contributions:["Architected multi-stage retrieval pipeline with contextual chunking and reciprocal rank fusion.","Engineered semantic caching reducing LLM API token consumption by 55%.","Deployed sub-100ms vector search across large-scale enterprise corpora."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"},{id:"05",title:"NEURAL PULSE OPS TELEMETRY",category:"REAL-TIME AI AGENT MONITORING SUITE",badge:"PREDICTIVE OPS",description:"Mission control dashboard tracking real-time autonomous agent swarms, token throughput, latency bottlenecks, and automated anomaly alerts.",tags:["React 18","Tailwind CSS","WebSockets","Data Analytics","Agent Telemetry","Prometheus","Chart.js","Cloud Run"],contributions:["Built low-latency WebSocket live telemetry streaming 1,000+ metrics per second.","Implemented anomaly detection alerting engineers before token exhaustion occurs.","Engineered responsive cyberpunk control center with zero layout shifts."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80"},{id:"06",title:"TALENT INTELLIGENCE RESUME AI",category:"NLP TALENT EXTRACTION & MATCHING ENGINE",badge:"AI TALENT PLATFORM",description:"Semantic talent matching platform scoring candidate resumes against job specifications with explainable capability vectors and bias-free rankers.",tags:["Python","FastAPI","spaCy","Transformers","BERT Embeddings","React","PostgreSQL","Docker"],contributions:["Constructed deep skill graph extraction identifying over 10,000 domain competencies.","Automated semantic applicant scoring achieving 94% alignment with senior recruiter evaluations.","Delivered sub-second batch evaluation pipeline for thousands of CVs."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80"},{id:"07",title:"CRYPTO QUANT HIGH-FREQUENCY TERMINAL",category:"REAL-TIME WEBSOCKET MARKET TELEMETRY",badge:"FINTECH QUANT",description:"Low-latency algorithmic order-flow terminal visualizing multi-exchange order books, liquidation heatmaps, and millisecond price actions.",tags:["React","TypeScript","WebSockets","Canvas 2D","Order Book","Binance API","Tailwind CSS","Redis"],contributions:["Engineered 60fps high-frequency Canvas renderer visualizing 500 depth levels in real time.","Handled 50,000+ WebSocket tick messages per second with zero UI stutter.","Implemented automated arbitrage delta indicators and audio alerts."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=900&q=80"},{id:"08",title:"CREWAI WORKFLOW AUTOMATION SWARM",category:"AUTONOMOUS BUSINESS PROCESS ORCHESTRATOR",badge:"MULTI-AGENT SWARM",description:"Enterprise multi-agent autonomous swarm executing end-to-end sales prospecting, competitive intelligence gathering, and executive summary dispatching.",tags:["CrewAI","LangGraph","Python","Anthropic Claude","GPT-4o","Celery","Redis","FastAPI"],contributions:["Designed hierarchical agent topology with dedicated Critic and Validator agents.","Built stateful checkpointing ensuring swarm resilience during long-horizon tasks.","Reduced executive reporting turnaround time from 4 days to 18 minutes."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"},{id:"09",title:"HEALTHCARE DIAGNOSTIC VISION AI",category:"DEEP LEARNING RADIOLOGY SEGMENTATION",badge:"HEALTH-TECH AI",description:"Computer vision segmentation pipeline assisting clinicians in automated MRI/CT lesion identification with explainable heatmaps and DICOM compliance.",tags:["PyTorch","MONAI","CUDA","FastAPI","Docker","DICOM","U-Net","Medical AI"],contributions:["Trained modified 3D U-Net achieving 0.91 Dice similarity score on clinical benchmark datasets.","Optimized inference using TensorRT for 4x faster slice-by-slice processing.","Built HIPAA-compliant encrypted data ingestion endpoints."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"},{id:"10",title:"DEVSEC-OPS CODE AUDIT COPILOT",category:"AST STATIC ANALYSIS & VULNERABILITY SCAN",badge:"CYBER SECURITY",description:"Automated CI/CD security scanner combining tree-sitter AST parsing and specialized LLM vulnerability detectors for zero-day flaw detection.",tags:["Python","Tree-Sitter","GitHub Actions","Docker","Security","AST Parsing","FastAPI","SARIF"],contributions:["Constructed custom AST traversal engine discovering injection vulnerabilities prior to merge.","Generated automated pull-request remediation diffs accepted by developers with 1 click.","Integrated directly with GitHub SARIF reports and SonarQube dashboards."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80"},{id:"11",title:"OMNICHANNEL AI CUSTOMER COPILOT",category:"AUTONOMOUS MULTI-CHANNEL SUPPORT SUITE",badge:"ENTERPRISE SUPPORT",description:"Self-improving enterprise customer support agent integrating with Zendesk, Slack, and WhatsApp to resolve 68% of support tickets autonomously.",tags:["FastAPI","LangChain","Vector DB","WhatsApp Business API","Slack SDK","PostgreSQL","Next.js"],contributions:["Engineered tool-calling pipeline allowing the AI agent to issue refunds and look up orders safely.","Implemented human-in-the-loop escalation with sentiment-aware priority routing.","Maintained 99.9% uptime across 100,000+ daily conversational interactions."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=900&q=80"},{id:"12",title:"SUPPLY CHAIN DEMAND ORACLE",category:"TIME-SERIES INVENTORY & LOGISTICS FORECAST",badge:"LOGISTICS AI",description:"Predictive inventory forecasting model accounting for seasonal spikes, supplier lead times, and shipping delays across multi-warehouse networks.",tags:["Python","XGBoost","Prophet","Google BigQuery","Streamlit","PostgreSQL","Docker","Pandas"],contributions:["Cut warehouse stockout occurrences by 42% through automated safety stock alerts.","Integrated automated weather and regional holiday covariates into predictive pipelines.","Delivered intuitive executive dashboard deployed on Google Cloud Run."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"},{id:"13",title:"VOICE CONVERSATIONAL AGENT ENGINE",category:"SUB-200MS ULTRA LOW LATENCY SPEECH AI",badge:"VOICE AGENT",description:"Full-duplex real-time voice streaming system coupling whisper speech-to-text, streaming LLM completions, and natural neural voice synthesis.",tags:["WebRTC","FastAPI","Python","Whisper","ElevenLabs API","AsyncIO","Audio DSP","Docker"],contributions:["Engineered sub-200ms end-to-end voice latency pipeline utilizing WebRTC bidirectional streams.","Implemented intelligent voice activity detection (VAD) with natural barge-in interruption.","Achieved fluid human-grade conversational cadence in live production deployments."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80"},{id:"14",title:"SMART CONTRACT AUDIT ENGINE",category:"SOLIDITY STATIC ANALYSIS & BYTECODE VERIFIER",badge:"WEB3 SECURITY",description:"Automated Web3 smart contract security analyzer scanning Solidity code for reentrancy bugs, integer overflows, and gas optimization opportunities.",tags:["Solidity","Rust","Slither","Python","EVM Bytecode","Web3.js","Docker","Static Analysis"],contributions:["Audited 120+ deployed smart contracts identifying 18 critical and high severity vulnerabilities.","Built automated gas optimization recommendations saving clients up to 28% in transaction fees.","Generated verifiable PDF security audit certificates."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80"},{id:"15",title:"SEMANTIC SOCIAL GRAPH RECOMMENDER",category:"GRAPH NEURAL NETWORK BEHAVIOR PREDICTOR",badge:"GRAPH AI",description:"Scalable graph analytics engine predicting high-affinity community connections and trending topic diffusion across 10M+ node social graphs.",tags:["Neo4j","PyTorch Geometric","Python","FastAPI","Redis","Docker","Graph Neural Networks"],contributions:["Architected heterogeneous graph convolutional network outperforming traditional collaborative filters by 34%.","Optimized Neo4j Cypher traversal queries for sub-50ms neighbor search.","Deployed distributed embedding generation using Redis vector indices."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"},{id:"16",title:"AUTONOMOUS RESEARCH ANALYST BOT",category:"DEEP WEB MARKET INTELLIGENCE GATHERER",badge:"MARKET INTEL",description:"Autonomous agent network executing structured data crawling, SEC filing analysis, earnings call transcription, and daily synthesis briefs.",tags:["Python","Playwright","FastAPI","LangChain","OpenAI GPT-4o","BeautifulSoup","PostgreSQL"],contributions:["Engineered stealth scraping pipelines with automated CAPTCHA bypass and dynamic rate-limiting.","Built structured financial table extraction from complex PDF annual reports.","Automated morning executive intelligence briefings delivered directly to enterprise Slack channels."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"},{id:"17",title:"EDGE COMPUTER VISION IOT SUITE",category:"LOW-POWER REAL-TIME OBJECT DETECTION",badge:"EDGE AI",description:"Optimized embedded vision system deployed on NVIDIA Jetson devices for real-time industrial safety gear detection and restricted zone monitoring.",tags:["NVIDIA Jetson","TensorRT","YOLOv8","C++","Python","OpenCV","MQTT","Edge Computing"],contributions:["Quantized neural models to INT8 precision achieving 45 FPS on edge hardware with minimal accuracy loss.","Built low-bandwidth MQTT alert triggers transmitting real-time telemetry to cloud supervisors.","Deployed automated OTA model updates across distributed industrial sensor fleets."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"},{id:"18",title:"ENTERPRISE IDENTITY ZERO-TRUST MESH",category:"DISTRIBUTED OAUTH2 / OIDC SECURITY ENCLAVE",badge:"ZERO-TRUST SEC",description:"Distributed identity authorization gateway with mTLS service-to-service communication, ephemeral token issuance, and continuous posture evaluation.",tags:["Go","Docker","Kubernetes","OAuth2","OpenID Connect","mTLS","Vault","Zero-Trust Architecture"],contributions:["Architected high-throughput Golang authentication proxy processing 80,000 requests per second.","Integrated HashiCorp Vault dynamic secret management with automated lease renewal.","Enforced zero-trust micro-segmentation across distributed microservices clusters."],demoUrl:"https://github.com/stl-sahadat",githubUrl:"https://github.com/stl-sahadat",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"}],education:[{title:"Master's Degree",institution:"Graduate Studies",year:"Completed"},{title:"Self-Driven Research & Systems Engineering",institution:"Independent AI & Software Systems Architecture",year:"Continuous Mastery"}],skills:["AUTONOMOUS AGENTS","MULTI-AGENT WORKFLOWS","CREWAI & LANGCHAIN","AUTOGEN","PROMPT ARCHITECTURE","CLAUDE 3.5 OPUS/SONNET","GOOGLE GEMINI 1.5 PRO","OPENAI GPT-4O","DEEPSEEK REASONER","TYPESCRIPT","PYTHON","NEXT.JS & REACT","GOOGLE CLOUD (GCP)","ANTIGRAVITY CLI","VECTOR DATABASES"],process:[{step:"01",title:"DISCOVER",desc:"Deconstructing enterprise workflows, analyzing operational friction and bottlenecks."},{step:"02",title:"ARCHITECT",desc:"Designing autonomous multi-agent topology, role definitions, and memory pipelines."},{step:"03",title:"PROMPT & ORCHESTRATE",desc:"Engineering high-precision system prompts, tool schemas, and multi-agent coordination."},{step:"04",title:"DEPLOY & INTEGRATE",desc:"Packaging containerized full-stack systems with cloud infrastructure (GCP / APIs)."},{step:"05",title:"SCALE & AUTOMATE",desc:"Continuous autonomous operations with self-healing, feedback loops, and 24/7 reliability."}],quote:{text:"Autonomous AI is not just about writing code; it's about engineering intelligent leverage that eliminates human bottleneck, slashes operational costs, and scales output infinitely.",author:"Md Sahadat Hossain",footerAction:"LET'S CREATE SOMETHING GROUNDBREAKING TOGETHER."}},o0=se.createContext(null),Fu="sahadat_portfolio_master_data",sl="sahadat_portfolio_analytics",zu="sahadat_portfolio_visual_settings",Bu={canvasBrightness:100,glowIntensity:100,motionDamping:"normal",particleColor:"#ef233c"},al={totalVisits:1,firstVisitDate:new Date().toISOString(),lastVisitDate:new Date().toISOString(),totalTimeSpentSeconds:0,clicks:{whatsapp:0,email:0,phone:0,github:0,linkedin:0,resume:0,projects:{}},deviceType:{desktop:0,mobile:0,tablet:0},recentLogs:[]};function Hx({children:s}){const[e,t]=se.useState(()=>{var A;try{const b=localStorage.getItem(Fu);if(b){const R=JSON.parse(b);let O=Pi.projects.map((B,V)=>{var G;const F=(G=R.projects)==null?void 0:G[V];return F?{...B,...F,tags:F.tags&&F.tags.length>0?F.tags:B.tags||[],contributions:F.contributions&&F.contributions.length>0?F.contributions:B.contributions||[]}:B});return{...Pi,...R,projects:O,personal:{...Pi.personal,...R.personal||{},location:(A=R.personal)!=null&&A.location&&!R.personal.location.includes("Dhaka")?R.personal.location:Pi.personal.location}}}}catch(b){console.warn("Could not read portfolio data from localStorage",b)}return Pi}),[r,o]=se.useState(()=>{try{const A=localStorage.getItem(zu);if(A)return{...Bu,...JSON.parse(A)}}catch(A){console.warn("Could not read visual settings from localStorage",A)}return Bu}),[c,d]=se.useState(()=>{try{const A=localStorage.getItem(sl);if(A){const b=JSON.parse(A);return{...al,...b,clicks:{...al.clicks,...b.clicks||{}},deviceType:{...al.deviceType,...b.deviceType||{}},recentLogs:Array.isArray(b.recentLogs)?b.recentLogs:[]}}}catch(A){console.warn("Could not read analytics from localStorage",A)}return al}),[f,p]=se.useState(!1),[m,y]=se.useState(()=>sessionStorage.getItem("sahadat_admin_auth")==="true"),S=()=>{const A="/my-portfolio/";return A.endsWith("/")?A.slice(0,-1):A},x=()=>{if(typeof window>"u")return"home";const A=S();let b=window.location.pathname.toLowerCase();if(A&&b.startsWith(A.toLowerCase())&&(b=b.slice(A.length)),window.location.hash){const O=window.location.hash.toLowerCase().replace(/^#\/?/,"").split("?")[0].split("/")[0];if(["about","projects","skills","experience","blog","contact"].includes(O)){const B=A?`${A}/${O}`:`/${O}`;return window.history.replaceState({page:O},"",B),O}else if(O!=="admin"){const B=A?`${A}/`:"/";return window.history.replaceState({page:"home"},"",B),"home"}}const R=b.replace(/^\/+/,"").split("/")[0];return["about","projects","skills","experience","blog","contact"].includes(R)?R:"home"},[M,E]=se.useState(()=>x()),L=A=>{const b=(A||"home").toLowerCase();E(b);const R=S(),O=b==="home"?R?`${R}/`:"/":R?`${R}/${b}`:`/${b}`;if((window.location.pathname!==O||window.location.hash)&&window.history.pushState({page:b},"",O),b==="home")window.scrollTo({top:0,behavior:"smooth"});else{const B=b==="projects"?"projects":b,V=document.getElementById(B)||(b==="projects"?document.getElementById("websites"):null);V&&V.scrollIntoView({behavior:"smooth"})}};se.useEffect(()=>{if(window.location.hash&&window.location.hash!=="#admin"){const R=S(),O=window.location.hash.toLowerCase().replace(/^#\/?/,"").split("?")[0].split("/")[0],B=["about","projects","skills","experience","blog","contact"].includes(O)?R?`${R}/${O}`:`/${O}`:R?`${R}/`:"/";window.history.replaceState({page:O||"home"},"",B)}const A=x();A&&A!=="home"&&setTimeout(()=>{const R=A==="projects"?"projects":A,O=document.getElementById(R)||(A==="projects"?document.getElementById("websites"):null);O&&O.scrollIntoView({behavior:"smooth"})},200);const b=()=>{const R=x();if(E(R),R==="home")window.scrollTo({top:0,behavior:"smooth"});else{const O=R==="projects"?"projects":R,B=document.getElementById(O)||(R==="projects"?document.getElementById("websites"):null);B&&B.scrollIntoView({behavior:"smooth"})}};return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[]),se.useEffect(()=>{try{localStorage.setItem(Fu,JSON.stringify(e))}catch(A){console.error("Failed to save portfolio data to localStorage",A)}},[e]),se.useEffect(()=>{try{localStorage.setItem(zu,JSON.stringify(r)),document.documentElement.style.setProperty("--canvas-opacity",(r.canvasBrightness/100).toString()),document.documentElement.style.setProperty("--glow-factor",(r.glowIntensity/100).toString())}catch(A){console.error("Failed to apply visual settings",A)}},[r]),se.useEffect(()=>{const A=window.innerWidth,b=A<768?"mobile":A<1024?"tablet":"desktop";d(O=>{const B={...O,totalVisits:(O.totalVisits||0)+1,lastVisitDate:new Date().toISOString(),deviceType:{...O.deviceType,[b]:(O.deviceType[b]||0)+1}};try{localStorage.setItem(sl,JSON.stringify(B))}catch{}return B});const R=setInterval(()=>{d(O=>{const B=(O.totalTimeSpentSeconds||0)+5,V={...O,totalTimeSpentSeconds:B};try{localStorage.setItem(sl,JSON.stringify(V))}catch{}return V})},5e3);return()=>clearInterval(R)},[]),se.useEffect(()=>{const A=()=>{(window.location.hash==="#admin"||window.location.pathname==="/admin"||window.location.search.includes("admin"))&&p(!0)};A(),window.addEventListener("hashchange",A),window.addEventListener("popstate",A);const b=R=>{R.ctrlKey&&R.shiftKey&&(R.key==="A"||R.key==="a")&&(R.preventDefault(),p(O=>!O))};return window.addEventListener("keydown",b),()=>{window.removeEventListener("hashchange",A),window.removeEventListener("popstate",A),window.removeEventListener("keydown",b)}},[]);const w=(A,b="")=>{const R=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),O={id:Date.now()+Math.random(),time:R,action:A,label:b};d(B=>{const V={...B.clicks};A.toLowerCase().includes("whatsapp")?V.whatsapp=(V.whatsapp||0)+1:A.toLowerCase().includes("email")?V.email=(V.email||0)+1:A.toLowerCase().includes("github")?V.github=(V.github||0)+1:A.toLowerCase().includes("linkedin")?V.linkedin=(V.linkedin||0)+1:A.toLowerCase().includes("project")&&(V.projects={...V.projects,[b]:(V.projects[b]||0)+1});const F={...B,clicks:V,recentLogs:[O,...B.recentLogs||[]].slice(0,50)};try{localStorage.setItem(sl,JSON.stringify(F))}catch{}return F})},_=(A,b)=>{t(R=>({...R,[A]:b}))},U=()=>{window.confirm("Are you sure you want to restore original default portfolio content?")&&(t(Pi),o(Bu),localStorage.removeItem(Fu),localStorage.removeItem(zu))},z=async A=>{try{const R=await(await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:A})})).json();if(R.success&&R.token)return y(!0),sessionStorage.setItem("sahadat_admin_auth","true"),sessionStorage.setItem("sahadat_admin_jwt",R.token),!0}catch(b){console.warn("[Admin Auth] Backend login fallback to master key:",b)}return A==="440055"?(y(!0),sessionStorage.setItem("sahadat_admin_auth","true"),!0):!1},T=()=>{y(!1),sessionStorage.removeItem("sahadat_admin_auth"),sessionStorage.removeItem("sahadat_admin_jwt")},P=()=>{p(!1),window.location.hash==="#admin"&&history.pushState(null,"",window.location.pathname)},I=()=>{p(!0),window.location.hash="#admin"};return l.jsx(o0.Provider,{value:{data:e,updateSection:_,visualSettings:r,setVisualSettings:o,analytics:c,trackEvent:w,isAdminOpen:f,openAdmin:I,closeAdmin:P,isAuthenticated:m,loginAdmin:z,logoutAdmin:T,resetToDefaults:U,currentPage:M,navigateToPage:L},children:s})}function ss(){const s=se.useContext(o0);if(!s)throw new Error("usePortfolio must be used within a PortfolioProvider");return s}function Vx(){const s=se.useRef(null);return se.useEffect(()=>{const e=s.current;if(!e)return;const t=e.getContext("2d",{alpha:!0});if(!t)return;let r,o=!0,c=performance.now();const f=1e3/60,p=typeof window<"u"&&(window.innerWidth<768||window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);if(p)return;let m=e.width=window.innerWidth,y=e.height=window.innerHeight;const{sin:S,cos:x,PI:M,hypot:E,min:L,max:w}=Math;function _(X=1,j=0){return Math.random()*X+j}function U(X,j,H){return X+(j-X)*H}function z(X,j,H=101){const D=S(.3*X+1.4*H+2+2.5*S(.4*j-1.3*H+1)),Q=S(.2*j+1.5*H+2.8+2.3*S(.5*X-1.2*H+.5));return D+Q}function T(X,j){return[...Array(X)].map((H,D)=>j(D))}const P=p?12:18;function I(X,j,H,D){t.beginPath(),t.moveTo(X,j);for(let Q=1;Q<=P;Q++){const ve=Q/P,Re=U(X,H,ve),Ne=U(j,D,ve),Ue=z(Re*.2+X,Ne*.2+j)*1.8;t.lineTo(Re+Ue,Ne+Ue)}t.stroke()}const A=p?70:140,b=p?5:7,R=p?1:2;function O(){const X=T(A,()=>({x:_(window.innerWidth),y:_(window.innerHeight),len:0,r:0})),j=T(b,be=>({x:x(be/b*M*2),y:S(be/b*M*2)})),H=_(100);let D=window.innerWidth/2,Q=window.innerHeight/2,ve=window.innerWidth/2,Re=window.innerHeight/2;const Ne=_(1.2,.8),Ue=_(1.2,.8),ae={x:_(28,14),y:_(28,14)};let ce=window.innerWidth/_(110,140);return{follow(be,Ve){D=be,Q=Ve},tick(be){const Ve=x(be*Ne+H)*ae.x,Oe=S(be*Ue+H)*ae.y,dt=D+Ve,Pt=Q+Oe,ot=dt-ve,_t=Pt-Re,bt=p?window.innerWidth/16:window.innerWidth/10;ve+=Math.max(-bt,Math.min(bt,ot*.52)),Re+=Math.max(-bt,Math.min(bt,_t*.52)),ce=window.innerWidth/125;let ht=0;const Tt=p?5:7;X.forEach(de=>{const lt=de.x-ve,nt=de.y-Re,at=E(lt,nt),K=L(1.5,window.innerWidth/at/6),Ae=at<window.innerWidth/9&&ht<Tt;Ae&&ht++;const We=Ae?.38:-.24;de.r=Ae?K*1.25:K,de.len=w(0,L(de.len+We,1)),de.len>.05&&j.forEach(k=>{I(U(ve+k.x*ce,de.x,de.len*de.len),U(Re+k.y*ce,de.y,de.len*de.len),ve+k.x*ce,Re+k.y*ce)})}),t.beginPath(),X.forEach(de=>{de.r>.3&&(t.moveTo(de.x+de.r,de.y),t.arc(de.x,de.y,de.r,0,M*2))}),t.fill()}}}const B=T(R,O),V=window.innerWidth/2,F=window.innerHeight/2;B.forEach(X=>X.follow(V,F));const G=X=>{var D,Q;const j=X.clientX??(X.touches&&((D=X.touches[0])==null?void 0:D.clientX)),H=X.clientY??(X.touches&&((Q=X.touches[0])==null?void 0:Q.clientY));j!=null&&H!=null&&B.forEach(ve=>{ve.follow(j,H)})},Y=()=>{m=e.width=window.innerWidth,y=e.height=window.innerHeight},ie=()=>{o=!document.hidden,o?(c=performance.now(),cancelAnimationFrame(r),r=requestAnimationFrame(Z)):cancelAnimationFrame(r)};window.addEventListener("pointermove",G,{passive:!0}),window.addEventListener("touchmove",G,{passive:!0}),window.addEventListener("resize",Y),document.addEventListener("visibilitychange",ie);function Z(X){if(!o)return;const j=X-c;if(j<f-1){r=requestAnimationFrame(Z);return}c=X-j%f,m!==window.innerWidth&&(m=e.width=window.innerWidth),y!==window.innerHeight&&(y=e.height=window.innerHeight),t.clearRect(0,0,m,y),t.lineWidth=.65,t.strokeStyle="rgba(239, 35, 60, 0.28)",t.fillStyle="rgba(239, 35, 60, 0.22)";const H=X/1e3;B.forEach(D=>D.tick(H)),r=requestAnimationFrame(Z)}return r=requestAnimationFrame(Z),()=>{cancelAnimationFrame(r),window.removeEventListener("pointermove",G),window.removeEventListener("touchmove",G),window.removeEventListener("resize",Y),document.removeEventListener("visibilitychange",ie)}},[]),l.jsx("canvas",{ref:s,"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-0 w-full h-full",style:{opacity:"var(--canvas-opacity, 0.45)",mixBlendMode:"screen"}})}function Wx(){const s=se.useRef(null);return se.useEffect(()=>{if(typeof window<"u"&&(window.innerWidth<768||window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window))return;let t=null,r=-1e3,o=-1e3,c=-1e3,d=-1e3,f=!1;const p=()=>{c+=(r-c)*.45,d+=(o-d)*.45,s.current&&(s.current.style.transform=`translate3d(${c-300}px, ${d-300}px, 0)`),Math.abs(r-c)>.3||Math.abs(o-d)>.3?t=requestAnimationFrame(p):(f=!1,t=null)},m=y=>{r=y.clientX,o=y.clientY,f||(f=!0,t=requestAnimationFrame(p))};return window.addEventListener("mousemove",m,{passive:!0}),()=>{window.removeEventListener("mousemove",m),t&&cancelAnimationFrame(t)}},[]),l.jsx("div",{className:"pointer-events-none fixed inset-0 z-30 overflow-hidden select-none",children:l.jsx("div",{ref:s,className:"w-[500px] h-[500px] rounded-full pointer-events-none will-change-transform",style:{background:"radial-gradient(circle, rgba(239, 35, 60, 0.08) 0%, rgba(220, 38, 38, 0.02) 40%, transparent 65%)",transform:"translate3d(-1000px, -1000px, 0)"}})})}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=se.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},p)=>se.createElement("svg",{ref:p,...Yx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:l0("lucide",o),...f},[...d.map(([m,y])=>se.createElement(m,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(s,e)=>{const t=se.forwardRef(({className:r,...o},c)=>se.createElement(qx,{ref:c,iconNode:e,className:l0(`lucide-${Xx(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=mt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=mt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=mt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=mt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=mt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=mt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=mt("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=mt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=mt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=mt("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=mt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=mt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=mt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=mt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=mt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=mt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=mt("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=mt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=mt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=mt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=mt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=mt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=mt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=mt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=mt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=mt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=mt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=mt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=mt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=mt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=mt("MousePointerClick",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=mt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=mt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=mt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=mt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=mt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=mt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=mt("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=mt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=mt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=mt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=mt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=mt("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=mt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=mt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=mt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=mt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);function Xa(s){if(!s)return"";if(s.startsWith("http://")||s.startsWith("https://")||s.startsWith("data:")||s.startsWith("blob:"))return s;const e="/my-portfolio/",t=e.endsWith("/")?e:`${e}/`,r=s.startsWith("/")?s.slice(1):s;return`${t}${r}`}function am(){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-cyan-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 sm:w-5.5 sm:h-5.5 relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"diamondCrown",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"50%",stopColor:"#e0f2fe"}),l.jsx("stop",{offset:"100%",stopColor:"#7dd3fc"})]}),l.jsxs("linearGradient",{id:"diamondLeft",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),l.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),l.jsxs("linearGradient",{id:"diamondCenter",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"40%",stopColor:"#a5f3fc"}),l.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]}),l.jsxs("linearGradient",{id:"diamondRight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),l.jsx("stop",{offset:"50%",stopColor:"#818cf8"}),l.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})]}),l.jsx("polygon",{points:"6,5 18,5 22,10 2,10",fill:"url(#diamondCrown)",stroke:"#ffffff",strokeWidth:"0.6",strokeLinejoin:"round"}),l.jsx("polygon",{points:"6,5 18,5 15,10 9,10",fill:"#ffffff",opacity:"0.9"}),l.jsx("polygon",{points:"2,10 12,21 7,10",fill:"url(#diamondLeft)",stroke:"#7dd3fc",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("polygon",{points:"7,10 12,21 17,10",fill:"url(#diamondCenter)",stroke:"#ffffff",strokeWidth:"0.6",strokeLinejoin:"round"}),l.jsx("polygon",{points:"17,10 12,21 22,10",fill:"url(#diamondRight)",stroke:"#818cf8",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M17.5 2 L18.2 4.2 L20.5 5 L18.2 5.8 L17.5 8 L16.8 5.8 L14.5 5 L16.8 4.2 Z",fill:"#ffffff",className:"animate-pulse"}),l.jsx("circle",{cx:"12",cy:"11.5",r:"1",fill:"#ffffff",className:"animate-ping",opacity:"0.75"})]})]})}function Cv(){const{data:s,currentPage:e,navigateToPage:t}=ss(),r=(s==null?void 0:s.personal)||Pi.personal,[o,c]=se.useState(!1),[d,f]=se.useState("home"),[p,m]=se.useState(!1);se.useEffect(()=>{document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")},[]),se.useEffect(()=>{let x=!1;const M=()=>{x||(x=!0,window.requestAnimationFrame(()=>{c(window.scrollY>20);const E=[{id:"contact",page:"contact"},{id:"blog",page:"blog"},{id:"experience",page:"experience"},{id:"skills",page:"skills"},{id:"automations",page:"projects"},{id:"apps",page:"projects"},{id:"websites",page:"projects"},{id:"projects",page:"projects"},{id:"about",page:"about"}];let L="home";const w=window.scrollY+280;if(window.scrollY<160)L="home";else if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100)L="contact";else for(const z of E){const T=document.getElementById(z.id);if(T&&T.offsetTop<=w){L=z.page;break}}f(L);const _="/my-portfolio/".replace(/\/$/,""),U=L==="home"?_?`${_}/`:"/":_?`${_}/${L}`:`/${L}`;window.location.pathname!==U&&(!window.location.hash||window.location.hash!=="#admin")&&window.history.replaceState({page:L},"",U),x=!1}))};return window.addEventListener("scroll",M,{passive:!0}),M(),()=>window.removeEventListener("scroll",M)},[]);const y=x=>{const M=x==="projects"?document.getElementById("projects")?"projects":"websites":x,E="/my-portfolio/".replace(/\/$/,""),L=x==="home"?E?`${E}/`:"/":E?`${E}/${x}`:`/${x}`;if(window.location.pathname!==L&&(!window.location.hash||window.location.hash!=="#admin")&&window.history.pushState({page:x},"",L),x==="home")window.scrollTo({top:0,behavior:"smooth"}),f("home");else{const w=document.getElementById(M);w&&(w.scrollIntoView({behavior:"smooth"}),f(x))}},S=[{label:"Home",page:"home",icon:uv},{label:"About",page:"about",icon:p0},{label:"Projects",page:"projects",icon:hv},{label:"Skills",page:"skills",icon:u0},{label:"Experience",page:"experience",icon:ev},{label:"Blog",page:"blog",icon:Jx},{label:"Contact",page:"contact",icon:Sd}];return l.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300",children:[l.jsx("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-12 pt-3 sm:pt-5",children:l.jsxs("div",{className:`pointer-events-auto mx-auto flex items-center justify-between px-2 sm:px-4 py-2 transition-all duration-300 bg-transparent border-none shadow-none ${o?"py-1.5 backdrop-blur-[2px]":""}`,children:[l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("button",{onClick:()=>y("home"),className:"flex items-center gap-2.5 group select-none text-left cursor-pointer",children:[l.jsx("div",{className:"relative rounded-full transition-transform duration-300 group-hover:scale-105 shadow-[0_0_18px_rgba(220,38,38,0.7)] p-[2px] bg-gradient-to-tr from-red-600 to-rose-500",children:l.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-black flex items-center justify-center",children:l.jsx("img",{src:Xa(r.avatarImage||"/sahadat-avatar.jpg"),alt:r.name||Pi.personal.name,className:"w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"})})}),l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"font-outfit font-extrabold text-sm sm:text-base tracking-wider text-white dark:text-white light:text-zinc-900 uppercase group-hover:text-crimson transition-colors",children:r.shortName||Pi.personal.shortName}),l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#ef233c]"})]}),l.jsx("span",{className:"text-[9px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:block",children:"AI ARCHITECT"})]})]})}),l.jsx("nav",{className:"hidden lg:flex items-center gap-1.5 xl:gap-2",children:S.map(x=>{const M=x.icon,E=e==="contact"?x.page==="contact":d===x.page;return l.jsxs("button",{onClick:()=>y(x.page),className:`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-outfit uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer overflow-hidden ${E?"text-white bg-gradient-to-r from-red-950/70 via-[#15060a] to-red-950/70 backdrop-blur-xl border border-red-500/70 shadow-[0_0_20px_rgba(239,35,60,0.45),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_0_12px_rgba(239,35,60,0.25)] scale-[1.04]":"text-zinc-300 bg-white/[0.05] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.25)] hover:bg-white/[0.12] hover:border-white/35 hover:text-white hover:scale-105 active:scale-95"}`,children:[l.jsx("span",{className:`absolute inset-0 -translate-x-[150%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent ${E?"via-red-400/25 animate-pulse":"group-hover:translate-x-[250%] via-white/20"} to-transparent pointer-events-none`}),E&&l.jsxs("span",{className:"relative flex h-1.5 w-1.5 shrink-0",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"}),l.jsx("span",{className:"relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500 shadow-[0_0_8px_#ef233c]"})]}),l.jsx(M,{size:13,className:`transition-all duration-300 ${E?"text-red-400 drop-shadow-[0_0_6px_rgba(239,35,60,0.9)] scale-110":"text-zinc-400 group-hover:text-red-400 group-hover:scale-105"}`}),l.jsx("span",{className:"relative z-10",children:x.label}),E&&l.jsx("span",{className:"absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef233c] animate-pulse"})]},x.label)})}),l.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3.5",children:[l.jsxs("a",{href:"https://wa.me/8801944576159?text=Hi%20Sahadat%20vai%2C%20I%20would%20like%20to%20discuss%20an%20AI%20architecture%20project.",target:"_blank",rel:"noopener noreferrer",className:"group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2 rounded-full overflow-hidden border border-white/20 hover:border-crimson/50 bg-gradient-to-r from-[#14141e] via-[#0d0d14] to-[#181116] text-white text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(220,38,38,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]",children:[l.jsx("div",{className:"absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"}),l.jsx(am,{}),l.jsx("span",{className:"relative z-10 text-white font-bold tracking-wide",children:"Let's Talk"})]}),l.jsx("button",{onClick:()=>m(!p),"aria-label":"Toggle navigation menu",className:"lg:hidden p-2 rounded-full text-zinc-300 dark:text-zinc-300 light:text-zinc-800 hover:text-white hover:bg-white/10 transition-colors",children:p?l.jsx(m0,{size:20}):l.jsx(gv,{size:20})})]})]})}),p&&l.jsxs("div",{className:"pointer-events-auto lg:hidden mx-4 mt-2 p-6 rounded-3xl bg-[#09090e]/95 dark:bg-[#09090e]/95 light:bg-white/98 backdrop-blur-3xl border border-white/15 dark:border-white/15 light:border-black/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300",children:[l.jsx("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-white/10 dark:border-white/10 light:border-black/10",children:l.jsx("span",{className:"font-mono text-xs text-zinc-400 uppercase tracking-widest",children:"NAVIGATION"})}),l.jsx("nav",{className:"flex flex-col gap-2.5",children:S.map((x,M)=>{const E=x.icon,L=e==="contact"?x.page==="contact":d===x.page;return l.jsxs("button",{onClick:()=>{y(x.page),m(!1)},className:`relative flex items-center justify-between py-2.5 px-4 rounded-full border font-outfit text-base font-bold uppercase transition-all duration-300 cursor-pointer overflow-hidden ${L?"bg-gradient-to-r from-red-950/80 via-[#140609] to-red-950/80 text-white border-red-500/70 shadow-[0_0_18px_rgba(239,35,60,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]":"bg-white/[0.05] border-white/15 text-zinc-200 hover:text-red-400 hover:bg-white/10"}`,children:[l.jsxs("div",{className:"flex items-center gap-2.5 relative z-10",children:[L&&l.jsxs("span",{className:"relative flex h-2 w-2 shrink-0",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef233c]"})]}),l.jsx(E,{size:16,className:L?"text-red-400 drop-shadow-[0_0_6px_rgba(239,35,60,0.9)]":"text-crimson"}),l.jsx("span",{children:x.label})]}),l.jsxs("span",{className:`text-xs font-mono relative z-10 ${L?"text-red-300":"text-zinc-500"}`,children:["0",M+1]}),L&&l.jsx("span",{className:"absolute bottom-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef233c] animate-pulse"})]},x.label)})}),l.jsx("div",{className:"mt-5 pt-5 border-t border-white/10 dark:border-white/10 light:border-black/10",children:l.jsxs("a",{href:"https://wa.me/8801944576159",target:"_blank",rel:"noopener noreferrer",className:"group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full overflow-hidden bg-gradient-to-r from-[#171722] via-[#101018] to-[#1c1220] border border-white/30 text-white font-outfit text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]",children:[l.jsx("div",{className:"absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"}),l.jsx(am,{}),l.jsx("span",{className:"relative z-10",children:"Let's Talk"})]})})]})]})}function ll({value:s,label:e,isHighlighted:t=!1,isLast:r=!1,index:o=0}){const[c,d]=se.useState("0"),[f,p]=se.useState(!1),m=se.useRef(null);return se.useEffect(()=>{let y,S;const x=()=>{let M=null;const E=1400,L=w=>{M||(M=w);const _=Math.min((w-M)/E,1),U=_===1?1:1-Math.pow(2,-10*_);if(s==="10X+"){const z=Math.floor(U*10);d(`${z}X+`)}else if(s==="70%+"){const z=Math.floor(U*70);d(`${z}%+`)}else if(s==="24/7"){const z=Math.floor(U*24),T=Math.max(1,Math.floor(U*7));d(`${z}/${T}`)}else if(s==="100%"){const z=Math.floor(U*100);d(`${z}%`)}else d(s);_<1?S=requestAnimationFrame(L):(d(s),p(!0))};S=requestAnimationFrame(L)};return m.current&&(y=new IntersectionObserver(M=>{if(M[0].isIntersecting&&!f){const E=o*140,L=setTimeout(x,E);return()=>clearTimeout(L)}},{threshold:.2}),y.observe(m.current)),()=>{y&&y.disconnect(),S&&cancelAnimationFrame(S)}},[s,f,o]),l.jsxs("div",{ref:m,className:`relative group p-4 sm:p-5 rounded-2xl transition-all duration-500 hover:bg-white/[0.03] dark:hover:bg-white/[0.03] light:hover:bg-black/[0.03] border-b md:border-b-0 ${r?"":"md:border-r border-white/10 dark:border-white/10 light:border-black/10"}`,children:[l.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none animate-metric-glow ${t?"bg-[radial-gradient(circle,rgba(239,35,60,0.3)_0%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(220,38,38,0.12)_45%,transparent_70%)]"}`}),l.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center",children:[l.jsx("div",{className:`font-bebas text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wider tabular-nums transition-transform duration-300 group-hover:scale-[1.03] select-none ${t?"animate-metric-crimson-shimmer drop-shadow-[0_0_20px_rgba(239,35,60,0.65)]":"animate-metric-shimmer drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]"}`,children:c}),l.jsxs("div",{className:"mt-1.5 flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-zinc-200 transition-colors",children:[l.jsx("span",{className:`w-1 h-1 rounded-full ${t?"bg-crimson shadow-[0_0_6px_#ef233c] animate-ping":"bg-zinc-400 group-hover:bg-crimson group-hover:shadow-[0_0_6px_#ef233c] transition-colors"}`}),l.jsx("span",{className:"font-semibold text-[11px] sm:text-xs",children:e})]})]}),l.jsx("div",{className:"absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]})}function Kl({text:s,icon:e,className:t=""}){return l.jsxs("div",{className:`relative inline-flex items-center group cursor-default select-none ${t}`,children:[l.jsx("div",{className:"absolute -inset-1.5 sm:-inset-2 rounded-full bg-gradient-to-r from-crimson/25 via-red-600/30 to-rose-600/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"}),l.jsx("div",{className:"absolute -inset-1 sm:-inset-1.5 rounded-full overflow-hidden pointer-events-none opacity-60",children:l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[350%] aspect-square laser-ambient-aura animate-beam-spin blur-md"})}),l.jsxs("div",{className:"relative inline-flex p-[1.5px] rounded-full overflow-hidden shadow-[0_0_14px_rgba(239,35,60,0.25)]",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[400%] aspect-square laser-beam-gradient animate-beam-spin pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex items-center gap-2.5 rounded-full bg-[#08080d]/95 dark:bg-[#08080d]/95 light:bg-white/95 px-4 sm:px-5 py-1.5 backdrop-blur-2xl transition-colors duration-300",children:[l.jsxs("span",{className:"relative flex h-2 w-2 shrink-0",children:[l.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-80"}),l.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_8px_#ef233c]"})]}),e&&l.jsx(e,{size:12,className:"text-zinc-300 shrink-0"}),l.jsx("span",{className:"font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-100 dark:text-zinc-100 light:text-zinc-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap",children:s})]})]})]})}function Rv({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-cyan-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]`,children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"gemCrown",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"50%",stopColor:"#e0f2fe"}),l.jsx("stop",{offset:"100%",stopColor:"#7dd3fc"})]}),l.jsxs("linearGradient",{id:"gemLeft",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),l.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),l.jsxs("linearGradient",{id:"gemCenter",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"40%",stopColor:"#a5f3fc"}),l.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]}),l.jsxs("linearGradient",{id:"gemRight",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),l.jsx("stop",{offset:"50%",stopColor:"#818cf8"}),l.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})]}),l.jsx("polygon",{points:"6,5 18,5 22,10 2,10",fill:"url(#gemCrown)",stroke:"#ffffff",strokeWidth:"0.6",strokeLinejoin:"round"}),l.jsx("polygon",{points:"6,5 18,5 15,10 9,10",fill:"#ffffff",opacity:"0.9"}),l.jsx("polygon",{points:"2,10 12,21 7,10",fill:"url(#gemLeft)",stroke:"#7dd3fc",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("polygon",{points:"7,10 12,21 17,10",fill:"url(#gemCenter)",stroke:"#ffffff",strokeWidth:"0.6",strokeLinejoin:"round"}),l.jsx("polygon",{points:"17,10 12,21 22,10",fill:"url(#gemRight)",stroke:"#818cf8",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M17.5 2 L18.2 4.2 L20.5 5 L18.2 5.8 L17.5 8 L16.8 5.8 L14.5 5 L16.8 4.2 Z",fill:"#ffffff",className:"animate-pulse"}),l.jsx("circle",{cx:"12",cy:"11.5",r:"1",fill:"#ffffff",className:"animate-ping",opacity:"0.75"})]})]})}function g0({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-emerald-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-12 drop-shadow-[0_0_8px_rgba(52,211,153,0.85)]`,children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"globeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#a7f3d0"}),l.jsx("stop",{offset:"50%",stopColor:"#34d399"}),l.jsx("stop",{offset:"100%",stopColor:"#059669"})]}),l.jsxs("linearGradient",{id:"ringGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"50%",stopColor:"#6ee7b7"}),l.jsx("stop",{offset:"100%",stopColor:"#10b981"})]})]}),l.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"url(#globeGrad)",strokeWidth:"1.6"}),l.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3.8",stroke:"url(#ringGrad)",strokeWidth:"1",strokeDasharray:"1.5 1.5",opacity:"0.85"}),l.jsx("ellipse",{cx:"12",cy:"12",rx:"4.2",ry:"9",stroke:"url(#ringGrad)",strokeWidth:"1",opacity:"0.85"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#ffffff"}),l.jsx("circle",{cx:"12",cy:"12",r:"4.2",stroke:"#6ee7b7",strokeWidth:"1.2",className:"animate-ping",opacity:"0.6"})]})]})}function Nv({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-violet-400/35 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:-rotate-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]`,children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"githubGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"60%",stopColor:"#e2e8f0"}),l.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]})}),l.jsx("path",{fill:"url(#githubGrad)",fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})]})]})}function Pv({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-red-500/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(239,35,60,0.85)]`,children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"workTop",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"50%",stopColor:"#fca5a5"}),l.jsx("stop",{offset:"100%",stopColor:"#ef233c"})]}),l.jsxs("linearGradient",{id:"workMid",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#f87171"}),l.jsx("stop",{offset:"100%",stopColor:"#b91c1c"})]})]}),l.jsx("polygon",{points:"12,2.5 22,8 12,13.5 2,8",fill:"url(#workTop)",stroke:"#ffffff",strokeWidth:"0.6",strokeLinejoin:"round"}),l.jsx("polyline",{points:"2,12.5 12,18 22,12.5",stroke:"url(#workMid)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("polyline",{points:"2,16.8 12,22 22,16.8",stroke:"#ef233c",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("circle",{cx:"12",cy:"8",r:"1.3",fill:"#ffffff",className:"animate-pulse"})]})]})}function Lv({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:-rotate-6 drop-shadow-[0_0_8px_rgba(37,211,102,0.9)]`,children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"waGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#4ade80"}),l.jsx("stop",{offset:"50%",stopColor:"#25d366"}),l.jsx("stop",{offset:"100%",stopColor:"#128c7e"})]})}),l.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.51 5.29L2.3 21.5l4.35-1.18C8.11 21.36 9.99 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z",fill:"url(#waGrad)",stroke:"#ffffff",strokeWidth:"0.5"}),l.jsx("path",{d:"M16.4 14.5c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.52.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.18-.06-.11-.23-.18-.48-.3z",fill:"#ffffff"}),l.jsx("circle",{cx:"16",cy:"6",r:"0.9",fill:"#ffffff",className:"animate-pulse"})]})]})}function Iv({className:s="w-5 h-5 sm:w-5.5 sm:h-5.5"}){return l.jsxs("div",{className:"relative inline-flex items-center justify-center shrink-0",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-blue-500/40 blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:`${s} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.85)]`,children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"liGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),l.jsx("stop",{offset:"50%",stopColor:"#2563eb"}),l.jsx("stop",{offset:"100%",stopColor:"#1d4ed8"})]})}),l.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",fill:"url(#liGrad)",stroke:"#ffffff",strokeWidth:"0.5"}),l.jsx("circle",{cx:"7",cy:"7.5",r:"1.5",fill:"#ffffff"}),l.jsx("rect",{x:"5.5",y:"10.5",width:"3",height:"8",rx:"0.8",fill:"#ffffff"}),l.jsx("path",{d:"M11 10.5h2.8v1.2c.4-.7 1.4-1.4 2.8-1.4 2.1 0 3.4 1.3 3.4 3.7V18.5H17v-4.2c0-1.2-.5-1.9-1.5-1.9-1 0-1.6.7-1.6 1.9v4.2H11v-8z",fill:"#ffffff"}),l.jsx("circle",{cx:"19",cy:"5",r:"0.8",fill:"#ffffff",className:"animate-pulse"})]})]})}function zl({href:s,onClick:e,target:t="_blank",rel:r="noopener noreferrer",children:o,icon:c="gem",variant:d,showArrow:f=!0,size:p="md",className:m="",title:y,type:S="button",disabled:x=!1}){const M={sm:"px-4 py-1.5 text-xs",md:"px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm",lg:"px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base"},E=d==="whatsapp"||c==="whatsapp"||c==="chat",L=()=>{if($l.isValidElement(c))return c;switch(c){case"demo":case"globe":case"live":return l.jsx(g0,{});case"github":return l.jsx(Nv,{});case"work":case"layers":case"portfolio":return l.jsx(Pv,{});case"whatsapp":case"chat":return l.jsx(Lv,{});case"linkedin":return l.jsx(Iv,{});case"none":return null;case"gem":default:return l.jsx(Rv,{})}},w=E?`
      group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden
      border border-emerald-400/40 hover:border-emerald-300
      bg-gradient-to-r from-[#0b2416] via-[#081a11] to-[#0a2e1c]
      text-white font-outfit font-bold tracking-wide
      transition-all duration-300 hover:scale-105 active:scale-95
      shadow-[0_0_12px_rgba(37,211,102,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]
      hover:shadow-[0_0_20px_rgba(37,211,102,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]
      cursor-pointer select-none whitespace-nowrap
      ${M[p]||M.md}
      ${m}
    `:`
      group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden
      border border-white/20 hover:border-crimson/50
      bg-gradient-to-r from-[#14141e] via-[#0d0d14] to-[#181116]
      text-white font-outfit font-bold tracking-wide
      transition-all duration-300 hover:scale-105 active:scale-95
      shadow-[0_0_12px_rgba(220,38,38,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]
      hover:shadow-[0_0_20px_rgba(220,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]
      cursor-pointer select-none whitespace-nowrap
      ${M[p]||M.md}
      ${m}
    `,_=l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent ${E?"via-emerald-300/30":"via-white/25"} to-transparent pointer-events-none`}),L(),l.jsx("span",{className:"relative z-10 text-white font-bold tracking-wide",children:o}),f&&l.jsx(Ol,{size:14,className:`relative z-10 ${E?"text-emerald-300 group-hover:text-emerald-100":"text-zinc-300 group-hover:text-white"} transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0`})]});if(s){const U=s.startsWith("#"),z=T=>{if(e&&e(T),U&&!T.defaultPrevented){T.preventDefault();const P=s.replace(/^#/,""),I=P==="home"?"/":`/${P}`;window.history.pushState({page:P},"",I);const A=document.getElementById(P);A&&A.scrollIntoView({behavior:"smooth"})}};return l.jsx("a",{href:U?`/${s.replace(/^#/,"")}`:s,target:U?void 0:t,rel:U?void 0:r,onClick:z,title:y,className:w,children:_})}return l.jsx("button",{type:S,onClick:e,disabled:x,title:y,className:w,children:_})}function Dv({tech:s}){const[e,t]=se.useState(!1);return l.jsxs("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"relative shrink-0 select-none cursor-pointer py-1.5 transition-all duration-300",style:{transform:e?"translateY(-2px) scale(1.04)":"translateY(0) scale(1)"},children:[l.jsx("div",{className:"absolute -inset-[2px] rounded-full overflow-hidden blur-[6px] pointer-events-none transition-opacity duration-300",style:{opacity:e?.6:0},children:l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[260px] h-[260px] animate-beam-orbit pointer-events-none",style:{background:s.spectrum,animationDuration:"6s"}})}),l.jsxs("div",{className:"relative p-[1px] rounded-full overflow-hidden transition-all duration-300",style:{boxShadow:e?`0 0 14px ${s.accent}50, 0 4px 12px rgba(0,0,0,0.6)`:"0 1px 3px rgba(0, 0, 0, 0.4)"},children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[260px] h-[260px] animate-beam-orbit pointer-events-none transition-opacity duration-300",style:{background:s.spectrum,animationDuration:"6s",opacity:e?.9:.25}}),l.jsxs("div",{className:"relative flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 bg-[#080811]/95 border border-white/8 backdrop-blur-md z-10",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0",style:{backgroundColor:s.accent,boxShadow:e?`0 0 8px 1px ${s.accent}`:`0 0 4px ${s.accent}`,transform:e?"scale(1.2)":"scale(1)"}}),l.jsx("span",{className:"font-mono text-[11px] sm:text-xs tracking-wider whitespace-nowrap transition-colors duration-300",style:{color:e?"#ffffff":"#d4d4d8",fontWeight:e?600:500},children:s.name})]})]})]})}function kv(){const{data:s}=ss(),e=s.personal||Pi.personal,t=e.roles&&e.roles.length>0?e.roles:["AI Agent Architect","Autonomous Systems Engineer","Full-Stack AI Developer","Enterprise Prompt Engineer","Multi-Agent Orchestrator"],r=[{name:"OpenAI GPT-4o",accent:"#10b981",spectrum:"conic-gradient(from 0deg, #10b981, #06b6d4, #3b82f6, #059669, #10b981)",glowColor:"rgba(16, 185, 129, 0.45)"},{name:"Anthropic Claude",accent:"#f59e0b",spectrum:"conic-gradient(from 0deg, #f59e0b, #f97316, #ef4444, #eab308, #f59e0b)",glowColor:"rgba(245, 158, 11, 0.45)"},{name:"CrewAI Orchestration",accent:"#ef233c",spectrum:"conic-gradient(from 0deg, #ef233c, #ec4899, #a855f7, #f43f5e, #ef233c)",glowColor:"rgba(239, 35, 60, 0.45)"},{name:"LangChain",accent:"#22c55e",spectrum:"conic-gradient(from 0deg, #22c55e, #10b981, #06b6d4, #84cc16, #22c55e)",glowColor:"rgba(34, 197, 94, 0.45)"},{name:"LangGraph",accent:"#8b5cf6",spectrum:"conic-gradient(from 0deg, #8b5cf6, #6366f1, #3b82f6, #c084fc, #8b5cf6)",glowColor:"rgba(139, 92, 246, 0.45)"},{name:"Google Cloud Run",accent:"#3b82f6",spectrum:"conic-gradient(from 0deg, #3b82f6, #00f0ff, #0284c7, #60a5fa, #3b82f6)",glowColor:"rgba(59, 130, 246, 0.45)"},{name:"Python & FastAPI",accent:"#eab308",spectrum:"conic-gradient(from 0deg, #eab308, #14b8a6, #10b981, #f59e0b, #eab308)",glowColor:"rgba(234, 179, 8, 0.45)"},{name:"Autonomous Multi-Agent",accent:"#f43f5e",spectrum:"conic-gradient(from 0deg, #f43f5e, #ef233c, #8b5cf6, #d946ef, #f43f5e)",glowColor:"rgba(244, 63, 94, 0.45)"},{name:"React 18 & Vite",accent:"#06b6d4",spectrum:"conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #38bdf8, #06b6d4)",glowColor:"rgba(6, 182, 212, 0.45)"},{name:"Vector DB & RAG",accent:"#d946ef",spectrum:"conic-gradient(from 0deg, #d946ef, #8b5cf6, #06b6d4, #ec4899, #d946ef)",glowColor:"rgba(217, 70, 239, 0.45)"},{name:"Docker Containers",accent:"#0284c7",spectrum:"conic-gradient(from 0deg, #0284c7, #3b82f6, #00f0ff, #1d4ed8, #0284c7)",glowColor:"rgba(2, 132, 199, 0.45)"},{name:"DeepSeek AI",accent:"#2563eb",spectrum:"conic-gradient(from 0deg, #2563eb, #00f0ff, #3b82f6, #1d4ed8, #2563eb)",glowColor:"rgba(37, 99, 235, 0.45)"},{name:"Prompt Architecture",accent:"#ef233c",spectrum:"conic-gradient(from 0deg, #ef233c, #fb7185, #f59e0b, #e11d48, #ef233c)",glowColor:"rgba(239, 35, 60, 0.45)"}],[o,c]=se.useState(0),[d,f]=se.useState(""),[p,m]=se.useState(!1);return se.useEffect(()=>{const y=t[o];let S;return p?d.length>0?S=setTimeout(()=>{f(y.slice(0,d.length-1))},14):S=setTimeout(()=>{m(!1),c(x=>(x+1)%t.length)},120):d.length<y.length?S=setTimeout(()=>{f(y.slice(0,d.length+1))},25):S=setTimeout(()=>{m(!0)},1100),()=>clearTimeout(S)},[d,p,o,t]),l.jsxs("section",{id:"home",className:"relative min-h-[92vh] pt-32 sm:pt-40 2xl:pt-44 pb-12 flex flex-col justify-between overflow-hidden",children:[l.jsx("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16 w-full relative z-10 my-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-16 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center",children:[l.jsx("div",{className:"mb-4 sm:mb-5 flex items-center justify-start animate-in fade-in duration-700",children:l.jsxs("div",{className:"relative inline-flex items-center group cursor-default select-none",children:[l.jsx("div",{className:"absolute -inset-1.5 sm:-inset-2 rounded-full bg-gradient-to-r from-crimson/25 via-red-600/30 to-rose-600/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"}),l.jsx("div",{className:"absolute -inset-1 sm:-inset-1.5 rounded-full overflow-hidden pointer-events-none opacity-60",children:l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[350%] aspect-square laser-ambient-aura animate-beam-spin blur-md"})}),l.jsxs("div",{className:"relative inline-flex p-[1.5px] rounded-full overflow-hidden shadow-[0_0_14px_rgba(239,35,60,0.25)]",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[400%] aspect-square laser-beam-gradient animate-beam-spin pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex items-center gap-2.5 rounded-full bg-[#08080d]/95 dark:bg-[#08080d]/95 light:bg-white/95 px-4 sm:px-5 py-1.5 backdrop-blur-2xl transition-colors duration-300",children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-80"}),l.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_8px_#ef233c]"})]}),l.jsx("span",{className:"font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-100 dark:text-zinc-100 light:text-zinc-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",children:"BUILDING AUTONOMOUS AI & MODERN SYSTEMS"})]})]})]})}),l.jsx("div",{className:"overflow-hidden mb-2.5",children:l.jsxs("div",{className:"inline-flex items-center gap-2.5 animate-kicker-reveal",children:[l.jsxs("span",{className:"relative flex h-2 w-2",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_10px_#ef233c]"})]}),l.jsx("span",{className:"text-xs sm:text-sm font-outfit font-bold uppercase tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-rose-400 drop-shadow-[0_0_14px_rgba(239,35,60,0.35)]",children:"HELLO, I AM"})]})}),l.jsxs("h1",{className:"font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[7.4rem] 2xl:text-[9.2rem] uppercase leading-[0.85] tracking-tight mb-3 select-none group",children:[l.jsxs("div",{className:"overflow-hidden flex flex-wrap items-baseline gap-x-3 sm:gap-x-5 py-1",children:[l.jsx("span",{className:"inline-block transform animate-title-slide-1 text-white dark:text-white light:text-zinc-900 group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300",children:"MD"}),l.jsx("span",{className:"inline-block transform animate-title-slide-2 text-white dark:text-white light:text-zinc-900 group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300",children:"SAHADAT"})]}),l.jsx("div",{className:"overflow-hidden relative inline-block py-1",children:l.jsx("span",{className:"relative inline-block transform animate-title-slide-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500 dark:from-white dark:via-white dark:to-red-500 light:from-zinc-900 light:via-red-700 light:to-red-500 group-hover:to-rose-400 transition-all duration-300",children:"HOSSAIN"})})]}),l.jsx("div",{className:"h-10 sm:h-12 flex items-center mb-3",children:l.jsxs("div",{className:"font-outfit text-xl sm:text-2xl 2xl:text-3xl font-extrabold uppercase tracking-wide text-crimson flex items-center min-h-[32px]",children:[l.jsx("span",{className:"drop-shadow-[0_0_12px_rgba(220,38,38,0.45)]",children:d}),l.jsx("span",{className:"inline-block w-[3px] sm:w-[3.5px] h-5 sm:h-7 ml-1 bg-crimson shadow-[0_0_12px_#ef233c] animate-pulse rounded-full"})]})}),l.jsx("div",{className:"mb-5 animate-in fade-in duration-700 delay-250",children:l.jsx("span",{className:"font-script text-3xl sm:text-4xl 2xl:text-5xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 inline-block transform -rotate-1",children:"Built for Scale & Precision."})}),l.jsx("p",{className:"text-sm sm:text-base 2xl:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans leading-relaxed max-w-xl 2xl:max-w-2xl mb-8 animate-in fade-in duration-700 delay-300",children:"I architect autonomous AI agents and enterprise systems that automate complex workflows, compress development time by 10x, and cut operational costs by 70%."}),l.jsx("div",{className:"flex items-center mb-2",children:l.jsx(zl,{href:"#projects",icon:"work",size:"lg",children:"VIEW MY WORK"})})]}),l.jsxs("div",{className:"lg:col-span-5 relative flex justify-center items-end mt-8 lg:mt-0 select-none",children:[l.jsx("div",{className:"absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] 2xl:w-[520px] h-[340px] sm:h-[440px] 2xl:h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.36)_0%,rgba(185,28,28,0.18)_42%,transparent_70%)] blur-[75px] pointer-events-none -z-10"}),l.jsx("div",{className:"absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[620px] 2xl:w-[740px] h-[500px] sm:h-[620px] 2xl:h-[740px] rounded-full bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.16)_0%,transparent_65%)] blur-[110px] pointer-events-none -z-10"}),l.jsx("div",{className:"relative w-full max-w-[440px] 2xl:max-w-[540px] flex justify-center items-end",children:l.jsx("img",{src:Xa(e.portraitImage||"/sahadat-portrait-full.png"),onError:y=>{const S=Xa("/myphoto-clean.png");y.target.src!==S&&(y.target.src=S)},alt:e.name||"Md Sahadat Hossain",className:"w-full h-auto max-h-[570px] 2xl:max-h-[700px] object-contain object-bottom transition-all duration-700 hover:scale-[1.015]",style:{maskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.45) 88%, rgba(0,0,0,0) 100%)",WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.45) 88%, rgba(0,0,0,0) 100%)",filter:"contrast(106%) brightness(102%) saturate(104%) drop-shadow(0 0 35px rgba(220, 38, 38, 0.35)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.9))"}})})]})]})}),l.jsx("div",{className:"w-full border-t border-b border-white/10 dark:border-white/10 light:border-black/10 bg-white/[0.01] dark:bg-white/[0.01] light:bg-black/[0.01] py-3 sm:py-4 mt-12 sm:mt-16 relative z-10 backdrop-blur-[2px]",children:l.jsx("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-10 2xl:px-16",children:l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center",children:[l.jsx(ll,{value:"10X+",label:"Execution Velocity",index:0}),l.jsx(ll,{value:"70%+",label:"Cost Compression",index:1}),l.jsx(ll,{value:"24/7",label:"Autonomous Workflows",index:2}),l.jsx(ll,{value:"100%",label:"Production Resilient",isHighlighted:!0,isLast:!0,index:3})]})})}),l.jsx("div",{className:"w-full py-5 sm:py-6 relative z-10 border-b border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden bg-black/50 backdrop-blur-md",children:l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-16 flex flex-col md:flex-row items-center gap-4 md:gap-8",children:[l.jsx("div",{className:"shrink-0 select-none z-20",children:l.jsx(Kl,{text:"CORE TECH & ECOSYSTEM"})}),l.jsxs("div",{className:"flex-1 w-full overflow-hidden relative py-3",style:{maskImage:"linear-gradient(to right, transparent 0%, transparent 2%, black 12%, black 92%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, transparent 2%, black 12%, black 92%, transparent 100%)"},children:[l.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-10"}),l.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/90 via-black/50 to-transparent pointer-events-none z-10"}),l.jsx("div",{className:"animate-tech-marquee flex items-center gap-3 sm:gap-4 py-2",children:[...r,...r].map((y,S)=>l.jsx(Dv,{tech:y},S))})]})]})}),l.jsx("style",{children:`
        @keyframes kicker-reveal {
          0% {
            opacity: 0;
            transform: translateY(100%);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.28em;
          }
        }
        .animate-kicker-reveal {
          animation: kicker-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes title-slide-up {
          0% {
            opacity: 0;
            transform: translateY(115%) skewY(3deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) skewY(0);
            filter: blur(0);
          }
        }
        .animate-title-slide-1 {
          animation: title-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .animate-title-slide-2 {
          animation: title-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .animate-title-slide-3 {
          animation: title-slide-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.44s both;
        }

        @keyframes laser-sweep {
          0%, 65% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(250%);
          }
        }
        .animate-laser-sweep {
          animation: laser-sweep 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `})]})}function qn({children:s,className:e="",animation:t="fade-up",delay:r=0,duration:o=500,threshold:c=.05,rootMargin:d="0px 0px -40px 0px",once:f=!1}){const p=se.useRef(null),[m,y]=se.useState(!1);se.useEffect(()=>{const M=p.current;if(!M)return;if(!("IntersectionObserver"in window)){y(!0);return}const E=new IntersectionObserver(([L])=>{L.isIntersecting?(y(!0),f&&E.unobserve(M)):f||y(!1)},{threshold:c,rootMargin:d});return E.observe(M),()=>{M&&E.unobserve(M)}},[c,d,f]);const S=()=>{switch(t){case"fade-up":return"opacity-0 translate-y-4";case"fade-down":return"opacity-0 -translate-y-4";case"slide-left":return"opacity-0 -translate-x-6";case"slide-right":return"opacity-0 translate-x-6";case"scale-up":return"opacity-0 scale-95 translate-y-4";case"fade-in":default:return"opacity-0"}},x=()=>"opacity-100 translate-y-0 translate-x-0 scale-100";return l.jsx("div",{ref:p,style:{transitionDuration:m?`${o}ms`:"350ms",transitionDelay:m?`${r}ms`:"0ms",transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",willChange:"transform, opacity"},className:`transition-all ${m?x():S()} ${e}`,children:s})}function Uv(){const{data:s}=ss(),e=s.aboutCustom||{},t=s.personal||{},r=e.targets||[{title:"10x Execution Velocity",desc:"Compressing weeks of traditional development into hours using autonomous agent swarms that scaffold, test, and self-heal.",stat:"10x Faster"},{title:"70% Cost Compression",desc:"Eliminating bloated agency retainers and manual overhead through deterministic, automated AI pipelines.",stat:"70% Savings"},{title:"Zero-Hallucination Resilience",desc:"Engineering strict guardrails, structured JSON schemas, and automated lint verification for flawless production output.",stat:"99.9% Reliable"}];e.subtitle;const o=e.introKicker||`I am ${t.name||"Md Sahadat Hossain"} — an Autonomous Systems Engineer & AI Architect who transforms cutting-edge AI models into resilient, scalable, production-grade software.`,c=e.storyP1||"My journey into technology was born not from a classroom syllabus, but from a lifelong obsession with code, web architecture, and digital engineering since childhood. While I completed my Master’s Degree, my real engineering edge was forged through relentless independent research, continuous experimentation, and building tangible software from the ground up.",d=e.storyP2||"I believe true engineering is proven by execution, not certificates—demonstrated through resilient backend architectures, intuitive frontend experiences, and software that delivers real-world impact. Combining deep fluency in modern web standards (HTML5, CSS, modern JavaScript, Python) with frontier AI models (Claude Opus & Sonnet, OpenAI GPT-4o, Google Gemini), I orchestrate intelligent, self-operating multi-agent ecosystems designed to scale.",f=e.degreeTitle||"Master's Degree (Completed) • Self-Driven Research",p=e.degreeDesc||"Advancing systems through independent algorithmic research, systems architecture, and full-stack autonomous AI engineering.",m=e.philosophyQuote||"Real engineering is measured by execution, not certificates. Turning autonomous intelligence into production solutions that eliminate operational friction and scale effortlessly.";return l.jsxs("section",{id:"about",className:"py-20 sm:py-28 relative overflow-hidden bg-transparent scroll-mt-20",children:[l.jsx("div",{className:"absolute top-1/4 -left-32 w-[350px] h-[350px] bg-crimson/5 rounded-full blur-[140px] pointer-events-none -z-10"}),l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10",children:[l.jsx(qn,{animation:"fade-up",duration:700,children:l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20",children:[l.jsx("div",{children:l.jsxs("h2",{className:"font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none",children:["ABOUT"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"ME"})]})}),l.jsx("div",{className:"max-w-lg",children:l.jsx("p",{className:"text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-sans leading-relaxed",children:o})})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsx(qn,{animation:"fade-up",delay:80,duration:480,children:l.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl border border-white/8 hover:border-white/15 bg-[#080811]/85 dark:bg-[#080811]/85 light:bg-white backdrop-blur-2xl shadow-2xl transition-all duration-500 relative overflow-hidden group",children:[l.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none"}),l.jsx("h3",{className:"font-outfit text-xl sm:text-2xl font-bold uppercase text-white dark:text-white light:text-zinc-900 tracking-wide mb-4",children:"The Architect's Story"}),l.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans leading-relaxed",children:[l.jsx("p",{children:c}),l.jsx("p",{children:d})]}),l.jsxs("div",{className:"mt-8 pt-6 border-t border-white/8 dark:border-white/8 light:border-black/10 flex items-center gap-5 sm:gap-6",children:[l.jsxs("div",{className:"relative p-3.5 rounded-2xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/95 to-black border border-white/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] shrink-0 group-hover:border-white/40 transition-all duration-300",children:[l.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"}),l.jsx(cv,{size:24,className:"text-zinc-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsx("h4",{className:"font-outfit text-base font-bold uppercase text-white dark:text-white light:text-zinc-900 tracking-wide",children:f}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed",children:p})]})]})]})}),l.jsx(qn,{animation:"fade-up",delay:160,duration:480,children:l.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl border border-white/8 hover:border-white/15 bg-gradient-to-r from-zinc-900/40 via-[#080811]/70 to-black/70 backdrop-blur-xl transition-all duration-500 shadow-xl group",children:[l.jsxs("div",{className:"flex items-center gap-2.5 mb-2.5 text-xs font-mono font-bold uppercase tracking-widest select-none",children:[l.jsxs("span",{className:"relative flex h-2 w-2 shrink-0",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-60"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-zinc-200 shadow-[0_0_8px_rgba(255,255,255,0.8)]"})]}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400",children:"CORE ENGINEERING PHILOSOPHY"})]}),l.jsxs("p",{className:"font-outfit text-base sm:text-lg text-white dark:text-white light:text-zinc-900 font-bold uppercase tracking-wide leading-snug",children:['"',m,'"']})]})})]}),l.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[l.jsxs("div",{className:"text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold flex items-center gap-2.5 mb-1 select-none",children:[l.jsx("span",{className:"p-1 rounded-md bg-white/10 border border-white/15 text-zinc-200 shadow-sm",children:l.jsx(Mv,{size:13,className:"text-zinc-200"})}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400",children:"CORE TARGETS & IMPACT"})]}),r.map((y,S)=>l.jsx(qn,{animation:"fade-up",delay:S*90,duration:450,children:l.jsxs("div",{className:"p-6 sm:p-7 rounded-3xl border border-white/8 hover:border-zinc-300/30 bg-[#080811]/75 dark:bg-[#080811]/75 light:bg-white backdrop-blur-xl hover:translate-x-1.5 transition-all duration-300 shadow-xl group",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-crimson group-hover:shadow-[0_0_8px_#ef233c] transition-all duration-300"}),l.jsxs("span",{className:"text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 font-bold uppercase tracking-wider transition-colors",children:["TARGET 0",S+1]})]}),l.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-mono text-[10px] font-bold uppercase shadow-sm group-hover:border-zinc-400/40 transition-colors",children:y.stat})]}),l.jsx("h4",{className:"font-outfit text-lg font-bold uppercase text-white dark:text-white light:text-zinc-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-200 group-hover:to-red-400 transition-all",children:y.title}),l.jsx("p",{className:"text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed",children:y.desc})]})},S))]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="186",Ov=0,om=1,Fv=2,Pl=1,zv=2,ja=3,Lr=0,Bn=1,tr=2,ir=0,Wa=1,lm=2,cm=3,um=4,Bv=5,Vs=100,Gv=101,jv=102,Hv=103,Vv=104,Wv=200,Xv=201,Yv=202,qv=203,x0=204,v0=205,$v=206,Kv=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,wd=0,Md=1,Ed=2,Ya=3,Td=4,Ad=5,Cd=6,Rd=7,_0=0,r_=1,s_=2,ki=0,y0=1,b0=2,S0=3,w0=4,M0=5,E0=6,T0=7,A0=300,ns=301,qs=302,Gu=303,ju=304,Zl=306,Nd=1e3,nr=1001,Pd=1002,yn=1003,a_=1004,cl=1005,xn=1006,Hu=1007,es=1008,ai=1009,C0=1010,R0=1011,qa=1012,mf=1013,Ui=1014,Ii=1015,Oi=1016,gf=1017,xf=1018,$a=1020,N0=35902,P0=35899,L0=1021,I0=1022,Si=1023,ar=1026,ts=1027,D0=1028,vf=1029,is=1030,_f=1031,yf=1033,Ll=33776,Il=33777,Dl=33778,kl=33779,Ld=35840,Id=35841,Dd=35842,kd=35843,Ud=36196,Od=37492,Fd=37496,zd=37488,Bd=37489,Bl=37490,Gd=37491,jd=37808,Hd=37809,Vd=37810,Wd=37811,Xd=37812,Yd=37813,qd=37814,$d=37815,Kd=37816,Zd=37817,Jd=37818,Qd=37819,ef=37820,tf=37821,nf=36492,rf=36494,sf=36495,af=36283,of=36284,Gl=36285,lf=36286,o_=3200,dm=0,l_=1,Pr="",Yn="srgb",jl="srgb-linear",Hl="linear",Gt="srgb",Vu=7680,c_=519,u_=512,d_=513,f_=514,bf=515,h_=516,p_=517,Sf=518,m_=519,g_=35044,fm="300 es",Di=2e3,Vl=2001;function x_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function v_(){const s=Wl("canvas");return s.style.display="block",s}const hm={};function pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function k0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=k0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Dt(...s){s=k0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Xs(...s){const e=s.join(" ");e in hm||(hm[e]=!0,gt(...s))}function __(s,e,t){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const y_={[wd]:Md,[Ed]:Cd,[Td]:Rd,[Ya]:Ad,[Md]:wd,[Cd]:Ed,[Rd]:Td,[Ad]:Ya};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,cf=180/Math.PI;function Za(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Nt(s,e,t){return Math.max(e,Math.min(t,s))}function b_(s,e){return(s%e+e)%e}function Xu(s,e,t){return(1-t)*s+t*e}function ka(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tf=class Tf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tf.prototype.isVector2=!0;let kt=Tf;class Ks{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,d,f){let p=r[o+0],m=r[o+1],y=r[o+2],S=r[o+3],x=c[d+0],M=c[d+1],E=c[d+2],L=c[d+3];if(S!==L||p!==x||m!==M||y!==E){let w=p*x+m*M+y*E+S*L;w<0&&(x=-x,M=-M,E=-E,L=-L,w=-w);let _=1-f;if(w<.9995){const U=Math.acos(w),z=Math.sin(U);_=Math.sin(_*U)/z,f=Math.sin(f*U)/z,p=p*_+x*f,m=m*_+M*f,y=y*_+E*f,S=S*_+L*f}else{p=p*_+x*f,m=m*_+M*f,y=y*_+E*f,S=S*_+L*f;const U=1/Math.sqrt(p*p+m*m+y*y+S*S);p*=U,m*=U,y*=U,S*=U}}e[t]=p,e[t+1]=m,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,c,d){const f=r[o],p=r[o+1],m=r[o+2],y=r[o+3],S=c[d],x=c[d+1],M=c[d+2],E=c[d+3];return e[t]=f*E+y*S+p*M-m*x,e[t+1]=p*E+y*x+m*S-f*M,e[t+2]=m*E+y*M+f*x-p*S,e[t+3]=y*E-f*S-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),y=f(o/2),S=f(c/2),x=p(r/2),M=p(o/2),E=p(c/2);switch(d){case"XYZ":this._x=x*y*S+m*M*E,this._y=m*M*S-x*y*E,this._z=m*y*E+x*M*S,this._w=m*y*S-x*M*E;break;case"YXZ":this._x=x*y*S+m*M*E,this._y=m*M*S-x*y*E,this._z=m*y*E-x*M*S,this._w=m*y*S+x*M*E;break;case"ZXY":this._x=x*y*S-m*M*E,this._y=m*M*S+x*y*E,this._z=m*y*E+x*M*S,this._w=m*y*S-x*M*E;break;case"ZYX":this._x=x*y*S-m*M*E,this._y=m*M*S+x*y*E,this._z=m*y*E-x*M*S,this._w=m*y*S+x*M*E;break;case"YZX":this._x=x*y*S+m*M*E,this._y=m*M*S+x*y*E,this._z=m*y*E-x*M*S,this._w=m*y*S-x*M*E;break;case"XZY":this._x=x*y*S-m*M*E,this._y=m*M*S-x*y*E,this._z=m*y*E+x*M*S,this._w=m*y*S+x*M*E;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],d=t[1],f=t[5],p=t[9],m=t[2],y=t[6],S=t[10],x=r+f+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(y-p)*M,this._y=(c-m)*M,this._z=(d-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(y-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(c-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+y)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(d-o)/M,this._x=(c+m)/M,this._y=(p+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,d=e._w,f=t._x,p=t._y,m=t._z,y=t._w;return this._x=r*y+d*f+o*m-c*p,this._y=o*y+d*p+c*f-r*m,this._z=c*y+d*m+r*p-o*f,this._w=d*y-r*f-o*p-c*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),y=Math.sin(m);p=Math.sin(p*m)/y,t=Math.sin(t*m)/y,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Af=class Af{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),y=2*(f*t-c*o),S=2*(c*r-d*t);return this.x=t+p*m+d*S-f*y,this.y=r+p*y+f*m-c*S,this.z=o+p*S+c*y-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Af.prototype.isVector3=!0;let fe=Af;const Yu=new fe,mm=new Ks,Cf=class Cf{constructor(e,t,r,o,c,d,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,d,f,p,m)}set(e,t,r,o,c,d,f,p,m){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=c,y[5]=p,y[6]=r,y[7]=d,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],y=r[4],S=r[7],x=r[2],M=r[5],E=r[8],L=o[0],w=o[3],_=o[6],U=o[1],z=o[4],T=o[7],P=o[2],I=o[5],A=o[8];return c[0]=d*L+f*U+p*P,c[3]=d*w+f*z+p*I,c[6]=d*_+f*T+p*A,c[1]=m*L+y*U+S*P,c[4]=m*w+y*z+S*I,c[7]=m*_+y*T+S*A,c[2]=x*L+M*U+E*P,c[5]=x*w+M*z+E*I,c[8]=x*_+M*T+E*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],y=e[8];return t*d*y-t*f*m-r*c*y+r*f*p+o*c*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],y=e[8],S=y*d-f*m,x=f*p-y*c,M=m*c-d*p,E=t*S+r*x+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=S*L,e[1]=(o*m-y*r)*L,e[2]=(f*r-o*d)*L,e[3]=x*L,e[4]=(y*t-o*p)*L,e[5]=(o*c-f*t)*L,e[6]=M*L,e[7]=(r*p-m*t)*L,e[8]=(d*t-r*c)*L,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cf.prototype.isMatrix3=!0;let vt=Cf;const qu=new vt,gm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const s={enabled:!0,workingColorSpace:jl,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Gt&&(o.r=rr(o.r),o.g=rr(o.g),o.b=rr(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[jl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:gm,fromXYZ:xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:gm,fromXYZ:xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Rt=S_();function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class w_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ps===void 0&&(Ps=Wl("canvas")),Ps.width=e.width,Ps.height=e.height;const o=Ps.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ps}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=rr(c[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rr(t[r]/255)*255):t[r]=rr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class wf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push($u(o[d].image)):c.push($u(o[d]))}else c=$u(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function $u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?w_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let E_=0;const Ku=new fe;class Cn extends as{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=nr,o=nr,c=xn,d=es,f=Si,p=ai,m=Cn.DEFAULT_ANISOTROPY,y=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Za(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=A0;Cn.DEFAULT_ANISOTROPY=1;const Rf=class Rf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const p=e.elements,m=p[0],y=p[4],S=p[8],x=p[1],M=p[5],E=p[9],L=p[2],w=p[6],_=p[10];if(Math.abs(y-x)<.01&&Math.abs(S-L)<.01&&Math.abs(E-w)<.01){if(Math.abs(y+x)<.1&&Math.abs(S+L)<.1&&Math.abs(E+w)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(m+1)/2,T=(M+1)/2,P=(_+1)/2,I=(y+x)/4,A=(S+L)/4,b=(E+w)/4;return z>T&&z>P?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=I/r,c=A/r):T>P?T<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(T),r=I/o,c=b/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=A/c,o=b/c),this.set(r,o,c,t),this}let U=Math.sqrt((w-E)*(w-E)+(S-L)*(S-L)+(x-y)*(x-y));return Math.abs(U)<.001&&(U=1),this.x=(w-E)/U,this.y=(S-L)/U,this.z=(x-y)/U,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rf.prototype.isVector4=!0;let Qt=Rf;class T_ extends as{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},c=new Cn(o),d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends T_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class U0 extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ql=class ql{constructor(e,t,r,o,c,d,f,p,m,y,S,x,M,E,L,w){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,d,f,p,m,y,S,x,M,E,L,w)}set(e,t,r,o,c,d,f,p,m,y,S,x,M,E,L,w){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=c,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=y,_[10]=S,_[14]=x,_[3]=M,_[7]=E,_[11]=L,_[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),c=1/Ls.setFromMatrixColumn(e,1).length(),d=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),y=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=d*y,M=d*S,E=f*y,L=f*S;t[0]=p*y,t[4]=-p*S,t[8]=m,t[1]=M+E*m,t[5]=x-L*m,t[9]=-f*p,t[2]=L-x*m,t[6]=E+M*m,t[10]=d*p}else if(e.order==="YXZ"){const x=p*y,M=p*S,E=m*y,L=m*S;t[0]=x+L*f,t[4]=E*f-M,t[8]=d*m,t[1]=d*S,t[5]=d*y,t[9]=-f,t[2]=M*f-E,t[6]=L+x*f,t[10]=d*p}else if(e.order==="ZXY"){const x=p*y,M=p*S,E=m*y,L=m*S;t[0]=x-L*f,t[4]=-d*S,t[8]=E+M*f,t[1]=M+E*f,t[5]=d*y,t[9]=L-x*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const x=d*y,M=d*S,E=f*y,L=f*S;t[0]=p*y,t[4]=E*m-M,t[8]=x*m+L,t[1]=p*S,t[5]=L*m+x,t[9]=M*m-E,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,E=f*p,L=f*m;t[0]=p*y,t[4]=L-x*S,t[8]=E*S+M,t[1]=S,t[5]=d*y,t[9]=-f*y,t[2]=-m*y,t[6]=M*S+E,t[10]=x-L*S}else if(e.order==="XZY"){const x=d*p,M=d*m,E=f*p,L=f*m;t[0]=p*y,t[4]=-S,t[8]=m*y,t[1]=x*S+L,t[5]=d*y,t[9]=M*S-E,t[2]=E*S-M,t[6]=f*y,t[10]=L*S+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,R_)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Er.crossVectors(r,Wn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Er.crossVectors(r,Wn)),Er.normalize(),ul.crossVectors(Wn,Er),o[0]=Er.x,o[4]=ul.x,o[8]=Wn.x,o[1]=Er.y,o[5]=ul.y,o[9]=Wn.y,o[2]=Er.z,o[6]=ul.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],y=r[1],S=r[5],x=r[9],M=r[13],E=r[2],L=r[6],w=r[10],_=r[14],U=r[3],z=r[7],T=r[11],P=r[15],I=o[0],A=o[4],b=o[8],R=o[12],O=o[1],B=o[5],V=o[9],F=o[13],G=o[2],Y=o[6],ie=o[10],Z=o[14],X=o[3],j=o[7],H=o[11],D=o[15];return c[0]=d*I+f*O+p*G+m*X,c[4]=d*A+f*B+p*Y+m*j,c[8]=d*b+f*V+p*ie+m*H,c[12]=d*R+f*F+p*Z+m*D,c[1]=y*I+S*O+x*G+M*X,c[5]=y*A+S*B+x*Y+M*j,c[9]=y*b+S*V+x*ie+M*H,c[13]=y*R+S*F+x*Z+M*D,c[2]=E*I+L*O+w*G+_*X,c[6]=E*A+L*B+w*Y+_*j,c[10]=E*b+L*V+w*ie+_*H,c[14]=E*R+L*F+w*Z+_*D,c[3]=U*I+z*O+T*G+P*X,c[7]=U*A+z*B+T*Y+P*j,c[11]=U*b+z*V+T*ie+P*H,c[15]=U*R+z*F+T*Z+P*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],y=e[2],S=e[6],x=e[10],M=e[14],E=e[3],L=e[7],w=e[11],_=e[15],U=p*M-m*x,z=f*M-m*S,T=f*x-p*S,P=d*M-m*y,I=d*x-p*y,A=d*S-f*y;return t*(L*U-w*z+_*T)-r*(E*U-w*P+_*I)+o*(E*z-L*P+_*A)-c*(E*T-L*I+w*A)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[1],d=e[5],f=e[9],p=e[2],m=e[6],y=e[10];return t*(d*y-f*m)-r*(c*y-f*p)+o*(c*m-d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],y=e[8],S=e[9],x=e[10],M=e[11],E=e[12],L=e[13],w=e[14],_=e[15],U=t*f-r*d,z=t*p-o*d,T=t*m-c*d,P=r*p-o*f,I=r*m-c*f,A=o*m-c*p,b=y*L-S*E,R=y*w-x*E,O=y*_-M*E,B=S*w-x*L,V=S*_-M*L,F=x*_-M*w,G=U*F-z*V+T*B+P*O-I*R+A*b;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/G;return e[0]=(f*F-p*V+m*B)*Y,e[1]=(o*V-r*F-c*B)*Y,e[2]=(L*A-w*I+_*P)*Y,e[3]=(x*I-S*A-M*P)*Y,e[4]=(p*O-d*F-m*R)*Y,e[5]=(t*F-o*O+c*R)*Y,e[6]=(w*T-E*A-_*z)*Y,e[7]=(y*A-x*T+M*z)*Y,e[8]=(d*V-f*O+m*b)*Y,e[9]=(r*O-t*V-c*b)*Y,e[10]=(E*I-L*T+_*U)*Y,e[11]=(S*T-y*I-M*U)*Y,e[12]=(f*R-d*B-p*b)*Y,e[13]=(t*B-r*R+o*b)*Y,e[14]=(L*z-E*P-w*U)*Y,e[15]=(y*P-S*z+x*U)*Y,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,y=c*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,y*f+r,y*p-o*d,0,m*p-o*f,y*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,d=t._y,f=t._z,p=t._w,m=c+c,y=d+d,S=f+f,x=c*m,M=c*y,E=c*S,L=d*y,w=d*S,_=f*S,U=p*m,z=p*y,T=p*S,P=r.x,I=r.y,A=r.z;return o[0]=(1-(L+_))*P,o[1]=(M+T)*P,o[2]=(E-z)*P,o[3]=0,o[4]=(M-T)*I,o[5]=(1-(x+_))*I,o[6]=(w+U)*I,o[7]=0,o[8]=(E+z)*A,o[9]=(w-U)*A,o[10]=(1-(x+L))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),t.identity(),this;let d=Ls.set(o[0],o[1],o[2]).length();const f=Ls.set(o[4],o[5],o[6]).length(),p=Ls.set(o[8],o[9],o[10]).length();c<0&&(d=-d),vi.copy(this);const m=1/d,y=1/f,S=1/p;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=y,vi.elements[5]*=y,vi.elements[6]*=y,vi.elements[8]*=S,vi.elements[9]*=S,vi.elements[10]*=S,t.setFromRotationMatrix(vi),r.x=d,r.y=f,r.z=p,this}makePerspective(e,t,r,o,c,d,f=Di,p=!1){const m=this.elements,y=2*c/(t-e),S=2*c/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let E,L;if(p)E=c/(d-c),L=d*c/(d-c);else if(f===Di)E=-(d+c)/(d-c),L=-2*d*c/(d-c);else if(f===Vl)E=-d/(d-c),L=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=L,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,c,d,f=Di,p=!1){const m=this.elements,y=2/(t-e),S=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let E,L;if(p)E=1/(d-c),L=d/(d-c);else if(f===Di)E=-2/(d-c),L=-(d+c)/(d-c);else if(f===Vl)E=-1/(d-c),L=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=L,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};ql.prototype.isMatrix4=!0;let nn=ql;const Ls=new fe,vi=new nn,C_=new fe(0,0,0),R_=new fe(1,1,1),Er=new fe,ul=new fe,Wn=new fe,vm=new nn,_m=new Ks;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],m=o[5],y=o[9],S=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Nt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const ym=new fe,Is=new Ks,$i=new nn,dl=new fe,Ua=new fe,P_=new fe,L_=new Ks,bm=new fe(1,0,0),Sm=new fe(0,1,0),wm=new fe(0,0,1),Mm={type:"added"},I_={type:"removed"},Ds={type:"childadded",child:null},Zu={type:"childremoved",child:null};class $n extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new fe,t=new rs,r=new Ks,o=new fe(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new vt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?dl.copy(e):dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ua,dl,this.up):$i.lookAt(dl,Ua,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Is.setFromRotationMatrix($i),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*o,c[13]+=r-c[1]*t-c[5]*r-c[9]*o,c[14]+=o-c[2]*t-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,y=p.length;m<y;m++){const S=p[m];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),y=d(e.images),S=d(e.shapes),x=d(e.skeletons),M=d(e.animations),E=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(f){const p=[];for(const m in f){const y=f[m];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$n.DEFAULT_UP=new fe(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ha extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const L of e.hand.values()){const w=t.getJointPose(L,r),_=this._getHandJoint(m,L);w!==null&&(_.matrix.fromArray(w.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=w.radius),_.visible=w!==null}const y=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=y.position.distanceTo(S.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Qu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=b_(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=Qu(d,c,e+1/3),this.g=Qu(d,c,e),this.b=Qu(d,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=Yn){function r(c){c!==void 0&&parseFloat(c)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const r=O0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Rt.workingToColorSpace(An.copy(this),e),Math.round(Nt(An.r*255,0,255))*65536+Math.round(Nt(An.g*255,0,255))*256+Math.round(Nt(An.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(An.copy(this),t);const r=An.r,o=An.g,c=An.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,m;const y=(f+d)/2;if(f===d)p=0,m=0;else{const S=d-f;switch(m=y<=.5?S/(d+f):S/(2-d-f),d){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=y,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Yn){Rt.workingToColorSpace(An.copy(this),e);const t=An.r,r=An.g,o=An.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(fl);const r=Xu(Tr.h,fl.h,t),o=Xu(Tr.s,fl.s,t),c=Xu(Tr.l,fl.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new zt;zt.NAMES=O0;class k_ extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new fe,Ki=new fe,ed=new fe,Zi=new fe,ks=new fe,Us=new fe,Em=new fe,td=new fe,nd=new fe,id=new fe,rd=new Qt,sd=new Qt,ad=new Qt;class bi{constructor(e=new fe,t=new fe,r=new fe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_i.subVectors(e,t),o.cross(_i);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){_i.subVectors(o,t),Ki.subVectors(r,t),ed.subVectors(e,t);const d=_i.dot(_i),f=_i.dot(Ki),p=_i.dot(ed),m=Ki.dot(Ki),y=Ki.dot(ed),S=d*m-f*f;if(S===0)return c.set(0,0,0),null;const x=1/S,M=(m*p-f*y)*x,E=(d*y-f*p)*x;return c.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,o,c,d,f,p){return this.getBarycoord(e,t,r,o,Zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Zi.x),p.addScaledVector(d,Zi.y),p.addScaledVector(f,Zi.z),p)}static getInterpolatedAttribute(e,t,r,o,c,d){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(rd,c.x),d.addScaledVector(sd,c.y),d.addScaledVector(ad,c.z),d}static isFrontFacing(e,t,r,o){return _i.subVectors(r,t),Ki.subVectors(e,t),_i.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),_i.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,c){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let d,f;ks.subVectors(o,r),Us.subVectors(c,r),td.subVectors(e,r);const p=ks.dot(td),m=Us.dot(td);if(p<=0&&m<=0)return t.copy(r);nd.subVectors(e,o);const y=ks.dot(nd),S=Us.dot(nd);if(y>=0&&S<=y)return t.copy(o);const x=p*S-y*m;if(x<=0&&p>=0&&y<=0)return d=p/(p-y),t.copy(r).addScaledVector(ks,d);id.subVectors(e,c);const M=ks.dot(id),E=Us.dot(id);if(E>=0&&M<=E)return t.copy(c);const L=M*m-p*E;if(L<=0&&m>=0&&E<=0)return f=m/(m-E),t.copy(r).addScaledVector(Us,f);const w=y*E-M*S;if(w<=0&&S-y>=0&&M-E>=0)return Em.subVectors(c,o),f=(S-y)/(S-y+(M-E)),t.copy(o).addScaledVector(Em,f);const _=1/(w+L+x);return d=L*_,f=x*_,t.copy(r).addScaledVector(ks,d).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(c,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),pl.subVectors(this.max,Oa),Os.subVectors(e.a,Oa),Fs.subVectors(e.b,Oa),zs.subVectors(e.c,Oa),Ar.subVectors(Fs,Os),Cr.subVectors(zs,Fs),$r.subVectors(Os,zs);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-$r.z,$r.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,$r.z,0,-$r.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-$r.y,$r.x,0];return!od(t,Os,Fs,zs,pl)||(t=[1,0,0,0,1,0,0,0,1],!od(t,Os,Fs,zs,pl))?!1:(ml.crossVectors(Ar,Cr),t=[ml.x,ml.y,ml.z],od(t,Os,Fs,zs,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],yi=new fe,hl=new Ja,Os=new fe,Fs=new fe,zs=new fe,Ar=new fe,Cr=new fe,$r=new fe,Oa=new fe,pl=new fe,ml=new fe,Kr=new fe;function od(s,e,t,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Kr.fromArray(s,c);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),p=e.dot(Kr),m=t.dot(Kr),y=r.dot(Kr);if(Math.max(-Math.max(p,m,y),Math.min(p,m,y))>f)return!1}return!0}const sn=new fe,gl=new kt;let U_=0;class sr extends as{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ka(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array),c=zn(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class F0 extends sr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class z0 extends sr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class oi extends sr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const O_=new Ja,Fa=new fe,ld=new fe;class Ef{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):O_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(ld)),this.expandByPoint(Fa.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let F_=0;const ri=new nn,cd=new $n,Bs=new fe,Xn=new Ja,za=new Ja,gn=new fe;class zi extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?z0:F0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const f=t[c];za.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(Xn.min,za.min),Xn.expandByPoint(gn),gn.addVectors(Xn.max,za.max),Xn.expandByPoint(gn)):(Xn.expandByPoint(za.min),Xn.expandByPoint(za.max))}Xn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)gn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let c=0,d=t.length;c<d;c++){const f=t[c],p=this.morphTargetsRelative;for(let m=0,y=f.count;m<y;m++)gn.fromBufferAttribute(f,m),p&&(Bs.fromBufferAttribute(e,m),gn.add(Bs)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new sr(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],p=[];for(let b=0;b<r.count;b++)f[b]=new fe,p[b]=new fe;const m=new fe,y=new fe,S=new fe,x=new kt,M=new kt,E=new kt,L=new fe,w=new fe;function _(b,R,O){m.fromBufferAttribute(r,b),y.fromBufferAttribute(r,R),S.fromBufferAttribute(r,O),x.fromBufferAttribute(c,b),M.fromBufferAttribute(c,R),E.fromBufferAttribute(c,O),y.sub(m),S.sub(m),M.sub(x),E.sub(x);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(L.copy(y).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(B),w.copy(S).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(B),f[b].add(L),f[R].add(L),f[O].add(L),p[b].add(w),p[R].add(w),p[O].add(w))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let b=0,R=U.length;b<R;++b){const O=U[b],B=O.start,V=O.count;for(let F=B,G=B+V;F<G;F+=3)_(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const z=new fe,T=new fe,P=new fe,I=new fe;function A(b){P.fromBufferAttribute(o,b),I.copy(P);const R=f[b];z.copy(R),z.sub(P.multiplyScalar(P.dot(R))).normalize(),T.crossVectors(I,R);const B=T.dot(p[b])<0?-1:1;d.setXYZW(b,z.x,z.y,z.z,B)}for(let b=0,R=U.length;b<R;++b){const O=U[b],B=O.start,V=O.count;for(let F=B,G=B+V;F<G;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new fe,c=new fe,d=new fe,f=new fe,p=new fe,m=new fe,y=new fe,S=new fe;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),L=e.getX(x+1),w=e.getX(x+2);o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,L),d.fromBufferAttribute(t,w),y.subVectors(d,c),S.subVectors(o,c),y.cross(S),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,L),m.fromBufferAttribute(r,w),f.add(y),p.add(y),m.add(y),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(L,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),c.fromBufferAttribute(t,x+1),d.fromBufferAttribute(t,x+2),y.subVectors(d,c),S.subVectors(o,c),y.cross(S),r.setXYZ(x+0,y.x,y.y,y.z),r.setXYZ(x+1,y.x,y.y,y.z),r.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,p){const m=f.array,y=f.itemSize,S=f.normalized,x=new m.constructor(p.length*y);let M=0,E=0;for(let L=0,w=p.length;L<w;L++){f.isInterleavedBufferAttribute?M=p[L]*f.data.stride+f.offset:M=p[L]*y;for(let _=0;_<y;_++)x[E++]=m[M++]}return new sr(x,y,S)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let y=0,S=m.length;y<S;y++){const x=m[y],M=e(x,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],y=[];for(let S=0,x=m.length;S<x;S++){const M=m[S];y.push(M.toJSON(e.data))}y.length>0&&(o[p]=y,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const y=o[m];this.setAttribute(m,y.clone(t))}const c=e.morphAttributes;for(const m in c){const y=[],S=c[m];for(let x=0,M=S.length;x<M;x++)y.push(S[x].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,y=d.length;m<y;m++){const S=d[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new fe,z_=new fe,B_=new vt;class Nr{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ud.subVectors(r,t).cross(z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(ud),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||B_.getNormalMatrix(e),o=this.coplanarPoint(ud).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let G_=0;class Jl extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Wa,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=x0,this.blendDst=v0,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vu,this.stencilZFail=Vu,this.stencilZPass=Vu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(t){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Nr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new kt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new fe,dd=new fe,xl=new fe,vl=new fe;class B0{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dd.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),vl.copy(this.origin).sub(dd);const c=e.distanceTo(t)*.5,d=-this.direction.dot(xl),f=vl.dot(this.direction),p=-vl.dot(xl),m=vl.lengthSq(),y=Math.abs(1-d*d);let S,x,M,E;if(y>0)if(S=d*p-f,x=d*f-p,E=c*y,S>=0)if(x>=-E)if(x<=E){const L=1/y;S*=L,x*=L,M=S*(S+d*x+2*f)+x*(d*S+x+2*p)+m}else x=c,S=Math.max(0,-(d*x+f)),M=-S*S+x*(x+2*p)+m;else x=-c,S=Math.max(0,-(d*x+f)),M=-S*S+x*(x+2*p)+m;else x<=-E?(S=Math.max(0,-(-d*c+f)),x=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+x*(x+2*p)+m):x<=E?(S=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(S=Math.max(0,-(d*c+f)),x=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+x*(x+2*p)+m);else x=d>0?-c:c,S=Math.max(0,-(d*x+f)),M=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(dd).addScaledVector(xl,x),M}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,d,f,p;const m=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),y>=0?(c=(e.min.y-x.y)*y,d=(e.max.y-x.y)*y):(c=(e.max.y-x.y)*y,d=(e.min.y-x.y)*y),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),S>=0?(f=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,r,o,c){const d=this.origin,f=this.direction,p=f.x,m=f.y,y=f.z,S=e.x-d.x,x=e.y-d.y,M=e.z-d.z,E=t.x-d.x,L=t.y-d.y,w=t.z-d.z,_=r.x-d.x,U=r.y-d.y,z=r.z-d.z,T=Math.abs(p),P=Math.abs(m),I=Math.abs(y);let A,b,R,O,B,V,F,G,Y,ie,Z,X;if(T>=P&&T>=I?(R=p,V=S,Y=E,X=_,p>=0?(A=m,b=y,O=x,B=M,F=L,G=w,ie=U,Z=z):(A=y,b=m,O=M,B=x,F=w,G=L,ie=z,Z=U)):P>=I?(R=m,V=x,Y=L,X=U,m>=0?(A=y,b=p,O=M,B=S,F=w,G=E,ie=z,Z=_):(A=p,b=y,O=S,B=M,F=E,G=w,ie=_,Z=z)):(R=y,V=M,Y=w,X=z,y>=0?(A=p,b=m,O=S,B=x,F=E,G=L,ie=_,Z=U):(A=m,b=p,O=x,B=S,F=L,G=E,ie=U,Z=_)),R===0)return null;const j=A/R,H=b/R,D=1/R,Q=O-j*V,ve=B-H*V,Re=F-j*Y,Ne=G-H*Y,Ue=ie-j*X,ae=Z-H*X,ce=Ue*Ne-ae*Re,be=Q*ae-ve*Ue,Ve=Re*ve-Ne*Q;if(o){if(ce<0||be<0||Ve<0)return null}else if((ce<0||be<0||Ve<0)&&(ce>0||be>0||Ve>0))return null;const Oe=ce+be+Ve;if(Oe===0)return null;const dt=D*(ce*V+be*Y+Ve*X);return(Oe>0?dt<0:dt>0)?null:this.at(dt/Oe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xl extends Jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new nn,Zr=new B0,_l=new Ef,Am=new fe,yl=new fe,bl=new fe,Sl=new fe,fd=new fe,wl=new fe,Cm=new fe,Ml=new fe;class Mi extends $n{constructor(e=new zi,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){wl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const y=f[p],S=c[p];y!==0&&(fd.fromBufferAttribute(S,e),d?wl.addScaledVector(fd,y):wl.addScaledVector(fd.sub(t),y))}t.add(wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(_l.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(_l,Am)===null||Zr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,y=c.attributes.uv1,S=c.attributes.normal,x=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,L=x.length;E<L;E++){const w=x[E],_=d[w.materialIndex],U=Math.max(w.start,M.start),z=Math.min(f.count,Math.min(w.start+w.count,M.start+M.count));for(let T=U,P=z;T<P;T+=3){const I=f.getX(T),A=f.getX(T+1),b=f.getX(T+2);o=El(this,_,e,r,m,y,S,I,A,b),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),L=Math.min(f.count,M.start+M.count);for(let w=E,_=L;w<_;w+=3){const U=f.getX(w),z=f.getX(w+1),T=f.getX(w+2);o=El(this,d,e,r,m,y,S,U,z,T),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,L=x.length;E<L;E++){const w=x[E],_=d[w.materialIndex],U=Math.max(w.start,M.start),z=Math.min(p.count,Math.min(w.start+w.count,M.start+M.count));for(let T=U,P=z;T<P;T+=3){const I=T,A=T+1,b=T+2;o=El(this,_,e,r,m,y,S,I,A,b),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),L=Math.min(p.count,M.start+M.count);for(let w=E,_=L;w<_;w+=3){const U=w,z=w+1,T=w+2;o=El(this,d,e,r,m,y,S,U,z,T),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}}}function j_(s,e,t,r,o,c,d,f){let p;if(e.side===Bn?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===Lr,f),p===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ml);return m<t.near||m>t.far?null:{distance:m,point:Ml.clone(),object:s}}function El(s,e,t,r,o,c,d,f,p,m){s.getVertexPosition(f,yl),s.getVertexPosition(p,bl),s.getVertexPosition(m,Sl);const y=j_(s,e,t,r,yl,bl,Sl,Cm);if(y){const S=new fe;bi.getBarycoord(Cm,yl,bl,Sl,S),o&&(y.uv=bi.getInterpolatedAttribute(o,f,p,m,S,new kt)),c&&(y.uv1=bi.getInterpolatedAttribute(c,f,p,m,S,new kt)),d&&(y.normal=bi.getInterpolatedAttribute(d,f,p,m,S,new fe),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new fe,materialIndex:0};bi.getNormal(yl,bl,Sl,x.normal),y.face=x,y.barycoord=S}return y}class H_ extends Cn{constructor(e=null,t=1,r=1,o,c,d,f,p,m=yn,y=yn,S,x){super(null,d,f,p,m,y,o,c,S,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new Ef,V_=new kt(.5,.5),Tl=new fe;class G0{constructor(e=new Nr,t=new Nr,r=new Nr,o=new Nr,c=new Nr,d=new Nr){this.planes=[e,t,r,o,c,d]}set(e,t,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Di,r=!1){const o=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],m=c[3],y=c[4],S=c[5],x=c[6],M=c[7],E=c[8],L=c[9],w=c[10],_=c[11],U=c[12],z=c[13],T=c[14],P=c[15];if(o[0].setComponents(m-d,M-y,_-E,P-U).normalize(),o[1].setComponents(m+d,M+y,_+E,P+U).normalize(),o[2].setComponents(m+f,M+S,_+L,P+z).normalize(),o[3].setComponents(m-f,M-S,_-L,P-z).normalize(),r)o[4].setComponents(p,x,w,T).normalize(),o[5].setComponents(m-p,M-x,_-w,P-T).normalize();else if(o[4].setComponents(m-p,M-x,_-w,P-T).normalize(),t===Di)o[5].setComponents(m+p,M+x,_+w,P+T).normalize();else if(t===Vl)o[5].setComponents(p,x,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=V_.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Tl.x=o.normal.x>0?e.max.x:e.min.x,Tl.y=o.normal.y>0?e.max.y:e.min.y,Tl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j0 extends Cn{constructor(e=[],t=ns,r,o,c,d,f,p,m,y){super(e,t,r,o,c,d,f,p,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Cn{constructor(e,t,r,o,c,d,f,p,m){super(e,t,r,o,c,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ka extends Cn{constructor(e,t,r=Ui,o,c,d,f=yn,p=yn,m,y=ar,S=1){if(y!==ar&&y!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:S};super(x,o,c,d,f,p,y,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class X_ extends Ka{constructor(e,t=Ui,r=ns,o,c,d=yn,f=yn,p,m=ar){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,r,o,c,d,f,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class H0 extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends zi{constructor(e=1,t=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],y=[],S=[];let x=0,M=0;E("z","y","x",-1,-1,r,t,e,d,c,0),E("z","y","x",1,-1,r,t,-e,d,c,1),E("x","z","y",1,1,e,r,t,o,d,2),E("x","z","y",1,-1,e,r,-t,o,d,3),E("x","y","z",1,-1,e,t,r,o,c,4),E("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new oi(m,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(S,2));function E(L,w,_,U,z,T,P,I,A,b,R){const O=T/A,B=P/b,V=T/2,F=P/2,G=I/2,Y=A+1,ie=b+1;let Z=0,X=0;const j=new fe;for(let H=0;H<ie;H++){const D=H*B-F;for(let Q=0;Q<Y;Q++){const ve=Q*O-V;j[L]=ve*U,j[w]=D*z,j[_]=G,m.push(j.x,j.y,j.z),j[L]=0,j[w]=0,j[_]=I>0?1:-1,y.push(j.x,j.y,j.z),S.push(Q/A),S.push(1-H/b),Z+=1}}for(let H=0;H<b;H++)for(let D=0;D<A;D++){const Q=x+D+Y*H,ve=x+D+Y*(H+1),Re=x+(D+1)+Y*(H+1),Ne=x+(D+1)+Y*H;p.push(Q,ve,Ne),p.push(ve,Re,Ne),X+=6}f.addGroup(M,X,R),M+=X,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yl extends zi{constructor(e=1,t=1,r=1,o=32,c=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const y=[],S=[],x=[],M=[];let E=0;const L=[],w=r/2;let _=0;U(),d===!1&&(e>0&&z(!0),t>0&&z(!1)),this.setIndex(y),this.setAttribute("position",new oi(S,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(M,2));function U(){const T=new fe,P=new fe;let I=0;const A=(t-e)/r;for(let b=0;b<=c;b++){const R=[],O=b/c,B=O*(t-e)+e;for(let V=0;V<=o;V++){const F=V/o,G=F*p+f,Y=Math.sin(G),ie=Math.cos(G);P.x=B*Y,P.y=-O*r+w,P.z=B*ie,S.push(P.x,P.y,P.z),T.set(Y,A,ie).normalize(),x.push(T.x,T.y,T.z),M.push(F,1-O),R.push(E++)}L.push(R)}for(let b=0;b<o;b++)for(let R=0;R<c;R++){const O=L[R][b],B=L[R+1][b],V=L[R+1][b+1],F=L[R][b+1];(e>0||R!==0)&&(y.push(O,B,F),I+=3),(t>0||R!==c-1)&&(y.push(B,V,F),I+=3)}m.addGroup(_,I,0),_+=I}function z(T){const P=E,I=new kt,A=new fe;let b=0;const R=T===!0?e:t,O=T===!0?1:-1;for(let V=1;V<=o;V++)S.push(0,w*O,0),x.push(0,O,0),M.push(.5,.5),E++;const B=E;for(let V=0;V<=o;V++){const G=V/o*p+f,Y=Math.cos(G),ie=Math.sin(G);A.x=R*ie,A.y=w*O,A.z=R*Y,S.push(A.x,A.y,A.z),x.push(0,O,0),I.x=Y*.5+.5,I.y=ie*.5*O+.5,M.push(I.x,I.y),E++}for(let V=0;V<o;V++){const F=P+V,G=B+V;T===!0?y.push(G,G+1,F):y.push(G+1,G,F),b+=3}m.addGroup(_,b,T===!0?1:2),_+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends zi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,y=p+1,S=e/f,x=t/p,M=[],E=[],L=[],w=[];for(let _=0;_<y;_++){const U=_*x-d;for(let z=0;z<m;z++){const T=z*S-c;E.push(T,-U,0),L.push(0,0,1),w.push(z/f),w.push(1-_/p)}}for(let _=0;_<p;_++)for(let U=0;U<f;U++){const z=U+m*_,T=U+m*(_+1),P=U+1+m*(_+1),I=U+1+m*_;M.push(z,T,I),M.push(T,P,I)}this.setIndex(M),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(L,3)),this.setAttribute("uv",new oi(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Rm(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Rm(o[0])){const c=[];for(let d=0,f=o.length;d<f;d++)c[d]=o[d].clone();e[t][r]=c}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const r=$s(s[t]);for(const o in r)e[o]=r[o]}return e}function Rm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Y_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function V0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const q_={clone:$s,merge:Ln};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new zt().setHex(o.value);break;case"v2":this.uniforms[r].value=new kt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Z_ extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J_ extends Jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q_ extends Jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Al=new fe,Cl=new Ks,Ri=new fe;class W0 extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Cl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Al,Cl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new fe,Nm=new kt,Pm=new kt;class si extends W0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Pm),t.subVectors(Pm,Nm)}setViewOffset(e,t,r,o,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class X0 extends W0{constructor(e=-1,t=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=y*this.view.offsetY,p=f-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=-90,js=1;class e1 extends $n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(Gs,js,e,t);o.layers=this.layers,this.add(o);const c=new si(Gs,js,e,t);c.layers=this.layers,this.add(c);const d=new si(Gs,js,e,t);d.layers=this.layers,this.add(d);const f=new si(Gs,js,e,t);f.layers=this.layers,this.add(f);const p=new si(Gs,js,e,t);p.layers=this.layers,this.add(p);const m=new si(Gs,js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,d,f,p]=t;for(const m of t)this.remove(m);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,y]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const L=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let w=!1;e.isWebGLRenderer===!0?w=e.state.buffers.depth.getReversed():w=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=L,e.setRenderTarget(r,5,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class t1 extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lm=new nn;class n1{constructor(e,t,r=0,o=1/0){this.ray=new B0(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Mf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lm),this}intersectObject(e,t=!0,r=[]){return uf(e,this,r,t),r.sort(Im),r}intersectObjects(e,t=!0,r=[]){for(let o=0,c=e.length;o<c;o++)uf(e[o],this,r,t);return r.sort(Im),r}}function Im(s,e){return s.distance-e.distance}function uf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)uf(c[d],e,t,!0)}}const Nf=class Nf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=r,c[3]=o,this}};Nf.prototype.isMatrix2=!0;let Dm=Nf;function km(s,e,t,r){const o=i1(r);switch(t){case L0:return s*e;case D0:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case is:return s*e*2/o.components*o.byteLength;case _f:return s*e*2/o.components*o.byteLength;case I0:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case yf:return s*e*4/o.components*o.byteLength;case Ll:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:case kd:return Math.max(s,16)*Math.max(e,8)/4;case Ld:case Dd:return Math.max(s,8)*Math.max(e,8)/2;case Ud:case Od:case zd:case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:case Bl:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nf:case rf:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gl:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i1(s){switch(s){case ai:case C0:return{byteLength:1,components:1};case qa:case R0:case Oi:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case Ui:case mf:case Ii:return{byteLength:4,components:1};case N0:case P0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y0(){let s=null,e=!1,t=null,r=null;function o(c,d){r=s.requestAnimationFrame(o),t(c,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function r1(s){const e=new WeakMap;function t(f,p){const m=f.array,y=f.usage,S=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,y),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,m){const y=p.array,S=p.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,y);else{S.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<S.length;M++){const E=S[x],L=S[M];L.start<=E.start+E.count+1?E.count=Math.max(E.count,L.start+L.count-E.start):(++x,S[x]=L)}S.length=x+1;for(let M=0,E=S.length;M<E;M++){const L=S[M];s.bufferSubData(m,L.start*y.BYTES_PER_ELEMENT,y,L.start,L.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:c,update:d}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ab=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:s1,alphahash_pars_fragment:a1,alphamap_fragment:o1,alphamap_pars_fragment:l1,alphatest_fragment:c1,alphatest_pars_fragment:u1,aomap_fragment:d1,aomap_pars_fragment:f1,batching_pars_vertex:h1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:x1,iridescence_fragment:v1,bumpmap_pars_fragment:_1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:S1,clipping_planes_vertex:w1,color_fragment:M1,color_pars_fragment:E1,color_pars_vertex:T1,color_vertex:A1,common:C1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:N1,displacementmap_pars_vertex:P1,displacementmap_vertex:L1,emissivemap_fragment:I1,emissivemap_pars_fragment:D1,colorspace_fragment:k1,colorspace_pars_fragment:U1,envmap_fragment:O1,envmap_common_pars_fragment:F1,envmap_pars_fragment:z1,envmap_pars_vertex:B1,envmap_physical_pars_fragment:Z1,envmap_vertex:G1,fog_vertex:j1,fog_pars_vertex:H1,fog_fragment:V1,fog_pars_fragment:W1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:Y1,lights_lambert_fragment:q1,lights_lambert_pars_fragment:$1,lights_pars_begin:K1,lights_toon_fragment:J1,lights_toon_pars_fragment:Q1,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:ay,lightprobes_pars_fragment:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:xy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:yy,morphtarget_pars_vertex:by,morphtarget_vertex:Sy,normal_fragment_begin:wy,normal_fragment_maps:My,normal_pars_fragment:Ey,normal_pars_vertex:Ty,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Dy,premultiplied_alpha_fragment:ky,project_vertex:Uy,dithering_fragment:Oy,dithering_pars_fragment:Fy,roughnessmap_fragment:zy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:jy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Vy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:Yy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Ky,tonemapping_fragment:Zy,tonemapping_pars_fragment:Jy,transmission_fragment:Qy,transmission_pars_fragment:eb,uv_pars_fragment:tb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:rb,background_vert:sb,background_frag:ab,backgroundCube_vert:ob,backgroundCube_frag:lb,cube_vert:cb,cube_frag:ub,depth_vert:db,depth_frag:fb,distance_vert:hb,distance_frag:pb,equirect_vert:mb,equirect_frag:gb,linedashed_vert:xb,linedashed_frag:vb,meshbasic_vert:_b,meshbasic_frag:yb,meshlambert_vert:bb,meshlambert_frag:Sb,meshmatcap_vert:wb,meshmatcap_frag:Mb,meshnormal_vert:Eb,meshnormal_frag:Tb,meshphong_vert:Ab,meshphong_frag:Cb,meshphysical_vert:Rb,meshphysical_frag:Nb,meshtoon_vert:Pb,meshtoon_frag:Lb,points_vert:Ib,points_frag:Db,shadow_vert:kb,shadow_frag:Ub,sprite_vert:Ob,sprite_frag:Fb},je={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new fe},probesMax:{value:new fe},probesResolution:{value:new fe}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Li={basic:{uniforms:Ln([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Ln([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Ln([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Ln([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Ln([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Ln([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Ln([je.points,je.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Ln([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Ln([je.common,je.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Ln([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Ln([je.sprite,je.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Ln([je.common,je.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Ln([je.lights,je.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Li.physical={uniforms:Ln([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Rl={r:0,b:0,g:0},zb=new nn,q0=new vt;q0.set(-1,0,0,0,1,0,0,0,1);function Bb(s,e,t,r,o,c){const d=new zt(0);let f=o===!0?0:1,p,m,y=null,S=0,x=null;function M(U){let z=U.isScene===!0?U.background:null;if(z&&z.isTexture){const T=U.backgroundBlurriness>0;z=e.get(z,T)}return z}function E(U){let z=!1;const T=M(U);T===null?w(d,f):T&&T.isColor&&(w(T,1),z=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(s.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function L(U,z){const T=M(z);T&&(T.isCubeTexture||T.mapping===Zl)?(m===void 0&&(m=new Mi(new Qa(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:$s(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=T,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(z.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(q0),m.material.toneMapped=Rt.getTransfer(T.colorSpace)!==Gt,(y!==T||S!==T.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,y=T,S=T.version,x=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new Mi(new Ql(2,2),new Fi({name:"BackgroundMaterial",uniforms:$s(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(T.colorSpace)!==Gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(y!==T||S!==T.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,y=T,S=T.version,x=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function w(U,z){U.getRGB(Rl,V0(s)),t.buffers.color.setClear(Rl.r,Rl.g,Rl.b,z,c)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,z=1){d.set(U),f=z,w(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,w(d,f)},render:E,addToRenderList:L,dispose:_}}function Gb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,d=!1;function f(B,V,F,G,Y){let ie=!1;const Z=S(B,G,F,V);c!==Z&&(c=Z,m(c.object)),ie=M(B,G,F,Y),ie&&E(B,G,F,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,T(B,V,F,G),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return s.createVertexArray()}function m(B){return s.bindVertexArray(B)}function y(B){return s.deleteVertexArray(B)}function S(B,V,F,G){const Y=G.wireframe===!0;let ie=r[V.id];ie===void 0&&(ie={},r[V.id]=ie);const Z=B.isInstancedMesh===!0?B.id:0;let X=ie[Z];X===void 0&&(X={},ie[Z]=X);let j=X[F.id];j===void 0&&(j={},X[F.id]=j);let H=j[Y];return H===void 0&&(H=x(p()),j[Y]=H),H}function x(B){const V=[],F=[],G=[];for(let Y=0;Y<t;Y++)V[Y]=0,F[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:G,object:B,attributes:{},index:null}}function M(B,V,F,G){const Y=c.attributes,ie=V.attributes;let Z=0;const X=F.getAttributes();for(const j in X)if(X[j].location>=0){const D=Y[j];let Q=ie[j];if(Q===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;Z++}return c.attributesNum!==Z||c.index!==G}function E(B,V,F,G){const Y={},ie=V.attributes;let Z=0;const X=F.getAttributes();for(const j in X)if(X[j].location>=0){let D=ie[j];D===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(D=B.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),Y[j]=Q,Z++}c.attributes=Y,c.attributesNum=Z,c.index=G}function L(){const B=c.newAttributes;for(let V=0,F=B.length;V<F;V++)B[V]=0}function w(B){_(B,0)}function _(B,V){const F=c.newAttributes,G=c.enabledAttributes,Y=c.attributeDivisors;F[B]=1,G[B]===0&&(s.enableVertexAttribArray(B),G[B]=1),Y[B]!==V&&(s.vertexAttribDivisor(B,V),Y[B]=V)}function U(){const B=c.newAttributes,V=c.enabledAttributes;for(let F=0,G=V.length;F<G;F++)V[F]!==B[F]&&(s.disableVertexAttribArray(F),V[F]=0)}function z(B,V,F,G,Y,ie,Z){Z===!0?s.vertexAttribIPointer(B,V,F,Y,ie):s.vertexAttribPointer(B,V,F,G,Y,ie)}function T(B,V,F,G){L();const Y=G.attributes,ie=F.getAttributes(),Z=V.defaultAttributeValues;for(const X in ie){const j=ie[X];if(j.location>=0){let H=Y[X];if(H===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),H!==void 0){const D=H.normalized,Q=H.itemSize,ve=e.get(H);if(ve===void 0)continue;const Re=ve.buffer,Ne=ve.type,Ue=ve.bytesPerElement,ae=Ne===s.INT||Ne===s.UNSIGNED_INT||H.gpuType===mf;if(H.isInterleavedBufferAttribute){const ce=H.data,be=ce.stride,Ve=H.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<j.locationSize;Oe++)_(j.location+Oe,ce.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<j.locationSize;Oe++)w(j.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Oe=0;Oe<j.locationSize;Oe++)z(j.location+Oe,Q/j.locationSize,Ne,D,be*Ue,(Ve+Q/j.locationSize*Oe)*Ue,ae)}else{if(H.isInstancedBufferAttribute){for(let ce=0;ce<j.locationSize;ce++)_(j.location+ce,H.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ce=0;ce<j.locationSize;ce++)w(j.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let ce=0;ce<j.locationSize;ce++)z(j.location+ce,Q/j.locationSize,Ne,D,Q*Ue,Q/j.locationSize*ce*Ue,ae)}}else if(Z!==void 0){const D=Z[X];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(j.location,D);break;case 3:s.vertexAttrib3fv(j.location,D);break;case 4:s.vertexAttrib4fv(j.location,D);break;default:s.vertexAttrib1fv(j.location,D)}}}}U()}function P(){R();for(const B in r){const V=r[B];for(const F in V){const G=V[F];for(const Y in G){const ie=G[Y];for(const Z in ie)y(ie[Z].object),delete ie[Z];delete G[Y]}}delete r[B]}}function I(B){if(r[B.id]===void 0)return;const V=r[B.id];for(const F in V){const G=V[F];for(const Y in G){const ie=G[Y];for(const Z in ie)y(ie[Z].object),delete ie[Z];delete G[Y]}}delete r[B.id]}function A(B){for(const V in r){const F=r[V];for(const G in F){const Y=F[G];if(Y[B.id]===void 0)continue;const ie=Y[B.id];for(const Z in ie)y(ie[Z].object),delete ie[Z];delete Y[B.id]}}}function b(B){for(const V in r){const F=r[V],G=B.isInstancedMesh===!0?B.id:0,Y=F[G];if(Y!==void 0){for(const ie in Y){const Z=Y[ie];for(const X in Z)y(Z[X].object),delete Z[X];delete Y[ie]}delete F[G],Object.keys(F).length===0&&delete r[V]}}}function R(){O(),d=!0,c!==o&&(c=o,m(c.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:R,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:L,enableAttribute:w,disableUnusedAttributes:U}}function jb(s,e,t){let r;function o(p){r=p}function c(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function d(p,m,y){y!==0&&(s.drawArraysInstanced(r,p,m,y),t.update(m,r,y))}function f(p,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,y);let x=0;for(let M=0;M<y;M++)x+=m[M];t.update(x,r,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function Hb(s,e,t,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(A){return!(A!==Si&&r.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(A){const b=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&A!==Ii&&!b&&r.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=p(m);y!==m&&(gt("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const S=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:L,maxCubemapSize:w,maxAttributes:_,maxVertexUniforms:U,maxVaryings:z,maxFragmentUniforms:T,maxSamples:P,samples:I}}function Vb(s){const e=this;let t=null,r=0,o=!1,c=!1;const d=new Nr,f=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||o;return o=x,r=S.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){t=y(S,x,0)},this.setState=function(S,x,M){const E=S.clippingPlanes,L=S.clipIntersection,w=S.clipShadows,_=s.get(S);if(!o||E===null||E.length===0||c&&!w)c?y(null):m();else{const U=c?0:r,z=U*4;let T=_.clippingState||null;p.value=T,T=y(E,x,z,M);for(let P=0;P!==z;++P)T[P]=t[P];_.clippingState=T,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,x,M,E){const L=S!==null?S.length:0;let w=null;if(L!==0){if(w=p.value,E!==!0||w===null){const _=M+L*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(w===null||w.length<_)&&(w=new Float32Array(_));for(let z=0,T=M;z!==L;++z,T+=4)d.copy(S[z]).applyMatrix4(U,f),d.normal.toArray(w,T),w[T+3]=d.constant}p.value=w,p.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,w}}const Ws=4,Wb=6,Xb=20,Yb=256,Ba=new X0,Um=new zt;let hd=null,pd=0,md=0,gd=!1;const qb=new fe,Qr=new fe;class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,c={}){const{size:d=256,position:f=qb}=c;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Oi,format:Si,colorSpace:jl,depthBuffer:!1},o=Fm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,t,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$b(c)),this._blurMaterial=Zb(c,e,t),this._ggxMaterial=Kb(c,e,t)}return o}_compileMaterial(e){const t=new Mi(new zi,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,r,o,c){const p=new si(90,1,t,r),m=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,M=S.toneMapping;S.getClearColor(Um),S.toneMapping=ki,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Qa,new Xl({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,w=L.material;let _=!1;const U=e.background;U?U.isColor&&(w.color.copy(U),e.background=null,_=!0):(w.color.copy(Um),_=!0);for(let z=0;z<6;z++){const T=z%3;T===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+y[z],c.y,c.z)):T===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+y[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+y[z]));const P=this._cubeSize;Hs(o,T*P,z>2?P:0,P,P),S.setRenderTarget(o),_&&S.render(L,p),S.render(e,p)}S.toneMapping=M,S.autoClear=x,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ns||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Hs(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,Ba)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),S=Math.sqrt(m*m-y*y),x=m*1.25,M=S*x,{_lodMax:E}=this,L=this._sizeLods[r],w=3*L*(r>E-Ws?r-E+Ws:0),_=4*(this._cubeSize-L);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=E-t,Hs(c,w,_,3*L,2*L),o.setRenderTarget(c),o.render(f,Ba),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-r,Hs(e,w,_,3*L,2*L),o.setRenderTarget(e),o.render(f,Ba)}_blur(e,t,r,o){const c=this._pingPongRenderTarget,d=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,t,r,d),this._blurPass(c,e,r,r,d)}_blurPass(e,t,r,o,c){const d=this._renderer,f=this._blurMaterial,p=this._lodMeshes[o];p.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const y=this._sizeLods[o],S=3*y*(o>this._lodMax-Ws?o-this._lodMax+Ws:0),x=4*(this._cubeSize-y);Hs(t,S,x,3*y,2*y),d.setRenderTarget(t),d.render(p,Ba)}}function $b(s){const e=[],t=[];let r=s;const o=s-Ws+1+Wb;for(let c=0;c<o;c++){const d=Math.pow(2,r);e.push(d);const f=1/(d-2),p=-f,m=1+f,y=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,x=6,M=3,E=new Float32Array(M*x*S),L=new Float32Array(M*x*S);for(let _=0;_<S;_++){const U=_%3*2/3-1,z=_>2?0:-1,T=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];E.set(T,M*x*_);for(let P=0;P<x;P++){const I=y[P*2]*2-1,A=y[P*2+1]*2-1;_===0?Qr.set(1,A,I):_===1?Qr.set(-I,1,-A):_===2?Qr.set(-I,A,1):_===3?Qr.set(-1,A,-I):_===4?Qr.set(-I,-1,A):Qr.set(I,A,-1),Qr.toArray(L,(_*x+P)*M)}}const w=new zi;w.setAttribute("position",new sr(E,M)),w.setAttribute("outputDirection",new sr(L,M)),t.push(new Mi(w,null)),r>Ws&&r--}return{lodMeshes:t,sizeLods:e}}function Fm(s,e,t){const r=new wi(s,e,t);return r.texture.mapping=Zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Kb(s,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Zb(s,e,t){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function zm(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Bm(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $0 extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new j0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Qa(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:ir});c.uniforms.tEquirect.value=t;const d=new Mi(o,c),f=t.minFilter;return t.minFilter===es&&(t.minFilter=xn),new e1(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(c)}}function Jb(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?d(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===Gu||M===ju)if(e.has(x)){const E=e.get(x).texture;return f(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const L=new $0(E.height);return L.fromEquirectangularTexture(s,x),e.set(x,L),x.addEventListener("dispose",m),f(L.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const M=x.mapping,E=M===Gu||M===ju,L=M===ns||M===qs;if(E||L){let w=t.get(x);const _=w!==void 0?w.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new Om(s)),w=E?r.fromEquirectangular(x,w):r.fromCubemap(x,w),w.texture.pmremVersion=x.pmremVersion,t.set(x,w),w.texture;if(w!==void 0)return w.texture;{const U=x.image;return E&&U&&U.height>0||L&&U&&p(U)?(r===null&&(r=new Om(s)),w=E?r.fromEquirectangular(x):r.fromCubemap(x),w.texture.pmremVersion=x.pmremVersion,t.set(x,w),x.addEventListener("dispose",y),w.texture):null}}}return x}function f(x,M){return M===Gu?x.mapping=ns:M===ju&&(x.mapping=qs),x}function p(x){let M=0;const E=6;for(let L=0;L<E;L++)x[L]!==void 0&&M++;return M===E}function m(x){const M=x.target;M.removeEventListener("dispose",m);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(x){const M=x.target;M.removeEventListener("dispose",y);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function Qb(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Xs("WebGLRenderer: "+r+" extension not supported."),o}}}function eS(s,e,t,r){const o={},c=new WeakMap;function d(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,t.memory.geometries++),x}function p(S){const x=S.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(S){const x=[],M=S.index,E=S.attributes.position;let L=0;if(E===void 0)return;if(M!==null){const U=M.array;L=M.version;for(let z=0,T=U.length;z<T;z+=3){const P=U[z+0],I=U[z+1],A=U[z+2];x.push(P,I,I,A,A,P)}}else{const U=E.array;L=E.version;for(let z=0,T=U.length/3-1;z<T;z+=3){const P=z+0,I=z+1,A=z+2;x.push(P,I,I,A,A,P)}}const w=new(E.count>=65535?z0:F0)(x,1);w.version=L;const _=c.get(S);_&&e.remove(_),c.set(S,w)}function y(S){const x=c.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&m(S)}else m(S);return c.get(S)}return{get:f,update:p,getWireframeAttribute:y}}function tS(s,e,t){let r;function o(S){r=S}let c,d;function f(S){c=S.type,d=S.bytesPerElement}function p(S,x){s.drawElements(r,x,c,S*d),t.update(x,r,1)}function m(S,x,M){M!==0&&(s.drawElementsInstanced(r,x,c,S*d,M),t.update(x,r,M))}function y(S,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,S,0,M);let L=0;for(let w=0;w<M;w++)L+=x[w];t.update(L,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=y}function nS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(c/3);break;case s.LINES:t.lines+=f*(c/2);break;case s.LINE_STRIP:t.lines+=f*(c-1);break;case s.LINE_LOOP:t.lines+=f*c;break;case s.POINTS:t.points+=f*c;break;default:Dt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function iS(s,e,t){const r=new WeakMap,o=new Qt;function c(d,f,p){const m=d.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let O=function(){b.dispose(),r.delete(f),f.removeEventListener("dispose",O)};var M=O;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,L=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let T=0;E===!0&&(T=1),L===!0&&(T=2),w===!0&&(T=3);let P=f.attributes.position.count*T,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*I*4*S),b=new U0(A,P,I,S);b.type=Ii,b.needsUpdate=!0;const R=T*4;for(let B=0;B<S;B++){const V=_[B],F=U[B],G=z[B],Y=P*I*4*B;for(let ie=0;ie<V.count;ie++){const Z=ie*R;E===!0&&(o.fromBufferAttribute(V,ie),A[Y+Z+0]=o.x,A[Y+Z+1]=o.y,A[Y+Z+2]=o.z,A[Y+Z+3]=0),L===!0&&(o.fromBufferAttribute(F,ie),A[Y+Z+4]=o.x,A[Y+Z+5]=o.y,A[Y+Z+6]=o.z,A[Y+Z+7]=0),w===!0&&(o.fromBufferAttribute(G,ie),A[Y+Z+8]=o.x,A[Y+Z+9]=o.y,A[Y+Z+10]=o.z,A[Y+Z+11]=G.itemSize===4?o.w:1)}}x={count:S,texture:b,size:new kt(P,I)},r.set(f,x),f.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let E=0;for(let w=0;w<m.length;w++)E+=m[w];const L=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",L),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function rS(s,e,t,r,o){let c=new WeakMap;function d(m){const y=o.render.frame,S=m.geometry,x=e.get(m,S);if(c.get(x)!==y&&(e.update(x),c.set(x,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==y&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,y))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return x}function f(){c=new WeakMap}function p(m){const y=m.target;y.removeEventListener("dispose",p),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:d,dispose:f}}const sS={[y0]:"LINEAR_TONE_MAPPING",[b0]:"REINHARD_TONE_MAPPING",[S0]:"CINEON_TONE_MAPPING",[w0]:"ACES_FILMIC_TONE_MAPPING",[E0]:"AGX_TONE_MAPPING",[T0]:"NEUTRAL_TONE_MAPPING",[M0]:"CUSTOM_TONE_MAPPING"};function aS(s,e,t,r,o,c){const d=new wi(e,t,{type:s,depthBuffer:o,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null;const m=new zi;m.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new oi([0,2,0,0,2,0],2));const y=new Z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Mi(m,y),x=new X0(-1,1,1,-1,0,1);let M=null,E=null,L=!1,w,_=null,U=[],z=!1;this.setSize=function(T,P){d.setSize(T,P),f!==null&&f.setSize(T,P),p!==null&&p.setSize(T,P);for(let I=0;I<U.length;I++){const A=U[I];A.setSize&&A.setSize(T,P)}},this.setEffects=function(T){U=T,z=U.length>0&&U[0].isRenderPass===!0;const P=d.width,I=d.height;U.length>0&&f===null&&(f=new wi(P,I,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),p=new wi(P,I,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<U.length;A++){const b=U[A];b.setSize&&b.setSize(P,I)}},this.begin=function(T,P){if(L||T.toneMapping===ki&&U.length===0)return!1;if(_=P,P!==null){const I=P.width,A=P.height;(d.width!==I||d.height!==A)&&this.setSize(I,A)}return z===!1&&T.setRenderTarget(d),w=T.toneMapping,T.toneMapping=ki,!0},this.hasRenderPass=function(){return z},this.end=function(T,P){T.toneMapping=w,L=!0;let I=d,A=f;for(let b=0;b<U.length;b++){const R=U[b];R.enabled!==!1&&(R.render(T,A,I,P),R.needsSwap!==!1&&(I=A,A=A===f?p:f))}if(M!==T.outputColorSpace||E!==T.toneMapping){M=T.outputColorSpace,E=T.toneMapping,y.defines={},Rt.getTransfer(M)===Gt&&(y.defines.SRGB_TRANSFER="");const b=sS[E];b&&(y.defines[b]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=I.texture,T.setRenderTarget(_),T.render(S,x),_=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),m.dispose(),y.dispose()}}const K0=new Cn,df=new Ka(1,1),Z0=new U0,J0=new A_,Q0=new j0,Gm=[],jm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Wm=new Float32Array(4);function Zs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let c=Gm[o];if(c===void 0&&(c=new Float32Array(o),Gm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(c,f)}return c}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function tc(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function oS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function cS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function uS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function dS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;Wm.set(r),s.uniformMatrix2fv(this.addr,!1,Wm),dn(t,r)}}function fS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),dn(t,r)}}function hS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),dn(t,r)}}function pS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function gS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function xS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function vS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function yS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function bS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function SS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(df.compareFunction=t.isReversedDepthBuffer()?Sf:bf,c=df):c=K0,t.setTexture2D(e||c,o)}function wS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||J0,o)}function MS(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Q0,o)}function ES(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Z0,o)}function TS(s){switch(s){case 5126:return oS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return xS;case 5125:return vS;case 36294:return _S;case 36295:return yS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return ES}}function AS(s,e){s.uniform1fv(this.addr,e)}function CS(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function RS(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function NS(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function PS(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LS(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IS(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function DS(s,e){s.uniform1iv(this.addr,e)}function kS(s,e){s.uniform2iv(this.addr,e)}function US(s,e){s.uniform3iv(this.addr,e)}function OS(s,e){s.uniform4iv(this.addr,e)}function FS(s,e){s.uniform1uiv(this.addr,e)}function zS(s,e){s.uniform2uiv(this.addr,e)}function BS(s,e){s.uniform3uiv(this.addr,e)}function GS(s,e){s.uniform4uiv(this.addr,e)}function jS(s,e,t){const r=this.cache,o=e.length,c=tc(t,o);un(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=df:d=K0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,c[f])}function HS(s,e,t){const r=this.cache,o=e.length,c=tc(t,o);un(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||J0,c[d])}function VS(s,e,t){const r=this.cache,o=e.length,c=tc(t,o);un(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Q0,c[d])}function WS(s,e,t){const r=this.cache,o=e.length,c=tc(t,o);un(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Z0,c[d])}function XS(s){switch(s){case 5126:return AS;case 35664:return CS;case 35665:return RS;case 35666:return NS;case 35674:return PS;case 35675:return LS;case 35676:return IS;case 5124:case 35670:return DS;case 35667:case 35671:return kS;case 35668:case 35672:return US;case 35669:case 35673:return OS;case 5125:return FS;case 36294:return zS;case 36295:return BS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return WS}}class YS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=TS(t.type)}}class qS{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XS(t.type)}}class $S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,t[f.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function Xm(s,e){s.seq.push(e),s.map[e.id]=e}function KS(s,e,t){const r=s.name,o=r.length;for(xd.lastIndex=0;;){const c=xd.exec(r),d=xd.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){Xm(t,m===void 0?new YS(f,s,e):new qS(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new $S(f),Xm(t,S)),t=S}}}class Ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);KS(f,p,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,d=t.length;c!==d;++c){const f=t[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function Ym(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const ZS=37297;let JS=0;function QS(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const qm=new vt;function ew(s){Rt._getMatrix(qm,Rt.workingColorSpace,s);const e=`mat3( ${qm.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $m(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+QS(s.getShaderSource(e),f)}else return c}function tw(s,e){const t=ew(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nw={[y0]:"Linear",[b0]:"Reinhard",[S0]:"Cineon",[w0]:"ACESFilmic",[E0]:"AgX",[T0]:"Neutral",[M0]:"Custom"};function iw(s,e){const t=nw[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new fe;function rw(){Rt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function aw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ow(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Va(s){return s!==""}function Km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(s){return s.replace(lw,uw)}const cw=new Map;function uw(s,e){let t=wt[e];if(t===void 0){const r=cw.get(e);if(r!==void 0)t=wt[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(t)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(dw,fw)}function fw(s,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Qm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hw={[Pl]:"SHADOWMAP_TYPE_PCF",[ja]:"SHADOWMAP_TYPE_VSM"};function pw(s){return hw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mw={[ns]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function gw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xw={[qs]:"ENVMAP_MODE_REFRACTION"};function vw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _w={[_0]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function yw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_w[s.combine]||"ENVMAP_BLENDING_NONE"}function bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Sw(s,e,t,r){const o=s.getContext(),c=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=pw(t),m=gw(t),y=vw(t),S=yw(t),x=bw(t),M=sw(t),E=aw(c),L=o.createProgram();let w,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Va).join(`
`),w.length>0&&(w+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Va).join(`
`),_.length>0&&(_+=`
`)):(w=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),_=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?wt.tonemapping_pars_fragment:"",t.toneMapping!==ki?iw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,tw("linearToOutputTexel",t.outputColorSpace),rw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),d=ff(d),d=Km(d,t),d=Zm(d,t),f=ff(f),f=Km(f,t),f=Zm(f,t),d=Jm(d),f=Jm(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,w=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,_=["#define varying in",t.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=U+w+d,T=U+_+f,P=Ym(o,o.VERTEX_SHADER,z),I=Ym(o,o.FRAGMENT_SHADER,T);o.attachShader(L,P),o.attachShader(L,I),t.index0AttributeName!==void 0?o.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(L,0,"position"),o.linkProgram(L);function A(B){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(L)||"",F=o.getShaderInfoLog(P)||"",G=o.getShaderInfoLog(I)||"",Y=V.trim(),ie=F.trim(),Z=G.trim();let X=!0,j=!0;if(o.getProgramParameter(L,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,L,P,I);else{const H=$m(o,P,"vertex"),D=$m(o,I,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(L,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+H+`
`+D)}else Y!==""?gt("WebGLProgram: Program Info Log:",Y):(ie===""||Z==="")&&(j=!1);j&&(B.diagnostics={runnable:X,programLog:Y,vertexShader:{log:ie,prefix:w},fragmentShader:{log:Z,prefix:_}})}o.deleteShader(P),o.deleteShader(I),b=new Ul(o,L),R=ow(o,L)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(L,ZS)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=P,this.fragmentShader=I,this}let ww=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Ew(e),t.set(e,r)),r}}class Ew{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Tw(s){return s===is||s===Bl||s===Gl}function Aw(s,e,t,r,o,c){const d=new Mf,f=new Mw,p=new Set,m=[],y=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return p.add(b),b===0?"uv":`uv${b}`}function L(b,R,O,B,V,F){const G=B.fog,Y=V.geometry,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,X=e.get(b.envMap||ie,Z),j=X&&X.mapping===Zl?X.image.height:null,H=M[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&gt("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=D!==void 0?D.length:0;let ve=0;Y.morphAttributes.position!==void 0&&(ve=1),Y.morphAttributes.normal!==void 0&&(ve=2),Y.morphAttributes.color!==void 0&&(ve=3);let Re,Ne,Ue,ae;if(H){const Lt=Li[H];Re=Lt.vertexShader,Ne=Lt.fragmentShader}else{Re=b.vertexShader,Ne=b.fragmentShader;const Lt=f.getVertexShaderStage(b),Et=f.getFragmentShaderStage(b);f.update(b,Lt,Et),Ue=Lt.id,ae=Et.id}const ce=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ve=V.isInstancedMesh===!0,Oe=V.isBatchedMesh===!0,dt=!!b.map,Pt=!!b.matcap,ot=!!X,_t=!!b.aoMap,bt=!!b.lightMap,ht=!!b.bumpMap&&b.wireframe===!1,Tt=!!b.normalMap,de=!!b.displacementMap,lt=!!b.emissiveMap,nt=!!b.metalnessMap,at=!!b.roughnessMap,K=b.anisotropy>0,Ae=b.clearcoat>0,We=b.dispersion>0,k=b.retroreflectivity>0,v=b.iridescence>0,ee=b.sheen>0,ne=b.transmission>0,he=K&&!!b.anisotropyMap,we=Ae&&!!b.clearcoatMap,Ce=Ae&&!!b.clearcoatNormalMap,ge=Ae&&!!b.clearcoatRoughnessMap,xe=v&&!!b.iridescenceMap,Ie=v&&!!b.iridescenceThicknessMap,Qe=ee&&!!b.sheenColorMap,De=ee&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,et=!!b.specularColorMap,tt=!!b.specularIntensityMap,ft=ne&&!!b.transmissionMap,$=ne&&!!b.thicknessMap,ke=!!b.gradientMap,_e=!!b.alphaMap,Le=b.alphaTest>0,ze=!!b.alphaHash,ye=!!b.extensions;let Ke=ki;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const $e={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Ne,defines:b.defines,customVertexShaderID:Ue,customFragmentShaderID:ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Oe,batchingColor:Oe&&V._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&V.instanceColor!==null,instancingMorph:Ve&&V.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:Pt,envMap:ot,envMapMode:ot&&X.mapping,envMapCubeUVHeight:j,aoMap:_t,lightMap:bt,bumpMap:ht,normalMap:Tt,displacementMap:de,emissiveMap:lt,normalMapObjectSpace:Tt&&b.normalMapType===l_,normalMapTangentSpace:Tt&&b.normalMapType===dm,packedNormalMap:Tt&&b.normalMapType===dm&&Tw(b.normalMap.format),metalnessMap:nt,roughnessMap:at,anisotropy:K,anisotropyMap:he,clearcoat:Ae,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ge,dispersion:We,retroreflection:k,iridescence:v,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:ee,sheenColorMap:Qe,sheenRoughnessMap:De,specularMap:Pe,specularColorMap:et,specularIntensityMap:tt,transmission:ne,transmissionMap:ft,thicknessMap:$,gradientMap:ke,opaque:b.transparent===!1&&b.blending===Wa&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:Le,alphaHash:ze,combine:b.combine,mapUv:dt&&E(b.map.channel),aoMapUv:_t&&E(b.aoMap.channel),lightMapUv:bt&&E(b.lightMap.channel),bumpMapUv:ht&&E(b.bumpMap.channel),normalMapUv:Tt&&E(b.normalMap.channel),displacementMapUv:de&&E(b.displacementMap.channel),emissiveMapUv:lt&&E(b.emissiveMap.channel),metalnessMapUv:nt&&E(b.metalnessMap.channel),roughnessMapUv:at&&E(b.roughnessMap.channel),anisotropyMapUv:he&&E(b.anisotropyMap.channel),clearcoatMapUv:we&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&E(b.sheenRoughnessMap.channel),specularMapUv:Pe&&E(b.specularMap.channel),specularColorMapUv:et&&E(b.specularColorMap.channel),specularIntensityMapUv:tt&&E(b.specularIntensityMap.channel),transmissionMapUv:ft&&E(b.transmissionMap.channel),thicknessMapUv:$&&E(b.thicknessMap.channel),alphaMapUv:_e&&E(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Tt||K),vertexNormals:!!Y.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(dt||_e),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Y.attributes.normal===void 0&&Tt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:be,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ve,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Gt,decodeVideoTextureEmissive:lt&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tr,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function w(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)R.push(O),R.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(_(R,b),U(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function _(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numSunLights),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numSunLightShadows),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function U(b,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.retroreflection&&d.enable(24),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),R.packedNormalMap&&d.enable(22),R.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),R.numLightProbeGrids>0&&d.enable(22),R.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function z(b){const R=M[b.type];let O;if(R){const B=Li[R];O=q_.clone(B.uniforms)}else O=b.uniforms;return O}function T(b,R){let O=y.get(R);return O!==void 0?++O.usedTimes:(O=new Sw(s,R,b,o),m.push(O),y.set(R,O)),O}function P(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),y.delete(b.cacheKey),b.destroy()}}function I(b){f.remove(b)}function A(){f.dispose()}return{getParameters:L,getProgramCacheKey:w,getUniforms:z,acquireProgram:T,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:A}}function Cw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:c}}function Rw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function t0(){const s=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function f(x,M,E,L,w,_){let U=s[e];return U===void 0?(U={id:x.id,object:x,geometry:M,material:E,materialVariant:d(x),groupOrder:L,renderOrder:x.renderOrder,z:w,group:_},s[e]=U):(U.id=x.id,U.object=x,U.geometry=M,U.material=E,U.materialVariant=d(x),U.groupOrder=L,U.renderOrder=x.renderOrder,U.z=w,U.group=_),e++,U}function p(x,M,E,L,w,_,U){U.reversedDepth===!0&&(w=-w);const z=f(x,M,E,L,w,_);E.transmission>0?r.push(z):E.transparent===!0?o.push(z):t.push(z)}function m(x,M,E,L,w,_){const U=f(x,M,E,L,w,_);E.transmission>0?r.unshift(U):E.transparent===!0?o.unshift(U):t.unshift(U)}function y(x,M){t.length>1&&t.sort(x||Rw),r.length>1&&r.sort(M||e0),o.length>1&&o.sort(M||e0)}function S(){for(let x=e,M=s.length;x<M;x++){const E=s[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:p,unshift:m,finish:S,sort:y}}function Nw(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new t0,s.set(r,[d])):o>=c.length?(d=new t0,c.push(d)):d=c[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new fe,color:new zt};break;case"SpotLight":t={position:new fe,direction:new fe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=t,t}}}function Lw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Iw=0;function Dw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kw(s){const e=new Pw,t=Lw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new fe);const o=new fe,c=new nn,d=new nn;function f(m){let y=0,S=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let M=0,E=0,L=0,w=0,_=0,U=0,z=0,T=0,P=0,I=0,A=0,b=0,R=0,O=0;m.sort(Dw);for(let V=0,F=m.length;V<F;V++){const G=m[V],Y=G.color,ie=G.intensity,Z=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===is?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)y+=Y.r*ie,S+=Y.g*ie,x+=Y.b*ie;else if(G.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(G.sh.coefficients[j],ie);O++}else if(G.isSunLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,D=t.get(G);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),r.sunShadow[E]=D,r.sunShadowMap[E]=X;const Q=H.getViewportCount();for(let ve=0;ve<Q;ve++)r.sunShadowMatrix[L+ve]=H.getMatrix(ve),r.sunShadowCascade[L+ve]=H._cascadeData[ve];L+=Q,E++}r.sun[M]=j,M++}else if(G.isDirectionalLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,D=t.get(G);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.directionalShadow[w]=D,r.directionalShadowMap[w]=X,r.directionalShadowMatrix[w]=G.shadow.matrix,P++}r.directional[w]=j,w++}else if(G.isSpotLight){const j=e.get(G);j.position.setFromMatrixPosition(G.matrixWorld),j.color.copy(Y).multiplyScalar(ie),j.distance=Z,j.coneCos=Math.cos(G.angle),j.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),j.decay=G.decay,r.spot[U]=j;const H=G.shadow;if(G.map&&(r.spotLightMap[b]=G.map,b++,H.updateMatrices(G),G.castShadow&&R++),r.spotLightMatrix[U]=H.matrix,G.castShadow){const D=t.get(G);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.spotShadow[U]=D,r.spotShadowMap[U]=X,A++}U++}else if(G.isRectAreaLight){const j=e.get(G);j.color.copy(Y).multiplyScalar(ie),j.halfWidth.set(G.width*.5,0,0),j.halfHeight.set(0,G.height*.5,0),r.rectArea[z]=j,z++}else if(G.isPointLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),j.distance=G.distance,j.decay=G.decay,G.castShadow){const H=G.shadow,D=t.get(G);D.shadowIntensity=H.intensity,D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=X,r.pointShadowMatrix[_]=G.shadow.matrix,I++}r.point[_]=j,_++}else if(G.isHemisphereLight){const j=e.get(G);j.skyColor.copy(G.color).multiplyScalar(ie),j.groundColor.copy(G.groundColor).multiplyScalar(ie),r.hemi[T]=j,T++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=S,r.ambient[2]=x;const B=r.hash;(B.sunLength!==M||B.directionalLength!==w||B.pointLength!==_||B.spotLength!==U||B.rectAreaLength!==z||B.hemiLength!==T||B.numSunShadows!==E||B.numDirectionalShadows!==P||B.numPointShadows!==I||B.numSpotShadows!==A||B.numSpotMaps!==b||B.numLightProbes!==O)&&(r.sun.length=M,r.directional.length=w,r.spot.length=U,r.rectArea.length=z,r.point.length=_,r.hemi.length=T,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=L,r.sunShadowCascade.length=L,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+b-R,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=O,B.sunLength=M,B.directionalLength=w,B.pointLength=_,B.spotLength=U,B.rectAreaLength=z,B.hemiLength=T,B.numSunShadows=E,B.numDirectionalShadows=P,B.numPointShadows=I,B.numSpotShadows=A,B.numSpotMaps=b,B.numLightProbes=O,r.version=Iw++)}function p(m,y){let S=0,x=0,M=0,E=0,L=0,w=0;const _=y.matrixWorldInverse;for(let U=0,z=m.length;U<z;U++){const T=m[U];if(T.isSunLight){const P=r.sun[S];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(_),S++}else if(T.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),x++}else if(T.isSpotLight){const P=r.spot[E];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),E++}else if(T.isRectAreaLight){const P=r.rectArea[L];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),d.identity(),c.copy(T.matrixWorld),c.premultiply(_),d.extractRotation(c),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),L++}else if(T.isPointLight){const P=r.point[M];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(_),M++}else if(T.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(_),w++}}}return{setup:f,setupView:p,state:r}}function n0(s){const e=new kw(s),t=[],r=[],o=[];function c(x){S.camera=x,t.length=0,r.length=0,o.length=0}function d(x){t.push(x)}function f(x){r.push(x)}function p(x){o.push(x)}function m(){e.setup(t)}function y(x){e.setupView(t,x)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:m,setupLightsView:y,pushLight:d,pushShadow:f,pushLightProbeGrid:p}}function Uw(s){let e=new WeakMap;function t(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new n0(s),e.set(o,[f])):c>=d.length?(f=new n0(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zw=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],Bw=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],i0=new nn,Ga=new fe,vd=new fe;function Gw(s,e,t){let r=new G0;const o=new kt,c=new kt,d=new Qt,f=new J_,p=new Q_,m={},y=t.maxTextureSize,S={[Lr]:Bn,[Bn]:Lr,[tr]:tr},x=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Ow,fragmentShader:Fw}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Mi(E,x),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let _=this.type;this.render=function(I,A,b){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||I.length===0)return;this.type===zv&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pl);const R=s.getRenderTarget(),O=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ir),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=_!==this.type;F&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Y=>Y.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Y=I.length;G<Y;G++){const ie=I[G],Z=ie.shadow;if(Z===void 0){gt("WebGLShadowMap:",ie,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const X=Z.getFrameExtents();o.multiply(X),c.copy(Z.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(c.x=Math.floor(y/X.x),o.x=c.x*X.x,Z.mapSize.x=c.x),o.y>y&&(c.y=Math.floor(y/X.y),o.y=c.y*X.y,Z.mapSize.y=c.y));const j=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=j,Z.map===null||F===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ja){if(ie.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new wi(o.x,o.y,{format:is,type:Oi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),Z.map.texture.name=ie.name+".shadowMap",Z.map.depthTexture=new Ka(o.x,o.y,Ii),Z.map.depthTexture.name=ie.name+".shadowMapDepth",Z.map.depthTexture.format=ar,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=yn,Z.map.depthTexture.magFilter=yn}else ie.isPointLight?(Z.map=new $0(o.x),Z.map.depthTexture=new X_(o.x,Ui)):(Z.map=new wi(o.x,o.y),Z.map.depthTexture=new Ka(o.x,o.y,Ui)),Z.map.depthTexture.name=ie.name+".shadowMap",Z.map.depthTexture.format=ar,this.type===Pl?(Z.map.depthTexture.compareFunction=j?Sf:bf,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=yn,Z.map.depthTexture.magFilter=yn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==o.x||Z.map.height!==o.y)&&Z.map.setSize(o.x,o.y);const H=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();ie.isPointLight!==!0&&Z.updateMatrices(ie,b);for(let D=0;D<H;D++){const Q=Z.getCamera(D);if(ie.isPointLight){const ve=Z.camera,Re=Z.matrix,Ne=ie.distance||ve.far;Ne!==ve.far&&(ve.far=Ne,ve.updateProjectionMatrix()),Ga.setFromMatrixPosition(ie.matrixWorld),ve.position.copy(Ga),vd.copy(ve.position),vd.add(zw[D]),ve.up.copy(Bw[D]),ve.lookAt(vd),ve.updateMatrixWorld(),Re.makeTranslation(-Ga.x,-Ga.y,-Ga.z),i0.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(i0,ve.coordinateSystem,ve.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,D),s.clear();else{D===0&&(s.setRenderTarget(Z.map),s.clear());const ve=Z.getViewport(D);d.set(c.x*ve.x,c.y*ve.y,c.x*ve.z,c.y*ve.w),V.viewport(d)}r=Z.getFrustum(D),T(A,b,Q,ie,this.type)}Z.isPointLightShadow!==!0&&this.type===ja&&U(Z,b),Z.needsUpdate=!1}_=this.type,w.needsUpdate=!1,s.setRenderTarget(R,O,B)};function U(I,A){const b=e.update(L);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new wi(o.x,o.y,{format:is,type:Oi}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(A,null,b,x,L,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(A,null,b,M,L,null)}function z(I,A,b,R){let O=null;const B=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)O=B;else if(O=b.isPointLight===!0?p:f,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const V=O.uuid,F=A.uuid;let G=m[V];G===void 0&&(G={},m[V]=G);let Y=G[F];Y===void 0&&(Y=O.clone(),G[F]=Y,A.addEventListener("dispose",P)),O=Y}if(O.visible=A.visible,O.wireframe=A.wireframe,R===ja?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:S[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,b.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const V=s.properties.get(O);V.light=b}return O}function T(I,A,b,R,O){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&O===ja)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const F=e.update(I),G=I.material;if(Array.isArray(G)){const Y=F.groups;for(let ie=0,Z=Y.length;ie<Z;ie++){const X=Y[ie],j=G[X.materialIndex];if(j&&j.visible){const H=z(I,j,R,O);I.onBeforeShadow(s,I,A,b,F,H,X),s.renderBufferDirect(b,null,F,H,I,X),I.onAfterShadow(s,I,A,b,F,H,X)}}}else if(G.visible){const Y=z(I,G,R,O);I.onBeforeShadow(s,I,A,b,F,Y,null),s.renderBufferDirect(b,null,F,Y,I,null),I.onAfterShadow(s,I,A,b,F,Y,null)}}const V=I.children;for(let F=0,G=V.length;F<G;F++)T(V[F],A,b,R,O)}function P(I){I.target.removeEventListener("dispose",P);for(const b in m){const R=m[b],O=I.target.uuid;O in R&&(R[O].dispose(),delete R[O])}}}function jw(s,e){function t(){let $=!1;const ke=new Qt;let _e=null;const Le=new Qt(0,0,0,0);return{setMask:function(ze){_e!==ze&&!$&&(s.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){$=ze},setClear:function(ze,ye,Ke,$e,Lt){Lt===!0&&(ze*=$e,ye*=$e,Ke*=$e),ke.set(ze,ye,Ke,$e),Le.equals(ke)===!1&&(s.clearColor(ze,ye,Ke,$e),Le.copy(ke))},reset:function(){$=!1,_e=null,Le.set(-1,0,0,0)}}}function r(){let $=!1,ke=!1,_e=null,Le=null,ze=null;return{setReversed:function(ye){if(ke!==ye){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),ke=ye;const $e=ze;ze=null,this.setClear($e)}},getReversed:function(){return ke},setTest:function(ye){ye?ce(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(ye){_e!==ye&&!$&&(s.depthMask(ye),_e=ye)},setFunc:function(ye){if(ke&&(ye=y_[ye]),Le!==ye){switch(ye){case wd:s.depthFunc(s.NEVER);break;case Md:s.depthFunc(s.ALWAYS);break;case Ed:s.depthFunc(s.LESS);break;case Ya:s.depthFunc(s.LEQUAL);break;case Td:s.depthFunc(s.EQUAL);break;case Ad:s.depthFunc(s.GEQUAL);break;case Cd:s.depthFunc(s.GREATER);break;case Rd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=ye}},setLocked:function(ye){$=ye},setClear:function(ye){ze!==ye&&(ze=ye,ke&&(ye=1-ye),s.clearDepth(ye))},reset:function(){$=!1,_e=null,Le=null,ze=null,ke=!1}}}function o(){let $=!1,ke=null,_e=null,Le=null,ze=null,ye=null,Ke=null,$e=null,Lt=null;return{setTest:function(Et){$||(Et?ce(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Et){ke!==Et&&!$&&(s.stencilMask(Et),ke=Et)},setFunc:function(Et,an,fn){(_e!==Et||Le!==an||ze!==fn)&&(s.stencilFunc(Et,an,fn),_e=Et,Le=an,ze=fn)},setOp:function(Et,an,fn){(ye!==Et||Ke!==an||$e!==fn)&&(s.stencilOp(Et,an,fn),ye=Et,Ke=an,$e=fn)},setLocked:function(Et){$=Et},setClear:function(Et){Lt!==Et&&(s.clearStencil(Et),Lt=Et)},reset:function(){$=!1,ke=null,_e=null,Le=null,ze=null,ye=null,Ke=null,$e=null,Lt=null}}}const c=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let y={},S={},x={},M=new WeakMap,E=[],L=null,w=!1,_=null,U=null,z=null,T=null,P=null,I=null,A=null,b=new zt(0,0,0),R=0,O=!1,B=null,V=null,F=null,G=null,Y=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=X>=2);let H=null,D={};const Q=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Re=new Qt().fromArray(Q),Ne=new Qt().fromArray(ve);function Ue($,ke,_e,Le){const ze=new Uint8Array(4),ye=s.createTexture();s.bindTexture($,ye),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<_e;Ke++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(ke,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(ke+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return ye}const ae={};ae[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ce(s.DEPTH_TEST),d.setFunc(Ya),ht(!1),Tt(om),ce(s.CULL_FACE),_t(ir);function ce($){y[$]!==!0&&(s.enable($),y[$]=!0)}function be($){y[$]!==!1&&(s.disable($),y[$]=!1)}function Ve($,ke){return x[$]!==ke?(s.bindFramebuffer($,ke),x[$]=ke,$===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=ke),$===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=ke),!0):!1}function Oe($,ke){let _e=E,Le=!1;if($){_e=M.get(ke),_e===void 0&&(_e=[],M.set(ke,_e));const ze=$.textures;if(_e.length!==ze.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ke=ze.length;ye<Ke;ye++)_e[ye]=s.COLOR_ATTACHMENT0+ye;_e.length=ze.length,Le=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Le=!0);Le&&s.drawBuffers(_e)}function dt($){return L!==$?(s.useProgram($),L=$,!0):!1}const Pt={[Vs]:s.FUNC_ADD,[Gv]:s.FUNC_SUBTRACT,[jv]:s.FUNC_REVERSE_SUBTRACT};Pt[Hv]=s.MIN,Pt[Vv]=s.MAX;const ot={[Wv]:s.ZERO,[Xv]:s.ONE,[Yv]:s.SRC_COLOR,[x0]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[$v]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[v0]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function _t($,ke,_e,Le,ze,ye,Ke,$e,Lt,Et){if($===ir){w===!0&&(be(s.BLEND),w=!1);return}if(w===!1&&(ce(s.BLEND),w=!0),$!==Bv){if($!==_||Et!==O){if((U!==Vs||P!==Vs)&&(s.blendEquation(s.FUNC_ADD),U=Vs,P=Vs),Et)switch($){case Wa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lm:s.blendFunc(s.ONE,s.ONE);break;case cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case um:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",$);break}else switch($){case Wa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",$);break}z=null,T=null,I=null,A=null,b.set(0,0,0),R=0,_=$,O=Et}return}ze=ze||ke,ye=ye||_e,Ke=Ke||Le,(ke!==U||ze!==P)&&(s.blendEquationSeparate(Pt[ke],Pt[ze]),U=ke,P=ze),(_e!==z||Le!==T||ye!==I||Ke!==A)&&(s.blendFuncSeparate(ot[_e],ot[Le],ot[ye],ot[Ke]),z=_e,T=Le,I=ye,A=Ke),($e.equals(b)===!1||Lt!==R)&&(s.blendColor($e.r,$e.g,$e.b,Lt),b.copy($e),R=Lt),_=$,O=!1}function bt($,ke){$.side===tr?be(s.CULL_FACE):ce(s.CULL_FACE);let _e=$.side===Bn;ke&&(_e=!_e),ht(_e),$.blending===Wa&&$.transparent===!1?_t(ir):_t($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),c.setMask($.colorWrite);const Le=$.stencilWrite;f.setTest(Le),Le&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),lt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht($){B!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),B=$)}function Tt($){$!==Ov?(ce(s.CULL_FACE),$!==V&&($===om?s.cullFace(s.BACK):$===Fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),V=$}function de($){$!==F&&(Z&&s.lineWidth($),F=$)}function lt($,ke,_e){$?(ce(s.POLYGON_OFFSET_FILL),(G!==ke||Y!==_e)&&(G=ke,Y=_e,d.getReversed()&&(ke=-ke),s.polygonOffset(ke,_e))):be(s.POLYGON_OFFSET_FILL)}function nt($){$?ce(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function at($){$===void 0&&($=s.TEXTURE0+ie-1),H!==$&&(s.activeTexture($),H=$)}function K($,ke,_e){_e===void 0&&(H===null?_e=s.TEXTURE0+ie-1:_e=H);let Le=D[_e];Le===void 0&&(Le={type:void 0,texture:void 0},D[_e]=Le),(Le.type!==$||Le.texture!==ke)&&(H!==_e&&(s.activeTexture(_e),H=_e),s.bindTexture($,ke||ae[$]),Le.type=$,Le.texture=ke)}function Ae(){const $=D[H];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function We(){try{s.compressedTexImage2D(...arguments)}catch($){Dt("WebGLState:",$)}}function k(){try{s.compressedTexImage3D(...arguments)}catch($){Dt("WebGLState:",$)}}function v(){try{s.texSubImage2D(...arguments)}catch($){Dt("WebGLState:",$)}}function ee(){try{s.texSubImage3D(...arguments)}catch($){Dt("WebGLState:",$)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch($){Dt("WebGLState:",$)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch($){Dt("WebGLState:",$)}}function we(){try{s.texStorage2D(...arguments)}catch($){Dt("WebGLState:",$)}}function Ce(){try{s.texStorage3D(...arguments)}catch($){Dt("WebGLState:",$)}}function ge(){try{s.texImage2D(...arguments)}catch($){Dt("WebGLState:",$)}}function xe(){try{s.texImage3D(...arguments)}catch($){Dt("WebGLState:",$)}}function Ie($){return S[$]!==void 0?S[$]:s.getParameter($)}function Qe($,ke){S[$]!==ke&&(s.pixelStorei($,ke),S[$]=ke)}function De($){Re.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Re.copy($))}function Pe($){Ne.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Ne.copy($))}function et($,ke){let _e=m.get(ke);_e===void 0&&(_e=new WeakMap,m.set(ke,_e));let Le=_e.get($);Le===void 0&&(Le=s.getUniformBlockIndex(ke,$.name),_e.set($,Le))}function tt($,ke){const Le=m.get(ke).get($);p.get(ke)!==Le&&(s.uniformBlockBinding(ke,Le,$.__bindingPointIndex),p.set(ke,Le))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},S={},H=null,D={},x={},M=new WeakMap,E=[],L=null,w=!1,_=null,U=null,z=null,T=null,P=null,I=null,A=null,b=new zt(0,0,0),R=0,O=!1,B=null,V=null,F=null,G=null,Y=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:ce,disable:be,bindFramebuffer:Ve,drawBuffers:Oe,useProgram:dt,setBlending:_t,setMaterial:bt,setFlipSided:ht,setCullFace:Tt,setLineWidth:de,setPolygonOffset:lt,setScissorTest:nt,activeTexture:at,bindTexture:K,unbindTexture:Ae,compressedTexImage2D:We,compressedTexImage3D:k,texImage2D:ge,texImage3D:xe,pixelStorei:Qe,getParameter:Ie,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:we,texStorage3D:Ce,texSubImage2D:v,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:De,viewport:Pe,reset:ft}}function Hw(s,e,t,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,y=new WeakMap,S=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(k,v){return E?new OffscreenCanvas(k,v):Wl("canvas")}function w(k,v,ee){let ne=1;const he=We(k);if((he.width>ee||he.height>ee)&&(ne=ee/Math.max(he.width,he.height)),ne<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const we=Math.floor(ne*he.width),Ce=Math.floor(ne*he.height);x===void 0&&(x=L(we,Ce));const ge=v?L(we,Ce):x;return ge.width=we,ge.height=Ce,ge.getContext("2d").drawImage(k,0,0,we,Ce),gt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+we+"x"+Ce+")."),ge}else return"data"in k&&gt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),k;return k}function _(k){return k.generateMipmaps}function U(k){s.generateMipmap(k)}function z(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(k,v,ee,ne,he,we=!1){if(k!==null){if(s[k]!==void 0)return s[k];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ce;ne&&(Ce=e.get("EXT_texture_norm16"),Ce||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=v;if(v===s.RED&&(ee===s.FLOAT&&(ge=s.R32F),ee===s.HALF_FLOAT&&(ge=s.R16F),ee===s.UNSIGNED_BYTE&&(ge=s.R8),ee===s.UNSIGNED_SHORT&&Ce&&(ge=Ce.R16_EXT),ee===s.SHORT&&Ce&&(ge=Ce.R16_SNORM_EXT)),v===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.R8UI),ee===s.UNSIGNED_SHORT&&(ge=s.R16UI),ee===s.UNSIGNED_INT&&(ge=s.R32UI),ee===s.BYTE&&(ge=s.R8I),ee===s.SHORT&&(ge=s.R16I),ee===s.INT&&(ge=s.R32I)),v===s.RG&&(ee===s.FLOAT&&(ge=s.RG32F),ee===s.HALF_FLOAT&&(ge=s.RG16F),ee===s.UNSIGNED_BYTE&&(ge=s.RG8),ee===s.UNSIGNED_SHORT&&Ce&&(ge=Ce.RG16_EXT),ee===s.SHORT&&Ce&&(ge=Ce.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RG16UI),ee===s.UNSIGNED_INT&&(ge=s.RG32UI),ee===s.BYTE&&(ge=s.RG8I),ee===s.SHORT&&(ge=s.RG16I),ee===s.INT&&(ge=s.RG32I)),v===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),ee===s.UNSIGNED_INT&&(ge=s.RGB32UI),ee===s.BYTE&&(ge=s.RGB8I),ee===s.SHORT&&(ge=s.RGB16I),ee===s.INT&&(ge=s.RGB32I)),v===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ge=s.RGBA32UI),ee===s.BYTE&&(ge=s.RGBA8I),ee===s.SHORT&&(ge=s.RGBA16I),ee===s.INT&&(ge=s.RGBA32I)),v===s.RGB&&(ee===s.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGB16_EXT),ee===s.SHORT&&Ce&&(ge=Ce.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),v===s.RGBA){const xe=we?Hl:Rt.getTransfer(he);ee===s.FLOAT&&(ge=s.RGBA32F),ee===s.HALF_FLOAT&&(ge=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ge=xe===Gt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGBA16_EXT),ee===s.SHORT&&Ce&&(ge=Ce.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function P(k,v){let ee;return k?v===null||v===Ui||v===$a?ee=s.DEPTH24_STENCIL8:v===Ii?ee=s.DEPTH32F_STENCIL8:v===qa&&(ee=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ui||v===$a?ee=s.DEPTH_COMPONENT24:v===Ii?ee=s.DEPTH_COMPONENT32F:v===qa&&(ee=s.DEPTH_COMPONENT16),ee}function I(k,v){return _(k)===!0||k.isFramebufferTexture&&k.minFilter!==yn&&k.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?v.mipmaps.length:1}function A(k){const v=k.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&y.delete(v),v.isHTMLTexture&&S.delete(v)}function b(k){const v=k.target;v.removeEventListener("dispose",b),B(v)}function R(k){const v=r.get(k);if(v.__webglInit===void 0)return;const ee=k.source,ne=M.get(ee);if(ne){const he=ne[v.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(k),Object.keys(ne).length===0&&M.delete(ee)}r.remove(k)}function O(k){const v=r.get(k);s.deleteTexture(v.__webglTexture);const ee=k.source,ne=M.get(ee);delete ne[v.__cacheKey],d.memory.textures--}function B(k){const v=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let he=0;he<v.__webglFramebuffer[ne].length;he++)s.deleteFramebuffer(v.__webglFramebuffer[ne][he]);else s.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)s.deleteFramebuffer(v.__webglFramebuffer[ne]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ee=k.textures;for(let ne=0,he=ee.length;ne<he;ne++){const we=r.get(ee[ne]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),d.memory.textures--),r.remove(ee[ne])}r.remove(k)}let V=0;function F(){V=0}function G(){return V}function Y(k){V=k}function ie(){const k=V;return k>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),V+=1,k}function Z(k){const v=[];return v.push(k.wrapS),v.push(k.wrapT),v.push(k.wrapR||0),v.push(k.magFilter),v.push(k.minFilter),v.push(k.anisotropy),v.push(k.internalFormat),v.push(k.format),v.push(k.type),v.push(k.generateMipmaps),v.push(k.premultiplyAlpha),v.push(k.flipY),v.push(k.unpackAlignment),v.push(k.colorSpace),v.join()}function X(k,v){const ee=r.get(k);if(k.isVideoTexture&&K(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&ee.__version!==k.version){const ne=k.image;if(ne===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(ee,k,v);return}}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+v)}function j(k,v){const ee=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){be(ee,k,v);return}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+v)}function H(k,v){const ee=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){be(ee,k,v);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+v)}function D(k,v){const ee=r.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&ee.__version!==k.version){Ve(ee,k,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+v)}const Q={[Nd]:s.REPEAT,[nr]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},ve={[yn]:s.NEAREST,[a_]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Hu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},Re={[u_]:s.NEVER,[m_]:s.ALWAYS,[d_]:s.LESS,[bf]:s.LEQUAL,[f_]:s.EQUAL,[Sf]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function Ne(k,v){if(v.type===Ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===Hu||v.magFilter===cl||v.magFilter===es||v.minFilter===xn||v.minFilter===Hu||v.minFilter===cl||v.minFilter===es)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,Q[v.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,Q[v.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,Q[v.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,ve[v.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yn||v.minFilter!==cl&&v.minFilter!==es||v.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,o.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function Ue(k,v){let ee=!1;k.__webglInit===void 0&&(k.__webglInit=!0,v.addEventListener("dispose",A));const ne=v.source;let he=M.get(ne);he===void 0&&(he={},M.set(ne,he));const we=Z(v);if(we!==k.__cacheKey){he[we]===void 0&&(he[we]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),he[we].usedTimes++;const Ce=he[k.__cacheKey];Ce!==void 0&&(he[k.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(v)),k.__cacheKey=we,k.__webglTexture=he[we].texture}return ee}function ae(k,v,ee){return Math.floor(Math.floor(k/ee)/v)}function ce(k,v,ee,ne){const we=k.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,ee,ne,v.data);else{we.sort((Qe,De)=>Qe.start-De.start);let Ce=0;for(let Qe=1;Qe<we.length;Qe++){const De=we[Ce],Pe=we[Qe],et=De.start+De.count,tt=ae(Pe.start,v.width,4),ft=ae(De.start,v.width,4);Pe.start<=et+1&&tt===ft&&ae(Pe.start+Pe.count-1,v.width,4)===tt?De.count=Math.max(De.count,Pe.start+Pe.count-De.start):(++Ce,we[Ce]=Pe)}we.length=Ce+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Qe=0,De=we.length;Qe<De;Qe++){const Pe=we[Qe],et=Math.floor(Pe.start/4),tt=Math.ceil(Pe.count/4),ft=et%v.width,$=Math.floor(et/v.width),ke=tt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(s.UNPACK_SKIP_ROWS,$),t.texSubImage2D(s.TEXTURE_2D,0,ft,$,ke,_e,ee,ne,v.data)}k.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function be(k,v,ee){let ne=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=s.TEXTURE_3D);const he=Ue(k,v),we=v.source;t.bindTexture(ne,k.__webglTexture,s.TEXTURE0+ee);const Ce=r.get(we);if(we.version!==Ce.__version||he===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const _e=Rt.getPrimaries(Rt.workingColorSpace),Le=v.colorSpace===Pr?null:Rt.getPrimaries(v.colorSpace),ze=v.colorSpace===Pr||_e===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let xe=w(v.image,!1,o.maxTextureSize);xe=Ae(v,xe);const Ie=c.convert(v.format,v.colorSpace),Qe=c.convert(v.type);let De=T(v.internalFormat,Ie,Qe,v.normalized,v.colorSpace,v.isVideoTexture);Ne(ne,v);let Pe;const et=v.mipmaps,tt=v.isVideoTexture!==!0,ft=Ce.__version===void 0||he===!0,$=we.dataReady,ke=I(v,xe);if(v.isDepthTexture)De=P(v.format===ts,v.type),ft&&(tt?t.texStorage2D(s.TEXTURE_2D,1,De,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,De,xe.width,xe.height,0,Ie,Qe,null));else if(v.isDataTexture)if(et.length>0){tt&&ft&&t.texStorage2D(s.TEXTURE_2D,ke,De,et[0].width,et[0].height);for(let _e=0,Le=et.length;_e<Le;_e++)Pe=et[_e],tt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ie,Qe,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Ie,Qe,Pe.data);v.generateMipmaps=!1}else tt?(ft&&t.texStorage2D(s.TEXTURE_2D,ke,De,xe.width,xe.height),$&&ce(v,xe,Ie,Qe)):t.texImage2D(s.TEXTURE_2D,0,De,xe.width,xe.height,0,Ie,Qe,xe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){tt&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,De,et[0].width,et[0].height,xe.depth);for(let _e=0,Le=et.length;_e<Le;_e++)if(Pe=et[_e],v.format!==Si)if(Ie!==null)if(tt){if($)if(v.layerUpdates.size>0){const ze=km(Pe.width,Pe.height,v.format,v.type);for(const ye of v.layerUpdates){const Ke=Pe.data.subarray(ye*ze/Pe.data.BYTES_PER_ELEMENT,(ye+1)*ze/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,ye,Pe.width,Pe.height,1,Ie,Ke)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,xe.depth,Ie,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,De,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,xe.depth,Ie,Qe,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,De,Pe.width,Pe.height,xe.depth,0,Ie,Qe,Pe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{tt&&ft&&t.texStorage2D(s.TEXTURE_2D,ke,De,et[0].width,et[0].height);for(let _e=0,Le=et.length;_e<Le;_e++)Pe=et[_e],v.format!==Si?Ie!==null?tt?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Pe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ie,Qe,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Ie,Qe,Pe.data)}else if(v.isDataArrayTexture)if(tt){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,De,xe.width,xe.height,xe.depth),$)if(v.layerUpdates.size>0){const _e=km(xe.width,xe.height,v.format,v.type);for(const Le of v.layerUpdates){const ze=xe.data.subarray(Le*_e/xe.data.BYTES_PER_ELEMENT,(Le+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,xe.width,xe.height,1,Ie,Qe,ze)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,Qe,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,xe.width,xe.height,xe.depth,0,Ie,Qe,xe.data);else if(v.isData3DTexture)tt?(ft&&t.texStorage3D(s.TEXTURE_3D,ke,De,xe.width,xe.height,xe.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,Qe,xe.data)):t.texImage3D(s.TEXTURE_3D,0,De,xe.width,xe.height,xe.depth,0,Ie,Qe,xe.data);else if(v.isFramebufferTexture){if(ft)if(tt)t.texStorage2D(s.TEXTURE_2D,ke,De,xe.width,xe.height);else{let _e=xe.width,Le=xe.height;for(let ze=0;ze<ke;ze++)t.texImage2D(s.TEXTURE_2D,ze,De,_e,Le,0,Ie,Qe,null),_e>>=1,Le>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),S.add(v),_e.onpaint=Le=>{const ze=Le.changedElements;for(const ye of S)ze.includes(ye.image)&&(ye.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const ze=s.RGBA,ye=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,ye,Ke,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&ft){const _e=We(et[0]);t.texStorage2D(s.TEXTURE_2D,ke,De,_e.width,_e.height)}for(let _e=0,Le=et.length;_e<Le;_e++)Pe=et[_e],tt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ie,Qe,Pe):t.texImage2D(s.TEXTURE_2D,_e,De,Ie,Qe,Pe);v.generateMipmaps=!1}else if(tt){if(ft){const _e=We(xe);t.texStorage2D(s.TEXTURE_2D,ke,De,_e.width,_e.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Qe,xe)}else t.texImage2D(s.TEXTURE_2D,0,De,Ie,Qe,xe);_(v)&&U(ne),Ce.__version=we.version,v.onUpdate&&v.onUpdate(v)}k.__version=v.version}function Ve(k,v,ee){if(v.image.length!==6)return;const ne=Ue(k,v),he=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+ee);const we=r.get(he);if(he.version!==we.__version||ne===!0){t.activeTexture(s.TEXTURE0+ee);const Ce=Rt.getPrimaries(Rt.workingColorSpace),ge=v.colorSpace===Pr?null:Rt.getPrimaries(v.colorSpace),xe=v.colorSpace===Pr||Ce===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,Qe=v.image[0]&&v.image[0].isDataTexture,De=[];for(let ye=0;ye<6;ye++)!Ie&&!Qe?De[ye]=w(v.image[ye],!0,o.maxCubemapSize):De[ye]=Qe?v.image[ye].image:v.image[ye],De[ye]=Ae(v,De[ye]);const Pe=De[0],et=c.convert(v.format,v.colorSpace),tt=c.convert(v.type),ft=T(v.internalFormat,et,tt,v.normalized,v.colorSpace),$=v.isVideoTexture!==!0,ke=we.__version===void 0||ne===!0,_e=he.dataReady;let Le=I(v,Pe);Ne(s.TEXTURE_CUBE_MAP,v);let ze;if(Ie){$&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){ze=De[ye].mipmaps;for(let Ke=0;Ke<ze.length;Ke++){const $e=ze[Ke];v.format!==Si?et!==null?$?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,$e.width,$e.height,et,$e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,ft,$e.width,$e.height,0,$e.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,$e.width,$e.height,et,tt,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,ft,$e.width,$e.height,0,et,tt,$e.data)}}}else{if(ze=v.mipmaps,$&&ke){ze.length>0&&Le++;const ye=We(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ft,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Qe){$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,De[ye].width,De[ye].height,et,tt,De[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,De[ye].width,De[ye].height,0,et,tt,De[ye].data);for(let Ke=0;Ke<ze.length;Ke++){const Lt=ze[Ke].image[ye].image;$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,Lt.width,Lt.height,et,tt,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,ft,Lt.width,Lt.height,0,et,tt,Lt.data)}}else{$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,et,tt,De[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,et,tt,De[ye]);for(let Ke=0;Ke<ze.length;Ke++){const $e=ze[Ke];$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,et,tt,$e.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,ft,et,tt,$e.image[ye])}}}_(v)&&U(s.TEXTURE_CUBE_MAP),we.__version=he.version,v.onUpdate&&v.onUpdate(v)}k.__version=v.version}function Oe(k,v,ee,ne,he,we){const Ce=c.convert(ee.format,ee.colorSpace),ge=c.convert(ee.type),xe=T(ee.internalFormat,Ce,ge,ee.normalized,ee.colorSpace),Ie=r.get(v),Qe=r.get(ee);if(Qe.__renderTarget=v,!Ie.__hasExternalTextures){const De=Math.max(1,v.width>>we),Pe=Math.max(1,v.height>>we);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,we,xe,De,Pe,v.depth,0,Ce,ge,null):t.texImage2D(he,we,xe,De,Pe,0,Ce,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),at(v)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,he,Qe.__webglTexture,0,nt(v)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,he,Qe.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(k,v,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,k),v.depthBuffer){const ne=v.depthTexture,he=ne&&ne.isDepthTexture?ne.type:null,we=P(v.stencilBuffer,he),Ce=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;at(v)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(v),we,v.width,v.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(v),we,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,we,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,k)}else{const ne=v.textures;for(let he=0;he<ne.length;he++){const we=ne[he],Ce=c.convert(we.format,we.colorSpace),ge=c.convert(we.type),xe=T(we.internalFormat,Ce,ge,we.normalized,we.colorSpace);at(v)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(v),xe,v.width,v.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(v),xe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,xe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(k,v,ee){const ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(v.depthTexture);if(he.__renderTarget=v,(!he.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne){if(he.__webglInit===void 0&&(he.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,v.depthTexture);const Ie=c.convert(v.depthTexture.format),Qe=c.convert(v.depthTexture.type);let De;v.depthTexture.format===ar?De=s.DEPTH_COMPONENT24:v.depthTexture.format===ts&&(De=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,De,v.width,v.height,0,Ie,Qe,null)}}else X(v.depthTexture,0);const we=he.__webglTexture,Ce=nt(v),ge=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,xe=v.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===ar)at(v)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ge,we,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ge,we,0);else if(v.depthTexture.format===ts)at(v)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ge,we,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ge,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(k){const v=r.get(k),ee=k.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==k.depthTexture){const ne=k.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const he=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",he)};ne.addEventListener("dispose",he),v.__depthDisposeCallback=he}v.__boundDepthTexture=ne}if(k.depthTexture&&!v.__autoAllocateDepthBuffer)if(ee)for(let ne=0;ne<6;ne++)Pt(v.__webglFramebuffer[ne],k,ne);else{const ne=k.texture.mipmaps;ne&&ne.length>0?Pt(v.__webglFramebuffer[0],k,0):Pt(v.__webglFramebuffer,k,0)}else if(ee){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=s.createRenderbuffer(),dt(v.__webglDepthbuffer[ne],k,!1);else{const he=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=v.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}else{const ne=k.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),dt(v.__webglDepthbuffer,k,!1);else{const he=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(k,v,ee){const ne=r.get(k);v!==void 0&&Oe(ne.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&ot(k)}function bt(k){const v=k.texture,ee=r.get(k),ne=r.get(v);k.addEventListener("dispose",b);const he=k.textures,we=k.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=v.version,d.memory.textures++),we){ee.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0){ee.__webglFramebuffer[ge]=[];for(let xe=0;xe<v.mipmaps.length;xe++)ee.__webglFramebuffer[ge][xe]=s.createFramebuffer()}else ee.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)ee.__webglFramebuffer[ge]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let ge=0,xe=he.length;ge<xe;ge++){const Ie=r.get(he[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),d.memory.textures++)}if(k.samples>0&&at(k)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const xe=he[ge];ee.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[ge]);const Ie=c.convert(xe.format,xe.colorSpace),Qe=c.convert(xe.type),De=T(xe.internalFormat,Ie,Qe,xe.normalized,xe.colorSpace,k.isXRRenderTarget===!0),Pe=nt(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,De,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ee.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(ee.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,v);for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Oe(ee.__webglFramebuffer[ge][xe],k,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Oe(ee.__webglFramebuffer[ge],k,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(v)&&U(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,xe=he.length;ge<xe;ge++){const Ie=he[ge],Qe=r.get(Ie);let De=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Qe.__webglTexture),Ne(De,Ie),Oe(ee.__webglFramebuffer,k,Ie,s.COLOR_ATTACHMENT0+ge,De,0),_(Ie)&&U(De)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ge=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),Ne(ge,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Oe(ee.__webglFramebuffer[xe],k,v,s.COLOR_ATTACHMENT0,ge,xe);else Oe(ee.__webglFramebuffer,k,v,s.COLOR_ATTACHMENT0,ge,0);_(v)&&U(ge),t.unbindTexture()}k.depthBuffer&&ot(k)}function ht(k){const v=k.textures;for(let ee=0,ne=v.length;ee<ne;ee++){const he=v[ee];if(_(he)){const we=z(k),Ce=r.get(he).__webglTexture;t.bindTexture(we,Ce),U(we),t.unbindTexture()}}}const Tt=[],de=[];function lt(k){if(k.samples>0){if(at(k)===!1){const v=k.textures,ee=k.width,ne=k.height;let he=s.COLOR_BUFFER_BIT;const we=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(k),ge=v.length>1;if(ge)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=k.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const Qe=r.get(v[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,ee,ne,0,0,ee,ne,he,s.NEAREST),p===!0&&(Tt.length=0,de.length=0,Tt.push(s.COLOR_ATTACHMENT0+Ie),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Tt.push(we),de.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,de)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const Qe=r.get(v[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&p){const v=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function nt(k){return Math.min(o.maxSamples,k.samples)}function at(k){const v=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(k){const v=d.render.frame;y.get(k)!==v&&(y.set(k,v),k.update())}function Ae(k,v){const ee=k.colorSpace,ne=k.format,he=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ee!==jl&&ee!==Pr&&(Rt.getTransfer(ee)===Gt?(ne!==Si||he!==ai)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ee)),v}function We(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=F,this.getTextureUnits=G,this.setTextureUnits=Y,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=D,this.rebindTextures=_t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vw(s,e){function t(r,o=Pr){let c;const d=Rt.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===N0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===P0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===C0)return s.BYTE;if(r===R0)return s.SHORT;if(r===qa)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===Oi)return s.HALF_FLOAT;if(r===L0)return s.ALPHA;if(r===I0)return s.RGB;if(r===Si)return s.RGBA;if(r===ar)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===D0)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===is)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===yf)return s.RGBA_INTEGER;if(r===Ll||r===Il||r===Dl||r===kl)if(d===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ll)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ll)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ld||r===Id||r===Dd||r===kd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud||r===Od||r===Fd||r===zd||r===Bd||r===Bl||r===Gd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ud||r===Od)return d===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Fd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===zd)return c.COMPRESSED_R11_EAC;if(r===Bd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Bl)return c.COMPRESSED_RG11_EAC;if(r===Gd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===jd||r===Hd||r===Vd||r===Wd||r===Xd||r===Yd||r===qd||r===$d||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===jd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ef)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tf)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nf||r===rf||r===sf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===nf)return d===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===af||r===of||r===Gl||r===lf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===af)return c.COMPRESSED_RED_RGTC1_EXT;if(r===of)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new H0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new Ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qw extends as{constructor(e,t){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,m=null,y=null,S=null,x=null,M=null,E=null;const L=typeof XRWebGLBinding<"u",w=new Yw,_={},U=t.getContextAttributes();let z=null,T=null;const P=[],I=[],A=new kt;let b=null,R=null;const O=new si;O.viewport=new Qt;const B=new si;B.viewport=new Qt;const V=[O,B],F=new t1;let G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=P[ae];return ce===void 0&&(ce=new Ju,P[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=P[ae];return ce===void 0&&(ce=new Ju,P[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=P[ae];return ce===void 0&&(ce=new Ju,P[ae]=ce),ce.getHandSpace()};function ie(ae){const ce=I.indexOf(ae.inputSource);if(ce===-1)return;const be=P[ce];be!==void 0&&(be.update(ae.inputSource,ae.frame,m||d),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",X);for(let ae=0;ae<P.length;ae++){const ce=I[ae];ce!==null&&(I[ae]=null,P[ae].disconnect(ce))}G=null,Y=null,w.reset();for(const ae in _)delete _[ae];if(e.setRenderTarget(z),M=null,x=null,S=null,o=null,T=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),R!==null){const ae=R.camera;ae.fov=R.fov,ae.zoom=R.zoom,ae.updateProjectionMatrix(),R=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S===null&&L&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",X),U.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,Oe=null;U.depth&&(Oe=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=U.stencil?ts:ar,Ve=U.stencil?$a:Ui);const dt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:c};S=this.getBinding(),x=S.createProjectionLayer(dt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),T=new wi(x.textureWidth,x.textureHeight,{format:Si,type:ai,depthTexture:new Ka(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new wi(M.framebufferWidth,M.framebufferHeight,{format:Si,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function X(ae){for(let ce=0;ce<ae.removed.length;ce++){const be=ae.removed[ce],Ve=I.indexOf(be);Ve>=0&&(I[Ve]=null,P[Ve].disconnect(be))}for(let ce=0;ce<ae.added.length;ce++){const be=ae.added[ce];let Ve=I.indexOf(be);if(Ve===-1){for(let dt=0;dt<P.length;dt++)if(dt>=I.length){I.push(be),Ve=dt;break}else if(I[dt]===null){I[dt]=be,Ve=dt;break}if(Ve===-1)break}const Oe=P[Ve];Oe&&Oe.connect(be)}}const j=new fe,H=new fe;function D(ae,ce,be){j.setFromMatrixPosition(ce.matrixWorld),H.setFromMatrixPosition(be.matrixWorld);const Ve=j.distanceTo(H),Oe=ce.projectionMatrix.elements,dt=be.projectionMatrix.elements,Pt=Oe[14]/(Oe[10]-1),ot=Oe[14]/(Oe[10]+1),_t=(Oe[9]+1)/Oe[5],bt=(Oe[9]-1)/Oe[5],ht=(Oe[8]-1)/Oe[0],Tt=(dt[8]+1)/dt[0],de=Pt*ht,lt=Pt*Tt,nt=Ve/(-ht+Tt),at=nt*-ht;if(ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(at),ae.translateZ(nt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Oe[10]===-1)ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const K=Pt+nt,Ae=ot+nt,We=de-at,k=lt+(Ve-at),v=_t*ot/Ae*K,ee=bt*ot/Ae*K;ae.projectionMatrix.makePerspective(We,k,v,ee,K,Ae),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Q(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ce=ae.near,be=ae.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(be=w.depthFar)),F.near=B.near=O.near=ce,F.far=B.far=O.far=be,(G!==F.near||Y!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,Y=F.far),F.layers.mask=ae.layers.mask|6,O.layers.mask=F.layers.mask&-5,B.layers.mask=F.layers.mask&-3;const Ve=ae.parent,Oe=F.cameras;Q(F,Ve);for(let dt=0;dt<Oe.length;dt++)Q(Oe[dt],Ve);Oe.length===2?D(F,O,B):F.projectionMatrix.copy(O.projectionMatrix),R===null&&ae.isPerspectiveCamera&&(R={camera:ae,fov:ae.fov,zoom:ae.zoom}),ve(ae,F,Ve)};function ve(ae,ce,be){be===null?ae.matrix.copy(ce.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=cf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(ae){p=ae,x!==null&&(x.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(F)},this.getCameraTexture=function(ae){return _[ae]};let Re=null;function Ne(ae,ce){if(y=ce.getViewerPose(m||d),E=ce,y!==null){const be=y.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let Ve=!1;be.length!==F.cameras.length&&(F.cameras.length=0,Ve=!0);for(let ot=0;ot<be.length;ot++){const _t=be[ot];let bt=null;if(M!==null)bt=M.getViewport(_t);else{const Tt=S.getViewSubImage(x,_t);bt=Tt.viewport,ot===0&&(e.setRenderTargetTextures(T,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(T))}let ht=V[ot];ht===void 0&&(ht=new si,ht.layers.enable(ot),ht.viewport=new Qt,V[ot]=ht),ht.matrix.fromArray(_t.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(_t.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(bt.x,bt.y,bt.width,bt.height),ot===0&&(F.matrix.copy(ht.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ve===!0&&F.cameras.push(ht)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&L){S=r.getBinding();const ot=S.getDepthInformation(be[0]);ot&&ot.isValid&&ot.texture&&w.init(ot,o.renderState)}if(Oe&&Oe.includes("camera-access")&&L){e.state.unbindTexture(),S=r.getBinding();for(let ot=0;ot<be.length;ot++){const _t=be[ot].camera;if(_t){let bt=_[_t];bt||(bt=new H0,_[_t]=bt);const ht=S.getCameraImage(_t);bt.sourceTexture=ht}}}}for(let be=0;be<P.length;be++){const Ve=I[be],Oe=P[be];Ve!==null&&Oe!==void 0&&Oe.update(Ve,ce,m||d)}Re&&Re(ae,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ue=new Y0;Ue.setAnimationLoop(Ne),this.setAnimationLoop=function(ae){Re=ae},this.dispose=function(){}}}const $w=new nn,eg=new vt;eg.set(-1,0,0,0,1,0,0,0,1);function Kw(s,e){function t(w,_){w.matrixAutoUpdate===!0&&w.updateMatrix(),_.value.copy(w.matrix)}function r(w,_){_.color.getRGB(w.fogColor.value,V0(s)),_.isFog?(w.fogNear.value=_.near,w.fogFar.value=_.far):_.isFogExp2&&(w.fogDensity.value=_.density)}function o(w,_,U,z,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(w,_):_.isMeshLambertMaterial?(c(w,_),_.envMap&&(w.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(w,_),S(w,_)):_.isMeshPhongMaterial?(c(w,_),y(w,_),_.envMap&&(w.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(w,_),x(w,_),_.isMeshPhysicalMaterial&&M(w,_,T)):_.isMeshMatcapMaterial?(c(w,_),E(w,_)):_.isMeshDepthMaterial?c(w,_):_.isMeshDistanceMaterial?(c(w,_),L(w,_)):_.isMeshNormalMaterial?c(w,_):_.isLineBasicMaterial?(d(w,_),_.isLineDashedMaterial&&f(w,_)):_.isPointsMaterial?p(w,_,U,z):_.isSpriteMaterial?m(w,_):_.isShadowMaterial?(w.color.value.copy(_.color),w.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(w,_){w.opacity.value=_.opacity,_.color&&w.diffuse.value.copy(_.color),_.emissive&&w.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(w.map.value=_.map,t(_.map,w.mapTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.bumpMap&&(w.bumpMap.value=_.bumpMap,t(_.bumpMap,w.bumpMapTransform),w.bumpScale.value=_.bumpScale,_.side===Bn&&(w.bumpScale.value*=-1)),_.normalMap&&(w.normalMap.value=_.normalMap,t(_.normalMap,w.normalMapTransform),w.normalScale.value.copy(_.normalScale),_.side===Bn&&w.normalScale.value.negate()),_.displacementMap&&(w.displacementMap.value=_.displacementMap,t(_.displacementMap,w.displacementMapTransform),w.displacementScale.value=_.displacementScale,w.displacementBias.value=_.displacementBias),_.emissiveMap&&(w.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,w.emissiveMapTransform)),_.specularMap&&(w.specularMap.value=_.specularMap,t(_.specularMap,w.specularMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest);const U=e.get(_),z=U.envMap,T=U.envMapRotation;z&&(w.envMap.value=z,w.envMapRotation.value.setFromMatrix4($w.makeRotationFromEuler(T)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&w.envMapRotation.value.premultiply(eg),w.reflectivity.value=_.reflectivity,w.ior.value=_.ior,w.refractionRatio.value=_.refractionRatio),_.lightMap&&(w.lightMap.value=_.lightMap,w.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,w.lightMapTransform)),_.aoMap&&(w.aoMap.value=_.aoMap,w.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,w.aoMapTransform))}function d(w,_){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,_.map&&(w.map.value=_.map,t(_.map,w.mapTransform))}function f(w,_){w.dashSize.value=_.dashSize,w.totalSize.value=_.dashSize+_.gapSize,w.scale.value=_.scale}function p(w,_,U,z){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,w.size.value=_.size*U,w.scale.value=z*.5,_.map&&(w.map.value=_.map,t(_.map,w.uvTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest)}function m(w,_){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,w.rotation.value=_.rotation,_.map&&(w.map.value=_.map,t(_.map,w.mapTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest)}function y(w,_){w.specular.value.copy(_.specular),w.shininess.value=Math.max(_.shininess,1e-4)}function S(w,_){_.gradientMap&&(w.gradientMap.value=_.gradientMap)}function x(w,_){w.metalness.value=_.metalness,_.metalnessMap&&(w.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,w.metalnessMapTransform)),w.roughness.value=_.roughness,_.roughnessMap&&(w.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,w.roughnessMapTransform)),_.envMap&&(w.envMapIntensity.value=_.envMapIntensity)}function M(w,_,U){w.ior.value=_.ior,_.sheen>0&&(w.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),w.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(w.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,w.sheenColorMapTransform)),_.sheenRoughnessMap&&(w.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,w.sheenRoughnessMapTransform))),_.clearcoat>0&&(w.clearcoat.value=_.clearcoat,w.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(w.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,w.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(w.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&w.clearcoatNormalScale.value.negate())),_.dispersion>0&&(w.dispersion.value=_.dispersion),_.retroreflectivity>0&&(w.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(w.iridescence.value=_.iridescence,w.iridescenceIOR.value=_.iridescenceIOR,w.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(w.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,w.iridescenceMapTransform)),_.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),_.transmission>0&&(w.transmission.value=_.transmission,w.transmissionSamplerMap.value=U.texture,w.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(w.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,w.transmissionMapTransform)),w.thickness.value=_.thickness,_.thicknessMap&&(w.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=_.attenuationDistance,w.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(w.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(w.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=_.specularIntensity,w.specularColor.value.copy(_.specularColor),_.specularColorMap&&(w.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,w.specularColorMapTransform)),_.specularIntensityMap&&(w.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,w.specularIntensityMapTransform))}function E(w,_){_.matcap&&(w.matcap.value=_.matcap)}function L(w,_){const U=e.get(_).light;w.referencePosition.value.setFromMatrixPosition(U.matrixWorld),w.nearDistance.value=U.shadow.camera.near,w.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Zw(s,e,t,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,P){const I=P.program;r.uniformBlockBinding(T,I)}function m(T,P){let I=o[T.id];I===void 0&&(w(T),I=y(T),o[T.id]=I,T.addEventListener("dispose",U));const A=P.program;r.updateUBOMapping(T,A);const b=e.render.frame;c[T.id]!==b&&(x(T),c[T.id]=b)}function y(T){const P=S();T.__bindingPointIndex=P;const I=s.createBuffer(),A=T.__size,b=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function S(){for(let T=0;T<f;T++)if(d.indexOf(T)===-1)return d.push(T),T;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(T){const P=o[T.id],I=T.uniforms,A=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let b=0,R=I.length;b<R;b++){const O=I[b];if(Array.isArray(O))for(let B=0,V=O.length;B<V;B++)M(O[B],b,B,A);else M(O,b,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(T,P,I,A){if(L(T,P,I,A)===!0){const b=T.__offset,R=T.value;if(Array.isArray(R)){let O=0;for(let B=0;B<R.length;B++){const V=R[B],F=_(V);E(V,T.__data,O),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(O+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(R,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,T.__data)}}function E(T,P,I){typeof T=="number"||typeof T=="boolean"?P[0]=T:T.isMatrix3?(P[0]=T.elements[0],P[1]=T.elements[1],P[2]=T.elements[2],P[3]=0,P[4]=T.elements[3],P[5]=T.elements[4],P[6]=T.elements[5],P[7]=0,P[8]=T.elements[6],P[9]=T.elements[7],P[10]=T.elements[8],P[11]=0):ArrayBuffer.isView(T)?P.set(new T.constructor(T.buffer,T.byteOffset,P.length)):T.toArray(P,I)}function L(T,P,I,A){const b=T.value,R=P+"_"+I;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:ArrayBuffer.isView(b)?A[R]=b.slice():A[R]=b.clone(),!0;{const O=A[R];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return A[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(O.equals(b)===!1)return O.copy(b),!0}}return!1}function w(T){const P=T.uniforms;let I=0;const A=16;for(let R=0,O=P.length;R<O;R++){const B=Array.isArray(P[R])?P[R]:[P[R]];for(let V=0,F=B.length;V<F;V++){const G=B[V],Y=Array.isArray(G.value)?G.value:[G.value];for(let ie=0,Z=Y.length;ie<Z;ie++){const X=Y[ie],j=_(X),H=I%A,D=H%j.boundary,Q=H+D;I+=D,Q!==0&&A-Q<j.storage&&(I+=A-Q),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=I,I+=j.storage}}}const b=I%A;return b>0&&(I+=A-b),T.__size=I,T.__cache={},this}function _(T){const P={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(P.boundary=4,P.storage=4):T.isVector2?(P.boundary=8,P.storage=8):T.isVector3||T.isColor?(P.boundary=16,P.storage=12):T.isVector4?(P.boundary=16,P.storage=16):T.isMatrix3?(P.boundary=48,P.storage=48):T.isMatrix4?(P.boundary=64,P.storage=64):T.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(P.boundary=16,P.storage=T.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",T),P}function U(T){const P=T.target;P.removeEventListener("dispose",U);const I=d.indexOf(P.__bindingPointIndex);d.splice(I,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function z(){for(const T in o)s.deleteBuffer(o[T]);d=[],o={},c={}}return{bind:p,update:m,dispose:z}}const Jw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function Qw(){return Ni===null&&(Ni=new H_(Jw,16,16,is,Oi),Ni.name="DFG_LUT",Ni.minFilter=xn,Ni.magFilter=xn,Ni.wrapS=nr,Ni.wrapT=nr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class r0{constructor(e={}){const{canvas:t=v_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const L=M,w=new Set([yf,_f,vf]),_=new Set([ai,Ui,qa,$a,gf,xf]),U=new Uint32Array(4),z=new Int32Array(4),T=new fe;let P=null,I=null;const A=[],b=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,V=null,F=null,G=null,Y=null;this._outputColorSpace=Yn;let ie=0,Z=0,X=null,j=-1,H=null;const D=new Qt,Q=new Qt;let ve=null;const Re=new zt(0);let Ne=0,Ue=t.width,ae=t.height,ce=1,be=null,Ve=null;const Oe=new Qt(0,0,Ue,ae),dt=new Qt(0,0,Ue,ae);let Pt=!1;const ot=new G0;let _t=!1,bt=!1;const ht=new nn,Tt=new fe,de=new Qt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function at(){return X===null?ce:1}let K=r;function Ae(N,J){return t.getContext(N,J)}let We,k,v,ee,ne,he,we,Ce,ge,xe,Ie,Qe,De,Pe,et,tt,ft,$,ke,_e,Le,ze,ye;try{const N={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pf}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",an,!1),K===null){const J="webgl2";if(K=Ae(J,N),K===null)throw Ae(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(N){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",an,!1),Dt("WebGLRenderer: "+N.message),N}function Ke(){We=new Qb(K),We.init(),Le=new Vw(K,We),k=new Hb(K,We,e,Le),v=new jw(K,We),k.reversedDepthBuffer&&x&&v.buffers.depth.setReversed(!0),F=K.createFramebuffer(),G=K.createFramebuffer(),Y=K.createFramebuffer(),ee=new nS(K),ne=new Cw,he=new Hw(K,We,v,ne,k,Le,ee),we=new Jb(O),Ce=new r1(K),ze=new Gb(K,Ce),ge=new eS(K,Ce,ee,ze),xe=new rS(K,ge,Ce,ze,ee),$=new iS(K,k,he),et=new Vb(ne),Ie=new Aw(O,we,We,k,ze,et),Qe=new Kw(O,ne),De=new Nw,Pe=new Uw(We),ft=new Bb(O,we,v,xe,E,p),tt=new Gw(O,xe,k),ye=new Zw(K,ee,k,v),ke=new jb(K,We,ee),_e=new tS(K,We,ee),ee.programs=Ie.programs,O.capabilities=k,O.extensions=We,O.properties=ne,O.renderLists=De,O.shadowMap=tt,O.state=v,O.info=ee}L!==ai&&(R=new aS(L,t.width,t.height,f,o,c));const $e=new qw(O,K);this.xr=$e,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=We.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=We.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(N){N!==void 0&&(ce=N,this.setSize(Ue,ae,!1))},this.getSize=function(N){return N.set(Ue,ae)},this.setSize=function(N,J,pe=!0){if($e.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=N,ae=J,t.width=Math.floor(N*ce),t.height=Math.floor(J*ce),pe===!0&&(t.style.width=N+"px",t.style.height=J+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(Ue*ce,ae*ce).floor()},this.setDrawingBufferSize=function(N,J,pe){Ue=N,ae=J,ce=pe,t.width=Math.floor(N*pe),t.height=Math.floor(J*pe),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(L===ai){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(D)},this.getViewport=function(N){return N.copy(Oe)},this.setViewport=function(N,J,pe,oe){N.isVector4?Oe.set(N.x,N.y,N.z,N.w):Oe.set(N,J,pe,oe),v.viewport(D.copy(Oe).multiplyScalar(ce).round())},this.getScissor=function(N){return N.copy(dt)},this.setScissor=function(N,J,pe,oe){N.isVector4?dt.set(N.x,N.y,N.z,N.w):dt.set(N,J,pe,oe),v.scissor(Q.copy(dt).multiplyScalar(ce).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(N){v.setScissorTest(Pt=N)},this.setOpaqueSort=function(N){be=N},this.setTransparentSort=function(N){Ve=N},this.getClearColor=function(N){return N.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,pe=!0){let oe=0;if(N){let re=!1;if(X!==null){const Ge=X.texture.format;re=w.has(Ge)}if(re){const Ge=X.texture.type,Fe=_.has(Ge),Be=ft.getClearColor(),Ze=ft.getClearAlpha(),rt=Be.r,xt=Be.g,yt=Be.b;Fe?(U[0]=rt,U[1]=xt,U[2]=yt,U[3]=Ze,K.clearBufferuiv(K.COLOR,0,U)):(z[0]=rt,z[1]=xt,z[2]=yt,z[3]=Ze,K.clearBufferiv(K.COLOR,0,z))}else oe|=K.COLOR_BUFFER_BIT}J&&(oe|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(oe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&K.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),V=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",an,!1),ft.dispose(),De.dispose(),Pe.dispose(),ne.dispose(),we.dispose(),xe.dispose(),ze.dispose(),ye.dispose(),Ie.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",eo),$e.removeEventListener("sessionend",to),Rn.stop()};function Lt(N){N.preventDefault(),pm("WebGLRenderer: Context Lost."),B=!0}function Et(){pm("WebGLRenderer: Context Restored."),B=!1;const N=ee.autoReset,J=tt.enabled,pe=tt.autoUpdate,oe=tt.needsUpdate,re=tt.type;Ke(),ee.autoReset=N,tt.enabled=J,tt.autoUpdate=pe,tt.needsUpdate=oe,tt.type=re}function an(N){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function fn(N){const J=N.target;J.removeEventListener("dispose",fn),Kn(J)}function Kn(N){os(N),ne.remove(N)}function os(N){const J=ne.get(N).programs;J!==void 0&&(J.forEach(function(pe){Ie.releaseProgram(pe)}),N.isShaderMaterial&&Ie.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,pe,oe,re,Ge){J===null&&(J=lt);const Fe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Be=qt(N,J,pe,oe,re);v.setMaterial(oe,Fe);let Ze=pe.index,rt=1;if(oe.wireframe===!0){if(Ze=ge.getWireframeAttribute(pe),Ze===void 0)return;rt=2}const xt=pe.drawRange,yt=pe.attributes.position;let Ye=xt.start*rt,At=(xt.start+xt.count)*rt;Ge!==null&&(Ye=Math.max(Ye,Ge.start*rt),At=Math.min(At,(Ge.start+Ge.count)*rt)),Ze!==null?(Ye=Math.max(Ye,0),At=Math.min(At,Ze.count)):yt!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,yt.count));const Zt=At-Ye;if(Zt<0||Zt===1/0)return;ze.setup(re,oe,Be,pe,Ze);let jt,Ft=ke;if(Ze!==null&&(jt=Ce.get(Ze),Ft=_e,Ft.setIndex(jt)),re.isMesh)oe.wireframe===!0?(v.setLineWidth(oe.wireframeLinewidth*at()),Ft.setMode(K.LINES)):Ft.setMode(K.TRIANGLES);else if(re.isLine){let on=oe.linewidth;on===void 0&&(on=1),v.setLineWidth(on*at()),re.isLineSegments?Ft.setMode(K.LINES):re.isLineLoop?Ft.setMode(K.LINE_LOOP):Ft.setMode(K.LINE_STRIP)}else re.isPoints?Ft.setMode(K.POINTS):re.isSprite&&Ft.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const on=re._multiDrawStarts,He=re._multiDrawCounts,en=re._multiDrawCount,Ct=Ze?Ce.get(Ze).bytesPerElement:1,bn=ne.get(oe).currentProgram.getUniforms();for(let St=0;St<en;St++)bn.setValue(K,"_gl_DrawID",St),Ft.render(on[St]/Ct,He[St])}else if(re.isInstancedMesh)Ft.renderInstances(Ye,Zt,re.count);else if(pe.isInstancedBufferGeometry){const on=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,He=Math.min(pe.instanceCount,on);Ft.renderInstances(Ye,Zt,He)}else Ft.render(Ye,Zt)};function Ir(N,J,pe,oe){V!==null&&N.isNodeMaterial&&V.setObject(oe,N),_t===!0&&et.setState(N,pe,!1),N.transparent===!0&&N.side===tr&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,Ur(N,J,oe),N.side=Lr,N.needsUpdate=!0,Ur(N,J,oe),N.side=tr):Ur(N,J,oe)}this.compile=function(N,J,pe=null){pe===null&&(pe=N),V!==null&&V.renderStart(N,J,pe),I=Pe.get(pe),I.init(J),b.push(I),pe.traverseVisible(function(re){re.isLight&&re.layers.test(J.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),N!==pe&&N.traverseVisible(function(re){re.isLight&&re.layers.test(J.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),I.setupLights(),V!==null&&V.updateLights(I.state.lightsArray),bt=this.localClippingEnabled,_t=et.init(this.clippingPlanes,bt),_t===!0&&et.setGlobalState(this.clippingPlanes,J),V!==null&&tt.render(I.state.shadowsArray,pe,J);const oe=new Set;return N.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ge=re.material;if(Ge)if(Array.isArray(Ge))for(let Fe=0;Fe<Ge.length;Fe++){const Be=Ge[Fe];Ir(Be,pe,J,re),oe.add(Be)}else Ir(Ge,pe,J,re),oe.add(Ge)}),I=b.pop(),V!==null&&V.renderEnd(),oe},this.compileAsync=function(N,J,pe=null){const oe=this.compile(N,J,pe);return new Promise(re=>{function Ge(){if(oe.forEach(function(Fe){const Ze=ne.get(Fe).currentProgram;(Ze===void 0||Ze.isReady())&&oe.delete(Fe)}),oe.size===0){re(N);return}setTimeout(Ge,10)}We.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Dr=null;function nc(N){Dr&&Dr(N)}function eo(){Rn.stop()}function to(){Rn.start()}const Rn=new Y0;Rn.setAnimationLoop(nc),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(N){Dr=N,$e.setAnimationLoop(N),N===null?Rn.stop():Rn.start()},$e.addEventListener("sessionstart",eo),$e.addEventListener("sessionend",to),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(N,J);const pe=$e.enabled===!0&&$e.isPresenting===!0,oe=R!==null&&(X===null||pe)&&R.begin(O,X);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(J),J=$e.getCamera()),N.isScene===!0&&N.onBeforeRender(O,N,J,X),I=Pe.get(N,b.length),I.init(J),I.state.textureUnits=he.getTextureUnits(),b.push(I),ht.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ot.setFromProjectionMatrix(ht,Di,J.reversedDepth),bt=this.localClippingEnabled,_t=et.init(this.clippingPlanes,bt),P=De.get(N,A.length),P.init(),A.push(P),$e.enabled===!0&&$e.isPresenting===!0){const Fe=O.xr.getDepthSensingMesh();Fe!==null&&ls(Fe,J,-1/0,O.sortObjects)}ls(N,J,0,O.sortObjects),P.finish(),V!==null&&V.updateLights(I.state.lightsArray),O.sortObjects===!0&&P.sort(be,Ve),nt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,nt&&ft.addToRenderList(P,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&et.beginShadows();const re=I.state.shadowsArray;if(tt.render(re,N,J),_t===!0&&et.endShadows(),(oe&&R.hasRenderPass())===!1){const Fe=P.opaque,Be=P.transmissive;if(I.setupLights(),J.isArrayCamera){const Ze=J.cameras;if(Be.length>0)for(let rt=0,xt=Ze.length;rt<xt;rt++){const yt=Ze[rt];no(Fe,Be,N,yt)}nt&&ft.render(N);for(let rt=0,xt=Ze.length;rt<xt;rt++){const yt=Ze[rt];Js(P,N,yt,yt.viewport)}}else Be.length>0&&no(Fe,Be,N,J),nt&&ft.render(N),Js(P,N,J)}X!==null&&Z===0&&(he.updateMultisampleRenderTarget(X),he.updateRenderTargetMipmap(X)),oe&&R.end(O),N.isScene===!0&&N.onAfterRender(O,N,J),ze.resetDefaultState(),j=-1,H=null,b.pop(),b.length>0?(I=b[b.length-1],he.setTextureUnits(I.state.textureUnits),_t===!0&&et.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,A.pop(),A.length>0?P=A[A.length-1]:P=null,V!==null&&V.renderEnd()};function ls(N,J,pe,oe){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLightProbeGrid)I.pushLightProbeGrid(N);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ot)){oe&&de.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ht);const Fe=xe.update(N),Be=N.material;Be.visible&&P.push(N,Fe,Be,pe,de.z,null,J)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ot))){const Fe=xe.update(N),Be=N.material;if(oe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),de.copy(N.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),de.copy(Fe.boundingSphere.center)),de.applyMatrix4(N.matrixWorld).applyMatrix4(ht)),Array.isArray(Be)){const Ze=Fe.groups;for(let rt=0,xt=Ze.length;rt<xt;rt++){const yt=Ze[rt],Ye=Be[yt.materialIndex];Ye&&Ye.visible&&P.push(N,Fe,Ye,pe,de.z,yt,J)}}else Be.visible&&P.push(N,Fe,Be,pe,de.z,null,J)}}const Ge=N.children;for(let Fe=0,Be=Ge.length;Fe<Be;Fe++)ls(Ge[Fe],J,pe,oe)}function Js(N,J,pe,oe){const{opaque:re,transmissive:Ge,transparent:Fe}=N;I.setupLightsView(pe),_t===!0&&et.setGlobalState(O.clippingPlanes,pe),oe&&v.viewport(D.copy(oe)),re.length>0&&kr(re,J,pe),Ge.length>0&&kr(Ge,J,pe),Fe.length>0&&kr(Fe,J,pe),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function no(N,J,pe,oe){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[oe.id]===void 0){const Ye=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[oe.id]=new wi(1,1,{generateMipmaps:!0,type:Ye?Oi:ai,minFilter:es,samples:Math.max(4,k.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ge=I.state.transmissionRenderTarget[oe.id],Fe=oe.viewport||D;Ge.setSize(Fe.z*O.transmissionResolutionScale,Fe.w*O.transmissionResolutionScale);const Be=O.getRenderTarget(),Ze=O.getActiveCubeFace(),rt=O.getActiveMipmapLevel();O.setRenderTarget(Ge),O.getClearColor(Re),Ne=O.getClearAlpha(),Ne<1&&O.setClearColor(16777215,.5),O.clear(),nt&&ft.render(pe);const xt=O.toneMapping;O.toneMapping=ki;const yt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),I.setupLightsView(oe),_t===!0&&et.setGlobalState(O.clippingPlanes,oe),kr(N,pe,oe),he.updateMultisampleRenderTarget(Ge),he.updateRenderTargetMipmap(Ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let At=0,Zt=J.length;At<Zt;At++){const jt=J[At],{object:Ft,geometry:on,material:He,group:en}=jt;if(He.side===tr&&Ft.layers.test(oe.layers)){const Ct=He.side;He.side=Bn,He.needsUpdate=!0,Qs(Ft,pe,oe,on,He,en),He.side=Ct,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(he.updateMultisampleRenderTarget(Ge),he.updateRenderTargetMipmap(Ge))}O.setRenderTarget(Be,Ze,rt),O.setClearColor(Re,Ne),yt!==void 0&&(oe.viewport=yt),O.toneMapping=xt}function kr(N,J,pe){const oe=J.isScene===!0?J.overrideMaterial:null;for(let re=0,Ge=N.length;re<Ge;re++){const Fe=N[re],{object:Be,geometry:Ze,group:rt}=Fe;let xt=Fe.material;xt.allowOverride===!0&&oe!==null&&(xt=oe),Be.layers.test(pe.layers)&&Qs(Be,J,pe,Ze,xt,rt)}}function Qs(N,J,pe,oe,re,Ge){V!==null&&re.isNodeMaterial&&V.setObject(N,re),N.onBeforeRender(O,J,pe,oe,re,Ge),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(O,J,pe,oe,N,Ge),re.transparent===!0&&re.side===tr&&re.forceSinglePass===!1?(re.side=Bn,re.needsUpdate=!0,O.renderBufferDirect(pe,J,oe,re,N,Ge),re.side=Lr,re.needsUpdate=!0,O.renderBufferDirect(pe,J,oe,re,N,Ge),re.side=tr):O.renderBufferDirect(pe,J,oe,re,N,Ge),N.onAfterRender(O,J,pe,oe,re,Ge)}function Ur(N,J,pe){J.isScene!==!0&&(J=lt);const oe=ne.get(N),re=I.state.lights,Ge=I.state.shadowsArray,Fe=re.state.version,Be=Ie.getParameters(N,re.state,Ge,J,pe,I.state.lightProbeGridArray),Ze=Ie.getProgramCacheKey(Be);let rt=oe.programs;oe.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,oe.fog=J.fog;const xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;oe.envMap=we.get(N.envMap||oe.environment,xt),oe.envMapRotation=oe.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,rt===void 0&&(N.addEventListener("dispose",fn),rt=new Map,oe.programs=rt);let yt=rt.get(Ze);if(yt!==void 0){if(oe.currentProgram===yt&&oe.lightsStateVersion===Fe)return io(N,Be),yt}else Be.uniforms=Ie.getUniforms(N),V!==null&&N.isNodeMaterial&&V.build(N,pe,Be),N.onBeforeCompile(Be,O),yt=Ie.acquireProgram(Be,Ze),rt.set(Ze,yt),oe.uniforms=Be.uniforms;const Ye=oe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ye.clippingPlanes=et.uniform),io(N,Be),oe.needsLights=ta(N),oe.lightsStateVersion=Fe,oe.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.lightProbeGrid=I.state.lightProbeGridArray.length>0,oe.currentProgram=yt,oe.uniformsList=null,yt}function ea(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=Ul.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function io(N,J){const pe=ne.get(N);pe.outputColorSpace=J.outputColorSpace,pe.batching=J.batching,pe.batchingColor=J.batchingColor,pe.instancing=J.instancing,pe.instancingColor=J.instancingColor,pe.instancingMorph=J.instancingMorph,pe.skinning=J.skinning,pe.morphTargets=J.morphTargets,pe.morphNormals=J.morphNormals,pe.morphColors=J.morphColors,pe.morphTargetsCount=J.morphTargetsCount,pe.numClippingPlanes=J.numClippingPlanes,pe.numIntersection=J.numClipIntersection,pe.vertexAlphas=J.vertexAlphas,pe.vertexTangents=J.vertexTangents,pe.toneMapping=J.toneMapping}function ic(N,J){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition(J.matrixWorld);for(let pe=0,oe=N.length;pe<oe;pe++){const re=N[pe];if(re.texture!==null&&re.boundingBox.containsPoint(T))return re}return null}function qt(N,J,pe,oe,re){J.isScene!==!0&&(J=lt),he.resetTextureUnits();const Ge=J.fog,Fe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?J.environment:null,Be=X===null?O.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rt.workingColorSpace,Ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,rt=we.get(oe.envMap||Fe,Ze),xt=oe.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,yt=!!pe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!pe.morphAttributes.position,At=!!pe.morphAttributes.normal,Zt=!!pe.morphAttributes.color;let jt=ki;oe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=O.toneMapping);const Ft=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,on=Ft!==void 0?Ft.length:0,He=ne.get(oe),en=I.state.lights;if(_t===!0&&(bt===!0||N!==H)){const Bt=N===H&&oe.id===j;et.setState(oe,N,Bt)}let Ct=!1;oe.version===He.__version?(He.needsLights&&He.lightsStateVersion!==en.state.version||He.outputColorSpace!==Be||re.isBatchedMesh&&He.batching===!1||!re.isBatchedMesh&&He.batching===!0||re.isBatchedMesh&&He.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&He.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&He.instancing===!1||!re.isInstancedMesh&&He.instancing===!0||re.isSkinnedMesh&&He.skinning===!1||!re.isSkinnedMesh&&He.skinning===!0||re.isInstancedMesh&&He.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&He.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&He.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&He.instancingMorph===!1&&re.morphTexture!==null||He.envMap!==rt||oe.fog===!0&&He.fog!==Ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==et.numPlanes||He.numIntersection!==et.numIntersection)||He.vertexAlphas!==xt||He.vertexTangents!==yt||He.morphTargets!==Ye||He.morphNormals!==At||He.morphColors!==Zt||He.toneMapping!==jt||He.morphTargetsCount!==on||!!He.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,He.__version=oe.version);let bn=He.currentProgram;Ct===!0&&(bn=Ur(oe,J,re),V&&oe.isNodeMaterial&&V.onUpdateProgram(oe,bn,He));let St=!1,li=!1,Bi=!1;const Ut=bn.getUniforms(),Xt=He.uniforms;if(v.useProgram(bn.program)&&(St=!0,li=!0,Bi=!0),oe.id!==j&&(j=oe.id,li=!0),He.needsLights){const Bt=ic(I.state.lightProbeGridArray,re);He.lightProbeGrid!==Bt&&(He.lightProbeGrid=Bt,li=!0)}if(St||H!==N){v.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ut.setValue(K,"projectionMatrix",N.projectionMatrix),Ut.setValue(K,"viewMatrix",N.matrixWorldInverse);const Zn=Ut.map.cameraPosition;Zn!==void 0&&Zn.setValue(K,Tt.setFromMatrixPosition(N.matrixWorld)),k.logarithmicDepthBuffer&&Ut.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ut.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),H!==N&&(H=N,li=!0,Bi=!0)}if(He.needsLights&&(en.state.sunShadowMap.length>0&&Ut.setValue(K,"sunShadowMap",en.state.sunShadowMap,he),en.state.directionalShadowMap.length>0&&Ut.setValue(K,"directionalShadowMap",en.state.directionalShadowMap,he),en.state.spotShadowMap.length>0&&Ut.setValue(K,"spotShadowMap",en.state.spotShadowMap,he),en.state.pointShadowMap.length>0&&Ut.setValue(K,"pointShadowMap",en.state.pointShadowMap,he)),re.isSkinnedMesh){Ut.setOptional(K,re,"bindMatrix"),Ut.setOptional(K,re,"bindMatrixInverse");const Bt=re.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(K,"boneTexture",Bt.boneTexture,he))}re.isBatchedMesh&&(Ut.setOptional(K,re,"batchingTexture"),Ut.setValue(K,"batchingTexture",re._matricesTexture,he),Ut.setOptional(K,re,"batchingIdTexture"),Ut.setValue(K,"batchingIdTexture",re._indirectTexture,he),Ut.setOptional(K,re,"batchingColorTexture"),re._colorsTexture!==null&&Ut.setValue(K,"batchingColorTexture",re._colorsTexture,he));const ci=pe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&$.update(re,pe,bn),(li||He.receiveShadow!==re.receiveShadow)&&(He.receiveShadow=re.receiveShadow,Ut.setValue(K,"receiveShadow",re.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&J.environment!==null&&(Xt.envMapIntensity.value=J.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Qw()),li){if(Ut.setValue(K,"toneMappingExposure",O.toneMappingExposure),He.needsLights&&rc(Xt,Bi),Ge&&oe.fog===!0&&Qe.refreshFogUniforms(Xt,Ge),Qe.refreshMaterialUniforms(Xt,oe,ce,ae,I.state.transmissionRenderTarget[N.id]),He.needsLights&&He.lightProbeGrid){const Bt=He.lightProbeGrid;Xt.probesSH.value=Bt.texture,Xt.probesMin.value.copy(Bt.boundingBox.min),Xt.probesMax.value.copy(Bt.boundingBox.max),Xt.probesResolution.value.copy(Bt.resolution)}Ul.upload(K,ea(He),Xt,he)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ul.upload(K,ea(He),Xt,he),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ut.setValue(K,"center",re.center),Ut.setValue(K,"modelViewMatrix",re.modelViewMatrix),Ut.setValue(K,"normalMatrix",re.normalMatrix),Ut.setValue(K,"modelMatrix",re.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let Zn=0,ui=Bt.length;Zn<ui;Zn++){const di=Bt[Zn];ye.update(di,bn),ye.bind(di,bn)}}return bn}function rc(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function ta(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(N,J,pe){const oe=ne.get(N);oe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ne.get(N.texture).__webglTexture=J,ne.get(N.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:pe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const pe=ne.get(N);pe.__webglFramebuffer=J,pe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,pe=0){X=N,ie=J,Z=pe;let oe=null,re=!1,Ge=!1;if(N){const Be=ne.get(N);if(Be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(K.FRAMEBUFFER,Be.__webglFramebuffer),D.copy(N.viewport),Q.copy(N.scissor),ve=N.scissorTest,v.viewport(D),v.scissor(Q),v.setScissorTest(ve),j=-1;return}else if(Be.__webglFramebuffer===void 0)he.setupRenderTarget(N);else if(Be.__hasExternalTextures)he.rebindTextures(N,ne.get(N.texture).__webglTexture,ne.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const xt=N.depthTexture;if(Be.__boundDepthTexture!==xt){if(xt!==null&&ne.has(xt)&&(N.width!==xt.image.width||N.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(N)}}const Ze=N.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const rt=ne.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(rt[J])?oe=rt[J][pe]:oe=rt[J],re=!0):N.samples>0&&he.useMultisampledRTT(N)===!1?oe=ne.get(N).__webglMultisampledFramebuffer:Array.isArray(rt)?oe=rt[pe]:oe=rt,D.copy(N.viewport),Q.copy(N.scissor),ve=N.scissorTest}else D.copy(Oe).multiplyScalar(ce).floor(),Q.copy(dt).multiplyScalar(ce).floor(),ve=Pt;if(pe!==0&&(oe=F),v.bindFramebuffer(K.FRAMEBUFFER,oe)&&v.drawBuffers(N,oe),v.viewport(D),v.scissor(Q),v.setScissorTest(ve),re){const Be=ne.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,Be.__webglTexture,pe)}else if(Ge){const Be=J;for(let Ze=0;Ze<N.textures.length;Ze++){const rt=ne.get(N.textures[Ze]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ze,rt.__webglTexture,pe,Be)}}else if(N!==null&&pe!==0){const Be=ne.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Be.__webglTexture,pe)}j=-1};function na(N){const J=ne.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=k.textureFormatReadable(N.format),J.__typeReadable=k.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,pe,oe,re,Ge,Fe,Be=0){if(!(N&&N.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ze=Ze[Fe]),Ze){v.bindFramebuffer(K.FRAMEBUFFER,Ze);try{const rt=N.textures[Be],xt=rt.format,yt=rt.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be);const Ye=na(rt);if(Ye.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-oe&&pe>=0&&pe<=N.height-re&&K.readPixels(J,pe,oe,re,Le.convert(xt),Le.convert(yt),Ge)}finally{const rt=X!==null?ne.get(X).__webglFramebuffer:null;v.bindFramebuffer(K.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(N,J,pe,oe,re,Ge,Fe,Be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ze=Ze[Fe]),Ze)if(J>=0&&J<=N.width-oe&&pe>=0&&pe<=N.height-re){v.bindFramebuffer(K.FRAMEBUFFER,Ze);const rt=N.textures[Be],xt=rt.format,yt=rt.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be);const Ye=na(rt);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.bufferData(K.PIXEL_PACK_BUFFER,Ge.byteLength,K.STREAM_READ),K.readPixels(J,pe,oe,re,Le.convert(xt),Le.convert(yt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Zt=X!==null?ne.get(X).__webglFramebuffer:null;v.bindFramebuffer(K.FRAMEBUFFER,Zt);const jt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await __(K,jt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ge),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(At),K.deleteSync(jt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,pe=0){const oe=Math.pow(2,-pe),re=Math.floor(N.image.width*oe),Ge=Math.floor(N.image.height*oe),Fe=J!==null?J.x:0,Be=J!==null?J.y:0;he.setTexture2D(N,0),K.copyTexSubImage2D(K.TEXTURE_2D,pe,0,0,Fe,Be,re,Ge),v.unbindTexture()},this.copyTextureToTexture=function(N,J,pe=null,oe=null,re=0,Ge=0){let Fe,Be,Ze,rt,xt,yt,Ye,At,Zt;const jt=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(pe!==null)Fe=pe.max.x-pe.min.x,Be=pe.max.y-pe.min.y,Ze=pe.isBox3?pe.max.z-pe.min.z:1,rt=pe.min.x,xt=pe.min.y,yt=pe.isBox3?pe.min.z:0;else{const Xt=Math.pow(2,-re);Fe=Math.floor(jt.width*Xt),Be=Math.floor(jt.height*Xt),N.isDataArrayTexture?Ze=jt.depth:N.isData3DTexture?Ze=Math.floor(jt.depth*Xt):Ze=1,rt=0,xt=0,yt=0}oe!==null?(Ye=oe.x,At=oe.y,Zt=oe.z):(Ye=0,At=0,Zt=0);const Ft=Le.convert(J.format),on=Le.convert(J.type);let He;J.isData3DTexture?(he.setTexture3D(J,0),He=K.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(he.setTexture2DArray(J,0),He=K.TEXTURE_2D_ARRAY):(he.setTexture2D(J,0),He=K.TEXTURE_2D),v.activeTexture(K.TEXTURE0),v.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),v.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),v.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);const en=v.getParameter(K.UNPACK_ROW_LENGTH),Ct=v.getParameter(K.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(K.UNPACK_SKIP_PIXELS),St=v.getParameter(K.UNPACK_SKIP_ROWS),li=v.getParameter(K.UNPACK_SKIP_IMAGES);v.pixelStorei(K.UNPACK_ROW_LENGTH,jt.width),v.pixelStorei(K.UNPACK_IMAGE_HEIGHT,jt.height),v.pixelStorei(K.UNPACK_SKIP_PIXELS,rt),v.pixelStorei(K.UNPACK_SKIP_ROWS,xt),v.pixelStorei(K.UNPACK_SKIP_IMAGES,yt);const Bi=N.isDataArrayTexture||N.isData3DTexture,Ut=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const Xt=ne.get(N),ci=ne.get(J),Bt=ne.get(Xt.__renderTarget),Zn=ne.get(ci.__renderTarget);v.bindFramebuffer(K.READ_FRAMEBUFFER,Bt.__webglFramebuffer),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let ui=0;ui<Ze;ui++)Bi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ne.get(N).__webglTexture,re,yt+ui),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ne.get(J).__webglTexture,Ge,Zt+ui)),K.blitFramebuffer(rt,xt,Fe,Be,Ye,At,Fe,Be,K.DEPTH_BUFFER_BIT,K.NEAREST);v.bindFramebuffer(K.READ_FRAMEBUFFER,null),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(re!==0||N.isRenderTargetTexture||ne.has(N)){const Xt=ne.get(N),ci=ne.get(J);v.bindFramebuffer(K.READ_FRAMEBUFFER,G),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,Y);for(let Bt=0;Bt<Ze;Bt++)Bi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Xt.__webglTexture,re,yt+Bt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Xt.__webglTexture,re),Ut?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ci.__webglTexture,Ge,Zt+Bt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ci.__webglTexture,Ge),re!==0?K.blitFramebuffer(rt,xt,Fe,Be,Ye,At,Fe,Be,K.COLOR_BUFFER_BIT,K.NEAREST):Ut?K.copyTexSubImage3D(He,Ge,Ye,At,Zt+Bt,rt,xt,Fe,Be):K.copyTexSubImage2D(He,Ge,Ye,At,rt,xt,Fe,Be);v.bindFramebuffer(K.READ_FRAMEBUFFER,null),v.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ut?N.isDataTexture||N.isData3DTexture?K.texSubImage3D(He,Ge,Ye,At,Zt,Fe,Be,Ze,Ft,on,jt.data):J.isCompressedArrayTexture?K.compressedTexSubImage3D(He,Ge,Ye,At,Zt,Fe,Be,Ze,Ft,jt.data):K.texSubImage3D(He,Ge,Ye,At,Zt,Fe,Be,Ze,Ft,on,jt):N.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ge,Ye,At,Fe,Be,Ft,on,jt.data):N.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ge,Ye,At,jt.width,jt.height,Ft,jt.data):K.texSubImage2D(K.TEXTURE_2D,Ge,Ye,At,Fe,Be,Ft,on,jt);v.pixelStorei(K.UNPACK_ROW_LENGTH,en),v.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ct),v.pixelStorei(K.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(K.UNPACK_SKIP_ROWS,St),v.pixelStorei(K.UNPACK_SKIP_IMAGES,li),Ge===0&&J.generateMipmaps&&K.generateMipmap(He),v.unbindTexture()},this.initRenderTarget=function(N){ne.get(N).__webglFramebuffer===void 0&&he.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?he.setTextureCube(N,0):N.isData3DTexture?he.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?he.setTexture2DArray(N,0):he.setTexture2D(N,0),v.unbindTexture()},this.resetState=function(){ie=0,Z=0,X=null,v.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function s0(){if(typeof window>"u")return!1;try{const s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl")||s.getContext("experimental-webgl"))}catch{return!1}}function e2({projects:s=[],activeIdx:e=0,onActiveChange:t,onProjectClick:r,onPauseChange:o}){const c=se.useRef(null),d=se.useRef(null),f=se.useRef(0),p=se.useRef(!1),m=se.useRef(0),y=se.useRef(0),S=se.useRef(0),x=se.useRef(0),M=se.useRef(!1),E=se.useRef(e),L=se.useRef(e),w=se.useRef(t),_=se.useRef(o),U=se.useRef(!1),z=se.useRef(0),[T,P]=se.useState(1),I=se.useRef(T);se.useEffect(()=>{E.current=e},[e]),se.useEffect(()=>{w.current=t},[t]),se.useEffect(()=>{_.current=o},[o]),se.useEffect(()=>{I.current=T},[T]),se.useEffect(()=>{const j=()=>{const H=window.innerWidth;H<440?P(.7):H<640?P(.8):H<768?P(.88):H<1024?P(.95):P(1)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const A=s.length||1,b=A>=3&&A<=8?A:Math.min(6,Math.max(3,A)),R=Math.PI*2/b;se.useEffect(()=>{if(e===L.current||(L.current=e,s.length===0))return;const H=(Math.round(-f.current/R)%A+A)%A;let D=e-H;D>A/2&&(D-=A),D<-A/2&&(D+=A),z.current=f.current-D*R,U.current=!0},[e,A,R,s.length]),se.useEffect(()=>{let j,H=performance.now();const D=Q=>{var Ue;j=requestAnimationFrame(D);const ve=Math.min((Q-H)/1e3,.05);if(H=Q,U.current){const ae=z.current-f.current;Math.abs(ae)<.004?(f.current=z.current,U.current=!1):f.current+=ae*.14}else!p.current&&!M.current?(f.current+=(-.165+x.current)*ve,x.current*=.94,Math.abs(x.current)<.001&&(x.current=0)):!p.current&&M.current&&(f.current+=x.current*ve,x.current*=.94,Math.abs(x.current)<.001&&(x.current=0));d.current&&(d.current.style.transform=`scale(${I.current}) rotateX(-3.5deg) rotateY(${f.current}rad)`);const Re=-f.current/R,Ne=(Math.round(Re)%A+A)%A;Ne!==E.current&&(E.current=Ne,L.current=Ne,(Ue=w.current)==null||Ue.call(w,Ne))};return j=requestAnimationFrame(D),()=>cancelAnimationFrame(j)},[R,A]);const O=j=>{var H,D,Q;j.button!==void 0&&j.button!==0||(p.current=!0,m.current=j.clientX,y.current=f.current,S.current=0,U.current=!1,x.current=0,(H=_.current)==null||H.call(_,!0),(Q=(D=j.target).setPointerCapture)==null||Q.call(D,j.pointerId))},B=j=>{if(!p.current)return;const H=j.clientX-m.current;S.current=Math.abs(H),f.current=y.current+H*.0075},V=j=>{var H,D,Q;p.current&&(p.current=!1,(H=_.current)==null||H.call(_,!1),(Q=(D=j.target).releasePointerCapture)==null||Q.call(D,j.pointerId))},F=j=>{j.preventDefault(),U.current=!1;const H=Math.abs(j.deltaY)>=Math.abs(j.deltaX)?j.deltaY:j.deltaX;Math.abs(H)<.2||(x.current-=H*.0028,x.current=Math.max(-2.5,Math.min(2.5,x.current)))},G=j=>{S.current>6||(r?r(j):j!=null&&j.demoUrl&&j.demoUrl!=="https://github.com/stl-sahadat"?window.open(j.demoUrl,"_blank","noopener,noreferrer"):j!=null&&j.githubUrl&&window.open(j.githubUrl,"_blank","noopener,noreferrer"))},Y=Array.from({length:b},(j,H)=>H),ie=Math.round(2*275*Math.tan(Math.PI/b)+2),Z=-Math.round(ie/2),X=["linear-gradient(135deg, #1e1b4b 0%, #0284c7 40%, #f97316 100%)","linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #831843 100%)","linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)","linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)","linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #3b0764 100%)"];return l.jsx("div",{ref:c,className:"w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing overflow-visible",onPointerDown:O,onPointerMove:B,onPointerUp:V,onPointerCancel:V,onPointerEnter:()=>{var j;M.current=!0,(j=_.current)==null||j.call(_,!0)},onPointerLeave:j=>{M.current=!1,V(j)},onWheel:F,title:"Drag or swipe to rotate the 3D showcase",children:l.jsxs("div",{className:"relative w-full max-w-[620px] h-[340px] flex items-center justify-center overflow-visible",style:{perspective:"1100px",perspectiveOrigin:"50% 50%",maskImage:"linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)"},children:[l.jsxs("div",{ref:d,className:"absolute w-0 h-0",style:{transformStyle:"preserve-3d",transform:`scale(${T}) rotateX(-3.5deg) rotateY(0rad)`},children:[l.jsx("div",{className:"absolute rounded-full pointer-events-none",style:{width:"380px",height:"380px",left:"-190px",top:"-190px",transform:"rotateX(90deg)",background:"radial-gradient(circle at center, #0a0a14 0%, #030306 85%)",boxShadow:"0 0 60px rgba(0,0,0,0.95)"}}),Y.map(j=>{const H=j*(360/b),D=j%A,Q=s[D]||s[0]||{},ve=X[j%X.length];return l.jsxs("div",{onClick:()=>G(Q),className:"absolute overflow-hidden cursor-pointer",style:{width:`${ie}px`,height:"250px",left:`${Z}px`,top:"-125px",transform:`rotateY(${H}deg) translateZ(275px)`,transformStyle:"preserve-3d",backfaceVisibility:"hidden",background:"#090912",borderRight:"1.5px solid rgba(255,255,255,0.22)",borderLeft:"1px solid rgba(255,255,255,0.08)",boxShadow:"inset 0 1.5px 0 rgba(255,255,255,0.25), inset 0 -1.5px 0 rgba(239,68,68,0.3)"},children:[Q.image?l.jsx("img",{src:Q.image,alt:Q.title||"Project",className:"absolute inset-0 w-full h-full object-cover",loading:"eager",onError:Re=>{Re.currentTarget.style.display="none"}}):l.jsx("div",{className:"absolute inset-0",style:{background:ve}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg, rgba(5,5,10,0.10) 0%, rgba(5,5,10,0.30) 40%, rgba(5,5,10,0.88) 80%, #050508 100%)"}}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 22%, transparent 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.45) 100%)"}}),l.jsx("div",{className:"absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-black/85 border border-white/28 text-[10px] font-mono font-bold tracking-widest text-zinc-200 uppercase backdrop-blur-md shadow-md pointer-events-none",children:Q.badge||Q.category||"FEATURED"}),l.jsxs("div",{className:"absolute bottom-3.5 left-5 right-28 pointer-events-none",children:[l.jsx("div",{className:"uppercase tracking-wider text-white drop-shadow-md leading-none truncate",style:{fontFamily:'"Bebas Neue", "Impact", "Arial Black", sans-serif',fontSize:"28px",letterSpacing:"0.05em",textShadow:"0 2px 10px rgba(0,0,0,0.85)"},children:Q.title}),l.jsx("div",{className:"font-bold tracking-widest text-red-500 uppercase mt-0.5 drop-shadow truncate",style:{fontFamily:'"JetBrains Mono", monospace',fontSize:"10px",letterSpacing:"0.12em",textShadow:"0 1px 4px rgba(0,0,0,0.9)"},children:Q.tagline||Q.category||"WEB PLATFORM"})]}),l.jsxs("div",{className:"absolute bottom-3.5 right-4 px-3 py-1 rounded-full bg-black/90 border border-red-500/85 shadow-[0_0_12px_rgba(239,68,68,0.45)] flex items-center gap-1.5 text-[11px] font-bold text-white tracking-wider pointer-events-none",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]"}),l.jsx("span",{children:"LIVE ↗"})]})]},`slot-${j}`)})]}),l.jsx("div",{className:"absolute top-8 left-6 right-6 h-6 rounded-[50%] pointer-events-none",style:{borderTop:"1.5px solid rgba(255,255,255,0.22)",boxShadow:"0 -2px 12px rgba(255,255,255,0.06)"}}),l.jsx("div",{className:"absolute bottom-8 left-6 right-6 h-6 rounded-[50%] pointer-events-none",style:{borderBottom:"1.5px solid rgba(239,68,68,0.25)",boxShadow:"0 2px 14px rgba(239,68,68,0.12)"}})]})})}function t2(s){const[e,t]=se.useState(()=>!s0());return se.useEffect(()=>{s0()||t(!0)},[]),e?l.jsx(e2,{...s}):l.jsx(n2,{...s,onFallback:()=>t(!0)})}function n2({projects:s=[],activeIdx:e=0,onActiveChange:t,onProjectClick:r,onPauseChange:o,onFallback:c}){const d=se.useRef(null),f=se.useRef(0),p=se.useRef(!1),m=se.useRef(!1),y=se.useRef(0),S=se.useRef(0),x=se.useRef(0),M=se.useRef(e),E=se.useRef(t),L=se.useRef(o),w=se.useRef(e),_=se.useRef(!1),U=se.useRef(0),z=se.useRef(0);return se.useEffect(()=>{L.current=o},[o]),se.useEffect(()=>{M.current=e},[e]),se.useEffect(()=>{E.current=t},[t]),se.useEffect(()=>{if(e===w.current||(w.current=e,s.length===0))return;const T=s.length||1,P=T>=3&&T<=8?T:Math.min(6,Math.max(3,T)),I=Math.PI*2/P,b=(Math.round(-f.current/I)%T+T)%T;let R=e-b;R>T/2&&(R-=T),R<-T/2&&(R+=T),U.current=f.current-R*I,_.current=!0},[e,s.length]),se.useEffect(()=>{const T=d.current;if(!T||s.length===0)return;let P,I,A,b,R;const O=[],B=s.length||1,V=B>=3&&B<=8?B:Math.min(6,Math.max(3,B)),F=2.75,G=1.55,Y=Math.PI*2/V,ie=Y;try{I=new k_;const Z=typeof window<"u"&&window.innerWidth<768,X=T.clientWidth||600,j=T.clientHeight||420;A=new si(46,X/j,.1,100),A.position.set(0,.02,5.2),A.lookAt(0,.02,0);try{P=new r0({alpha:!0,antialias:!Z,powerPreference:"default"})}catch{try{P=new r0({alpha:!0,antialias:!1})}catch{console.warn("WebGL completely unavailable, activating fallback."),c==null||c();return}}P.setPixelRatio(Z?1:Math.min(window.devicePixelRatio||1,2)),P.setSize(X,j),P.setClearColor(0,0);const H=P.domElement;H.style.display="block",H.style.maxWidth="100%",H.style.maxHeight="100%",H.style.outline="none",T.innerHTML="",T.appendChild(H),b=new Ha,b.rotation.x=-.035,I.add(b);const D=F*.58,Q=new Yl(D,D,G*1.15,Z?16:32,1,!1),ve=new Xl({color:328968,transparent:!0,opacity:.96}),Re=new Mi(Q,ve);Re.position.y=0,b.add(Re);const Ne=[],Ue=Z?512:1024,ae=Z?320:640,ce=Z?.5:1;s.forEach((Ae,We)=>{const k=document.createElement("canvas");k.width=Ue,k.height=ae;const v=k.getContext("2d"),ee=new W_(k);ee.colorSpace=Yn,ee.minFilter=xn,ee.magFilter=xn,Ne.push({texture:ee,canvas:k,ctx:v,proj:Ae,idx:We,texWidth:Ue,texHeight:ae,scaleFactor:ce});const ne=(he=null)=>{if(!v)return;if(v.save(),ce!==1&&v.scale(ce,ce),v.clearRect(0,0,1024,640),v.fillStyle="#0a0a14",v.fillRect(0,0,1024,640),he)try{v.drawImage(he,0,0,1024,640)}catch{const Kn=v.createLinearGradient(0,0,1024,640);Kn.addColorStop(0,"#1a0508"),Kn.addColorStop(.5,"#0d0d1a"),Kn.addColorStop(1,"#050508"),v.fillStyle=Kn,v.fillRect(0,0,1024,640)}else{const fn=v.createLinearGradient(0,0,1024,640);fn.addColorStop(0,"#1a0508"),fn.addColorStop(.5,"#0d0d1a"),fn.addColorStop(1,"#050508"),v.fillStyle=fn,v.fillRect(0,0,1024,640)}const we=v.createLinearGradient(0,0,0,640);we.addColorStop(0,"rgba(5, 5, 8, 0.20)"),we.addColorStop(.4,"rgba(5, 5, 8, 0.40)"),we.addColorStop(.75,"rgba(5, 5, 8, 0.88)"),we.addColorStop(1,"rgba(5, 5, 8, 0.98)"),v.fillStyle=we,v.fillRect(0,0,1024,640);const Ce=v.createLinearGradient(0,0,1024,0);Ce.addColorStop(0,"rgba(255, 255, 255, 0.12)"),Ce.addColorStop(.2,"rgba(255, 255, 255, 0.02)"),Ce.addColorStop(.5,"rgba(0, 0, 0, 0)"),Ce.addColorStop(.8,"rgba(0, 0, 0, 0.1)"),Ce.addColorStop(1,"rgba(0, 0, 0, 0.35)"),v.fillStyle=Ce,v.fillRect(0,0,1024,640),v.strokeStyle="rgba(255, 255, 255, 0.25)",v.lineWidth=2.5,v.beginPath(),v.moveTo(1023,0),v.lineTo(1023,640),v.stroke(),v.strokeStyle="rgba(255, 255, 255, 0.08)",v.lineWidth=1.5,v.beginPath(),v.moveTo(1,0),v.lineTo(1,640),v.stroke(),v.strokeStyle="rgba(255, 255, 255, 0.20)",v.lineWidth=2,v.beginPath(),v.moveTo(0,1),v.lineTo(1024,1),v.stroke(),v.strokeStyle="rgba(239, 35, 60, 0.35)",v.lineWidth=2,v.beginPath(),v.moveTo(0,639),v.lineTo(1024,639),v.stroke();const ge=(Ae.badge||Ae.category||"FEATURED").toUpperCase();v.font="bold 20px monospace";const Ie=v.measureText(ge).width+36,Qe=36,De=1024-Ie-40,Pe=36;v.fillStyle="rgba(7, 7, 14, 0.85)",v.beginPath(),v.roundRect(De,Pe,Ie,Qe,18),v.fill(),v.strokeStyle="rgba(255, 255, 255, 0.3)",v.lineWidth=1.5,v.stroke(),v.fillStyle="#e4e4e7",v.font="bold 18px monospace",v.fillText(ge,De+18,Pe+24);const et=(Ae.title||"UNTITLED PROJECT").toUpperCase();v.fillStyle="#ffffff",v.font='900 52px "Bebas Neue", "Impact", "Arial Black", sans-serif',v.shadowColor="rgba(0, 0, 0, 0.8)",v.shadowBlur=12,v.shadowOffsetX=0,v.shadowOffsetY=4;let tt=et;if(v.measureText(tt).width>720){for(;v.measureText(tt+"...").width>720&&tt.length>0;)tt=tt.slice(0,-1);tt+="..."}v.fillText(tt,48,550),v.shadowColor="transparent",v.shadowBlur=0;const ft=(Ae.tagline||Ae.category||"WEB APPLICATION").toUpperCase();v.fillStyle="#ef233c",v.font="bold 22px monospace";let $=ft;if(v.measureText($).width>720){for(;v.measureText($+"...").width>720&&$.length>0;)$=$.slice(0,-1);$+="..."}v.fillText($,48,588);const ke="LIVE ↗",_e=142,Le=44,ze=1024-_e-48,ye=548,Ke=5,$e=9,Lt=18;v.shadowColor="rgba(239, 35, 60, 0.5)",v.shadowBlur=16,v.fillStyle="rgba(7, 7, 14, 0.88)",v.beginPath(),v.roundRect(ze,ye,_e,Le,22),v.fill(),v.strokeStyle="rgba(239, 35, 60, 0.95)",v.lineWidth=2,v.stroke(),v.shadowColor="transparent",v.shadowBlur=0;const Et=ze+Lt+Ke,an=ye+Le/2;v.fillStyle="#ef233c",v.beginPath(),v.arc(Et,an,Ke,0,Math.PI*2),v.fill(),v.fillStyle="#ffffff",v.font="bold 20px monospace",v.fillText(ke,Et+Ke+$e,ye+28),v.restore(),ee.needsUpdate=!0};if(ne(),Ae.image){const he=new Image;he.crossOrigin="anonymous",he.onload=()=>ne(he),he.src=Ae.image}});for(let Ae=0;Ae<V;Ae++){const We=Ae%B,k=Ae*Y-ie/2,v=new Yl(F,F,G,32,1,!0,k,ie),ee=new Xl({map:Ne[We].texture,transparent:!0,side:Lr}),ne=new Mi(v,ee);ne.userData={slotIdx:Ae,currentProjIdx:We,proj:s[We]},O.push(ne),b.add(ne)}const be=new n1,Ve=new kt,Oe=Ae=>{var ee,ne,he,we;const We=H.getBoundingClientRect(),k=Ae.clientX||((ne=(ee=Ae.touches)==null?void 0:ee[0])==null?void 0:ne.clientX)||0,v=Ae.clientY||((we=(he=Ae.touches)==null?void 0:he[0])==null?void 0:we.clientY)||0;Ve.x=(k-We.left)/We.width*2-1,Ve.y=-((v-We.top)/We.height)*2+1},dt=Ae=>{var We,k,v;Ae.button!==void 0&&Ae.button!==0&&Ae.button!==1||(Ae.button===1&&Ae.preventDefault(),_.current=!1,z.current=0,m.current=!0,p.current=!0,y.current=Ae.clientX||((k=(We=Ae.touches)==null?void 0:We[0])==null?void 0:k.clientX)||0,S.current=f.current,x.current=0,(v=L.current)==null||v.call(L,!0))},Pt=Ae=>{var We,k;if(Oe(Ae),m.current){const ee=(Ae.clientX||((k=(We=Ae.touches)==null?void 0:We[0])==null?void 0:k.clientX)||0)-y.current;x.current=Math.abs(ee),f.current=S.current+ee*.018}else{be.setFromCamera(Ve,A);const v=be.intersectObjects(O);H.style.cursor=v.length>0?"pointer":"grab"}},ot=()=>{var Ae;m.current&&(m.current=!1),p.current=!1,(Ae=L.current)==null||Ae.call(L,!1)},_t=Ae=>{Ae.preventDefault(),_.current=!1;const We=Math.abs(Ae.deltaY)>=Math.abs(Ae.deltaX)?Ae.deltaY:Ae.deltaX;Math.abs(We)<.2||(z.current-=We*.0028,z.current=Math.max(-2.8,Math.min(2.8,z.current)))},bt=Ae=>{if(x.current>8)return;Oe(Ae),be.setFromCamera(Ve,A);const We=be.intersectObjects(O);if(We.length>0){const k=We[0].object.userData,v=s[k.currentProjIdx]||k.proj;r?r(v):v!=null&&v.demoUrl&&v.demoUrl!=="https://github.com/stl-sahadat"?window.open(v.demoUrl,"_blank","noopener,noreferrer"):v!=null&&v.githubUrl&&window.open(v.githubUrl,"_blank","noopener,noreferrer")}},ht=()=>{var Ae;p.current=!0,(Ae=L.current)==null||Ae.call(L,!0)},Tt=()=>{var Ae;p.current=!1,m.current&&(m.current=!1),(Ae=L.current)==null||Ae.call(L,!1)};H.addEventListener("mouseenter",ht),H.addEventListener("mouseleave",Tt);const de=Ae=>{Ae.preventDefault(),console.warn("WebGL context lost, switching to zero-gap fallback."),c==null||c()};H.addEventListener("webglcontextlost",de),H.addEventListener("mousedown",dt),window.addEventListener("mousemove",Pt),window.addEventListener("mouseup",ot),H.addEventListener("mouseleave",ot),H.addEventListener("wheel",_t,{passive:!1}),H.addEventListener("click",bt),H.addEventListener("touchstart",dt,{passive:!0}),window.addEventListener("touchmove",Pt,{passive:!0}),window.addEventListener("touchend",ot);const lt=()=>{if(!T)return;const Ae=T.clientWidth||600,We=T.clientHeight||380;A.aspect=Ae/We,A.updateProjectionMatrix(),P.setSize(Ae,We),P.render(I,A)};window.addEventListener("resize",lt);let nt=null;typeof ResizeObserver<"u"&&T&&(nt=new ResizeObserver(Ae=>{for(const We of Ae){const k=We.contentRect.width,v=We.contentRect.height;k>50&&v>50&&P&&A&&(A.aspect=k/v,A.updateProjectionMatrix(),P.setSize(k,v),P.render(I,A))}}),nt.observe(T));let at=performance.now();P.render(I,A);const K=Ae=>{var ee;R=requestAnimationFrame(K);const We=Math.min((Ae-at)/1e3,.05);if(at=Ae,_.current){const ne=U.current-f.current;Math.abs(ne)<.005?(f.current=U.current,_.current=!1):f.current+=ne*.12}else!m.current&&!p.current?(f.current+=(-.165+z.current)*We,z.current*=.94,Math.abs(z.current)<.001&&(z.current=0)):!m.current&&p.current&&(f.current+=z.current*We,z.current*=.94,Math.abs(z.current)<.001&&(z.current=0));if(b.rotation.y=f.current,B>V)for(let ne=0;ne<V;ne++){const he=f.current+ne*Y;if(Math.cos(he)<-.15){const we=Math.round((-f.current-ne*Y)/(Math.PI*2)),ge=((ne+we*V)%B+B)%B,xe=O[ne];xe&&xe.userData.currentProjIdx!==ge&&(xe.userData.currentProjIdx=ge,xe.userData.proj=s[ge],xe.material.map=(ee=Ne[ge])==null?void 0:ee.texture,xe.material.needsUpdate=!0)}}const k=-f.current/Y,v=(Math.round(k)%B+B)%B;v!==M.current&&(M.current=v,w.current=v,E.current&&E.current(v)),P.render(I,A)};return R=requestAnimationFrame(K),()=>{nt&&nt.disconnect(),cancelAnimationFrame(R),window.removeEventListener("resize",lt),H.removeEventListener("mouseenter",ht),H.removeEventListener("mouseleave",Tt),H.removeEventListener("webglcontextlost",de),H.removeEventListener("mousedown",dt),window.removeEventListener("mousemove",Pt),window.removeEventListener("mouseup",ot),H.removeEventListener("wheel",_t),H.removeEventListener("click",bt),H.removeEventListener("touchstart",dt),window.removeEventListener("touchmove",Pt),window.removeEventListener("touchend",ot),T.contains(H)&&T.removeChild(H),P.dispose()}}catch(Z){console.warn("Three.js initialization failed, switching to zero-gap fallback:",Z),c==null||c()}},[s]),l.jsx("div",{ref:d,className:"w-full h-[350px] sm:h-[400px] md:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none overflow-visible",title:"Drag or swipe to rotate the curved 3D glass cup"})}function i2(s){let e=0;if(s>=0)s<=1?e=s*125:s<=2?e=125+(s-1)*110:e=235+(s-2)*110;else{const p=-s;p<=1?e=-p*115:p<=2?e=-115-(p-1)*95:e=-210-(p-2)*80}let t=-10;if(s>=0)s<=1?t=-10+s*35:s<=2?t=25+(s-1)*40:t=65+(s-2)*45;else{const p=-s;p<=1?t=-10+p*38:p<=2?t=28+(p-1)*40:t=68+(p-2)*32}const r=s*12,o=Math.abs(s);let c=1.05;o<=1?c=1.05-o*.11:o<=2?c=.94-(o-1)*.09:c=.85-(o-2)*.1;let d=1;if(s>=0)s<=1?d=1-s*.1:s<=2?d=.9-(s-1)*.35:s<=2.8?d=.55-(s-2)/.8*.55:d=0;else{const p=-s;p<=1?d=1-p*.18:p<=2?d=.82-(p-1)*.37:p<=2.8?d=.45-(p-2)/.8*.45:d=0}const f=Math.max(1,Math.round(40-Math.abs(s)*10));return{translateX:e,translateY:t,rotateZ:r,scale:c,opacity:d,zIndex:f}}function r2({projects:s=[],activeIdx:e=0,onActiveChange:t,onPauseChange:r}){const o=s.length,c=se.useRef(null),d=se.useRef(null),f=se.useRef([]),p=se.useRef([]),m=se.useRef(null),y=se.useRef(t);se.useEffect(()=>{y.current=t},[t]);const S=se.useRef(s);se.useEffect(()=>{S.current=s},[s]);const x=se.useRef(e||0),M=se.useRef(null),E=se.useRef(!1),L=se.useRef(0),w=se.useRef(0),_=se.useRef(performance.now()),U=se.useRef(e||0),z=.46,T=O=>{if(o<=0)return;const B=x.current;let V=(O-B%o)%o;V<-o/2&&(V+=o),V>o/2&&(V+=o),M.current=B+V};se.useEffect(()=>{e!==U.current&&(U.current=e,T(e))},[e,o]),se.useEffect(()=>{if(o<=0)return;let O,B=!1;_.current=performance.now();let V=null;const F=()=>{B||(B=!0,_.current=performance.now(),O=requestAnimationFrame(Y))},G=()=>{B&&(B=!1,cancelAnimationFrame(O))};typeof IntersectionObserver<"u"&&c.current?(V=new IntersectionObserver(ie=>{var X;((X=ie[0])==null?void 0:X.isIntersecting)??!0?F():G()},{threshold:.02}),V.observe(c.current)):F();const Y=ie=>{if(!B)return;const Z=Math.min((ie-_.current)/1e3,.05);if(_.current=ie,M.current!==null){const H=(M.current-x.current)*.15;x.current+=H,Math.abs(M.current-x.current)<.005&&(x.current=M.current,M.current=null)}else!E.current&&o>1&&(x.current+=z*Z);const X=x.current;for(let H=0;H<o;H++){const D=f.current[H];if(!D)continue;let Q=(H-X)%o;Q<-o/2&&(Q+=o),Q>o/2&&(Q-=o);const ve=i2(Q);D.style.transform=`translate3d(${ve.translateX}px, ${ve.translateY}px, 0) rotate(${ve.rotateZ}deg) scale(${ve.scale})`,D.style.opacity=ve.opacity,D.dataset.z!==String(ve.zIndex)&&(D.dataset.z=String(ve.zIndex),D.style.zIndex=ve.zIndex);const Re=ve.opacity>.08;D.dataset.click!==(Re?"1":"0")&&(D.dataset.click=Re?"1":"0",D.style.pointerEvents=Re?"auto":"none");const Ne=p.current[H];if(Ne){const Ue=Math.max(0,1-Math.abs(Q)*2.2);Ne.style.opacity=Ue}}d.current&&(d.current.style.transform=`translate3d(0,0,0) rotate(${-X*25}deg)`);const j=(Math.round(X)%o+o)%o;if(j!==U.current){U.current=j;const D=S.current[j];if(m.current&&D){const Q=D.demoUrl&&D.demoUrl!=="https://github.com/stl-sahadat"?D.demoUrl:D.githubUrl||D.demoUrl||"#";m.current.href=Q,m.current.title=`Visit ${D.title||"Live Demo"}`}y.current&&y.current(j)}B&&(O=requestAnimationFrame(Y))};return()=>{V&&V.disconnect(),G()}},[o]);const P=O=>{E.current=!0,M.current=null,L.current=O.clientX||O.touches&&O.touches[0].clientX||0,w.current=x.current},I=O=>{if(!E.current)return;const V=(O.clientX||O.touches&&O.touches[0].clientX||0)-L.current;x.current=w.current-V/110},A=()=>{E.current&&(E.current=!1)};se.useEffect(()=>{const O=c.current;if(!O)return;const B=V=>{V.preventDefault(),M.current=null;const F=(V.deltaY||V.deltaX)*.0025;x.current+=F};return O.addEventListener("wheel",B,{passive:!1}),()=>O.removeEventListener("wheel",B)},[o]);const b=s[e]||s[0],R=b!=null&&b.demoUrl&&(b==null?void 0:b.demoUrl)!=="https://github.com/stl-sahadat"?b.demoUrl:(b==null?void 0:b.githubUrl)||(b==null?void 0:b.demoUrl)||"#";return l.jsxs("div",{ref:c,onMouseDown:P,onMouseMove:I,onMouseUp:A,onTouchStart:P,onTouchMove:I,onTouchEnd:A,className:"relative w-full h-[470px] sm:h-[510px] flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"}),l.jsx("div",{className:"absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none select-none",children:l.jsx("div",{ref:d,className:"w-full h-full rounded-full border-2 border-dashed border-red-500/20 bg-gradient-to-b from-[#120508]/40 to-transparent flex items-center justify-center relative shadow-[0_0_80px_rgba(239,35,60,0.1)_inset]",children:l.jsxs("div",{className:"w-[390px] h-[390px] rounded-full border border-white/10 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-x-0 top-3 text-center",children:l.jsx("span",{className:"font-mono text-[9px] uppercase tracking-[0.3em] text-crimson/80 font-bold",children:"▲ ROTATING CIRCLE WHEEL"})}),l.jsx("div",{className:"w-[280px] h-[280px] rounded-full border border-white/5"})]})})}),l.jsx("div",{className:"relative w-full max-w-[500px] h-full flex items-center justify-center",children:s.map((O,B)=>l.jsxs("div",{ref:V=>f.current[B]=V,onClick:V=>{V.stopPropagation(),T(B)},style:{transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",transition:"none"},className:"absolute w-[240px] sm:w-[275px] h-[340px] sm:h-[385px] rounded-[24px] p-3.5 bg-gradient-to-b from-[#181824] via-[#0f0f18] to-[#08080f] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.85)] cursor-pointer group",children:[l.jsx("div",{ref:V=>p.current[B]=V,className:"absolute inset-0 rounded-[24px] border-2 border-red-500/90 pointer-events-none",style:{boxShadow:"0 20px 50px rgba(239,35,60,0.4), 0 0 25px rgba(239,35,60,0.25)",opacity:B===e?1:0,willChange:"opacity"}}),l.jsxs("div",{className:"relative w-full h-[62%] rounded-[18px] overflow-hidden bg-black/60 mb-3 border border-white/10",children:[l.jsx("img",{src:O.image,alt:O.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"}),l.jsx("div",{className:"absolute top-2.5 left-2.5",children:l.jsx("span",{className:"px-2.5 py-1 rounded-full bg-black/85 border border-white/20 text-[9px] font-mono font-bold tracking-wider text-white",children:O.badge||"APP"})})]}),l.jsxs("div",{className:"px-1 space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between gap-1",children:[l.jsx("span",{className:"text-[9px] font-mono font-bold uppercase tracking-widest text-crimson truncate",children:O.category||"APPLICATION"}),l.jsxs("span",{className:"text-[10px] font-mono text-zinc-500 font-bold",children:["#",String(B+1).padStart(2,"0")]})]}),l.jsx("h4",{className:"font-bebas text-lg sm:text-xl text-white tracking-wide truncate leading-tight group-hover:text-rose-400 transition-colors",children:O.title}),l.jsx("p",{className:"text-[11px] font-sans text-zinc-400 line-clamp-2 leading-relaxed",children:O.description})]}),l.jsxs("div",{className:"absolute bottom-3 left-4 right-4 flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-zinc-400 pointer-events-none",children:[l.jsx("span",{children:"PRODUCTION APP"}),l.jsx("span",{className:"text-zinc-500 font-mono text-[9px]",children:"CLOUD & AI SUITE"})]})]},O.id||B))}),l.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 z-50 select-none",children:l.jsxs("a",{ref:m,href:R,target:"_blank",rel:"noopener noreferrer",onClick:O=>{O.stopPropagation()},title:`Visit ${(b==null?void 0:b.title)||"Live Demo"}`,className:"group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full overflow-hidden border border-white/20 hover:border-crimson/50 bg-gradient-to-r from-[#14141e] via-[#0d0d14] to-[#181116] text-white text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(220,38,38,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)] cursor-pointer whitespace-nowrap",children:[l.jsx("div",{className:"absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"}),l.jsx(g0,{}),l.jsx("span",{className:"relative z-10 text-white font-bold tracking-wide",children:"Visit Live Demo"}),l.jsx(Ol,{size:14,className:"relative z-10 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"})]})})]})}function s2(s){let e=0;if(s>=0)s<=1?e=s*120:s<=2?e=120+(s-1)*95:e=215+(s-2)*75;else{const p=-s;p<=1?e=-p*120:p<=2?e=-120-(p-1)*95:e=-215-(p-2)*75}const t=Math.abs(s);let r=-t*55;t>1&&(r=-55-(t-1)*75);const o=-s*14;let c=1;t<=1?c=1-t*.08:t<=2?c=.92-(t-1)*.12:c=.8-(t-2)*.15;let d=1;t<=1?d=1-t*.18:t<=2?d=.82-(t-1)*.45:t<=2.8?d=.37-(t-2)/.8*.37:d=0;const f=Math.max(1,Math.round(50-t*12));return{translateY:e,translateZ:r,rotateX:o,scale:c,opacity:d,zIndex:f}}function a2({projects:s=[],activeIdx:e=0,onActiveChange:t,onProjectClick:r}){const o=s.length,c=se.useRef(null),d=se.useRef([]),f=se.useRef(t);se.useEffect(()=>{f.current=t},[t]);const p=se.useRef(r);se.useEffect(()=>{p.current=r},[r]);const m=se.useRef(s);se.useEffect(()=>{m.current=s},[s]);const y=se.useRef(e||0),S=se.useRef(null);se.useRef(!1),se.useRef(0),se.useRef(0);const x=se.useRef(performance.now()),M=se.useRef(e||0),[E,L]=se.useState(!1),w=se.useRef(!1);se.useEffect(()=>{w.current=E},[E]),se.useEffect(()=>{if(e===M.current||(M.current=e,o<=0))return;const z=y.current;let T=(e-z%o)%o;T<-o/2&&(T+=o),T>o/2&&(T-=o),S.current=z+T},[e,o]),se.useCallback(z=>{if(o<=0)return;const T=y.current;let P=(z-T%o)%o;P<-o/2&&(P+=o),P>o/2&&(P-=o),S.current=T+P},[o]);const _=se.useCallback(()=>{const z=Math.round(y.current);S.current=z-1},[]),U=se.useCallback(()=>{const z=Math.round(y.current);S.current=z+1},[]);return se.useEffect(()=>{if(o<=0)return;let z,T=!1;x.current=performance.now();let P=null;const I=()=>{T||(T=!0,x.current=performance.now(),z=requestAnimationFrame(b))},A=()=>{T&&(T=!1,cancelAnimationFrame(z))};typeof IntersectionObserver<"u"&&c.current?(P=new IntersectionObserver(R=>{var B;((B=R[0])==null?void 0:B.isIntersecting)??!0?I():A()},{threshold:.02}),P.observe(c.current)):I();const b=R=>{if(!T)return;const O=Math.min((R-x.current)/1e3,.05);if(x.current=R,S.current!==null){const G=S.current-y.current;y.current+=G*.14,Math.abs(G)<.004&&(y.current=S.current,S.current=null)}else o>1&&(y.current+=.52*O);const B=y.current,F=(Math.round(B)%o+o)%o;F!==M.current&&(M.current=F,f.current&&f.current(F));for(let G=0;G<o;G++){const Y=d.current[G];if(!Y)continue;let ie=(G-B)%o;ie<-o/2&&(ie+=o),ie>o/2&&(ie-=o);const Z=s2(ie);Y.style.transform=`translate3d(0, ${Z.translateY}px, ${Z.translateZ}px) rotateX(${Z.rotateX}deg) scale(${Z.scale})`,Y.style.opacity=String(Z.opacity),Y.dataset.z!==String(Z.zIndex)&&(Y.dataset.z=String(Z.zIndex),Y.style.zIndex=String(Z.zIndex));const X=Math.abs(ie)<.45;Y.dataset.front!==(X?"1":"0")&&(Y.dataset.front=X?"1":"0",X?(Y.classList.add("ring-2","ring-crimson/80","shadow-[0_20px_50px_rgba(239,35,60,0.35)]"),Y.classList.remove("ring-1","ring-white/10")):(Y.classList.remove("ring-2","ring-crimson/80","shadow-[0_20px_50px_rgba(239,35,60,0.35)]"),Y.classList.add("ring-1","ring-white/10")))}T&&(z=requestAnimationFrame(b))};return()=>{A(),P&&P.disconnect()}},[o]),se.useEffect(()=>{const z=c.current;if(!z)return;let T;const P=I=>{I.preventDefault(),I.stopPropagation();const A=(Math.abs(I.deltaY)>=Math.abs(I.deltaX)?I.deltaY:I.deltaX)*.0038;S.current=null,y.current+=A,clearTimeout(T),T=setTimeout(()=>{S.current=Math.round(y.current)},140)};return z.addEventListener("wheel",P,{passive:!1}),()=>{clearTimeout(T),z.removeEventListener("wheel",P)}},[]),l.jsxs("div",{ref:c,className:"relative w-full max-w-[560px] h-[480px] sm:h-[530px] flex items-center justify-center select-none overflow-visible cursor-pointer",style:{perspective:"1200px",perspectiveOrigin:"50% 50%"},children:[l.jsx("div",{className:"relative w-full h-full flex items-center justify-center",style:{transformStyle:"preserve-3d"},children:s.map((z,T)=>{const P=String(T+1).padStart(2,"0"),I=T===(Math.round(y.current)%o+o)%o;return l.jsxs("div",{ref:A=>{d.current[T]=A},onClick:A=>{A.stopPropagation();const b=z.githubUrl||"https://github.com/stl-sahadat";window.open(b,"_blank","noopener,noreferrer")},className:`absolute w-[92%] sm:w-[500px] h-[160px] sm:h-[175px] rounded-[28px] p-3 sm:p-4
                bg-[#090915]/92 hover:bg-[#0e0e1f]/95 backdrop-blur-2xl
                transition-shadow duration-300 ease-out cursor-pointer select-none
                flex items-center gap-4 sm:gap-5 will-change-transform`,style:{boxShadow:I?"0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(239, 35, 60, 0.30), inset 0 1px 2px rgba(255, 255, 255, 0.25)":"0 12px 30px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1)",border:I?"1.5px solid rgba(239, 35, 60, 0.85)":"1px solid rgba(255, 255, 255, 0.12)"},children:[l.jsxs("div",{className:"relative w-[130px] sm:w-[160px] h-full rounded-[20px] overflow-hidden shrink-0 border border-white/10 group/thumb",children:[z.image?l.jsx("img",{src:z.image,alt:z.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105",loading:"lazy"}):l.jsx("div",{className:"w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center",children:l.jsx(h0,{size:24,className:"text-crimson/60"})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"}),l.jsxs("div",{className:"absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"}),l.jsx("span",{className:"font-mono text-[10px] font-bold text-white tracking-wider",children:P})]})]}),l.jsxs("div",{className:"flex-1 flex flex-col justify-center h-full py-1 min-w-0 pr-1",children:[l.jsx("div",{className:"mb-1",children:l.jsx("span",{className:"font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-crimson font-black truncate block",children:z.category||"AI AUTOMATION"})}),l.jsx("h3",{className:"font-bebas text-xl sm:text-2xl 2xl:text-3xl text-white tracking-wide uppercase line-clamp-1 leading-tight group-hover:text-rose-200 transition-colors mb-2.5",children:z.title}),l.jsx("div",{className:"flex items-center gap-1.5 flex-wrap overflow-hidden max-h-[32px]",children:(z.tags||["LangGraph","Python","FastAPI"]).slice(0,3).map((A,b)=>l.jsx("span",{className:"px-2.5 py-0.5 rounded-md font-mono text-[9px] sm:text-[10px] font-semibold bg-white/[0.06] border border-white/10 text-zinc-300 shrink-0",children:A},`${T}-tag-${b}`))})]})]},z.id||T)})}),l.jsxs("div",{className:"absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-40",children:[l.jsx("button",{onClick:z=>{z.stopPropagation(),_()},className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0c0c18]/90 hover:bg-crimson border border-white/20 hover:border-crimson text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer",title:"Previous architecture (Slide Up)",children:l.jsx(Zx,{size:16})}),l.jsx("button",{onClick:z=>{z.stopPropagation(),U()},className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0c0c18]/90 hover:bg-crimson border border-white/20 hover:border-crimson text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer",title:"Next architecture (Slide Down)",children:l.jsx(Kx,{size:16})})]})]})}const er=[{accent:"#ef233c",spectrum:"conic-gradient(from 0deg, #ef233c, #ec4899, #f43f5e, #a855f7, #ef233c)",glowColor:"rgba(239, 35, 60, 0.55)"},{accent:"#06b6d4",spectrum:"conic-gradient(from 0deg, #06b6d4, #3b82f6, #00f0ff, #10b981, #06b6d4)",glowColor:"rgba(6, 182, 212, 0.55)"},{accent:"#a855f7",spectrum:"conic-gradient(from 0deg, #a855f7, #6366f1, #ec4899, #c084fc, #a855f7)",glowColor:"rgba(168, 85, 247, 0.55)"},{accent:"#10b981",spectrum:"conic-gradient(from 0deg, #10b981, #22c55e, #06b6d4, #84cc16, #10b981)",glowColor:"rgba(16, 185, 129, 0.55)"},{accent:"#f59e0b",spectrum:"conic-gradient(from 0deg, #f59e0b, #eab308, #ef4444, #fbbf24, #f59e0b)",glowColor:"rgba(245, 158, 11, 0.55)"},{accent:"#3b82f6",spectrum:"conic-gradient(from 0deg, #3b82f6, #00f0ff, #6366f1, #2563eb, #3b82f6)",glowColor:"rgba(59, 130, 246, 0.55)"},{accent:"#d946ef",spectrum:"conic-gradient(from 0deg, #d946ef, #ec4899, #8b5cf6, #f43f5e, #d946ef)",glowColor:"rgba(217, 70, 239, 0.55)"},{accent:"#f43f5e",spectrum:"conic-gradient(from 0deg, #f43f5e, #ef233c, #fb7185, #e11d48, #f43f5e)",glowColor:"rgba(244, 63, 94, 0.55)"},{accent:"#14b8a6",spectrum:"conic-gradient(from 0deg, #14b8a6, #06b6d4, #10b981, #3b82f6, #14b8a6)",glowColor:"rgba(20, 184, 166, 0.55)"},{accent:"#fb923c",spectrum:"conic-gradient(from 0deg, #fb923c, #f59e0b, #ef233c, #f43f5e, #fb923c)",glowColor:"rgba(251, 146, 60, 0.55)"}];function o2(s){const e=(s||"").toLowerCase().trim();if(e.includes("react")||e.includes("vite")||e.includes("tailwind"))return er[1];if(e.includes("go")||e.includes("golang")||e.includes("docker")||e.includes("kubernetes"))return er[5];if(e.includes("python")||e.includes("fastapi")||e.includes("node"))return er[4];if(e.includes("agent")||e.includes("crewai")||e.includes("rag")||e.includes("vault"))return er[0];if(e.includes("langchain")||e.includes("langgraph")||e.includes("openid")||e.includes("auth"))return er[2];if(e.includes("mtls")||e.includes("security")||e.includes("trust")||e.includes("gpt"))return er[3];if(e.includes("deepseek")||e.includes("cloud")||e.includes("gcp"))return er[8];let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return er[Math.abs(t)%er.length]}function l2({name:s,config:e}){const[t,r]=se.useState(!1),o=e||o2(s);return l.jsxs("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"relative shrink-0 select-none cursor-pointer py-1.5 transition-all duration-300",style:{transform:t?"translateY(-2px) scale(1.04)":"translateY(0) scale(1)"},children:[l.jsx("div",{className:"absolute -inset-[2px] rounded-full overflow-hidden blur-[6px] pointer-events-none transition-opacity duration-300",style:{opacity:t?.6:0},children:l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[260px] h-[260px] animate-beam-orbit pointer-events-none",style:{background:o.spectrum,animationDuration:"5s"}})}),l.jsxs("div",{className:"relative p-[1px] rounded-full overflow-hidden transition-all duration-300",style:{boxShadow:t?`0 0 14px ${o.accent}50, 0 4px 12px rgba(0,0,0,0.6)`:"0 1px 3px rgba(0, 0, 0, 0.4)"},children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 w-[260px] h-[260px] animate-beam-orbit pointer-events-none transition-opacity duration-300",style:{background:o.spectrum,animationDuration:"5s",opacity:t?.9:.25}}),l.jsxs("div",{className:"relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-300 bg-[#080811]/95 border border-white/8 backdrop-blur-md z-10",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0",style:{backgroundColor:o.accent,boxShadow:t?`0 0 8px 1px ${o.accent}`:`0 0 4px ${o.accent}`,transform:t?"scale(1.2)":"scale(1)"}}),l.jsx("span",{className:"font-mono text-[11px] sm:text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-300",style:{color:t?"#ffffff":"#d4d4d8",fontWeight:t?600:500},children:s})]})]})]})}const _d=[{id:"websites",label:"MY WEBSITES",badge:"WEB PLATFORMS",icon:f0,desc:"High-craft responsive web platforms, client portals, and e-commerce systems."},{id:"apps",label:"MY APPS",badge:"CLOUD & WEB APPS",icon:wv,desc:"Containerized cloud apps, real-time terminals, and full-stack software products."},{id:"automations",label:"MY AUTOMATIONS",badge:"AI & MULTI-AGENT SWARMS",icon:u0,desc:"Autonomous multi-agent orchestration, RAG engines, and enterprise workflow swarms."}];function yd({initialCategory:s="websites",customTitle:e,customSubtitle:t,sectionId:r="projects",hideTabs:o=!1}){const{data:c,trackEvent:d}=ss(),f=c.projects&&c.projects.length>0?c.projects:[],[p,m]=se.useState(s);se.useEffect(()=>{m(s)},[s]);const y=se.useMemo(()=>f.map((F,G)=>{let Y="automations";const ie=(F.category||"").toLowerCase(),Z=(F.title||"").toLowerCase();return Array.isArray(F.tags)&&F.tags.join(" ").toLowerCase(),F.id==="01"||Z.includes("coffee")||Z.includes("web builder")||ie.includes("e-commerce")||ie.includes("web")?Y="websites":F.id==="02"||F.id==="05"||F.id==="07"||F.id==="09"||F.id==="17"||F.id==="18"||ie.includes("app")||ie.includes("terminal")||ie.includes("suite")?Y="apps":Y="automations",{id:F.id||`0${G+1}`,title:F.title||"UNTITLED PROJECT",badge:F.badge||"PRODUCTION",category:F.category||"AI ARCHITECTURE & SOFTWARE",categoryType:Y,description:F.description||"Enterprise production software engineered for speed, scale, and resilience.",tags:Array.isArray(F.tags)?F.tags:typeof F.tags=="string"?F.tags.split(",").map(X=>X.trim()).filter(Boolean):["React","TypeScript","Tailwind CSS","AI Agents"],demoUrl:F.demoUrl||(F.altUrl?F.altUrl:"https://github.com/stl-sahadat"),altUrl:F.altUrl||null,githubUrl:F.githubUrl||"https://github.com/stl-sahadat",image:F.image||"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"}}),[f]),S=se.useMemo(()=>{const F=y.filter(G=>G.categoryType===p);return F.length>0?F:y},[y,p]),x=se.useMemo(()=>{const F=Array.from(new Set(S.flatMap(G=>Array.isArray(G.tags)?G.tags:[])));return F.length>0?F:["React 18","Vite","Tailwind CSS","Docker","Google Cloud Run","Python","FastAPI","CrewAI","LangChain","OpenAI GPT-4o","Multi-Agent Swarm","Vector DB","CI/CD"]},[S]),[M,E]=se.useState(!1),[L,w]=se.useState(0),[_,U]=se.useState(!1),z=F=>{m(F),w(0),d("Project Category Tab Switch",F)},T=se.useRef(null),P=se.useRef(null),I=se.useRef([]);se.useEffect(()=>{const F=T.current;if(!F)return;const G=Y=>{P.current&&(P.current.scrollLeft+=Y.deltaY*.8)};return F.addEventListener("wheel",G,{passive:!1}),()=>{F.removeEventListener("wheel",G)}},[]),se.useEffect(()=>{const F=I.current[L],G=P.current;if(F&&G){const Y=F.offsetLeft,ie=F.offsetWidth,Z=G.offsetWidth,X=Y-Z/2+ie/2;G.scrollTo({left:Math.max(0,X),behavior:"smooth"})}},[L,p]),se.useEffect(()=>{const F=()=>{U(window.innerWidth<1024)};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]);const A=F=>{w(F)},b=$l.useCallback(F=>{w(F)},[]),R=S[L]||S[0],[O,B]=se.useState("");se.useEffect(()=>{if(!R)return;const F=`${R.description||""}`;let G=0;B("");const Y=setInterval(()=>{G+=2,G<=F.length?B(F.slice(0,G)):(B(F),clearInterval(Y))},32);return()=>clearInterval(Y)},[R==null?void 0:R.id,p]);const V=_d.find(F=>F.id===p)||_d[0];return l.jsxs("section",{id:r,className:"py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent relative overflow-hidden select-none",children:[p==="automations"&&l.jsx("div",{className:"absolute inset-0 pointer-events-none select-none z-0",style:{background:`
              radial-gradient(circle at 18% 30%, rgba(239, 35, 60, 0.08) 0%, transparent 55%),
              radial-gradient(circle at 82% 70%, rgba(225, 29, 72, 0.06) 0%, transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(15, 15, 30, 0.40) 0%, transparent 70%)
            `}}),l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-16 relative z-10",children:[l.jsxs(qn,{animation:"fade-up",duration:700,children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12",children:[l.jsx("div",{children:l.jsx("h2",{className:"font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white light:text-zinc-900 leading-tight",children:e||l.jsxs(l.Fragment,{children:["PROJECTS THAT"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"SOLVE REAL PROBLEMS"})]})})}),l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:`w-2 h-2 rounded-full ${M?"bg-amber-400":"bg-crimson animate-pulse"}`}),l.jsxs("span",{className:"text-xs font-mono text-zinc-400 uppercase tracking-wider",children:[S.length," ",V.badge," (",y.length," TOTAL REPOSITORIES)"]})]})]}),!o&&l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-2.5 mb-10 rounded-2xl bg-[#090912]/90 dark:bg-[#090912]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] light:shadow-[0_10px_35px_rgba(0,0,0,0.06)]",children:[l.jsx("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 flex-wrap",children:_d.map(F=>{const G=F.icon,Y=p===F.id,ie=y.filter(Z=>Z.categoryType===F.id).length;return l.jsxs("button",{onClick:()=>z(F.id),className:`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${Y?"bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-[0_0_24px_rgba(239,35,60,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] border border-red-400/60 scale-[1.02]":"text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:bg-white/[0.07] dark:hover:bg-white/[0.07] light:hover:bg-black/[0.05] border border-transparent hover:border-white/10 dark:hover:border-white/10 light:hover:border-black/10"}`,children:[l.jsx(G,{size:15,className:Y?"text-white":"text-crimson"}),l.jsx("span",{children:F.label}),l.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${Y?"bg-black/35 text-white":"bg-white/10 dark:bg-white/10 light:bg-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-700"}`,children:ie})]},F.id)})}),l.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.04] border border-white/10 dark:border-white/10 light:border-black/10 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-crimson"}),l.jsx("span",{children:V.desc})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center animate-in fade-in duration-500",children:[l.jsx("div",{className:"lg:col-span-7 relative w-full flex items-center justify-center",children:p==="apps"?l.jsx(r2,{projects:S,activeIdx:L,onActiveChange:b,onPauseChange:F=>E(F),onProjectClick:null}):p==="automations"?l.jsx(a2,{projects:S,activeIdx:L,onActiveChange:b,onProjectClick:F=>{const G=(F==null?void 0:F.githubUrl)||"https://github.com/stl-sahadat";window.open(G,"_blank","noopener,noreferrer")}}):l.jsx(t2,{projects:S,activeIdx:L,onActiveChange:b,onPauseChange:F=>E(F),onProjectClick:F=>{F&&F.demoUrl&&F.demoUrl!=="https://github.com/stl-sahadat"?window.open(F.demoUrl,"_blank","noopener,noreferrer"):F&&F.githubUrl&&window.open(F.githubUrl,"_blank","noopener,noreferrer")}})}),l.jsxs("div",{className:p==="automations"?"lg:col-span-5 flex flex-col justify-center space-y-3 px-2 sm:px-3 py-2 relative bg-transparent border-none shadow-none max-w-[420px] ml-auto":"lg:col-span-5 flex flex-col justify-center space-y-4 px-2 sm:px-4 py-2 relative bg-transparent border-none shadow-none lg:-translate-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3 pb-2 border-b border-white/10",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-crimson animate-pulse"}),l.jsxs("span",{className:"font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-400",children:[V.label," • ",String(L+1).padStart(2,"0")," OF ",String(S.length).padStart(2,"0")]})]}),l.jsx("div",{ref:T,className:"relative flex items-center h-8 sm:h-8.5 max-w-[140px] sm:max-w-[175px] rounded-full border border-crimson/40 hover:border-crimson bg-[#07070d]/90 shadow-[0_0_10px_rgba(239,35,60,0.25)] transition-all duration-300 px-1.5 group/pill",title:"Scroll wheel to browse numbers // Click any number to jump to project",children:l.jsx("div",{ref:P,className:"flex items-center gap-1 overflow-x-auto py-0.5 px-1 select-none scroll-smooth touch-pan-x",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:S.map((F,G)=>{const Y=L===G,ie=String(G+1).padStart(2,"0");return l.jsx("button",{ref:Z=>{I.current[G]=Z},onClick:()=>A(G),className:`relative font-mono text-xs font-bold shrink-0 px-2.5 py-0.5 rounded-full transition-all duration-300 ease-out cursor-pointer flex items-center justify-center select-none ${Y?"bg-crimson text-white shadow-[0_0_10px_rgba(239,35,60,0.5)] scale-105 z-10 font-bold":"text-zinc-400 hover:text-white hover:bg-white/10 scale-95 opacity-70 hover:opacity-100 font-medium"}`,title:`Project ${ie}: ${F.title} (Click to view)`,children:l.jsx("span",{className:"relative z-10",children:ie})},`${p}-${F.id||G}`)})})})]}),l.jsxs("div",{className:p==="automations"?"max-w-[320px]":"",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-crimson font-bold mb-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-crimson"}),l.jsx("span",{children:R==null?void 0:R.category})]}),l.jsx("h3",{className:"font-bebas text-2xl sm:text-3xl text-white dark:text-white light:text-zinc-900 tracking-wide leading-tight",children:R==null?void 0:R.title})]}),l.jsx("div",{className:`min-h-[60px] flex items-start ${p==="automations"?"max-w-[320px]":""}`,children:l.jsxs("p",{className:"font-sans text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed",children:[O,l.jsx("span",{className:"inline-block w-1.5 h-3.5 bg-crimson ml-1 animate-pulse align-middle"})]})}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[p!=="apps"&&p!=="automations"&&(R==null?void 0:R.demoUrl)&&(R==null?void 0:R.demoUrl)!=="https://github.com/stl-sahadat"&&l.jsx(zl,{href:R==null?void 0:R.demoUrl,onClick:()=>d("Project Live Demo Click",R==null?void 0:R.title),icon:"demo",size:"md",children:"Visit Live Demo"}),(R==null?void 0:R.githubUrl)&&l.jsx(zl,{href:R==null?void 0:R.githubUrl,onClick:()=>d("Project GitHub Click",R==null?void 0:R.title),icon:"github",size:"md",children:"GITHUB REPO"})]})]})]},p),l.jsx("div",{className:"mt-12 sm:mt-16 pt-6 border-t border-white/10",children:l.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 md:gap-8",children:[l.jsxs("div",{className:"shrink-0 select-none z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080812]/90 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider",children:[l.jsx(iv,{size:13,className:"text-crimson"}),l.jsxs("span",{children:[V.label," TECH ARSENAL"]})]}),l.jsxs("div",{className:"flex-1 w-full overflow-hidden relative py-2",style:{maskImage:"linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)"},children:[l.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10"}),l.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none z-10"}),l.jsx("div",{className:"animate-tech-marquee flex items-center gap-3 sm:gap-4 py-1.5 [animation-duration:85s]",children:[...x,...x].map((F,G)=>l.jsx(l2,{name:F},`${F}-${G}`))})]})]})})]})]})}const c2=[{id:"prompt-llm",title:"PROMPT & LLM ARCHITECTURE",color:"#c084fc",capsule:{x:220,y:268,w:220,h:34,rx:17},trunkStart:{x:440,y:285},port:{x:462,y:360},trunkControl1:{x:458,y:285},trunkControl2:{x:448,y:360},trunkPath:"M 440,285 C 458,285 448,360 462,360",plugRect:{x:462,y:348,w:38,h:24},anchorAlign:"end",keywords:[{text:"DeepSeek R1 Reasoner",x:175,y:180},{text:"Claude 3.5 Sonnet / Opus",x:175,y:222},{text:"OpenAI GPT-4o Frontier",x:175,y:264},{text:"Structured Pydantic JSON",x:175,y:306},{text:"Tree-of-Thoughts (ToT)",x:175,y:348},{text:"Local vLLM & Ollama",x:175,y:390}]},{id:"backend",title:"HIGH-SPEED BACKEND & APIS",color:"#f43f5e",capsule:{x:220,y:598,w:220,h:34,rx:17},trunkStart:{x:440,y:615},port:{x:462,y:540},trunkControl1:{x:458,y:615},trunkControl2:{x:448,y:540},trunkPath:"M 440,615 C 458,615 448,540 462,540",plugRect:{x:462,y:528,w:38,h:24},anchorAlign:"end",keywords:[{text:"FastAPI Async Python",x:175,y:510},{text:"Server-Sent Events (SSE)",x:175,y:552},{text:"WebSockets Streaming",x:175,y:594},{text:"pgvector & Qdrant Search",x:175,y:636},{text:"Redis Distributed Cache",x:175,y:678},{text:"Sub-50ms Microservices",x:175,y:720}]},{id:"cloud",title:"CLOUD & PRODUCTION INFRA",color:"#38bdf8",capsule:{x:760,y:268,w:220,h:34,rx:17},trunkStart:{x:760,y:285},port:{x:738,y:360},trunkControl1:{x:742,y:285},trunkControl2:{x:752,y:360},trunkPath:"M 760,285 C 742,285 752,360 738,360",plugRect:{x:700,y:348,w:38,h:24},anchorAlign:"start",keywords:[{text:"Docker Containerization",x:1025,y:180},{text:"GCP Cloud Run Serverless",x:1025,y:222},{text:"LLMOps & LangSmith",x:1025,y:264},{text:"Terraform IaC Blueprints",x:1025,y:306},{text:"Cloudflare Edge & CDN",x:1025,y:348},{text:"Zero-Trust IAM & Security",x:1025,y:390}]},{id:"frontend",title:"FRONTEND & SPATIAL WEB",color:"#ec4899",capsule:{x:760,y:598,w:220,h:34,rx:17},trunkStart:{x:760,y:615},port:{x:738,y:540},trunkControl1:{x:742,y:615},trunkControl2:{x:752,y:540},trunkPath:"M 760,615 C 742,615 752,540 738,540",plugRect:{x:700,y:528,w:38,h:24},anchorAlign:"start",keywords:[{text:"React 18 & Next.js 14",x:1025,y:510},{text:"Three.js 3D & WebGL Shaders",x:1025,y:552},{text:"Tailwind Glassmorphism UI",x:1025,y:594},{text:"Vercel AI SDK UI",x:1025,y:636},{text:"Framer Motion 60fps Loops",x:1025,y:678},{text:"Canvas 2D Data Rendering",x:1025,y:720}]},{id:"ai-agents",title:"AI & AUTONOMOUS SYSTEMS",color:"#00f0ff",capsule:{x:450,y:702,w:300,h:38,rx:19},trunkStart:{x:600,y:702},port:{x:600,y:627},trunkControl1:{x:600,y:677},trunkControl2:{x:600,y:647},trunkPath:"M 600,702 L 600,627",plugRect:{x:588,y:595,w:24,h:32},anchorAlign:"middle",keywords:[{text:"CrewAI Multi-Agent",x:180,y:835},{text:"LangGraph StateGraph",x:350,y:835},{text:"Autonomous Swarms",x:510,y:835},{text:"Model Context Protocol",x:690,y:835},{text:"Agent Memory (Letta)",x:850,y:835},{text:"Deterministic Guardrails",x:1020,y:835}]}],u2=[{xRatio:.16,speed:6.8,offset:12,r:2.2,color:"#fef08a"},{xRatio:.28,speed:8.4,offset:55,r:1.8,color:"#fde047"},{xRatio:.45,speed:5.6,offset:90,r:2.8,color:"#ffffff"},{xRatio:.62,speed:7.2,offset:35,r:2,color:"#fef08a"},{xRatio:.82,speed:6.2,offset:75,r:2.4,color:"#fb923c"},{xRatio:.22,speed:9.1,offset:115,r:1.5,color:"#fde047"},{xRatio:.38,speed:7.4,offset:18,r:2,color:"#ffffff"},{xRatio:.54,speed:8.8,offset:68,r:2.6,color:"#fef08a"},{xRatio:.72,speed:6.5,offset:98,r:1.9,color:"#f97316"},{xRatio:.34,speed:5.8,offset:135,r:2.3,color:"#ffffff"},{xRatio:.66,speed:8,offset:28,r:1.7,color:"#fde047"},{xRatio:.86,speed:8.2,offset:85,r:2.2,color:"#fef08a"},{xRatio:.12,speed:6.7,offset:60,r:2,color:"#fb923c"},{xRatio:.48,speed:9.5,offset:145,r:1.6,color:"#ffffff"},{xRatio:.76,speed:7.1,offset:8,r:2.5,color:"#fde047"},{xRatio:.25,speed:6.3,offset:105,r:2.1,color:"#fef08a"}];function d2(){const[s,e]=se.useState(0),t=$l.useRef(null),[r,o]=se.useState(!1);se.useEffect(()=>{const f=t.current;if(!f||typeof IntersectionObserver>"u"){o(!0);return}const p=new IntersectionObserver(m=>{var y;o(((y=m[0])==null?void 0:y.isIntersecting)??!1)},{threshold:.02});return p.observe(f),()=>p.disconnect()},[]),se.useEffect(()=>{if(!r)return;const f=setInterval(()=>{e(p=>p>=100?100:p+1)},80);return()=>clearInterval(f)},[r]),se.useEffect(()=>{if(r&&s>=100){const f=setTimeout(()=>{e(0)},4500);return()=>clearTimeout(f)}},[s,r]);const c=s>=100,d=s>0&&s<100;return l.jsxs("section",{ref:t,id:"skills",className:"w-full bg-black dark:bg-black light:bg-[#f8fafc] transition-colors duration-300 relative overflow-hidden select-none flex flex-col items-center pt-20 sm:pt-28 pb-16 scroll-mt-24 min-h-[850px]",children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:c?"radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.22) 0%, transparent 62%)":"radial-gradient(circle at 50% 52%, rgba(234, 88, 12, 0.16) 0%, rgba(220, 38, 38, 0.08) 35%, transparent 68%)",transition:"background 0.8s ease"}}),l.jsxs("div",{className:"relative z-20 mb-3 sm:mb-6 text-center px-4 flex flex-col items-center",children:[l.jsx("div",{className:"mb-3",children:l.jsx(Kl,{text:"SYSTEM CAPABILITIES & ARCHITECTURE"})}),l.jsxs("h2",{className:"font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white leading-tight",children:["SKILLS &"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"ARCHITECTURE"})]})]}),l.jsx("div",{className:"relative w-full max-w-[1280px] h-[580px] sm:h-[720px] lg:h-[820px] flex items-center justify-center px-2 sm:px-6 -mt-8 sm:-mt-12",children:l.jsxs("svg",{className:"w-full h-full select-none",viewBox:"0 100 1200 805",preserveAspectRatio:"xMidYMid meet",children:[l.jsxs("defs",{children:[l.jsxs("filter",{id:"svgWireGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[l.jsx("feGaussianBlur",{stdDeviation:"2.2",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsxs("filter",{id:"svgGreenGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[l.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsxs("filter",{id:"photonGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[l.jsx("feGaussianBlur",{stdDeviation:"3.8",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsxs("filter",{id:"amberFireTextGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[l.jsx("feGaussianBlur",{stdDeviation:"8",result:"outerGlow"}),l.jsx("feGaussianBlur",{stdDeviation:"3",result:"innerGlow"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"outerGlow"}),l.jsx("feMergeNode",{in:"innerGlow"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsxs("filter",{id:"moltenFloorBloom",x:"-60%",y:"-60%",width:"220%",height:"220%",children:[l.jsx("feGaussianBlur",{stdDeviation:"10",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsxs("filter",{id:"sparkleGlow",x:"-80%",y:"-80%",width:"260%",height:"260%",children:[l.jsx("feGaussianBlur",{stdDeviation:"2",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),l.jsx("clipPath",{id:"glassCylinderClip",children:l.jsx("rect",{x:"500",y:"308",width:"200",height:"290",rx:"28",ry:"28"})}),l.jsxs("linearGradient",{id:"chromeMetallicGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#1e222a"}),l.jsx("stop",{offset:"12%",stopColor:"#475569"}),l.jsx("stop",{offset:"28%",stopColor:"#cbd5e1"}),l.jsx("stop",{offset:"38%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"52%",stopColor:"#94a3b8"}),l.jsx("stop",{offset:"70%",stopColor:"#334155"}),l.jsx("stop",{offset:"88%",stopColor:"#64748b"}),l.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),l.jsxs("linearGradient",{id:"darkGlassChamberGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#0a0507",stopOpacity:"0.95"}),l.jsx("stop",{offset:"16%",stopColor:"#190a0e",stopOpacity:"0.84"}),l.jsx("stop",{offset:"50%",stopColor:"#250d12",stopOpacity:"0.65"}),l.jsx("stop",{offset:"84%",stopColor:"#190a0e",stopOpacity:"0.84"}),l.jsx("stop",{offset:"100%",stopColor:"#0a0507",stopOpacity:"0.95"})]}),l.jsxs("linearGradient",{id:"leftGlassSpecularGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0"}),l.jsx("stop",{offset:"25%",stopColor:"#ffffff",stopOpacity:"0.45"}),l.jsx("stop",{offset:"55%",stopColor:"#ffffff",stopOpacity:"0.85"}),l.jsx("stop",{offset:"85%",stopColor:"#ffffff",stopOpacity:"0.2"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0"})]}),l.jsxs("linearGradient",{id:"rightGlassSpecularGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0"}),l.jsx("stop",{offset:"40%",stopColor:"#ffffff",stopOpacity:"0.32"}),l.jsx("stop",{offset:"80%",stopColor:"#ffffff",stopOpacity:"0.12"}),l.jsx("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0"})]}),l.jsxs("linearGradient",{id:"fieryMagmaLiquidGrad",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#f59e0b",stopOpacity:"0.98"}),l.jsx("stop",{offset:"22%",stopColor:"#ea580c",stopOpacity:"0.95"}),l.jsx("stop",{offset:"55%",stopColor:"#e11d48",stopOpacity:"0.92"}),l.jsx("stop",{offset:"82%",stopColor:"#dc2626",stopOpacity:"0.88"}),l.jsx("stop",{offset:"100%",stopColor:"#fb923c",stopOpacity:"0.86"})]}),l.jsxs("linearGradient",{id:"meniscusSurfaceGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ea580c"}),l.jsx("stop",{offset:"25%",stopColor:"#f97316"}),l.jsx("stop",{offset:"50%",stopColor:"#fef08a"}),l.jsx("stop",{offset:"75%",stopColor:"#f97316"}),l.jsx("stop",{offset:"100%",stopColor:"#ea580c"})]}),l.jsxs("linearGradient",{id:"liquidGradGreen",x1:"0%",y1:"100%",x2:"0%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#15803d",stopOpacity:"0.98"}),l.jsx("stop",{offset:"50%",stopColor:"#22c55e",stopOpacity:"0.92"}),l.jsx("stop",{offset:"100%",stopColor:"#86efac",stopOpacity:"0.88"})]}),l.jsxs("linearGradient",{id:"moltenBaseRingGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ef4444",stopOpacity:"0.6"}),l.jsx("stop",{offset:"25%",stopColor:"#f59e0b",stopOpacity:"0.95"}),l.jsx("stop",{offset:"50%",stopColor:"#fef08a",stopOpacity:"1"}),l.jsx("stop",{offset:"75%",stopColor:"#f59e0b",stopOpacity:"0.95"}),l.jsx("stop",{offset:"100%",stopColor:"#ef4444",stopOpacity:"0.6"})]}),l.jsxs("linearGradient",{id:"cylinderOuterRimGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#cbd5e1",stopOpacity:"0.85"}),l.jsx("stop",{offset:"40%",stopColor:"#475569",stopOpacity:"0.4"}),l.jsx("stop",{offset:"80%",stopColor:"#f97316",stopOpacity:"0.6"}),l.jsx("stop",{offset:"100%",stopColor:"#fef08a",stopOpacity:"0.9"})]})]}),c2.map(f=>{const p=f.id==="ai-agents",m=f.anchorAlign==="end",y=f.anchorAlign==="start",S="#ffffff",x=c?.65:.4,M=f.color,E=(s*5+40)%100/100;let L=f.trunkStart.x,w=f.trunkStart.y;if(p)L=600,w=f.trunkStart.y-(f.trunkStart.y-f.port.y)*E;else{const _=f.trunkStart,U=f.trunkControl1,z=f.trunkControl2,T=f.port;L=Math.pow(1-E,3)*_.x+3*Math.pow(1-E,2)*E*U.x+3*(1-E)*Math.pow(E,2)*z.x+Math.pow(E,3)*T.x,w=Math.pow(1-E,3)*_.y+3*Math.pow(1-E,2)*E*U.y+3*(1-E)*Math.pow(E,2)*z.y+Math.pow(E,3)*T.y}return l.jsxs("g",{children:[l.jsxs("g",{children:[l.jsx("path",{d:f.trunkPath,fill:"none",stroke:f.color,strokeWidth:"8",strokeOpacity:c?.45:.3,strokeLinecap:"round"}),l.jsx("path",{d:f.trunkPath,fill:"none",stroke:f.color,strokeWidth:"3.6",strokeOpacity:"1",strokeLinecap:"round"}),l.jsx("path",{d:f.trunkPath,fill:"none",stroke:"#ffffff",strokeWidth:"1.6",strokeOpacity:"0.9",strokeLinecap:"round"}),l.jsx("circle",{cx:f.trunkStart.x,cy:f.trunkStart.y,r:"3.5",fill:f.color}),l.jsx("circle",{cx:f.port.x,cy:f.port.y,r:"3.5",fill:c?"#22c55e":"#ffffff"})]}),d&&l.jsx("circle",{cx:L,cy:w,r:p?4.5:4,fill:f.color,filter:"url(#photonGlow)"}),l.jsxs("g",{className:"cursor-default transition-all duration-300",children:[l.jsx("rect",{x:f.capsule.x,y:f.capsule.y,width:f.capsule.w,height:f.capsule.h,rx:f.capsule.rx,fill:c?`${f.color}24`:`${f.color}15`,stroke:f.color,strokeWidth:c?"2.2":"1.8",className:"transition-colors duration-500"}),l.jsx("text",{x:f.capsule.x+f.capsule.w/2,y:f.capsule.y+f.capsule.h/2+4.2,textAnchor:"middle",fill:"#ffffff",fontSize:p?"13":"11",fontWeight:"800",fontFamily:"Inter, system-ui, sans-serif",letterSpacing:"0.8",children:f.title})]}),f.keywords.map((_,U)=>{let z=_.x,T=_.y-4,P=f.capsule.x,I=f.capsule.y+7+U*4,A=z,b=T,R=P,O=I;p?(z=_.x,T=_.y-14,P=f.capsule.x+35+U*46,I=f.capsule.y+f.capsule.h,A=z,b=T-40,R=P,O=I+30):m?(z=_.x+6,T=_.y-4,P=f.capsule.x,I=f.capsule.y+6+U*4.2,A=z+26,b=T,R=P-20,O=I):y&&(z=_.x-6,T=_.y-4,P=f.capsule.x+f.capsule.w,I=f.capsule.y+6+U*4.2,A=z-26,b=T,R=P+20,O=I);const B=`M ${z},${T} C ${A},${b} ${R},${O} ${P},${I}`,V=(s*4+U*16)%100/100,F=Math.pow(1-V,3)*z+3*Math.pow(1-V,2)*V*A+3*(1-V)*Math.pow(V,2)*R+Math.pow(V,3)*P,G=Math.pow(1-V,3)*T+3*Math.pow(1-V,2)*V*b+3*(1-V)*Math.pow(V,2)*O+Math.pow(V,3)*I;return l.jsxs("g",{children:[l.jsx("text",{x:_.x,y:_.y,textAnchor:f.anchorAlign,fill:c?"#86efac":"#d4d4d8",fontSize:"11",fontFamily:"ui-monospace, monospace",className:"cursor-default hover:fill-white transition-colors",children:_.text}),l.jsx("path",{d:B,fill:"none",stroke:S,strokeWidth:c?1.6:1.2,strokeOpacity:x}),d&&l.jsx("circle",{cx:F,cy:G,r:"2.6",fill:M,filter:"url(#photonGlow)"})]},`${f.id}-kw-${U}`)}),l.jsxs("g",{className:d?"animate-pulse":"",children:[l.jsx("rect",{x:f.plugRect.x,y:f.plugRect.y,width:f.plugRect.w,height:f.plugRect.h,rx:"5",fill:"#18181b",stroke:c?"#22c55e":"#52525b",strokeWidth:"1.3"}),l.jsx("rect",{x:f.plugRect.x+2,y:f.plugRect.y+2,width:f.plugRect.w-4,height:f.plugRect.h-4,rx:"3.5",fill:"#27272a"}),p?l.jsx("rect",{x:f.plugRect.x+7,y:f.plugRect.y+6,width:"10",height:f.plugRect.h-12,rx:"3",fill:c?"#22c55e":f.color,filter:"url(#photonGlow)"}):l.jsx("rect",{x:f.plugRect.x+6,y:f.plugRect.y+6,width:f.plugRect.w-12,height:"12",rx:"3",fill:c?"#22c55e":f.color,filter:"url(#photonGlow)"}),l.jsx("circle",{cx:f.plugRect.x+f.plugRect.w/2,cy:f.plugRect.y+f.plugRect.h/2,r:"2",fill:"#ffffff",opacity:"0.95"})]})]},`group-${f.id}`)}),l.jsxs("g",{children:[l.jsx("ellipse",{cx:"600",cy:"603",rx:"115",ry:"16",fill:c?"#22c55e":"#ff4500",opacity:c?.35:.65,filter:"url(#moltenFloorBloom)"}),l.jsx("ellipse",{cx:"600",cy:"600",rx:"102",ry:"12",fill:c?"#86efac":"#f59e0b",opacity:c?.4:.8,filter:"url(#moltenFloorBloom)"})]}),l.jsxs("g",{children:[l.jsx("rect",{x:"585",y:"278",width:"30",height:"10",rx:"3",fill:"url(#chromeMetallicGrad)",stroke:"#94a3b8",strokeWidth:"0.8"}),l.jsx("line",{x1:"587",y1:"279.5",x2:"613",y2:"279.5",stroke:"#ffffff",strokeWidth:"1.2",strokeOpacity:"0.9"}),l.jsx("text",{x:"600",y:"286.2",textAnchor:"middle",fill:"#0f172a",fontSize:"9",fontWeight:"900",fontFamily:"Inter, system-ui, sans-serif",children:"+"}),l.jsx("rect",{x:"568",y:"286",width:"64",height:"11",rx:"3",fill:"url(#chromeMetallicGrad)",stroke:"#475569",strokeWidth:"0.9"}),l.jsx("line",{x1:"569",y1:"294",x2:"631",y2:"294",stroke:"#0f172a",strokeWidth:"1",strokeOpacity:"0.7"}),l.jsx("rect",{x:"552",y:"295",width:"96",height:"13",rx:"4",fill:"url(#chromeMetallicGrad)",stroke:"#64748b",strokeWidth:"1.2"}),l.jsx("path",{d:"M 554,296.5 L 646,296.5",stroke:"#ffffff",strokeWidth:"1.2",strokeOpacity:"0.85"}),l.jsx("path",{d:"M 554,307 L 646,307",stroke:c?"#86efac":"#f97316",strokeWidth:"1.4",strokeOpacity:"0.65"}),l.jsx("rect",{x:"524",y:"304",width:"152",height:"8",rx:"4",fill:"#18181b",stroke:"#71717a",strokeWidth:"1",strokeOpacity:"0.5"})]}),l.jsx("rect",{x:"500",y:"308",width:"200",height:"290",rx:"28",fill:"url(#darkGlassChamberGrad)"}),(()=>{const f=290*Math.max(5,s)/100,p=598-f,m=c?"url(#liquidGradGreen)":"url(#fieryMagmaLiquidGrad)";return l.jsxs("g",{clipPath:"url(#glassCylinderClip)",children:[l.jsx("rect",{x:"500",y:p,width:"200",height:f+10,fill:m}),l.jsx("ellipse",{cx:"600",cy:Math.min(590,p+f*.5),rx:"82",ry:Math.max(10,f*.42),fill:c?"#22c55e":"#ff3b00",opacity:c?.25:.38,filter:"url(#moltenFloorBloom)"}),d&&l.jsx("g",{children:u2.map((y,S)=>{const x=508+y.xRatio*184+Math.sin(s*.3+S)*4,M=590-(s*y.speed+y.offset*10)%Math.max(15,f);return l.jsx("circle",{cx:x,cy:M,r:y.r,fill:c?"#ffffff":y.color,opacity:.88,filter:"url(#sparkleGlow)"},`spark-${S}`)})}),l.jsxs("g",{children:[l.jsx("ellipse",{cx:"600",cy:p,rx:"95",ry:"7",fill:c?"#22c55e":"url(#meniscusSurfaceGrad)",opacity:"0.55"}),d&&l.jsxs("g",{children:[l.jsx("circle",{cx:532+Math.sin(s*.5)*4,cy:p,r:"2",fill:"#ffffff",opacity:"0.9"}),l.jsx("circle",{cx:562+Math.cos(s*.4)*5,cy:p-1,r:"1.6",fill:"#fef08a",opacity:"0.85"}),l.jsx("circle",{cx:600+Math.sin(s*.6)*6,cy:p,r:"2.2",fill:"#ffffff",opacity:"0.95"}),l.jsx("circle",{cx:638+Math.cos(s*.5)*5,cy:p-1,r:"1.8",fill:"#fef08a",opacity:"0.85"}),l.jsx("circle",{cx:668+Math.sin(s*.4)*4,cy:p,r:"2",fill:"#ffffff",opacity:"0.9"})]})]})]})})(),l.jsxs("g",{pointerEvents:"none",children:[l.jsx("rect",{x:"508",y:"314",width:"14",height:"278",rx:"7",fill:"url(#leftGlassSpecularGrad)",opacity:"0.4"}),l.jsx("rect",{x:"678",y:"314",width:"12",height:"278",rx:"6",fill:"url(#rightGlassSpecularGrad)",opacity:"0.3"}),l.jsx("rect",{x:"500",y:"308",width:"200",height:"290",rx:"28",fill:"none",stroke:"url(#cylinderOuterRimGrad)",strokeWidth:"2",strokeOpacity:"0.8"})]}),l.jsxs("g",{children:[l.jsxs("text",{x:"600",y:"472",textAnchor:"middle",fill:c?"#22c55e":"#f59e0b",fontSize:"64",fontWeight:"900",fontFamily:"'Inter', 'Bebas Neue', system-ui, sans-serif",filter:c?"url(#svgGreenGlow)":"url(#amberFireTextGlow)",opacity:"0.88",children:[s,"%"]}),l.jsxs("text",{x:"600",y:"472",textAnchor:"middle",fill:c?"#86efac":"#fef08a",fontSize:"64",fontWeight:"900",fontFamily:"'Inter', 'Bebas Neue', system-ui, sans-serif",letterSpacing:"1",className:"tracking-tight select-none",children:[s,"%"]})]})]})})]})}function f2(){const[s,e]=se.useState(null),t=[{id:"automation",icon:Qx,role:"Lead Automation & Systems Architect",title:"Autonomous Agents & Intelligent Process Automation",category:"INTELLIGENT WORKFLOW ORCHESTRATION",period:"2024 – Present",accentColor:"from-amber-500/20 via-rose-500/10 to-transparent",glowBorder:"hover:border-amber-500/40",badgeColor:"text-amber-300 bg-amber-500/10 border-amber-500/30",metric:"80%",metricLabel:"MANUAL OVERHEAD REDUCTION",description:"Architecting fault-tolerant autonomous agent frameworks and Python automation engines that eliminate operational bottlenecks and execute complex multi-step workflows without human intervention.",achievements:["Engineered real-time telemetry bots and automated data extraction pipelines cutting manual task overhead by 80%.","Implemented deterministic API tool schemas and self-healing error recovery loops ensuring 24/7 autonomous reliability.","Structured modular agent topologies with dedicated supervisor and validation checkpoints."]},{id:"erp",icon:d0,role:"Full-Stack Systems Engineer",title:"Modular ERP Systems & Enterprise Application Architecture",category:"FULL-STACK ERP & ENTERPRISE PLATFORMS",period:"2023 – Present",accentColor:"from-cyan-500/20 via-blue-500/10 to-transparent",glowBorder:"hover:border-cyan-500/40",badgeColor:"text-cyan-300 bg-cyan-500/10 border-cyan-500/30",metric:"100%",metricLabel:"TYPE-SAFE SYNCHRONIZATION",description:"Engineering robust, type-safe institutional ERP platforms and data management suites using TypeScript, modern reactive frontends, and structured relational persistence.",achievements:["Architected modular institutional administration software managing complex multi-tier records and role permissions.","Digitized legacy paper-based workflows into synchronized, zero-friction cloud database interfaces.","Engineered responsive dashboards with real-time record indexing and comprehensive audit logging."]},{id:"web",icon:f0,role:"Product & Web Architect",title:"Responsive High-Performance Web & E-Commerce Platforms",category:"BESPOKE WEB ENGINEERING & UX",period:"2023 – Present",accentColor:"from-emerald-500/20 via-teal-500/10 to-transparent",glowBorder:"hover:border-emerald-500/40",badgeColor:"text-emerald-300 bg-emerald-500/10 border-emerald-500/30",metric:"98+",metricLabel:"LIGHTHOUSE BENCHMARK",description:"Delivering bespoke consumer-facing web applications and modern commercial platforms combining responsive architecture, fluid micro-interactions, and sub-second load times.",achievements:["Engineered client-side reactive store flows and dynamic catalogs with zero state desynchronization.","Achieved 98+ Google Lighthouse scores across performance, accessibility, SEO, and Core Web Vitals.","Optimized browser DOM rendering and asset pipelines delivering seamless 60fps micro-interactions."]},{id:"cloud",icon:nv,role:"Cloud Solutions Consultant",title:"Containerized Cloud Deployments & Serverless Architecture",category:"CLOUD MICROSERVICES & DEPLOYMENT",period:"2024 – Present",accentColor:"from-crimson/20 via-purple-500/10 to-transparent",glowBorder:"hover:border-crimson/40",badgeColor:"text-rose-300 bg-crimson/10 border-crimson/30",metric:"99.9%",metricLabel:"CONTAINER UPTIME (GCP)",description:"Architecting and deploying containerized full-stack services on Google Cloud Run with automated continuous deployment, strict schema validation, and serverless auto-scaling.",achievements:["Configured Docker multi-stage builds minimizing image payloads and optimizing cold-start latency.","Maintained 99.9% uptime with automated TLS certification, health-check probes, and managed cloud routing.","Integrated sub-50ms real-time telemetry analytics calculating aggregate metrics with zero server maintenance."]}];return l.jsxs("section",{id:"experience",className:"py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent relative overflow-hidden scroll-mt-20",children:[l.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-crimson/5 blur-[140px] rounded-full pointer-events-none -z-10"}),l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10",children:[l.jsx(qn,{animation:"fade-up",duration:700,children:l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20",children:[l.jsxs("div",{children:[l.jsx("div",{className:"mb-4",children:l.jsx(Kl,{text:"SOLUTIONS & ARCHITECTURAL HIGHLIGHTS"})}),l.jsxs("h2",{className:"font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none",children:["WHAT I'VE"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"BUILT & SOLVED"})]})]}),l.jsx("div",{className:"max-w-md",children:l.jsx("p",{className:"text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-sans leading-relaxed",children:"Production engineering systems designed for scale, fault tolerance, and automated business efficiency across web, cloud, and autonomous AI domains."})})]})}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-9",children:t.map((r,o)=>{const c=r.icon;return l.jsx(qn,{animation:"fade-up",delay:o*110,duration:700,className:"h-full",children:l.jsxs("div",{onMouseEnter:()=>e(r.id),onMouseLeave:()=>e(null),className:`group relative p-8 sm:p-10 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/12 bg-[#080811]/90 dark:bg-[#080811]/90 light:bg-white transition-all duration-500 ease-out flex flex-col justify-between h-full backdrop-blur-2xl shadow-2xl hover:shadow-[0_24px_60px_rgba(0,0,0,0.7)] hover:-translate-y-2 ${r.glowBorder}`,children:[l.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${r.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}),l.jsxs("div",{className:"relative z-10",children:[l.jsxs("div",{className:"flex items-center justify-between gap-4 mb-5",children:[l.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${r.badgeColor}`,children:r.category}),l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"text-[11px] font-mono text-zinc-400",children:r.period}),l.jsx("div",{className:"w-8 h-8 rounded-xl border border-white/15 dark:border-white/15 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm",children:l.jsx(c,{size:15})})]})]}),l.jsx("h3",{className:"font-jakarta text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-100 group-hover:to-zinc-300 transition-all",children:r.title}),l.jsx("p",{className:"text-xs sm:text-[13px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed mb-6",children:r.description}),l.jsx("div",{className:"space-y-3 pt-5 border-t border-white/8 dark:border-white/8 light:border-black/10",children:r.achievements.map((d,f)=>l.jsx("div",{className:"pl-3.5 py-1 border-l border-white/10 hover:border-crimson/60 transition-colors duration-300 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-sans",children:d},f))})]}),l.jsxs("div",{className:"relative z-10 mt-8 pt-5 border-t border-white/8 dark:border-white/8 light:border-black/10 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"text-2xl font-bebas tracking-wider text-white dark:text-white light:text-zinc-900 drop-shadow-sm",children:r.metric}),l.jsx("div",{className:"text-[9px] font-mono uppercase tracking-wider text-zinc-400 leading-tight",children:r.metricLabel})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors",children:[l.jsx(bv,{size:13,className:"text-crimson"}),l.jsxs("span",{children:[r.role.split(" ")[0]," Verified"]})]})]})]})},r.id)})})]})]})}function h2(){const s=[{id:1,title:"Architecting Autonomous Multi-Agent Swarms for Production",category:"AI ARCHITECTURE",date:"Coming Soon",readTime:"12 min read",excerpt:"How to structure multi-agent networks using CrewAI and LangChain with self-healing feedback loops, deterministic schema validation, and context management.",tags:["Autonomous Agents","CrewAI","LangChain","Enterprise AI"],status:"In Preparation"},{id:2,title:"Compressing Software Engineering Turnarounds by 70% with AI Code Synthesis",category:"ENGINEERING VELOCITY",date:"Coming Soon",readTime:"8 min read",excerpt:"A practical deep-dive into how autonomous agent pipelines translate natural specifications into full-stack React and FastAPI applications in minutes.",tags:["AI Code Builder","React 18","Automation","DevOps"],status:"In Preparation"},{id:3,title:"Production Prompt Engineering: From Prototypes to Resilient Infrastructure",category:"PROMPT ARCHITECTURE",date:"Coming Soon",readTime:"10 min read",excerpt:"Techniques for context window compression, JSON mode enforcement, token cost minimization, and defensive prompt security in high-throughput enterprise systems.",tags:["Prompt Engineering","LLM Security","GPT-4o","Claude Opus"],status:"In Preparation"}];return l.jsx("section",{id:"blog",className:"py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent scroll-mt-20",children:l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16",children:[l.jsx(qn,{animation:"fade-up",duration:700,children:l.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16",children:[l.jsx("div",{children:l.jsxs("h2",{className:"font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white light:text-zinc-900 leading-tight",children:["LATEST ARTICLES &"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"CASE STUDIES"})]})}),l.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans leading-relaxed",children:"Thoughts on autonomous AI engineering, multi-agent pipelines, and cloud systems. Deep-dive technical articles currently in preparation."})]})}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",children:s.map((e,t)=>l.jsx(qn,{animation:"fade-up",delay:t*140,duration:750,className:"h-full",children:l.jsxs("div",{className:"p-7 sm:p-8 rounded-3xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white flex flex-col justify-between hover:border-crimson/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[l.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-crimson/15 text-crimson font-mono text-[10px] uppercase font-bold tracking-wider",children:e.status}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500",children:[l.jsx(c0,{size:12}),l.jsx("span",{children:e.readTime})]})]}),l.jsx("div",{className:"text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-bold mb-2",children:e.category}),l.jsx("h3",{className:"font-outfit text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-900 leading-snug tracking-normal mb-3",children:e.title}),l.jsx("p",{className:"text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed mb-6",children:e.excerpt})]}),l.jsx("div",{children:l.jsx("div",{className:"flex flex-wrap gap-1.5 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10",children:e.tags.map(r=>l.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/5 dark:bg-white/5 light:bg-black/5 text-zinc-400",children:r},r))})})]})},e.id))})]})})}function bd({icon:s,variant:e="emerald"}){const t={emerald:{glow:"rgba(16, 185, 129, 0.45)",rimBorder:"border-emerald-500/40",innerGlow:"bg-emerald-500/12",iconColor:"text-emerald-400",iconShadow:"drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(16,185,129,0.7))"},crimson:{glow:"rgba(239, 35, 60, 0.45)",rimBorder:"border-red-500/40",innerGlow:"bg-red-500/12",iconColor:"text-rose-400",iconShadow:"drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(239,35,60,0.7))"},amber:{glow:"rgba(245, 158, 11, 0.45)",rimBorder:"border-amber-500/40",innerGlow:"bg-amber-500/12",iconColor:"text-amber-400",iconShadow:"drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(245,158,11,0.7))"}},r=t[e]||t.emerald;return l.jsxs("div",{className:"relative shrink-0 select-none",children:[l.jsx("div",{className:"absolute -inset-1.5 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none",style:{background:r.glow}}),l.jsxs("div",{className:`relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl transition-all duration-400 group-hover:scale-108 group-hover:-translate-y-0.5 border border-white/20 dark:border-white/20 light:border-black/10 ${r.rimBorder} shadow-[0_10px_22px_rgba(0,0,0,0.85),_inset_0_1.5px_2px_rgba(255,255,255,0.45),_inset_0_-2px_4px_rgba(0,0,0,0.75)] light:shadow-[0_8px_18px_rgba(0,0,0,0.1),_inset_0_1.5px_2px_rgba(255,255,255,0.9),_inset_0_-1px_2px_rgba(0,0,0,0.06)] overflow-hidden`,style:{background:"linear-gradient(180deg, #252632 0%, #171822 45%, #0c0d13 100%)"},children:[l.jsx("div",{className:"absolute top-[1.5px] inset-x-2 h-[8px] rounded-t-xl bg-gradient-to-b from-white/40 via-white/15 to-transparent pointer-events-none"}),l.jsx("div",{className:`absolute inset-0 ${r.innerGlow} pointer-events-none`}),l.jsx("div",{className:"relative w-full h-full flex items-center justify-center",children:l.jsx(s,{size:22,className:`transition-transform duration-300 group-hover:scale-110 ${r.iconColor}`,style:{filter:r.iconShadow}})})]})]})}function p2(){const{data:s,trackEvent:e,openAdmin:t}=ss(),r=s.personal||{},[o,c]=se.useState(""),[d,f]=se.useState(""),[p,m]=se.useState("Autonomous AI Architecture"),[y,S]=se.useState(""),[x,M]=se.useState(!1),[E,L]=se.useState(!1),w=["Autonomous AI Agents","Full-Stack Web Platform","Enterprise Cloud & ERP","Custom System Architecture"],_=async T=>{T.preventDefault(),M(!0);const P=o.trim()||"Valued Client",I=d.trim(),A=p,b=y.trim()||"I would like to discuss a project with you.";try{await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P,email:I,topic:A,message:b})})}catch(B){console.warn("[Contact] Backend dispatch fallback:",B)}const O=`https://wa.me/8801944576159?text=${encodeURIComponent(`Hello Sahadat vai!

My Name: ${P}${I?`
Email: ${I}`:""}
Project Type: ${A}

Project Details:
${b}

Looking forward to hearing from you!`)}`;e("Dual Inquiry Sent",{name:P,topic:A,email:I}),window.open(O,"_blank","noopener,noreferrer"),M(!1),L(!0),setTimeout(()=>L(!1),7e3)},U=`https://wa.me/8801944576159?text=${encodeURIComponent("Hi Sahadat vai, I would like to discuss an AI architecture project.")}`,z=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(r.email||"sahadat.info01@gmail.com")}&su=${encodeURIComponent("Project Inquiry - AI Agent Architecture")}&body=${encodeURIComponent(`Hi Sahadat vai,

I am reaching out regarding an AI Architecture and Autonomous Agent project.

Project Overview:

Best regards,`)}`;return l.jsxs("footer",{id:"contact",className:"py-20 sm:py-28 relative overflow-hidden border-t border-white/10 dark:border-white/10 light:border-black/10 bg-transparent scroll-mt-20",children:[l.jsx("div",{className:"absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-crimson/5 rounded-full blur-[140px] pointer-events-none -z-10"}),l.jsxs("div",{className:"max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10",children:[l.jsx(qn,{animation:"fade-up",duration:700,children:l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16",children:[l.jsxs("div",{children:[l.jsx("div",{className:"mb-4",children:l.jsx(Kl,{text:"DIRECT CHANNELS & PROJECT INQUIRIES"})}),l.jsxs("h3",{className:"font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none",children:["LET'S WORK"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"TOGETHER."})]})]}),l.jsx("div",{className:"max-w-md",children:l.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-lg leading-relaxed font-sans",children:"Send your inquiry below—it will instantly connect to WhatsApp with your customized brief and simultaneously dispatch a direct email notification."})})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20",children:[l.jsx("div",{className:"lg:col-span-6 flex flex-col justify-between",children:l.jsx(qn,{animation:"fade-up",delay:80,duration:700,className:"h-full",children:l.jsxs("div",{className:"flex flex-col justify-between h-full gap-4",children:[l.jsxs("a",{href:U,target:"_blank",rel:"noopener noreferrer",className:"group p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(bd,{icon:xv,variant:"emerald"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500",children:"WHATSAPP / PHONE"}),l.jsx("div",{className:"font-outfit text-base font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-emerald-400 transition-colors",children:r.phone||"+880 1944-576159"})]})]}),l.jsx(Ol,{size:18,className:"text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"})]}),l.jsxs("a",{href:z,target:"_blank",rel:"noopener noreferrer",className:"group p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white hover:border-crimson/50 transition-all duration-300 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(bd,{icon:Sd,variant:"crimson"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500",children:"DIRECT EMAIL"}),l.jsx("div",{className:"font-outfit text-base font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-crimson transition-colors",children:r.email||"sahadat.info01@gmail.com"})]})]}),l.jsx(Ol,{size:18,className:"text-zinc-500 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"})]}),l.jsx("div",{className:"p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white flex items-center justify-between",children:l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(bd,{icon:mv,variant:"amber"}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500",children:"LOCATION & AVAILABILITY"}),l.jsx("div",{className:"font-outfit text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-900",children:r.location||"Barura, Cumilla, Chattogram, Bangladesh • Open to Remote Worldwide"})]})]})}),l.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"Avg. Response Time: < 2 Hours"})]}),l.jsx("span",{className:"text-zinc-500",children:"Worldwide UTC+6"})]})]})})}),l.jsx("div",{className:"lg:col-span-6 flex flex-col",children:l.jsx(qn,{animation:"fade-up",delay:150,duration:700,className:"h-full",children:l.jsxs("form",{onSubmit:_,className:"p-6 sm:p-7 rounded-3xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#090912]/95 dark:bg-[#090912]/95 light:bg-white/95 backdrop-blur-2xl shadow-2xl light:shadow-xl light:shadow-slate-200/50 relative overflow-hidden group h-full flex flex-col justify-between",children:[l.jsx("div",{className:"absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),l.jsxs("div",{className:"space-y-4 relative z-10 flex-1 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2",children:"1. Select Project Domain"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:w.map(T=>l.jsx("button",{type:"button",onClick:()=>m(T),className:`text-[11px] font-sans px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer ${p===T?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.3)]":"bg-white/5 dark:bg-white/5 light:bg-slate-100 border-white/10 dark:border-white/10 light:border-slate-300/60 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:border-white/20"}`,children:T},T))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5",children:"2. Your Name or Company"}),l.jsx("input",{type:"text",value:o,onChange:T=>c(T.target.value),placeholder:"e.g. Alex Vance (or company name)",className:"w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5",children:"3. Your Email (Optional for instant confirmation reply)"}),l.jsx("input",{type:"email",value:d,onChange:T=>f(T.target.value),placeholder:"e.g. client@example.com",className:"w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5",children:"4. Project Scope (Editable)"}),l.jsx("textarea",{rows:3,value:y,onChange:T=>S(T.target.value),placeholder:"Describe what you want to build or automate...",className:"w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all resize-none leading-relaxed"})]}),l.jsxs("div",{className:"pt-2 flex flex-col items-center",children:[l.jsx(zl,{type:"submit",disabled:x,icon:"whatsapp",variant:"whatsapp",size:"lg",showArrow:!0,className:"w-full justify-center !py-3 !text-xs sm:!text-sm uppercase tracking-wider",children:x?"DISPATCHING...":"DISPATCH TO WHATSAPP & EMAIL"}),E&&l.jsxs("div",{className:"w-full mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2 animate-fadeIn",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),l.jsx("span",{children:"Inquiry logged to database & dispatches queued! Connecting to WhatsApp..."})]}),l.jsx("p",{className:"text-[10px] font-mono text-zinc-500 text-center mt-3",children:"Secured by Portfolio Backend API • Syncs to sahadat.info01@gmail.com"})]})]})]})})})]}),l.jsx(qn,{animation:"fade-up",duration:700,children:l.jsxs("div",{className:"pt-12 border-t border-white/10 dark:border-white/10 light:border-black/10",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-8",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 sm:gap-3",children:[r.github&&l.jsx("a",{href:r.github,onClick:()=>e("GitHub Profile Click"),target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-cyan-400 hover:bg-cyan-500/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white flex items-center justify-center transition-all hover:scale-110",children:l.jsx(lv,{size:16})}),r.facebook&&l.jsx("a",{href:r.facebook,onClick:()=>e("Facebook Profile Click"),target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-blue-500 hover:bg-blue-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-110",children:l.jsx(av,{size:16})}),r.twitter&&l.jsx("a",{href:r.twitter,onClick:()=>e("Twitter Profile Click"),target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter / X",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-zinc-300 hover:bg-white/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white flex items-center justify-center transition-all hover:scale-110",children:l.jsx(Tv,{size:16})}),r.instagram&&l.jsx("a",{href:r.instagram,onClick:()=>e("Instagram Profile Click"),target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-pink-500 hover:bg-pink-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-pink-400 flex items-center justify-center transition-all hover:scale-110",children:l.jsx(fv,{size:16})}),r.youtube&&l.jsx("a",{href:r.youtube,onClick:()=>e("YouTube Profile Click"),target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-red-500 hover:bg-red-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-red-400 flex items-center justify-center transition-all hover:scale-110",children:l.jsx(Av,{size:16})}),l.jsx("a",{href:z,onClick:()=>e("Email Direct Trigger"),target:"_blank",rel:"noopener noreferrer","aria-label":"Direct Email",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-crimson hover:bg-crimson/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-crimson flex items-center justify-center transition-all hover:scale-110",children:l.jsx(Sd,{size:16})}),r.phone&&l.jsx("a",{href:`tel:${r.phone.replace(/[^0-9+]/g,"")}`,onClick:()=>e("Phone Call Trigger"),"aria-label":"Phone",className:"w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-emerald-400 hover:bg-emerald-600/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-110",children:l.jsx(_v,{size:16})}),l.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-zinc-500 pl-2 hidden sm:inline",children:"BARURA, CUMILLA • OPEN TO REMOTE"})]}),l.jsxs("div",{className:"text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),l.jsx("span",{children:"SYSTEM ACTIVE // ACCEPTING CLIENT PROJECTS"})]})]}),l.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2",children:[l.jsx("span",{children:"© 2026 Md Sahadat Hossain. All rights reserved."}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("span",{children:"AI AGENT ARCHITECT & PROMPT ENGINEER"}),l.jsx("span",{children:"•"}),l.jsxs("button",{onClick:t,className:"hover:text-zinc-300 transition-colors uppercase tracking-wider cursor-pointer flex items-center gap-1",children:[l.jsx(Fl,{size:11}),l.jsx("span",{children:"Console"})]})]})]})]})})]})]})}function m2(){return l.jsxs("div",{className:"relative w-full",children:[l.jsx(kv,{}),l.jsx(Uv,{}),l.jsx("div",{id:"projects",className:"scroll-mt-24"}),l.jsx(yd,{sectionId:"websites",initialCategory:"websites",hideTabs:!0,customTitle:l.jsxs(l.Fragment,{children:["MY"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"WEBSITES"})]})}),l.jsx(yd,{sectionId:"apps",initialCategory:"apps",hideTabs:!0,customTitle:l.jsxs(l.Fragment,{children:["MY"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"APPS"})]})}),l.jsx(yd,{sectionId:"automations",initialCategory:"automations",hideTabs:!0,customTitle:l.jsxs(l.Fragment,{children:["MY"," ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500",children:"AUTOMATIONS"})]})}),l.jsx(d2,{}),l.jsx(f2,{}),l.jsx(h2,{}),l.jsx(p2,{})]})}function g2(){var Ue,ae,ce,be,Ve,Oe,dt,Pt,ot,_t,bt,ht,Tt;const{data:s,updateSection:e,visualSettings:t,setVisualSettings:r,analytics:o,isAdminOpen:c,closeAdmin:d,isAuthenticated:f,loginAdmin:p,logoutAdmin:m,resetToDefaults:y}=ss(),[S,x]=se.useState(""),[M,E]=se.useState(!1),[L,w]=se.useState(!1),[_,U]=se.useState("analytics"),[z,T]=se.useState(!1),[P,I]=se.useState(()=>{var de;return{name:((de=s.personal)==null?void 0:de.name)||"MD SAHADAT HOSSAIN",subtitle:"Driven by Autonomy & Precision.",introKicker:"I am Md Sahadat Hossain — an Autonomous Systems Engineer & AI Architect who transforms cutting-edge AI models into resilient, scalable, production-grade software.",storyP1:"My journey into technology was born not from a classroom syllabus, but from a lifelong obsession with code, web architecture, and digital engineering since childhood. While I completed my Master’s Degree, my real engineering edge was forged through relentless independent research, continuous experimentation, and building tangible software from the ground up.",storyP2:"I believe true engineering is proven by execution, not certificates—demonstrated through resilient backend architectures, intuitive frontend experiences, and software that delivers real-world impact. Combining deep fluency in modern web standards (HTML5, CSS, modern JavaScript, Python) with frontier AI models (Claude Opus & Sonnet, OpenAI GPT-4o, Google Gemini), I orchestrate intelligent, self-operating multi-agent ecosystems designed to scale.",degreeTitle:"Master's Degree (Completed) • Self-Driven Research",degreeDesc:"Advancing systems through independent algorithmic research, systems architecture, and full-stack autonomous AI engineering.",philosophyQuote:"Real engineering is measured by execution, not certificates. Turning autonomous intelligence into production solutions that eliminate operational friction and scale effortlessly.",targets:[{title:"10x Execution Velocity",desc:"Compressing weeks of traditional development into hours using autonomous agent swarms that scaffold, test, and self-heal.",stat:"10x Faster"},{title:"70% Cost Compression",desc:"Eliminating bloated agency retainers and manual overhead through deterministic, automated AI pipelines.",stat:"70% Savings"},{title:"Zero-Hallucination Resilience",desc:"Engineering strict guardrails, structured JSON schemas, and automated lint verification for flawless production output.",stat:"99.9% Reliable"}]}}),[A,b]=se.useState(()=>{var de,lt,nt,at,K,Ae,We,k;return{...s.personal,avatarImage:((de=s.personal)==null?void 0:de.avatarImage)||"/sahadat-avatar.jpg",portraitImage:((lt=s.personal)==null?void 0:lt.portraitImage)||"/sahadat-portrait-full.png",facebook:((nt=s.personal)==null?void 0:nt.facebook)||"https://facebook.com/stl.sahadat",twitter:((at=s.personal)==null?void 0:at.twitter)||"https://x.com/stl_sahadat",instagram:((K=s.personal)==null?void 0:K.instagram)||"https://www.instagram.com/stlsahadat/?hl=en",youtube:((Ae=s.personal)==null?void 0:Ae.youtube)||"https://www.youtube.com/@SahadatAutomation0",telegram:((We=s.personal)==null?void 0:We.telegram)||"https://t.me/stl_sahadat",rolesString:Array.isArray((k=s.personal)==null?void 0:k.roles)?s.personal.roles.join(", "):"AI Agent Architect, Autonomous Systems Engineer, Full-Stack AI Developer, Enterprise Prompt Engineer, Multi-Agent Orchestrator"}}),R=(de,lt)=>{var K;const nt=(K=de.target.files)==null?void 0:K[0];if(!nt)return;if(nt.size>5*1024*1024){alert("Selected image is larger than 5MB. Please choose a smaller image.");return}const at=new FileReader;at.onload=()=>{b(Ae=>({...Ae,[lt]:at.result}))},at.readAsDataURL(nt)},[O,B]=se.useState(()=>s.projects||[]),[V,F]=se.useState(null),[G,Y]=se.useState({id:`0${(((Ue=s.projects)==null?void 0:Ue.length)||0)+1}`,title:"",category:"",description:"",tags:"",demoUrl:"",githubUrl:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"}),[ie,Z]=se.useState(!1);if(!c)return null;const X=async de=>{de.preventDefault(),await p(S)?(E(!1),x("")):E(!0)},j=()=>{T(!0),setTimeout(()=>T(!1),2500)},H=de=>{de.preventDefault(),e("aboutCustom",P),j()},D=de=>{de.preventDefault();const lt=A.rolesString.split(",").map(nt=>nt.trim()).filter(Boolean);e("personal",{...A,roles:lt}),j()},Q=de=>{if(de.preventDefault(),!G.title)return;const lt={...G,tags:typeof G.tags=="string"?G.tags.split(",").map(at=>at.trim()).filter(Boolean):G.tags},nt=[...O,lt];B(nt),e("projects",nt),Z(!1),Y({id:`0${nt.length+1}`,title:"",category:"",description:"",tags:"",demoUrl:"",githubUrl:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"}),j()},ve=de=>{if(window.confirm("Are you sure you want to delete this project?")){const lt=O.filter((nt,at)=>at!==de);B(lt),e("projects",lt),j()}},Re=()=>{const de={personal:s.personal,projects:s.projects,aboutCustom:P,visualSettings:t,education:s.education,skills:s.skills,experience:s.experience,blogs:s.blogs},lt=new Blob([JSON.stringify(de,null,2)],{type:"application/json"}),nt=URL.createObjectURL(lt),at=document.createElement("a");at.href=nt,at.download=`sahadat_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`,at.click(),URL.revokeObjectURL(nt)},Ne=(de=0)=>{const lt=Math.floor(de/60),nt=de%60;return`${lt}m ${nt}s`};return f?l.jsxs("div",{className:"fixed inset-0 z-[9999] bg-[#050508] text-white flex flex-col overflow-hidden font-sans",children:[l.jsxs("header",{className:"h-16 px-6 border-b border-white/10 bg-[#080811]/90 backdrop-blur-xl flex items-center justify-between shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),l.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),l.jsxs("div",{children:[l.jsx("h1",{className:"font-bebas text-2xl tracking-wider text-white leading-none",children:"SAHADAT COMMAND CONSOLE"}),l.jsx("span",{className:"text-[10px] font-mono text-zinc-400 uppercase tracking-widest",children:"Live Production Content & Telemetry Engine"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[z&&l.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono animate-in fade-in",children:[l.jsx(tv,{size:14}),l.jsx("span",{children:"SAVED & APPLIED LIVE"})]}),l.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all",children:[l.jsx(sv,{size:14}),l.jsx("span",{children:"VIEW LIVE SITE"})]}),l.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-mono uppercase tracking-wider text-red-400 hover:text-red-300 transition-all",children:[l.jsx(Fl,{size:14}),l.jsx("span",{children:"LOCK"})]})]})]}),l.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[l.jsxs("aside",{className:"w-64 border-r border-white/10 bg-[#07070f] flex flex-col justify-between shrink-0 overflow-y-auto p-4 space-y-6",children:[l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("div",{className:"px-3 pb-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold",children:"MODULES & MANAGEMENT"}),l.jsxs("button",{onClick:()=>U("analytics"),className:`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${_==="analytics"?"bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:[l.jsx(pv,{size:16}),l.jsx("span",{children:"Telemetry & Visits"})]}),l.jsxs("button",{onClick:()=>U("about"),className:`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${_==="about"?"bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:[l.jsx(p0,{size:16}),l.jsx("span",{children:"About Me Editor"})]}),l.jsxs("button",{onClick:()=>U("projects"),className:`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${_==="projects"?"bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:[l.jsx(ov,{size:16}),l.jsx("span",{children:"Projects Manager"})]}),l.jsxs("button",{onClick:()=>U("hero"),className:`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${_==="hero"?"bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:[l.jsx(h0,{size:16}),l.jsx("span",{children:"Hero & Identity"})]}),l.jsxs("button",{onClick:()=>U("visuals"),className:`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${_==="visuals"?"bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]":"text-zinc-400 hover:text-white hover:bg-white/5"}`,children:[l.jsx(Sv,{size:16}),l.jsx("span",{children:"Visuals & Lighting"})]})]}),l.jsxs("div",{className:"pt-4 border-t border-white/10 space-y-2",children:[l.jsxs("button",{onClick:Re,className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-300 hover:text-white transition-all uppercase",children:[l.jsx(d0,{size:14}),l.jsx("span",{children:"Download Backup"})]}),l.jsx("button",{onClick:y,className:"w-full py-2 text-[10px] font-mono text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-wider text-center",children:"Restore Defaults"})]})]}),l.jsxs("main",{className:"flex-1 overflow-y-auto p-6 lg:p-10 bg-[#050508]/60",children:[_==="analytics"&&l.jsxs("div",{className:"max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-bebas text-3xl tracking-wide text-white",children:"REAL-TIME TELEMETRY & VISITOR AUDIT"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1",children:"Client interaction data, session time, and contact click events"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg",children:[l.jsxs("div",{className:"flex items-center justify-between text-zinc-400 mb-3",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-wider",children:"Total Page Visits"}),l.jsx($x,{size:18,className:"text-crimson"})]}),l.jsx("div",{className:"font-bebas text-4xl text-white",children:o.totalVisits||1}),l.jsx("div",{className:"text-[10px] font-mono text-emerald-400 mt-2",children:"● Tracking live sessions"})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg",children:[l.jsxs("div",{className:"flex items-center justify-between text-zinc-400 mb-3",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-wider",children:"Total Time on Site"}),l.jsx(c0,{size:18,className:"text-amber-400"})]}),l.jsx("div",{className:"font-bebas text-4xl text-white",children:Ne(o.totalTimeSpentSeconds||0)}),l.jsx("div",{className:"text-[10px] font-mono text-zinc-500 mt-2",children:"Accumulated user engagement"})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg",children:[l.jsxs("div",{className:"flex items-center justify-between text-zinc-400 mb-3",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-wider",children:"WhatsApp Clicks"}),l.jsx(vv,{size:18,className:"text-emerald-400"})]}),l.jsx("div",{className:"font-bebas text-4xl text-emerald-400",children:((ae=o.clicks)==null?void 0:ae.whatsapp)||0}),l.jsx("div",{className:"text-[10px] font-mono text-zinc-500 mt-2",children:"Direct inquiry triggers"})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg",children:[l.jsxs("div",{className:"flex items-center justify-between text-zinc-400 mb-3",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-wider",children:"Social / Email Clicks"}),l.jsx(rv,{size:18,className:"text-blue-400"})]}),l.jsx("div",{className:"font-bebas text-4xl text-white",children:(((ce=o.clicks)==null?void 0:ce.email)||0)+(((be=o.clicks)==null?void 0:be.github)||0)+(((Ve=o.clicks)==null?void 0:Ve.linkedin)||0)}),l.jsx("div",{className:"text-[10px] font-mono text-zinc-500 mt-2",children:"Email, GitHub, LinkedIn"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[l.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Interaction Channel Breakdown"}),l.jsxs("div",{className:"space-y-3 pt-2",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-zinc-400",children:"WhatsApp Inquiries"}),l.jsxs("span",{className:"text-emerald-400 font-bold",children:[((Oe=o.clicks)==null?void 0:Oe.whatsapp)||0," clicks"]})]}),l.jsx("div",{className:"w-full h-1.5 rounded-full bg-white/5 overflow-hidden",children:l.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:`${Math.min(100,(((dt=o.clicks)==null?void 0:dt.whatsapp)||0)*15)}%`}})}),l.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-zinc-400",children:"Email Triggers"}),l.jsxs("span",{className:"text-white font-bold",children:[((Pt=o.clicks)==null?void 0:Pt.email)||0," clicks"]})]}),l.jsx("div",{className:"w-full h-1.5 rounded-full bg-white/5 overflow-hidden",children:l.jsx("div",{className:"h-full bg-blue-500 rounded-full",style:{width:`${Math.min(100,(((ot=o.clicks)==null?void 0:ot.email)||0)*20)}%`}})}),l.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-zinc-400",children:"GitHub Profile Visits"}),l.jsxs("span",{className:"text-white font-bold",children:[((_t=o.clicks)==null?void 0:_t.github)||0," clicks"]})]}),l.jsx("div",{className:"w-full h-1.5 rounded-full bg-white/5 overflow-hidden",children:l.jsx("div",{className:"h-full bg-zinc-300 rounded-full",style:{width:`${Math.min(100,(((bt=o.clicks)==null?void 0:bt.github)||0)*20)}%`}})}),l.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-zinc-400",children:"LinkedIn Connections"}),l.jsxs("span",{className:"text-white font-bold",children:[((ht=o.clicks)==null?void 0:ht.linkedin)||0," clicks"]})]}),l.jsx("div",{className:"w-full h-1.5 rounded-full bg-white/5 overflow-hidden",children:l.jsx("div",{className:"h-full bg-cyan-500 rounded-full",style:{width:`${Math.min(100,(((Tt=o.clicks)==null?void 0:Tt.linkedin)||0)*20)}%`}})})]})]}),l.jsxs("div",{className:"lg:col-span-7 p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Live User Interaction Stream"}),l.jsx("span",{className:"text-[10px] font-mono text-zinc-500 uppercase",children:"Last 50 Events"})]}),l.jsx("div",{className:"space-y-2 max-h-72 overflow-y-auto pr-2",children:o.recentLogs&&o.recentLogs.length>0?o.recentLogs.map(de=>l.jsxs("div",{className:"flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-crimson"}),l.jsx("span",{className:"text-zinc-200",children:de.action}),de.label&&l.jsxs("span",{className:"text-zinc-500",children:["(",de.label,")"]})]}),l.jsx("span",{className:"text-[10px] text-zinc-400",children:de.time})]},de.id)):l.jsx("div",{className:"text-center py-10 text-xs font-mono text-zinc-500",children:"No external click events logged yet in current session."})})]})]})]}),_==="about"&&l.jsxs("div",{className:"max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-bebas text-3xl tracking-wide text-white",children:"ABOUT ME SECTION CONTROLLER"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1",children:"Manage narrative paragraphs, academic degree, philosophy & target pillars"})]}),l.jsxs("button",{onClick:H,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all",children:[l.jsx(ol,{size:15}),l.jsx("span",{children:"APPLY LIVE"})]})]}),l.jsxs("form",{onSubmit:H,className:"space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Header Subtitle & Intro Kicker"}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Header Script Quote (Right Side)"}),l.jsx("input",{type:"text",value:P.subtitle,onChange:de=>I({...P,subtitle:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Intro Summary Kicker"}),l.jsx("textarea",{rows:2,value:P.introKicker,onChange:de=>I({...P,introKicker:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"The Architect's Story (Core Narrative)"}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Paragraph 1: Childhood Passion, Master's Degree & Self-Driven Mastery"}),l.jsx("textarea",{rows:3,value:P.storyP1,onChange:de=>I({...P,storyP1:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-zinc-200 outline-none leading-relaxed"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Paragraph 2: Code Execution over Certificates & Frontier AI Models"}),l.jsx("textarea",{rows:3,value:P.storyP2,onChange:de=>I({...P,storyP2:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-zinc-200 outline-none leading-relaxed"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Academic Degree Heading"}),l.jsx("input",{type:"text",value:P.degreeTitle,onChange:de=>I({...P,degreeTitle:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Research Methodology Note"}),l.jsx("input",{type:"text",value:P.degreeDesc,onChange:de=>I({...P,degreeDesc:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Core Engineering Philosophy Quote"}),l.jsx("textarea",{rows:2,value:P.philosophyQuote,onChange:de=>I({...P,philosophyQuote:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none font-medium"})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Core Targets & ROI Impact Cards"}),P.targets.map((de,lt)=>l.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-black/40 space-y-3",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 gap-3",children:[l.jsxs("div",{className:"sm:col-span-8",children:[l.jsxs("label",{className:"block text-[10px] font-mono text-zinc-400 uppercase mb-1",children:["Target 0",lt+1," Title"]}),l.jsx("input",{type:"text",value:de.title,onChange:nt=>{const at=[...P.targets];at[lt].title=nt.target.value,I({...P,targets:at})},className:"w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-sans text-white outline-none"})]}),l.jsxs("div",{className:"sm:col-span-4",children:[l.jsx("label",{className:"block text-[10px] font-mono text-zinc-400 uppercase mb-1",children:"Pill Badge (Stat)"}),l.jsx("input",{type:"text",value:de.stat,onChange:nt=>{const at=[...P.targets];at[lt].stat=nt.target.value,I({...P,targets:at})},className:"w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-zinc-200 outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] font-mono text-zinc-400 uppercase mb-1",children:"Description"}),l.jsx("textarea",{rows:2,value:de.desc,onChange:nt=>{const at=[...P.targets];at[lt].desc=nt.target.value,I({...P,targets:at})},className:"w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-sans text-zinc-300 outline-none"})]})]},lt))]}),l.jsx("div",{className:"flex justify-end pt-2",children:l.jsxs("button",{type:"submit",className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all",children:[l.jsx(ol,{size:16}),l.jsx("span",{children:"SAVE ALL ABOUT ME CHANGES"})]})})]})]}),_==="projects"&&l.jsxs("div",{className:"max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-bebas text-3xl tracking-wide text-white",children:"PROJECTS & CASE STUDIES MANAGER"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1",children:"Add new projects, update demo links, repository URLs, and tags"})]}),l.jsxs("button",{onClick:()=>Z(!ie),className:"flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all",children:[l.jsx(im,{size:16}),l.jsx("span",{children:ie?"CANCEL":"ADD NEW PROJECT"})]})]}),ie&&l.jsxs("div",{className:"p-6 rounded-2xl border border-crimson/40 bg-[#0d0d1a] shadow-xl space-y-4 animate-in fade-in",children:[l.jsxs("h3",{className:"font-mono text-xs uppercase font-bold text-crimson tracking-wider flex items-center gap-2",children:[l.jsx(im,{size:14}),l.jsx("span",{children:"Create New Portfolio Project"})]}),l.jsxs("form",{onSubmit:Q,className:"space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Project Title"}),l.jsx("input",{type:"text",required:!0,value:G.title,onChange:de=>Y({...G,title:de.target.value}),placeholder:"e.g. Autonomous Multi-Agent Swarm",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Category / Subtitle"}),l.jsx("input",{type:"text",required:!0,value:G.category,onChange:de=>Y({...G,category:de.target.value}),placeholder:"e.g. Autonomous AI Engine",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Description"}),l.jsx("textarea",{rows:2,required:!0,value:G.description,onChange:de=>Y({...G,description:de.target.value}),placeholder:"Detailed project summary...",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Live Demo URL"}),l.jsx("input",{type:"url",value:G.demoUrl,onChange:de=>Y({...G,demoUrl:de.target.value}),placeholder:"https://...",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"GitHub Repo URL"}),l.jsx("input",{type:"url",value:G.githubUrl,onChange:de=>Y({...G,githubUrl:de.target.value}),placeholder:"https://github.com/...",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Tags (comma separated)"}),l.jsx("input",{type:"text",value:G.tags,onChange:de=>Y({...G,tags:de.target.value}),placeholder:"CrewAI, Python, LangChain",className:"w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]})]}),l.jsx("div",{className:"flex justify-end pt-2",children:l.jsx("button",{type:"submit",className:"px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-all",children:"Publish Project To Site"})})]})]}),l.jsx("div",{className:"space-y-4",children:O.map((de,lt)=>l.jsxs("div",{className:"p-5 rounded-2xl border border-white/10 bg-[#0a0a14] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white/20 transition-all",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("span",{className:"font-bebas text-2xl text-crimson w-8",children:de.id||`0${lt+1}`}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-outfit text-base font-bold text-white uppercase tracking-wide",children:de.title}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-0.5",children:de.category})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[de.demoUrl&&l.jsx("a",{href:de.demoUrl,target:"_blank",rel:"noreferrer",className:"px-3 py-1 rounded-lg border border-white/15 text-[11px] font-mono text-zinc-300 hover:text-white hover:bg-white/10",children:"Demo ↗"}),l.jsx("button",{onClick:()=>ve(lt),className:"p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors",title:"Delete project",children:l.jsx(Ev,{size:16})})]})]},de.id||lt))})]}),_==="hero"&&l.jsxs("div",{className:"max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-bebas text-3xl tracking-wide text-white",children:"HERO SECTION & PERSONAL DETAILS"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1",children:"Manage name, rotating roles, bio and contact channels"})]}),l.jsxs("button",{onClick:D,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all",children:[l.jsx(ol,{size:15}),l.jsx("span",{children:"APPLY LIVE"})]})]}),l.jsxs("form",{onSubmit:D,className:"space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(dv,{size:16,className:"text-crimson"}),l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Profile Photos & Visual Assets Studio"})]}),l.jsx("span",{className:"text-[10px] font-mono text-zinc-400 uppercase tracking-widest",children:"Live Base64 Upload & URL Support"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"p-4 rounded-xl border border-white/8 bg-black/40 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("label",{className:"text-[11px] font-mono text-zinc-300 uppercase font-semibold",children:"1. Navbar Profile Avatar (Small)"}),l.jsxs("button",{type:"button",onClick:()=>b({...A,avatarImage:"/sahadat-avatar.jpg"}),className:"text-[10px] font-mono text-zinc-400 hover:text-crimson flex items-center gap-1 transition-colors",title:"Reset to default image",children:[l.jsx(rm,{size:11}),l.jsx("span",{children:"Reset"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 py-2",children:[l.jsx("div",{className:"relative rounded-full p-[2px] bg-gradient-to-tr from-red-600 to-rose-500 shadow-[0_0_15px_rgba(220,38,38,0.6)] shrink-0",children:l.jsx("div",{className:"w-14 h-14 rounded-full overflow-hidden bg-black flex items-center justify-center",children:l.jsx("img",{src:Xa(A.avatarImage||"/sahadat-avatar.jpg"),alt:"Avatar Preview",className:"w-full h-full object-cover"})})}),l.jsx("div",{className:"text-[11px] font-mono text-zinc-400 leading-snug",children:"Appears in the top-left navigation bar with glowing red perimeter ring."})]}),l.jsx("div",{children:l.jsxs("label",{className:"flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-crimson/50 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer transition-all",children:[l.jsx(sm,{size:14,className:"text-crimson"}),l.jsx("span",{children:"Upload From Device / Phone"}),l.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:de=>R(de,"avatarImage")})]})}),l.jsxs("div",{children:[l.jsx("span",{className:"block text-[10px] font-mono text-zinc-400 uppercase mb-1",children:"Or Direct Image URL / Path:"}),l.jsx("input",{type:"text",value:A.avatarImage||"",onChange:de=>b({...A,avatarImage:de.target.value}),placeholder:"/sahadat-avatar.jpg or https://...",className:"w-full px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl border border-white/8 bg-black/40 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("label",{className:"text-[11px] font-mono text-zinc-300 uppercase font-semibold",children:"2. Hero Studio Portrait (Big)"}),l.jsxs("button",{type:"button",onClick:()=>b({...A,portraitImage:"/sahadat-portrait-full.png"}),className:"text-[10px] font-mono text-zinc-400 hover:text-crimson flex items-center gap-1 transition-colors",title:"Reset to default image",children:[l.jsx(rm,{size:11}),l.jsx("span",{children:"Reset"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 py-2",children:[l.jsx("div",{className:"w-14 h-16 rounded-xl overflow-hidden bg-black/80 border border-white/10 flex items-end justify-center shrink-0 relative",children:l.jsx("img",{src:Xa(A.portraitImage||"/sahadat-portrait-full.png"),alt:"Portrait Preview",className:"w-full h-full object-contain object-bottom"})}),l.jsx("div",{className:"text-[11px] font-mono text-zinc-400 leading-snug",children:"Main photographic spotlight cutout in the Hero front section."})]}),l.jsx("div",{children:l.jsxs("label",{className:"flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-crimson/50 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer transition-all",children:[l.jsx(sm,{size:14,className:"text-crimson"}),l.jsx("span",{children:"Upload From Device / Phone"}),l.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:de=>R(de,"portraitImage")})]})}),l.jsxs("div",{children:[l.jsx("span",{className:"block text-[10px] font-mono text-zinc-400 uppercase mb-1",children:"Or Direct Image URL / Path:"}),l.jsx("input",{type:"text",value:A.portraitImage||"",onChange:de=>b({...A,portraitImage:de.target.value}),placeholder:"/sahadat-portrait-full.png or https://...",className:"w-full px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]})]})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Core Identity & Roles"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Full Name"}),l.jsx("input",{type:"text",value:A.name,onChange:de=>b({...A,name:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Short Name / Callout"}),l.jsx("input",{type:"text",value:A.shortName,onChange:de=>b({...A,shortName:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Cyber Typewriter Rotating Roles (comma separated)"}),l.jsx("input",{type:"text",value:A.rolesString,onChange:de=>b({...A,rolesString:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Hero Bio Description"}),l.jsx("textarea",{rows:3,value:A.bio,onChange:de=>b({...A,bio:de.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none leading-relaxed"})]})]}),l.jsxs("div",{className:"p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("h3",{className:"font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider",children:"Contact Channels & Social Media Hub"}),l.jsx("span",{className:"text-[10px] font-mono text-zinc-400 uppercase",children:"Syncs with Footer Dock & Cyber Nodes"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Email Address"}),l.jsx("input",{type:"email",value:A.email||"",onChange:de=>b({...A,email:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Phone / WhatsApp"}),l.jsx("input",{type:"text",value:A.phone||"",onChange:de=>b({...A,phone:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Facebook Profile URL"}),l.jsx("input",{type:"url",placeholder:"https://facebook.com/...",value:A.facebook||"",onChange:de=>b({...A,facebook:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Twitter / X Profile URL"}),l.jsx("input",{type:"url",placeholder:"https://x.com/...",value:A.twitter||"",onChange:de=>b({...A,twitter:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Instagram Profile URL"}),l.jsx("input",{type:"url",placeholder:"https://instagram.com/...",value:A.instagram||"",onChange:de=>b({...A,instagram:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"YouTube Channel URL"}),l.jsx("input",{type:"url",placeholder:"https://youtube.com/@...",value:A.youtube||"",onChange:de=>b({...A,youtube:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"GitHub Profile URL"}),l.jsx("input",{type:"url",placeholder:"https://github.com/...",value:A.github||"",onChange:de=>b({...A,github:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"LinkedIn Profile URL"}),l.jsx("input",{type:"url",placeholder:"https://linkedin.com/in/...",value:A.linkedin||"",onChange:de=>b({...A,linkedin:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[11px] font-mono text-zinc-400 uppercase mb-1",children:"Telegram Username / Link"}),l.jsx("input",{type:"text",placeholder:"https://t.me/...",value:A.telegram||"",onChange:de=>b({...A,telegram:de.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"})]})]})]}),l.jsx("div",{className:"flex justify-end",children:l.jsxs("button",{type:"submit",className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all",children:[l.jsx(ol,{size:16}),l.jsx("span",{children:"SAVE HERO & PERSONAL DETAILS"})]})})]})]}),_==="visuals"&&l.jsxs("div",{className:"max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-bebas text-3xl tracking-wide text-white",children:"VISUAL BRIGHTNESS & LIGHTING INTENSITY CONTROLS"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1",children:"Adjust 3D canvas opacity, atmospheric glow factor, and visual effects in real time"})]}),l.jsxs("div",{className:"p-8 rounded-3xl border border-white/10 bg-[#0a0a14] space-y-8 shadow-xl",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-outfit text-base font-bold uppercase text-white",children:"3D Background Canvas Brightness"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-0.5",children:"Controls the opacity of red spider crawl tendrils & background mesh"})]}),l.jsxs("span",{className:"font-mono text-sm font-bold text-crimson px-3 py-1 rounded-lg bg-crimson/15 border border-crimson/30",children:[t.canvasBrightness,"%"]})]}),l.jsx("input",{type:"range",min:"20",max:"150",step:"5",value:t.canvasBrightness,onChange:de=>r({...t,canvasBrightness:Number(de.target.value)}),className:"w-full accent-red-600 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"}),l.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-zinc-500",children:[l.jsx("span",{children:"20% (Subtle / Dim)"}),l.jsx("span",{children:"100% (Default Balanced)"}),l.jsx("span",{children:"150% (High Intensity)"})]})]}),l.jsxs("div",{className:"space-y-3 pt-6 border-t border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-outfit text-base font-bold uppercase text-white",children:"Atmospheric Glow & Lighting Factor"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-0.5",children:"Controls the blur spread of ambient neon spotlights & capsule borders"})]}),l.jsxs("span",{className:"font-mono text-sm font-bold text-white px-3 py-1 rounded-lg bg-white/10 border border-white/20",children:[t.glowIntensity,"%"]})]}),l.jsx("input",{type:"range",min:"30",max:"150",step:"5",value:t.glowIntensity,onChange:de=>r({...t,glowIntensity:Number(de.target.value)}),className:"w-full accent-white cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"}),l.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-zinc-500",children:[l.jsx("span",{children:"30% (Minimal / Soft)"}),l.jsx("span",{children:"100% (Default)"}),l.jsx("span",{children:"150% (High Voltage Neon)"})]})]}),l.jsxs("div",{className:"pt-4 flex justify-between items-center text-xs font-mono",children:[l.jsx("span",{className:"text-zinc-500",children:"Changes apply to entire site immediately"}),l.jsx("button",{onClick:()=>r({canvasBrightness:100,glowIntensity:100,motionDamping:"normal",particleColor:"#ef233c"}),className:"px-4 py-2 rounded-xl border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors uppercase",children:"Reset Visuals To 100%"})]})]})]})]})]})]}):l.jsx("div",{className:"fixed inset-0 z-[9999] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4",children:l.jsxs("div",{className:"relative w-full max-w-md rounded-3xl border border-white/15 bg-[#090912]/95 p-8 shadow-[0_0_50px_rgba(239,35,60,0.25)] text-white",children:[l.jsx("button",{onClick:d,className:"absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors",children:l.jsx(m0,{size:20})}),l.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[l.jsx("div",{className:"p-4 rounded-2xl bg-crimson/15 text-crimson mb-4 border border-crimson/30 shadow-[0_0_20px_rgba(239,35,60,0.3)]",children:l.jsx(Fl,{size:32})}),l.jsx("h2",{className:"font-bebas text-3xl tracking-wider text-white",children:"CONTROL CONSOLE ACCESS"}),l.jsx("p",{className:"text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider",children:"Enter Administrative Key To Access System"})]}),l.jsxs("form",{onSubmit:X,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:L?"text":"password",value:S,onChange:de=>{x(de.target.value),E(!1)},placeholder:"SECURITY ACCESS KEY",className:`w-full px-4 py-3 rounded-xl bg-black/60 border ${M?"border-red-500 shadow-[0_0_12px_rgba(239,35,60,0.5)]":"border-white/15 focus:border-crimson"} text-white font-mono text-sm tracking-widest outline-none transition-all`,autoFocus:!0}),l.jsx("button",{type:"button",onClick:()=>w(!L),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-200",children:L?"HIDE":"SHOW"})]}),M&&l.jsxs("div",{className:"flex items-center gap-1.5 mt-2 text-xs font-mono text-red-400",children:[l.jsx(yv,{size:14}),l.jsx("span",{children:"Invalid Access Key. Access Denied."})]})]}),l.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-widest shadow-[0_0_20px_rgba(239,35,60,0.4)] transition-all",children:"AUTHENTICATE CONSOLE"})]}),l.jsx("div",{className:"mt-6 pt-4 border-t border-white/10 text-center",children:l.jsx("span",{className:"text-[10px] font-mono text-zinc-500 uppercase tracking-widest",children:"Secured Session • Md Sahadat Hossain"})})]})})}function x2(){const{openAdmin:s}=ss();return l.jsx("button",{onClick:s,title:"Open Control Console (Ctrl+Shift+A)","aria-label":"Open Admin Console",className:"fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-[#080811]/70 border border-white/10 hover:border-crimson/50 text-zinc-400 hover:text-white backdrop-blur-xl shadow-lg transition-all duration-300 opacity-40 hover:opacity-100 hover:scale-110 group select-none cursor-pointer",children:l.jsx(Fl,{size:14,className:"group-hover:text-crimson transition-colors"})})}function v2(){return l.jsxs("div",{className:"min-h-screen bg-[#050505] dark:bg-[#050505] light:bg-[#f8fafc] text-white dark:text-white light:text-zinc-900 selection:bg-crimson selection:text-white font-sans relative overflow-x-hidden transition-colors duration-300",children:[l.jsx(Vx,{}),l.jsx(Wx,{}),l.jsx(Cv,{}),l.jsx("main",{className:"relative z-10 bg-transparent",children:l.jsx(m2,{})}),l.jsx(x2,{}),l.jsx(g2,{})]})}function _2(){return l.jsx(Hx,{children:l.jsx(v2,{})})}jx.createRoot(document.getElementById("root")).render(l.jsx($l.StrictMode,{children:l.jsx(_2,{})}));
