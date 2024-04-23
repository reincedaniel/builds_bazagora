import{ad as k,ab as g,aO as $,ae as f,b as n,aa as P,af as u,aM as S,F as C,_ as A,a$ as y,bt as q,b1 as z,b2 as G,c3 as J,ag as K,b3 as Q,ah as U,aZ as W,ac as X,ai as Y,b4 as ee,bl as ae,aR as te,bu as ne,b5 as de,aN as ie,b6 as le,b7 as se,bm as ce,ao as re,b8 as ue,ak as ve,a_ as oe,a4 as h,H as me,av as be,bn as ye,b9 as ke}from"./index-b9elqWX_.js";import{c as x,V as p}from"./VAvatar-Bvm7WHyk.js";import{V as ge}from"./VCardText-bWxGNOnu.js";import{V as fe}from"./VImg-CuG8PzJN.js";const Ie=k()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return $({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=x("v-card-subtitle"),Ce=x("v-card-title"),Ae=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...S()},"VCardItem"),he=k()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),b=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(C,null,[e.prependAvatar&&n(p,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),b&&n(Ve,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(C,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(p,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),pe=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...q(),...g(),...S(),...z(),...G(),...J(),...K(),...Q(),...U(),...W(),...X(),...Y(),...ee({variant:"elevated"})},"VCard"),Te=k()({name:"VCard",directives:{Ripple:ae},props:pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=te(e),{borderClasses:l}=ne(e),{colorClasses:o,colorStyles:m,variantClasses:b}=de(e),{densityClasses:s}=ie(e),{dimensionStyles:d}=le(e),{elevationClasses:_}=se(e),{loaderClasses:T}=ce(e),{locationStyles:B}=re(e),{positionClasses:D}=ue(e),{roundedClasses:L}=ve(e),c=oe(e,t),N=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),O=F||M,E=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),w=O||H||E,Z=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,_.value,T.value,D.value,L.value,b.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(he,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Z&&n(ge,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ie,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[be("ripple"),r.value&&e.ripple]])}),{}}});export{Te as V,he as a,Ce as b};
