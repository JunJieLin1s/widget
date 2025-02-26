<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Dashboard from '@/components/Dashboard.vue'
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <div class="p-6">
        <Dashboard />
      </div>
    </div>
  </div>
</template>
