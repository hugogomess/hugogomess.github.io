<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Articles</h1>

    <p>
      You can follow my stories on
      <a :href="social.links.medium" target="_blank">Medium</a>.
    </p>

    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <h2>
          <a :href="article.url" target="_blank">{{ article.title }}</a>
        </h2>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import social from "../data/social";
import articles from "../data/articles";

export default Vue.extend({
  data() {
    return {
      social,
      articles,
    };
  },
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
