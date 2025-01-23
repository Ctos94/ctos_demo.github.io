import{Q as e,r as a,_ as l,N as t,G as n,H as i,B as d,a as o,o as u,d as s,b as r,w as c,R as p,h as v,T as m,x as g,u as f,S as h,c as _,g as y,U as x,i as k,n as j,A as b,F as w,v as C,C as V,f as I,e as P,m as S,t as O,L as U,$ as N,p as T,j as A,k as $,l as M,O as D}from"./index-de9476e1.js";import{a as E}from"./common-5afeacdf.js";import{l as H}from"./vue-draggable-plus-cca1191b.js";const J={id:"",name:"",ingCount:0,isShow:!0},R={id:"",name:""},B=e("todo",(()=>{const e=a([]),l=a([]);return{projects:e,addProject:a=>{let l=JSON.parse(JSON.stringify(J));Object.assign(l,a),e.value.splice(0,0,l)},updateProject:(a,l,...t)=>{t&&t.length>0?t.forEach((t=>{e.value[l][t]=a[t]})):e.value.splice(l,1,a)},handleProjectIngCount:(a,l)=>{l<0&&e.value[a].ingCount<=0||(e.value[a].ingCount+=l)},tags:l,addTag:e=>{let a=JSON.parse(JSON.stringify(R));Object.assign(a,e),l.value.splice(0,0,a)},deleteTag:e=>{l.value.splice(e,1)},updateTag:(e,a,...t)=>{t&&t.length>0?t.forEach((t=>{l.value[a][t]=e[t]})):l.value.splice(a,1,e)},deleteProjectByIndex:a=>{e.value.splice(a,1)}}})),F=l({__name:"Projects",emits:["showViewer","add"],setup(e,{emit:l}){const w=B(),C=t("currentProjectId"),V=l,I=a(!1),P=a({}),S=a(!1),O=a(!1),U=n((()=>w.projects.filter((e=>e.isShow)))),N=()=>{P.value.name&&(O.value=!0,j.post({url:b.plan.project.create,data:P.value,loading:{target:"#project_title"}}).then((e=>{V("add",e),I.value=!1})).finally((()=>{O.value=!1})))};return i(I,(e=>{e||(P.value={})})),i(S,(e=>{e&&d((()=>{const e=document.getElementById(`project-${C.value}`);e&&e.scrollIntoView()}))})),(e,a)=>{const l=o("v-btn"),t=o("v-list-item"),n=o("v-list"),i=o("v-badge"),d=o("v-sheet"),j=o("v-virtual-scroll"),b=o("v-text-field"),w=o("v-card-text"),T=o("v-card"),A=o("v-dialog");return u(),s("div",null,[r(n,{class:"pa-0",density:"compact"},{default:c((()=>[r(t,{class:"pl-0 pr-2",ripple:!1,title:"项目",onClick:a[2]||(a[2]=e=>S.value=!S.value)},{prepend:c((()=>[r(l,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,class:p({rotate:S.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),append:c((()=>[r(l,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:a[0]||(a[0]=v((e=>V("showViewer",-1,-1,"projectManage")),["stop"])),icon:"mdi-tune-vertical-variant"}),r(l,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:a[1]||(a[1]=v((e=>I.value=!I.value),["stop"])),icon:"mdi-plus"})])),_:1})])),_:1}),r(j,{items:U.value},{default:c((({item:e,index:a})=>[r(m,{name:"slide-x-reverse-transition"},{default:c((()=>[r(d,{title:e.name},{default:c((()=>[g(r(t,{ripple:!1,title:e.name,id:`project-${e.id}`,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,class:p({item:!0,selected:f(C)==e.id}),value:e,color:"primary",onClick:l=>V("showViewer",e.id,a,"projectContent")},h({append:c((()=>[e.showActions?(u(),_(l,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:v((l=>V("showViewer",e.id,a,"projectSetting")),["stop"]),icon:"mdi-cog"},null,8,["onClick"])):y("",!0)])),_:2},[e.ingCount?{name:"prepend",fn:c((()=>[r(i,{class:"mr-1",content:e.ingCount,inline:""},null,8,["content"])])),key:"0"}:void 0]),1032,["title","id","onMouseenter","onMouseleave","class","value","onClick"]),[[x,S.value||f(C)==e.id]])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"]),r(A,{persistent:O.value,class:"dialog",modelValue:I.value,"onUpdate:modelValue":a[4]||(a[4]=e=>I.value=e),width:"600px"},{default:c((()=>[r(T,{id:"project_title"},{default:c((()=>[r(w,{class:"pa-3"},{default:c((()=>[r(b,{"hide-details":"",modelValue:P.value.name,"onUpdate:modelValue":a[3]||(a[3]=e=>P.value.name=e),density:"compact",variant:"outlined",onKeydown:k(N,["enter"]),label:"项目名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])])}}},[["__scopeId","data-v-0a949b21"]]),L=l({__name:"NewPlan",emits:["create"],setup(e,{emit:l}){const n=t("currentProjectId"),i=a(""),d=a(!1),s=a("inputRef"),p=l,m=()=>{s.value.error||j.post({url:b.plan.plan.create,data:{name:i.value,projectId:n.value},json:!0,loading:{target:"#newPlan"}}).then((e=>{p("create",e),i.value="",s.value.blur()}))};return(e,a)=>{const l=o("v-icon"),t=o("v-text-field"),n=o("v-validation"),p=o("v-sheet");return u(),_(p,{id:"newPlan",class:"d-flex justify-center"},{default:c((()=>[r(n,{rules:[e.$validator.required],modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e)},{default:c((({isValid:e})=>[r(t,{error:!!d.value&&!e.value,"onUpdate:focused":a[0]||(a[0]=e=>d.value=!d.value),ref_key:"inputRef",ref:s,"hide-details":"",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value=e),density:"compact",variant:"outlined",onKeydown:k(m,["enter"]),placeholder:"将任务添加到列表顶部"},h({_:2},[i.value?{name:"append-inner",fn:c((()=>[r(l,{onClick:v(m,["stop"]),icon:"mdi-plus"})])),key:"0"}:void 0]),1032,["error","modelValue"])])),_:1},8,["rules","modelValue"])])),_:1})}}},[["__scopeId","data-v-5149f10b"]]),q={key:0,class:"xx"},K=l({__name:"PlanActions",props:{plan:{type:Object,required:!0},show:{type:Boolean,default:!1}},emits:["handleAction"],setup(e,{emit:a}){const l=e,t=a,i=n((()=>l.plan?E(new Date(l.plan.deadline.date),"MM-dd"):"")),d=e=>{t("handleAction",e)};return(a,l)=>{const t=o("v-divider"),n=o("v-btn"),p=o("v-icon"),m=o("v-sheet");return u(),_(m,{class:"d-flex actions-sheet"},{default:c((()=>[e.show?(u(),s("div",q,[r(t,{class:"border-opacity-30 mx-1",inset:"",vertical:""}),e.plan.finished?(u(),s(w,{key:1},[r(n,{ripple:!1,onClick:l[2]||(l[2]=v((e=>d("archived")),["stop"])),title:"归档",class:"action-icon mx-1",color:"blue-grey-lighten-2",icon:"mdi-folder-file-outline",variant:"text"}),r(n,{ripple:!1,onClick:l[3]||(l[3]=v((e=>d("again")),["stop"])),title:"重新开始计划",class:"action-icon",color:"blue-grey-lighten-2",icon:"mdi-arrow-u-left-top",variant:"text"})],64)):(u(),s(w,{key:0},[r(n,{ripple:!1,onClick:l[0]||(l[0]=v((e=>d("complete")),["stop"])),title:"标记为完成",class:"action-icon mx-1",icon:"mdi-check",variant:"text"}),r(n,{ripple:!1,onClick:l[1]||(l[1]=v((e=>d("setting")),["stop"])),title:"显示其他信息",class:"action-icon mr-1",icon:"mdi-dots-vertical",variant:"text"})],64))])):y("",!0),!e.plan.finished&&e.plan.deadline?(u(),_(m,{key:1,class:"d-flex justify-center align-center"},{default:c((()=>[r(n,{ripple:!1,onClick:l[4]||(l[4]=v((e=>d("deadline")),["stop"])),class:"action-icon deadline-btn",icon:"",title:"编辑提醒",variant:"text"},{default:c((()=>[r(p,{icon:"mdi-alarm"}),r(m,{class:"deadline-text"},{default:c((()=>[C(V(i.value),1)])),_:1})])),_:1})])),_:1})):y("",!0)])),_:1})}}},[["__scopeId","data-v-029c534c"]]),z={__name:"Tag",props:{icon:{type:String,default:"mdi-circle"},text:{type:String,default:""}},setup:e=>(a,l)=>{const t=o("v-icon"),n=o("v-sheet");return u(),_(n,{class:"d-flex align-center mr-2"},{default:c((()=>[r(t,{color:"primary",icon:e.icon,style:{fontSize:"15px",marginTop:"2px",marginRight:"2px"}},null,8,["icon"]),I("div",null,V(e.text),1)])),_:1})}},G={key:0,class:"d-flex flex-wrap"},Q={__name:"PlanTags",props:{planTags:{type:Array,default:()=>[]}},setup(e){const a=B(),l=e,t=n((()=>0===l.planTags.length));return(l,n)=>t.value?y("",!0):(u(),s("div",G,[(u(!0),s(w,null,P(e.planTags,(e=>{return u(),_(z,{key:e,text:(l=e,a.tags.filter((e=>e.id===l))[0].name)},null,8,["text"]);var l})),128))]))}},W=[{color:"#F44336",text:"高优先级",value:"HIGH"},{color:"#FFA726",text:"中优先级",value:"MIDDLE"},{color:"#42A5F5",text:"低优先级",value:"LOW"},{color:"",text:"无优先级",value:"NONE"}],X=e=>e?W.filter((a=>a.value===e))[0]:{color:"",text:"无优先级",value:"NONE"},Y={style:{"line-height":"31px"}},Z={class:"hover-box d-flex justify-end align-center",style:{height:"100%"}},ee=l({__name:"Plan",props:{data:{type:Object},index:{type:Number}},emits:["update","right-click","handle-deadline","handle-tags","delete"],setup(e,{emit:l}){t("currentProjectId");const d=t("currentProjectIndex"),s=B(),p=e,m=l,g=a(!1),h=a(JSON.parse(JSON.stringify(p.data))),x=a(null),w=n((()=>{if(!p.data.tags)return[];let e=s.tags.map((e=>e.id));return p.data.tags.filter((a=>e.indexOf(a)>=0))})),C=()=>{g.value&&!x.value.error&&j.put({url:b.plan.plan.update,data:h.value,json:!0,loading:{target:`#plan-${p.data.id}`}}).then((()=>{m("update",h.value,p.index),g.value=!1}))},P=()=>{p.data.finished||(g.value=!0)},O=e=>{switch(e){case"complete":U();break;case"again":N();break;case"deadline":m("handle-deadline",p.index);break;case"setting":m("right-click",p.index);break;case"archived":T()}},U=()=>{j.post({url:b.plan.plan.finished,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{m("update",{...p.data,finished:!0},p.index),s.handleProjectIngCount(d.value,-1)}))},N=()=>{j.post({url:b.plan.plan.again,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{m("update",{...p.data,finished:!1,deadline:null},p.index),s.handleProjectIngCount(d.value,1)}))},T=()=>{j.post({url:b.plan.plan.archived,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{m("delete",p.index)}))},A=()=>{g.value=!1,h.value=JSON.parse(JSON.stringify(p.data))};return i((()=>p.data),(e=>{h.value=JSON.parse(JSON.stringify(e))}),{deep:!0}),(a,l)=>{const t=o("v-icon"),n=o("v-list-item"),i=o("v-hover"),d=o("v-text-field"),s=o("v-validation"),p=o("v-sheet");return u(),_(p,{class:"d-flex align-center",style:{width:"100%"}},{default:c((()=>[e.data.flag&&"NONE"!=e.data.flag?(u(),_(t,{key:0,class:"pointer",title:f(X)(e.data.flag).text,color:f(X)(e.data.flag).color,style:{position:"absolute",left:"-54px"},icon:"mdi-flag-outline"},null,8,["title","color"])):y("",!0),g.value?(u(),_(n,{key:2,width:"100%",class:"pa-0 my-2","min-height":"40"},{default:c((()=>[r(s,{modelValue:h.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value.name=e),rules:[a.$validator.required]},{default:c((({isValid:e})=>[r(d,{ref_key:"nameRef",ref:x,error:!e.value,modelValue:h.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value.name=e),"hide-details":"",autofocus:"",onKeyup:[k(C,["enter"]),k(A,["esc"])],onBlur:C,density:"compact",variant:"outlined"},null,8,["error","modelValue"])])),_:1},8,["modelValue","rules"])])),_:1})):(u(),_(i,{key:1},{default:c((({isHovering:a,props:t})=>[r(n,S({width:"100%",class:["pr-2",{"plan-item py-0 my-2 rounded pointer":!0,"warning-deadline":!e.data.finished&&e.data.deadline&&e.data.deadline.expired}],onClick:P,ripple:!1},t),{title:c((()=>[I("span",Y,V(e.data.name),1)])),subtitle:c((()=>[r(Q,{onClick:l[0]||(l[0]=v((e=>m("handle-tags")),["stop"])),planTags:w.value},null,8,["planTags"])])),append:c((()=>[I("div",Z,[r(K,{show:a,onHandleAction:O,plan:e.data},null,8,["show","plan"])])])),_:2},1040,["class"])])),_:1}))])),_:1})}}},[["__scopeId","data-v-e43213c5"]]),ae=l({__name:"DatePicker",props:{data:{type:Object},index:{type:Number}},emits:["update","cancel"],setup(e,{emit:l}){const t=e,i=l,d=a(!1),p=a(null),v=a(!1);O((()=>{x(),d.value=t.data.deadline&&t.data.deadline.remind,t.data.deadline&&(p.value=new Date(t.data.deadline.date))}));const m=n((()=>E(new Date((new Date).getTime()),"yyyy-MM-dd"))),g=()=>{if(!p)return;let e={date:E(p.value,"yyyy-MM-dd"),remind:d.value};j.post({url:b.plan.plan.setDeadline,data:{planId:t.data.id,...e},json:!0}).then((()=>{h({...t.data,deadline:e})}))},f=()=>{j.delete({url:b.plan.plan.removeDeadline,data:{planId:t.data.id}}).then((()=>{h({...t.data,deadline:null})}))},h=e=>{i("update",e,t.index),i("cancel")},x=()=>{j.get({url:b.user.attribute.get,params:{name:"pushdeer_key"}}).then((e=>{v.value=!!e}))};return(a,l)=>{const t=o("v-date-picker"),n=o("v-checkbox"),h=o("v-icon"),x=o("router-link"),k=o("v-sheet"),j=o("v-menu"),b=o("v-card-text"),V=o("v-btn"),P=o("v-card-actions"),O=o("v-card");return u(),_(O,{class:"date-picker"},{default:c((()=>[r(b,{class:"py-0"},{default:c((()=>[r(t,{style:{width:"100%"},"show-adjacent-months":"",min:m.value,modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e)},null,8,["min","modelValue"]),I("div",{class:"d-flex align-center",style:U({cursor:v.value?"":"not-allowed"})},[r(n,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e),ripple:!1,class:"checkbox-clean",disabled:!v.value,"hide-details":"",label:"任务截至当天提醒我"},null,8,["modelValue","disabled"]),r(j,{offset:"10",location:"top center","open-on-hover":"",transition:"scale-transition"},{activator:c((({props:e})=>[r(h,S({class:"ml-3 pointer"},e,{color:v.value?"":"red-darken-1",icon:"mdi-information",size:"x-small"}),null,16,["color"])])),default:c((()=>[r(k,{elevation:"0",class:"popover-content"},{default:c((()=>[v.value?(u(),s(w,{key:0},[C("任务截至当天将会通过pushdeer提醒")],64)):(u(),s(w,{key:1},[C("未设置"),r(x,{class:"pushdeer-link",to:"/user/pushdeer"},{default:c((()=>[C("pushdeer")])),_:1}),C("，无法使用该功能")],64))])),_:1})])),_:1})],4)])),_:1}),r(P,null,{default:c((()=>[r(V,{title:"取消",onClick:l[2]||(l[2]=e=>i("cancel"))},{default:c((()=>[r(h,{icon:"mdi-close"})])),_:1}),e.data&&e.data.deadline?(u(),_(V,{key:0,title:"取消期限",color:"primary",onClick:f},{default:c((()=>[r(h,{icon:"mdi-alarm-off"})])),_:1})):y("",!0),r(V,{title:"设置期限",color:"primary",onClick:g},{default:c((()=>[r(h,{icon:"mdi-alarm"})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-a6b6f813"]]),le={__name:"TagSelect",props:{data:{type:Object}},emits:["cancel"],setup(e,{emit:l}){const t=B(),i=e,d=l,s=a(null),p=a(null),m=n((()=>{if(!i.data.tags)return[];let e=t.tags.map((e=>e.id));return i.data.tags.filter((a=>e.indexOf(a)>=0))})),g=()=>{p.value.blur(),j.post({url:b.plan.tag.create,data:{name:s.value},loading:{target:"#tag_autocomplete"}}).then((e=>{t.addTag(e),y(e)}))},y=e=>{p.value.blur(),j.post({url:b.plan.plan.addTag,data:{id:i.data.id,tagId:e.id},loading:{target:"#tag_autocomplete"}}).then((()=>{i.data.tags.push(e.id)}))};return(e,a)=>{const l=o("v-icon"),n=o("v-chip"),x=o("v-list-item"),k=o("v-autocomplete"),w=o("v-card-text"),I=o("v-btn"),P=o("v-card-actions"),S=o("v-card");return u(),_(S,{title:"编辑标签"},{default:c((()=>[r(w,{id:"tag_autocomplete"},{default:c((()=>[r(k,{density:"compact","hide-selected":"","hide-details":"",search:s.value,ref_key:"tagRef",ref:p,modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),"onUpdate:search":a[1]||(a[1]=e=>s.value=e),multiple:"",chips:"","item-title":"name","item-value":"id",items:f(t).tags},h({chip:c((({item:e})=>[r(n,null,{default:c((()=>[C(V(e.title)+" ",1),r(l,{style:{margin:"2px 0 0 2px"},icon:"mdi-close-circle",onClick:v((a=>{return l=e,p.value.blur(),void j.delete({url:b.plan.plan.deleteTag,data:{id:i.data.id,tagId:l.value},loading:{target:"#tag_autocomplete"}}).then((()=>{i.data.tags=i.data.tags.filter((e=>e!==l.value))}));var l}),["stop"])},null,8,["onClick"])])),_:2},1024)])),item:c((({item:e})=>[r(x,{onClick:v((a=>y(e.raw)),["stop"]),title:e.title},null,8,["onClick","title"])])),_:2},[s.value?{name:"no-data",fn:c((()=>[r(x,{onClick:v(g,["stop"]),title:`创建标签 '${s.value}'`},null,8,["title"])])),key:"0"}:void 0]),1032,["search","modelValue","items"])])),_:1}),r(P,null,{default:c((()=>[r(I,{onClick:a[2]||(a[2]=e=>d("cancel"))},{default:c((()=>[r(l,{icon:"mdi-close"})])),_:1})])),_:1})])),_:1})}}},te=l({__name:"PlanFlag",props:{plan:Object},emits:["selected"],setup(e,{emit:a}){const l=e,t=a,i=n((()=>X(l.plan.flag).color));return(e,a)=>{const l=o("v-btn-text"),n=o("v-icon"),d=o("v-list-item"),p=o("v-list"),m=o("v-menu");return u(),_(m,{class:"flag-menu"},{activator:c((({props:e})=>[r(l,S({title:"优先级",color:i.value,icon:"mdi-flag-outline"},e),null,16,["color"])])),default:c((()=>[r(p,{class:"pa-0"},{default:c((()=>[(u(!0),s(w,null,P(f(W),((e,a)=>(u(),_(d,{key:a,title:e.text,ripple:!1,onClick:v((a=>t("selected",e.value)),["stop"])},{prepend:c((()=>[r(n,{icon:"mdi-flag-outline",color:e.color},null,8,["color"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-89524109"]]),ne={__name:"PlanDrawer",props:{plan:Object},emits:["handleEvent"],setup(e,{emit:a}){const l=a,t=(e,a)=>{l("handleEvent",e,a)};return(a,l)=>{const n=o("v-list-item"),i=o("v-list"),d=o("v-card-text"),s=o("v-card");return u(),_(s,{width:"280"},{default:c((()=>[r(d,{class:"pa-0"},{default:c((()=>[r(i,{class:"pa-0"},{default:c((()=>[r(n,{onClick:l[1]||(l[1]=v((e=>t("deadline")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-alarm",title:e.plan.deadline&&e.plan.deadline.date||"设置期限"},{append:c((()=>[r(te,{onSelected:l[0]||(l[0]=e=>{t("flag",{value:e})}),plan:e.plan},null,8,["plan"])])),_:1},8,["title"]),r(n,{onClick:l[2]||(l[2]=v((e=>t("tag")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-tag-multiple-outline",title:"编辑标签"}),r(n,{onClick:l[3]||(l[3]=v((e=>t("delete")),["stop"])),style:{color:"#F44336"},elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-trash-can-outline",title:"删除"})])),_:1})])),_:1})])),_:1})}}},ie=(e=>(T("data-v-10d8cfdb"),e=e(),A(),e))((()=>I("p",null,"没有计划任务",-1))),de=["id"],oe=l({__name:"ProjectContent",setup(e){const l=t("currentProjectId"),i=t("currentProjectIndex"),d=B(),m=a([]),h=a(!1),k=a(!1),V=a(-1),I=a(!1),S=a(!1),U=n((()=>m.value.filter((e=>!e.finished)).length>0)),T=n((()=>m.value.filter((e=>e.finished)).length>0)),A=n((()=>m.value.filter((e=>e.finished)).length));O((()=>{$()}));const $=()=>{l.value&&j.get({url:b.plan.plan.list,params:{projectId:l.value},loading:!0}).then((e=>{m.value=e}))},M=e=>{m.value.splice(0,0,e),d.handleProjectIngCount(i.value,1)},D=e=>{h.value||(h.value=!0,V.value=e)},E=(e,a={})=>{switch(e){case"deadline":k.value=!0;break;case"tag":S.value=!0;break;case"delete":let e=m.value[V.value].id;N({message:"是否要删除该计划？"}).then((()=>{j.delete({url:b.plan.plan.delete,data:{id:e},loading:{target:`#plan-${e}`}}).then((()=>{m.value.splice(V.value,1),d.handleProjectIngCount(i.value,-1)}))})).catch((()=>{}));break;case"flag":j.put({url:b.plan.plan.setFlag,data:{id:m.value[V.value].id,flag:a.value}}).then((()=>{m.value[V.value].flag=a.value}))}h.value=!1},J=(e,a)=>{m.value.splice(a,1,e)},R=e=>{m.value.splice(e,1)},F=e=>{console.log(e.newIndex),j.put({url:b.plan.plan.sort,json:!0,data:m.value.map((e=>e.id))}).then((()=>{}))};return(e,a)=>{const t=o("v-sheet"),n=o("v-icon"),i=o("v-list"),d=o("v-btn"),j=o("v-list-item"),b=o("v-dialog"),O=o("v-container");return u(),_(O,{id:"plans",style:{width:"70%"}},{default:c((()=>[f(l)?(u(),_(t,{key:1},{default:c((()=>[r(L,{onCreate:M}),r(t,{class:"d-flex justify-center text-h5 mt-10"},{default:c((()=>[C(" 进行中的计划 ")])),_:1}),U.value?y("",!0):(u(),_(t,{key:0,class:"d-flex justify-center mt-2 mb-8"},{default:c((()=>[C(" 目前还没有进行中的计划 ")])),_:1})),r(i,{style:{overflow:"visible"}},{default:c((()=>[r(f(H),{handle:".handle",onUpdate:F,animation:150,ref:"el",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e)},{default:c((()=>[(u(!0),s(w,null,P(m.value,((e,a)=>g((u(),s("div",{key:e.id,id:`plan-${e.id}`},[r(t,{class:"d-flex justify-start align-center todo-list"},{default:c((()=>[r(n,{class:"handle",icon:"mdi-drag-vertical"}),r(ee,{data:e,index:a,onHandleTags:e=>(e=>{V.value=e,S.value=!0})(a),onHandleDeadline:e=>(e=>{V.value=e,k.value=!0})(a),onRightClick:D,onUpdate:J},null,8,["data","index","onHandleTags","onHandleDeadline"])])),_:2},1024)],8,de)),[[x,!e.finished&&"ARCHIVED"!==e.state]]))),128))])),_:1},8,["modelValue"])])),_:1}),T.value?(u(),_(t,{key:1},{default:c((()=>[r(t,{class:"d-flex justify-center text-h5 mt-10"},{default:c((()=>[C(" 完成的计划 ")])),_:1}),r(i,null,{default:c((()=>[(u(!0),s(w,null,P(m.value,((e,a)=>{return u(),s(w,{key:a},[e.finished&&"ARCHIVED"!==e.state&&(l=e.id,m.value.filter((e=>e.finished)).map((e=>e.id)).splice(0,3).indexOf(l)>=0)||e.finished&&"ARCHIVED"!==e.state&&I.value?(u(),_(t,{key:0,id:`plan-${e.id}`},{default:c((()=>[r(ee,{class:"text-disabled",data:e,index:a,onDelete:R,onUpdate:J},null,8,["data","index"])])),_:2},1032,["id"])):y("",!0)],64);var l})),128)),A.value>3?(u(),_(j,{key:0,style:{marginTop:"-10px"},class:"d-flex justify-center"},{default:c((()=>[r(d,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:a[1]||(a[1]=v((e=>I.value=!I.value),["stop"])),class:p({rotate:I.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),_:1})):y("",!0)])),_:1})])),_:1})):y("",!0)])),_:1})):(u(),_(t,{key:0,class:"d-flex justify-center"},{default:c((()=>[ie])),_:1})),r(b,{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=e=>k.value=e),width:"400"},{default:c((()=>[r(ae,{data:m.value[V.value],index:V.value,onCancel:a[2]||(a[2]=e=>k.value=!1),onUpdate:J},null,8,["data","index"])])),_:1},8,["modelValue"]),r(b,{modelValue:S.value,"onUpdate:modelValue":a[5]||(a[5]=e=>S.value=e),width:"600"},{default:c((()=>[r(le,{data:m.value[V.value],onCancel:a[4]||(a[4]=e=>S.value=!1)},null,8,["data"])])),_:1},8,["modelValue"]),r(b,{fullscreen:"",modelValue:h.value,"onUpdate:modelValue":a[6]||(a[6]=e=>h.value=e),width:"auto",class:"rigth-drawer",transition:"slide-x-reverse-transition"},{default:c((()=>[r(ne,{onHandleEvent:E,plan:m.value[V.value]},null,8,["plan"])])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-10d8cfdb"]]),ue=l({__name:"ProjectSetting",setup(e){const l=B(),n=t("currentProjectId"),i=t("currentProjectIndex"),d=t("reload"),s=a({}),p=a(!1);O((()=>{v()}));const v=()=>{j.get({url:b.plan.project.detail,params:{id:n.value},loading:!0}).then((e=>{s.value=e}))},m=()=>{N({message:"删除后数据无法找回，确定要删除吗？",beforeClose:(e,a,l)=>{"confirm"===e?(a.confirmButtonLoading=!0,j.delete({url:b.plan.project.delete,data:{id:n.value}}).then((()=>{l()}))):l()}}).then((()=>{d()})).catch((()=>{}))};return(e,a)=>{const t=o("v-btn"),d=o("v-text-field"),v=o("v-confirm-edit"),g=o("v-sheet"),f=o("v-container");return u(),_(f,null,{default:c((()=>[r(g,{id:"setting"},{default:c((()=>[r(g,{class:"confirm-edit"},{default:c((()=>[r(v,{modelValue:s.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value.name=e),ref:"edit"},{default:c((({model:o,actions:p,isPristine:v})=>[r(d,{rules:[e.$validator.required],"hide-details":"",density:"compact",variant:"outlined",label:"项目名称",modelValue:o.value,"onUpdate:modelValue":e=>o.value=e},{append:c((()=>[r(t,{class:"update_btn",color:"blue-lighten-1",onClick:()=>{var e;v||(e=o.value)&&j.put({url:b.plan.project.update,data:{id:n.value,name:e},loading:{target:".update_btn"},json:!0}).then((()=>{s.value.name=e,l.updateProject(s.value,i.value,"name")}))},text:"重命名"},null,8,["onClick"]),v?y("",!0):(u(),_(t,{key:0,class:"ml-2 update_btn",color:"grey-lighten-3",onClick:a[0]||(a[0]=a=>e.$refs.edit.cancel()),text:"取消"}))])),_:2},1032,["rules","modelValue","onUpdate:modelValue"])])),_:1},8,["modelValue"])])),_:1}),r(t,{loading:p.value,ripple:!1,"prepend-icon":"mdi-alert",class:"mt-4","max-width":"300",color:"red-lighten-2",text:"删除项目",variant:"outlined",onClick:m},null,8,["loading"])])),_:1})])),_:1})}}},[["__scopeId","data-v-9f5fe603"]]),se={class:"hover-box d-flex justify-end align-center"},re=l({__name:"ProjectManage",setup(e){const a=B(),l=e=>{j.put({url:b.plan.project.sort,json:!0,data:a.projects.map((e=>e.id))}).then((()=>{}))};return(e,t)=>{const n=o("v-icon"),i=o("v-btn"),d=o("v-sheet"),p=o("v-fade-transition"),m=o("v-list-item"),g=o("v-list"),h=o("v-container");return u(),_(h,{style:{width:"70%"}},{default:c((()=>[r(g,{class:"list"},{default:c((()=>[r(f(H),{handle:".handle",onUpdate:l,animation:150,ghostClass:"ghost",ref:"el",modelValue:f(a).projects,"onUpdate:modelValue":t[0]||(t[0]=e=>f(a).projects=e)},{default:c((()=>[(u(!0),s(w,null,P(f(a).projects,((e,l)=>(u(),_(d,{key:l,class:"d-flex justify-start align-center mb-3",id:`m-project-${e.id}`},{default:c((()=>[r(n,{class:"handle",icon:"mdi-drag-vertical"}),r(m,{variant:"outlined",rounded:"",ripple:!1,title:e.name,class:"list-item rounded pointer"},{append:c((()=>[I("div",se,[r(p,null,{default:c((()=>[r(d,{rounded:"",class:"d-flex align-center justify-center px-3",style:{height:"100%",background:"rgba(0, 0, 0, 0)"}},{default:c((()=>[r(i,{onClick:v((t=>((e,l)=>{j.put({url:b.plan.project.show,data:{id:e.id,show:!e.isShow},loading:{target:`#m-project-${e.id}`}}).then((()=>{a.updateProject(Object.assign(e,{isShow:!e.isShow}),l,"isShow")}))})(e,l)),["stop"]),title:`从菜单中${e.isShow?"隐藏":"显示"}项目`,ripple:!1,class:"action-icon",icon:e.isShow?"mdi-eye":"mdi-eye-off"},null,8,["onClick","title","icon"]),r(i,{title:"删除",onClick:v((t=>((e,l)=>{N({message:"删除后数据无法找回，确定要删除吗？",beforeClose:(a,l,t)=>{"confirm"===a?(l.confirmButtonLoading=!0,j.delete({url:b.plan.project.delete,data:{id:e},loading:{target:`#m-project-${e}`}}).then((()=>{t()}))):t()}}).then((()=>{a.deleteProjectByIndex(l)})).catch((()=>{}))})(e.id,l)),["stop"]),ripple:!1,class:"action-icon delete",icon:"mdi-delete"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])])),_:2},1032,["title"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})}}},[["__scopeId","data-v-a13313b5"]]),ce=l({__name:"Tags",props:{tags:{type:Array,default:function(){return[]}}},setup(e){const l=B(),t=a(!1),n=a({}),d=a(!1),g=a(!1),f=a(-1),h=()=>{n.value.name&&(g.value=!0,n.value.id?j.put({url:b.plan.tag.update,data:n.value,loading:{target:"#tag_dialog"}}).then((()=>{l.updateTag(n.value,f.value,["name"]),t.value=!1})).finally((()=>{g.value=!1})):j.post({url:b.plan.tag.create,data:n.value,loading:{target:"#tag_dialog"}}).then((e=>{l.addTag(e),t.value=!1})).finally((()=>{g.value=!1})))};return i(t,(e=>{e||(n.value={},f.value=-1)})),(a,i)=>{const x=o("v-btn"),C=o("v-list-item"),V=o("v-list"),I=o("v-icon"),P=o("v-sheet"),S=o("v-virtual-scroll"),O=o("v-text-field"),U=o("v-card-text"),T=o("v-card"),A=o("v-dialog");return u(),s(w,null,[r(V,{class:"pa-0"},{default:c((()=>[r(C,{class:"pl-0 pr-2",density:"compact",ripple:!1,title:"标签",onClick:i[1]||(i[1]=e=>d.value=!d.value)},{prepend:c((()=>[r(x,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,class:p({rotate:d.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),append:c((()=>[r(x,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:i[0]||(i[0]=v((e=>t.value=!t.value),["stop"])),icon:"mdi-plus"})])),_:1})])),_:1}),d.value?(u(),_(S,{key:0,items:e.tags},{default:c((({item:e,index:a})=>[r(m,{name:"slide-x-reverse-transition"},{default:c((()=>[r(P,{title:e.name},{default:c((()=>[r(C,{class:"pr-2 pl-3",ripple:!1,title:e.name,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,value:e,onClick:l=>((e,a)=>{f.value=a,n.value=JSON.parse(JSON.stringify(e)),t.value=!0})(e,a)},{prepend:c((()=>[r(I,{class:"pr-2",icon:"mdi-tag-outline"})])),append:c((()=>[e.showActions?(u(),_(x,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,icon:"mdi-close",onClick:v((t=>((e,a)=>{N({width:450,message:`删除后，所有任务中的标签“${e.name}”都将被移除。`,beforeClose:(a,l,t)=>{"confirm"===a?(l.confirmButtonLoading=!0,j.delete({url:b.plan.tag.delete,data:{id:e.id}}).then((()=>{t()}))):t()}}).then((()=>{l.deleteTag(a)})).catch((()=>{}))})(e,a)),["stop"])},null,8,["onClick"])):y("",!0)])),_:2},1032,["title","onMouseenter","onMouseleave","value","onClick"])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"])):y("",!0),r(A,{persistent:g.value,class:"dialog",modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=e=>t.value=e),width:"600px"},{default:c((()=>[r(T,{id:"tag_dialog"},{default:c((()=>[r(U,{class:"pa-3"},{default:c((()=>[r(O,{"hide-details":"",modelValue:n.value.name,"onUpdate:modelValue":i[2]||(i[2]=e=>n.value.name=e),density:"compact",variant:"outlined",onKeydown:k(h,["enter"]),label:"标签名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])],64)}}},[["__scopeId","data-v-0af467ae"]]),pe={__name:"Index",setup(e){const l=$(),t=B(),n=a("projectContent"),i=a(void 0),d=a(-1);M((()=>{l.commit("update_header_active","PLAN_INDEX")})),O((()=>{p(),v()}));const p=()=>{j.get({url:b.plan.project.list,loading:!0}).then((e=>{if(n.value="projectContent",t.projects=e,e.length>0){let a=e.filter((e=>e.isShow));if(a.length>0)return i.value=a[0].id,void(d.value=0)}d.value=-1,i.value=void 0}))},v=()=>{j.get({url:b.plan.tag.list,loading:!0}).then((e=>{t.tags=e}))},m=e=>{t.addProject(e),i.value=e.id,d.value=0},g=(e,a,l)=>{i.value=e,d.value=a,n.value=l};return D("currentProjectId",i),D("currentProjectIndex",d),D("reload",(()=>{p()})),(e,a)=>{const l=o("v-divider"),d=o("v-navigation-drawer"),p=o("v-container"),v=o("v-main");return u(),s(w,null,[r(d,{width:"300"},{default:c((()=>[r(F,{projects:f(t).projects,onAdd:m,onShowViewer:g},null,8,["projects"]),r(l,{class:"my-2",style:{width:"80%","margin-left":"10%"}}),r(ce,{tags:f(t).tags},null,8,["tags"])])),_:1}),r(v,null,{default:c((()=>[r(p,null,{default:c((()=>["projectContent"==n.value?(u(),_(oe,{key:i.value})):y("",!0),"projectSetting"==n.value?(u(),_(ue,{key:i.value})):y("",!0),"projectManage"==n.value?(u(),_(re,{key:2})):y("",!0)])),_:1})])),_:1})],64)}}};export{pe as default};
