<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>You can find me on:</h2>
    <div class="contact-block">
      * <a :href="contact.links.htb" target="_blank">HackTheBox</a><br /><br />
      * <a :href="contact.links.github" target="_blank">Github</a><br /><br />
      * <a :href="contact.links.twitter" target="_blank">Twitter</a><br /><br />
      * <a :href="contact.links.telegram" target="_blank">Telegram</a
      ><br /><br />
    </div>

    <br />

    <h2>Discord:</h2>
    <p class="contact-block">
      {{ contact.discord }}
    </p>

    <br />

    <h2>Email:</h2>
    <p class="contact-block">
      &lt;{{ contact.email }}&gt; --
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
<style>
.contact-block {
  padding-left: 10px;
  margin-bottom: 0px;
}
</style>
