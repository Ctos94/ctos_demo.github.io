import{_ as e}from"./Uploader-76d6b516.js";import{_ as l,d as t,c as n,a as o,w as a,F as i,r as u,o as s,b as d}from"./index-51a7260c.js";const c=l({components:{Uploader:e,Header:t},data:()=>({input:""}),mounted(){},methods:{confirm(){this.$confirm({message:"确定要删除吗？",confirmText:"确定",cancelText:"取消",beforeClose:(e,l,t)=>{"confirm"===e?(console.log("confirm"),t()):t()}}).then((()=>{console.log("confirm")})).catch((()=>{console.log("cancel")}))}}},[["render",function(l,c,r,m,f,p){const x=t,b=u("v-layout"),_=u("v-container"),h=u("v-btn"),g=u("v-btn-link"),v=u("v-btn-text"),C=u("v-text-field"),k=e,w=u("v-select"),y=u("v-sheet");return s(),n(i,null,[o(_,null,{default:a((()=>[o(b,null,{default:a((()=>[o(x,{logo:"Ctos"})])),_:1})])),_:1}),o(_,{class:"mt-10"},{default:a((()=>[o(h,{color:"blue-lighten-1",text:"Primary"}),o(h,{color:"green-darken-1",text:"Success"}),o(g,{text:"Link Btn"}),o(v,{text:"Text Btn"})])),_:1}),o(_,null,{default:a((()=>[o(C,{"hide-details":"",label:"Input Label",modelValue:f.input,"onUpdate:modelValue":c[0]||(c[0]=e=>f.input=e)},null,8,["modelValue"])])),_:1}),o(_,null,{default:a((()=>[o(k,{upload_url:"http://test/upload",multiple:"",limit:1})])),_:1}),o(_,null,{default:a((()=>[o(w,{items:[1,2,3,4],label:"选择",width:"100px"}),o(w,{density:"compact",variant:"outlined",items:[1,2,3,4],label:"选择",width:"100px"})])),_:1}),o(_,null,{default:a((()=>[o(y,{id:"loading"},{default:a((()=>[d("1234")])),_:1})])),_:1}),o(_,null,{default:a((()=>[o(h,{text:"Confirm beforeClose",color:"blue-lighten-1",onClick:p.confirm},null,8,["onClick"])])),_:1})],64)}]]);export{c as default};
