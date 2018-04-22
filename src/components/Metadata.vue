<template>
  <section class="metadata">
    <editable-field
      data-key="newsDate"
      class="metadata__item"
      type="date"
      icon="calendar"
      placeholder="Preencha o data da noticia"/>
    <editable-field
      data-key="section"
      class="metadata__item"
      type="select"
      icon="list-alt"
      placeholder="Selecione a sessao"/>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import EditableField from './EditableField';

export default {
  name: 'Metadata',

  components: {
    FontAwesomeIcon,
    EditableField,
  },

  data() {
    return { };
  },
};
</script>

<style scoped>
.metadata {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
}

.metadata__item +
.metadata__item {
  margin-top: 10px;
}
</style>
