import{u as e,k as a,j as t,q as l,l as u,A as s,e as n,w as r,r as d,o,a as i,s as c,h as v,b as m}from"./index-05cce328.js";const p=v("h3",null,[m(" 在使用前请先了解什么是"),v("a",{href:"https://github.com/easychen/pushdeer",target:"_blank"},"PushDeer"),m("，本功能使用官方在线版本。 ")],-1),h="pushdeer_key",f={__name:"PushDeer",setup(v){const m=e(),f=a(null),g=a(null),k=a("");t((()=>{m.commit("update_sider_active","/user/pushdeer")})),l((()=>{u.get({url:s.user.attribute.get,params:{name:h},loading:{target:"#input"}}).then((e=>{k.value=e}))}));const y=()=>{u.delete({url:s.user.attribute.delete,data:{name:h},loading:{target:"#input"}}).then((()=>{k.value=""}))};return(e,a)=>{const t=d("v-btn"),l=d("v-text-field"),v=d("v-confirm-edit"),m=d("v-form"),_=d("v-sheet"),b=d("v-container");return o(),n(b,null,{default:r((()=>[p,i(_,null,{default:r((()=>[i(m,{id:"input",ref_key:"formRef",ref:f,style:{width:"60%"}},{default:r((()=>[i(v,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),ref_key:"editRef",ref:g},{default:r((({model:d,actions:v,isPristine:m})=>[i(l,{"hide-details":"",density:"compact",variant:"outlined",class:"my-4",rules:[e.$validator.required],label:"Key",modelValue:d.value,"onUpdate:modelValue":e=>d.value=e},{append:r((()=>[k.value&&m?c("",!0):(o(),n(t,{key:0,color:"blue-lighten-1",onClick:e=>(async e=>{const{valid:a}=await f.value.validate();a&&u.post({url:s.user.attribute.save,data:{name:h,value:e},loading:{target:"#input"}}).then((()=>{g.value.save()}))})(d.value),text:"保存"},null,8,["onClick"])),m?c("",!0):(o(),n(t,{key:1,class:"ml-2",color:"grey-lighten-3",onClick:a[0]||(a[0]=e=>g.value.cancel()),text:"取消"})),k.value&&m?(o(),n(t,{key:2,color:"red-darken-1",onClick:y,text:"删除"})):c("",!0)])),_:2},1032,["rules","modelValue","onUpdate:modelValue"])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1})}}};export{f as default};
