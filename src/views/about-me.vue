<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">About me</h1>

    <h2>You can find me on:</h2>

    ⁃ <a :href="contact.links.htb" target="_blank">HackTheBox</a><br /><br />
    ⁃ <a :href="contact.links.github" target="_blank">Github</a><br /><br />
    ⁃ <a :href="contact.links.twitter" target="_blank">Twitter</a><br /><br />
    ⁃ <a :href="contact.links.telegram" target="_blank">Telegram</a><br /><br />
    ⁃ <a :href="contact.links.thm" target="_blank">TryHackMe</a
    ><br /><br /><br />

    <h2>Email:</h2>
    <p>
      {{ contact.email }} --
      <a href="./publickey.asc">PGP PUBLIC KEY</a>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import contact from "../data/contact";

export default Vue.extend({
  data() {
    return {
      contact
    };
  }
});
</script>
