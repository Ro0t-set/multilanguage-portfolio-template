<!-- App.vue -->
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import Experieice from './components/Experieice.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';



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
