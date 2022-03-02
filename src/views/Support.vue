<template>
<div class=" px-9">
  <Navbar />
  <div class=" mt-24 max-w-7xl m-auto flex justify-between items-center">
    <div class="support-block ">
      <img src="../images/svg/glanak.png" class=" absolute left-0" alt="">
       <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>Support<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 font-light">All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.
      <br>
      <br>
All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.</p>
    </div>
    <img class=" mr-32" src="../images/svg/message.png" alt="">
    <img class=" absolute w-44 top-40 right-0" src="../images/svg/ring.png" alt="">
  </div>
  <div class="form-message">
    
  </div>
</div>
  <!-- <Footer /> -->
  <router-view />
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from '../components/Footer.vue'
export default {
  components: {Navbar,Footer}

}
</script>

<style>

</style>