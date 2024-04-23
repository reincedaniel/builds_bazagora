import{aa as h,af as w,br as O,ab as U,aM as Q,ai as W,ad as _,aq as M,aW as R,a4 as o,M as Z,bc as z,aO as J,Z as u,ae as j,b as d,bl as K,ar as D,r as X,au as Y,p as T,H as p,av as ee,F as le,_ as ae,Q as te,aN as ne,bh as I,am as oe,aj as ue,bj as ie,ax as re}from"./index-C9eeWs_S.js";import{d as ce}from"./VTextField-vqbKOlTJ.js";const N=Symbol.for("vuetify:selection-control-group"),q=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:w,trueIcon:w,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:O},...U(),...Q(),...W()},"SelectionControlGroup"),se=h({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),ye=_()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=M(e,"modelValue"),t=R(),y=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||y.value),a=new Set;return Z(N,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),z(()=>{a.delete(n)})}}),J({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),j(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...U(),...q()},"VSelectionControl");function ve(e){const i=te(N,void 0),{densityClasses:v}=ne(e),l=M(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:y.value;let m=r;c.value&&(m=f?[...I(l.value),r]:I(l.value).filter(b=>!e.valueComparator(b,t.value))),i?i.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:C}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:y,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const be=_()({name:"VSelectionControl",directives:{Ripple:K},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),f=R(),r=D(!1),m=D(!1),b=X(),g=o(()=>e.id||`input-${f}`),x=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{b.value&&(b.value.checked=a.value)});function F(s){x.value&&(r.value=!0,ie(s.target,":focus-visible")!==!1&&(m.value=!0))}function A(){r.value=!1,m.value=!1}function E(s){s.stopPropagation()}function H(s){x.value&&(e.readonly&&t&&re(()=>t.forceUpdate()),a.value=s.target.checked)}return j(()=>{var P,G;const s=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[L,$]=Y(v),B=d("input",T({ref:b,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:A,onFocus:F,onInput:H,"aria-disabled":!!e.disabled,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},$),null);return d("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},y.value,e.class]},L,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(d("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:B,icon:c.value,props:{onFocus:F,onBlur:A,id:g.value}}))??d(le,null,[c.value&&d(ae,{key:"icon",icon:c.value},null),B])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:g.value,onClick:E},{default:()=>[s]})])}),{isFocused:r,input:b}}});export{be as V,q as a,ye as b,de as m};
