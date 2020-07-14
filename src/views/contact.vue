<template>
  <section class="section">
    <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      You can find me on
      <a :href="config.links.social.twitter" target="_blank">Twitter</a> and
      <a :href="config.links.social.linkedin" target="_blank">Linkedin</a>.
    </p>

    <h2>Email</h2>
    <p>{{ email }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config,
      email: "<hugogomes02@gmail.com>"
    };
  }
});
</script>

<style>
</style>
