<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <q-card-section flat bordered class="about-me">
    <q-card-section class="text-center">
      <q-avatar size="300px" class="q-mb-md">
        <q-img
          src="../assets/profile.webp"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-avatar>
      <q-card-section>
        <div class="text-center"> <!-- Added wrapper div with text-center -->
          <h1 class="text-h1 text-center q-mb-lg">
            {{ store.currentDictionary.generalInfo.name }} 
            {{ store.currentDictionary.generalInfo.surname }}
          </h1>
          <div class="text-body1 q-mt-md">
            {{ store.currentDictionary.generalInfo.role }}
          </div>
          <div class="text-caption q-mt-sm">
            {{ store.currentDictionary.generalInfo.description }}
          </div>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card-section>
</template>

<style scoped>
.about-me {
  max-width: 800px;
  margin: 0 auto;
}

.text-h1 {
  text-align: center;
  width: 100%;
}
</style>