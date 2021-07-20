<template>
    <div>
    <div class="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white m-4">
      <div class="flex flex-col min-h-full">
        <div class="px-6 py-4 border-b">
          <div class="flex text-xl text-center "><mdi:alert class="mr-2" />Delete</div>
        </div>
        <div class="px-6 py-10 flex-grow">
          <p class="text-black text-2xl font-bold">
            Are you sure you want to delete <span class="text-green-700">{{data.fullname}}</span>?
          </p>
          <p class="text-red-700 font-lg">
              Mind you, this is not the usual yada yada, there is no going back!.
          </p>
        </div>
        <div class="px-5 py-3 border-t bg-gray-100 flex justify-end">
            <button 
          @click="hideModal()"
          class="bg-green-500 btn-gradient-danger text-white font-medium text-sm py-1 mr-2 px-5 rounded">NO</button>
        
          <button 
          @click="deleteStudent()"
          class="bg-red-500 btn-gradient-danger text-white font-medium text-sm py-1 px-5 rounded">YES</button>
        </div>
      </div>
    </div>
  
    </div>
</template>

<script>
 import {useRouter, useRoute} from "vue-router";
import axios from "axios";
export default {
    props:["data"],
    setup () {
    const router = useRouter();
    const route = useRoute();

    const goToStudents =()=>{
        router.replace("/students")
    };
            return {
                router,
                route,
                goToStudents
            }
    },
    methods: {
       deleteStudent() {
      axios
        .delete(`http://localhost:8080/api/students/` + this.data.id, {
          headers: {
           
          },
          _method: "DELETE",
        })
        .then((response) =>
        (this.goToStudents)
        (console.log(response.data))
        )
        .catch((errors) => 
        (console.log(errors))
        );
    },
    hideModal(){
        this.$emit('hide-modal')
    }
    },

}
</script>

<style scoped>

</style>