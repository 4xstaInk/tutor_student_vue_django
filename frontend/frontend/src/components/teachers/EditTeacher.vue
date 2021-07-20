<template>
    <div>
<!-- Modal -->
          <div>
            <div class="flex flex-col justify-center sm:py-12">
  <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
    <div class="relative p-8 mx-auto bg-white shadow-sm rounded-xl sm:rounded-xl">
        <h1 class="flex text-2xl"><mdi:account-edit class="mr-2" />Edit Teacher
        </h1>
      <form class="w-full">
        <div class="mb-5 relative">
          <input type="text" id="text"
          v-model="form.fullname"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-8 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Full name</label>
        </div>
        <div class="mb-5 relative">
          <input type="email" id="text"
          v-model="form.email"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-8 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
          <label for="email" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email</label>
        </div>
        <div class="mb-5 relative">
          <input type="date" id="text"
          v-model="form.date_of_birth"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-8 placeholder-transparent" placeholder="Enter fullname..." autocomplete="off" />
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
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-8 placeholder-transparent" placeholder="nationality" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Courses</label>
        </div>
                
        <div class="mb-5 relative">
          <input type="text"
          v-model="form.nationality"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-8 placeholder-transparent" placeholder="nationality" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Nationality</label>
        </div>
      </form>
      <button @click="updateTeacher()" class="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
      <button @click="hideModal" class="w-full bg-gray-200 text-black mt-2 p-3 rounded-md hover:bg-gray-100">Go Back</button>
    </div>
  </div>
</div>
         </div>
        </div>
</template>

<script>
import axios from "axios";

export default {
    props:['data'],
  components: {
    
  },
    setup () {
  
        return {}
    },
    data() {
      return {
        form:{
          fullname:this.data.fullname,
          email:this.data.email,
          date_of_birth:this.data.age,
          sex:this.data.sex,
          marital_status:this.data.marital_status,
          field:this.data.field,
          courses:this.data.courses,
          nationality:this.data.nationality
        },
        userId:this.data.id,
        student_id_number:this.year_enrolled,
        showModal: false,
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
    updateTeacher() {
      axios.put("http://localhost:8080/api/tutors/"+this.userId, {
           _method: "PUT",

          fullname:this.form.fullname,
          email:this.form.email,
          age:this.form.date_of_birth,
          sex:this.form.sex,
          year_enrolled:this.form.year_enrolled,
          marital_status:this.form.marital_status,
          field:this.form.field,
          courses:this.form.courses,
          nationality:this.form.nationality
        })
        .then((response) =>
          (console.log(response.data))
          (this.hideModal())
        )
        .catch((errors) =>
          (console.log(errors) )
        );
    },
    hideModal(){
        this.$emit('hide-modal')
    }
   
}
}
</script>

<style scoped>
form{
    height:520px;
    overflow: auto;
}
.removeBtn {
    margin-right: 1rem;
    color: red;
}
html {
  height: 100%;
  color: #000;
}

body {
  min-height: 100%;
  margin: 0;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.button {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: fit-content;
  max-width: 95%;
  padding: 10px;
  border-radius: 1rem;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>