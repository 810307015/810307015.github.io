<script setup lang="ts">
interface PictureItem {
  id: number;
  name: string;
  src: string;
}

interface SpherePicture extends PictureItem {
  x: number;
  y: number;
  z: number;
  scale: number;
  width: number;
  height: number;
}

const allPictures: PictureItem[] = [
  { id: 0, name: 'banner0', src: new URL('@/assets/image/banner0.jpeg', import.meta.url).href },
  { id: 1, name: 'banner1', src: new URL('@/assets/image/banner1.jpeg', import.meta.url).href },
  { id: 2, name: 'banner2', src: new URL('@/assets/image/banner2.jpeg', import.meta.url).href },
  { id: 3, name: 'banner3', src: new URL('@/assets/image/banner3.jpeg', import.meta.url).href },
  { id: 4, name: 'banner4', src: new URL('@/assets/image/banner4.jpeg', import.meta.url).href },
  { id: 5, name: 'banner5', src: new URL('@/assets/image/banner5.jpeg', import.meta.url).href },
  { id: 6, name: 'banner6', src: new URL('@/assets/image/banner6.jpeg', import.meta.url).href },
  { id: 7, name: 'banner7', src: new URL('@/assets/image/banner7.jpeg', import.meta.url).href },
  { id: 8, name: 'banner8', src: new URL('@/assets/image/banner8.jpeg', import.meta.url).href },
  { id: 9, name: 'banner9', src: new URL('@/assets/image/banner9.jpeg', import.meta.url).href },
  { id: 10, name: 'banner10', src: new URL('@/assets/image/banner10.jpeg', import.meta.url).href },
  { id: 11, name: 'banner11', src: new URL('@/assets/image/banner11.jpeg', import.meta.url).href },
  { id: 12, name: 'banner12', src: new URL('@/assets/image/banner12.jpeg', import.meta.url).href },
  { id: 13, name: 'banner13', src: new URL('@/assets/image/banner13.jpeg', import.meta.url).href },
  { id: 14, name: 'banner14', src: new URL('@/assets/image/banner14.jpeg', import.meta.url).href },
  { id: 15, name: 'banner15', src: new URL('@/assets/image/banner15.jpeg', import.meta.url).href },
  { id: 16, name: 'banner16', src: new URL('@/assets/image/banner16.jpeg', import.meta.url).href },
  { id: 17, name: 'banner17', src: new URL('@/assets/image/banner17.jpeg', import.meta.url).href }
];

const keyword = ref('');
const hoveredId = ref<number | null>(null);
const isPaused = ref(false);
const stageWidth = ref(1200);

const filteredPictures = computed(() => {
  const filterText = keyword.value.trim().toLowerCase();
  if (!filterText) {
    return allPictures;
  }
  return allPictures.filter((item) => item.name.toLowerCase().includes(filterText));
});

const sphereRadius = computed(() => {
  if (stageWidth.value < 768) return 160;
  if (stageWidth.value < 1080) return 210;
  return 260;
});

const spherePictures = computed<SpherePicture[]>(() => {
  const items = filteredPictures.value;
  const count = items.length;
  if (!count) return [];
  const radius = sphereRadius.value;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return items.map((item, index) => {
    const y = 1 - (index / Math.max(count - 1, 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    const depth = (z + 1) / 2;
    const scale = 0.7 + depth * 0.6;
    const width = 84 + depth * 50;
    const height = 60 + depth * 34;

    return {
      ...item,
      x: x * radius,
      y: y * radius,
      z: z * radius,
      scale,
      width,
      height
    };
  });
});

const updateStageWidth = () => {
  stageWidth.value = window.innerWidth;
};

onMounted(() => {
  updateStageWidth();
  window.addEventListener('resize', updateStageWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateStageWidth);
});
</script>

<template>
  <section class="picture-wall">
    <header class="toolbar">
      <h2>球体照片墙</h2>
      <el-input
        v-model="keyword"
        clearable
        placeholder="按图片名筛选，例如: banner1"
      />
    </header>

    <div class="sphere-scene" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
      <div class="sphere-track" :class="{ paused: isPaused }">
        <article
          v-for="picture in spherePictures"
          :key="picture.id"
          class="photo-card"
                    :style="{
            width: `${picture.width}px`,
            height: `${picture.height}px`,
            transform: `translate3d(${picture.x}px, ${picture.y}px, ${picture.z}px) scale(${(hoveredId === picture.id ? picture.scale * 1.28 : picture.scale).toFixed(3)})`,
            zIndex: String(Math.round((picture.z + sphereRadius) * 10))
          }"
          @mouseenter="hoveredId = picture.id; isPaused = true"
          @mouseleave="hoveredId = null; isPaused = false"
        >
          <img
            :src="picture.src"
            :alt="picture.name"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          >
        </article>
      </div>
      <p v-if="spherePictures.length === 0" class="empty">没有匹配图片，换个关键词试试。</p>
    </div>
  </section>
</template>

<style scoped>
.picture-wall {
  width: 100%;
}

.toolbar {
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 140px minmax(220px, 420px);
  align-items: center;
  gap: 12px;
}

.toolbar h2 {
  margin: 0;
}

.sphere-scene {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: radial-gradient(circle at 50% 30%, #ffffff 0%, #edf1f5 42%, #d8dfe7 100%);
  perspective: 1200px;
  overflow: hidden;
}

.sphere-track {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 24s linear infinite;
}

.sphere-track.paused {
  animation-play-state: paused;
}

.photo-card {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -42px;
  margin-top: -30px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  transform-style: preserve-3d;
}

.photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.empty {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  text-align: center;
  color: #5f6368;
}

@keyframes spin {
  from {
    transform: rotateX(-14deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-14deg) rotateY(360deg);
  }
}

@media screen and (max-width: 768px) {
  .toolbar {
    grid-template-columns: 1fr;
  }

  .sphere-scene {
    min-height: 420px;
  }
}
</style>
