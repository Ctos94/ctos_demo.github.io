import{_ as e,a2 as a,k as l,G as t,v as n,r as i,o as d,c as o,a as u,w as s,f as r,a3 as c,a4 as p,H as v,t as m,K as g,e as f,s as h,a5 as _,g as y,F as x,l as k,A as j,L as C,b,x as w,h as V,y as P,q as I,D as T,$ as O,p as U,i as N,u as S,j as A,a6 as M}from"./index-273db4d9.js";import{a as $}from"./common-5afeacdf.js";const D=e({__name:"Projects",props:{projects:{type:Array,default:function(){return[]}}},setup(e){const C=a("currentProjectId"),b=a("addProject",(()=>{})),w=a("showProject",(()=>{})),V=a("showProjectSetting",(()=>{})),P=l(!1),I=l({}),T=l(!1),O=l(!1),U=()=>{I.value.name&&(O.value=!0,k.post({url:j.plan.project.create,data:I.value,loading:{target:"#project_title"}}).then((e=>{b(e),P.value=!1})).finally((()=>{O.value=!1})))};return t(P,(e=>{e||(I.value={})})),t(T,(e=>{e&&n((()=>{const e=document.getElementById(`project-${C.value}`);e&&e.scrollIntoView()}))})),(a,l)=>{const t=i("v-btn"),n=i("v-list-item"),k=i("v-list"),j=i("v-badge"),b=i("v-sheet"),N=i("v-virtual-scroll"),S=i("v-text-field"),A=i("v-card-text"),M=i("v-card"),$=i("v-dialog");return d(),o(x,null,[u(k,{class:"pa-0",density:"compact"},{default:s((()=>[u(n,{ripple:!1,title:"项目",onClick:l[2]||(l[2]=e=>T.value=!T.value)},{append:s((()=>[u(t,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:l[0]||(l[0]=r((e=>P.value=!P.value),["stop"])),icon:"mdi-plus"}),u(t,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:l[1]||(l[1]=r((e=>T.value=!T.value),["stop"])),class:c({rotate:T.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),_:1})])),_:1}),u(N,{items:e.projects},{default:s((({item:e,index:a})=>[u(p,{name:"slide-x-reverse-transition"},{default:s((()=>[u(b,{title:e.name},{default:s((()=>[v(u(n,{ripple:!1,title:e.name,id:`project-${e.id}`,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,class:c({item:!0,selected:m(C)==e.id}),value:e,color:"primary",onClick:l=>((e,a)=>{w(e.id,a)})(e,a)},g({append:s((()=>[e.showActions?(d(),f(t,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:r((l=>((e,a)=>{V(e.id,a)})(e,a)),["stop"]),icon:"mdi-cog"},null,8,["onClick"])):h("",!0)])),_:2},[e.ingCount?{name:"prepend",fn:s((()=>[u(j,{class:"mr-1",content:e.ingCount,inline:""},null,8,["content"])])),key:"0"}:void 0]),1032,["title","id","onMouseenter","onMouseleave","class","value","onClick"]),[[_,T.value||m(C)==e.id]])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"]),u($,{persistent:O.value,class:"dialog",modelValue:P.value,"onUpdate:modelValue":l[4]||(l[4]=e=>P.value=e),width:"600px"},{default:s((()=>[u(M,{id:"project_title"},{default:s((()=>[u(A,{class:"pa-3"},{default:s((()=>[u(S,{"hide-details":"",modelValue:I.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value.name=e),density:"compact",variant:"outlined",onKeydown:y(U,["enter"]),label:"项目名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])],64)}}},[["__scopeId","data-v-b5f059df"]]),E=e({__name:"NewPlan",emits:["create"],setup(e,{emit:t}){const n=a("currentProjectId"),o=l(""),c=l(!1),p=l("inputRef"),v=t,m=()=>{p.value.error||k.post({url:j.plan.plan.create,data:{name:o.value,projectId:n.value},json:!0,loading:{target:"#newPlan"}}).then((e=>{v("create",e),o.value="",p.value.blur()}))};return(e,a)=>{const l=i("v-icon"),t=i("v-text-field"),n=i("v-validation"),v=i("v-sheet");return d(),f(v,{id:"newPlan",class:"d-flex justify-center"},{default:s((()=>[u(n,{rules:[e.$validator.required],modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e)},{default:s((({isValid:e})=>[u(t,{error:!!c.value&&!e.value,"onUpdate:focused":a[0]||(a[0]=e=>c.value=!c.value),ref_key:"inputRef",ref:p,"hide-details":"",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),density:"compact",variant:"outlined",onKeydown:y(m,["enter"]),placeholder:"将任务添加到列表顶部"},g({_:2},[o.value?{name:"append-inner",fn:s((()=>[u(l,{onClick:r(m,["stop"]),icon:"mdi-plus"})])),key:"0"}:void 0]),1032,["error","modelValue"])])),_:1},8,["rules","modelValue"])])),_:1})}}},[["__scopeId","data-v-5149f10b"]]),H={key:0,class:"xx"},J=e({__name:"PlanActions",props:{plan:{type:Object,required:!0},show:{type:Boolean,default:!1}},emits:["handleAction"],setup(e,{emit:a}){const l=e,t=a,n=C((()=>l.plan?$(new Date(l.plan.deadline),"MM-dd"):"")),c=e=>{t("handleAction",e)};return(a,l)=>{const t=i("v-divider"),p=i("v-btn"),v=i("v-icon"),m=i("v-sheet");return d(),f(m,{class:"d-flex actions-sheet"},{default:s((()=>[e.show?(d(),o("div",H,[u(t,{class:"border-opacity-30 mx-1",inset:"",vertical:""}),e.plan.finished?(d(),o(x,{key:1},[u(p,{ripple:!1,onClick:l[2]||(l[2]=r((e=>c("archived")),["stop"])),title:"归档",class:"action-icon mx-1",color:"blue-grey-lighten-2",icon:"mdi-folder-file-outline",variant:"text"}),u(p,{ripple:!1,onClick:l[3]||(l[3]=r((e=>c("again")),["stop"])),title:"重新开始计划",class:"action-icon",color:"blue-grey-lighten-2",icon:"mdi-arrow-u-left-top",variant:"text"})],64)):(d(),o(x,{key:0},[u(p,{ripple:!1,onClick:l[0]||(l[0]=r((e=>c("complete")),["stop"])),title:"标记为完成",class:"action-icon mx-1",icon:"mdi-check",variant:"text"}),u(p,{ripple:!1,onClick:l[1]||(l[1]=r((e=>c("setting")),["stop"])),title:"显示其他信息",class:"action-icon mr-1",icon:"mdi-dots-vertical",variant:"text"})],64))])):h("",!0),!e.plan.finished&&e.plan.deadline?(d(),f(m,{key:1,class:"d-flex justify-center align-center"},{default:s((()=>[u(p,{ripple:!1,onClick:l[4]||(l[4]=r((e=>c("deadline")),["stop"])),class:"action-icon deadline-btn",icon:"",title:"编辑提醒",variant:"text"},{default:s((()=>[u(v,{icon:"mdi-alarm"}),u(m,{class:"deadline-text"},{default:s((()=>[b(w(n.value),1)])),_:1})])),_:1})])),_:1})):h("",!0)])),_:1})}}},[["__scopeId","data-v-473f72fb"]]),F={__name:"Tag",props:{icon:{type:String,default:"mdi-circle"},text:{type:String,default:""}},setup:e=>(a,l)=>{const t=i("v-icon"),n=i("v-sheet");return d(),f(n,{class:"d-flex align-center mr-2"},{default:s((()=>[u(t,{color:"primary",icon:e.icon,style:{fontSize:"15px",marginTop:"2px",marginRight:"2px"}},null,8,["icon"]),V("div",null,w(e.text),1)])),_:1})}},L={key:0,class:"d-flex flex-wrap"},R={__name:"PlanTags",props:{planTags:{type:Array,default:()=>[]}},setup(e){const l=a("tags"),t=e,n=C((()=>0===t.planTags.length));return(a,t)=>n.value?h("",!0):(d(),o("div",L,[(d(!0),o(x,null,P(e.planTags,(e=>{return d(),f(F,{key:e,text:(a=e,l.value.filter((e=>e.id===a))[0].name)},null,8,["text"]);var a})),128))]))}},q=[{color:"#E53935",text:"高优先级",value:"HIGH"},{color:"#FFA726",text:"中优先级",value:"MIDDLE"},{color:"#42A5F5",text:"低优先级",value:"LOW"},{color:"",text:"无优先级",value:"NONE"}],B=e=>e?q.filter((a=>a.value===e))[0]:{color:"",text:"无优先级",value:"NONE"},K={style:{"line-height":"31px"}},G=e({__name:"Plan",props:{data:{type:Object},index:{type:Number}},emits:["update","right-click","handle-deadline","handle-tags","delete"],setup(e,{emit:n}){const o=a("handleProjectIngCount"),p=e,v=n,g=l(!1),_=l(!1),x=l(JSON.parse(JSON.stringify(p.data))),b=l(null),P=a("tags"),I=C((()=>{if(!p.data.tags)return[];let e=P.value.map((e=>e.id));return p.data.tags.filter((a=>e.indexOf(a)>=0))})),T=()=>{_.value&&!b.value.error&&k.put({url:j.plan.plan.update,data:x.value,json:!0,loading:{target:`#plan-${p.data.id}`}}).then((()=>{v("update",x.value,p.index),_.value=!1}))},O=()=>{p.data.finished||(_.value=!0,g.value=!1)},U=e=>{switch(e){case"complete":N();break;case"again":S();break;case"deadline":v("handle-deadline",p.index);break;case"setting":v("right-click",p.index);break;case"archived":A()}},N=()=>{k.post({url:j.plan.plan.finished,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{v("update",{...p.data,finished:!0},p.index),o(-1)}))},S=()=>{k.post({url:j.plan.plan.again,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{v("update",{...p.data,finished:!1,deadline:null},p.index),o(1)}))},A=()=>{k.post({url:j.plan.plan.archived,data:{id:p.data.id},loading:{target:`#plan-${p.data.id}`}}).then((()=>{v("delete",p.index)}))},M=()=>{_.value=!1,x.value=JSON.parse(JSON.stringify(p.data))};return t((()=>p.data),(e=>{x.value=JSON.parse(JSON.stringify(e))}),{deep:!0}),(a,l)=>{const t=i("v-icon"),n=i("v-list-item"),o=i("v-text-field"),p=i("v-validation"),k=i("v-sheet");return d(),f(k,{class:"d-flex align-center"},{default:s((()=>[e.data.flag&&"NONE"!=e.data.flag?(d(),f(t,{key:0,class:"pointer",title:m(B)(e.data.flag).text,color:m(B)(e.data.flag).color,style:{position:"absolute",left:"-34px"},icon:"mdi-flag-outline"},null,8,["title","color"])):h("",!0),_.value?(d(),f(n,{key:2,width:"100%",class:"pa-0 my-2","min-height":"40"},{default:s((()=>[u(p,{modelValue:x.value.name,"onUpdate:modelValue":l[4]||(l[4]=e=>x.value.name=e),rules:[a.$validator.required]},{default:s((({isValid:e})=>[u(o,{ref_key:"nameRef",ref:b,error:!e.value,modelValue:x.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>x.value.name=e),"hide-details":"",autofocus:"",onKeyup:[y(T,["enter"]),y(M,["esc"])],onBlur:T,density:"compact",variant:"outlined"},null,8,["error","modelValue"])])),_:1},8,["modelValue","rules"])])),_:1})):(d(),f(n,{key:1,width:"100%",class:c(["pr-2",{"plan-item py-0 my-2 rounded pointer":!0,"warning-deadline":!e.data.finished&&e.data.expired}]),onMouseenter:l[1]||(l[1]=e=>g.value=!0),onMouseleave:l[2]||(l[2]=e=>g.value=!1),onClick:O,ripple:!1},{title:s((()=>[V("span",K,w(e.data.name),1)])),subtitle:s((()=>[u(R,{onClick:l[0]||(l[0]=r((e=>v("handle-tags")),["stop"])),planTags:I.value},null,8,["planTags"])])),append:s((()=>[u(J,{onHandleAction:U,plan:e.data,show:g.value},null,8,["plan","show"])])),_:1},8,["class"]))])),_:1})}}},[["__scopeId","data-v-ea7af619"]]),z=e({__name:"DatePicker",props:{data:{type:Object},index:{type:Number}},emits:["update","cancel"],setup(e,{emit:a}){const t=e,n=a,o=l(null);I((()=>{t.data&&t.data.deadline&&(o.value=new Date(t.data.deadline))}));const r=C((()=>$(new Date((new Date).getTime()+864e5),"yyyy-MM-dd"))),c=()=>{o&&v({...t.data,deadline:$(o.value,"yyyy-MM-dd")})},p=()=>{v({...t.data,deadline:null})},v=e=>{k.put({url:j.plan.plan.update,data:e,json:!0}).then((()=>{n("update",e,t.index),m()}))},m=()=>{n("cancel")};return(a,l)=>{const t=i("v-date-picker"),n=i("v-card-text"),v=i("v-icon"),g=i("v-btn"),_=i("v-card-actions"),y=i("v-card");return d(),f(y,{class:"date-picker"},{default:s((()=>[u(n,{class:"pa-0"},{default:s((()=>[u(t,{style:{width:"100%"},"show-adjacent-months":"",min:r.value,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e)},null,8,["min","modelValue"])])),_:1}),u(_,null,{default:s((()=>[u(g,{title:"取消",onClick:m},{default:s((()=>[u(v,{icon:"mdi-close"})])),_:1}),e.data&&e.data.deadline?(d(),f(g,{key:0,title:"取消提醒",color:"primary",onClick:p},{default:s((()=>[u(v,{icon:"mdi-alarm-off"})])),_:1})):h("",!0),u(g,{title:"设置提醒",color:"primary",onClick:c},{default:s((()=>[u(v,{icon:"mdi-alarm"})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-cb67c989"]]),W={__name:"TagSelect",props:{data:{type:Object}},emits:["cancel"],setup(e,{emit:t}){const n=e,o=t,c=a("tags"),p=l(null),v=l(null),h=a("addTag",(()=>{})),_=C((()=>{if(!n.data.tags)return[];let e=c.value.map((e=>e.id));return n.data.tags.filter((a=>e.indexOf(a)>=0))})),y=()=>{v.value.blur(),k.post({url:j.plan.tag.create,data:{name:p.value},loading:{target:"#tag_autocomplete"}}).then((e=>{h(e),x(e)}))},x=e=>{v.value.blur(),k.post({url:j.plan.plan.addTag,data:{id:n.data.id,tagId:e.id},loading:{target:"#tag_autocomplete"}}).then((()=>{n.data.tags.push(e.id)}))};return(e,a)=>{const l=i("v-icon"),t=i("v-chip"),h=i("v-list-item"),C=i("v-autocomplete"),V=i("v-card-text"),P=i("v-btn"),I=i("v-card-actions"),T=i("v-card");return d(),f(T,{title:"编辑标签"},{default:s((()=>[u(V,{id:"tag_autocomplete"},{default:s((()=>[u(C,{density:"compact","hide-selected":"","hide-details":"",search:p.value,ref_key:"tagRef",ref:v,modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e),"onUpdate:search":a[1]||(a[1]=e=>p.value=e),multiple:"",chips:"","item-title":"name","item-value":"id",items:m(c)},g({chip:s((({item:e})=>[u(t,null,{default:s((()=>[b(w(e.title)+" ",1),u(l,{style:{margin:"2px 0 0 2px"},icon:"mdi-close-circle",onClick:r((a=>{return l=e,v.value.blur(),void k.delete({url:j.plan.plan.deleteTag,data:{id:n.data.id,tagId:l.value},loading:{target:"#tag_autocomplete"}}).then((()=>{n.data.tags=n.data.tags.filter((e=>e!==l.value))}));var l}),["stop"])},null,8,["onClick"])])),_:2},1024)])),item:s((({item:e})=>[u(h,{onClick:r((a=>x(e.raw)),["stop"]),title:e.title},null,8,["onClick","title"])])),_:2},[p.value?{name:"no-data",fn:s((()=>[u(h,{onClick:r(y,["stop"]),title:`创建标签 '${p.value}'`},null,8,["title"])])),key:"0"}:void 0]),1032,["search","modelValue","items"])])),_:1}),u(I,null,{default:s((()=>[u(P,{onClick:a[2]||(a[2]=e=>o("cancel"))},{default:s((()=>[u(l,{icon:"mdi-close"})])),_:1})])),_:1})])),_:1})}}},X=e({__name:"PlanFlag",props:{plan:Object},emits:["selected"],setup(e,{emit:a}){const l=e,t=a,n=C((()=>B(l.plan.flag).color));return(e,a)=>{const l=i("v-btn-text"),c=i("v-icon"),p=i("v-list-item"),v=i("v-list"),g=i("v-menu");return d(),f(g,{class:"flag-menu"},{activator:s((({props:e})=>[u(l,T({title:"优先级",color:n.value,icon:"mdi-flag-outline"},e),null,16,["color"])])),default:s((()=>[u(v,{class:"pa-0"},{default:s((()=>[(d(!0),o(x,null,P(m(q),((e,a)=>(d(),f(p,{key:a,title:e.text,ripple:!1,onClick:r((a=>t("selected",e.value)),["stop"])},{prepend:s((()=>[u(c,{icon:"mdi-flag-outline",color:e.color},null,8,["color"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-89524109"]]),Q={__name:"PlanDrawer",props:{plan:Object},emits:["handleEvent"],setup(e,{emit:a}){const l=a,t=(e,a)=>{l("handleEvent",e,a)};return(a,l)=>{const n=i("v-list-item"),o=i("v-list"),c=i("v-card-text"),p=i("v-card");return d(),f(p,{width:"280"},{default:s((()=>[u(c,{class:"pa-0"},{default:s((()=>[u(o,{class:"pa-0"},{default:s((()=>[u(n,{onClick:l[1]||(l[1]=r((e=>t("deadline")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-alarm",title:e.plan.deadline||"设置期限"},{append:s((()=>[u(X,{onSelected:l[0]||(l[0]=e=>{t("flag",{value:e})}),plan:e.plan},null,8,["plan"])])),_:1},8,["title"]),u(n,{onClick:l[2]||(l[2]=r((e=>t("tag")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-tag-multiple-outline",title:"编辑标签"}),u(n,{onClick:l[3]||(l[3]=r((e=>t("delete")),["stop"])),style:{color:"#E53935"},elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-trash-can-outline",title:"删除"})])),_:1})])),_:1})])),_:1})}}},Y=(e=>(U("data-v-026f3079"),e=e(),N(),e))((()=>V("p",null,"没有计划任务",-1))),Z=["id"],ee=e({__name:"ProjectContent",setup(e){const t=a("currentProjectId"),n=a("handleProjectIngCount",(()=>{})),p=l([]),v=l(!1),g=l(!1),_=l(-1),y=l(!1),w=l(!1),V=C((()=>p.value.filter((e=>!e.finished)).length>0)),T=C((()=>p.value.filter((e=>e.finished)).length>0)),U=C((()=>p.value.filter((e=>e.finished)).length));I((()=>{N()}));const N=()=>{t.value&&k.get({url:j.plan.plan.list,params:{projectId:t.value},loading:!0}).then((e=>{p.value=e}))},S=e=>{p.value.splice(0,0,e),n(1)},A=e=>{v.value||(v.value=!0,_.value=e)},M=(e,a={})=>{switch(e){case"deadline":g.value=!0;break;case"tag":w.value=!0;break;case"delete":let e=p.value[_.value].id;O({message:"是否要删除该计划？"}).then((()=>{k.delete({url:j.plan.plan.delete,data:{id:e},loading:{target:`#plan-${e}`}}).then((()=>{p.value.splice(_.value,1),n(-1)}))})).catch((()=>{}));break;case"flag":k.put({url:j.plan.plan.setFlag,data:{id:p.value[_.value].id,flag:a.value}}).then((()=>{p.value[_.value].flag=a.value}))}v.value=!1},$=(e,a)=>{p.value.splice(a,1,e)},D=e=>{p.value.splice(e,1)};return(e,a)=>{const l=i("v-sheet"),n=i("v-list"),k=i("v-btn"),j=i("v-list-item"),C=i("v-dialog"),I=i("v-container");return d(),f(I,{id:"plans",style:{width:"70%"}},{default:s((()=>[m(t)?(d(),f(l,{key:1},{default:s((()=>[u(E,{onCreate:S}),u(l,{class:"d-flex justify-center text-h5 mt-10"},{default:s((()=>[b(" 进行中的计划 ")])),_:1}),V.value?h("",!0):(d(),f(l,{key:0,class:"d-flex justify-center mt-2 mb-8"},{default:s((()=>[b(" 目前还没有进行中的计划 ")])),_:1})),u(n,{style:{overflow:"visible"}},{default:s((()=>[(d(!0),o(x,null,P(p.value,((e,a)=>(d(),o(x,{key:a},[e.finished?h("",!0):(d(),o("div",{key:0,id:`plan-${e.id}`},[u(G,{data:e,index:a,onHandleTags:e=>(e=>{_.value=e,w.value=!0})(a),onHandleDeadline:e=>(e=>{_.value=e,g.value=!0})(a),onRightClick:A,onUpdate:$},null,8,["data","index","onHandleTags","onHandleDeadline"])],8,Z))],64)))),128))])),_:1}),T.value?(d(),f(l,{key:1},{default:s((()=>[u(l,{class:"d-flex justify-center text-h5 mt-10"},{default:s((()=>[b(" 完成的计划 ")])),_:1}),u(n,null,{default:s((()=>[(d(!0),o(x,null,P(p.value,((e,a)=>{return d(),o(x,{key:a},[e.finished&&(t=e.id,p.value.filter((e=>e.finished)).map((e=>e.id)).splice(0,3).indexOf(t)>=0)||e.finished&&y.value?(d(),f(l,{key:0,id:`plan-${e.id}`},{default:s((()=>[u(G,{class:"text-disabled",data:e,index:a,onDelete:D,onUpdate:$},null,8,["data","index"])])),_:2},1032,["id"])):h("",!0)],64);var t})),128)),U.value>3?(d(),f(j,{key:0,style:{marginTop:"-10px"},class:"d-flex justify-center"},{default:s((()=>[u(k,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:a[0]||(a[0]=r((e=>y.value=!y.value),["stop"])),class:c({rotate:y.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),_:1})):h("",!0)])),_:1})])),_:1})):h("",!0)])),_:1})):(d(),f(l,{key:0,class:"d-flex justify-center"},{default:s((()=>[Y])),_:1})),u(C,{modelValue:g.value,"onUpdate:modelValue":a[2]||(a[2]=e=>g.value=e),width:"400"},{default:s((()=>[u(z,{data:p.value[_.value],index:_.value,onCancel:a[1]||(a[1]=e=>g.value=!1),onUpdate:$},null,8,["data","index"])])),_:1},8,["modelValue"]),u(C,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=e=>w.value=e),width:"600"},{default:s((()=>[u(W,{data:p.value[_.value],onCancel:a[3]||(a[3]=e=>w.value=!1)},null,8,["data"])])),_:1},8,["modelValue"]),u(C,{fullscreen:"",modelValue:v.value,"onUpdate:modelValue":a[5]||(a[5]=e=>v.value=e),width:"auto",class:"rigth-drawer",transition:"slide-x-reverse-transition"},{default:s((()=>[u(Q,{onHandleEvent:M,plan:p.value[_.value]},null,8,["plan"])])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-026f3079"]]),ae=e({__name:"ProjectSetting",setup(e){const t=a("currentProjectId"),n=a("currentProjectIndex"),o=a("reload"),r=a("updateProject"),c=l({}),p=l(!1);I((()=>{v()}));const v=()=>{k.get({url:j.plan.project.detail,params:{id:t.value},loading:!0}).then((e=>{c.value=e}))},m=()=>{O({message:"删除后数据无法找回，确定要删除吗？",beforeClose:(e,a,l)=>{"confirm"===e?(a.confirmButtonLoading=!0,k.delete({url:j.plan.project.delete,data:{id:t.value}}).then((()=>{l()}))):l()}}).then((()=>{o()})).catch((()=>{}))};return(e,a)=>{const l=i("v-btn"),o=i("v-text-field"),v=i("v-confirm-edit"),g=i("v-sheet"),_=i("v-container");return d(),f(_,null,{default:s((()=>[u(g,{id:"setting"},{default:s((()=>[u(g,{class:"confirm-edit"},{default:s((()=>[u(v,{modelValue:c.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value.name=e),ref:"edit"},{default:s((({model:i,actions:p,isPristine:v})=>[u(o,{rules:[e.$validator.required],"hide-details":"",density:"compact",variant:"outlined",label:"项目名称",modelValue:i.value,"onUpdate:modelValue":e=>i.value=e},{append:s((()=>[u(l,{class:"update_btn",color:"blue-lighten-1",onClick:()=>{var e;v||(e=i.value)&&k.put({url:j.plan.project.update,data:{id:t.value,name:e},loading:{target:".update_btn"},json:!0}).then((()=>{c.value.name=e,r(c.value,n.value,["name"])}))},text:"重命名"},null,8,["onClick"]),v?h("",!0):(d(),f(l,{key:0,class:"ml-2 update_btn",color:"grey-lighten-3",onClick:a[0]||(a[0]=a=>e.$refs.edit.cancel()),text:"取消"}))])),_:2},1032,["rules","modelValue","onUpdate:modelValue"])])),_:1},8,["modelValue"])])),_:1}),u(l,{loading:p.value,ripple:!1,"prepend-icon":"mdi-alert",class:"mt-4","max-width":"300",color:"red-lighten-2",text:"删除项目",variant:"outlined",onClick:m},null,8,["loading"])])),_:1})])),_:1})}}},[["__scopeId","data-v-696ef679"]]),le=e({__name:"Tags",props:{tags:{type:Array,default:function(){return[]}}},setup(e){const n=a("addTag",(()=>{})),v=a("updateTag",(()=>{})),m=a("deleteTag",(()=>{})),g=l(!1),_=l({}),C=l(!1),b=l(!1),w=l(-1),V=()=>{_.value.name&&(b.value=!0,_.value.id?k.put({url:j.plan.tag.update,data:_.value,loading:{target:"#tag_dialog"}}).then((e=>{v(_.value,w.value,["name"]),g.value=!1})).finally((()=>{b.value=!1})):k.post({url:j.plan.tag.create,data:_.value,loading:{target:"#tag_dialog"}}).then((e=>{n(e),g.value=!1})).finally((()=>{b.value=!1})))};return t(g,(e=>{e||(_.value={},w.value=-1)})),(a,l)=>{const t=i("v-btn"),n=i("v-list-item"),v=i("v-list"),P=i("v-icon"),I=i("v-sheet"),T=i("v-virtual-scroll"),U=i("v-text-field"),N=i("v-card-text"),S=i("v-card"),A=i("v-dialog");return d(),o(x,null,[u(v,{class:"pa-0"},{default:s((()=>[u(n,{density:"compact",ripple:!1,title:"标签",onClick:l[2]||(l[2]=e=>C.value=!C.value)},{append:s((()=>[u(t,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:l[0]||(l[0]=r((e=>g.value=!g.value),["stop"])),icon:"mdi-plus"}),u(t,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:l[1]||(l[1]=r((e=>C.value=!C.value),["stop"])),class:c({rotate:C.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),_:1})])),_:1}),C.value?(d(),f(T,{key:0,items:e.tags},{default:s((({item:e,index:a})=>[u(p,{name:"slide-x-reverse-transition"},{default:s((()=>[u(I,{title:e.name},{default:s((()=>[u(n,{ripple:!1,title:e.name,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,value:e,onClick:l=>((e,a)=>{w.value=a,_.value=JSON.parse(JSON.stringify(e)),g.value=!0})(e,a)},{prepend:s((()=>[u(P,{class:"pr-2",icon:"mdi-tag-outline"})])),append:s((()=>[e.showActions?(d(),f(t,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,icon:"mdi-close",onClick:r((l=>((e,a)=>{O({width:450,message:`删除后，所有任务中的标签“${e.name}”都将被移除。`,beforeClose:(a,l,t)=>{"confirm"===a?(l.confirmButtonLoading=!0,k.delete({url:j.plan.tag.delete,data:{id:e.id}}).then((()=>{t()}))):t()}}).then((()=>{m(a)})).catch((()=>{}))})(e,a)),["stop"])},null,8,["onClick"])):h("",!0)])),_:2},1032,["title","onMouseenter","onMouseleave","value","onClick"])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"])):h("",!0),u(A,{persistent:b.value,class:"dialog",modelValue:g.value,"onUpdate:modelValue":l[4]||(l[4]=e=>g.value=e),width:"600px"},{default:s((()=>[u(S,{id:"tag_dialog"},{default:s((()=>[u(N,{class:"pa-3"},{default:s((()=>[u(U,{"hide-details":"",modelValue:_.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>_.value.name=e),density:"compact",variant:"outlined",onKeydown:y(V,["enter"]),label:"标签名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])],64)}}},[["__scopeId","data-v-a6141e69"]]),te={__name:"Index",setup(e){const a=S(),t=l("projectContent"),r=l([]),c=l([]),p=l(void 0),v=l(-1);A((()=>{a.commit("update_header_active","PLAN_INDEX")})),I((()=>{m(),g()}));const m=()=>{k.get({url:j.plan.project.list,loading:!0}).then((e=>{r.value=e,e.length>0?(p.value=e[0].id,v.value=0):(v.value=-1,p.value=void 0)}))},g=()=>{k.get({url:j.plan.tag.list,loading:!0}).then((e=>{c.value=e}))};return M("currentProjectId",p),M("currentProjectIndex",v),M("reload",(()=>{t.value="projectContent",n((()=>{m()}))})),M("addProject",(e=>{r.value.splice(0,0,e),p.value=e.id,v.value=0})),M("updateProject",((e,a,l)=>{l&&l.length>0?l.forEach((l=>{r.value[a][l]=e[l]})):r.value.splice(a,1,e)})),M("showProject",((e,a)=>{p.value=e,v.value=a,t.value="projectContent"})),M("showProjectSetting",((e,a)=>{p.value=e,v.value=a,t.value="projectSetting"})),M("handleProjectIngCount",(e=>{void 0===r.value[v.value].ingCount&&(r.value[v.value].ingCount=0),e<0&&r.value[v.value].ingCount<=0||(r.value[v.value].ingCount+=e)})),M("addTag",(e=>{c.value.splice(0,0,e)})),M("updateTag",((e,a,l)=>{l&&l.length>0?l.forEach((l=>{c.value[a][l]=e[l]})):c.value.splice(a,1,e)})),M("deleteTag",(e=>{c.value.splice(e,1)})),M("tags",c),(e,a)=>{const l=i("v-divider"),n=i("v-navigation-drawer"),v=i("v-container"),m=i("v-main");return d(),o(x,null,[u(n,{width:"300"},{default:s((()=>[u(D,{projects:r.value},null,8,["projects"]),u(l,{class:"my-2",style:{width:"80%","margin-left":"10%"}}),u(le,{tags:c.value},null,8,["tags"])])),_:1}),u(m,null,{default:s((()=>[u(v,null,{default:s((()=>["projectContent"==t.value?(d(),f(ee,{key:p.value})):h("",!0),"projectSetting"==t.value?(d(),f(ae,{key:p.value})):h("",!0)])),_:1})])),_:1})],64)}}};export{te as default};
