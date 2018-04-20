<template>
  <section class="news">
    <header class="news__header">
      <font-awesome-icon :icon="['fas', 'search']" />
      <input
        v-model.trim="query"
        class="news__search-box"
        placeholder="Pesquisar..."
        @keyup.enter="doSearch">
      <font-awesome-icon
        :icon="['fas', 'sign-out-alt']"
        class="news__logout"/>
    </header>
    <strong class="news__username">Olá, Rodrigo.</strong>
    <search-tags/>
    <hr
      v-if="queries.length > 0"
      class="news__separator">
    <section class="news__items">
      <transition-group
        name="slide-fade">
        <news-card
          v-for="item in news"
          :key="item.title"
          :title="item.title"
          class="news__item"/>
      </transition-group>
    </section>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import SearchTags from './SearchTags';
import NewsCard from './NewsCard';

export default {
  name: 'News',

  components: {
    FontAwesomeIcon,
    SearchTags,
    NewsCard,
  },

  data() {
    return {
      query: '',
    };
  },

  computed: {
    news() {
      return this.$store.getters.news;
    },

    queries() {
      return this.$store.getters.queries;
    },
  },

  methods: {
    doSearch() {
      this
        .$store
        .commit('ADD_QUERY_SEARCH', this.query);

      this
        .$store
        .dispatch('SEARCH')
        .then(() => {
          this.query = '';
        });
    },
  },
};
</script>

<style scoped>
.news {
  display: block;
  width: 100%;
  padding: 0;
}

.news__header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
}

.news__search-box {
  font-size: 15px;
  margin: 0 10px;
  border: none;
  width: 100%;
}

.news__separator {
  width: 90%;
  max-width: 600px;
  height: 1px;
  border: none;
  background-color: currentColor;
  margin: 10px auto;
  padding: 0;
}

.news__username {
  margin-top: 10px;
  display: block;
}

.news__logout {
  margin-left: auto;
  cursor: pointer;
}

.news__items {
  padding: 0 10%;
}

.news__item +
.news__item {
  margin-top: 10px;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
