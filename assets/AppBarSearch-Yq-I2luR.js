import{aa as F,b1 as K,b2 as N,ai as U,ad as j,aj as E,Z as q,b6 as z,b7 as O,aR as M,al as H,a4 as Q,bh as X,ae as Z,b as s,bN as G,r as x,w as B,o as g,f as J,e as o,m as n,a1 as W,bO as C,d,_ as S,H as _,y as v,I as w,c as D,F as L,h as $,s as Y,t as R,x as A,O as ee,P as ae}from"./index-BboE7Kk5.js";import{P as te}from"./vue3-perfect-scrollbar.esm-B6fpaq-S.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ie}from"./VCard-BAy__d6T.js";import{V as I}from"./VCardText-B8tdTlwI.js";import{e as le}from"./VTextField-NstGEXz9.js";import{V as re}from"./VDivider-DJmwOV4z.js";import{V as oe,a as ne}from"./VList-gEzuWLHB.js";import{V as de}from"./VDialog-Bb_rfLPP.js";import"./VAvatar-BGPLMdcP.js";import"./VImg-D_1DivDL.js";import"./index-DOud9kyK.js";import"./forwardRefs-DWGaNmQL.js";import"./VOverlay-CXEyQFH4.js";const ce={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ue(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[i])}function P(e){const[i,a]=e.split("@");return Array.from({length:a}).map(()=>b(i))}function b(e){let i=[];if(!e)return i;const a=ce[e];if(e!==a){if(e.includes(","))return T(e);if(e.includes("@"))return P(e);a.includes(",")?i=T(a):a.includes("@")?i=P(a):a&&i.push(b(a))}return[ue(e,i)]}function T(e){return e.replace(/\s/g,"").split(",").map(b)}const pe=F({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...K(),...N(),...U()},"VSkeletonLoader"),fe=j()({name:"VSkeletonLoader",props:pe(),setup(e,i){let{slots:a}=i;const{backgroundColorClasses:p,backgroundColorStyles:y}=E(q(e,"color")),{dimensionStyles:k}=z(e),{elevationClasses:f}=O(e),{themeClasses:V}=M(e),{t:l}=H(),u=Q(()=>b(X(e.type).join(",")));return Z(()=>{var m;const h=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},V.value,p.value,f.value],style:[y.value,h?k.value:{}],"aria-busy":e.boilerplate?void 0:h,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:l(e.loadingText),role:e.boilerplate?void 0:"alert"},[h?u.value:(m=a.default)==null?void 0:m.call(a)])}),{}}}),he=e=>(ee("data-v-7f0121e3"),e=e(),ae(),e),me={class:"d-flex align-center text-high-emphasis me-1"},ge={class:"d-flex align-start"},ve={class:"h-100"},be={class:"h-100"},ye={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12"},ke={class:"d-flex align-center flex-wrap justify-center gap-2 text-h5 mt-3"},Ve=he(()=>d("span",null,"No Result For ",-1)),xe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},isLoading:{type:Boolean,required:!1}},emits:["update:isDialogVisible","search"],setup(e,{emit:i}){const a=e,p=i,{ctrl_k:y,meta_k:k}=G({passive:!1,onEventFired(t){t.ctrlKey&&t.key==="k"&&t.type==="keydown"&&t.preventDefault()}}),f=x(),V=x(),l=x("");B([y,k],()=>{p("update:isDialogVisible",!0)});const u=()=>{l.value="",p("update:isDialogVisible",!1)},h=t=>{var c,r;t.key==="ArrowDown"?(t.preventDefault(),(c=f.value)==null||c.focus("next")):t.key==="ArrowUp"&&(t.preventDefault(),(r=f.value)==null||r.focus("prev"))},m=t=>{l.value="",p("update:isDialogVisible",t)};return B(()=>a.isDialogVisible,()=>{l.value=""}),(t,c)=>(g(),J(de,{"max-width":"600","model-value":a.isDialogVisible,height:t.$vuetify.display.smAndUp?"531":"100%",fullscreen:t.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":m,onKeyup:C(u,["esc"])},{default:o(()=>[s(ie,{height:"100%",width:"100%",class:"position-relative"},{default:o(()=>[s(I,{class:"px-4",style:{"padding-block":"1rem 1.2rem"}},{default:o(()=>[s(le,{ref_key:"refSearchInput",ref:V,modelValue:n(l),"onUpdate:modelValue":[c[0]||(c[0]=r=>W(l)?l.value=r:null),c[1]||(c[1]=r=>t.$emit("search",n(l)))],autofocus:"",density:"compact",variant:"plain",class:"app-bar-search-input",onKeyup:C(u,["esc"]),onKeydown:h},{"prepend-inner":o(()=>[d("div",me,[s(S,{size:"24",icon:"tabler-search"})])]),"append-inner":o(()=>[d("div",ge,[d("div",{class:"text-base text-disabled cursor-pointer me-3",onClick:u}," [esc] "),s(S,{icon:"tabler-x",size:"24",onClick:u})])]),_:1},8,["modelValue"])]),_:1}),s(re),s(n(te),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:o(()=>[_(d("div",ve,[v(t.$slots,"suggestions",{},void 0,!0)],512),[[w,!!a.searchResults&&!n(l)&&t.$slots.suggestions]]),e.isLoading?A("",!0):(g(),D(L,{key:0},[_(s(n(oe),{ref_key:"refSearchList",ref:f,density:"compact",class:"app-bar-search-list py-0"},{default:o(()=>[(g(!0),D(L,null,$(a.searchResults,r=>v(t.$slots,"searchResult",{key:r,item:r},()=>[s(n(ne),null,{default:o(()=>[Y(R(r),1)]),_:2},1024)],!0)),128))]),_:3},512),[[w,n(l).length&&!!a.searchResults.length]]),_(d("div",be,[v(t.$slots,"noData",{},()=>[s(I,{class:"h-100"},{default:o(()=>[d("div",ye,[s(S,{size:"64",icon:"tabler-file-alert"}),d("div",ke,[Ve,d("span",null,'"'+R(n(l))+'"',1)]),v(t.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[w,!a.searchResults.length&&n(l).length]])],64)),e.isLoading?(g(),D(L,{key:1},$(3,r=>s(fe,{key:r,type:"list-item-two-line"})),64)):A("",!0)]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"]))}},Ke=se(xe,[["__scopeId","data-v-7f0121e3"]]);export{Ke as default};