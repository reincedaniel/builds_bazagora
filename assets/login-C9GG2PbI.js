import{V as $,_ as S}from"./VForm-BJTsr7EQ.js";import{aa as q,aK as z,ad as K,aq as W,aW as G,a4 as H,ae as Y,au as J,b as e,p as k,an as O,o as g,c as x,F as L,h as Q,e as a,_ as X,m as o,a6 as A,r as v,d as t,t as y,s as m,a5 as Z,a as ee,E as V}from"./index-DTOOu4oO.js";import{u as w}from"./useGenerateImageVariant-uP3AydmZ.js";import{a as te,b as ae}from"./misc-mask-light-CdCn4Q-o.js";import{V as oe}from"./VNodeRenderer-Cc2vDiLH.js";import{a as u,V as C}from"./VRow-0mjbZOTj.js";import{V as se}from"./VImg-BKfDHik6.js";import{V as le}from"./VCard-sz20fFMV.js";import{V as b}from"./VCardText-Bh8QdUjY.js";import{V as re}from"./VAlert-Cvot9chc.js";import{m as ne,V as I}from"./VCheckboxBtn-BJfORj3f.js";import{m as ie,u as de,V as P}from"./VTextField-v8XxtALD.js";import{V as D}from"./VDivider-C5QRpMYx.js";import"./forwardRefs-DWGaNmQL.js";/* empty css              */import"./VAvatar-BQN7R0Ih.js";import"./VSelectionControl-BwK--Xww.js";import"./index-CFqFM69X.js";const ce=q({...ie(),...z(ne(),["inline"])},"VCheckbox"),ue=K()({name:"VCheckbox",inheritAttrs:!1,props:ce(),emits:{"update:modelValue":s=>!0,"update:focused":s=>!0},setup(s,l){let{attrs:n,slots:p}=l;const d=W(s,"modelValue"),{isFocused:c,focus:r,blur:h}=de(s),f=G(),i=H(()=>s.id||`checkbox-${f}`);return Y(()=>{const[B,F]=J(n),R=P.filterProps(s),E=I.filterProps(s);return e(P,k({class:["v-checkbox",s.class]},B,R,{modelValue:d.value,"onUpdate:modelValue":_=>d.value=_,id:i.value,focused:c.value,style:s.style}),{...p,default:_=>{let{id:T,messagesId:U,isDisabled:j,isReadonly:M}=_;return e(I,k(E,{id:T.value,"aria-describedby":U.value,disabled:j.value,readonly:M.value},F,{modelValue:d.value,"onUpdate:modelValue":N=>d.value=N,onFocus:r,onBlur:h}),p)}})}),{}}}),me={class:"d-flex justify-center flex-wrap gap-1"},pe={__name:"AuthProvider",setup(s){const{global:l}=O(),n=[{icon:"tabler-brand-facebook-filled",color:"#4267b2",colorInDark:"#497CE2"},{icon:"tabler-brand-twitter-filled",color:"#1da1f2",colorInDark:"#1da1f2"},{icon:"tabler-brand-github-filled",color:"#272727",colorInDark:"#fff"},{icon:"tabler-brand-google-filled",color:"#dd4b39",colorInDark:"#db4437"}];return(p,d)=>(g(),x("div",me,[(g(),x(L,null,Q(n,c=>e(A,{key:c.icon,icon:"",variant:"text",size:"small",color:o(l).name.value==="dark"?c.colorInDark:c.color},{default:a(()=>[e(X,{size:"20",icon:c.icon},null,8,["icon"])]),_:2},1032,["color"])),64))]))}},fe="/assets/auth-v2-login-illustration-bordered-dark-cDkPk8mY.png",he="/assets/auth-v2-login-illustration-bordered-light-CIHqcIVA.png",_e="/assets/auth-v2-login-illustration-dark-ClExSVqL.png",Ve="/assets/auth-v2-login-illustration-light-C4sKfRS1.png",be={class:"auth-logo d-flex align-center gap-x-3"},ge={class:"auth-title"},xe={class:"position-relative bg-background w-100 me-0"},ke={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},ve=["src"],ye={class:"text-h4 mb-1"},we={class:"text-capitalize"},Ce=t("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),Ie=t("p",{class:"text-sm mb-2"},[m(" Admin Email: "),t("strong",null,"admin@demo.com"),m(" / Pass: "),t("strong",null,"admin")],-1),Pe=t("p",{class:"text-sm mb-0"},[m(" Client Email: "),t("strong",null,"client@demo.com"),m(" / Pass: "),t("strong",null,"client")],-1),De={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},Le=t("a",{class:"text-primary ms-2 mb-1",href:"#"}," Forgot Password? ",-1),Ae=t("span",null,"New on our platform?",-1),Be=t("a",{class:"text-primary ms-2",href:"#"}," Create an account ",-1),Fe=t("span",{class:"mx-4"},"or",-1),Qe={__name:"login",setup(s){const l=v({email:"",password:"",remember:!1}),n=v(!1),p=w(Ve,_e,he,fe,!0),d=w(ae,te);return(c,r)=>{const h=ee("RouterLink"),f=S;return g(),x(L,null,[e(h,{to:"/"},{default:a(()=>[t("div",be,[e(o(oe),{nodes:o(V).app.logo},null,8,["nodes"]),t("h1",ge,y(o(V).app.title),1)])]),_:1}),e(C,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:a(()=>[e(u,{md:"8",class:"d-none d-md-flex"},{default:a(()=>[t("div",xe,[t("div",ke,[e(se,{"max-width":"613",src:o(p),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),t("img",{class:"auth-footer-mask",src:o(d),alt:"auth-footer-mask",height:"280",width:"100"},null,8,ve)])]),_:1}),e(u,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:a(()=>[e(le,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:a(()=>[e(b,null,{default:a(()=>[t("h4",ye,[m(" Welcome to "),t("span",we,y(o(V).app.title),1),m("! 👋🏻 ")]),Ce]),_:1}),e(b,null,{default:a(()=>[e(re,{color:"primary",variant:"tonal"},{default:a(()=>[Ie,Pe]),_:1})]),_:1}),e(b,null,{default:a(()=>[e($,{onSubmit:Z(()=>{},["prevent"])},{default:a(()=>[e(C,null,{default:a(()=>[e(u,{cols:"12"},{default:a(()=>[e(f,{modelValue:o(l).email,"onUpdate:modelValue":r[0]||(r[0]=i=>o(l).email=i),autofocus:"",label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(f,{modelValue:o(l).password,"onUpdate:modelValue":r[1]||(r[1]=i=>o(l).password=i),label:"Password",placeholder:"············",type:o(n)?"text":"password","append-inner-icon":o(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":r[2]||(r[2]=i=>n.value=!o(n))},null,8,["modelValue","type","append-inner-icon"]),t("div",De,[e(ue,{modelValue:o(l).remember,"onUpdate:modelValue":r[3]||(r[3]=i=>o(l).remember=i),label:"Remember me"},null,8,["modelValue"]),Le]),e(A,{block:"",type:"submit"},{default:a(()=>[m(" Login ")]),_:1})]),_:1}),e(u,{cols:"12",class:"text-center"},{default:a(()=>[Ae,Be]),_:1}),e(u,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(D),Fe,e(D)]),_:1}),e(u,{cols:"12",class:"text-center"},{default:a(()=>[e(pe)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Qe as default};
