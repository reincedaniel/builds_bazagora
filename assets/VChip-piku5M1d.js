import{aa as N,af as O,ab as X,bq as ke,ac as U,bl as ce,ad as W,aT as Se,bc as ge,aU as re,ar as R,a4 as S,bb as ee,bf as Ce,w as xe,ae as ve,b as n,_,br as Ie,aA as Ve,bs as Pe,ai as de,b5 as fe,aS as me,aP as ze,Z as M,p as pe,bt as ae,bu as Ae,aN as we,b3 as Re,aJ as _e,ah as Te,a_ as Oe,aV as Ee,bm as Be,al as Fe,bv as Ge,b6 as Me,aO as De,b8 as Le,ak as He,bw as $e,aq as qe,aK as Ke,a$ as Ne,H as le,av as Xe,ba as Ue,b0 as D,I as We,F as te}from"./index-B7yscxJc.js";import{b as ne,c as Ye}from"./index-BOIJE7mK.js";import{V as se}from"./VAvatar-Bb50-H5M.js";function ie(e){const i=Math.abs(e);return Math.sign(e)*(i/((1/.501-2)*(1-i)+1))}function ue(e){let{selectedElement:p,containerSize:i,contentSize:c,isRtl:o,currentScrollOffset:m,isHorizontal:u}=e;const r=u?p.clientWidth:p.clientHeight,l=u?p.offsetLeft:p.offsetTop,v=o&&u?c-l-r:l,d=i+m,f=r+v,x=r*.4;return v<=m?m=Math.max(v-x,0):d<=f&&(m=Math.min(m-(d-f-x),c-i)),m}function je(e){let{selectedElement:p,containerSize:i,contentSize:c,isRtl:o,isHorizontal:m}=e;const u=m?p.clientWidth:p.clientHeight,r=m?p.offsetLeft:p.offsetTop,l=o&&m?c-r-u/2-i/2:r+u/2-i/2;return Math.min(c-i,Math.max(0,l))}const Je=Symbol.for("vuetify:v-slide-group"),he=N({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Je},nextIcon:{type:O,default:"$next"},prevIcon:{type:O,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...X(),...ke(),...U(),...ce({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),oe=W()({name:"VSlideGroup",props:he(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:i}=p;const{isRtl:c}=Se(),{displayClasses:o,mobile:m}=ge(e),u=re(e,e.symbol),r=R(!1),l=R(0),v=R(0),d=R(0),f=S(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:T}=ee(),{resizeRef:h,contentRect:V}=ee(),t=S(()=>u.selected.value.length?u.items.value.findIndex(a=>a.id===u.selected.value[0]):-1),g=S(()=>u.selected.value.length?u.items.value.findIndex(a=>a.id===u.selected.value[u.selected.value.length-1]):-1);if(Ce){let a=-1;xe(()=>[u.selected.value,T.value,V.value,f.value],()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{if(T.value&&V.value){const s=f.value?"width":"height";v.value=T.value[s],d.value=V.value[s],r.value=v.value+1<d.value}if(t.value>=0&&h.value){const s=h.value.children[g.value];t.value===0||!r.value?l.value=0:e.centerActive?l.value=je({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,isHorizontal:f.value}):r.value&&(l.value=ue({selectedElement:s,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:l.value,isHorizontal:f.value}))}})})}const P=R(!1);let C=0,E=0;function B(a){const s=f.value?"clientX":"clientY";E=(c.value&&f.value?-1:1)*l.value,C=a.touches[0][s],P.value=!0}function L(a){if(!r.value)return;const s=f.value?"clientX":"clientY",k=c.value&&f.value?-1:1;l.value=k*(E+C-a.touches[0][s])}function b(a){const s=d.value-v.value;l.value<0||!r.value?l.value=0:l.value>=s&&(l.value=s),P.value=!1}function I(){x.value&&(x.value[f.value?"scrollLeft":"scrollTop"]=0)}const z=R(!1);function H(a){if(z.value=!0,!(!r.value||!h.value)){for(const s of a.composedPath())for(const k of h.value.children)if(k===s){l.value=ue({selectedElement:k,containerSize:v.value,contentSize:d.value,isRtl:c.value,currentScrollOffset:l.value,isHorizontal:f.value});return}}}function F(a){z.value=!1}function G(a){var s;!z.value&&!(a.relatedTarget&&((s=h.value)!=null&&s.contains(a.relatedTarget)))&&y()}function $(a){h.value&&(f.value?a.key==="ArrowRight"?y(c.value?"prev":"next"):a.key==="ArrowLeft"&&y(c.value?"next":"prev"):a.key==="ArrowDown"?y("next"):a.key==="ArrowUp"&&y("prev"),a.key==="Home"?y("first"):a.key==="End"&&y("last"))}function y(a){var s,k,J,Z,Q;if(h.value)if(!a)(s=Ie(h.value)[0])==null||s.focus();else if(a==="next"){const w=(k=h.value.querySelector(":focus"))==null?void 0:k.nextElementSibling;w?w.focus():y("first")}else if(a==="prev"){const w=(J=h.value.querySelector(":focus"))==null?void 0:J.previousElementSibling;w?w.focus():y("last")}else a==="first"?(Z=h.value.firstElementChild)==null||Z.focus():a==="last"&&((Q=h.value.lastElementChild)==null||Q.focus())}function A(a){const s=l.value+(a==="prev"?-1:1)*v.value;l.value=Ve(s,0,d.value-v.value)}const ye=S(()=>{let a=l.value>d.value-v.value?-(d.value-v.value)+ie(d.value-v.value-l.value):-l.value;l.value<=0&&(a=ie(-l.value));const s=c.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${s*a}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),q=S(()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected})),K=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!m.value;case!0:return r.value||Math.abs(l.value)>0;case"mobile":return m.value||r.value||Math.abs(l.value)>0;default:return!m.value&&(r.value||Math.abs(l.value)>0)}}),Y=S(()=>Math.abs(l.value)>0),j=S(()=>d.value>Math.abs(l.value)+v.value);return ve(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":r.value},o.value,e.class],style:e.style,tabindex:z.value||u.selected.value.length?-1:0,onFocus:G},{default:()=>{var a,s,k;return[K.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onClick:()=>Y.value&&A("prev")},[((a=i.prev)==null?void 0:a.call(i,q.value))??n(ne,null,{default:()=>[n(_,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:I},[n("div",{ref:h,class:"v-slide-group__content",style:ye.value,onTouchstartPassive:B,onTouchmovePassive:L,onTouchendPassive:b,onFocusin:H,onFocusout:F,onKeydown:$},[(s=i.default)==null?void 0:s.call(i,q.value)])]),K.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!j.value}],onClick:()=>j.value&&A("next")},[((k=i.next)==null?void 0:k.call(i,q.value))??n(ne,null,{default:()=>[n(_,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:u.selected,scrollTo:A,scrollOffset:l,focus:y}}}),be=Symbol.for("vuetify:v-chip-group"),Ze=N({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...he(),...X(),...ce({selectedClass:"v-chip--selected"}),...U(),...de(),...fe({variant:"tonal"})},"VChipGroup");W()({name:"VChipGroup",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:i}=p;const{themeClasses:c}=me(e),{isSelected:o,select:m,next:u,prev:r,selected:l}=re(e,be);return ze({VChip:{color:M(e,"color"),disabled:M(e,"disabled"),filter:M(e,"filter"),variant:M(e,"variant")}}),ve(()=>{const v=oe.filterProps(e);return n(oe,pe(v,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style}),{default:()=>{var d;return[(d=i.default)==null?void 0:d.call(i,{isSelected:o,select:m,next:u,prev:r,selected:l.value})]}})}),{}}});const Qe=N({activeClass:String,appendAvatar:String,appendIcon:O,closable:Boolean,closeIcon:{type:O,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ae(),onClickOnce:ae(),...Ae(),...X(),...we(),...Re(),..._e(),...Te(),...Oe(),...Ee(),...U({tag:"span"}),...de(),...fe({variant:"tonal"})},"VChip"),ta=W()({name:"VChip",directives:{Ripple:Be},props:Qe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:i,emit:c,slots:o}=p;const{t:m}=Fe(),{borderClasses:u}=Ge(e),{colorClasses:r,colorStyles:l,variantClasses:v}=Me(e),{densityClasses:d}=De(e),{elevationClasses:f}=Le(e),{roundedClasses:x}=He(e),{sizeClasses:T}=$e(e),{themeClasses:h}=me(e),V=qe(e,"modelValue"),t=Ke(e,be,!1),g=Ne(e,i),P=S(()=>e.link!==!1&&g.isLink.value),C=S(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||g.isClickable.value)),E=S(()=>({"aria-label":m(e.closeLabel),onClick(b){b.stopPropagation(),V.value=!1,c("click:close",b)}}));function B(b){var I;c("click",b),C.value&&((I=g.navigate)==null||I.call(g,b),t==null||t.toggle())}function L(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),B(b))}return()=>{const b=g.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),z=!!(I||o.append),H=!!(o.close||e.closable),F=!!(o.filter||e.filter)&&t,G=!!(e.prependIcon||e.prependAvatar),$=!!(G||o.prepend),y=!t||t.isSelected.value;return V.value&&le(n(b,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":C.value,"v-chip--filter":F,"v-chip--pill":e.pill},h.value,u.value,y?r.value:void 0,d.value,f.value,x.value,T.value,v.value,t==null?void 0:t.selectedClass.value,e.class],style:[y?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:C.value?0:void 0,onClick:B,onKeydown:C.value&&!P.value&&L},{default:()=>{var A;return[Ue(C.value,"v-chip"),F&&n(Ye,{key:"filter"},{default:()=>[le(n("div",{class:"v-chip__filter"},[o.filter?n(D,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):n(_,{key:"filter-icon",icon:e.filterIcon},null)]),[[We,t.isSelected.value]])]}),$&&n("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?n(D,{key:"prepend-defaults",disabled:!G,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):n(te,null,[e.prependIcon&&n(_,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(se,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content"},[((A=o.default)==null?void 0:A.call(o,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text]),z&&n("div",{key:"append",class:"v-chip__append"},[o.append?n(D,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):n(te,null,[e.appendIcon&&n(_,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(se,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&n("button",pe({key:"close",class:"v-chip__close",type:"button"},E.value),[o.close?n(D,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):n(_,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Xe("ripple"),C.value&&e.ripple,null]])}}});export{ta as V,Je as a,oe as b,he as m};
