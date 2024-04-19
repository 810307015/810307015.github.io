import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import initWebAssembly from '@/assembly/pkg/assembly';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';


import App from './App.vue'
import router from './router'

initWebAssembly();

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
