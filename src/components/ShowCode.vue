<template>
  <pre class="show-code">
    <code class="show-code__code">{{ metadata }}</code>
  </pre>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'ShowCode',

  components: {
    FontAwesomeIcon,
  },

  computed: {
    metadata() {
      const metadata = this.$store.getters.data;
      const string = JSON.stringify(metadata, null, 4);
      return string.trim();
    },
  },
};
</script>

<style scoped>
.show-code {
  padding: 10px 30px;
  text-align: left;
}

.show-code__code {
  display: block;
  overflow: scroll;
}
</style>
