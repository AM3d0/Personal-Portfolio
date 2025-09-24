import './assets/main.css'

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'


import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Avatar from 'primevue/avatar';
import AnimateOnScroll from 'primevue/animateonscroll';





const app = createApp(App);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Avatar', Avatar);
app.component('AnimateOnScroll', AnimateOnScroll);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app');

