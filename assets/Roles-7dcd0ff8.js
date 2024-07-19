import{k as e,G as l,r as t,o as a,c as i,a as s,w as o,f as n,F as d,l as u,A as r,_ as c,e as m,b as h,x as v,s as p,u as f,O as y,j as _,q as g,t as k,$ as b}from"./index-4fc9b8ed.js";const x={__name:"RoleDialog",emits:["submited"],setup(c,{expose:m,emit:h}){const v=e(!1),p=e(!1),f=e({}),y=e(null),_=h,g=async()=>{const{valid:e}=await y.value.validate();e&&(v.value=!0,u.execute({method:f.value.id?"put":"post",url:f.value.id?r.system.role.update:r.system.role.create,data:f.value,json:!0}).then((()=>{p.value=!1,_("submited")})).finally((()=>{v.value=!1})))};return l(p,((e,l)=>{e||(y.value.reset(),f.value={})})),m({edit:e=>{f.value={...e},p.value=!0}}),(e,l)=>{const u=t("v-btn"),r=t("v-text-field"),c=t("v-card-text"),m=t("v-spacer"),h=t("v-btn-text"),_=t("v-card-actions"),k=t("v-card"),b=t("v-form"),x=t("v-dialog");return a(),i(d,null,[s(u,{color:"blue-lighten-1",text:"新增角色",onClick:l[0]||(l[0]=e=>p.value=!0)}),s(x,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=e=>p.value=e),"max-width":"350"},{default:o((()=>[s(b,{onSubmit:l[4]||(l[4]=n((()=>{}),["prevent"])),ref_key:"formRef",ref:y},{default:o((()=>[s(k,null,{default:o((()=>[s(c,null,{default:o((()=>[s(r,{rules:[e.$validator.required],label:"角色名称",modelValue:f.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>f.value.name=e)},null,8,["rules","modelValue"]),s(r,{rules:[e.$validator.required,e.$validator.integer],label:"排序号",modelValue:f.value.sort,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value.sort=e)},null,8,["rules","modelValue"])])),_:1}),s(_,null,{default:o((()=>[s(m),s(h,{text:"取消",onClick:l[3]||(l[3]=e=>p.value=!1)}),s(h,{disabled:v.value,loading:v.value,color:"primary",text:"保存",onClick:g},null,8,["disabled","loading"])])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue"])],64)}}};const V=c({data:()=>({role_id:"",visible:!1,menus:[],selected:[],loading:!1,deep_check:!1}),methods:{init(){this.loading=!0;const e=new Promise(((e,l)=>{this.$request.get({url:r.system.menu.permissions_tree}).then((l=>{e(l)}))})).then((e=>{this.menus=e})),l=new Promise(((e,l)=>{this.$request.get({url:r.system.role.authorization_ids,params:{roleId:this.role_id}}).then((l=>{e(l)}))})).then((e=>{this.selected=e}));Promise.all([e,l]).finally((()=>{this.loading=!1}))},show:function(e){this.role_id=e,this.visible=!0,this.$nextTick((()=>{this.init()}))},isSelected(e){return this.selected.some((l=>l.id===e))},toggleSelect(e){const l=(e,l)=>{let t=this.selected.map((e=>e.id)).indexOf(e.id);l?-1===t&&this.selected.push({id:e.id,type:e.classify}):-1!==t&&this.selected.splice(t,1)},t=(e,a)=>{e&&0!==e.length&&e.forEach((e=>{l(e,a),e.children&&e.children.length>0&&this.deep_check&&t(e.children,a)}))};let a=!this.isSelected(e.id);l(e,a),e.children&&e.children.length>0&&this.deep_check&&t(e.children,a)},save:function(){this.loading=!0,this.$request.post({url:r.system.role.update_authorization,data:{roleId:this.role_id,authorization:this.selected},json:!0}).then((()=>{this.$message.success("保存成功")})).finally((()=>{this.loading=!1}))}},watch:{visible(e){e||(this.selected=[],this.menus=[],this.deep_check=!1)}}},[["render",function(e,l,u,r,c,f){const y=t("v-progress-circular"),_=t("v-overlay"),g=t("v-checkbox"),k=t("v-treeview"),b=t("v-card-text"),x=t("v-switch"),V=t("v-sheet"),w=t("v-btn-text"),C=t("v-card"),S=t("v-dialog");return a(),m(S,{modelValue:c.visible,"onUpdate:modelValue":l[5]||(l[5]=e=>c.visible=e),width:"600",scrollable:""},{default:o((()=>[s(C,null,{actions:o((()=>[s(V,{width:"100%",class:"d-flex justify-space-between pl-5"},{default:o((()=>[s(V,null,{default:o((()=>[s(x,{density:"compact","hide-details":"",modelValue:c.deep_check,"onUpdate:modelValue":l[2]||(l[2]=e=>c.deep_check=e),color:"primary",label:"父子节点关联"},null,8,["modelValue"])])),_:1}),s(V,null,{default:o((()=>[s(w,{onClick:l[3]||(l[3]=e=>c.visible=!1),text:"关闭"}),s(w,{color:"primary",onClick:l[4]||(l[4]=e=>f.save()),text:"确定"})])),_:1})])),_:1})])),default:o((()=>[s(_,{modelValue:c.loading,"onUpdate:modelValue":l[0]||(l[0]=e=>c.loading=e),class:"align-center justify-center"},{default:o((()=>[s(y,{color:"primary",indeterminate:""})])),_:1},8,["modelValue"]),s(b,null,{default:o((()=>[s(k,{density:"compact",items:c.menus,"active-strategy":"classic"},{prepend:o((({item:e})=>[s(g,{density:"compact",onClick:l[1]||(l[1]=n((()=>{}),["stop"])),ripple:!1,"onUpdate:modelValue":l=>f.toggleSelect(e),"model-value":f.isSelected(e.id),"hide-details":!0},null,8,["onUpdate:modelValue","model-value"])])),title:o((({item:e})=>[h(v(e.title||e.name)+" ",1),"PAGE"===e.classify?(a(),i(d,{key:0},[h("[页面]")],64)):p("",!0),"PERMISSION"===e.classify?(a(),i(d,{key:1},[h("[权限]")],64)):p("",!0)])),_:1},8,["items"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}]]),w={__name:"Roles",setup(l){const n=f(),c=y(),m=e(null),h=e(null),v=e(!1),p=[{title:"排序号",key:"sort",width:90,sortable:!1},{title:"角色",key:"name",sortable:!1},{title:"用户数",key:"userCount",width:100,align:"center",sortable:!1},{key:"actions",width:500,align:"center",sortable:!1}],w=e([]),C=()=>{v.value=!0,u.get({url:r.system.role.all}).then((e=>{w.value=e})).finally((()=>{v.value=!1}))};return _((()=>{n.commit("update_sider_active","/system/roles")})),g((()=>{C()})),(e,l)=>{const n=t("v-btn-link"),f=t("v-data-table-virtual");return a(),i(d,null,[s(x,{ref_key:"RoleDialogRef",ref:m,onSubmited:C},null,512),s(V,{ref_key:"UserMenusDialogRef",ref:h},null,512),s(f,{loading:v.value,headers:p,items:w.value},{"item.actions":o((({item:e})=>[s(n,{text:"编辑",onClick:l=>m.value.edit(e)},null,8,["onClick"]),s(n,{onClick:()=>{k(c).push({path:"/system/role/users",query:{id:e.id}})},text:"关联用户"},null,8,["onClick"]),s(n,{onClick:l=>h.value.show(e.id),text:"关联菜单 & 权限"},null,8,["onClick"]),s(n,{onClick:l=>{return t=e.id,void b({message:"是否要删除？",beforeClose:(e,l,a)=>{"confirm"===e?u.delete({url:r.system.role.delete,data:{id:t}}).then((()=>{a()})):a()}}).then((()=>{C()})).catch((()=>{}));var t},text:"删除"},null,8,["onClick"])])),_:1},8,["loading","items"])],64)}}};export{w as default};
