import{_ as e,r as t,o as i,e as l,w as a,b as n,f as s,C as m,c as d,F as o,n as u,D as c,h as p,t as r}from"./index-9875c5e6.js";const h=e({name:"TreeSelectItem",inject:["itemTitle","itemValue","expand","itemClick"],props:{item:{}},emits:["expand","node-click"]},[["render",function(e,c,p,r,h,v){const f=t("v-icon"),V=t("v-list-item"),k=t("TreeSelectItem",!0),_=t("v-list-group");return i(),l(_,{value:p.item[v.itemValue],"append-icon":"none"},{activator:a((({isOpen:e})=>[n(V,{onClick:c[1]||(c[1]=s((e=>v.itemClick(p.item)),["stop"])),title:p.item[v.itemTitle],value:p.item[v.itemValue]},m({_:2},[p.item&&p.item.children&&p.item.children.length>0?{name:"prepend",fn:a((()=>[n(f,{class:"icon",onClick:c[0]||(c[0]=s((e=>v.expand(p.item)),["stop"])),icon:e?"mdi-menu-down":"mdi-menu-right"},null,8,["icon"])])),key:"0"}:void 0]),1032,["title","value"])])),default:a((()=>[(i(!0),d(o,null,u(p.item.children,((e,t)=>(i(),l(k,{key:t,item:e},null,8,["item"])))),128))])),_:1},8,["value"])}],["__scopeId","data-v-027e0602"]]);const v=e({components:{TreeSelectItem:h},provide(){return{itemTitle:c((()=>this.itemTitle)),itemValue:c((()=>this.itemValue)),expand:this.expand,itemClick:this.handleNodeClick}},props:{label:{type:String,default:"Select"},items:{type:Array,default:function(){return[]}},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},modelValue:""},emits:["update:modelValue"],data:()=>({value:[],opened:[]}),methods:{expand(e){let t=this.opened.indexOf(e[this.itemValue]);-1!=t?this.opened.splice(t,1):this.opened.push(e[this.itemValue])},handleNodeClick(e){this.value=[e]}},watch:{value(e){this.$emit("update:modelValue",e?e[0][this.itemValue]:""),this.$refs.select&&this.$refs.select.blur()}}},[["render",function(e,s,m,d,o,u){const c=h,v=t("v-list"),f=t("v-select");return i(),l(f,{ref:"select",label:m.label,modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=t=>e.value=t),items:m.items,clearable:""},{selection:a((({item:e})=>[p("span",null,r(e[m.itemTitle]),1)])),item:a((({item:t})=>[n(v,{opened:e.opened,"onUpdate:opened":s[0]||(s[0]=t=>e.opened=t),density:"compact"},{default:a((()=>[n(c,{item:t.raw},null,8,["item"])])),_:2},1032,["opened"])])),_:1},8,["label","modelValue","items"])}],["__scopeId","data-v-b63ca5a3"]]);export{v as _};
