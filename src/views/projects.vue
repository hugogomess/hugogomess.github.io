<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Projects</h1>

    <p>I will add it here later haha, back again another day.</p>

    <ul></ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
