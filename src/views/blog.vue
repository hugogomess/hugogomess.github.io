<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Blog</h1>

    <p>
      You can follow my stories on
      <a :href="contact.links.medium" target="_blank">Medium</a>.
    </p>

    <ul class="list">
      <li v-for="(item, index) in posts" :key="index">
        <a :href="item.url" target="_blank" class="post">{{ item.title }}</a> -
        <span
          v-for="(tag, tagIndex) in item.tags"
          :key="tagIndex"
          class="tag"
          >{{ tag }}</span
        >
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import contact from "../data/contact";
import posts from "../data/blog-posts";

export default Vue.extend({
  data() {
    return {
      contact,
      posts
    };
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}

.tag {
  background: #ffffff;
  color: #000000;
  padding: 3px;
  margin: 4px;
  width: max-content;
}

.post {
  margin-right: 0;
}
</style>
