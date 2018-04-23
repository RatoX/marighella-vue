<template>
  <section
    class="news-code">
    <show-code />
  </section>
</template>

<script>
import ShowCode from './ShowCode';

export default {
  name: 'NewsCode',

  components: {
    ShowCode,
  },
};
</script>

<style scoped>
.news-code {
  display: block;
}
</style>
