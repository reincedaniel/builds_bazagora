import{aa as c,ab as d,ai as v,ad as m,aS as h,am as u,Z as g,a4 as C,az as i,ae as b,b as k}from"./index-B7yscxJc.js";const x=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...d(),...v()},"VDivider"),S=m()({name:"VDivider",props:x(),setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),a});return b(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{S as V};
