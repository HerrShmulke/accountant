import { ADD } from './constants/routes';
import { TITLE } from './constants/common';

/** @type {import('vue-router').RouteRecordRaw} */
const route = {
  path: '/add',
  component: () => import('./pages/Add.vue'),
  name: ADD,
  meta: {
    layout: 'default',
    navigation: {
      iconName: 'add',
      text: TITLE,
      params: {
        title: TITLE,
      },
    },
  },
};

export default function (router) {
  router.addRoute(route);
}
