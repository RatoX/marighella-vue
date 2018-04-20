<template>
  <section class="search-tags">
    <figure
      v-for="( query, index ) in queries"
      :key="query"
      class="search-tags__tag"
      @click="removeQuery(index)">
      {{ query }}
    </figure>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'SearchTags',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    queries() {
      return this.$store.getters.queries;
    },
  },

  methods: {
    removeQuery(index) {
      this
        .$store
        .commit('REMOVE_QUERY_SEARCH', index);
    },
  },
};
</script>

<style scoped>
.search-tags {
  display: flex;
  padding: 20px 10px 0 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.search-tags__tag {
  background-color: #E66767;
  padding: 5px;
  text-transform: lowercase;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  cursor: pointer;
  transition: transform .2s ease-in-out;
  position: relative;
  font-size: 10px;
  margin-top: 10px;
}

.search-tags__tag:hover {
  transform: scale(1.2);
}

.search-tags__tag +
.search-tags__tag {
  margin-left: 10px;
}
</style>
