import{a as $}from"./index-CFqFM69X.js";import{aa as q,ad as M,aq as h,bm as W,r as j,a4 as k,aW as E,ae as G,au as H,b as a,p as g,F as J,a$ as K,_ as O,bn as Q,bo as X}from"./index-DTOOu4oO.js";import{m as Y,u as Z,V as b}from"./VTextField-v8XxtALD.js";import{m as ee,V as y}from"./VSelectionControl-BwK--Xww.js";const ae=q({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Y(),...ee()},"VSwitch"),ne=M()({name:"VSwitch",inheritAttrs:!1,props:ae(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,w){let{attrs:C,slots:t}=w;const n=h(e,"indeterminate"),s=h(e,"modelValue"),{loaderClasses:S}=W(e),{isFocused:P,focus:_,blur:p}=Z(e),f=j(),x=k(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=E(),I=k(()=>e.id||`switch-${F}`);function A(){n.value&&(n.value=!1)}function B(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=f.value)==null?void 0:u.input)==null||r.click()}return G(()=>{const[i,u]=H(C),r=b.filterProps(e),z=y.filterProps(e);return a(b,g({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":d=>s.value=d,id:I.value,focused:P.value,style:e.style}),{...t,default:d=>{let{id:D,messagesId:U,isDisabled:L,isReadonly:N,isValid:V}=d;const c={model:s,isValid:V};return a(y,g({ref:f},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,A],id:D.value,"aria-describedby":U.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:L.value,readonly:N.value,onFocus:_,onBlur:p},u),{...t,default:o=>{let{backgroundColorClasses:m,backgroundColorStyles:l}=o;return a("div",{class:["v-switch__track",...m.value],style:l.value,onClick:B},[t["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](c)]),t["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](c)])])},input:o=>{let{inputNode:m,icon:l,backgroundColorClasses:R,backgroundColorStyles:T}=o;return a(J,null,[m,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:R.value],style:e.inset?void 0:T.value},[t.thumb?a(K,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[t.thumb({...c,icon:l})]}):a($,null,{default:()=>[e.loading?a(Q,{name:"v-switch",active:!0,color:V.value===!1?void 0:x.value},{default:v=>t.loader?t.loader(v):a(X,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&a(O,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{ne as V};
