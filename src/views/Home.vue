<template >
<Navbar />
<div class=" px-7">
<div class="section-1 pt-28 max-w-full relative">
  <!-- <img src="../images/svg/Polyhedron.svg" alt="Polyhedron" class=" absolute max-w-full z-minus top-1 left-16">
  <img src="../images/svg/Torus.svg" alt="Torus" class=" absolute max-w-full z-minus">
  <img src="../images/svg/Cone.svg" alt="Cone" class=" absolute max-w-full z-minus"> -->
  <h1 class=" text-center text-white text-xxl font-semibold">
    Do you wanna <br>
    play with us?<span class=" font-semibold text-red-600 ml-2">|</span>
  </h1>
  <div class=" mt-12 flex justify-around m-auto w-96">
    <a href="/games"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-40 cursor-pointer"></a>
    <a href="/games"><img src="../images/svg/as.svg" alt="AppStore" class=" w-40 cursor-pointer"></a>
  </div>
</div>
<div class="about-block max-w-screen-lg m-auto flex justify-between mt-40">
  <div>
    <h1 class='font-semibold text-section text-white'><span class="text-red-600 text-section mr-2">-</span>About Us<span class="text-red-600 text-section ml-2">-</span></h1>
    <p class=" mb-9 text-white text-p w-114 font-light">All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.
      <br>
      <br>
All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.</p>

   <a class="readmore text-sm text-white rounded-smm cursor-pointer px-9 py-2 " href="/about">Read More</a>

  </div>
  <img src="../images/svg/3-nold.svg" alt="">

</div>

<!-- //slider-block -->

<div class="slider-block mt-40">
      <h1 class='font-semibold text-section text-white text-center'><span class="text-red-600 text-section mr-2">-</span>Our Games<span class="text-red-600 text-section ml-2">-</span></h1>

      <div class="slider"></div>
</div>

</div>

</template>

<script>
import { ref } from '@vue/reactivity'
import Navbar from '../components/Navbar.vue'


export default {
  components:{Navbar},
  setup(){
   
  }

 
}
</script>

<style scoped>
.readmore{
  background: linear-gradient(275.67deg, #F03E1D 0%, #F08F1D 100%);
  border: 2px solid #FFFFFF;
  box-sizing: border-box; 
  box-shadow: 0px 4px 8px rgba(2, 10, 27, 0.2);


}

</style>
