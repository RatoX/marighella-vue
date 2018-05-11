<template>
  <section
    class="news-body">
    <section class="news-body__required">
      <editable-field
        data-key="title"
        class="news-body__item"
        icon="bullhorn"
        placeholder="Preencha o titulo"/>
      <editable-field
        data-key="description"
        class="news-body__item"
        icon="text-height"
        type="textarea"
        placeholder="Preencha a linha fina"/>
      <tags
        class="news-body__item"/>
    </section>
    <Vueditor
      v-on-clickaway="persistBody"
      ref="editor"
      class="news-body__editor"/>
  </section>
</template>

<script>
import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mixin as clickaway } from 'vue-clickaway';
import EditableField from './EditableField';
import Tags from './Tags';

export default {
  name: 'NewsBody',

  components: {
    FontAwesomeIcon,
    EditableField,
    Tags,
  },

  mixins: [clickaway],

  mounted() {
    const body = this.$store.getters.newsToEdit.body;
    console.log('body:', body);
    this.$refs.editor.setContent(body);

    Vue.nextTick();
  },

  methods: {
    persistBody() {
      this.$store.commit('SET_VALUE', { dataKey: 'body', value: this.$refs.editor.getContent() });
    },
  },
};
</script>

<style scoped>
.news-body {
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
}

.news-body {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
}

.news-body__required {
  margin-top: 20px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.news-body__item +
.news-body__item {
  margin-top: 20px;
}

.news-body__editor {
  margin-top: 30px;
  flex: 1 0 100%;
}
</style>
