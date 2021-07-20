<template>
    <div>
<div>
<button @click="showModal = true"
class="hover:bg-gray-100 border rounded-lg ml-5 mt-3"
 >
 <span class="flex text-2xl text-black font-lg rounded-lg p-2 cursor-pointer"><mdi:account-plus class="mr-2" />Add Teacher</span> 
</button>
</div>

<!-- Modal -->
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
            <div class="py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
    <div class="relative p-8 mx-auto bg-white shadow-sm rounded-xl sm:rounded-xl">
        <h1 class="flex text-2xl">Add Teacher</h1>
      <form class="w-full">
        <div class="mb-5 relative">
          <input type="text" id="text"
          v-model="form.title"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name@example.com" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Title</label>
        </div>
        <div class="mb-5 relative">
          <input type="text"
          v-model="form.description"
           class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="description" autocomplete="off" />
          <label for="text" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Description</label>
        </div>
        <button @click="createTeacher()" class="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
      </form>
    </div>
  </div>
</div>
         </div>
        <div class="mt-5">
        <span 
        @click="showModal = false" 
        class="border rounded-lg bg-gray-200 p-2 my-5 mb-5 cursor-pointer hover:bg-gray-100">CLOSE</span></div>
        </div>
  </transition>
    
    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    setup () {
        

        return {}
    },
    data() {
      return {
        form:{
          title:'',
          description:''
        },
        showModal: false
      }
    },
     methods: {
    createTeacher() {
      axios
        .post("http://localhost:8080/api/tutors", {
          title: this.form.title,
          description: this.form.description,
        })
        .then((response) =>
          console.log(response.data)
        )
        .catch((errors) =>
          (console.log(errors) )
        );
    }
   
}
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