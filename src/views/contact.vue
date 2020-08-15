<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      You can find me on
      <a :href="social.links.github" target="_blank">Github</a> and
      <a :href="social.links.linkedin" target="_blank">Linkedin</a>.
    </p>

    <h2>
      Email:
      <a :href="'mailtto:' + social.email" target="_blank">
        {{
        social.email
        }}
      </a>
    </h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import social from "../data/social";

export default Vue.extend({
  data() {
    return {
      social,
    };
  },
});
</script>

<style></style>
