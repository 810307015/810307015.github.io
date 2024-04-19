<script lang="ts" setup>
import type { UploadFile } from 'element-plus';
import { cropImage } from '@/assembly/pkg/assembly';
import { ElSpace, ElUpload, ElButton, ElInputNumber } from 'element-plus';

const imageList = ref<string[]>([]);
const rows = ref<number>(2);
const cols = ref<number>(2);

const changeHandler = (file: UploadFile) => {
    const raw = file.raw!;
    raw.arrayBuffer().then((buffer: ArrayBuffer) => {
        let list: number[][] = cropImage(new Uint8Array(buffer), rows.value, cols.value);
        list.forEach((unit8Array: number[]) => {
            const blob = new Blob([new Uint8Array(unit8Array)], { type: 'image/png' });
            imageList.value.push(URL.createObjectURL(blob));
        });
    });
};

const reset = () => {
    imageList.value = [];
};

</script>

<template>
    <main>
        <div class="header">使用rust的image包进行图片裁剪然后通过webassembly进行调用，直接对大尺寸图片进行等比例裁剪，图片越大，速度会表现得比原生js更快</div>
        <el-space style="margin-bottom: 10px;">
            <div>
                <span>需要裁剪成几行：</span>
                <el-input-number v-model="rows" :min="1" :max="10" />
            </div>
            <div>
                <span>需要裁剪成几列：</span>
                <el-input-number v-model="cols" :min="1" :max="10" />
            </div>
        </el-space>
        <ElUpload
            action="#"
            :list-type="'picture'"
            :auto-upload="false"
            :limit="1"
            @change="changeHandler"
        >
            <el-button>上传</el-button>
            <el-button @click.stop="reset">重置</el-button>
        </ElUpload>
        

        <div v-if="imageList.length" class="image-list">
            <div v-for="(_, i) in new Array(rows).fill(0)" class="row">
                <div v-for="(_, j) in new Array(cols).fill(0)" class="col">
                    <el-image
                        style="width: 100px;"
                        :src="imageList[i * cols + j]"
                        fit="contain"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="less" scoped>
.header {
    margin-bottom: 10px;
}
.image-list {
    .row {
        display: flex;
        align-items: center;
    }
    .col {
        &:not(:first-child) {
            margin-left: 5px;
        }
    }
}
</style>