<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { SunIcon } from '@heroicons/vue/24/outline'
import { fetchWeather } from '../api/weatherApi'

const city = ref('Amsterdam')
const weatherData = ref<any>(null)

const loadWeather = async () => {
  weatherData.value = await fetchWeather(city.value)
}

onMounted(loadWeather)
</script>

<template>
  <div class="p-4 bg-white shadow-md rounded-md border border-gray-300">
    <SunIcon class="h-6 w-6 text-yellow-500" />
    <h3 class="text-lg font-semibold">Weer in {{ city }}</h3>
    <div v-if="weatherData">
      <p>Temperatuur: {{ weatherData.main.temp }}°C</p>
      <p>Weer: {{ weatherData.weather[0].description }}</p>
    </div>
    <div v-else>
      <p>Laden...</p>
    </div>
  </div>
</template>
