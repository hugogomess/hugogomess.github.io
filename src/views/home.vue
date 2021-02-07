<template>
  <section class="section text-center">
    <img
      src="../static/shuriken-white.png"
      class="margin-bottom"
      width="100"
      height="auto"
    />

    <h1 class="title-section">
      <a :href="social.links.twitter" target="_blank">@suken</a>
    </h1>

    <p>Backend developer, cyber security student and ctf player.</p>

    <ul>
      <li>
        <router-link :to="{ name: 'skills' }">Skills</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'articles' }">Articles</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
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

<style>
ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px;
}
</style>
