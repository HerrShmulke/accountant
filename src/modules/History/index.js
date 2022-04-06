import { router as $router } from '@/plugins/router';

// Services
import { setHook } from '@/services/hook';

// Constants
import { HISTORY } from './constants/routes';

import router from './router';

setHook('addExpense', () => {
  $router.push({ name: HISTORY });
});

export default {
  router,
};
