<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Articles</h1>

    <p>
      You can follow my stories on
      <a :href="social.links.medium" target="_blank">Medium</a>.
    </p>

    <ul>
      <!-- <li v-for="(item, index) in articles" :key="index">
        <h2>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </h2>
      </li>-->
      <li>
        <h2>There's no articles yet, back again later...</h2>
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
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
