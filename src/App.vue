<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/UserExperience.vue'
import Skills from './components/UserSkills.vue'
import Projects from './components/UserProjects.vue'
import Contact from './components/UserContact.vue'

function scrollToSection(section: string) {
  const el = document.getElementById(section)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="main-content">
    <NavBar @scroll-to-section="scrollToSection" />
    <section id="about">
      <AboutMe />
    </section>

    <q-separator />

    <section id="experience">
      <Experience />
    </section>

    <q-separator />

    <section id="skills">
      <Skills />
    </section>

    <q-separator />

    <section id="projects">
      <Projects />
    </section>

    <q-separator />

    <section id="contact">
      <Contact />
    </section>
  </div>
</template>

<style scoped>
.main-content {
  padding: 1em;
}
section {
  margin: 3em 0;
  scroll-margin-top: 60px;
}
</style>