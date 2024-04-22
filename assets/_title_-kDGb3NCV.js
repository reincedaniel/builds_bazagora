import{N as T,V as A,F as H}from"./front-page-navbar-DXp95eIu.js";import{u as $}from"./useApi-CHR3YP_M.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as O,a as D}from"./VRow-2QQxVWoR.js";import{aa as k,ab as B,ad as S,ae as I,b as a,a_ as j,ac as L,a$ as z,a4 as C,am as E,af as U,aN as Z,ah as q,aj as G,Z as f,aO as J,ak as K,aP as Q,_ as N,b0 as W,F as R,p as X,r as Y,o as _,c as V,e as b,m as d,d as m,t as y,h as ee,x as te,f as ae,O as re,P as se}from"./index-BCwdQeqa.js";import{V as ie}from"./VDivider-DOJSIRua.js";import{V as w}from"./VImg-rjliNNuE.js";import{e as le}from"./VTextField-B8enNlEr.js";import{V as ce,a as oe}from"./VList-D6zGWcmT.js";import"./VForm-DW7t011U.js";import"./forwardRefs-DWGaNmQL.js";import"./VNodeRenderer-Hxr6_QFo.js";import"./useGenerateImageVariant-D_PBvU6M.js";/* empty css              */import"./NavbarThemeSwitcher-C2lV4ibv.js";import"./VTooltip-DH67cIKa.js";import"./VOverlay-DMPeqzWn.js";import"./VMenu-CeywgQEe.js";import"./VSpacer-DbnQ07c8.js";import"./VAvatar-CEhKZIT5.js";import"./index-yOnzaW-s.js";const de=k({divider:[Number,String],...B()},"VBreadcrumbsDivider"),ne=S()({name:"VBreadcrumbsDivider",props:de(),setup(e,r){let{slots:t}=r;return I(()=>{var c;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((c=t==null?void 0:t.default)==null?void 0:c.call(t))??e.divider])}),{}}}),ue=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...j(),...L({tag:"li"})},"VBreadcrumbsItem"),me=S()({name:"VBreadcrumbsItem",props:ue(),setup(e,r){let{slots:t,attrs:c}=r;const o=z(e,c),s=C(()=>{var l;return e.active||((l=o.isActive)==null?void 0:l.value)}),n=C(()=>s.value?e.activeColor:e.color),{textColorClasses:u,textColorStyles:i}=E(n);return I(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},u.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var l,v;return[o.isLink.value?a("a",{class:"v-breadcrumbs-item--link",href:o.href.value,"aria-current":s.value?"page":void 0,onClick:o.navigate},[((v=t.default)==null?void 0:v.call(t))??e.title]):((l=t.default)==null?void 0:l.call(t))??e.title]}})),{}}}),ve=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:U,items:{type:Array,default:()=>[]},...B(),...Z(),...q(),...L({tag:"ul"})},"VBreadcrumbs"),be=S()({name:"VBreadcrumbs",props:ve(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:c,backgroundColorStyles:o}=G(f(e,"bgColor")),{densityClasses:s}=J(e),{roundedClasses:n}=K(e);Q({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const u=C(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return I(()=>{const i=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",c.value,s.value,n.value,e.class],style:[o.value,e.style]},{default:()=>{var l;return[i&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(W,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(N,{key:"prepend-icon",start:!0,icon:e.icon},null)]),u.value.map((v,p,x)=>{var P;let{item:g,raw:F}=v;return a(R,null,[((P=t.item)==null?void 0:P.call(t,{item:g,index:p}))??a(me,X({key:p,disabled:p>=x.length-1},typeof g=="string"?{title:g}:g),{default:t.title?()=>{var h;return(h=t.title)==null?void 0:h.call(t,{item:g,index:p})}:void 0}),p<x.length-1&&a(ne,null,{default:t.divider?()=>{var h;return(h=t.divider)==null?void 0:h.call(t,{item:F,index:p})}:void 0})])}),(l=t.default)==null?void 0:l.call(t)]}})}),{}}}),pe=e=>(re("data-v-63c68b38"),e=e(),se(),e),fe={class:"bg-surface help-center-article"},ge={key:0,class:"article-section"},he={class:"text-h4 mb-2"},_e={class:"text-body-1"},ye=["innerHTML"],Ve={class:"my-6 text-body-1"},Ce=pe(()=>m("h5",{class:"text-h5 px-6 py-2 mb-4 rounded",style:{background:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}}," Articles in this section ",-1)),ke={class:"text-body-1 text-high-emphasis"},Be={__name:"[title]",setup(e){const r=Y();return setTimeout(async()=>{const{data:t,error:c}=await $("/pages/help-center/article");c.value?console.log(c.value):r.value=t.value},1e3),(t,c)=>(_(),V("div",fe,[a(T),a(A,null,{default:b(()=>{var o;return[d(r)&&((o=d(r))!=null&&o.title)?(_(),V("div",ge,[a(O,null,{default:b(()=>[a(D,{cols:"12",md:"8"},{default:b(()=>{var s,n,u,i,l,v;return[m("div",null,[a(be,{class:"px-0 pb-2 pt-0 help-center-breadcrumbs",items:[{title:"Help Center",to:{name:"help-center"},class:"text-primary"},{title:"how to add product in cart"}]}),m("h4",he,y((s=d(r))==null?void 0:s.title),1),m("div",_e,y((n=d(r))==null?void 0:n.lastUpdated),1)]),a(ie,{class:"my-6"}),m("div",{class:"mb-6 text-body-1",innerHTML:(u=d(r))==null?void 0:u.productContent},null,8,ye),a(w,{class:"rounded-lg",src:(i=d(r))==null?void 0:i.productImg},null,8,["src"]),m("p",Ve,y((l=d(r))==null?void 0:l.checkoutContent),1),a(w,{class:"rounded-lg",src:(v=d(r))==null?void 0:v.checkoutImg},null,8,["src"])]}),_:1}),a(D,{cols:"12",md:"4"},{default:b(()=>[a(le,{"prepend-inner-icon":"tabler-search",placeholder:"Search...",class:"mb-6"}),m("div",null,[Ce,a(ce,{class:"card-list"},{default:b(()=>{var s;return[(_(!0),V(R,null,ee((s=d(r))==null?void 0:s.articleList,(n,u)=>(_(),ae(oe,{key:u,link:"",class:"text-disabled"},{append:b(()=>[a(N,{icon:t.$vuetify.locale.isRtl?"tabler-chevron-left":"tabler-chevron-right",size:"20"},null,8,["icon"])]),default:b(()=>[m("div",ke,y(n),1)]),_:2},1024))),128))]}),_:1})])]),_:1})]),_:1})])):te("",!0)]}),_:1}),a(H)]))}},qe=M(Be,[["__scopeId","data-v-63c68b38"]]);export{qe as default};
