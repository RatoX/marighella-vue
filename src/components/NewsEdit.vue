<template>
  <section class="news-edit">
    <news-header />
    <router-view />
  </section>
</template>

<script>
import NewsHeader from './NewsHeader';

export default {
  name: 'NewsEdit',

  components: {
    NewsHeader,
  },
};
</script>

<style scoped>
.news-edit {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
}
</style>
