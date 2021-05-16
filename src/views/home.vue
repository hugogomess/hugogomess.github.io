<template>
  <section class="section text-center">
    <img
      src="../static/profile.jpg"
      class="margin-bottom"
      width="150"
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
        <router-link :to="{ name: 'blog' }">Blog</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>

    <div id="hackthebox-badge" align="center"></div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import postscribe from "postscribe";
import contact from "../data/contact";

export default Vue.extend({
  data() {
    return {
      contact
    };
  },
  mounted() {
    postscribe(
      "#hackthebox-badge",
      // eslint-disable-next-line no-useless-escape
      "<script id=htb src=https://www.hackthebox.eu/badge/323852><\/script>"
    );
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
