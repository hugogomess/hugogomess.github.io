<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      You can find me on
      <a :href="social.links.twitter" target="_blank">Twitter</a> and
      <a :href="social.links.github" target="_blank">Github</a>.
    </p>

    <h2>
      Email:
      <a :href="'mailtto:' + social.email" target="_blank">{{
        social.email
      }}</a>
    </h2>

    <h2>Discord: {{ social.discord }}</h2>

    <br />

    <div id="tryhackme" target="_blank">
      <h2>TryHackMe</h2>
      <div id="tryhackme-badge"></div>
    </div>

    <br />

    <div id="hackthebox" target="_blank">
      <h2>HackTheBox</h2>
      <div id="hackthebox-badge"></div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import postscribe from "postscribe";
import social from "../data/social";

export default Vue.extend({
  data() {
    return {
      social,
    };
  },
  mounted() {
    postscribe(
      "#tryhackme-badge",
      "<script src=https://tryhackme.com/badge/116953><\/script>"
    );

    postscribe(
      "#hackthebox-badge",
      "<script id=kkk src=https://www.hackthebox.eu/badge/323852><\/script>"
    );
  },
});
</script>

<style>
#hackthebox a {
  border: none;
}

#hackthebox-badge {
  padding-left: 10px;
}
</style>
