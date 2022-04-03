import { createApp } from 'vue';
import App from './App.vue';
import router from '@/plugins/router';
import 'normalize.css';
import '@/assets/scss/index.scss';
import BalanceModule from '@/modules/Balance';
import { registerModules } from '@/utils/register-modules';

// Base components
import VCard from '@/components/VCard.vue';
import VCardList from '@/components/VCardList.vue';

const app = createApp(App);

app.component('VCard', VCard);
app.component('VCardList', VCardList);

registerModules({
  balance: BalanceModule,
});

app.use(router);

app.mount('#app');
