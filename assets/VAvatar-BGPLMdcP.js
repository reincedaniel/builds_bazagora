import{ad as c,bK as y,bL as f,ab as o,K as V,aa as k,af as b,aM as C,ah as P,aU as S,ac as h,ai as z,b4 as A,aR as R,b5 as x,aN as I,ak as T,bv as _,ae as B,b as u,_ as D,b9 as F}from"./index-BboE7Kk5.js";import{V as K}from"./VImg-D_1DivDL.js";function O(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return c()({name:e??y(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(t,r){let{slots:s}=r;return()=>{var n;return V(t.tag,{class:[a,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}})}const N=k({start:Boolean,end:Boolean,icon:b,image:String,text:String,...o(),...C(),...P(),...S(),...h(),...z(),...A({variant:"flat"})},"VAvatar"),U=c()({name:"VAvatar",props:N(),setup(a,l){let{slots:e}=l;const{themeClasses:t}=R(a),{colorClasses:r,colorStyles:s,variantClasses:n}=x(a),{densityClasses:m}=I(a),{roundedClasses:v}=T(a),{sizeClasses:d,sizeStyles:g}=_(a);return B(()=>u(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},t.value,r.value,m.value,v.value,d.value,n.value,a.class],style:[s.value,g.value,a.style]},{default:()=>{var i;return[a.image?u(K,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?u(D,{key:"icon",icon:a.icon},null):((i=e.default)==null?void 0:i.call(e))??a.text,F(!1,"v-avatar")]}})),{}}});export{U as V,O as c};
