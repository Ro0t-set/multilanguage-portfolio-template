<script setup lang="ts">
defineProps<{
    title: string
}>();
</script>

<template>
  <div class="section-title">
    <h2 class="text-h2 text-center q-mb-lg">
      {{ title }}
    </h2>
  </div>
</template>