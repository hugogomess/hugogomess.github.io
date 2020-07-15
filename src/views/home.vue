<template>
  <section class="section text-center">
    <img src="../static/hacker-white.png" class="margin-bottom" width="256" height="auto" alt />

    <h1 class="title-section">
      Hugo
      <a :href="config.links.social.github" target="_blank">@hugogomess</a>
    </h1>

    <p>Web developer, offensive security enthusiast, bug hunter and ctf player in free time.</p>

    <ul>
      <li>
        <router-link :to="{ name: 'resources'}">Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'resources'}">Skills</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'articles'}">Articles</router-link>
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
