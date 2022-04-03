import { ADD } from './constants/routes';

/** @type {import('vue-router').RouteRecordRaw} */
const route = {
  path: '/add',
  component: () => import('./pages/Add.vue'),
  name: ADD,
  meta: {
    layout: 'default',
    navigation: {
      iconName: 'add',
      text: 'Добавить',
    },
  },
};

export default function (router) {
  router.addRoute(route);
}
