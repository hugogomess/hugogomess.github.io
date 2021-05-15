<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link" class="skill-back-link"
      >Back</router-link
    >
    <h1 class="title-section skill-title-section">Skills</h1>

    <div class="skill-container" id="skill-container">
      <header>
        <h3 class="skill-tcaption">{{ skill.name }}</h3>
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
            <td class="skill-tfixed">{{ item.name }}</td>
            <td class="skill-tdata">
              <div
                v-for="(tag, key) in item.tags"
                :key="key"
                :class="tag + ' skill-tag'"
              >
                {{ tag }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a
      @click="nextSkillTable(skillIndex + 1)"
      @mouseover="moveOutArrows()"
      @mouseout="moveInArrows()"
      id="next"
      class="next"
      >&#10095;</a
    >
    <a
      @click="previousSkillTable(skillIndex - 1)"
      @mouseover="moveOutArrows()"
      @mouseout="moveInArrows()"
      id="prev"
      class="prev"
      >&#10094;</a
    >

    <div class="dot-div">
      <span
        v-for="(dot, key) in skills"
        :key="key"
        :class="key == 0 ? 'dot active' : 'dot'"
        :id="'skill-dot-' + key"
        @click="setSlideIndex(key, true)"
      ></span>
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
      skill: skills[0],
      skillIndex: 0
    };
  },
  methods: {
    async nextSkillTable(nextIndex: number) {
      this.fadeEffect("skill-container");
      await new Promise(r => setTimeout(r, 300));

      if (nextIndex >= this.skills.length) {
        this.setSlideIndex(0);
        this.skillIndex = 0;
        this.skill = this.skills[0];
      } else {
        this.setSlideIndex(nextIndex);
        this.skillIndex = nextIndex;
        this.skill = this.skills[nextIndex];
      }

      this.fadeEffect("skill-container");
    },
    async previousSkillTable(previousIndex: number) {
      this.fadeEffect("skill-container");
      await new Promise(r => setTimeout(r, 300));

      if (previousIndex < 0) {
        this.setSlideIndex(this.skills.length - 1);
        this.skillIndex = this.skills.length - 1;
        this.skill = this.skills[this.skills.length - 1];
      } else {
        this.setSlideIndex(previousIndex);
        this.skillIndex = previousIndex;
        this.skill = this.skills[previousIndex];
      }

      this.fadeEffect("skill-container");
      this.setSlideIndex(this.skillIndex);
    },
    fadeEffect(elId: string) {
      const element = document.getElementById(elId);

      if (element !== null) {
        element.classList.toggle("skill-hide");
      }
    },
    moveOutArrows() {
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      if (next !== null && prev !== null) {
        next.style.right = "9%";
        prev.style.left = "9%";
      }
    },
    moveInArrows() {
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      if (next !== null && prev !== null) {
        next.style.right = "10%";
        prev.style.left = "10%";
      }
    },
    async setSlideIndex(dotIndex: number, isByClick?: boolean) {
      if (dotIndex !== this.skillIndex) {
        const currentDot = document.getElementById(
          "skill-dot-" + this.skillIndex
        );
        const dot = document.getElementById("skill-dot-" + dotIndex);

        if (currentDot !== null && dot !== null) {
          currentDot.classList.remove("active");
          dot.classList.add("active");
        }

        if (isByClick) {
          this.fadeEffect("skill-container");
          await new Promise(r => setTimeout(r, 300));
        }

        this.skillIndex = dotIndex;
        this.skill = this.skills[dotIndex];

        if (isByClick) {
          this.fadeEffect("skill-container");
        }
      }
    }
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}

.skill-back-link {
  position: absolute;
  top: 15%;
}

.skill-title-section {
  position: absolute;
  top: 20%;
}

.prev,
.next {
  cursor: pointer;
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 50px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  border-bottom: none !important;
  position: absolute;
  top: 46%;
  padding-left: 25px;
  padding-right: 25px;
}

.prev {
  left: 10%;
}

.next {
  right: 10%;
}

.dot-div {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 18%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.active,
.dot:hover {
  background-color: #494847;
}

.skill-container {
  background-color: #1a1d1e;
  border: solid 1px #878683;
  border-radius: 16px;
  color: white;
  height: 100pct;
  width: 50%;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
  transition: opacity 0.3s;
}

.skill-hide {
  opacity: 0;
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
  display: inline-block;
  font-size: 0.8rem;
  line-height: 120pct;
  margin-right: 4px;
  padding: 2px;
  color: black;
}

.beginner {
  background-color: #ffd700;
}

.advanced {
  background-color: #ff0000;
}

.interested {
  background-color: #bef992;
}

.intermediary {
  background-color: #ff4d00;
}

.not-interested {
  background-color: #e43f5a;
}

.work-experience {
  background-color: #3282b8;
}
</style>
