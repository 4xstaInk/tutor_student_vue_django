<template>
    <div>
        <div class="text-2xl mt-5 mb-2 ml-10">
            <span class="p-2 rounded-lg border hover:bg-gray-100">
            <router-link class="text-blue-500" :to="{name:'students'}">Students</router-link>\ {{data.fullname}}
            </span>
        </div>

<div class="w-8/12 mt-5 mb-5 mx-auto justify-center">
    <div class="flex flex-col rounded-xl bg-white border shadow-md">
        <section class="flex text-3xl p-3 shadow-md">
           {{data.fullname}} 
           
           <button 
            @click="showModal = true"
            type="button" class="flex text-gray-400 border-l-2 border-r-2 ml-5 hover:text-green-700"><mdi:account-edit /></button>
            <button 
            @click="showDeleteModal = true"
            type="button" class="flex text-gray-400 border-r-2 ml-1 hover:text-yellow-700"><mdi:delete class="mr-2" /></button>
        </section>
    </div>
</div>

<div class="w-8/12 mt-5 mb-5 mx-auto justify-center">
    <div class="flex flex-col rounded-xl bg-white border shadow-md">
        <section class="text-3xl text-gray-600 p-3 shadow-md">
           Personal information
        </section>
        <section class="font-normal text-2xl text-gray-700 p-3">
          <p>Fullname: <span class="font-bold">{{data.fullname}}</span></p>
          <p>Email address: <span class="font-bold">{{data.email}}</span></p>
          <p>Date of birth: <span class="font-bold">{{data.age}}</span></p>
          <p class="flex">Gender: <span class="font-bold ml-1 mr-2">{{data.sex}}</span>
          <mdi:gender-male 
          v-if="data.sex == 'Male'"
          class="mr-2" />
           <mdi:gender-female 
          v-if="data.sex == 'Female'"
          class="mr-2" />
          </p>
          <p>Marital status: <span class="font-bold">{{data.marital_status}}</span>
          </p>
          <p>Nationality: <span class="font-bold">{{data.nationality}}</span></p>
        </section>
    </div>
</div>

<div class="w-8/12 mt-5 mb-5 mx-auto justify-center">
    <div class="flex flex-col rounded-xl bg-white border shadow-md">
        <section class="text-3xl p-3 shadow-md">
           School information
        </section>
        <hr/>
        <section class="font-normal text-2xl text-gray-700 p-3">
          <p>Enrollled on: <span class="font-bold">{{data.year_enrolled}}</span></p>
           <div 
          v-for="field in data.fields" :key="field"
          class="flex text-md italic">
          <mdi:book-open-blank-variant class="mr-2" />
          {{field.name}}</div>
          <p> <span class="font-bold">{{data.field}}</span></p>
        </section>
    </div>
</div>

<Teachers :data="data" />

<div class="w-8/12 mt-5 mb-5 mx-auto justify-center">
    <div class="flex flex-col rounded-xl bg-white border shadow-md">
        <section class="text-3xl p-3 shadow-md">
           Action
        </section>
<section class="flex text-2xl justify-center my-5">
            <button 
            @click="showModal = true"
            type="button" class="flex bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"><mdi:account-edit class="mr-2" /> Edit</button>

            <button 
            @click="showDeleteModal = true"
            type="button" class="flex bg-yellow-600 text-white px-3 ml-2 py-1 rounded-md hover:bg-yellow-700"><mdi:delete class="mr-2" />Delete</button>
        </section>
    </div>
</div>


<!--Edit Modal -->
<div title="Click to view more detail data">
  <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
         @click="showModal = false"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showModal"
         >
          <div>
         <EditStudent :data="data" @hide-modal="showModal = false;fetchTeacherData()" />
         </div>
        </div>
  </transition>
    
    </div>

<!--Delete Modal -->
<div title="Click to view more detail data">
  <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showDeleteModal" 
         @click="showDeleteModal = false"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showDeleteModal"
         >
          <div>
         <DeleteStudent :data="data"
         @hide-modal="showDeleteModal = false"
          />
         </div>
        <div class="mt-5">
        </div>
        </div>
  </transition>
    
    </div>
    </div>
</template>

<script>
 import {useRouter, useRoute} from "vue-router";
import axios from "axios";

import EditStudent from "../components/students/EditStudent.vue";
import DeleteStudent from "../components/students/DeleteStudent.vue";
import Teachers from "../components/students/Teachers.vue";
export default {
    components: {
        EditStudent,
        DeleteStudent,
        Teachers
    },
    setup () {
        const router = useRouter();
    const route = useRoute();
     
     const routeId = route.params.id
        return {
            routeId
        }
    },
    data(){
        return{
      data:[],
      showModal: false,
      showDeleteModal: false,
      message:''
        }
    },
    created() {
        this.fetchTeacherData()
    },
     methods: {
    fetchTeacherData() {
        const options = {
          method: "GET",
          url: `http://localhost:8080/api/students/${this.routeId}`,
          headers: {
            "content-type": "application/json",
          },
        };
  
        axios
          .request(options)
          .then((response) => {
            (this.data = response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      },
      updatedUser(){
          console.log('yeaahhh')
      }
    },
}
</script>

<style scoped>
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
 position:absolute;
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  border-radius: .3em;
  cursor: pointer;
  top:0;
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