<template>
  <section class="tags">
    <font-awesome-icon
      :icon="['fas', 'tags']"
      class="tags__icon"/>
    <section
      v-on-clickaway="persistTag"
      class="tags__list">
      <span
        v-for="( item, index ) in tags"
        :key="index"
        class="tags__item"
        @click="removeTag(index)">
        {{ item }}
      </span>

      <font-awesome-icon
        v-if="!addMode"
        :icon="['fas', 'plus-circle']"
        size="lg"
        class="tags__add"
        @click="toggleAddTag"/>

      <input
        v-if="addMode"
        ref="inputText"
        v-model="tag"
        class="tags__input"
        type="text"
        @keyup.enter="persistTag">
    </section>
  </section>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mixin as clickaway } from 'vue-clickaway';
import Vue from 'vue';

export default {
  name: 'Tags',

  components: {
    FontAwesomeIcon,
  },

  mixins: [clickaway],

  data() {
    return {
      addMode: false,
      tag: '',
    };
  },

  computed: {
    tags() {
      return this.$store.getters.tags;
    },
  },

  methods: {
    removeTag(index) {
      this.$store.commit('REMOVE_TAG', index);
    },

    toggleAddTag() {
      this.addMode = true;

      Vue.nextTick(() => {
        this.$refs.inputText.focus();
      });
    },

    persistTag() {
      this.$store
        .commit('ADD_TAG', this.tag);

      this.addMode = false;
      this.tag = '';
    },
  },
};
</script>

<style scoped>
.tags {
  text-align: left;
  display: flex;
}

.tags__icon {
  margin-right: 10px;
}

.tags__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tags__item {
  color: #FFF;
  background-color: #574b90;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.tags__add {
  margin-left: 10px;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.tags__add:hover {
  color: #778BEB;
}

.tags__item:hover {
  background-color: #E66767;
  transform: scale(1.2);
}

.tags__item +
.tags__item {
  margin-left: 10px;
}

.tags__input {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  border: none;
  border-bottom: 1px solid;
  display: block;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
  width: 100%;
}

.tags__input:focus {
  outline: none;
}
</style>
