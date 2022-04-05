import { HISTORY } from './constants/routes';

/** @type {import('vue-router').RouteRecordRaw} */
const route = {
  path: '/history',
  component: () => import('./pages/History.vue'),
  name: HISTORY,
  meta: {
    layout: 'default',
    navigation: {
      iconName: 'album',
      text: 'История',
    },
  },
};

export default function (router) {
  router.addRoute(route);
}
