import './bootstrap';

import { createApp } from 'vue';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

window.Swal = Swal;
const toast = Swal.mixin({
 toast:true,
 position:'top-end',
 showConfirmButton:false,
 timer: 3000,
 timeProgressBar:true,
});
window.toast = toast;

import router from './router';

import App from './Components/App.vue';

createApp(App).use(router).mount("#app");
