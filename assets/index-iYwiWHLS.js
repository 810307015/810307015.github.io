/* empty css                    *//* empty css                *//* empty css                 */import{d as b,r as i,e as p,c as y,g as n,w as l,b as _,L as v,s as x,y as g,u as h,k as E,a as w,q as C,x as N,_ as R,i as L,J as z,K as B}from"./index-CTEeAdbm.js";const P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",V=b({__name:"Notification",setup(k){const t=i(!1),c=()=>{Notification.requestPermission().then(a=>{if(console.log(a),t.value=a==="granted",a==="granted"){const s="嘿！你开启了网站的通知功能",o=new Notification("测试",{body:s,icon:P,timestamp:Date.now(),requireInteraction:!0,vibrate:!0});console.log(o),o.onclick=()=>{v.success("你点击了通知")},o.onclose=()=>{v.info("你关闭了通知")}}})};return(a,s)=>{const o=x;return p(),y("div",null,[n(o,{type:"primary",onClick:c},{default:l(()=>[_("允许网页通知")]),_:1})])}}}),M=b({__name:"Photo",setup(k){const t=i(null),c=i(""),a=i(null),s=()=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(e=>{a.value=e,t.value.srcObject=e,t.value.play()}).catch(e=>{v.error("获取摄像头失败")})},o=()=>{const e=document.createElement("canvas");e.width=500,e.height=500,e.getContext("2d").drawImage(t.value,0,0,e.width,e.height),c.value=e.toDataURL("image/png")},m=()=>{a.value&&a.value.getTracks().forEach(r=>{r.stop()})};return(e,r)=>{const d=x,u=C,f=N;return p(),g(u,{direction:"vertical",size:"middle",alignment:"flex-start"},{default:l(()=>[n(u,{size:"middle"},{default:l(()=>[n(d,{onClick:s},{default:l(()=>[_("开始打开摄像头")]),_:1}),n(d,{onClick:o},{default:l(()=>[_("拍照")]),_:1}),n(d,{onClick:m},{default:l(()=>[_("关闭摄像头")]),_:1})]),_:1}),h(c)?(p(),g(f,{key:0,src:h(c),alt:""},null,8,["src"])):E("",!0),w("video",{ref_key:"video",ref:t},null,512)]),_:1})}}}),T=R(M,[["__scopeId","data-v-472113af"]]),U=["disable"],I=b({__name:"Record",setup(k){const t=i(null),c=i(null),a=i([]),s=i(null),o=i(!1),m=()=>{o.value=!1,navigator.mediaDevices.getUserMedia({audio:!0}).then(r=>{t.value=r,c.value=new MediaRecorder(r),console.log(c.value),c.value.ondataavailable=d=>{a.value.push(d.data)},c.value.onstop=d=>{if(a.value.length>0){const u=new Blob(a.value,{type:"audio/ogg; codecs=opus"});s.value.src=URL.createObjectURL(u),s.value.play(),o.value=!0}else v.error("没有捕获到音频数据")},c.value.start()}).catch(r=>{v.error("获取摄像头失败")})},e=()=>{var r;t.value&&((r=c.value)==null||r.stop(),t.value.getTracks().forEach(u=>{u.stop()}))};return(r,d)=>{const u=x,f=C;return p(),g(f,{direction:"vertical",size:"middle",alignment:"flex-start"},{default:l(()=>[n(f,{size:"middle"},{default:l(()=>[n(u,{onClick:m},{default:l(()=>[_("开始录音")]),_:1}),n(u,{onClick:e},{default:l(()=>[_("结束录音")]),_:1})]),_:1}),n(f,{size:"middle"},{default:l(()=>[w("audio",{ref_key:"audio",ref:s,controls:"",disable:h(o)},null,8,U)]),_:1})]),_:1})}}}),D=R(I,[["__scopeId","data-v-35e050b8"]]),O=b({__name:"index",setup(k){const t=i("notification"),c=a=>{t.name=a.props.name};return(a,s)=>{const o=B,m=z;return p(),g(m,{modelValue:h(t),"onUpdate:modelValue":s[0]||(s[0]=e=>L(t)?t.value=e:null),class:"demo-tabs",onTabClick:c},{default:l(()=>[n(o,{label:"网页通知",name:"notification"},{default:l(()=>[n(V)]),_:1}),n(o,{label:"摄像头获取",name:"photo"},{default:l(()=>[n(T)]),_:1}),n(o,{label:"录音",name:"record"},{default:l(()=>[n(D)]),_:1})]),_:1},8,["modelValue"])}}});export{O as default};