import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,t as a,x as o,b as r,e as u,s as l,a6 as h,d as n,m}from"./index-C9eeWs_S.js";import{u as f}from"./useGenerateImageVariant-C_UEuG30.js";import{a as g,b as x}from"./misc-mask-light-CdCn4Q-o.js";import{V as y}from"./VImg-V6oa933z.js";const V={class:"text-center"},b={key:0,class:"header-title font-weight-medium mb-2"},k={key:1,class:"text-h4 font-weight-medium mb-2"},v={key:2,class:"text-body-1 mb-6"},w={__name:"ErrorHeader",props:{statusCode:{type:[String,Number],required:!1},title:{type:String,required:!1},description:{type:String,required:!1}},setup(c){const t=c;return(i,d)=>(e(),s("div",V,[t.statusCode?(e(),s("h1",b,a(t.statusCode),1)):o("",!0),t.title?(e(),s("h4",k,a(t.title),1)):o("",!0),t.description?(e(),s("p",v,a(t.description),1)):o("",!0)]))}},C=p(w,[["__scopeId","data-v-56fda67b"]]),N="/assets/404-CMId8yPf.png",$={class:"misc-wrapper"},q={class:"misc-avatar w-100 text-center"},B=["src"],H={__name:"[...error]",setup(c){const t=f(x,g);return(i,d)=>{const _=C;return e(),s("div",$,[r(_,{"status-code":"404",title:"Página não encontrada ⚠️",description:"Não encontramos a página que procura."}),r(h,{to:"/",class:"mb-11"},{default:u(()=>[l(" Voltar para o início ")]),_:1}),n("div",q,[r(y,{src:m(N),alt:"error 404","max-height":i.$vuetify.display.smAndDown?350:500,class:"mx-auto"},null,8,["src","max-height"])]),n("img",{class:"misc-footer-img d-none d-md-block",src:m(t),alt:"misc-footer-img",height:"320"},null,8,B)])}}};export{H as default};