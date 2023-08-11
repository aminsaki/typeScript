import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
    // You can set your default options here
};
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Toast, options);
app.mount('#app')
