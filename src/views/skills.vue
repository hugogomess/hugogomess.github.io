<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Skills</h1>

    <p>My skills separated by different categories</p>

    <div v-for="(skill, index) in skills" :key="index" class="skill-container">
      <header>
        <h3 class="skill-tcaption">{{skill.name}}</h3>
      </header>
      <table class="skill-table">
        <thead>
          <tr>
            <th class="skill-theader">Name</th>
            <th class="skill-theader">Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in skill.items" :key="key">
            <td class="skill-tfixed">{{item.name}}</td>
            <td class="skill-tdata">
              <div v-for="(tag, key) in item.tags" :key="key" :class="tag +' skill-tag'">{{tag}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import skills from "../data/skills";

export default Vue.extend({
  data() {
    return {
      skills,
    };
  },
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}

.skill-container {
  background-color: rgb(20, 20, 20);
  border: solid 1px #878683;
  border-radius: 16px;
  color: white;
  height: 100pct;
  width: 50%;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
}

.skill-tcaption {
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.25abs;
  letter-spacing: 1px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
  text-align: center;
}

.skill-table {
  padding: 16px;
  width: 100pct;
}

.skill-theader {
  display: none;
}

.skill-tdata {
  border-bottom: 1px solid #494847;
  padding: 2px;
  width: 52%;
}

.skill-tfixed {
  border-bottom: 1px solid #494847;
  padding: 2px;
  width: 212px;
}

.skill-tag {
  border-radius: 4px;
  color: rgb(55, 53, 47);
  display: inline-block;
  font-size: 0.8rem;
  line-height: 120pct;
  margin-right: 4px;
  padding: 2px;
}

.beginner {
  background-color: rgb(249, 255, 163);
}

.advanced {
  background-color: rgb(255, 129, 142);
}

.interested {
  background-color: rgb(145, 215, 255);
}

.intermediary {
  background-color: rgb(255, 159, 91);
}

.not-interested {
  background-color: rgb(222, 222, 222);
}

.work-experience {
  background-color: rgb(188, 255, 193);
}
</style>
