<script setup lang="ts">
import { add, subtract, multiply, divide, } from '@/assembly/pkg/assembly';

const number1 = ref<number>(123456789);
const number2 = ref<number>(123456789);
const result = ref<string>('');

const caculate = (type: number) => {
    switch (type) {
        case 1:
            result.value = `${number1.value} + ${number2.value} = ${add(`${number1.value}`, `${number2.value}`)}`;
            break;
        case 2:
            result.value = `${number1.value} - ${number2.value} = ${subtract(`${number1.value}`, `${number2.value}`)}`;
            break;
        case 3:
            result.value = `${number1.value} x ${number2.value} = ${multiply(`${number1.value}`, `${number2.value}`)}`;
            break;
        case 4:
            result.value = `${number1.value} / ${number2.value} = ${divide(`${number1.value}`, `${number2.value}`)}`;
            break;
    }
};

</script>

<template>
    <el-space alignment="flex-start" direction="vertical" size="20" class="big-numebr-caculate">
        <div>使用rust来进行大数的计算后转成字符串输出，这样可以拓展js的精算范围，但是只是对整数比较友好，浮点数跟js是一样的，都是双精度的，浮点数的计算能力其实跟js差不多。不过也可以借助第三方库类似BigFloat等来实现值比较大的高精度的浮点数计算</div>
        <el-space size="10">
            <el-input-number v-model="number1" :precision="0" />
            <el-input-number v-model="number2" :precision="0" />
        </el-space>
        <el-space size="10">
            <el-button @click="caculate(1)">加</el-button>
            <el-button @click="caculate(2)">减</el-button>
            <el-button @click="caculate(3)">乘</el-button>
            <el-button @click="caculate(4)">除</el-button>
        </el-space>
        <div v-if="result">{{ result }}</div>
    </el-space>
</template>