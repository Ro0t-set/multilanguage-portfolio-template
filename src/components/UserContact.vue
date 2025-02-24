<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue'

const store = useAppStore()
</script>

<template>
  <div class="contact q-pa-md">
    <SectionTitle :title="store.currentDictionary.contact.contactTitle" />
    <div class="row justify-center">
      <q-card
        flat
        class="contact-card q-pa-md col-12 col-sm-8 col-md-6"
      >
        <q-list>
          <q-item
            clickable
            tag="a"
            :href="'mailto:' + store.currentDictionary.contact.email"
          >
            <q-item-section avatar>
              <q-icon>
                <i class="fas fa-envelope fa-lg" />
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ store.currentDictionary.contact.email }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            tag="a"
            :href="'tel:' + store.currentDictionary.contact.phone"
          >
            <q-item-section avatar>
              <q-icon>
                <i class="fas fa-phone fa-lg" />
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ store.currentDictionary.contact.phone }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            tag="a"
            :href="store.currentDictionary.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-item-section avatar>
              <q-icon>
                <i class="fab fa-linkedin fa-lg" />
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>LinkedIn</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            tag="a"
            :href="store.currentDictionary.contact.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-item-section avatar>
              <q-icon>
                <i class="fab fa-github fa-lg" />
              </q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>GitHub</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.contact-card {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.q-item {
  transition: background-color 0.3s ease;
}

.q-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

/* Add styles for icons */
.fab, .fas{
  color: var(--q-secondary);
  font-size: 1.2em;
}


</style>