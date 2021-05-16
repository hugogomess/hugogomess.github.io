<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Tools</h1>

    <h2>
      You can find my open source tools on
      <a :href="contact.links.github" target="_blank">Github</a>.
    </h2>

    <ul class="list">
      <li v-for="(tool, index) in tools" :key="index">
        <a :href="tool.url" target="_blank" class="post">{{ tool.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import contact from "../data/contact";
import tools from "../data/tools";

export default Vue.extend({
  data() {
    return {
      contact,
      tools
    };
  }
});
</script>

<style>
ul li a {
  /* margin: 0 20px 0 0; */
  line-height: 30px;
}

h2 a {
  color: #000 !important;
  border-bottom: 2px solid #000 !important;
}

h2 a:hover {
  border-bottom: 2px solid #555555 !important;
  color: #555555 !important;
}
</style>
