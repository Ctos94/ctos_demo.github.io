import{_ as e}from"./Uploader-ae9ab58f.js";import{_ as s}from"./Sider-dfc95571.js";import{_ as t,A as l,r as a,o as i,c as r,b as o,w as u,F as n,e as d,l as c}from"./index-b6422c35.js";const p=t({components:{Sider:s,Uploader:e},data:()=>({menus:[{title:"看板",path:"/bill/dashboard"},{title:"列表",path:"/bill/list"},{title:"分析",path:"/bill/statistics"}],importUrl:l.bill.import,isRouterAlive:!0}),beforeMount(){this.$store.commit("update_header_active","/bill/dashboard")},methods:{importSuccess(){this.$refs.uploader.clearFiles(),this.isRouterAlive=!1,this.$nextTick((()=>{this.isRouterAlive=!0}))}}},[["render",function(t,l,p,m,h,_){const v=s,f=e,b=a("v-navigation-drawer"),S=a("router-view"),A=a("v-container"),x=a("v-main");return i(),r(n,null,[o(b,null,{default:u((()=>[o(v,{class:"sider",menus:h.menus},null,8,["menus"]),o(f,{class:"uploader",ref:"uploader",upload_url:this.importUrl,btn_text:"导入账单",accept:".csv",onOnSuccess:_.importSuccess},null,8,["upload_url","onOnSuccess"])])),_:1}),o(x,null,{default:u((()=>[o(A,null,{default:u((()=>[h.isRouterAlive?(i(),d(S,{key:0})):c("",!0)])),_:1})])),_:1})],64)}],["__scopeId","data-v-1e647a75"]]);export{p as default};
