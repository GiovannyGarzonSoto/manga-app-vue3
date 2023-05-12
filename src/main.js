import { createApp } from 'vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import App from './App.vue'
import axios from 'axios'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
