import{m as f,V as o}from"./VSelectionControl-31pAoryl.js";import{aa as V,af as v,ad as I,aq as c,a4 as l,ae as k,aK as x,b,p as h}from"./index-BboE7Kk5.js";const C=V({indeterminate:Boolean,indeterminateIcon:{type:v,default:"$checkboxIndeterminate"},...f({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const a=c(e,"indeterminate"),t=c(e,"modelValue");function u(n){a.value&&(a.value=!1)}const i=l(()=>a.value?e.indeterminateIcon:e.falseIcon),m=l(()=>a.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const n=x(o.filterProps(e),["modelValue"]);return b(o,h(n,{modelValue:t.value,"onUpdate:modelValue":[d=>t.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":a.value?"mixed":void 0}),s)}),{}}});export{y as V,C as m};
