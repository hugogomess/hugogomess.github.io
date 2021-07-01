<template>
  <section class="section text-center">
    <img
      src="../static/chainsaw-man.gif"
      class="margin-bottom"
      width="400"
      height="auto"
      alt
    />

    <h1 class="title-section">
      Hugo
      <a :href="contact.links.twitter" target="_blank">@sukenn</a>
    </h1>

    <p>Backend developer, cyber security student and ctf player...</p>

    <ul class="links">
      <li>
        <router-link :to="{ name: 'about-me' }">About me</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tools' }">Tools</router-link>
      </li>
      <li>
        <a :href="contact.links.blog" target="_blank">Blog</a>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
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
ul li {
  display: inline-block;
}

.links a {
  margin: 0 10px;
}

#hackthebox-badge {
  margin-top: 40px;
}

#hackthebox-badge a {
  border: none;
}
</style>
