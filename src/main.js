import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router configuration
import store from './store'; // Import your Vuex store configuration

const app = createApp(App);
app.use(router); // Use Vue Router
app.use(store); // Use Vuex store
app.mount('#app');
