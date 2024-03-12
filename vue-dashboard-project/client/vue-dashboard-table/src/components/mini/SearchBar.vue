<script setup>
const emit = defineEmits('search')

const search = (e)  => {
    emit("search", e.target.value)
    // console.log(e.target.value)
}
</script>


<template >
    <form action="" class="items-center flex mx-2 my-3 ">
        <label class="sr-only" >Search</label>
        <div class="flex w-full">
            <input type="text" @input="search" class="bg-gray-50 border border-gray-300 text-gray-900 px-2 py-1 rounded-l-lg" placeholder="Search ... ">
            <div class="p-1 bg-gray-300  hover:bg-gray-400 cursor-pointer flex items-center justify-center rounded-r-lg px-2">
                <img src="/src/assets/search-icon.svg" alt="" srcset="" class="h-[25px] w-[25px]">
            </div>
        </div>
    </form>
</template>