<template>
    <div>
        <div class="w-8/12 mt-5 mb-5 mx-auto justify-center">
    <div class="flex flex-col rounded-xl bg-white border shadow-md">
        <section class="text-3xl p-3 mb-2 shadow-md">
         Students
        </section>
        <div
        v-if="data.students == ''" 
        class="flex text-2xl text-gray-300 mx-auto"
        >
        <mdi:emoticon-sad-outline class="mr-2" />  No Students availble
        </div>
         <div 
         v-else
          v-for="Data in data.students" :key="Data"
          class="student shadow-lg rounded-2xl p-4 mb-2 border bg-white dark:bg-gray-700 w-11/12 mx-auto cursor-pointer">
           <router-link :to="{name:'view-student', params:{id:Data.id}}">
        <div class="items-center justify-between">
        <div class="items-center">
        <h3 class="text-2xl font-semibold">{{Data.fullname}}</h3>
        <div class="text-md italic text-gray-500">{{Data.sex}}</div>
          <div class="text-md italic text-gray-500">{{Data.field}}</div>
        </div>
        </div>
           </router-link>
                                </div>
    </div>
</div>
    </div>
</template>

<script>
export default {
    props:["data"],
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.student{
  transition: transform 1.5s;
}
.student:hover {
  transform: scale(1.03);
}
</style>