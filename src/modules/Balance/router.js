import { BALANCE, HOME } from './constants/routes';

/** @type {import('vue-router').RouteRecordRaw} */
const route = {
  path: '/balance',
  component: () => import('./pages/Balance.vue'),
  name: BALANCE,
  meta: {
    layout: 'default',
    navigation: {
      iconName: 'wallet',
      text: 'Баланс',
      params: {
        title: 'Баланс',
      },
    },
  },
};

/** @type {import('vue-router').RouteRecordRaw} */
const homeRoute = {
  path: '/',
  redirect: { name: BALANCE },
  name: HOME,
};

export default function (router) {
  router.addRoute(route);
  router.addRoute(homeRoute);
}
