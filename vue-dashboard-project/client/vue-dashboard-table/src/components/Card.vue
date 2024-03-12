<script setup>
import { computed } from 'vue';

const props = defineProps({
 skill : {
  type : String
 },
 count : {
  type : Number,
  default: "-"
 }
});
const displayedCount = computed(() => {
  return props.count || "-";
});
</script>
<template>
  <div>
    <div
    :class="[
        'shadow-md col-span-1 rounded-md h-[150px] p-2 text-center font-bold items-center flex flex-col justify-center gap-3 hover:scale-105',
        skill === 'Front end' ? 'bg-emerald-200 text-emerald-600' :
        skill === 'Full Stack' ? 'bg-cyan-200 text-cyan-600' :
        'bg-yellow-200 text-yellow-600'
      ]"

    >
      <!-- <h1 >{{ job }}</h1> -->
      <h1 class="text-[20px]" >{{ skill }}</h1>
      <!-- <hr class="border border-black my-2" /> -->
      <h1 class="text-[50px]" >{{ displayedCount }}</h1>
  
    </div>
  </div>
</template>

