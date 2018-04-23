<template>
  <section
    class="news-metadata">
    <metadata />
  </section>
</template>

<script>
import Metadata from './Metadata';

export default {
  name: 'NewsMetadata',

  components: {
    Metadata,
  },
};
</script>

<style scoped>
.news-metadata {
  display: block;
}
</style>
