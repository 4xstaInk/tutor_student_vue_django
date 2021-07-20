<template>
    <div class="bg-white">
        <div class="header">
        <div class="ml-5 pt-5">
            <h1 class="text-4xl">Teachers Section</h1>
            <h1 
            v-if="search == ''"
            class="text-2xl">
               Total teachers {{data.length}}
            </h1>
        </div>
        <div>
      <router-link :to="{name:'add-teacher'}">
        <button   class="hover:bg-gray-100 border rounded-lg ml-5 mt-3"
 >
 <span class="flex text-2xl text-black font-lg rounded-lg p-2 cursor-pointer"><mdi:account-plus class="mr-2" />Add Teacher</span> 
</button></router-link>
            <DeleteAllTeachers 
             v-if="data != ''"
             :data="data" @update-page="searchData"/>
        </div>
        <div class="ml-5 mt-3" v-if="message != null">
            <span class="text-2xl text-white font-lg bg-red-500 rounded-lg p-2">
                 {{message}}
            </span>
        </div>
        </div>
<main class="flex w-full min-h-screen">
    <section
     class="flex flex-col pt-3 pl-5 pr-5 pb-3 w-8/12 mt-5 bg-gray-50 h-full mx-auto ">
      <label class="px-3">
        <input 
        v-model="search"
        @keyup="searchData()"
        class="rounded-lg p-4 bg-gray-100 border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 w-full"
          placeholder="Search..." />
      </label>
      <h1 
            v-if="search != ''"
            class="text-lg mt-2 ml-1">
               Total teacher {{data.length}}
            </h1>
      <div 
       v-if="loading == true"
       class="flex text-2xl text-gray-400 font-lg rounded-lg p-2">
        Loading data...
        </div>
       <div 
       v-if="data == ''"
       class="flex text-2xl text-gray-400 font-lg rounded-lg p-2">
               <mdi:emoticon-sad-outline class="mr-2"/> No data available  <p v-if="search != ''"
               class="ml-2"
               >for <span class="font-bold">{{search}}</span></p>
        </div>
      <div>
          <br/> 

          <div 
          v-for="teacher in data" :key="teacher.id"
        @click="getData(teacher)"
          class="student shadow-lg rounded-2xl p-4 mb-2 border bg-white dark:bg-gray-700 w-full cursor-pointer">
           <router-link :to="{name:'view-teacher', params:{id:teacher.id}}">
        <div class="items-center justify-between">
        <div class="items-center">
        <h3 class="text-2xl font-semibold">{{teacher.fullname}}</h3>
        <div class="flex text-md italic text-gray-500">
           <mdi:gender-male 
          v-if="teacher.sex == 'Male'"
          class="mr-2" />
           <mdi:gender-female 
          v-if="teacher.sex == 'Female'"
          class="mr-2" />
          {{teacher.sex}}</div>
          <div class="flex text-md italic text-gray-500"> <mdi:book-open-blank-variant class="mr-2" />{{teacher.field}}</div>
        </div>
        </div>
        </router-link>
      </div>
      </div>
      
    </section>
  </main>
    </div>
</template>

<script>
import axios from "axios";
import DeleteAllTeachers from "../components/teachers/DeleteAllTeachers.vue";
export default {
    components: {
        DeleteAllTeachers
    },
    setup () {
        

        return {}
    },
    data(){
        return{
            data:[],
            teacher_data:[],
            search:'',
            message:'',
            loader:false
        }
    },
    created() {
        this.searchData()
    },
    methods: {

      searchData(e) {
        const options = {
          method: "GET",
          url: `http://localhost:8080/api/tutors?fullname=${this.search}`,
          headers: {
            "content-type": "application/json",
          },
        };
  
        axios
          .request(options)
          .then((response) => {
            (this.data = response.data)
            (this.message = e)
            console.log(response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      },
      getData(teacher){
          this.teacher_data = teacher
      }
    },
}
</script>

<style scoped>
.header{
    margin-left:15%;
}
.student{
  transition: transform 1.5s;
}
.student:hover {
  transform: scale(1.03);
}
</style>