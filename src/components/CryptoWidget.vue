<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCryptoPrices } from '../api/cryptoApi'
import { CurrencyDollarIcon, BanknotesIcon } from '@heroicons/vue/24/solid'

const cryptoData = ref<any>(null)
const loading = ref(true)

const loadCryptoPrices = async () => {
  try {
    cryptoData.value = await fetchCryptoPrices()
  } catch (error) {
    console.error('Fout bij ophalen van crypto prijzen:', error)
  } finally {
    loading.value = false
  }
}

onMounted(loadCryptoPrices)
</script>

<template>
  <div class="p-4 bg-white shadow-md rounded-md border border-gray-300">
    <h3 class="text-lg font-semibold flex items-center space-x-2">
      <BanknotesIcon class="h-6 w-6 text-green-500" />
      <span>Crypto Prijzen</span>
    </h3>

    <div v-if="loading" class="mt-3 flex items-center space-x-2">
      <CurrencyDollarIcon class="h-5 w-5 text-gray-500 animate-spin" />
      <p>Laden...</p>
    </div>

    <div v-else-if="cryptoData" class="mt-3 space-y-2">
      <div class="flex items-center space-x-2">
        <CurrencyDollarIcon class="h-5 w-5 text-yellow-500" />
        <p>
          Bitcoin: <span class="font-bold">${{ cryptoData.bitcoin.usd }}</span>
        </p>
      </div>

      <div class="flex items-center space-x-2">
        <CurrencyDollarIcon class="h-5 w-5 text-blue-500" />
        <p>
          Ethereum: <span class="font-bold">${{ cryptoData.ethereum.usd }}</span>
        </p>
      </div>
    </div>

    <div v-else class="mt-3 text-red-500">Fout bij het laden van gegevens</div>
  </div>
</template>
