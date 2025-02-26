<template>
  <nav class="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 class="text-xl font-semibold">My App</h1>
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="p-2 hover:bg-gray-200 rounded">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="p-2 hover:bg-gray-200 rounded">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  transition: all 0.3s ease-in-out;
}
</style>
