<script setup>
import DataTable from "./components/DataTable.vue";
import Navbar from "./components/Navbar.vue";
import CardVue from "./components/Card.vue";
import SideBar from "./components/SideBar.vue";

import { onMounted, computed, ref, watchEffect } from "vue";
import axios from "axios";

const items = ref();
const total = ref({ frontEnd: 0, backEnd: 0, fullStack: 0 });
let position = ref("Table");
const page = ref(1);
const limit = ref(8);
let totalData = ref(0);
const baseUrl = "http://localhost:3000";

// console.log(page,limit,page.value,limit.value);



onMounted(async () => {
  fetchData(), 
  fetchTotal();
});

watchEffect(async () => {
  // console.log(page.value, `<<<< watch app`);
  console.log(totalData.value, "<<<<<<<<<<< ini totalData");
  fetchData();
});

const fetchData = async () => {
  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        page: page.value,
        limit: limit.value,
      },
    });

    items.value = data.data;
    totalData.value = data.total;

  } catch (error) {
    console.log(error);
  }
};

const fetchTotal = async () => {
  try {
    const totalResponse = await axios.get(baseUrl + "/total");
    total.value = totalResponse.data || {
      frontEnd: 0,
      backEnd: 0,
      fullStack: 0,
    };
  } catch (error) {
    console.log(error);
  }
};

function changePosition(param) {
  console.log(param);
  position.value = param;
}

const handlePage = (p) => {
  // console.log(p, "<++++++++++ app");
  page.value = p;
};

const dataTableTotal = computed( () => {
  console.log(totalData.value , ";;;;;;;;;;;;;;;;");
  return totalData.value;
});

</script>
<template>
  <div class="h-screen bg-slate-200">
    <!-- <Navbar /> -->
    <main class="flex gap-3 pr-4">
      <side-bar :position="position" @change="changePosition" />
      <div class="pt-2 w-full flex flex-col">
        <div
          v-show="position === 'Dashboard'"
          class="grid grid-cols-3 gap-2 mb-4"
        >
          <CardVue skill="Front end" :count="total.frontEnd" />
          <CardVue skill="Back End" :count="total.backEnd" />
          <CardVue skill="Full Stack" :count="total.fullStack" />
        </div>

        <DataTable
          :items="items"
          :totalData="totalData"
          v-show="position === 'Table'"
          :page="page"
          :limit="limit"
          @changePage="handlePage"
        />
      </div>
    </main>
  </div>
</template>



<style>

</style>