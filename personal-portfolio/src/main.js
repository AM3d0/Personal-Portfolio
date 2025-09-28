import './assets/main.css'

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import 'primeicons/primeicons.css'


import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Avatar from 'primevue/avatar';
import Carousel from 'primevue/carousel';
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';
import TieredMenu from 'primevue/tieredmenu';
import AnimateOnScroll from 'primevue/animateonscroll';
import Card from 'primevue/card';









const app = createApp(App);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Avatar', Avatar);
app.component('Carousel', Carousel);
app.component('Menubar', Menubar);
app.component('Menu', Menu);
app.component('Card', Card);
app.component('TieredMenu', TieredMenu);
app.directive('animateonscroll', AnimateOnScroll);


app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app');

