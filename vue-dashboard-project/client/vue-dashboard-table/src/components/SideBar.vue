<script setup>
import { ref } from "vue";
import ListSideBar from "./mini/ListSideBar.vue";

defineProps({
  position: {
    type: String,
  },

});
const emit = defineEmits(["change"]);

const hide = ref(true);

const resize = () => {
  hide.value = !hide.value;
};

function changePosition(position) {
  emit("change", position);
}
</script>

<template>
  <div
    :class="[
      hide ? 'w-[300px]' : 'w-[100px]',
      `relative  py-5 px-2 transition-all ease-in-out duration-300`,
    ]"
  >
    <div
      @click="resize"
      class="absolute p-1 border hover:scale-105 cursor-pointer"
      style="right: -10px; top: 50%"
    >
      <!-- :src="hide ? `@/assets/left.svg`: `@/assets/right.svg`" -->
      <img
        v-if="hide"
        src="@/assets/left.svg"
        alt=""
        class="object-cover w-[20px] h-[20px]"
      />
      <img
        v-else
        src="@/assets/right.svg"
        alt=""
        class="object-cover w-[20px] h-[20px]"
      />
    </div>
    <div class="p-3 flex items-center gap-1 overflow-hidden">
      <div class="overflow-hidden rounded-full my-4">
        <img
          src="@/assets/man.jpg"
          alt=""
          class="object-cover w-[50px] h-[50px]"
        />
      </div>
      <p v-show="hide" class="font-bold p-2">John Doe</p>
    </div>
    <ul class="flex flex-col gap-5 px-3 mt-5">
   
      <list-side-bar
        @click="changePosition('Dashboard')"
        :position="position"
        :hide="hide"
        :url="'/src/assets/chart.svg'"
        :name="'Dashboard'"
      />
      <list-side-bar
        @click="changePosition('Table')"
        :position="position"
        :hide="hide"
        :url="'/src/assets/table.svg'"
        :name="'Table'"
      />
      <list-side-bar
        @click="changePosition('Setting')"
        :position="position"
        :hide="hide"
        :url="'/src/assets/gear.svg'"
        :name="'Setting'"
      />
      <list-side-bar
        @click="changePosition('About')"
        :position="position"
        :hide="hide"
        :url="'/src/assets/address.svg'"
        :name="'About'"
      />

  

    </ul>
  </div>
</template>

