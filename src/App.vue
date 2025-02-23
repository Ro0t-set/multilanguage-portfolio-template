<!-- App.vue -->
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import Experieice from './components/UserExperience.vue';
import Skills from './components/UserSkills.vue';
import Projects from './components/UserProjects.vue';
import Contact from './components/UserContact.vue';



</script>

<template>
  <div class="main-content">
    <NavBar />
    <AboutMe />
    <Experieice />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<style scoped>
.main-content {
  padding: 1em;
}
</style>
