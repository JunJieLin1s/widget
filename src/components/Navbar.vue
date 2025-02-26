<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 class="text-xl font-semibold">Dashboard</h1>
    <button @click="toggleMenu" class="md:hidden p-2 focus:outline-none">
      <span v-if="!isMenuOpen">☰</span>
      <span v-else>✖</span>
    </button>
    <ul
      :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      class="md:flex md:space-x-4 space-y-3 md:space-y-0"
    >
      <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">🏠 Home</li>
      <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">📊 Analytics</li>
      <li class="p-2 hover:bg-gray-700 rounded cursor-pointer">⚙️ Settings</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  transition: all 0.3s ease-in-out;
}

ul {
  transition: all 0.3s ease-in-out;
}

@media (min-width: 768px) {
  ul {
    display: flex !important;
  }
}
</style>
