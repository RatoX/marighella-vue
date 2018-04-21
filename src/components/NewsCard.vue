<template>
  <section
    class="news-card"
    @click.stop="edit">
    <font-awesome-icon :icon="['far', 'newspaper']" />
    <h1 class="news-card__title">{{ title }}</h1>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'NewsCard',

  components: {
    FontAwesomeIcon,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  methods: {
    edit() {
      this.$emit('edit');
    },
  },
};
</script>

<style scoped>
.news-card {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.news-card:hover {
  background-color: #2C3E50;
  color: #fff;
}

.news-card__title {
  margin-left: 10px;
}
</style>
