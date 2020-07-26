<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Skill Set</h1>

    <p>Here you can find my skill set</p>

    <!-- <div class="container">
    <header> <h3 class="tcaption"> {skill.name |> rs} </h3> </header>
    <table class="table">
      <thead>
        <tr>
          <th class="theader"> {"Name" |> rs} </th>
          <th class="theader"> {"Tags" |> rs} </th>
        </tr>
      </thead>
      <tbody>
        {List.mapi(
           (key, attr) => {<Item key={key |> string_of_int} attr />},
           skill.attribs,
         )
         |> Array.of_list
         |> ReasonReact.array}
      </tbody>
    </table>
    </div>-->
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
