import{aa as F,af as M,ab as B,aM as A,aU as $,ac as N,ai as w,ad as z,al as T,aR as H,aq as U,a4 as s,aA as q,aV as D,ar as E,aW as W,ae as j,b as i,F as k,a6 as G,p as J,s as K}from"./index-C9eeWs_S.js";const O=F({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:M,default:"$ratingEmpty"},fullIcon:{type:M,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...B(),...A(),...$(),...N(),...w()},"VRating"),X=z()({name:"VRating",props:O(),emits:{"update:modelValue":e=>!0},setup(e,P){let{slots:u}=P;const{t:f}=T(),{themeClasses:C}=H(e),h=U(e,"modelValue"),c=s(()=>q(parseFloat(h.value),0,+e.length)),y=s(()=>D(Number(e.length),1)),V=s(()=>y.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),d=E(-1),g=s(()=>V.value.map(a=>{const l=e.hover&&d.value>-1,n=c.value>=a,t=d.value>=a,o=(l?t:n)?e.fullIcon:e.emptyIcon,b=e.activeColor??e.color,v=n||t?b:e.color;return{isFilled:n,isHovered:t,icon:o,color:v}})),R=s(()=>[0,...V.value].map(a=>{function l(){d.value=a}function n(){d.value=-1}function t(){e.disabled||e.readonly||(h.value=c.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?l:void 0,onMouseleave:e.hover?n:void 0,onClick:t}})),I=s(()=>e.name??`v-rating-${W()}`);function m(a){var S,_;let{value:l,index:n,showStar:t=!0}=a;const{onMouseenter:r,onMouseleave:o,onClick:b}=R.value[n+1],v=`${I.value}-${String(l).replace(".","-")}`,x={color:(S=g.value[n])==null?void 0:S.color,density:e.density,disabled:e.disabled,icon:(_=g.value[n])==null?void 0:_.icon,ripple:e.ripple,size:e.size,variant:"plain"};return i(k,null,[i("label",{for:v,class:{"v-rating__item--half":e.halfIncrements&&l%1>0,"v-rating__item--full":e.halfIncrements&&l%1===0},onMouseenter:r,onMouseleave:o,onClick:b},[i("span",{class:"v-rating__hidden"},[f(e.itemAriaLabel,l,e.length)]),t?u.item?u.item({...g.value[n],props:x,value:l,index:n,rating:c.value}):i(G,J({"aria-label":f(e.itemAriaLabel,l,e.length)},x),null):void 0]),i("input",{class:"v-rating__hidden",name:I.value,id:v,type:"radio",value:l,checked:c.value===l,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function L(a){return u["item-label"]?u["item-label"](a):a.label?i("span",null,[a.label]):i("span",null,[K(" ")])}return j(()=>{var l;const a=!!((l=e.itemLabels)!=null&&l.length)||u["item-label"];return i(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},C.value,e.class],style:e.style},{default:()=>[i(m,{value:0,index:-1,showStar:!1},null),y.value.map((n,t)=>{var r,o;return i("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?L({value:n,index:t,label:(r=e.itemLabels)==null?void 0:r[t]}):void 0,i("div",{class:"v-rating__item"},[e.halfIncrements?i(k,null,[i(m,{value:n-.5,index:t*2},null),i(m,{value:n,index:t*2+1},null)]):i(m,{value:n,index:t},null)]),a&&e.itemLabelPosition==="bottom"?L({value:n,index:t,label:(o=e.itemLabels)==null?void 0:o[t]}):void 0])})]})}),{}}});export{X as V};
