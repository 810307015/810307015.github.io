/* empty css             *//* empty css                */import"./el-tab-pane-l0sNRNKZ.js";/* empty css                  */import{S as a,T as _,U as D,V as c,K as g,O as E,k,h as V,L as x,W as C,_ as v,d as $,r as I,X as N,c as J,a as d,f,w as b,i as O,u as y,H as j,I as B,J as F,e as S}from"./index-BrD9HEJJ.js";/* empty css                   */const T={input:x,"input-number":V,radio:_,select:g},P=p=>{const{config:l,formData:s}=p,o=[];return l.forEach(i=>{const{type:t,name:e,options:r}=i;r.modelValue=s[e],r.onChange=n=>{s[e]=n};const{_options:m,...u}=r;if(t==="radio")o.push(a(c,{name:e},()=>a(_,u,()=>m.map(n=>a(D,n)))));else if(t==="select")o.push(a(c,{name:e},()=>a(g,u,()=>m.map(n=>a(E,n)))));else if(t==="submit"){const{content:n,...h}=r;o.push(a(c,{name:e},()=>a(k,h,()=>n)))}else o.push(a(c,{name:e},()=>a(T[t],{...r,modelValue:s[e],onInput:n=>{s[e]=n}})))}),a(C,null,()=>o)},R={props:{config:{type:Array,default:()=>[]},formData:{type:Object,default:()=>({})}},setup(p){return()=>P(p)}};function w(p,l,s,o,i,t){return null}const M=v(R,[["render",w]]),U=$({__name:"index",setup(p){const l=I("dynamic-form"),s=t=>{l.value=t.props.name},o=N({username:"Jack",age:18,gender:"female",hobby:"sing"}),i=[{type:"input",name:"username",options:{placeholder:"请输入用户名"}},{type:"input-number",name:"age",options:{placeholder:"请输入年龄"}},{type:"radio",name:"gender",options:{placeholder:"请选择性别",_options:[{label:"男",value:"male"},{label:"女",value:"female"}]}},{type:"select",name:"hobby",options:{placeholder:"请选择爱好",_options:[{label:"唱歌",value:"sing"},{label:"跳舞",value:"dance"},{label:"绘画",value:"paint"}]}},{type:"submit",options:{type:"primary",content:"提交",onClick:()=>{console.log(o),F(`formData=${JSON.stringify(o)}`)}}}];return(t,e)=>{const r=B,m=j;return S(),J("main",null,[e[3]||(e[3]=d("div",null,"vue组件相关",-1)),f(m,{modelValue:y(l),"onUpdate:modelValue":e[0]||(e[0]=u=>O(l)?l.value=u:null),class:"demo-tabs",onTabClick:s},{default:b(()=>[f(r,{label:"动态表单",name:"dynamic-form"},{default:b(()=>[e[1]||(e[1]=d("div",null,"通过一组配置的json，直接通过h函数转化成对应的动态表单，方便表单的生成和回显，我这里仅仅只是为了做个示范，并没有完整地去实现这个动态表单，实际需要实现的时候需要考虑的点会很多，这里只是提出一个思路，在需要的时候再慢慢完善，同时这个思路也可以用在动态配置表单上，通过选择表单的字段类型生成json配置，然后再通过json配置生成对应的表单，都是一理通百理通的。",-1)),e[2]||(e[2]=d("pre",null,`const config = [
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
                `,-1)),f(M,{config:i,formData:y(o)},null,8,["formData"])]),_:1,__:[1,2]})]),_:1},8,["modelValue"])])}}}),X=v(U,[["__scopeId","data-v-d4b9da4a"]]);export{X as default};
