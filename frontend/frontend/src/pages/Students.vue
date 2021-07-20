<template>
    <div class="bg-white">
        <div class="header">
        <div class="ml-5 pt-5">
            <h1 class="text-4xl">Students Section</h1>
            <h1 
            v-if="search == ''"
            class="text-2xl">
               Total students {{data.length}}
            </h1>
        </div>
        <div>
      <router-link :to="{name:'add-student'}">
        <button   class="hover:bg-gray-100 border rounded-lg ml-5 mt-3"
 >
 <span class="flex text-2xl text-black font-lg rounded-lg p-2 cursor-pointer"><mdi:account-plus class="mr-2" />Add Student</span> 
</button></router-link>
            <DeleteAllStudents 
             v-if="data != ''"
             :data="data" @update-page="fetchAllData"/>
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
               Total students {{data.length}}
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
          v-for="student in data" :key="student.id"
        @click="getData(student)"
          class="student shadow-lg rounded-2xl p-4 mb-2 border bg-white dark:bg-gray-700 w-full cursor-pointer">
           <router-link :to="{name:'view-student', params:{id:student.id}}">
        <div class="items-center justify-between">
        <div class="items-center">
        <h3 class="text-2xl font-semibold">{{student.fullname}}</h3>
        <div class="flex text-md italic text-gray-500">
          <mdi:gender-male 
          v-if="student.sex == 'Male'"
          class="mr-2" />
           <mdi:gender-female 
          v-if="student.sex == 'Female'"
          class="mr-2" />
          {{student.sex}}</div>
          <div 
          v-for="field in student.fields" :key="field"
          class="flex text-md italic text-gray-500">
          <mdi:book-open-blank-variant class="mr-2" />
          {{field.name}}</div>
        </div>
        </div>
           </router-link>
                                </div>
      </div>
      
    </section>

    <!-- <section class="w-3/12 px-4 flex flex-col bg-white">
      <div class="flex mt-5 justify-between items-center mb-8 overflow-x-scroll">
        <div class="flex space-x-4 mt-5 items-center">
          <div 
          v-if="student_data != ''"
          class="flex flex-col">
            <h3 class="text-3xl font-semibold">{{student_data.fullname}}</h3>
            <p class="text-light text-2xl text-gray-400">{{student_data.student_id_number}}</p>
            <p class="text-light text-2xl text-gray-700">Gender: {{student_data.sex}}</p>
            <p class="text-light text-2xl text-gray-700">Field: {{student_data.field}}</p>
        
            
            <router-link :to="{name:'view-student', params:{id:student_data.id}}" v-if="student_data != ''"
            class="mt-5"
            >
           <span class="text-1xl font-sm p-2 rounded-lg border hover:bg-gray-100">View more</span> 
          </router-link>
          </div>
          <div v-else>
              <p class="text-light text-2xl text-gray-500">Selected Student information will be displayed here</p>
          </div>
        </div>
        <div>
         
        </div>
      </div>
      <section>

      </section>
    </section> -->
  </main>
    </div>
</template>

<script>
import axios from "axios";
import AddStudent from "../components/students/AddStudent.vue";
import DeleteAllStudents from "../components/students/DeleteAllStudents.vue";
export default {
    components: {
        AddStudent,
        DeleteAllStudents
    },
    setup () {
        

        return {}
    },
    data(){
        return{
            data:[],
            student_data:[],
            search:'',
            message:'',
            loader:false
        }
    },
    created() {
        this.searchData()
    },
    methods: {
    fetchAllData(e) {
        const options = {
          method: "GET",
          url: "http://localhost:8080/api/students",
          headers: {
            "content-type": "application/json",
          },
        };
  
        axios
          .request(options)
          .then((response) => {
            (this.data = response.data)
            (this.message = e)
            (this.loader = true)
            console.log(e)
          })
          .catch((error) => {
            console.error(error);
            (this.loader = true)
          });
      },
      searchData(e) {
        const options = {
          method: "GET",
          url: `http://localhost:8080/api/students?fullname=${this.search}`,
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
      getData(student){
          this.student_data = student
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