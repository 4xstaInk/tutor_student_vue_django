<template>
  <div class="bg-white">
    <div>
      <NavBar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script >
import NavBar from "./components/nav/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
    setup () {
        

        return {}
    }
}
</script>

<style >

</style>
