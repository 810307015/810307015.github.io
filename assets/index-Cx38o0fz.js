/* empty css                    *//* empty css                *//* empty css                  */import{U as a,V as y,W as E,X as u,N as g,Q as k,s as I,Y as V,O as x,m as C,_ as v,d as N,r as $,Z as S,c as J,g as d,w as b,u as h,i as O,J as j,e as B,p as F,f as w,a as f,L as P,K as R}from"./index-I3cbXsue.js";/* empty css                   */const T={input:x,"input-number":C,radio:y,select:g},M=n=>{const{config:l,formData:p}=n,o=[];return l.forEach(i=>{const{type:s,name:e,options:r}=i;r.modelValue=p[e],r.onChange=t=>{p[e]=t};const{_options:c,...m}=r;if(s==="radio")o.push(a(u,{name:e},()=>a(y,m,()=>c.map(t=>a(E,t)))));else if(s==="select")o.push(a(u,{name:e},()=>a(g,m,()=>c.map(t=>a(k,t)))));else if(s==="submit"){const{content:t,...D}=r;o.push(a(u,{name:e},()=>a(I,D,()=>t)))}else o.push(a(u,{name:e},()=>a(T[s],{...r,modelValue:p[e],onInput:t=>{p[e]=t}})))}),a(V,null,()=>o)},U={props:{config:{type:Array,default:()=>[]},formData:{type:Object,default:()=>({})}},setup(n){return()=>M(n)}};function A(n,l,p,o,i,s){return null}const G=v(U,[["render",A]]),_=n=>(F("data-v-d4b9da4a"),n=n(),w(),n),K=_(()=>f("div",null,"vue组件相关",-1)),L=_(()=>f("div",null,"通过一组配置的json，直接通过h函数转化成对应的动态表单，方便表单的生成和回显，我这里仅仅只是为了做个示范，并没有完整地去实现这个动态表单，实际需要实现的时候需要考虑的点会很多，这里只是提出一个思路，在需要的时候再慢慢完善，同时这个思路也可以用在动态配置表单上，通过选择表单的字段类型生成json配置，然后再通过json配置生成对应的表单，都是一理通百理通的。",-1)),Q=_(()=>f("pre",null,`const config = [
    {
        type: 'input',
        name: 'username',
        options: {
            placeholder: '请输入用户名'
        },
    },
    {
        type: 'input-number',
        name: 'age',
        options: {
            placeholder: '请输入年龄'
        },
    },
    {
        type: 'radio',
        name: 'gender',
        options: {
            placeholder: '请选择性别',
            _options: [
                { label: '男', value: 'male' },
                { label: '女', value: 'female' },
            ],
        },
    },
    {
        type: 'select',
        name: 'hobby',
        options: {
            placeholder: '请选择爱好',
            _options: [
                { label: '唱歌', value: 'sing' },
                { label: '跳舞', value: 'dance' },
                { label: '绘画', value: 'paint' },
            ],
        },
    },
    {
        type: 'submit',
        options: {
            type: 'primary',
            content: '提交',
            onClick: () => {
                console.log(formData);
                ElMessage(\`formData=\${JSON.stringify(formData)}\`)
            }
        },
    }
];
const formData = reactive({
    username: 'Jack',
    age: 18,
    gender: 'female',
    hobby: 'sing'
});
// 使用方法
<DynamicForm :config="config" :formData="formData" />
                `,-1)),W=N({__name:"index",setup(n){const l=$("dynamic-form"),p=s=>{l.value=s.props.name},o=S({username:"Jack",age:18,gender:"female",hobby:"sing"}),i=[{type:"input",name:"username",options:{placeholder:"请输入用户名"}},{type:"input-number",name:"age",options:{placeholder:"请输入年龄"}},{type:"radio",name:"gender",options:{placeholder:"请选择性别",_options:[{label:"男",value:"male"},{label:"女",value:"female"}]}},{type:"select",name:"hobby",options:{placeholder:"请选择爱好",_options:[{label:"唱歌",value:"sing"},{label:"跳舞",value:"dance"},{label:"绘画",value:"paint"}]}},{type:"submit",options:{type:"primary",content:"提交",onClick:()=>{console.log(o),P(`formData=${JSON.stringify(o)}`)}}}];return(s,e)=>{const r=R,c=j;return B(),J("main",null,[K,d(c,{modelValue:h(l),"onUpdate:modelValue":e[0]||(e[0]=m=>O(l)?l.value=m:null),class:"demo-tabs",onTabClick:p},{default:b(()=>[d(r,{label:"动态表单",name:"dynamic-form"},{default:b(()=>[L,Q,d(G,{config:i,formData:h(o)},null,8,["formData"])]),_:1})]),_:1},8,["modelValue"])])}}}),H=v(W,[["__scopeId","data-v-d4b9da4a"]]);export{H as default};
