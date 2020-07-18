<template>
  <section class="section">
    <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      You can find me on
      <a :href="config.links.social.github" target="_blank">Github</a>, 
      <a :href="config.links.social.twitter" target="_blank">Twitter</a> and
      <a :href="config.links.social.linkedin" target="_blank">Linkedin</a>.
    </p>

    <h2>Email: <a :href="config.links.social.email" target="_blank">{{ email }}</a></h2>

    <p>
      <a href="https://www.hackthebox.eu/home/users/profile/323852" target="_blank">
        <img src="http://www.hackthebox.eu/badge/image/323852" alt="Hack The Box">
      </a>
      <a href="https://tryhackme.com/p/0xkaneki" target="_blank">
        <img src="https://tryhackme-badges.s3.amazonaws.com/0xkaneki.png" alt="TryHackMe">
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
      email: "hugogomes02@gmail.com"
    };
  }
});
</script>

<style>
</style>
