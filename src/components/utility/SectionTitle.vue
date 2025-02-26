<script setup lang="ts">
defineProps<{
    title: string
}>();
</script>

<template>
  <div class="section-title">
    <div class="text-h2 text-center q-mb-lg">
      {{ title }}
    </div>
  </div>
</template>