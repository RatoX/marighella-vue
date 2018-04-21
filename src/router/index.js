import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NewsSearch from '@/components/NewsSearch';
import NewsEdit from '@/components/NewsEdit';

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
      name: 'NewsEdit',
      component: NewsEdit,
    },
  ],
});
