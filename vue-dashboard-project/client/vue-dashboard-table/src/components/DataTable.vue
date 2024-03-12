<script setup>
import SearchBar from "./mini/SearchBar.vue";
import FilterRadioVue from "./mini/FilterRadio.vue";
import Pagination from "@/components/Pagination.vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },  page: {
    type: [String,Number]
  },
  limit: {
    type: [String,Number]
  },totalData: {
    type: [String,Number]
  },
});

console.log(props, '<<<<<< data table');

const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const now = new Date();
  const ageDiff = now - dobDate;
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const handleSeacrh = (search) => {};

const emit = defineEmits([`changePage`,])
function changePage(page){
  console.log(page, "data table <<<<<<<");
  emit('changePage',page)
}

</script>


<template>
  

  <div class="bg-white h-[98%] relative border rounded-lg px-5 py-2 drop-shadow-md mb-2  ">
    <div class="flex items-center justify-between"> 
      <SearchBar @search="handleSeacrh" />
      
    </div>

    <table class="w-full text-sm text-left text-gray-500 rounded-lg ">
      <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
        <tr>
          <th class="px-4 py-3">Id</th>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3 ">Job</th>
          <th class="px-4 py-3">Age</th>
          <th class="px-4 py-3">Skill</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
        >
          <td class="px-4 py-3 font-medium text-gray-900">{{ item.id }}</td>
          <td class="px-4 py-3 font-medium text-gray-900">{{ item.name }}</td>
          <td class="px-5 py-3">
            <div
              :class="
                item.job === 'Fullstack'
                  ? 'text-cyan-600  bg-cyan-100 rounded-lg text-center w-[75px] p-1'
                  : item.job === 'Front end'
                  ? 'text-emerald-600  bg-emerald-100 rounded-lg text-center w-[75px] p-1'
                  : 'text-yellow-600  bg-yellow-100 rounded-lg text-center w-[75px] p-1'
              "
            >
              {{ item.job }}
            </div>
          </td>
          <td class="px-4 py-3">{{ calculateAge(item.dob) }}</td>
          <td class="px-4 py-3">
            <span
              v-for="(skill, index) in item.skill"
              :key="index"
              class="tag mx-1 px-2 py-1 rounded border border-green bg-white"
            >
              {{ skill }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :page="page" :limit="limit" @changePage="changePage" :totalData="totalData"/>
  </div>
</template>