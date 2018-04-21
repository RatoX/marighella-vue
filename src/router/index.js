import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import News from '@/components/News';
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
      component: News,
    },
    {
      path: '/news/:id',
      name: 'NewsEdit',
      component: NewsEdit,
    },
  ],
});
