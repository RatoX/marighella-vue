<template>
  <section
    :title="placeholder"
    class="editable-field"
    @click="editField">
    <font-awesome-icon
      :icon="fontIcon"
      class="editable-field__icon"/>
    <span
      v-if="!editMode && value && !isTextAreaType"
      class="editable-field__span">
      {{ value }}
    </span>
    <p
      v-if="!editMode && value && isTextAreaType"
      class="editable-field__paragraph">{{ value }}</p>
    <span
      v-if="!editMode && !value"
      class="editable-field__placeholder">
      {{ placeholder }}
    </span>
    <input
      v-on-clickaway="persistValue"
      v-if="editMode && isInputType"
      ref="inputText"
      v-model="tmpValue"
      :type="type"
      class="editable-field__input"
      @keyup.enter="persistValue">
    <textarea
      v-on-clickaway="persistValue"
      v-if="editMode && isTextAreaType"
      ref="inputText"
      v-model="tmpValue"
      class="editable-field__textarea"
      @keyup.enter="persistValue" />
    <select
      v-if="editMode && isSelectType"
      class="editable-field__select"
      @change="persistValue">
      <option value="-1">Selecione</option>
      <option value="1">Option 1</option>
      <option value="4">Oçao</option>
    </select>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mixin as clickaway } from 'vue-clickaway';
import Vue from 'vue';
import autosize from 'autosize';

export default {
  name: 'EditableField',

  components: {
    FontAwesomeIcon,
  },

  mixins: [clickaway],

  props: {
    dataKey: {
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

    type: {
      type: String,
      default: 'text',
    },
  },

  data() {
    return {
      editMode: false,
      tmpValue: '',
    };
  },

  computed: {
    fontIcon() {
      return ['fas', this.icon];
    },

    isInputType() {
      return ['text', 'date'].includes(this.type);
    },

    isTextAreaType() {
      return this.type === 'textarea';
    },

    isSelectType() {
      return this.type === 'select';
    },

    value() {
      return this.$store.getters.newsToEdit[this.dataKey];
    },
  },

  beforeMount() {
    this.tmpValue = this.$store.getters.newsToEdit[this.dataKey];
  },

  methods: {
    editField() {
      this.editMode = true;

      Vue.nextTick(() => {
        if (this.$refs.inputText) {
          this.$refs.inputText.focus();
        }

        if (this.isTextAreaType) {
          autosize(this.$refs.inputText);
        }
      });
    },

    persistValue() {
      this.editMode = false;
      this.$store.commit('SET_VALUE', {
        dataKey: this.dataKey,
        value: this.tmpValue.trim(),
      });
    },
  },
};
</script>

<style scoped>
.editable-field {
  cursor: pointer;
  min-height: 25px;
  text-align: left;
  display: flex;
  max-width: 600px;
  align-items: center;
}

.editable-field__icon {
  margin-right: 15px;
}

.editable-field__select {
  background-color: #FFF;
}

.editable-field__select,
.editable-field__textarea,
.editable-field__input {
  border: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  border-bottom: 1px solid;
  width: 70%;
  display: block;
}

.editable-field__span,
.editable-field__paragraph,
.editable-field__placeholder {
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
}

.editable-field__paragraph {
  white-space: pre-wrap;
}

.editable-field__placeholder {
  font-style: italic;
  text-transform: capitalize;
}

.editable-field__select:focus,
.editable-field__textarea:focus,
.editable-field__input:focus {
  outline: none;
}
</style>
