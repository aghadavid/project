<script setup>
import PaginationButton from "./mini/PaginationButton.vue";
defineProps({
  page: {
    type: [String,Number]
  },
  limit: {
    type: [String,Number]
  },totalData: {
    type: [String,Number]
  },
});

const emit = defineEmits([`changePage`,])


// const maxPage = Math.ceil( props.totalData / props.limit)
// console.log(maxPage);

const handlePage = (page)=> {
  console.log(page ,"<<<<<<<<<<<< pagination");
emit('changePage',page)
}

</script>

<template>
  <div class="w-full h-10 mt-1 relative">
    <pagination-button class="absolute left-0 bottom-0" v-show="page >1" @click="handlePage(page -= 1)" :exportText="'Prev'" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{{ page }} </div>
    <!-- <div class="">
      <pagination-button v-show="page >= 1 || page !== 'undefined' || page !== 0 " @click="handlePage(page -= 1)" :exportText="page -1" />
      <pagination-button @click="handlePage(page)" :exportText="page" />
      <pagination-button @click="handlePage(page += 1)" :exportText="page +1" />
      <pagination-button v-show="page < Math.ceil( totalData / limit) " @click="handlePage(page += 2)" :exportText="'...'" />
      <button>{{ page }}</button>
  </div> -->


    <pagination-button class="absolute right-0 bottom-0" v-show="page < Math.ceil( totalData / limit)" @click="handlePage(page += 1)" :exportText="'Next'" />
  </div>
</template>


<style>
</style>