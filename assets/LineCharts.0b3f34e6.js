import{i as t}from"./index.0751f3aa.js";import{d as a,B as e,o as r,f as o}from"./vendor.6c337aab.js";var i=a({setup(){e((()=>{var a,e;a=t(document.getElementById("line—chart")),e={title:{text:"柱状图"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var a;return(a="-"!==t[1].value?t[1]:t[0]).name+"<br/>"+a.seriesName+" : "+a.value}},legend:{data:["支出","收入"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:function(){for(var t=[],a=1;a<=11;a++)t.push("11月"+a+"日");return t}()},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},barMaxWidth:50,emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,900,1245,1530,1376,1376,1511,1689,1856,1495,1292]},{name:"收入",type:"bar",stack:"总量",label:{show:!0,position:"top"},data:[900,345,393,"-","-",135,178,286,"-","-","-"]},{name:"支出",type:"bar",stack:"总量",label:{show:!0,position:"bottom"},data:["-","-","-",108,154,"-","-","-",119,361,203]}]},a.setOption(e)}))}});const s={id:"line—chart",style:{width:"100%",height:"500px"}};i.render=function(t,a,e,i,n,l){return r(),o("div",s)};export{i as _};