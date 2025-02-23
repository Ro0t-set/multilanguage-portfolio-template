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
    <NavBar @scrollToSection="scrollToSection" />

    <section id="about">
      <AboutMe />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="projects">
      <Projects />
    </section>

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
}
</style>