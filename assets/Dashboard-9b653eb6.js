import{_ as t,r as e,o as a,e as l,w as r,a as s,h as n,b as i,x as o,c as d,F as u,s as m,E as h,A as c,y as p,u as f,k as y,j as v,q as b,l as g}from"./index-273db4d9.js";/* empty css                  *//* empty css                  */import{P as _}from"./PriceFormat-6ab21705.js";import{_ as k}from"./Chart-53cc0b9b.js";import{f as x}from"./common-5afeacdf.js";const $={class:"d-flex"},w={class:"ml-2"},q={class:"d-flex mt-4"},P={class:"ml-2"};const F=t({components:{PriceFormat:_},props:{data:{type:Object}},data:()=>({date:void 0}),computed:{date_:{get(){return this.date||new Date(this.data.year,this.data.month-1)},set(t){this.$emit("dateChange",t.getFullYear(),t.getMonth()+1),this.date=t}}}},[["render",function(t,c,p,f,y,v){const b=e("PriceFormat"),g=h,_=e("v-icon"),k=e("v-card-text"),x=e("v-card"),F=e("v-sheet");return a(),l(F,{border:"",rounded:""},{default:r((()=>[s(x,{flat:""},{default:r((()=>[s(k,null,{default:r((()=>[n("div",$,[n("div",null,[i(" 总支出 "),s(b,{class:"font-weight-black",size:24,amount:p.data.priceTotal},null,8,["amount"])]),n("div",w,[i(o(p.data.year)+"年总支出 ",1),s(b,{class:"font-weight-black",size:24,amount:p.data.yearPriceTotal},null,8,["amount"])])]),n("div",q,[n("div",null,[s(g,{modelValue:v.date_,"onUpdate:modelValue":c[0]||(c[0]=t=>v.date_=t),type:"month",placeholder:"选择月",clearable:!1,format:"YYYY年M月",class:"date-picker"},null,8,["modelValue"])]),n("div",P,[i(" 支出共计"+o(p.data.monthCount)+"笔，合计 ",1),s(b,{class:"font-weight-black mr-2",size:24,amount:p.data.monthPrice},null,8,["amount"]),p.data.compare?(a(),d(u,{key:0},[i(" 相较"+o(1==p.data.month?12:p.data.month-1)+"月 ",1),s(_,{style:{margin:"0 -10px 0 -10px","font-size":"30px"},color:p.data.compare>0?"red-darken-1":"green-darken-1",icon:p.data.compare>0?"mdi-triangle-small-up":"mdi-triangle-small-down"},null,8,["color","icon"]),i(" "+o(p.data.compare)+"% ",1)],64)):m("",!0)])])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-65cb857b"]]);const j=t({components:{Chart:k,PriceFormat:_},props:{year:{type:Number,default:0},month:{type:Number,default:0}},computed:{changeData(){const{year:t,month:e}=this;return{year:t,month:e}}},data:()=>({visible:!1,bills:[],tableTitle:"",tableLoading:!1}),mounted(){this.$refs.chart.chart.on("click",(t=>{if(t)if(0===Number(t.value))this.$message.error("当日没有消费产生");else{let e=`${this.year}-${this.month<10?0+String(this.month):this.month}-${t.name<10?0+String(t.name):t.name}`;this.tableTitle=`${e}支出`,this.bills=[],this.tableLoading=!0,this.$request.get({url:c.bill.list.by_date,params:{date:e}}).then((t=>{this.bills=t})).finally((()=>{this.tableLoading=!1})),this.visible=!0}}))},methods:{request:function(){if(!this.year||!this.month)return;let t=[],e=[];this.$request.get({url:c.bill.dashboard.compared,params:{year:this.year,month:this.month},loading:{target:"#bill_line"}}).then((a=>{a.forEach((a=>{t.push(a.unit),e.push(a.price)})),this.$refs.chart.chart.setOption({tooltip:{trigger:"axis",formatter:function(t,e,a){return`${t[0].axisValue}日: ${x(t[0].data)}`}},xAxis:{type:"category",data:t},yAxis:{type:"value"},series:[{data:e,type:"line",markLine:{silent:!0,lineStyle:{color:"rgba(193, 65, 65, 1)"},data:[{type:"average"}]}}]})})).finally((()=>{}))}},watch:{changeData(t){this.request()}}},[["render",function(t,n,i,o,d,u){const m=k,h=e("v-card-text"),c=e("v-card"),p=e("PriceFormat"),f=e("v-data-table-virtual"),y=e("v-dialog"),v=e("v-sheet");return a(),l(v,{id:"bill_line",border:"",rounded:""},{default:r((()=>[s(c,{flat:"",title:i.year&&i.month?`${i.year}年${i.month}月支出对比`:"月支出对比"},{default:r((()=>[s(h,null,{default:r((()=>[s(m,{ref:"chart"},null,512)])),_:1})])),_:1},8,["title"]),s(y,{modelValue:d.visible,"onUpdate:modelValue":n[0]||(n[0]=t=>d.visible=t),width:"80%"},{default:r((()=>[s(c,{title:d.tableTitle},{default:r((()=>[s(h,null,{default:r((()=>[s(f,{loading:d.tableLoading,headers:[{title:"交易方",key:"payee",width:280,sortable:!1},{title:"支出项",key:"detail",sortable:!1},{title:"金额",key:"price",width:100,sortable:!1}],items:d.bills},{"item.price":r((({item:t})=>[s(p,{amount:t.price},null,8,["amount"])])),_:1},8,["loading","items"])])),_:1})])),_:1},8,["title"])])),_:1},8,["modelValue"])])),_:1})}]]),D={class:"d-flex justify-space-between"},N={class:"text-overflow pr-8"},V={class:"font-12 text-grey"};const C=t({components:{PriceFormat:_},props:{year:{type:Number,default:0},month:{type:Number,default:0}},data:()=>({rank:[]}),computed:{changeData(){const{year:t,month:e}=this;return{year:t,month:e}}},methods:{request:function(){this.year&&this.month&&this.$request.get({url:c.bill.dashboard.rank,params:{year:this.year,month:this.month},loading:{target:"#rank"}}).then((t=>{this.rank=t}))}},watch:{changeData(t){this.request()}}},[["render",function(t,i,m,h,c,f){const y=e("PriceFormat"),v=e("v-list-item"),b=e("v-list"),g=e("v-card-text"),_=e("v-card"),k=e("v-sheet");return a(),l(k,{id:"rank",border:"",rounded:""},{default:r((()=>[s(_,{flat:"",title:m.year&&m.month?`${m.year}年${m.month}月支出排行`:"月支出排行"},{default:r((()=>[s(g,null,{default:r((()=>[s(b,{class:"pa-0"},{default:r((()=>[(a(!0),d(u,null,p(c.rank,(t=>(a(),l(v,{class:"pa-0",key:t.id},{default:r((()=>[n("div",D,[n("span",N,o(t.detail),1),s(y,{amount:t.price},null,8,["amount"])]),n("div",V,o(t.date),1)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["title"])])),_:1})}]]),L={class:"d-flex justify-space-between"};const T=t({components:{PriceFormat:_},props:{year:{type:Number,default:0},month:{type:Number,default:0}},data:()=>({classifies:[]}),computed:{changeData(){const{year:t,month:e}=this;return{year:t,month:e}}},methods:{request:function(){this.year&&this.month&&this.$request.get({url:c.bill.dashboard.classify,params:{year:this.year,month:this.month},loading:{target:"#classify"}}).then((t=>{this.classifies=t}))}},watch:{changeData(t){this.request()}}},[["render",function(t,i,h,c,f,y){const v=e("PriceFormat"),b=e("v-progress-linear"),g=e("v-list-item"),_=e("v-list"),k=e("v-card-text"),x=e("v-card"),$=e("v-sheet");return a(),l($,{id:"classify",border:"",rounded:""},{default:r((()=>[s(x,{flat:"",title:h.year&&h.month?`${h.year}年${h.month}月支出分类`:"月支出分类"},{default:r((()=>[f.classifies.length?(a(),l(k,{key:0},{default:r((()=>[s(_,{class:"pa-0"},{default:r((()=>[(a(!0),d(u,null,p(f.classifies,((t,e)=>(a(),l(g,{class:"pa-0",key:e},{default:r((()=>[n("div",L,[n("div",null,o(t.tag)+o(t.percentage)+"%",1),s(v,{amount:t.price},null,8,["amount"])]),s(b,{color:"blue-lighten-1","model-value":t.percentage},null,8,["model-value"])])),_:2},1024)))),128))])),_:1})])),_:1})):m("",!0)])),_:1},8,["title"])])),_:1})}]]),Y={__name:"Dashboard",setup(t){const n=f(),i=y({year:null,month:null}),o=function(t,e){g.get({url:c.bill.dashboard.overview,params:{year:t,month:e},loading:{target:"#overview"}}).then((t=>{i.value=t}))};return v((()=>{n.commit("update_sider_active","/bill/dashboard")})),b((()=>{o()})),(t,n)=>{const d=e("v-col"),u=e("v-row"),m=e("v-sheet");return a(),l(m,null,{default:r((()=>[s(u,null,{default:r((()=>[s(d,{cols:"8",class:"pr-0"},{default:r((()=>[s(F,{id:"overview",class:"mb-2",data:i.value,onDateChange:o},null,8,["data"]),s(j,{year:i.value.year,month:i.value.month},null,8,["year","month"])])),_:1}),s(d,{cols:"4"},{default:r((()=>[s(T,{class:"mb-2",year:i.value.year,month:i.value.month},null,8,["year","month"]),s(C,{year:i.value.year,month:i.value.month},null,8,["year","month"])])),_:1})])),_:1})])),_:1})}}};export{Y as default};
