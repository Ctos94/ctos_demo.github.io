import{_ as e,r as t,o as l,e as a,w as i,d as n,f as s,H as o,a as d,F as u,s as r,z as m,h as c,t as p,A as h,p as v,k as f,l as y,M as b,q as g,G as k,I as V,i as _,j as x,n as w}from"./index-34813d37.js";const $=e({name:"TreeSelectItem",inject:["itemTitle","itemValue","expand","itemClick"],props:{item:{}},emits:["expand","node-click"]},[["render",function(e,m,c,p,h,v){const f=t("v-icon"),y=t("v-list-item"),b=t("TreeSelectItem",!0),g=t("v-list-group");return l(),a(g,{value:c.item[v.itemValue],"append-icon":"none"},{activator:i((({isOpen:e})=>[n(y,{onClick:m[1]||(m[1]=s((e=>v.itemClick(c.item)),["stop"])),title:c.item[v.itemTitle],value:c.item[v.itemValue]},o({_:2},[c.item&&c.item.children&&c.item.children.length>0?{name:"prepend",fn:i((()=>[n(f,{class:"icon",onClick:m[0]||(m[0]=s((e=>v.expand(c.item)),["stop"])),icon:e?"mdi-menu-down":"mdi-menu-right"},null,8,["icon"])])),key:"0"}:void 0]),1032,["title","value"])])),default:i((()=>[(l(!0),d(u,null,r(c.item.children,((e,t)=>(l(),a(b,{key:t,item:e},null,8,["item"])))),128))])),_:1},8,["value"])}],["__scopeId","data-v-027e0602"]]);const C=e({components:{TreeSelectItem:$},provide(){return{itemTitle:m((()=>this.itemTitle)),itemValue:m((()=>this.itemValue)),expand:this.expand,itemClick:this.handleNodeClick}},props:{label:{type:String,default:"Select"},items:{type:Array,default:function(){return[]}},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},modelValue:""},emits:["update:modelValue"],data:()=>({value:[],opened:[]}),methods:{expand(e){let t=this.opened.indexOf(e[this.itemValue]);-1!=t?this.opened.splice(t,1):this.opened.push(e[this.itemValue])},handleNodeClick(e){this.value=[e]}},watch:{value(e){this.$emit("update:modelValue",e?e[0][this.itemValue]:""),this.$refs.select&&this.$refs.select.blur()}}},[["render",function(e,s,o,d,u,r){const m=$,h=t("v-list"),v=t("v-select");return l(),a(v,{ref:"select",label:o.label,modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=t=>e.value=t),items:o.items,clearable:""},{selection:i((({item:e})=>[c("span",null,p(e[o.itemTitle]),1)])),item:i((({item:t})=>[n(h,{opened:e.opened,"onUpdate:opened":s[0]||(s[0]=t=>e.opened=t),density:"compact"},{default:i((()=>[n(m,{item:t.raw},null,8,["item"])])),_:2},1032,["opened"])])),_:1},8,["label","modelValue","items"])}],["__scopeId","data-v-b63ca5a3"]]);const I=e({components:{TreeSelect:C},props:{parents:{type:Array,default:function(){return[]}}},emits:["submited"],data:()=>({visible:!1,submit_loading:!1,form:{}}),computed:{parents$:{get(){return function e(t){return t.reduce(((t,l)=>("PAGE"!=l.type&&(l.children&&l.children.length>0&&(l.children=e(l.children)),t.push(l)),t)),[])}(JSON.parse(JSON.stringify(this.parents)))}},parentId$:{get(){return this.form.parentId},set(e){this.form.parentId=e||null}}},methods:{edit(e){this.form={...e},this.visible=!0},async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.submit_loading=!0,this.$request.execute({method:this.form.id?"put":"post",url:this.form.id?h.system.menu.update:h.system.menu.create,data:this.form,json:!0}).then((()=>{this.visible=!1,this.$emit("submited")})).finally((()=>{this.submit_loading=!1})))}},watch:{visible(e){e||(this.$refs.form.reset(),this.form={})}}},[["render",function(e,o,r,m,c,p){const h=t("v-btn"),f=t("v-text-field"),y=t("v-col"),b=t("v-row"),g=t("v-select"),k=C,V=t("v-card-text"),_=t("v-spacer"),x=t("v-btn-text"),w=t("v-card-actions"),$=t("v-card"),I=t("v-form"),T=t("v-dialog");return l(),d(u,null,[n(h,{onClick:o[0]||(o[0]=e=>c.visible=!0),color:"blue-lighten-1",text:"添加菜单"}),n(T,{modelValue:c.visible,"onUpdate:modelValue":o[9]||(o[9]=e=>c.visible=e),"max-width":"600"},{default:i((()=>[n(I,{onSubmit:o[8]||(o[8]=s((()=>{}),["prevent"])),ref:"form"},{default:i((()=>[n($,null,{default:i((()=>[n(V,null,{default:i((()=>[n(b,{class:"mt-0"},{default:i((()=>[n(y,null,{default:i((()=>[n(f,{label:"名称",rules:[e.$validator.required],modelValue:c.form.title,"onUpdate:modelValue":o[1]||(o[1]=e=>c.form.title=e)},null,8,["rules","modelValue"])])),_:1}),n(y,null,{default:i((()=>[n(f,{rules:[e.$validator.required,e.$validator.integer],label:"排序号",modelValue:c.form.sort,"onUpdate:modelValue":o[2]||(o[2]=e=>c.form.sort=e)},null,8,["rules","modelValue"])])),_:1})])),_:1}),n(b,{class:"mt-0"},{default:i((()=>[n(y,null,{default:i((()=>[n(g,{rules:[e.$validator.required],items:[{title:"菜单",value:"MENU"},{title:"页面",value:"PAGE"}],modelValue:c.form.type,"onUpdate:modelValue":o[3]||(o[3]=e=>c.form.type=e),label:"类型"},null,8,["rules","modelValue"])])),_:1})])),_:1}),c.form.id?v("",!0):(l(),a(k,{key:0,itemTitle:"title",itemValue:"id",label:"上级菜单",items:p.parents$,modelValue:p.parentId$,"onUpdate:modelValue":o[4]||(o[4]=e=>p.parentId$=e)},null,8,["items","modelValue"])),n(f,{rules:[e.$validator.required],label:"代码",modelValue:c.form.code,"onUpdate:modelValue":o[5]||(o[5]=e=>c.form.code=e)},null,8,["rules","modelValue"]),n(f,{label:"路径",modelValue:c.form.path,"onUpdate:modelValue":o[6]||(o[6]=e=>c.form.path=e)},null,8,["modelValue"])])),_:1}),n(w,null,{default:i((()=>[n(_),n(x,{text:"取消",onClick:o[7]||(o[7]=e=>c.visible=!1)}),n(x,{disabled:c.submit_loading,loading:c.submit_loading,color:"primary",text:"保存",onClick:p.submit},null,8,["disabled","loading","onClick"])])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue"])],64)}]]),T={__name:"MenuPermissionDialog",setup(e,{expose:s}){const o=[{key:"summary",width:"200",title:"说明",sortable:!1},{key:"code",title:"代码",width:"350",sortable:!1},{key:"methods",width:"140",title:"Method",sortable:!1},{key:"api",title:"API",width:"300",sortable:!1}],d=f(""),u=f(null),r=f(!1),m=f([]),c=f([]),p=e=>m.value.includes(e),v=()=>{y.post({url:h.system.menu.set_permissions,data:{menuId:u.value,codes:m.value},json:!0,loading:{target:"#permission"}}).then((()=>{b.success("保存成功")}))},k=async()=>{await y.get({url:h.system.permission.codes}).then((e=>{c.value=e}))},V=async()=>{await y.get({url:h.system.menu.permissions,params:{menuId:u.value},loading:{target:"#permission"}}).then((e=>{m.value=e}))};return s({show:e=>{u.value=e,r.value=!0,g((()=>{k(),V()}))}}),(e,s)=>{const u=t("v-text-field"),h=t("v-checkbox-btn"),f=t("v-data-table-virtual"),y=t("v-card-text"),b=t("v-btn-text"),g=t("v-card-actions"),k=t("v-card"),V=t("v-dialog");return l(),a(V,{scrollable:"",class:"dialog",modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=e=>r.value=e),"max-width":"1200px"},{default:i((()=>[n(k,{id:"permission"},{default:i((()=>[n(y,{class:"pb-0"},{default:i((()=>[n(u,{clearable:"",density:"compact",modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),label:"Search","prepend-inner-icon":"mdi-magnify",variant:"outlined","hide-details":"","single-line":""},null,8,["modelValue"]),n(f,{search:d.value,"show-select":"",items:c.value,headers:o,"hide-default-footer":"","hide-default-header":""},{"item.data-table-select":i((({item:e})=>[n(h,{"onUpdate:modelValue":t=>{return l=e.code,void(p(l)?m.value=m.value.filter((e=>e!==l)):m.value.push(l));var l},"model-value":p(e.code)},null,8,["onUpdate:modelValue","model-value"])])),_:1},8,["search","items"])])),_:1}),n(g,null,{default:i((()=>[n(b,{color:"primary",text:"保存",onClick:v})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}},U={key:2,style:"margin-left: 36px"};const S=e({name:"TreeTableItem",props:{columns:{type:Array},item:{type:Object},loop:{type:Number,default:0}},computed:{columns_(){return this.columns.filter((e=>e.key))}},data:()=>({expand:!1})},[["render",function(e,n,o,m,h,f){const y=t("v-btn"),b=t("TreeTableItem",!0);return l(),d(u,null,[c("tr",null,[(l(!0),d(u,null,r(f.columns_,((e,t)=>(l(),d("td",{key:t,style:k({textAlign:e.align})},[0==t?(l(),d(u,{key:0},[o.loop&&o.loop>0?(l(),d("span",{key:0,style:k(`margin-left: ${15*o.loop}px`)},null,4)):v("",!0),o.item.children&&o.item.children.length>0?(l(),a(y,{key:1,class:"mr-2",density:"compact",onClick:n[0]||(n[0]=s((e=>h.expand=!h.expand),["stop"])),icon:h.expand?"mdi-menu-down":"mdi-menu-right"},null,8,["icon"])):(l(),d("span",U))],64)):v("",!0),c("span",null,p(e.render?e.render(o.item[e.key],o.item):o.item[e.key]),1)],4)))),128)),V(e.$slots,"item.actions",{row:o.item})]),o.item&&o.item.children&&o.item.children.length>0&&h.expand?(l(!0),d(u,{key:0},r(o.item.children,(t=>(l(),a(b,{key:t.id,loop:o.loop+1,item:t,columns:o.columns},{"item.actions":i((({row:t})=>[V(e.$slots,"item.actions",{row:t})])),_:2},1032,["loop","item","columns"])))),128)):v("",!0)],64)}]]),A={components:{TreeTableItem:S},props:{loading:{type:Boolean,default:!1},headers:{type:Array,defalut:()=>[]},items:{type:Array,defalut:()=>[]}},data:()=>({}),mounted(){},methods:{filter:e=>e.filter((e=>e.key))}},j={key:0,class:"data-table-actions",style:{width:"200px"}};const N=e(A,[["render",function(e,a,s,o,m,h){const f=S,y=t("v-data-table-virtual");return l(),d("div",null,[n(y,{loading:s.loading,headers:[...s.headers,{}],items:s.items},{headers:i((({headers:t})=>[c("tr",null,[(l(!0),d(u,null,r(h.filter(t[0]),(e=>(l(),d("th",{key:e.key,style:k({width:`${e.width}px`})},[c("div",{class:"v-data-table-header__content",style:k({justifyContent:e.align})},[c("span",null,p(e.title),1)],4)],4)))),128)),e.$slots["item.actions"]?(l(),d("th",j,a[0]||(a[0]=[c("span",null,null,-1)]))):v("",!0)])])),item:i((({item:t,columns:l})=>[n(f,{item:t,columns:l},{"item.actions":i((({row:t})=>[V(e.$slots,"item.actions",{row:t})])),_:2},1032,["item","columns"])])),_:3},8,["loading","headers","items"])])}]]),q={width:"200"},M={__name:"Menus",setup(e){const a=_(),s=f(!1),o=f([]),u=()=>{s.value=!0,y.get({url:h.system.menu.list}).then((e=>{o.value=e})).finally((()=>{s.value=!1}))};return x((()=>{a.commit("update_sider_active","/system/menus")})),w((()=>{u()})),(e,a)=>{const r=t("v-btn-link");return l(),d("div",null,[n(I,{ref:"menuDialog",onSubmited:u,parents:o.value},null,8,["parents"]),n(T,{ref:"menuPermissionDialog"},null,512),n(N,{headers:[{title:"标题",key:"title",width:180},{title:"类型",key:"type",width:150,align:"center",render:(e,t)=>"MENU"===e?"菜单":"页面"},{title:"路径",key:"path"},{title:"代码",key:"code",width:300}],items:o.value,loading:s.value},{"item.actions":i((({row:t})=>[c("td",q,[n(r,{onClick:l=>e.$refs.menuDialog.edit(t),text:"编辑"},null,8,["onClick"]),n(r,{onClick:l=>e.$refs.menuPermissionDialog.show(t.id),text:"权限管理"},null,8,["onClick"])])])),_:1},8,["headers","items","loading"])])}}};export{M as default};
