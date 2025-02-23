import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedState)


app.mount('#app')