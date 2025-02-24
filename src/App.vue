<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/UserExperience.vue'
import Education from './components/UserEducation.vue'
import Skills from './components/UserSkills.vue'
import Projects from './components/UserProjects.vue'
import Contact from './components/UserContact.vue'
import type { DirectiveBinding } from 'vue'

function scrollToSection(section: string) {
  const el = document.getElementById(section)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const vScrollReveal = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const direction = binding.value || 'left'
    el.classList.add(direction === 'right' ? 'reveal-right' : 'reveal-left')
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          obs.unobserve(entry.target)
        }
      })
    })
    observer.observe(el)
  }
}
</script>

<template>
  <div class="main-content">
    <NavBar @scroll-to-section="scrollToSection" />
    
    <section
      id="about"
      v-scroll-reveal="'left'"
    >
      <AboutMe />
    </section>
    <q-separator />

    <section
      id="education-experience"
      v-scroll-reveal="'right'"
    >
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <div
            id="education"
            v-scroll-reveal="'left'"
          >
            <Education />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            id="experience"
            v-scroll-reveal="'right'"
          >
            <Experience />
          </div>
        </div>
      </div>
    </section>

    <q-separator />

    <section
      id="skills"
      v-scroll-reveal="'left'"
    >
      <Skills />
    </section>
    <q-separator />

    <section
      id="projects"
      v-scroll-reveal="'right'"
    >
      <Projects />
    </section>
    <q-separator />

    <section
      id="contact"
      v-scroll-reveal="'left'"
    >
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


.reveal-left,
.reveal-right {
  opacity: 0;
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
}
.reveal-left { transform: translateX(-100px); }
.reveal-right { transform: translateX(100px); }

.reveal-active {
  transform: translateX(0);
  opacity: 1;
}
</style>
