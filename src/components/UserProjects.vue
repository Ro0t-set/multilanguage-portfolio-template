<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue'

const store = useAppStore()
</script>

<template>
  <div class="projects q-pa-md">
    <SectionTitle :title="store.currentDictionary.projects.projectTitle" />
    <div class="row q-col-gutter-md justify-center">
      <div
        v-for="project in store.currentDictionary.projects.projects" 
        :key="project.title"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card
          flat
          bordered
          class="project-card"
        >
          <q-card-section>
            <div class="text-h6 ellipsis-2-lines">
              {{ project.title }}
            </div>
            <q-separator class="q-my-sm" />
            <div class="text-body2 description-container">
              {{ project.description }}
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none tech-section">
            <div class="text-subtitle2 q-mb-xs">
              Technologies:
            </div>
            <div class="text-caption">
              {{ project.technologies }}
            </div>
          </q-card-section>

          <q-card-actions
            align="right"
            class="q-mt-auto"
          >
            <q-btn
              flat
              color="secondary"
              :href="project.url"
              target="_blank"
              label="View Project"
              icon="fas fa-external-link-alt"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  height: 400px; /* Fixed height for all cards */
  display: flex;
  flex-direction: column;
}

.project-card .q-card__section:first-child {
  flex-grow: 1;
}

.description-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-section {
  min-height: 80px;
}

.q-card__actions {
  margin-top: auto;
}
</style>