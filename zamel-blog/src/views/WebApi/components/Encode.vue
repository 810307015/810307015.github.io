<script setup lang="ts">
const beforeStr = ref<string>('');
const afterStr = ref<string>('');
const type = ref<string>('url');
const options = ref<Array<{ label: string, value: string }>>([
    {
        label: 'URL编码',
        value: 'url',
    },
    {
        label: 'Unicode编码',
        value: 'unicode',
    },
    {
        label: '二进制编码',
        value: 'byte',
    },
    {
        label: 'base64编码',
        value: 'base64',
    },
]);

const stringToUnicode = (str: string) => {
    let result = '';
    for (var i = 0; i < str.length; i++) {
        result += '\\u' + str.charCodeAt(i).toString(16).padStart(4, '0');
    }
    return result;
}

const unicodeToString = (unicode: string) => {
    const reg = /[0-9a-fA-F]+/g;
    let result = '';
    unicode.replace(reg, (match) => {
        result += String.fromCharCode(parseInt(match, 16));
    });
    return result;
}

const stringToByte = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str).join(',');
};

const byteToString = (bytes: string) => {
    const unit8Array = new Uint8Array(bytes.split(','));
    const decoder = new TextDecoder();
    return decoder.decode(unit8Array);
};

const stringToBase64 = (str: string) => {
    // 由于btoa有字符限制，不能处理中文编码，只能手动将字符串先通过url编码变成utf-8编码，再通过btoa进行base64编码
    return btoa(encodeURIComponent(str));
};

const base64ToString = (base64: string) => {
    return decodeURIComponent(atob(base64));
};

const commonFn = (isEncode = false) => {
    let fn = () => {};
    switch (type.value) {
        case 'url':
            fn = isEncode ? encodeURIComponent : decodeURIComponent;
            break;
        case 'unicode':
            fn = isEncode ? stringToUnicode : unicodeToString;
            break;
        case 'byte':
            fn = isEncode ? stringToByte : byteToString;
            break;
        case 'base64':
            fn = isEncode ? stringToBase64 : base64ToString;
            break;
        default:
            break;
    }
    if (isEncode) {
        afterStr.value = fn(beforeStr.value);
    } else {
        beforeStr.value = fn(afterStr.value);
    }
};
</script>

<template>
    <el-space size="large" direction="vertical" alignment="flex-start">
        <el-select v-model="type" placeholder="请选择加密/解密的类型" size="large" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-space size="large">
            <el-input v-model="beforeStr" type="textarea" :rows="10" :cols="30" />
            <el-space direction="vertical" size="large">
                <el-button type="primary" @click="commonFn(true)">
                    编码
                    <el-icon>
                        <Right />
                    </el-icon>
                </el-button>
                <el-button type="primary" @click="commonFn(false)">
                    解码
                    <el-icon>
                        <Back />
                    </el-icon>
                </el-button>
            </el-space>
            <el-input v-model="afterStr" type="textarea" :rows="10" :cols="30" />
        </el-space>
    </el-space>
</template>