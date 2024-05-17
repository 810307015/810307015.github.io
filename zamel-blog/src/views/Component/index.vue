<script setup lang="ts">
import DynamicForm from './components/DynamicForm.vue';
// import Background from './components/Background.vue';
// import Animation from './components/Animation.vue';
// import Layout from './components/Layout.vue';

const activeName = ref<string>('dynamic-form');

const handleClick = (tab: TabsPaneContext) => {
    activeName.value = tab.props.name;
};
const formData = reactive({
    username: 'Jack',
    age: 18,
    gender: 'female',
    hobby: 'sing'
});
const config = [
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
                ElMessage(`formData=${JSON.stringify(formData)}`)
            }
        },
    }
];
</script>

<template>
    <main>
        <div>vue组件相关</div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="动态表单" name="dynamic-form">
                <div>通过一组配置的json，直接通过h函数转化成对应的动态表单，方便表单的生成和回显，我这里仅仅只是为了做个示范，并没有完整地去实现这个动态表单，实际需要实现的时候需要考虑的点会很多，这里只是提出一个思路，在需要的时候再慢慢完善，同时这个思路也可以用在动态配置表单上，通过选择表单的字段类型生成json配置，然后再通过json配置生成对应的表单，都是一理通百理通的。</div>
                <pre>
const config = [
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
                ElMessage(`formData=${JSON.stringify(formData)}`)
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
&lt;DynamicForm :config="config" :formData="formData" /&gt;
                </pre>
                <DynamicForm :config="config" :formData="formData" />
            </el-tab-pane>
            <!-- <el-tab-pane label="背景" name="background">
                <Background />
            </el-tab-pane>
            <el-tab-pane label="动画" name="animation">
                <Animation />
            </el-tab-pane>
            <el-tab-pane label="盒模型和布局" name="layout">
                <Layout />
            </el-tab-pane> -->
        </el-tabs>
    </main>
</template>

<style lang="less" scoped>
.demo-tabs {
    min-width: 400px;
}
pre {
    background: #f2f1f1;
    padding: 20px;
    margin: 20px 0;
}
</style>
