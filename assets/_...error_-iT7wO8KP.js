import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,t as o,x as a,b as r,e as l,s as p,a6 as h,d as n,m as d}from"./index-BCwdQeqa.js";import{u as f}from"./useGenerateImageVariant-D_PBvU6M.js";import{a as g,b as x}from"./misc-mask-light-CdCn4Q-o.js";import{V as k}from"./VImg-rjliNNuE.js";const y={class:"text-center"},b={key:0,class:"header-title font-weight-medium mb-2"},V={key:1,class:"text-h4 font-weight-medium mb-2"},v={key:2,class:"text-body-1 mb-6"},w={__name:"ErrorHeader",props:{statusCode:{type:[String,Number],required:!1},title:{type:String,required:!1},description:{type:String,required:!1}},setup(c){const t=c;return(i,m)=>(e(),s("div",y,[t.statusCode?(e(),s("h1",b,o(t.statusCode),1)):a("",!0),t.title?(e(),s("h4",V,o(t.title),1)):a("",!0),t.description?(e(),s("p",v,o(t.description),1)):a("",!0)]))}},C=u(w,[["__scopeId","data-v-56fda67b"]]),N="/assets/404-CMId8yPf.png",B={class:"misc-wrapper"},$={class:"misc-avatar w-100 text-center"},I=["src"],H={__name:"[...error]",setup(c){const t=f(x,g);return(i,m)=>{const _=C;return e(),s("div",B,[r(_,{"status-code":"404",title:"Page Not Found ⚠️",description:"We couldn't find the page you are looking for."}),r(h,{to:"/",class:"mb-11"},{default:l(()=>[p(" Back to Home ")]),_:1}),n("div",$,[r(k,{src:d(N),alt:"error 404","max-height":i.$vuetify.display.smAndDown?350:500,class:"mx-auto"},null,8,["src","max-height"])]),n("img",{class:"misc-footer-img d-none d-md-block",src:d(t),alt:"misc-footer-img",height:"320"},null,8,I)])}}};export{H as default};