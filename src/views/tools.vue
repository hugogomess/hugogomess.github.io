<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Tools</h1>

    <p>
      You can find my open source tools on
      <a :href="contact.links.github" target="_blank">Github</a>.
    </p>

    <div v-for="(category, index) in tools" :key="index" class="category">
      <h2>{{ category.title }}</h2>
      <ul class="list">
        <li v-for="(tool, tIndex) in category.tools" :key="tIndex">
          <a :href="tool.url" target="_blank" class="post">{{ tool.title }}</a>
        </li>
      </ul>
    </div>
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
  margin: 0 20px 0 0;
  line-height: 30px;
}

.category {
  padding-bottom: 20px;
}
</style>
