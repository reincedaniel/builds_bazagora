import{b as T,V as k,a as A,d as p,c as y}from"./VOverlay-CfJIM6QX.js";import{f as K}from"./forwardRefs-DWGaNmQL.js";import{aa as S,aK as I,ad as O,aq as U,aW as R,a4 as g,r as q,Q as F,ar as L,M as N,w as $,p as b,ae as j,b as w,a$ as Q,ax as W,bq as V,bD as z,bE as E}from"./index-DTOOu4oO.js";const B=S({id:String,...I(T({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:k}}),["absolute"])},"VMenu"),Y=O()({name:"VMenu",props:B(),emits:{"update:modelValue":l=>!0},setup(l,P){let{slots:i}=P;const r=U(l,"modelValue"),{scopeId:x}=A(),D=R(),f=g(()=>l.id||`v-menu-${D}`),n=q(),a=F(p,null),c=L(0);N(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,o=e.target;await W(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=V(n.value.contentEl)[0])==null||d.focus())}$(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function h(){a==null||a.closeParents()}function C(e){var t,o,s;l.disabled||e.key==="Tab"&&(z(V((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),E(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),E(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=g(()=>b({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return j(()=>{const e=y.filterProps(l);return w(y,b({ref:n,id:f.value,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":h,onKeydown:C},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return w(Q,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),K({id:f,ΨopenChildren:c},n)}});export{Y as V};
