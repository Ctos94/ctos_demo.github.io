import{_ as e,H as i,A as t,o as l,c as s,h as o,b as a,w as r,F as d,M as n,E as p,O as u,G as f,a as c,n as m,e as h,t as g,P as y}from"./index-a8be1886.js";/* empty css                   *//* empty css               *//* empty css                  *//* empty css                 */const A={class:"header"},x={class:"grid-content"},V={class:"dialog-footer"};const _=e({setup(){i().commit("update_sider_openeds","DIABLO4_CORE_AFFIXES")},components:{},data:()=>({dialogBtnLoading:!1,dialogVisible:!1,queryArgs:{keyword:""},importUrl:"",list:[],filterList:[]}),mounted(){this.fetchAffixes()},methods:{importAffix(){this.importUrl&&""!==this.importUrl&&(this.dialogBtnLoading=!0,this.$request.post({url:t.diablo4.core.import_data,data:{url:this.importUrl,type:"AFFIXES"}}).then((()=>{this.fetchAffixes()})).finally((()=>{this.dialogBtnLoading=!1,this.dialogVisible=!1})))},fetchAffixes(){this.$request.get({url:t.diablo4.core.affixes,params:{...this.queryArgs}}).then((e=>{this.list=e,this.$nextTick((()=>{this.filterAffixes()}))}))},filterAffixes(){this.filterList=this.list.filter((e=>{let i=!0;return this.queryArgs.keyword&&(i=e.descTpl.includes(this.queryArgs.keyword)),i}))}},watch:{queryArgs:{handler:"filterAffixes",deep:!0}}},[["render",function(e,i,t,_,k,b){const q=n,w=p,U=y,L=u,C=f;return l(),s(d,null,[o("div",A,[a(q,{style:{width:"300px",height:"32px",marginRight:"12px"},modelValue:k.queryArgs.keyword,"onUpdate:modelValue":i[0]||(i[0]=e=>k.queryArgs.keyword=e)},null,8,["modelValue"]),a(w,{type:"primary",onClick:i[1]||(i[1]=e=>k.dialogVisible=!0)},{default:r((()=>[c(" 从暗黑核导入 ")])),_:1})]),a(L,{gutter:20},{default:r((()=>[(l(!0),s(d,null,m(k.filterList,(e=>(l(),h(U,{key:e.id,span:8},{default:r((()=>[o("div",x,g(e.descTpl),1)])),_:2},1024)))),128))])),_:1}),a(C,{modelValue:k.dialogVisible,"onUpdate:modelValue":i[4]||(i[4]=e=>k.dialogVisible=e),"show-close":!1,onClosed:i[5]||(i[5]=e=>k.importUrl=""),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"500"},{footer:r((()=>[o("div",V,[a(w,{loading:k.dialogBtnLoading,onClick:i[3]||(i[3]=e=>k.dialogVisible=!1)},{default:r((()=>[c("Cancel")])),_:1},8,["loading"]),a(w,{loading:k.dialogBtnLoading,type:"primary",onClick:b.importAffix},{default:r((()=>[c(" Confirm ")])),_:1},8,["loading","onClick"])])])),default:r((()=>[a(q,{placeholder:"暗黑核词缀接口地址",modelValue:k.importUrl,"onUpdate:modelValue":i[2]||(i[2]=e=>k.importUrl=e)},null,8,["modelValue"])])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-c96843da"]]);export{_ as default};
