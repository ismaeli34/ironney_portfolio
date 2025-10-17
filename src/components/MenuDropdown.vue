<template>
  <div class="relative inline-block text-left">
    <!-- Menu Button -->
    <button
        @click="toggleMenu"
        class="p-2 rounded-lg hover:bg-gray-200 transition"
        aria-label="Open menu"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50"
    >
      <a
          href="https://ronneyportfolio.vercel.app/"
          target="_blank"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl"
      >
        Portfolio Version 1
      </a>
      <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-xl"
      >
        Portfolio Version 2
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  const menu = document.querySelector('.relative.inline-block');
  if (menu && !menu.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>
