<script lang="tsx">
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElRadioGroup,
    ElRadio,
    ElSelect,
    ElOption
} from 'element-plus';
const mapData = {
    'input': ElInput,
    'input-number': ElInputNumber,
    'radio': ElRadioGroup,
    'select': ElSelect,
};
interface ConfigItem {
    type: keyof mapData,
    options: Record<string, any>, // 传入对应组件的参数
    children: ConfigItem[], // 嵌套组件时使用，正常来说应该用不上
};

const render = (props) => {
    const {config, formData} = props;
    const children = [];
    config.forEach(item => {
        const { type, name, options } = item;
        options['modelValue'] = formData[name];
        options['onChange'] = (value) => {
            formData[name] = value;
        };
        const { _options, ...restProps } = options;
        if (type === 'radio') {
            children.push(h(ElFormItem, { name }, () => h(ElRadioGroup, restProps, () => _options.map(option => h(ElRadio, option)))));
        } else if (type === 'select') {
            children.push(h(ElFormItem, { name }, () => h(ElSelect, restProps, () => _options.map(option => h(ElOption, option)))));
        } else if (type === 'submit') {
            const { content, ...btnProps } = options;
            children.push(h(ElFormItem, { name }, () => h(ElButton, btnProps, () => content)));
        } else {
            children.push(h(ElFormItem, { name }, () => h(mapData[type], {
                ...options,
                modelValue: formData[name],
                onInput: (value) => {
                    formData[name] = value;
                }
            })));
        }
    });
    return h(ElForm, null, () => children);
};

export default {
    props: {
        config: {
            type: Array,
            default: () => [],
        },
        formData: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        return () => render(props);
    }
};
</script>
<template>

</template>
<style lang="less"></style>