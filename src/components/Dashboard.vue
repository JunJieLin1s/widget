<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import CryptoWidget from './CryptoWidget.vue'
import WeatherWidget from './WeatherWidget.vue'

const widgets = ref([
  { id: 1, component: 'WeatherWidget' },
  { id: 2, component: 'CryptoWidget' },
])

const widgetComponents = {
  WeatherWidget,
  CryptoWidget,
}
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Sleep Widgets</h2>

    <draggable v-model="widgets" item-key="id" class="space-y-4" tag="div">
      <template #item="{ element }">
        <div class="p-4 bg-white shadow-md rounded-md border border-gray-300">
          <component
            v-if="widgetComponents[element.component]"
            :is="widgetComponents[element.component]"
          />
          <div v-else class="text-red-500">⚠️ Widget niet gevonden</div>
        </div>
      </template>
    </draggable>
  </div>
</template>
