import{_ as e,r as t,x as s,o as r,e as i,w as o,B as a,Q as l,y as n,b as c}from"./index-9875c5e6.js";const u=e({props:{limit:{type:Number},multiple:{type:Boolean,default:!1},param_name:{type:String,default:"file"},btn_text:{type:String,default:"点击上传"},upload_url:{type:String},show_file_list:{type:Boolean,default:!1},list_type:{type:String,default:"text"},accept:{type:String},data:{type:Object,default:function(){return{}}}},data:()=>({fullscreenLoading:!1}),computed:{headers(){let e={},t=sessionStorage.getItem("AccessToken");return t&&(e.Authorization=`Bearer ${t}`),e}},methods:{success(e,t,s){0==e.success?this.$message.error(e.msg):this.$emit("on-success",e.data,t,s),this.fullscreenLoading=!1},error(e){403!==JSON.parse(JSON.stringify(e)).status?this.fullscreenLoading=!1:this.$router.push("/login")},exceed(){this.$message.error("最多只能上传"+this.limit+"个文件")},clearFiles(){this.$refs.uploader.clearFiles()},remove(){this.$emit("on-success")},progress(e,t,s){this.$emit("on-progress",e,t,s)}}},[["render",function(e,u,d,p,m,h){const f=t("v-btn"),g=l,y=n;return s((r(),i(g,{disabled:"",ref:"uploader",data:d.data,name:this.param_name,limit:this.limit,action:this.upload_url,multiple:d.multiple,headers:h.headers,"show-file-list":this.show_file_list,"list-type":this.list_type,"on-success":h.success,"on-error":h.error,"on-exceed":h.exceed,"on-remove":h.remove,"on-progress":h.progress,accept:this.accept,"before-upload":()=>{this.fullscreenLoading=!0}},{default:o((()=>[a(e.$slots,"default",{},(()=>[c(f,{disabled:"",color:"blue-lighten-1",text:d.btn_text},null,8,["text"])]))])),_:3},8,["data","name","limit","action","multiple","headers","show-file-list","list-type","on-success","on-error","on-exceed","on-remove","on-progress","accept","before-upload"])),[[y,m.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}]]);export{u as _};
