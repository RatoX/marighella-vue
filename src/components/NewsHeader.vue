<template>
  <header class="news-header">
    <font-awesome-icon
      :icon="['fas', 'arrow-left']"
      class="news-header__back"
      size="2x"
      @click="backToSearch"/>
    <strong
      class="news-header__title">
      Editar
    </strong>
    <font-awesome-icon
      :icon="['fas', 'edit']"
      class="news-header__show-edit"
      size="lg"
      title="Editar corpo da noticia"
      @click="toggleEditMode"/>
    <font-awesome-icon
      :icon="['fas', 'th']"
      class="news-header__show-metadata"
      size="lg"
      title="Editar metadata"
      @click="toggleMetadataMode"/>
    <font-awesome-icon
      :icon="['fas', 'code']"
      class="news-header__show-code"
      size="lg"
      title="Visualizar codigo"
      @click="toggleCodeMode"/>
  </header>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'NewsHeader',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    newsId() {
      return this.$route.params.id;
    },
  },

  methods: {
    backToSearch() {
      this.$router.push('/news/');
    },

    toggleCodeMode() {
      this.$router.push(`/news/${this.newsId}/code/`);
    },

    toggleMetadataMode() {
      this.$router.push(`/news/${this.newsId}/metadata/`);
    },

    toggleEditMode() {
      this.$router.push(`/news/${this.newsId}/edit/`);
    },
  },
};
</script>

<style scoped>
.news-header {
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  width: 100%;
}

.news-header__title {
  padding: 20px 30px;
  width: 100%;
  text-align: left;
}

.news-header__back,
.news-header__show-code,
.news-header__show-edit,
.news-header__show-metadata {
  cursor: pointer;
  transition: color .2s ease-in-out;
}

.news-header__back:hover,
.news-header__show-code:hover,
.news-header__show-edit:hover,
.news-header__show-metadata:hover {
  color: #786FA6;
}

.news-header__show-metadata,
.news-header__show-edit {
  margin-right: 25px;
}
</style>
