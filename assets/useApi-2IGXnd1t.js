import{b0 as o,aY as c,aX as n}from"./index-B1WJZsO4.js";var i={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const p=o({baseUrl:i.VITE_API_BASE_URL||"/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const a=c("accessToken").value;return a&&(e.headers={...e.headers,Authorization:`Bearer ${a}`}),{options:e}},afterFetch(e){const{data:a,response:t}=e;let r=null;try{r=n(a)}catch(s){console.error(s)}return{data:r,response:t}}}});export{p as u};
