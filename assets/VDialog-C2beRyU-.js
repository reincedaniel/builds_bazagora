import{b as P,V as y,a as D,c as f}from"./VOverlay-uJeOGAIq.js";import{f as h}from"./forwardRefs-DWGaNmQL.js";import{aa as x,ad as S,aq as w,r as B,bf as F,w as v,ax as I,a4 as R,p as m,ae as T,b as g,b0 as O,br as A}from"./index-B7yscxJc.js";const C=x({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...P({origin:"center center",scrollStrategy:"block",transition:{component:y},zIndex:2400})},"VDialog"),q=S()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=w(a,"modelValue"),{scopeId:V}=D(),t=B();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=A(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}F&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await I(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const b=R(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return T(()=>{const l=f.filterProps(a);return g(f,m({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(O,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),h({},t)}});export{q as V};
