<template>
  <section class="section text-center">
    <img
      src="../static/profile.jpg"
      class="margin-bottom"
      width="100"
      height="auto"
      align="center"
    />

    <h1 class="title-section">
      <a :href="social.links.twitter" target="_blank">@sukenn</a>
    </h1>

    <p>
      Backend developer and ctf player trying to work with cyber security and
      red team.
    </p>

    <ul align="center">
      <!-- <li>
        <router-link :to="{ name: 'skills' }">Skills</router-link>
      </li> -->
      <li>
        <router-link :to="{ name: 'write-ups' }">Write-ups</router-link>
      </li>
      <li>
        <a :href="social.links.htb" target="_blank">HackTheBox</a>
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
      social
    };
  }
});
</script>

<style>
ul li {
  display: inline-block;
}

ul li a {
  margin: 0 5px;
}

ul {
  padding-right: 20px;
}

.title-section {
  margin-top: -20px;
}
</style>
