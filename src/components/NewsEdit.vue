<template>
  <section class="news-edit">
    <header class="news-edit__header">
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="news-edit__back"
        size="2x"
        @click="backToSearch"/>
      <strong
        class="news-edit__title">
        Editar
      </strong>
    </header>
    <section class="news-edit__required">
      <editable-field
        class="news-edit__item"
        text="chapeu"
        placeholder="Preencha o chapeu"/>
      <editable-field
        class="news-edit__item"
        text="titulo"
        icon="bullhorn"
        placeholder="Preencha o titulo"/>
      <tags
        class="news-edit__item"/>
    </section>
    <Vueditor
      class="news-edit__editor"/>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import EditableField from './EditableField.vue';
import Tags from './Tags.vue';

export default {
  name: 'NewsEdit',

  components: {
    FontAwesomeIcon,
    EditableField,
    Tags,
  },

  data() {
    return {
    };
  },

  computed: {
    item() {
      return this.$store.getters.newsToEdit;
    },
  },

  methods: {
    backToSearch() {
      this.$router.push('/news/');
    },
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

.news-edit__header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
}

.news-edit__required {
  margin-top: 20px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.news-edit__item +
.news-edit__item {
  margin-top: 20px;
}

.news-edit__title {
  padding: 20px 30px;
  width: 100%;
  text-align: left;
}

.news-edit__back {
  cursor: pointer;
}

.news-edit__editor {
  margin-top: 30px;
  flex: 1 0 100%;
}
</style>
