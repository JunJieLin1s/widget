<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="p-4 bg-white shadow-md rounded-md border border-gray-300 cursor-move">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
  </div>
</template>
