import{_ as t,a as e,o as a,c as l,w as r,b as n,f as s,v as o,C as i,d,F as u,g as m,A as h,e as c,D as p,r as y,G as f,H as v,n as b,k as g,l as _,t as k}from"./index-de9476e1.js";import{_ as $}from"./DateInput-f02aa55d.js";import{P as x}from"./PriceFormat-3bb708db.js";import{_ as w}from"./Chart-3a874190.js";import{f as D}from"./common-5afeacdf.js";const P={class:"d-flex"},C={class:"ml-2"},F={class:"d-flex mt-4"},j={class:"ml-2"};const q=t({components:{PriceFormat:x,DateInput:$},props:{data:{type:Object}},data:()=>({date:void 0}),computed:{date_:{get(){return this.date||new Date(this.data.year,this.data.month-1)},set(t){this.$emit("dateChange",t.getFullYear(),t.getMonth()+1),this.date=t}}}},[["render",function(t,h,c,p,y,f){const v=e("PriceFormat"),b=$,g=e("v-icon"),_=e("v-card-text"),k=e("v-card"),x=e("v-sheet");return a(),l(x,{border:"",rounded:""},{default:r((()=>[n(k,{flat:""},{default:r((()=>[n(_,null,{default:r((()=>[s("div",P,[s("div",null,[o(" 总支出 "),n(v,{class:"font-weight-black",size:24,amount:c.data.priceTotal},null,8,["amount"])]),s("div",C,[o(i(c.data.year)+"年总支出 ",1),n(v,{class:"font-weight-black",size:24,amount:c.data.yearPriceTotal},null,8,["amount"])])]),s("div",F,[s("div",null,[n(b,{format:"yyyy年MM月",width:120,clearable:!1,density:"compact",modelValue:f.date_,"onUpdate:modelValue":h[0]||(h[0]=t=>f.date_=t)},null,8,["modelValue"])]),s("div",j,[o(" 支出共计"+i(c.data.monthCount)+"笔，合计 ",1),n(v,{class:"font-weight-black mr-2",size:24,amount:c.data.monthPrice},null,8,["amount"]),c.data.compare?(a(),d(u,{key:0},[o(" 相较"+i(1==c.data.month?12:c.data.month-1)+"月 ",1),n(g,{style:{margin:"0 -10px 0 -10px","font-size":"30px"},color:c.data.compare>0?"red-darken-1":"green-darken-1",icon:c.data.compare>0?"mdi-triangle-small-up":"mdi-triangle-small-down"},null,8,["color","icon"]),o(" "+i(c.data.compare)+"% ",1)],64)):m("",!0)])])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-0a487ba4"]]);const N=t({components:{Chart:w,PriceFormat:x},props:{year:{type:Number,default:0},month:{type:Number,default:0}},computed:{changeData(){const{year:t,month:e}=this;return{year:t,month:e}}},data:()=>({visible:!1,bills:[],tableTitle:"",tableLoading:!1}),mounted(){this.$refs.chart.chart.on("click",(t=>{if(t)if(0===Number(t.value))this.$message.info("当日没有消费产生");else{let e=`${this.year}-${this.month<10?0+String(this.month):this.month}-${t.name<10?0+String(t.name):t.name}`;this.tableTitle=`${e}支出`,this.bills=[],this.tableLoading=!0,this.$request.get({url:h.bill.list.by_date,params:{date:e}}).then((t=>{this.bills=t})).finally((()=>{this.tableLoading=!1})),this.visible=!0}}))},methods:{request:function(){if(!this.year||!this.month)return;let t=[],e=[];this.$request.get({url:h.bill.dashboard.compared,params:{year:this.year,month:this.month},loading:{target:"#bill_line"}}).then((a=>{a.forEach((a=>{t.push(a.unit),e.push(a.price)})),this.$refs.chart.chart.setOption({tooltip:{trigger:"axis",formatter:function(t,e,a){return`${t[0].axisValue}日: ${D(t[0].data)}`}},xAxis:{type:"category",data:t},yAxis:{type:"value"},series:[{data:e,type:"line",markLine:{silent:!0,lineStyle:{color:"rgba(193, 65, 65, 1)"},data:[{type:"average"}]}}]})})).finally((()=>{}))}},watch:{changeData(t){this.request()}}},[["render",function(t,s,o,i,d,u){const m=w,h=e("v-card-text"),c=e("v-card"),p=e("PriceFormat"),y=e("v-data-table-virtual"),f=e("v-dialog"),v=e("v-sheet");return a(),l(v,{id:"bill_line",border:"",rounded:""},{default:r((()=>[n(c,{flat:"",title:o.year&&o.month?`${o.year}年${o.month}月支出对比`:"月支出对比"},{default:r((()=>[n(h,null,{default:r((()=>[n(m,{ref:"chart"},null,512)])),_:1})])),_:1},8,["title"]),n(f,{modelValue:d.visible,"onUpdate:modelValue":s[0]||(s[0]=t=>d.visible=t),width:"80%"},{default:r((()=>[n(c,{title:d.tableTitle},{default:r((()=>[n(h,null,{default:r((()=>[n(y,{loading:d.tableLoading,headers:[{title:"交易方",key:"payee",width:280,sortable:!1},{title:"支出项",key:"detail",sortable:!1},{title:"金额",key:"price",width:100,sortable:!1}],items:d.bills},{"item.price":r((({item:t})=>[n(p,{amount:t.price},null,8,["amount"])])),_:1},8,["loading","items"])])),_:1})])),_:1},8,["title"])])),_:1},8,["modelValue"])])),_:1})}]]),V={class:"d-flex justify-space-between"},L={class:"text-overflow pr-8"},T={class:"font-12 text-grey"};const z=t({components:{PriceFormat:x},props:{year:{type:Number,default:0},month:{type:Number,default:0}},data:()=>({rank:[]}),computed:{changeData(){const{year:t,month:e}=this;return{year:t,month:e}}},methods:{request:function(){this.year&&this.month&&this.$request.get({url:h.bill.dashboard.rank,params:{year:this.year,month:this.month},loading:{target:"#rank"}}).then((t=>{this.rank=t}))}},watch:{changeData(t){this.request()}}},[["render",function(t,o,m,h,p,y){const f=e("PriceFormat"),v=e("v-list-item"),b=e("v-list"),g=e("v-card-text"),_=e("v-card"),k=e("v-sheet");return a(),l(k,{id:"rank",border:"",rounded:""},{default:r((()=>[n(_,{flat:"",title:m.year&&m.month?`${m.year}年${m.month}月支出排行`:"月支出排行"},{default:r((()=>[n(g,null,{default:r((()=>[n(b,{class:"pa-0"},{default:r((()=>[(a(!0),d(u,null,c(p.rank,(t=>(a(),l(v,{class:"pa-0",key:t.id},{default:r((()=>[s("div",V,[s("span",L,i(t.detail),1),n(f,{amount:t.price},null,8,["amount"])]),s("div",T,i(t.date),1)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["title"])])),_:1})}]]),I={class:"d-flex justify-space-between"},A=t({__name:"Classify",props:{year:{type:Number,default:0},month:{type:Number,default:0}},setup(t){const o=p(),g=t,_=y([]),k=f((()=>{const{year:t,month:e}=g;return{year:t,month:e}}));return v(k,(()=>{g.year&&g.month&&b.get({url:h.bill.dashboard.classify,params:{year:g.year,month:g.month},loading:{target:"#classify"}}).then((t=>{_.value=t}))})),(h,p)=>{const y=e("v-progress-linear"),f=e("v-list-item"),v=e("v-list"),b=e("v-card-text"),k=e("v-card"),$=e("v-sheet");return a(),l($,{id:"classify",border:"",rounded:""},{default:r((()=>[n(k,{flat:"",title:t.year&&t.month?`${t.year}年${t.month}月支出分类`:"月支出分类"},{default:r((()=>[_.value.length?(a(),l(b,{key:0},{default:r((()=>[n(v,{class:"pa-0"},{default:r((()=>[(a(!0),d(u,null,c(_.value,((t,e)=>(a(),l(f,{ripple:!1,onClick:e=>{return a=t.tag,void o.push({path:"/bill/list",query:{tag:a,date:`${g.year}-${g.month<10?"0"+g.month:g.month}`}});var a},class:"pa-0",key:e},{default:r((()=>[s("div",I,[s("div",null,i(t.tag)+i(t.percentage)+"%",1),n(x,{amount:t.price},null,8,["amount"])]),n(y,{color:"blue-lighten-1","model-value":t.percentage},null,8,["model-value"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):m("",!0)])),_:1},8,["title"])])),_:1})}}},[["__scopeId","data-v-b7c8ddda"]]),M={__name:"Dashboard",setup(t){const s=g(),o=y({year:null,month:null}),i=function(t,e){b.get({url:h.bill.dashboard.overview,params:{year:t,month:e},loading:{target:"#overview"}}).then((t=>{o.value=t}))};return _((()=>{s.commit("update_sider_active","/bill/dashboard")})),k((()=>{i()})),(t,s)=>{const d=e("v-col"),u=e("v-row"),m=e("v-sheet");return a(),l(m,null,{default:r((()=>[n(u,null,{default:r((()=>[n(d,{cols:"8",class:"pr-0"},{default:r((()=>[n(q,{id:"overview",class:"mb-2",data:o.value,onDateChange:i},null,8,["data"]),n(N,{year:o.value.year,month:o.value.month},null,8,["year","month"])])),_:1}),n(d,{cols:"4"},{default:r((()=>[n(A,{class:"mb-2",year:o.value.year,month:o.value.month},null,8,["year","month"]),n(z,{year:o.value.year,month:o.value.month},null,8,["year","month"])])),_:1})])),_:1})])),_:1})}}};export{M as default};
