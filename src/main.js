import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/bootstrap-icons.css'
import './assets/css/style.css'

const filters = {
	price(input) {
		return input.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}
}
const app = createApp(App);
app.config.globalProperties.$filters = filters
app.use(router).mount('#app')