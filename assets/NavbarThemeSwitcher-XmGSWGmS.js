import{a7 as f,r as v,w as y,a as V,o as c,f as i,e as o,b as r,_ as g,m as n,d as k,t as u,a1 as x,c as w,F as b,h as B,s as S}from"./index-C9eeWs_S.js";import{V as C}from"./VTooltip-B-ldd3-Y.js";import{V as I}from"./VMenu-Ct-oDXqD.js";import{V as T,a as N}from"./VList-Dh4bdZC7.js";import"./VOverlay-pU6LNC5G.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-V6oa933z.js";import"./index-Bh8HZml6.js";import"./VAvatar-B2DSE7rw.js";import"./VDivider-YEP4Dr_N.js";const z={class:"text-capitalize"},L={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const s=m,t=f(),a=v([t.theme]);return y(()=>t.theme,()=>{a.value=[t.theme]},{deep:!0}),(l,p)=>{const d=V("IconBtn");return c(),i(d,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:o(()=>{var h;return[r(g,{icon:(h=s.themes.find(e=>e.name===n(t).theme))==null?void 0:h.icon,size:"24"},null,8,["icon"]),r(C,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:o(()=>[k("span",z,u(n(t).theme),1)]),_:1}),r(I,{activator:"parent",offset:"12px",width:180},{default:o(()=>[r(T,{selected:n(a),"onUpdate:selected":p[0]||(p[0]=e=>x(a)?a.value=e:null),mandatory:""},{default:o(()=>[(c(!0),w(b,null,B(s.themes,({name:e,icon:_})=>(c(),i(N,{key:e,value:e,"prepend-icon":_,color:"primary",class:"text-capitalize",onClick:()=>{n(t).theme=e}},{default:o(()=>[S(u(e),1)]),_:2},1032,["value","prepend-icon","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},G={__name:"NavbarThemeSwitcher",setup(m){const s=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon-stars"},{name:"system",icon:"tabler-device-desktop-analytics"}];return(t,a)=>{const l=L;return c(),i(l,{themes:s})}}};export{G as default};