<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()

</script>

<template>
  <div class="skills q-pa-md">
    <div class="text-h2 text-center q-mb-lg">
      {{ store.currentDictionary.skills.skillTitle }}
    </div>
    <div class="row q-col-gutter-sm">
      <div
        v-for="skill in store.currentDictionary.skills.skills" 
        :key="skill.name"
        class="col-xs-6 col-sm-4 col-md-3 col-lg-2"
      >
        <q-card
          flat
          bordered
          class="skill-card q-pa-sm"
        >
          <q-card-section class="q-pa-xs">
            <div class="text-subtitle2">
              {{ skill.name }}
            </div>
            <q-linear-progress
              :value="skill.level"
              color="secondary"
              size="4px"
              rounded
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills {
  max-width: 1400px;
  margin: 0 auto;
}

.skill-card {
  transition: all 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  border-color: var(--q-secondary);
}
</style>