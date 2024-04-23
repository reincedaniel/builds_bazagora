import{_ as te}from"./AppLoadingIndicator-C3mhc2jZ.js";import{o as v,c as z,F as Pt,h as $t,f as A,g as N,i as Dt,j as ee,k as ht,r as M,w as nt,l as ne,m as u,e as L,d as x,n as $,p as j,q as Bt,s as Vt,t as vt,v as U,x as yt,y as H,b as E,z as oe,A as ie,B as se,C as re,D as le,E as O,G as dt,H as Lt,I as kt,T as ae,a as St,S as ce}from"./index-DtbvD1vL.js";import fe from"./Footer-mb3eXpqm.js";import ue from"./NavbarThemeSwitcher-B8ODhGcg.js";import de from"./UserProfile-DZF5tQSG.js";import{c as pe,a as me,_ as ge}from"./I18n-D-UHk834.js";import{V as he}from"./VNodeRenderer-DjVhRy2x.js";import{V as ve}from"./VSpacer-WjXaXl33.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTooltip-2YmJ8guG.js";import"./VOverlay-D3ZGtEgq.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-CWUcFNX4.js";import"./VMenu-TVUgDOiw.js";import"./VList-ANvK5PwB.js";import"./index-GvGY1eT8.js";import"./VAvatar-DnZkw7Vo.js";import"./VDivider-DzSfnkJO.js";import"./VBadge-DxelGtcx.js";/* empty css              */const ye={class:"nav-items"},we={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=n=>"children"in n?be:It;return(n,o)=>(v(),z("ul",ye,[(v(!0),z(Pt,null,$t(t.navItems,(i,s)=>(v(),A(N(e(i)),{key:s,item:i},null,8,["item"]))),128))]))}},xe={class:"nav-group-label"},be=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,n=Dt(),o=ee(),i=ht(),s=M(!1);return nt(()=>n.path,()=>{const r=ne(e.item.children,o);s.value=r},{immediate:!0}),(r,l)=>u(pe)(t.item)?(v(),A(u(cn),{key:0,"is-rtl":u(i).isAppRTL,class:U(["nav-group",[{active:u(s),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:L(()=>[(v(!0),z(Pt,null,$t(t.item.children,a=>(v(),A(N("children"in a?"HorizontalNavGroup":u(It)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:L(()=>[x("div",xe,[(v(),A(N(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),A(N(u($).app.i18n.enable?"i18n-t":"span"),j(u(Bt)(t.item.title,"span"),{class:"nav-item-title"}),{default:L(()=>[Vt(vt(t.item.title),1)]),_:1},16)),(v(),A(N(u($).app.iconRenderer||"div"),j(u($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):yt("",!0)}}),Ce={class:"layout-navbar"},Ae={class:"navbar-content-container"},Re={class:"layout-horizontal-nav"},Le={class:"horizontal-nav-content-container"},ke={class:"layout-page-content"},Se={class:"layout-footer"},Ne={class:"footer-content-container"},Te={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=ht();return(n,o)=>(v(),z("div",{class:U(["layout-wrapper",u(e)._layoutClasses])},[x("div",{class:U(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[x("div",Ce,[x("div",Ae,[H(n.$slots,"navbar")])]),x("div",Re,[x("div",Le,[E(u(we),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),x("main",ke,[H(n.$slots,"default")]),x("footer",Se,[x("div",Ne,[H(n.$slots,"footer")])])],2))}},It={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(n,o)=>u(me)(t.item.action,t.item.subject)?(v(),z("li",{key:0,class:U(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(v(),A(N(t.item.to?"RouterLink":"a"),j(u(ie)(t.item),{class:{"router-link-active router-link-exact-active":u(oe)(t.item,n.$router)}}),{default:L(()=>[(v(),A(N(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),A(N(u($).app.i18n.enable?"i18n-t":"span"),j({class:"nav-item-title"},u(Bt)(t.item.title,"span")),{default:L(()=>[Vt(vt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):yt("",!0)}},pt=Math.min,G=Math.max,ot=Math.round,D=t=>({x:t,y:t}),_e={left:"right",right:"left",bottom:"top",top:"bottom"},Ee={start:"end",end:"start"};function Nt(t,e,n){return G(t,pt(e,n))}function rt(t,e){return typeof t=="function"?t(e):t}function F(t){return t.split("-")[0]}function lt(t){return t.split("-")[1]}function Mt(t){return t==="x"?"y":"x"}function Ht(t){return t==="y"?"height":"width"}function at(t){return["top","bottom"].includes(F(t))?"y":"x"}function zt(t){return Mt(at(t))}function Oe(t,e,n){n===void 0&&(n=!1);const o=lt(t),i=zt(t),s=Ht(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=it(r)),[r,it(r)]}function Pe(t){const e=it(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>Ee[e])}function $e(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function De(t,e,n,o){const i=lt(t);let s=$e(F(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(mt)))),s}function it(t){return t.replace(/left|right|bottom|top/g,e=>_e[e])}function Be(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ve(t){return typeof t!="number"?Be(t):{top:t,right:t,bottom:t,left:t}}function st(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Tt(t,e,n){let{reference:o,floating:i}=t;const s=at(e),r=zt(e),l=Ht(r),a=F(e),c=s==="y",d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let p;switch(a){case"top":p={x:d,y:o.y-i.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:f};break;case"left":p={x:o.x-i.width,y:f};break;default:p={x:o.x,y:o.y}}switch(lt(e)){case"start":p[r]-=g*(n&&c?-1:1);break;case"end":p[r]+=g*(n&&c?-1:1);break}return p}const Ie=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=Tt(c,o,a),g=o,p={},m=0;for(let h=0;h<l.length;h++){const{name:y,fn:w}=l[h],{x:b,y:C,data:_,reset:R}=await w({x:d,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});d=b??d,f=C??f,p={...p,[y]:{...p[y],..._}},R&&m<=50&&(m++,typeof R=="object"&&(R.placement&&(g=R.placement),R.rects&&(c=R.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):R.rects),{x:d,y:f}=Tt(c,g,a)),h=-1)}return{x:d,y:f,placement:g,strategy:i,middlewareData:p}};async function Ft(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=rt(e,t),m=Ve(p),y=l[g?f==="floating"?"reference":"floating":f],w=st(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),b=f==="floating"?{...r.floating,x:o,y:i}:r.reference,C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),_=await(s.isElement==null?void 0:s.isElement(C))?await(s.getScale==null?void 0:s.getScale(C))||{x:1,y:1}:{x:1,y:1},R=st(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:C,strategy:a}):b);return{top:(w.top-R.top+m.top)/_.y,bottom:(R.bottom-w.bottom+m.bottom)/_.y,left:(w.left-R.left+m.left)/_.x,right:(R.right-w.right+m.right)/_.x}}const Me=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...y}=rt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=F(i),b=F(l)===l,C=await(a.isRTL==null?void 0:a.isRTL(c.floating)),_=g||(b||!h?[it(l)]:Pe(l));!g&&m!=="none"&&_.push(...De(l,h,m,C));const R=[l,..._],ut=await Ft(e,y),et=[];let K=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&et.push(ut[w]),f){const I=Oe(i,r,C);et.push(ut[I[0]],ut[I[1]])}if(K=[...K,{placement:i,overflows:et}],!et.every(I=>I<=0)){var bt,Ct;const I=(((bt=s.flip)==null?void 0:bt.index)||0)+1,Rt=R[I];if(Rt)return{data:{index:I,overflows:K},reset:{placement:Rt}};let J=(Ct=K.filter(W=>W.overflows[0]<=0).sort((W,q)=>W.overflows[1]-q.overflows[1])[0])==null?void 0:Ct.placement;if(!J)switch(p){case"bestFit":{var At;const W=(At=K.map(q=>[q.placement,q.overflows.filter(Q=>Q>0).reduce((Q,Zt)=>Q+Zt,0)]).sort((q,Q)=>q[1]-Q[1])[0])==null?void 0:At[0];W&&(J=W);break}case"initialPlacement":J=l;break}if(i!==J)return{reset:{placement:J}}}return{}}}};async function He(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=F(n),l=lt(n),a=at(n)==="y",c=["left","top"].includes(r)?-1:1,d=s&&a?-1:1,f=rt(e,t);let{mainAxis:g,crossAxis:p,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof m=="number"&&(p=l==="end"?m*-1:m),a?{x:p*d,y:g*c}:{x:g*c,y:p*d}}const ze=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,a=await He(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:r}}}}},Fe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...a}=rt(t,e),c={x:n,y:o},d=await Ft(e,a),f=at(F(i)),g=Mt(f);let p=c[g],m=c[f];if(s){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=p+d[y],C=p-d[w];p=Nt(b,p,C)}if(r){const y=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=m+d[y],C=m-d[w];m=Nt(b,m,C)}const h=l.fn({...e,[g]:p,[f]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function B(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return t instanceof Node||t instanceof k(t).Node}function P(t){return t instanceof Element||t instanceof k(t).Element}function T(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function _t(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function We(t){return["table","td","th"].includes(B(t))}function wt(t){const e=xt(),n=S(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function qt(t){let e=Y(t);for(;T(e)&&!ct(e);){if(wt(e))return e;e=Y(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(B(t))}function S(t){return k(t).getComputedStyle(t)}function ft(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_t(t)&&t.host||V(t);return _t(e)?e.host:e}function jt(t){const e=Y(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&tt(e)?e:jt(e)}function gt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=jt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=k(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&n?gt(r.frameElement):[]):e.concat(i,gt(i,[],n))}function Gt(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=T(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=ot(n)!==s||ot(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function Xt(t){return P(t)?t:t.contextElement}function X(t){const e=Xt(t);if(!T(e))return D(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Gt(e);let r=(s?ot(n.width):n.width)/o,l=(s?ot(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const qe=D(0);function Yt(t){const e=k(t);return!xt()||!e.visualViewport?qe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function je(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function Z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=Xt(t);let r=D(1);e&&(o?P(o)&&(r=X(o)):r=X(t));const l=je(s,n,o)?Yt(s):D(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,d=i.width/r.x,f=i.height/r.y;if(s){const g=k(s),p=o&&P(o)?k(o):o;let m=g.frameElement;for(;m&&o&&p!==g;){const h=X(m),y=m.getBoundingClientRect(),w=S(m),b=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*h.x,C=y.top+(m.clientTop+parseFloat(w.paddingTop))*h.y;a*=h.x,c*=h.y,d*=h.x,f*=h.y,a+=b,c+=C,m=k(m).frameElement}}return st({width:d,height:f,x:a,y:c})}const Ge=[":popover-open",":modal"];function Kt(t){let e=!1,n=0,o=0;function i(s){try{e=e||t.matches(s)}catch{}}if(Ge.forEach(s=>{i(s)}),e){const s=qt(t);if(s){const r=s.getBoundingClientRect();n=r.x,o=r.y}}return[e,n,o]}function Xe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=V(o),[r]=e?Kt(e.floating):[!1];if(o===s||r)return n;let l={scrollLeft:0,scrollTop:0},a=D(1);const c=D(0),d=T(o);if((d||!d&&i!=="fixed")&&((B(o)!=="body"||tt(s))&&(l=ft(o)),T(o))){const f=Z(o);a=X(o),c.x=f.x+o.clientLeft,c.y=f.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+c.x,y:n.y*a.y-l.scrollTop*a.y+c.y}}function Ye(t){return Array.from(t.getClientRects())}function Jt(t){return Z(V(t)).left+ft(t).scrollLeft}function Ke(t){const e=V(t),n=ft(t),o=t.ownerDocument.body,i=G(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=G(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Jt(t);const l=-n.scrollTop;return S(o).direction==="rtl"&&(r+=G(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Je(t,e){const n=k(t),o=V(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,a=0;if(i){s=i.width,r=i.height;const c=xt();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:l,y:a}}function Qe(t,e){const n=Z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=T(t)?X(t):D(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,a=i*s.x,c=o*s.y;return{width:r,height:l,x:a,y:c}}function Et(t,e,n){let o;if(e==="viewport")o=Je(t,n);else if(e==="document")o=Ke(V(t));else if(P(e))o=Qe(e,n);else{const i=Yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return st(o)}function Qt(t,e){const n=Y(t);return n===e||!P(n)||ct(n)?!1:S(n).position==="fixed"||Qt(n,e)}function Ue(t,e){const n=e.get(t);if(n)return n;let o=gt(t,[],!1).filter(l=>P(l)&&B(l)!=="body"),i=null;const s=S(t).position==="fixed";let r=s?Y(t):t;for(;P(r)&&!ct(r);){const l=S(r),a=wt(r);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!a&&Qt(t,r))?o=o.filter(d=>d!==r):i=l,r=Y(r)}return e.set(t,o),o}function Ze(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?Ue(e,this._c):[].concat(n),o],l=r[0],a=r.reduce((c,d)=>{const f=Et(e,d,i);return c.top=G(f.top,c.top),c.right=pt(f.right,c.right),c.bottom=pt(f.bottom,c.bottom),c.left=G(f.left,c.left),c},Et(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function tn(t){const{width:e,height:n}=Gt(t);return{width:e,height:n}}function en(t,e,n,o){const i=T(e),s=V(e),r=n==="fixed",l=Z(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=D(0);if(i||!i&&!r)if((B(e)!=="body"||tt(s))&&(a=ft(e)),i){const h=Z(e,!0,r,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else s&&(c.x=Jt(s));let d=l.left+a.scrollLeft-c.x,f=l.top+a.scrollTop-c.y;const[g,p,m]=Kt(o);return g&&(d+=p,f+=m,i&&(d+=e.clientLeft,f+=e.clientTop)),{x:d,y:f,width:l.width,height:l.height}}function Ot(t,e){return!T(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ut(t,e){const n=k(t);if(!T(t))return n;let o=Ot(t,e);for(;o&&We(o)&&S(o).position==="static";)o=Ot(o,e);return o&&(B(o)==="html"||B(o)==="body"&&S(o).position==="static"&&!wt(o))?n:o||qt(t)||n}const nn=async function(t){const e=this.getOffsetParent||Ut,n=this.getDimensions;return{reference:en(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function on(t){return S(t).direction==="rtl"}const sn={convertOffsetParentRelativeRectToViewportRelativeRect:Xe,getDocumentElement:V,getClippingRect:Ze,getOffsetParent:Ut,getElementRects:nn,getClientRects:Ye,getDimensions:tn,getScale:X,isElement:P,isRTL:on},rn=Fe,ln=Me,an=(t,e,n)=>{const o=new Map,i={platform:sn,...n},s={...i.platform,_c:o};return Ie(t,e,{...i,platform:s})},cn={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,n=ht(),o=M(),i=M(),s=M({left:"0px",top:"0px"}),r=async()=>{if(o.value!==void 0&&i.value!==void 0){const{x:f,y:g}=await an(o.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...n.horizontalNavPopoverOffset?[ze(n.horizontalNavPopoverOffset)]:[],ln({boundary:document.querySelector("body"),padding:{bottom:16}}),rn({boundary:document.querySelector("body"),padding:{bottom:16}})]});s.value.left=`${f}px`,s.value.top=`${g}px`}};se(()=>n.horizontalNavType).toMatch(f=>f==="static").then(()=>{re("scroll",r)});const l=M(!1),a=()=>{l.value=!0,r()},c=()=>{l.value=!1};le(r),nt([()=>n.isAppRTL,()=>n.appContentWidth],r);const d=Dt();return nt(()=>d.fullPath,c),(f,g)=>(v(),z("div",{class:U(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":u(l)}]])},[x("div",{ref_key:"refPopperContainer",ref:o,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[H(f.$slots,"default")],544),u(O).horizontalNav.transition?typeof u(O).horizontalNav.transition=="string"?(v(),A(ae,{key:1,name:u(O).horizontalNav.transition},{default:L(()=>[Lt(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36),[[kt,u(l)]])]),_:3},8,["name"])):(v(),A(N(u(O).horizontalNav.transition),{key:2},{default:L(()=>[Lt(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36),[[kt,u(l)]])]),_:3})):(v(),z("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36))],2))}},fn=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}},{title:"Landing",to:{name:"root"},icon:{icon:"tabler-file"}}],un={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},On={__name:"DefaultLayoutWithHorizontalNav",setup(t){const e=M(!1),n=M(null);return nt([e,n],()=>{e.value&&n.value&&n.value.fallbackHandle(),!e.value&&n.value&&n.value.resolveHandle()},{immediate:!0}),(o,i)=>{const s=St("RouterLink"),r=te,l=St("RouterView");return v(),A(u(Te),{"nav-items":u(fn)},{navbar:L(()=>{var a;return[E(s,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:L(()=>[E(u(he),{nodes:u(O).app.logo},null,8,["nodes"]),x("h1",un,vt(u(O).app.title),1)]),_:1}),E(ve),u(O).app.i18n.enable&&((a=u(O).app.i18n.langConfig)!=null&&a.length)?(v(),A(ge,{key:0,languages:u(O).app.i18n.langConfig},null,8,["languages"])):yt("",!0),E(ue,{class:"me-2"}),E(de)]}),footer:L(()=>[E(fe)]),default:L(()=>[E(r,{ref_key:"refLoadingIndicator",ref:n},null,512),E(l,null,{default:L(({Component:a})=>[(v(),A(ce,{timeout:0,onFallback:i[0]||(i[0]=c=>e.value=!0),onResolve:i[1]||(i[1]=c=>e.value=!1)},{default:L(()=>[(v(),A(N(a)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{On as default};
