<template>
    <div>
    <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" 
        id="left-side"
       >
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide"></h1>
                <p class="text-3xl my-4"></p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
<!-- some content -->
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-no-repeat bg-cover" style="background-color: #161616;
        "
        id="right-side"
        >
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" 
            id="small-view"
            >
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <h1 class="banner">
                  <span class="font-bold px-5
                  border-t-2 border-l-2 border-b-2 
                  
                  rounded-3xl">4xsta</span> <span class="font-sm px-5 border-t-2 border-b-2 border-r-2 rounded-3xl">Ink</span> 
                </h1>
                <p class="text-gray-100">
                   <!-- text -->
                </p>
               <SelectTeacherStudent />

               <div class="py-6 space-x-2">
                    <a href="www.google.com" 
                    target="_blank"
                    class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-3xl p-5 hover:bg-gray-600 border-2 border-white cursor-pointer">f</a>
                    <a class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-3xl p-5
                    hover:bg-gray-600 border-2 border-white cursor-pointer">in</a>
                </div>
            </div>
        </div>
    </section>

    
    </div>
</template>

<script>
import SelectTeacherStudent from "../components/home/SelectTeacherStudent.vue";

export default {
    components: {
        SelectTeacherStudent,
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.banner{
    font-size:100px;
}
#left-side{
    background-image: url('../assets/images/black_teacher.jpg');
}
#small-view{
    background-image: url('../assets/images/black_teacher.jpg');
}
#right-side{
    
}
</style>