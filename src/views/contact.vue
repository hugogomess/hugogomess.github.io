<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>You can find me on:</h2>

    * <a :href="social.links.github" target="_blank">Github</a><br /><br />
    * <a :href="social.links.twitter" target="_blank">Twitter</a><br /><br />
    * <a :href="social.links.medium" target="_blank">Medium</a><br /><br />
    * <a :href="social.links.htb" target="_blank">HackTheBox</a><br /><br />
    * <a :href="social.links.thm" target="_blank">TryHackMe</a><br /><br />

    <br />
    <div id="hackthebox" target="_blank">
      <h2>HTB</h2>
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
      "#hackthebox-badge",
      "<script id=htb src=https://www.hackthebox.eu/badge/323852><\/script>"
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
