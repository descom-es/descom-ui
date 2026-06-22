import { createApp } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and its corresponding "app.use" call
import DescomUi from '@/entry.esm';

createApp(Dev).use(DescomUi).mount('#app');
