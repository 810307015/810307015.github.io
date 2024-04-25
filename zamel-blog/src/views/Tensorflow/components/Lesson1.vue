<script setup lang="ts">
import * as tfvis from '@tensorflow/tfjs-vis';
import * as tf from '@tensorflow/tfjs';

const container = ref<HTMLDivElement | null>(null);
const container1 = ref<HTMLDivElement | null>(null);
const container2 = ref<HTMLDivElement | null>(null);
const container3 = ref<HTMLDivElement | null>(null);
const container4 = ref<HTMLDivElement | null>(null);

const getData = async () => {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
        .filter(car => (car.mpg != null && car.horsepower != null));

    return cleaned;
};

const run = async () => {
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,
    }));
    tfvis.render.scatterplot(
        container1.value,
        {
            values
        },
        {
            xLabel: 'Horsepower(马力)',
            yLabel: 'MPG(每加仑的英里数)',
            height: 300
        }
    );

    const model = createModel();
    tfvis.show.modelSummary(container2.value, model);

    // Convert the data to a form we can use for training.
    const tensorData = convertToTensor(data);
    const { inputs, labels } = tensorData;

    // Train the model
    await trainModel(model, inputs, labels);
    console.log('Done Training');

    // Make some predictions using the model and compare them to the original data
    testModel(model, data, tensorData);
};

const createModel = () => {
    const model = tf.sequential(); // 其输入直接向下流至其输出

    // 输入与矩阵（称为“权重”）相乘，并向结果添加一个数字（称为“偏差”）
    model.add(tf.layers.dense({
        inputShape: [1], // 由于这是网络的第一层，因此我们需要定义 inputShape, 【1】代表输入的是一维数据，只有一个变量
        units: 1, // 设置权重矩阵在层中的大小，全连接层中的神经元数量，越大越复杂
        useBias: true, // 是否在神经网络模型中使用偏置项
    }));
    model.add(tf.layers.dense({units: 50, activation: 'sigmoid'}));
    // dense 是一种层，可将输入与矩阵（称为“权重”）相乘，并向结果添加一个数字（称为“偏差”）
    model.add(tf.layers.dense({
        units: 1,
        useBias: true
    }));

    return model;
};

const convertToTensor = (data) => {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {
        // Step 1. Shuffle the data数据重排
        tf.util.shuffle(data);

        // Step 2. Convert data to Tensor 转化为张量
        const inputs = data.map(d => d.horsepower)
        const labels = data.map(d => d.mpg);

        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        // 数据归一化
        const inputMax = inputTensor.max();
        const inputMin = inputTensor.min();
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();

        const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

        return {
            inputs: normalizedInputs,
            labels: normalizedLabels,
            // Return the min/max bounds so we can use them later.
            inputMax,
            inputMin,
            labelMax,
            labelMin,
        }
    });
}

const trainModel = async (model, inputs, labels) => {
    // Prepare the model for training.
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });

    const batchSize = 32;
    const epochs = 50;

    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(
            container3.value,
            ['loss', 'mse'],
            { height: 200, callbacks: ['onEpochEnd'] }
        )
    });
}

const testModel = (model, inputData, normalizationData) => {
    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.
    const [xs, preds] = tf.tidy(() => {

        const xs = tf.linspace(0, 1, 100);
        const preds = model.predict(xs.reshape([100, 1]));

        const unNormXs = xs
            .mul(inputMax.sub(inputMin))
            .add(inputMin);

        const unNormPreds = preds
            .mul(labelMax.sub(labelMin))
            .add(labelMin);

        // Un-normalize the data
        return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => {
        return { x: val, y: preds[i] }
    });

    const originalPoints = inputData.map(d => ({
        x: d.horsepower, y: d.mpg,
    }));

    tfvis.render.scatterplot(
        container4.value,
        { values: [originalPoints, predictedPoints], series: ['original', 'predicted'] },
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
        }
    );
}

onMounted(async () => {
    run();
});

</script>

<template>
    <div>如果提供汽车的“马力”，模型将学习预测“每加仑的英里数”(MPG)。</div>
    <div ref="container" class="container">
        <div ref="container1"></div>
        <div ref="container2"></div>
        <div ref="container3"></div>
        <div ref="container4"></div>
    </div>
</template>
