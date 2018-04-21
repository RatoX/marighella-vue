<template>
  <section
    v-on-clickaway="persistText"
    class="editable-field"
    @click="editField">
    <font-awesome-icon
      :icon="fontIcon"
      class="editable-field__icon"/>
    <span
      v-if="!editMode && text"
      class="editable-field__span">
      {{ text }}
    </span>
    <span
      v-if="!editMode && !text"
      class="editable-field__placeholder">
      {{ placeholder }}
    </span>
    <input
      v-if="editMode"
      ref="inputText"
      v-model="text"
      class="editable-field__input"
      type="text"
      @keyup.enter="persistText">
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mixin as clickaway } from 'vue-clickaway';
import Vue from 'vue';

export default {
  name: 'EditableField',

  components: {
    FontAwesomeIcon,
  },

  mixins: [clickaway],

  props: {
    text: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: 'Preencha este campo',
    },

    icon: {
      type: String,
      default: 'book',
    },
  },

  data() {
    return {
      editMode: false,
    };
  },

  computed: {
    fontIcon() {
      return ['fas', this.icon];
    },
  },

  methods: {
    editField() {
      this.editMode = true;

      Vue.nextTick(() => {
        this.$refs.inputText.focus();
      });
    },

    persistText() {
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.editable-field {
  cursor: pointer;
  height: 25px;
  text-align: left;
}

.editable-field__icon {
  margin-right: 5px;
}

.editable-field__input {
  border: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  border-bottom: 1px solid;
  width: 70%;
  text-transform: capitalize;
}

.editable-field__span,
.editable-field__placeholder {
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
  text-transform: capitalize;
}

.editable-field__placeholder {
  font-style: italic;
}

.editable-field__input:focus {
  outline: none;
}
</style>
