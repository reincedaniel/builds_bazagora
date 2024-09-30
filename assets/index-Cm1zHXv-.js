import{_ as J}from"./VForm-DI0aNvCR.js";import{V as A}from"./VCardText-qLOM3HiC.js";import{V as P}from"./VCard-DJpoX1uf.js";import{o as f,f as g,e as l,b as c,y as W,d as p,t as R,v as k,p as X,G as Y,m as b,c as w,F as v,h as L,a6 as q,s as E,x as U,a as Z,_ as C,aX as ee,aY as te,r as se}from"./index-B1WJZsO4.js";import{N as oe,V as T,F as re}from"./front-page-navbar-DkZLEtHN.js";import{a as I,V as D}from"./VRow-DcLp8Ywk.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ae}from"./VAvatar-DkqYST9Q.js";import{V as ie,a as ce}from"./VList-Bavh8jh2.js";import"./VTextField-CPQpNJ1k.js";import"./index-t6Gzr8fB.js";import"./VImg-1Vr-55fK.js";import"./forwardRefs-DWGaNmQL.js";import"./VNodeRenderer-D2xGE1_X.js";import"./useGenerateImageVariant-CZ_vKhzF.js";/* empty css              */import"./NavbarThemeSwitcher-DSlfVMlQ.js";import"./VTooltip-t50GbUHl.js";import"./VOverlay-BSfK69hI.js";import"./VMenu-BIFE9s2J.js";import"./VSpacer-Dd05VIhx.js";import"./VDivider-BF2BDGKz.js";const le="/assets/app-search-header-bg-BCWNUfHj.png",pe={class:"text-h4 mb-2 font-weight-medium"},he={class:"mb-0"},ue=Object.assign({inheritAttrs:!1},{__name:"AppSearchHeader",props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},customClass:{type:String,required:!1},placeholder:{type:String,required:!1},density:{type:String,required:!1,default:"comfortable"},isReverse:{type:Boolean,required:!1,default:!1}},setup(e){const t=e;return(o,n)=>{const r=J;return f(),g(P,{flat:"",class:k(["text-center search-header",t.customClass]),style:Y(`background: url(${b(le)});`)},{default:l(()=>[c(A,null,{default:l(()=>[W(o.$slots,"title",{},()=>[p("h4",pe,R(t.title),1)]),p("div",{class:k(["d-flex",e.isReverse?"flex-column":"flex-column-reverse"])},[p("p",he,R(t.subtitle),1),p("div",null,[c(r,X(o.$attrs,{class:"search-header-input mx-auto my-4",placeholder:t.placeholder,density:t.density,"prepend-inner-icon":"tabler-search"}),null,16,["placeholder","density"])])],2)]),_:3})]),_:3},8,["class","style"])}}}),fe=["src"],de={class:"text-h5"},me={class:"text-body-1 mb-0"},N={__name:"HelpCenterLandingArticlesOverview",props:{articles:{type:Array,required:!0}},setup(e){const t=e;return(o,n)=>t.articles.length?(f(),g(D,{key:0},{default:l(()=>[(f(!0),w(v,null,L(t.articles,r=>(f(),g(I,{key:r.title,cols:"12",md:"4"},{default:l(()=>[c(P,{flat:"",border:""},{default:l(()=>[c(A,{class:"align-center text-center d-flex flex-column gap-3"},{default:l(()=>[p("img",{src:r.img,alt:"svg",height:"58",width:"58"},null,8,fe),p("h5",de,R(r.title),1),p("p",me,R(r.subtitle),1),c(q,{size:"small",variant:"tonal",to:{name:"help-center-article-title",params:{title:"how-to-add-product-in-cart"}}},{default:l(()=>[E(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):U("",!0)}},_e={},ye=p("h4",{class:"text-h4 text-center"}," Still need help? ",-1),ge=p("p",{class:"my-4 text-body-1"},[E(" Our specialists are always happy to help. "),p("br"),E(" Contact us during standard business hours or email us 24/7, and we'll get back to you. ")],-1),be={class:"d-flex justify-center gap-4 flex-wrap"};function Re(e,t){return f(),g(A,{class:"text-center py-4"},{default:l(()=>[ye,ge,p("div",be,[c(q,null,{default:l(()=>[E("Visit our community")]),_:1}),c(q,null,{default:l(()=>[E("Contact us")]),_:1})])]),_:1})}const we=ne(_e,[["render",Re]]),Ee={class:"mt-6"},Ae=p("span",{class:"d-inline-block"}," See All Articles ",-1),Se={__name:"HelpCenterLandingKnowledgeBase",props:{categories:{type:Array,required:!0}},setup(e){const t=e;return(o,n)=>{const r=Z("RouterLink");return f(),g(D,null,{default:l(()=>[(f(!0),w(v,null,L(t.categories,i=>(f(),g(I,{key:i.title,cols:"12",sm:"6",lg:"4"},{default:l(()=>[c(P,{title:i.title},{prepend:l(()=>[c(ae,{rounded:"",color:"primary",variant:"tonal",size:"32",class:"me-1"},{default:l(()=>[c(C,{icon:i.icon,size:"20"},null,8,["icon"])]),_:2},1024)]),default:l(()=>[c(A,null,{default:l(()=>[c(ie,{class:"card-list"},{default:l(()=>[(f(!0),w(v,null,L(i.articles,(h,a)=>(f(),g(ce,{key:a,class:"text-disabled"},{append:l(()=>[c(C,{icon:"tabler-chevron-right",class:"flip-in-rtl",size:"20"})]),default:l(()=>[c(r,{to:{name:"help-center-article-title",params:{title:"how-to-add-product-in-cart"}},class:"text-high-emphasis"},{default:l(()=>[p("div",null,R(h.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),p("div",Ee,[c(r,{to:{name:"help-center-article-title",params:{title:"how-to-add-product-in-cart"}},class:"text-base d-flex align-center font-weight-medium d-inline-block"},{default:l(()=>[Ae,c(C,{icon:"tabler-arrow-right",size:"18",class:"ms-3 flip-in-rtl"})]),_:1})])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})}}},Ce=/#/g,Te=/&/g,$e=/\//g,ve=/=/g,V=/\+/g,Le=/%5e/gi,qe=/%60/gi,xe=/%7c/gi,Oe=/%20/gi;function Pe(e){return encodeURI(""+e).replace(xe,"|")}function x(e){return Pe(typeof e=="string"?e:JSON.stringify(e)).replace(V,"%2B").replace(Oe,"+").replace(Ce,"%23").replace(Te,"%26").replace(qe,"`").replace(Le,"^").replace($e,"%2F")}function $(e){return x(e).replace(ve,"%3D")}function F(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function Ve(e){return F(e.replace(V," "))}function je(e){return F(e.replace(V," "))}function ke(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const o of e.split("&")){const n=o.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const r=Ve(n[1]);if(r==="__proto__"||r==="constructor")continue;const i=je(n[2]||"");t[r]===void 0?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]}return t}function Ne(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(o=>`${$(e)}=${x(o)}`).join("&"):`${$(e)}=${x(t)}`:$(e)}function Be(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>Ne(t,e[t])).filter(Boolean).join("&")}const He=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Ue=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Ie=/^([/\\]\s*){2,}[^/\\]/,De=/\/$|\/\?|\/#/,Fe=/^\.?\//;function z(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?He.test(e):Ue.test(e)||(t.acceptRelative?Ie.test(e):!1)}function O(e="",t){return t?De.test(e):e.endsWith("/")}function ze(e="",t){if(!t)return(O(e)?e.slice(0,-1):e)||"/";if(!O(e,!0))return e||"/";let o=e,n="";const r=e.indexOf("#");r>=0&&(o=e.slice(0,r),n=e.slice(r));const[i,...h]=o.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(h.length>0?`?${h.join("?")}`:"")+n}function Qe(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(O(e,!0))return e||"/";let o=e,n="";const r=e.indexOf("#");if(r>=0&&(o=e.slice(0,r),n=e.slice(r),!o))return n;const[i,...h]=o.split("?");return i+"/"+(h.length>0?`?${h.join("?")}`:"")+n}function Me(e,t){if(Ke(t)||z(e))return e;const o=ze(t);return e.startsWith(o)?e:We(o,e)}function Ge(e,t){const o=M(e),n={...ke(o.search),...t};return o.search=Be(n),Xe(o)}function Ke(e){return!e||e==="/"}function Je(e){return e&&e!=="/"}function We(e,...t){let o=e||"";for(const n of t.filter(r=>Je(r)))if(o){const r=n.replace(Fe,"");o=Qe(o)+r}else o=n;return o}const Q=Symbol.for("ufo:protocolRelative");function M(e="",t){const o=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(o){const[,y,m=""]=o;return{protocol:y.toLowerCase(),pathname:m,href:y+m,auth:"",host:"",search:"",hash:""}}if(!z(e,{acceptRelative:!0}))return t?M(t+e):B(e);const[,n="",r,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,h="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:_,search:d,hash:s}=B(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:h,pathname:_,search:d,hash:s,[Q]:!n}}function B(e=""){const[t="",o="",n=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:o,hash:n}}function Xe(e){const t=e.pathname||"",o=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",n=e.hash||"",r=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Q]?(e.protocol||"")+"//":"")+r+i+t+o+n}class Ye extends Error{constructor(t,o){super(t,o),this.name="FetchError",o!=null&&o.cause&&!this.cause&&(this.cause=o.cause)}}function Ze(e){var _,d,s,y,m;const t=((_=e.error)==null?void 0:_.message)||((d=e.error)==null?void 0:d.toString())||"",o=((s=e.request)==null?void 0:s.method)||((y=e.options)==null?void 0:y.method)||"GET",n=((m=e.request)==null?void 0:m.url)||String(e.request)||"/",r=`[${o}] ${JSON.stringify(n)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",h=`${r}: ${i}${t?` ${t}`:""}`,a=new Ye(h,e.error?{cause:e.error}:void 0);for(const u of["request","options","response"])Object.defineProperty(a,u,{get(){return e[u]}});for(const[u,S]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,u,{get(){return e.response&&e.response[S]}});return a}const et=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function H(e="GET"){return et.has(e.toUpperCase())}function tt(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const st=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ot=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function rt(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return ot.test(t)?"json":st.has(t)||t.startsWith("text/")?"text":"blob"}function nt(e,t,o=globalThis.Headers){const n={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(n.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(n.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){n.headers=new o((t==null?void 0:t.headers)||{});for(const[r,i]of new o((e==null?void 0:e.headers)||{}))n.headers.set(r,i)}return n}const at=new Set([408,409,425,429,500,502,503,504]),it=new Set([101,204,205,304]);function G(e={}){const{fetch:t=globalThis.fetch,Headers:o=globalThis.Headers,AbortController:n=globalThis.AbortController}=e;async function r(a){const _=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!_){let s;typeof a.options.retry=="number"?s=a.options.retry:s=H(a.options.method)?0:1;const y=a.response&&a.response.status||500;if(s>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(y):at.has(y))){const m=a.options.retryDelay||0;return m>0&&await new Promise(u=>setTimeout(u,m)),i(a.request,{...a.options,retry:s-1,timeout:a.options.timeout})}}const d=Ze(a);throw Error.captureStackTrace&&Error.captureStackTrace(d,i),d}const i=async function(_,d={}){var m;const s={request:_,options:nt(d,e.defaults,o),response:void 0,error:void 0};if(s.options.method=(m=s.options.method)==null?void 0:m.toUpperCase(),s.options.onRequest&&await s.options.onRequest(s),typeof s.request=="string"&&(s.options.baseURL&&(s.request=Me(s.request,s.options.baseURL)),(s.options.query||s.options.params)&&(s.request=Ge(s.request,{...s.options.params,...s.options.query}))),s.options.body&&H(s.options.method)&&(tt(s.options.body)?(s.options.body=typeof s.options.body=="string"?s.options.body:JSON.stringify(s.options.body),s.options.headers=new o(s.options.headers||{}),s.options.headers.has("content-type")||s.options.headers.set("content-type","application/json"),s.options.headers.has("accept")||s.options.headers.set("accept","application/json")):("pipeTo"in s.options.body&&typeof s.options.body.pipeTo=="function"||typeof s.options.body.pipe=="function")&&("duplex"in s.options||(s.options.duplex="half"))),!s.options.signal&&s.options.timeout){const u=new n;setTimeout(()=>u.abort(),s.options.timeout),s.options.signal=u.signal}try{s.response=await t(s.request,s.options)}catch(u){return s.error=u,s.options.onRequestError&&await s.options.onRequestError(s),await r(s)}if(s.response.body&&!it.has(s.response.status)&&s.options.method!=="HEAD"){const u=(s.options.parseResponse?"json":s.options.responseType)||rt(s.response.headers.get("content-type")||"");switch(u){case"json":{const S=await s.response.text(),K=s.options.parseResponse||ee;s.response._data=K(S);break}case"stream":{s.response._data=s.response.body;break}default:s.response._data=await s.response[u]()}}return s.options.onResponse&&await s.options.onResponse(s),!s.options.ignoreResponseError&&s.response.status>=400&&s.response.status<600?(s.options.onResponseError&&await s.options.onResponseError(s),await r(s)):s.response},h=async function(_,d){return(await i(_,d))._data};return h.raw=i,h.native=(...a)=>t(...a),h.create=(a={})=>G({...e,defaults:{...e.defaults,...a}}),h}const j=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),ct=j.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),lt=j.Headers,pt=j.AbortController,ht=G({fetch:ct,Headers:lt,AbortController:pt});var ut={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ft=ht.create({baseURL:ut.VITE_API_BASE_URL||"/api",async onRequest({options:e}){const t=te("accessToken").value;t&&(e.headers={...e.headers,Authorization:`Bearer ${t}`})}}),dt={class:"help-center-page"},mt={key:0},_t=p("h4",{class:"text-h4 font-weight-medium",style:{color:"rgba(var(--v-theme-primary), 1)"}}," Hello, how can we help? ",-1),yt={class:"help-center-section bg-surface"},gt=p("h4",{class:"text-h4 text-center mb-6"}," Popular Articles ",-1),bt={class:"help-center-section"},Rt=p("h4",{class:"text-h4 text-center mb-6"}," Knowledge Base ",-1),wt={class:"help-center-section bg-surface"},Et=p("h4",{class:"text-h4 text-center mb-6"}," Keep Learning ",-1),At={class:"help-center-section"},Mt={__name:"index",setup(e){const t=se();return setTimeout(async()=>{const o=await ft("/pages/help-center");t.value=o},1e3),(o,n)=>{const r=ue;return f(),w("div",dt,[c(oe),b(t)&&b(t).allArticles.length?(f(),w("div",mt,[c(r,{subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0",placeholder:"Search"},{title:l(()=>[_t]),_:1}),p("div",yt,[c(T,null,{default:l(()=>[gt,c(N,{articles:b(t).popularArticles},null,8,["articles"])]),_:1})]),p("div",bt,[c(T,null,{default:l(()=>[Rt,c(Se,{categories:b(t).allArticles},null,8,["categories"])]),_:1})]),p("div",wt,[c(T,null,{default:l(()=>[Et,c(N,{articles:b(t).keepLearning},null,8,["articles"])]),_:1})]),p("div",At,[c(we)]),p("div",null,[c(re)])])):U("",!0)])}}};export{Mt as default};
