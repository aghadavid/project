<script setup>
defineProps({
  position: {
    type: String,
  },
  hide: {
    type: Boolean,
  },
  url: {
    type: String,
  },name:{
    type:[String,Number]
  }
});
</script>

<template>
  <li
    :class="[
      position == name ? 'bg-slate-500 text-white' : '',
      'p-2 text-gray-500 font-bold cursor-pointer hover:scale-105 hover:bg-slate-500 rounded-md flex items-center hover:text-white',
    ]"
  >
    <img :src="url" class="h-7 w-10 mr-2" alt="" />
    <span v-show="hide">{{ name }}</span>
  </li>
</template>

