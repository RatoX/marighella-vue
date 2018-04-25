<template>
  <section class="metadata">
    <editable-field
      v-for="item in skelleton"
      :key="item.name"
      :data-key="item.name"
      :title="item.title"
      :type="item.type.view"
      :placeholder="item.placeholder"
      :data-options="item.type.options"
      class="metadata__item"
      icon="bullhorn"/>
  </section>
</template>

<script>
import { mapState } from 'vuex';
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

  computed: {
    ...mapState(['skelleton']),
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
