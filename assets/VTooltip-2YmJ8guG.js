import{b as p,a as S,c as u}from"./VOverlay-D3ZGtEgq.js";import{f as h}from"./forwardRefs-DWGaNmQL.js";import{aa as O,aK as x,ad as T,aq as k,aW as w,a4 as e,r as A,p as d,ae as C,b as I}from"./index-DtbvD1vL.js";const R=O({id:String,text:String,...x(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),B=T()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=k(t,"modelValue"),{scopeId:m}=S(),f=w(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),b=e(()=>d({"aria-describedby":r.value},t.activatorProps));return C(()=>{const y=u.filterProps(t);return I(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},y,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},m),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),h({},l)}});export{B as V};
