import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import components from './components/UI'

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(createPinia()).mount('#app')
