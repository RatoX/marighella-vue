import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NewsSearch from '@/components/NewsSearch';
import NewsEdit from '@/components/NewsEdit';
import NewsBody from '@/components/NewsBody';
import NewsMetadata from '@/components/NewsMetadata';
import NewsCode from '@/components/NewsCode';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsSearch,
    },
    {
      path: '/news/:id',
      component: NewsEdit,
      children: [
        {
          path: 'edit',
          component: NewsBody,
        },
        {
          path: 'metadata',
          component: NewsMetadata,
        },
        {
          path: 'code',
          component: NewsCode,
        },
        {
          path: '',
          redirect: 'edit',
        },
      ],
    },
  ],
});
