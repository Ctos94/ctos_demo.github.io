import{_ as e,A as s,o as t,c as i,h as a,t as l,F as u,b as d,w as n,n as o,l as r,R as m,O as p,a as h,e as c,P as y}from"./index-9875c5e6.js";/* empty css               */const b={class:"header"},f={key:0},g={key:0};const k=e({data(){return{id:this.$route.query.id,build:void 0,items:[[],[],[]]}},mounted(){this.$store.commit("update_sider_active","/diablo4/builds"),this.requestDetail()},methods:{requestDetail(){this.$request.get({url:s.diablo4.build.detail,params:{id:this.id},loading:!0}).then((e=>{e&&e.gear&&e.gear.length>0&&e.gear.forEach((e=>{["Helm","ChestArmor","Gloves","Legs","Boots"].includes(e.itemType)?this.items[0].push(e):["Amulet","Ring"].includes(e.itemType)?this.items[1].push(e):this.items[2].push(e)})),this.build=e}))}}},[["render",function(e,s,k,_,q,v){const I=m,T=y,x=p;return q.build?(t(),i(u,{key:0},[a("div",b,[a("p",null,l(q.build.title),1),q.build.coreInfo?(t(),i(u,{key:0},[d(I,{style:{marginRight:"4px"}},{default:n((()=>[h(l(`第${q.build.coreInfo.season}赛季`),1)])),_:1}),(t(!0),i(u,null,o(q.build.coreInfo.scene,(e=>(t(),c(I,{style:{marginRight:"4px"},key:e},{default:n((()=>[h(l(e),1)])),_:2},1024)))),128))],64)):r("",!0)]),d(x,null,{default:n((()=>[(t(!0),i(u,null,o(q.items,((e,s)=>(t(),c(T,{key:s,span:8},{default:n((()=>[(t(!0),i(u,null,o(e,(e=>(t(),i("div",{key:e.itemType},[h(l(e.itemTypeName)+" ",1),"uniqueItem"==e.type?(t(),i("p",f,l(e.unique.name),1)):(t(),i(u,{key:1},[(t(!0),i(u,null,o(e.mods,(e=>(t(),i("p",{key:e.id},l(e.descTpl),1)))),128)),e.aspect?(t(),i("p",g,l(e.aspect.name),1)):r("",!0)],64))])))),128))])),_:2},1024)))),128))])),_:1})],64)):r("",!0)}],["__scopeId","data-v-3fe270b4"]]);export{k as default};
