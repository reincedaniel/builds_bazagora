import{bQ as Le,bR as Be,ad as Fe,b as R,p as W,T as le,aa as j,r as D,be as q,bg as ve,w as L,bc as V,bS as ze,bT as he,bU as oe,bV as ae,bW as be,a4 as k,ax as ee,bX as we,az as N,aA as Ee,as as de,bY as Me,bZ as Ye,bf as me,Q as Re,b_ as xe,bj as Xe,ar as z,bb as Ue,D as Ze,b$ as Ne,M as Ge,aJ as Qe,bF as Je,ab as Ke,b1 as et,ai as tt,aq as nt,aR as ot,aS as at,aj as rt,Z as it,b6 as st,at as lt,bz as ct,ae as ut,c0 as ft,H as vt,I as dt,av as mt,F as yt,c1 as gt}from"./index-B1WJZsO4.js";import{a as Z,d as ht,s as ce,b as bt,g as _e,n as He,B as re,c as Se}from"./forwardRefs-DWGaNmQL.js";import{m as wt,M as Et}from"./VImg-1Vr-55fK.js";const G=new WeakMap;function xt(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=Be(t),a=G.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),G.has(e)||G.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function St(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=Be(t),a=G.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function De(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Ot(e):ye(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ye(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ye(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ot(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function kt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Pt=j({target:[Object,Array]},"v-dialog-transition"),rn=Fe()({name:"VDialogTransition",props:Pt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var h;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a),y=Z(a,[{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:ht});(h=pe(a))==null||h.forEach(g=>{Z(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),y.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var h;await new Promise(g=>requestAnimationFrame(g));const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a);Z(a,[{},{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:bt}).finished.then(()=>i()),(h=pe(a))==null||h.forEach(g=>{Z(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(le,W({name:"dialog-transition"},o,{css:!1}),t):R(le,{name:"dialog-transition"},t)}});function pe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Oe(e,n){const t=_e(e),o=He(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(A=>parseFloat(A)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||r==="left"?u-=t.width/2:(s==="right"||r==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const f=t.width/o.width,y=t.height/o.height,h=Math.max(1,f,y),g=f/h||0,d=y/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(i+o.top),sx:g,sy:d,speed:P}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function At(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ve={static:Lt,connected:Ft},Ct=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ve},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Tt(e,n){const t=D({}),o=D();q&&ve(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;L(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=Ve[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Lt(){}function Bt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=He(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,n,t){(Array.isArray(e.target.value)||kt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=ze(()=>{const d=he(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?oe(d):he(n.origin,e.isRtl.value);return d.side===v.side&&d.align===ae(v).align?{preferredAnchor:be(d),preferredOrigin:be(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&g()});L([e.target,e.contentEl],(d,v)=>{let[P,A]=d,[x,w]=v;x&&!Array.isArray(x)&&h.unobserve(x),P&&!Array.isArray(P)&&h.observe(P),w&&h.unobserve(w),A&&h.observe(A)},{immediate:!0}),V(()=>{h.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=_e(e.target.value),v=Bt(e.contentEl.value,e.isRtl.value),P=J(e.contentEl.value),A=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=P.reduce((p,E)=>{const m=E.getBoundingClientRect(),b=new re({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return p?new re({x:Math.max(p.left,b.left),y:Math.max(p.top,b.top),width:Math.min(p.right,b.right)-Math.max(p.left,b.left),height:Math.min(p.bottom,b.bottom)-Math.max(p.top,b.top)}):b},void 0);x.x+=A,x.y+=A,x.width-=A*2,x.height-=A*2;let w={anchor:a.value,origin:i.value};function I(p){const E=new re(v),m=ke(p.anchor,d),b=ke(p.origin,E);let{x:B,y:M}=At(m,b);switch(p.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":B-=f.value[0];break;case"right":B+=f.value[0];break}switch(p.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":B-=f.value[1];break;case"right":B+=f.value[1];break}return E.x+=B,E.y+=M,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:Se(E,x),x:B,y:M}}let F=0,C=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:p,y:E,overflows:m}=I(w);F+=p,C+=E,v.x+=p,v.y+=E;{const b=we(w.anchor),B=m.x.before||m.x.after,M=m.y.before||m.y.after;let Y=!1;if(["x","y"].forEach(O=>{if(O==="x"&&B&&!T.x||O==="y"&&M&&!T.y){const $={anchor:{...w.anchor},origin:{...w.origin}},X=O==="x"?b==="y"?ae:oe:b==="y"?oe:ae;$.anchor=X($.anchor),$.origin=X($.origin);const{overflows:_}=I($);(_[O].before<=m[O].before&&_[O].after<=m[O].after||_[O].before+_[O].after<(m[O].before+m[O].after)/2)&&(w=$,Y=T[O]=!0)}}),Y)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(C+=m.y.before,v.y+=m.y.before),m.y.after&&(C-=m.y.after,v.y-=m.y.after);{const b=Se(v,x);l.x=x.width-b.x.before-b.x.after,l.y=x.height-b.y.before-b.y.after,F+=b.x.before,v.x+=b.x.before,C+=b.y.before,v.y+=b.y.before}break}const ne=we(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:N(se(C)),left:e.isRtl.value?void 0:N(se(F)),right:e.isRtl.value?N(se(-F)):void 0,minWidth:N(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:N(Pe(Ee(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:N(Pe(Ee(l.y,r.value===1/0?0:r.value,c.value)))}),{available:l,contentBox:v}}return L(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const d=g();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const K=[];function Mt(e){!ue||K.length?(K.push(e),fe()):(ue=!1,e(),fe())}let Ae=-1;function fe(){cancelAnimationFrame(Ae),Ae=requestAnimationFrame(()=>{const e=K.shift();e&&e(),K.length?fe():ue=!0})}const Q={none:null,close:_t,block:Ht,reposition:Dt},Rt=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Q}},"VOverlay-scroll-strategies");function Nt(e,n){if(!q)return;let t;de(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Me(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Q[e.scrollStrategy])==null||o.call(Q,n,e,t)}))}),V(()=>{t==null||t.stop()})}function _t(e){function n(t){e.isActive.value=!1}Ie(e.targetEl.value??e.contentEl.value,n)}function Ht(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...J(e.targetEl.value,n.contained?t:void 0),...J(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ye(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",N(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",N(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",N(a)),r.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((r,u)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),y=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-f,r.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Dt(e,n,t){let o=!1,a=-1,i=-1;function s(r){Mt(()=>{var f,y;const u=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ie(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ie(e,n){const t=[document,...J(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Vt=Symbol.for("vuetify:v-menu"),It=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function $t(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ye(r,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Wt=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...It()},"VOverlay-activator");function qt(e,n){let{isActive:t,isTop:o}=n;const a=me("useActivator"),i=D();let s=!1,r=!1,u=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:y,runCloseDelay:h}=$t(e,l=>{l===(e.openOnHover&&s||c.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=D(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,y())},onMouseleave:l=>{s=!1,h()},onFocus:l=>{Xe(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,y())},onBlur:l=>{r=!1,l.stopPropagation(),h()}},v=k(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),P=k(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,y()},l.onMouseleave=()=>{s=!1,h()}),c.value&&(l.onFocusin=()=>{r=!0,y()},l.onFocusout=()=>{r=!1,h()}),e.closeOnContentClick){const T=Re(Vt,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),A=k(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,y())},l.onMouseleave=()=>{s=!1,h()}),l});L(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),L(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const x=D();de(()=>{x.value&&ee(()=>{i.value=xe(x.value)})});const w=D(),I=k(()=>e.target==="cursor"&&g.value?g.value:w.value?xe(w.value):$e(e.target,a)||i.value),F=k(()=>Array.isArray(I.value)?void 0:I.value);let C;return L(()=>!!e.activator,l=>{l&&q?(C=Me(),C.run(()=>{jt(e,a,{activatorEl:i,activatorEvents:v})})):C&&C.stop()},{flush:"post",immediate:!0}),V(()=>{C==null||C.stop()}),{activatorEl:i,activatorRef:x,target:I,targetEl:F,targetRef:w,activatorEvents:v,contentEvents:P,scrimEvents:A}}function jt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=r(c);f&&s(f)}u&&ee(()=>i())},{immediate:!0}),L(()=>e.activatorProps,()=>{i()}),V(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&xt(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&St(u,W(a.value,c))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function zt(){if(!q)return z(!1);const{ssr:e}=Ue();if(e){const n=z(!1);return Ze(()=>{n.value=!0}),n}else return z(!0)}const Yt=j({eager:Boolean},"lazy");function Xt(e,n){const t=z(!1),o=k(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Ut(){const n=me("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ce=Symbol.for("vuetify:stack"),U=Ne([]);function Zt(e,n,t){const o=me("useStack"),a=!t,i=Re(Ce,void 0),s=Ne({activeChildren:new Set});Ge(Ce,s);const r=z(+n.value);ve(e,()=>{var y;const f=(y=U.at(-1))==null?void 0:y[1];r.value=f?f+10:+n.value,a&&U.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(a){const h=Qe(U).findIndex(g=>g[0]===o.uid);U.splice(h,1)}i==null||i.activeChildren.delete(o.uid)})});const u=z(!0);a&&de(()=>{var y;const f=((y=U.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=f)});const c=k(()=>!s.activeChildren.size);return{globalTop:Je(u),localTop:c,stackStyles:k(()=>({zIndex:r.value}))}}function Gt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Qt(){return!0}function We(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=De(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Qt)(e)}function Jt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&We(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Te(e,n){const t=De(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Kt={mounted(e,n){const t=a=>Jt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=We(a,e,n)};Te(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Te(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function en(e){const{modelValue:n,color:t,...o}=e;return R(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Wt(),...Ke(),...et(),...Yt(),...Ct(),...Rt(),...tt(),...wt()},"VOverlay"),sn=Fe()({name:"VOverlay",directives:{ClickOutside:Kt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=nt(e,"modelValue"),s=k({get:()=>i.value,set:S=>{S&&e.disabled||(i.value=S)}}),{teleportTarget:r}=Gt(k(()=>e.attach||e.contained)),{themeClasses:u}=ot(e),{rtlClasses:c,isRtl:f}=at(),{hasContent:y,onAfterLeave:h}=Xt(e,s),g=rt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=Zt(s,it(e,"zIndex"),e._disableGlobalStack),{activatorEl:A,activatorRef:x,target:w,targetEl:I,targetRef:F,activatorEvents:C,contentEvents:l,scrimEvents:T}=qt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=st(e),ne=zt(),{scopeId:p}=Ut();L(()=>e.disabled,S=>{S&&(s.value=!1)});const E=D(),m=D(),{contentStyles:b,updateLocation:B}=Tt(e,{isRtl:f,contentEl:m,target:w,isActive:s});Nt(e,{root:E,contentEl:m,targetEl:I,isActive:s,updateLocation:B});function M(S){a("click:outside",S),e.persistent?_():s.value=!1}function Y(){return s.value&&d.value}q&&L(s,S=>{S?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)},{immediate:!0}),lt(()=>{q&&window.removeEventListener("keydown",O)});function O(S){var H,ge;S.key==="Escape"&&d.value&&(e.persistent?_():(s.value=!1,(H=m.value)!=null&&H.contains(document.activeElement)&&((ge=A.value)==null||ge.focus())))}const $=ct();ve(()=>e.closeOnBack,()=>{gt($,S=>{d.value&&s.value?(S(!1),e.persistent?_():s.value=!1):S()})});const X=D();L(()=>s.value&&(e.absolute||e.contained)&&r.value==null,S=>{if(S){const H=pt(E.value);H&&H!==document.scrollingElement&&(X.value=H.scrollTop)}});function _(){e.noClickAnimation||m.value&&Z(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function je(){h(),a("afterLeave")}return ut(()=>{var S;return R(yt,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,props:W({ref:x,targetRef:F},C.value,e.activatorProps)}),!e.disabled&&ne.value&&y.value&&R(ft,{disabled:!r.value,to:r.value},{default:()=>[R("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[P.value,{top:N(X.value)},e.style],ref:E},p,o),[R(en,W({color:g,modelValue:!!e.scrim&&s.value},T.value),null),R(Et,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:je},{default:()=>{var H;return[vt(R("div",W({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,b.value]},l.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:s})]),[[dt,s.value],[mt("click-outside"),{handler:M,closeConditional:Y,include:()=>[A.value]}]])]}})])]})])}),{activatorEl:A,target:w,animateClick:_,contentEl:m,globalTop:d,localTop:v,updateLocation:B}}});export{rn as V,Ut as a,tn as b,sn as c,Vt as d,pt as g,Yt as m,Xt as u};
