import { BALANCE, HOME } from './constants/routes';
import { TITLE } from './constants/common';

/** @type {import('vue-router').RouteRecordRaw} */
const route = {
  path: '/balance',
  component: () => import('./pages/Balance.vue'),
  name: BALANCE,
  meta: {
    layout: 'default',
    navigation: {
      iconName: 'wallet',
      text: TITLE,
      params: {
        title: TITLE,
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
