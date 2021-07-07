<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">About me</h1>

    <div class="about-block">
      <h2>Skills & Interests</h2>
      <table>
        <tr>
          <td class="bold"><strong>Languages</strong></td>
          <td>Python, Javascript, PHP, C, etc</td>
        </tr>
        <tr>
          <td class="bold"><strong>Good at</strong></td>
          <td>Software development, Web, CTF, Pentest</td>
        </tr>
        <tr>
          <td class="bold"><strong>Interested in</strong></td>
          <td>Cyber security, Bug bounty, Binary exploitation</td>
        </tr>
      </table>
    </div>

    <div class="about-block">
      <h2>Experience</h2>

      <td>
        In general I have 2.5+ years of experience working as Software Developer
      </td>
      <br />

      <table>
        <tr>
          <td class="bold"><strong>Nodejs Backend Developer</strong></td>
          <td>Express, Nestjs, PostgreSQL, MongoDB, etc</td>
          <td>Jul 2020 - Present</td>
        </tr>
        <tr>
          <td class="bold"><strong>Python Fullstack Developer</strong></td>
          <td>Django, PostgreSQL, Jinja, Angular, etc</td>
          <td>Set 2019 - Jul 2020</td>
        </tr>
        <tr>
          <td class="bold"><strong>Java Fullstack Intern</strong></td>
          <td>SpringMVC, JSF, PostgreSQL, etc</td>
          <td>Apr 2019 - Set 2019</td>
        </tr>
        <tr>
          <td class="bold"><strong>Nodejs Fullstack Intern</strong></td>
          <td>Express, MongoDB, Handlebars, etc</td>
          <td>Feb 2019 - Apr 2019</td>
        </tr>
      </table>
    </div>

    <div class="about-block">
      <h2>Education</h2>
      <table>
        <tr>
          <td class="bold"><strong>Professional Pentest Course</strong></td>
          <td>Desec Security</td>
          <td>Dec 2020 - Jul 2021</td>
        </tr>
        <tr>
          <td class="bold"><strong>Information System Bachelor</strong></td>
          <td>JN University Center (UNIJUAZEIRO)</td>
          <td>Feb 2017 - Dec 2020 (4y)</td>
        </tr>
      </table>
    </div>

    <!-- <div class="about-block">
      <h2>Certifications</h2>
      <table>
        <tr>
          <td class="bold">
            <strong>Desec Certified Penetration Tester (DCPT)</strong>
          </td>
          <td>Desec Security</td>
          <td>Dec 2021</td>
        </tr>
      </table>
    </div> -->
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  }
});
</script>
<style>
td {
  padding-left: 10px;
  padding-right: 20px;
  text-decoration: none;
  font-size: 90%;
}

.bold {
  font-size: 100%;
}

.about-block {
  margin-bottom: 40px;
}
</style>
