<template>
    <div>
        <div class="min-h-screenvflex 
        border-t-2 rounded-3xl mt-12 p-2 mx-5
        mx-auto flex-col justify-center">
    
  <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    <!-- SMALL CARD ROUNDED -->
    <router-link :to="{name: 'teachers'}" 
    
    class=" border-white 
    py-3
    bg-opacity-10 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-gray-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-white text-3xl dark:text-gray-300 font-semibold">Teachers</p>
      </div>
    </router-link>
    <!-- END SMALL CARD ROUNDED -->

    <!-- SMALL CARD ROUNDED -->
        <router-link :to="{name: 'students'}" 
  
    class=" border-white
    py-3
     dark:bg-gray-600 bg-opacity-10 | border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-gray-600 hover:border-transparent | transition-colors duration-500">
      <div class="flex flex-col justify-center">
        <p class="text-white text-3xl dark:text-gray-300 font-semibold">Students</p>
      </div>
    </router-link>
    <!-- END SMALL CARD ROUNDED -->
  </div>
</div>
    </div>
</template>

<script>

export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>