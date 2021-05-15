<template>
  <section class="section text-center">
    <h1>404 Not Found</h1>
    <p>
      <router-link :to="{ name: 'home' }" id="back-link"
        >Back to home</router-link
      >
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  }
});
</script>

<style></style>
