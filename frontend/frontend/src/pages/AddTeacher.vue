<template>
    <div>
          <div>
            <div class="flex flex-col ml-8 mt-2 mb-5 sm:py-12">
  <div class="relative w-11/12 max-w-xl sm:mx-auto">
    <div class="relative mx-auto bg-white shadow-sm rounded-xl sm:rounded-xl">
        <div class="text-2xl">
            <router-link :to="{name:'teachers'}" class="flex text-1xl text-blue-500"><mdi:arrow-left class="mr-2" />Go back</router-link>
            <br/>
           <span class="flex mx-auto"><mdi:account-plus class="mr-2" />Add Teacher</span> 
        </div>
        <div 
        v-if="success_message != ''"
        class="mb-5 mt-2">
            <span class="text-2xl text-white rounded-lg bg-green-400 p-2">{{success_message}}</span>
        </div>
        <div 
        v-if="success_message != ''"
        class="mb-5 mt-2">
        <router-link :to="{name:'teachers'}">
            <span class="text-lg border text-gray-600 hover:bg-gray-100 rounded-lg p-2">Click to view</span>
        </router-link>
        </div>
      <div class="w-full">   
        <div class="mb-5 relative">
          <input type="text" 
          v-model="form.fullname"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Full name</label>
        </div>
        <div class="mb-5 relative">
          <input type="email"
          v-model="form.email"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
          <label for="email" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email</label>
        </div>
        <div class="mb-5 relative">
          <input type="date"
          v-model="form.date_of_birth"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
          <label for="date" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Date of birth</label>
        </div>
                        <div class="mb-5 relative">
          <select
                  v-model="form.sex"
                  id="service-id"
                  name="marital_status-id"
                  class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 placeholder-transparent" 
                  required
                >
                  <option
                    v-for="Data in sex"
                    :key="Data"
                    :value="Data"
                  >
                    {{Data}}
                  </option>
                </select>
          <label for="date" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Gender</label>
        </div>


                <div class="mb-5 relative">
          <select
                  v-model="form.marital_status"
                  id="service-id"
                  name="marital_status-id"
                  class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 placeholder-transparent" 
                  required
                >
                  <option
                    v-for="Data in marital_status"
                    :key="Data"
                    :value="Data"
                  >
                    {{Data}}
                  </option>
                </select>
          <label for="date" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Marital status</label>
        </div>

               <div class="mb-5 relative">
          <select
                  v-model="form.field"
                  id="service-id"
                  name="marital_status-id"
                  class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 placeholder-transparent" 
                  required
                >
                  <option
                    v-for="Data in field"
                    :key="Data"
                    :value="Data.name"
                  >
                    {{Data.name}}
                  </option>
                </select>
          <label for="date" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Field</label>
        </div>

        <div class="mb-5 relative">
          <input type="text"
          v-model="form.courses"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="nationality" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Courses</label>
        </div>
                
        <div class="mb-5 relative">
          <input type="text"
          v-model="form.nationality"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="nationality" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Nationality</label>
        </div>
        <button @click="createTeacher()" class="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
      </div>
      <button @click="goToTeachers" class="text-center w-full bg-gray-200 text-black mt-2 p-3 rounded-md hover:bg-gray-100">Go back</button>
    </div>
  </div>
</div>
         </div>
        </div>
</template>

<script>
import axios from "axios";
import {useRouter, useRoute} from "vue-router";

export default {
  components: {
    
  },
    setup () {
    const router = useRouter();
    const route = useRoute();
    const goToTeachers =()=>{
        router.replace("/teachers")
    };
        return {
            router,
            route,
            goToTeachers
        }
    },
    data() {
      return {
        form:{
          fullname:'',
          email:'',
          date_of_birth:'',
          sex:'',
          marital_status:'',
          field:'',
          courses:'',
          nationality:''
        },
        student_id_number:this.year_enrolled,
        error_message:'',
        success_message:'',
        marital_status:[
          "Married",
          "Single",
        ],
       sex:[
         "Male",
         "Female",
         "Android"
       ],
       field:[
         {
           name:"Animal Science",
           abbre: "Animal Science"
         },
         {
           name:"Crop Science",
           abbre: "Crop Science"
         },
         {
           name:"Law",
           abbre: "Law"
         },
       ]
      }
    },
     methods: {
    createTeacher() {
      axios.post("http://localhost:8080/api/tutors", {
        headers: {
           
          },
          fullname:this.form.fullname,
          email:this.form.email,
          age:this.form.date_of_birth,
          sex:this.form.sex,
          marital_status:this.form.marital_status,
          field:this.form.field,
          courses:this.form.courses,
          nationality:this.form.nationality
        })
        .then((response) =>
        (this.success_message = 'Teacher succesfully added')
        (this.clearForm())
        )
        .catch((errors) =>
        (this.error_message = 'An error occured, try again?')
          (console.log(errors))
        );
    },
    clearForm(){
      this.form.fullname ='',
      this.form.email ='',
      this.form.date_of_birth ='',
      this.form.sex ='',
      this.form.marital_status ='',
      this.form.field ='',
      this.form.courses= '',
      this.form.nationality =''
    }
   
}
}
</script>

<style scoped>

</style>