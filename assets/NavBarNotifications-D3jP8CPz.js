import{a4 as N,a as E,o as m,f as y,e as i,b as e,p as P,_ as A,H as v,s as h,t as c,m as f,I as V,c as k,F as w,h as z,x as S,d,v as B,a5 as F,a6 as M,r as K}from"./index-BboE7Kk5.js";import{P as T}from"./vue3-perfect-scrollbar.esm-B6fpaq-S.js";import{V as j}from"./VBadge-DjAyjkaK.js";import{V as Y}from"./VMenu-BbOVghrp.js";import{V as q,a as L,b as R}from"./VCard-BAy__d6T.js";import{V as D}from"./VChip-DoB60ML8.js";import{V as O}from"./VTooltip-C_uQHYnU.js";import{V as x}from"./VDivider-DJmwOV4z.js";import{V as W,a as U,b as G}from"./VList-gEzuWLHB.js";import{V as I}from"./VAvatar-BGPLMdcP.js";import{V as Q}from"./VSpacer-BbGyDHGj.js";import{V as H}from"./VCardText-B8tdTlwI.js";import{a as Z,b as X,c as $}from"./avatar-5-Di8vAcaH.js";import"./VImg-D_1DivDL.js";import"./VOverlay-CXEyQFH4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DOud9kyK.js";/* empty css              */const ee=u=>u?u.split(" ").map(o=>o.charAt(0).toUpperCase()).join(""):"",te={class:"d-flex align-start gap-3"},ae={key:0},ie={class:"text-sm font-weight-medium mb-1"},oe={class:"text-body-2 mb-2",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},se={class:"text-sm text-disabled mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},re={class:"d-flex flex-column align-end"},ne={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:Object,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(u,{emit:n}){const o=u,l=n,p=N(()=>o.notifications.some(a=>a.isSeen===!1)),b=()=>{const a=o.notifications.map(g=>g.id);p.value?l("read",a):l("unread",a)},s=N(()=>o.notifications.filter(a=>a.isSeen===!1).length),r=(a,g)=>{a?l("unread",[g]):l("read",[g])};return(a,g)=>{const _=E("IconBtn");return m(),y(_,{id:"notification-btn"},{default:i(()=>[e(j,P(o.badgeProps,{"model-value":o.notifications.some(t=>!t.isSeen),color:"error",dot:"","offset-x":"2","offset-y":"3"}),{default:i(()=>[e(A,{size:"24",icon:"tabler-bell"})]),_:1},16,["model-value"]),e(Y,{activator:"parent",width:"380px",location:o.location,offset:"12px","close-on-content-click":!1},{default:i(()=>[e(q,{class:"d-flex flex-column"},{default:i(()=>[e(L,{class:"notification-section"},{append:i(()=>[v(e(D,{size:"small",color:"primary",class:"me-2"},{default:i(()=>[h(c(f(s))+" New ",1)]),_:1},512),[[V,o.notifications.some(t=>!t.isSeen)]]),v(e(_,{size:"34",onClick:b},{default:i(()=>[e(A,{size:"20",color:"high-emphasis",icon:f(p)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),e(O,{activator:"parent",location:"start"},{default:i(()=>[h(c(f(p)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[V,o.notifications.length]])]),default:i(()=>[e(R,{class:"text-h6"},{default:i(()=>[h(" Notifications ")]),_:1})]),_:1}),e(x),e(f(T),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:i(()=>[e(W,{class:"notification-list rounded-0 py-0"},{default:i(()=>[(m(!0),k(w,null,z(o.notifications,(t,J)=>(m(),k(w,{key:t.title},[J>0?(m(),y(x,{key:0})):S("",!0),e(U,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:C=>a.$emit("click:notification",t)},{default:i(()=>[d("div",te,[e(I,{size:"40",color:t.color&&t.icon?t.color:void 0,image:t.img||void 0,icon:t.icon||void 0,variant:t.img?void 0:"tonal"},{default:i(()=>[t.text?(m(),k("span",ae,c(("avatarText"in a?a.avatarText:f(ee))(t.text)),1)):S("",!0)]),_:2},1032,["color","image","icon","variant"]),d("div",null,[d("p",ie,c(t.title),1),d("p",oe,c(t.subtitle),1),d("p",se,c(t.time),1)]),e(Q),d("div",re,[e(A,{size:"10",icon:"tabler-circle-filled",color:t.isSeen?"#a8aaae":"primary",class:B([`${t.isSeen?"visible-in-hover":""}`,"mb-2"]),onClick:F(C=>r(t.isSeen,t.id),["stop"])},null,8,["color","class","onClick"]),e(A,{size:"20",icon:"tabler-x",class:"visible-in-hover",onClick:C=>a.$emit("remove",t.id)},null,8,["onClick"])])])]),_:2},1032,["onClick"])],64))),128)),v(e(U,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:i(()=>[e(G,null,{default:i(()=>[h("No Notification Found!")]),_:1})]),_:1},512),[[V,!o.notifications.length]])]),_:1})]),_:1}),e(x),v(e(H,{class:"pa-4"},{default:i(()=>[e(M,{block:"",size:"small"},{default:i(()=>[h(" View All Notifications ")]),_:1})]),_:1},512),[[V,o.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA1ZJREFUWEfNmM1PE0EYxp/pbrcUsLUqARMSjUf/Ak+Gg4kBY0jQTfDGiTN/CmdOHgmLB0wUYzx4gj35ceHgVwwpUVCElo/a7W7HzLTbbpfuzttWSPe6M+/89nnf95nZYejw4QDDxFwK+kkKaT0Jp5xEAhoYNBmKw0MVHoxUBSW3AneojLdPy0y86eBh1LF8fj6JbweDMJAGvBR1Xm2cVoaDEm7lTtnSUoUyVwnGTVPDAYYxqA3BdZKUoJFjdKOCU+8EORwzy/LiYsWCcdNMo+Begs7SPQGFJ7u8hKx+xCyrFBU3Eoyb5jBKyKLq6f8Vyg+W0FykUWCWddwuflswPjmZgWdkoWuJc4Hyg7peFZpTYOvrxfA6Z8CkUgUnd+5QQbiscRBWrgVM1lQJV84tfVHy19L6J1hzDTDZfQX3qrLQJ+7ewUhuAZp+JzLNnmvDcW35fu3FIqkcag2x73drE+yemYXhXVYGmX6wgPTAgnJccEDp7yIJ0NEO2RurIKZKMGmeP4sjJJ+affS9Iyh/8PKzm8p5wufGMr+ECdfAqGqJNI6NLCsXaDegQ9WY3PumzFHSNtNNGn1IUXfW2qz6o7QyXlq7jE/MDWCwOKqeAOBCwACcZnYZOY2CvBew/M4WNu3X8KDuUtEE/OGTa/DKQyTFzOnlWJuIC7L+Ko+j43FUmboJtNQJ4/dnrkODQQLrtiNF8JXV2hKMLSpV8+AwPjkz3jjkqei6BdvYtJHfqRsym0UVNfONejg8xqdmbqh45PturULU1sbm7eYaBDAhLBmsm8J/9z6PL1/HWz6cUmMSjJpKKphQaG8vg9/7Ng4PH4eyYaPK1F4mU0kt/qiOPJOquMKgpRGy+Kl2EVX4nz6v4sPHsDJn6Sjd6M+SdkHdJ6PAfH+KEkoAcdjKTgzOlwZL2ZLiOnLt+RbKTqDrYIMxu2OYIJjckiibeFzhr6wKT2oeGjtJWVuV65u4eKdMZ5xivqM3FiEWeFTq64dF+kFRqGYEjtM/djPY3i42Hd1fqQew8EGRpFrwCxMidbz9gZFooG0FCx+tJRj1Z8SPmJBgrT8kvdRX1M9IHa7/ft98Ifryh7cB149XBC3K9dulSgCu/66hAnD9d3EX9Jq+u+oMG+FFXQ7/A7YTzYZ/kuhAAAAAAElFTkSuQmCC",we={__name:"NavBarNotifications",setup(u){const n=K([{id:1,img:Z,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:X,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:le,title:"PayPal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:$,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),o=s=>{n.value.forEach((r,a)=>{s===r.id&&n.value.splice(a,1)})},l=s=>{n.value.forEach(r=>{s.forEach(a=>{a===r.id&&(r.isSeen=!0)})})},p=s=>{n.value.forEach(r=>{s.forEach(a=>{a===r.id&&(r.isSeen=!1)})})},b=s=>{s.isSeen||l([s.id])};return(s,r)=>{const a=ne;return m(),y(a,{notifications:f(n),onRemove:o,onRead:l,onUnread:p,"onClick:notification":b},null,8,["notifications"])}}};export{we as default};
