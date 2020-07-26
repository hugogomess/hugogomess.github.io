<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      You can find me on
      <a :href="config.links.social.github" target="_blank">Github</a> and
      <a :href="config.links.social.linkedin" target="_blank">Linkedin</a>.
    </p>

    <h2>
      Email:
      <a :href="config.links.social.email" target="_blank">{{ email }}</a>
    </h2>

    <br />

    <h2>Discord: {{ discord }}</h2>

    <br />

    <h2>Hack The Box</h2>
    <p>
      <a
        class="no-border"
        href="https://www.hackthebox.eu/home/users/profile/323852"
        target="_blank"
      >
        <img src="http://www.hackthebox.eu/badge/image/323852" alt="Hack The Box" />
      </a>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config,
      email: "hugogomes02@gmail.com",
      discord: "0xkaneki#0487",
    };
  },
});
</script>

<style></style>
