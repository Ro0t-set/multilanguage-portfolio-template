import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { Quasar } from 'quasar'
import '@fortawesome/fontawesome-free/css/all.css'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'


const app = createApp(App)

app.use(Quasar, {
    plugins: {},
  })

const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedState)


app.mount('#app')