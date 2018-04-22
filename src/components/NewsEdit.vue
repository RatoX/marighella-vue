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
      <font-awesome-icon
        :icon="['fas', 'edit']"
        class="news-edit__show-edit"
        size="lg"
        @click="toggleEditMode"/>
      <font-awesome-icon
        :icon="['fas', 'th']"
        class="news-edit__show-metadata"
        size="lg"
        @click="toggleMetadataMode"/>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="news-edit__show-code"
        size="lg"
        @click="toggleCodeMode"/>
    </header>
    <transition name="slide-fade">
      <section
        v-if="editMode"
        class="news-edit__form">
        <section class="news-edit__required">
          <editable-field
            data-key="hat"
            class="news-edit__item"
            placeholder="Preencha o chapeu"/>
          <editable-field
            data-key="title"
            class="news-edit__item"
            icon="bullhorn"
            placeholder="Preencha o titulo"/>
          <tags
            class="news-edit__item"/>
        </section>
        <Vueditor
          class="news-edit__editor"/>
      </section>
      <section
        v-if="codeMode"
        class="news-edit__code">
        <show-code />
      </section>
      <section
        v-if="metadataMode"
        class="news-edit__metadata">
        <metadata />
      </section>
    </transition>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import EditableField from './EditableField';
import Tags from './Tags';
import ShowCode from './ShowCode';
import Metadata from './Metadata';

export default {
  name: 'NewsEdit',

  components: {
    FontAwesomeIcon,
    EditableField,
    Tags,
    ShowCode,
    Metadata,
  },

  data() {
    return {
      mode: 'edit',
    };
  },

  computed: {
    item() {
      return this.$store.getters.newsToEdit;
    },

    codeMode() {
      return this.mode === 'code';
    },

    metadataMode() {
      return this.mode === 'metadata';
    },

    editMode() {
      return this.mode === 'edit';
    },
  },

  methods: {
    backToSearch() {
      this.$router.push('/news/');
    },

    toggleCodeMode() {
      this.mode = 'code';
    },

    toggleMetadataMode() {
      this.mode = 'metadata';
    },

    toggleEditMode() {
      this.mode = 'edit';
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

.news-edit__editor {
  margin-top: 30px;
  flex: 1 0 100%;
}

.news-edit__back,
.news-edit__show-code,
.news-edit__show-edit,
.news-edit__show-metadata {
  cursor: pointer;
  transition: color .2s ease-in-out;
}

.news-edit__back:hover,
.news-edit__show-code:hover,
.news-edit__show-edit:hover,
.news-edit__show-metadata:hover {
  color: #786FA6;
}

.news-edit__show-metadata,
.news-edit__show-edit {
  margin-right: 25px;
}

.news-edit__form {
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
}
</style>
