<script setup >
defineProps({
    exportText : {
        type : [String,Number]
    }
})
</script>


<template>
  <button
    class="rounded h-6 flex items-center border border-gray-300 shadow text-gray-600 px-4 text-xs hover:scale-105"
  >
    {{ exportText }}
  </button>
</template>
