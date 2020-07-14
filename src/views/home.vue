<template>
  <section class="section text-center">
    <img src="../static/spy.svg" class="margin-bottom" width="128" height="auto" alt />

    <h1 class="title-section">
      Hugo
      <a :href="config.links.social.github" target="_blank">@hugogomess</a>
    </h1>

    <p>Web developer, offensive security enthusiast, bug hunter, IT student and ctf player in free time.</p>

    <ul>
      <li>
        <router-link :to="{ name: 'articles'}">Articles</router-link>
      </li>
      <li>
        <a :href="config.links.social.github" target="_blank">GitHub</a>
      </li>
      <li>
        <router-link :href="config.links.social.linkedin" target="_blank">Linkedin</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config
    };
  }
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
