import{_ as e,A as a,e as s,w as o,r as t,o as l,a as r,f as d,g as n}from"./index-51a7260c.js";import{S as i}from"./sm-00461aa8.js";const u=e({data:()=>({showPassword:!1,loading:!1,formData:{username:"",password:""}}),methods:{async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.loading=!0,this.$request.post({url:a.user.login,data:{username:i(this.formData.username),password:i(this.formData.password)}}).then((e=>{sessionStorage.setItem("AccessToken",e),this.$router.push("/")})).finally((()=>{this.loading=!1})))}}},[["render",function(e,a,i,u,m,f){const p=t("v-text-field"),h=t("v-btn"),c=t("v-form"),w=t("v-sheet"),v=t("v-main"),g=t("v-layout");return l(),s(g,null,{default:o((()=>[r(v,{class:"d-flex align-center justify-center",style:{height:"calc(100vh - 30px)"}},{default:o((()=>[r(w,{width:"300"},{default:o((()=>[r(c,{ref:"form",onSubmit:a[4]||(a[4]=d((()=>{}),["prevent"]))},{default:o((()=>[r(p,{rules:[e.$validator.required],variant:"underlined",modelValue:m.formData.username,"onUpdate:modelValue":a[0]||(a[0]=e=>m.formData.username=e),label:"用户名"},null,8,["rules","modelValue"]),r(p,{modelValue:m.formData.password,"onUpdate:modelValue":a[1]||(a[1]=e=>m.formData.password=e),"append-icon":m.showPassword?"mdi-eye":"mdi-eye-off",rules:[e.$validator.required],type:m.showPassword?"text":"password",variant:"underlined",label:"密码",onKeyup:a[2]||(a[2]=n((e=>f.submit()),["enter"])),"onClick:append":a[3]||(a[3]=e=>m.showPassword=!m.showPassword)},null,8,["modelValue","append-icon","rules","type"]),r(h,{color:"blue-lighten-1",disabled:m.loading,loading:m.loading,block:"",onClick:f.submit,text:"登录"},null,8,["disabled","loading","onClick"])])),_:1},512)])),_:1})])),_:1})])),_:1})}]]);export{u as default};
