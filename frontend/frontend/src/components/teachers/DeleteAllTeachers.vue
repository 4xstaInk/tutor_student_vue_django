<template>
    <div>
    <button @click="showModal = true"
    class="hover:bg-red-100 border border-red-300 rounded-lg ml-5 mt-3"
    >
        <span class="flex text-2xl text-red-500 font-lg rounded-lg p-2 cursor-pointer"><mdi:delete class="mr-2" /> Delete all teachers</span>
    </button>
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
          <div>
    <div class="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white m-4">
      <div class="flex flex-col min-h-full">
        <div class="px-6 py-4 border-b">
          <div class="flex text-xl text-center "><mdi:alert class="mr-2" />Delete all teachers</div>
        </div>
        <div class="px-6 py-10 flex-grow">
          <p class="text-black text-2xl font-bold">
            Are you sure you want to delete teachers, total number of <span class="text-green-700">{{data.length}}</span>?
          </p>
          <p class="text-red-700 font-lg">
              Mind you, this is not the usual yada yada, there is no going back!.
          </p>
        </div>
        <div class="px-5 py-3 border-t bg-gray-100 flex justify-end">
          <button 
          @click="showModal = false"
          class="bg-green-500 btn-gradient-danger text-white font-medium text-sm mr-2 py-1 px-5 rounded">NO</button>
          <button 
          @click="deleteAllTeachers()"
          class="bg-red-500 btn-gradient-danger text-white font-medium text-sm py-1 px-5 rounded">YES</button>
        </div>
      </div>
    </div>
  
    </div>
         </div>
        </div>
  </transition>
    
    </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    props:["data"],
    setup () {
        

        return {}
    },
    data() {
        return {
             showModal: false
        }
    },
     methods: {
       deleteAllTeachers() {
      axios
        .delete(`http://localhost:8080/api/tutors`,{
          headers: {
           
          },
          _method: "DELETE",
        })
        .then((response) =>
        (this.reloadPage())
        (console.log(response.data))

        )
        .catch((errors) => 
        (console.log(errors))
        );
    },
    reloadPage(){
        this.$emit('update-page','All teachers deleted');
        this.showModal = false
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