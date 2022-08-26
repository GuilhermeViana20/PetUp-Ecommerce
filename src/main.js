import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/bootstrap-icons.css'
import './assets/css/style.css'

createApp(App).use(router).mount('#app')
