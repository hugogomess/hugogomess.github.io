<template>
  <section class="section">
    <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
    <h1 class="title-section">Projects</h1>

    <p>Here, you can find my open source projects.</p>

    <ul>
      <!-- <li v-for="(item, index) in links" :key="index">
        <h2>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </h2>
      </li> -->
      <li><h2>I will add it here later haha, back again another day.</h2></li>
    </ul>

  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      links: [
        {
          title: "Rico's cheatsheets",
          url: "https://devhints.io/"
        },
        {
          title: "OSINT resources board",
          url: "https://github.com/users/sundowndev/projects/3"
        },
      ]
    };
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
