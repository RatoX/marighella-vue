<template>
  <section class="news-edit">
    <figure
      v-if="loading"
      class="news-edit__loading">
      <font-awesome-icon
        :icon="['fas', 'spinner']"
        spin
        size="3x"/>
    </figure>
    <news-header />
    <router-view />
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import NewsHeader from './NewsHeader';

export default {
  name: 'NewsEdit',

  components: {
    NewsHeader,
    FontAwesomeIcon,
  },

  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    this
      .$store
      .dispatch('EDIT', { id: this.$route.params.id })
      .then(() => {
        this.loading = false;
      });
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

.news-edit__loading {
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(44, 62, 80, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

</style>
