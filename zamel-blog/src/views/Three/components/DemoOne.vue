<script setup lang="ts">
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

const container = ref<HTMLElement | null>(null);
const objLoader = new OBJLoader();
const mtlLoader = new MTLLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // 视野角度
    1, // 长宽比
    0.1, // 近截面
    1000, // 远截面
);
const renderer = new THREE.WebGLRenderer({
    alpha: true,
});
const controls = new OrbitControls(camera, renderer.domElement);

const init = async () => {
    const model = await loadModel('/bugatti/bugatti.obj');
    scene.add(model);

    const ambientLight = new THREE.AmbientLight(0x404040); // 环境光
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,1); // 平行光
    directionalLight.position.set(-10, -10, 10);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff,1, 100); // 点光源
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff,1, 100); // 聚光灯
    spotLight.position.set(-10, 10, 10);
    spotLight.target.position.set(0,0, 0);
    scene.add(spotLight);

    camera.position.set(10, 10, 10);
    camera.lookAt(10, 10, 0);
    controls.update();

    renderer.setSize(500, 500);
    renderer.setClearColor(0xffffff, 0);
    container.value.appendChild(renderer.domElement);
};

function render() {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}
render();

const loadModel = (path: string) => {
    return new Promise((resolve, reject) => {
        mtlLoader.load('/bugatti/bugatti.mtl', materials => {
            materials.preload();
            objLoader.setMaterials(materials);
            objLoader.load(
            // resource URL
            path,
                // called when resource is loaded
                function ( object ) {
                    resolve(object);
                },
                // called when loading is in progresses
                function ( xhr ) {
                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                },
                // called when loading has errors
                function ( error ) {
                    reject('An error happened');
                }
            );
        });
    });
};

onMounted(() => {
    init();
});
</script>

<template>
  <div ref="container" class="container">
  </div>
</template>

<style lang="less" scoped>
.container {
    width: 500px;
    height: 500px;
}
</style>
