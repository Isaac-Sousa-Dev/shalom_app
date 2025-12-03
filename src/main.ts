import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import PanelMenu from 'primevue/panelmenu';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('Button', Button)
app.component('IftaLabel', IftaLabel)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Card', Card)
app.component('Avatar', Avatar)
app.component('ProgressBar', ProgressBar)
app.component('PanelMenu', PanelMenu)
app.mount('#app')
