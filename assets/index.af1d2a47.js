import{L as a,P as e,a as l}from"./index.a552b638.js";import{l as t}from"./avatar.5a653c66.js";import{d as o,a as s,k as r,l as n,e as i,o as d,f as u,g as p,j as f,q as c}from"./vendor.6c337aab.js";var g=o({components:{LoadingOutlined:a,PlusOutlined:e},setup(){const a=s([]),e=s(!1),o=s(t);return{fileList:a,loading:e,imageUrl:o,handleChange:a=>{"uploading"!==a.file.status?("done"===a.file.status&&function(a,e){const l=new FileReader;l.addEventListener("load",(()=>e(l.result))),l.readAsDataURL(a)}(a.file.originFileObj,(a=>{o.value=a,e.value=!1})),"error"===a.file.status&&(e.value=!1,l.error("upload error"))):e.value=!0},beforeUpload:a=>{const e="image/jpeg"===a.type||"image/png"===a.type;e||l.error("You can only upload JPG file!");const t=a.size/1024/1024<2;return t||l.error("Image must smaller than 2MB!"),e&&t},avatar:t}}});const v=f();r("data-v-0f1b6d94");const m=p("span",null,[c(" upload使用 "),p("a",{style:{color:"rgb(255, 143, 143)"}}," antd "),c(" 的Upload组件，进行了简单的封装 ")],-1),b={key:1},y=p("div",{class:"ant-upload-text"},"Upload",-1);n();const U=v(((a,e,l,t,o,s)=>{const r=i("a-alert"),n=i("a-avatar"),f=i("loading-outlined"),c=i("plus-outlined"),g=i("a-upload");return d(),u("div",null,[p(r,{type:"info"},{description:v((()=>[m])),_:1}),p(g,{"file-list":a.fileList,"onUpdate:file-list":e[1]||(e[1]=e=>a.fileList=e),name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":a.beforeUpload,onChange:a.handleChange},{default:v((()=>[a.imageUrl?(d(),u(n,{key:0,src:a.imageUrl,size:128},null,8,["src"])):(d(),u("div",b,[a.loading?(d(),u(f,{key:0})):(d(),u(c,{key:1})),y]))])),_:1},8,["file-list","before-upload","onChange"])])}));g.render=U,g.__scopeId="data-v-0f1b6d94";export default g;