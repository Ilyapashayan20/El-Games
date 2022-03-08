<template >
<Navbar />
<div class="">
<div class="section-1 pt-28  relative l:max-w-full">
  <img src="../images/svg/Polyhedron.svg" alt="Polyhedron" class=" absolute z-minus top-1 left-36 smm:w-20 smm:left-8 smm:top-10 md:left-24 md:w-24 md:top-6 ">
    <img src="../images/svg/Spiral.svg" alt="spiral" class=" absolute max-w-full z-minus top-12 right-36 md:w-32 md:right-28 smm:w-20 smm:right-14">
  <img src="../images/svg/Torus.svg" alt="Torus" class=" absolute max-w-full z-minus md:w-36 md:top-20 smm:w-28 smm:top-28 ">
   <img src="../images/svg/Cube-2.svg" alt="Cube-2" class=" absolute max-w-full z-minus right-0 top-40 md:w-28 md:top-28 smm:w-20 smm:top-32 ">
  <img src="../images/svg/Cone.svg" alt="Cone" class=" absolute max-w-full z-minus left-60 -bottom-36 md:-bottom-28 md:left-20 md:w-36 smm:w-20 smm:left-14 smm:-bottom-16 ">
  <img src="../images/svg/Ball.svg" alt="ball" class=" absolute max-w-full z-minus -bottom-20 right-36 md:right-28 md:w-28 smm:w-20 smm:right-12">
  <h1 class=" text-center text-white text-xxl font-semibold md:text-xl">
    Do you wanna <br>
    play with us?<span class=" font-semibold text-red-600 ml-2">|</span>
  </h1>
  <div class=" mt-12 flex justify-around m-auto w-96 md:w-72 md:mt-6">
    <a href="/games"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-40 cursor-pointer md:w-24"></a>
    <a href="/games"><img src="../images/svg/as.svg" alt="AppStore" class=" w-40 cursor-pointer md:w-24"></a>
  </div>
</div>
<div class="about-block max-w-7xl m-auto flex justify-between mt-40 md:flex-col md:items-center md:px-3 l:max-w-full ">
  <div>
    <h1 class='font-semibold text-section text-white'><span class="text-red-600 text-section mr-2">-</span>About Us<span class="text-red-600 text-section ml-2">-</span></h1>
    <p class=" mb-9 text-white text-p w-114 font-light">All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.
      <br>
      <br>
All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.</p>

   <a class="readmore text-sm text-white rounded-smm cursor-pointer px-9 py-2 " href="/about">Read More</a>

  </div>
  <img src="../images/svg/3-nold.svg" class=" md:mt-12" alt="">

</div>

<!-- //slider-block -->

<!-- <div class="slider-block mt-40 mb-28 max-w-7xl m-auto l:max-w-full">
      <h1 class='font-semibold text-section mb-20 text-white text-center'><span class="text-red-600 text-section mr-2">-</span>Our Games<span class="text-red-600 text-section ml-2">-</span></h1>

      <div class="slider">
        <div class=" border-orange border-2 rounded-large bg-blue-a p-6 max-w-xl relative">
          <h1 class=" text-white font-semibold text-lg">Smile Helix Jump</h1>
          <p class=" text-white text-p max-w-slide font-light mt-4 mb-14">
           A fantastic journey to find the castle in the sky you first saw when you were young.
           See the beautiful scenery of the sea, mountains and valleys on your journey to the castle.
          </p>
          <div class="flex justify-between max-w-game-stors ">
              <a href="/games"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-110px cursor-pointer"></a>
              <a href="/games"><img src="../images/svg/as.svg" alt="AppStore" 
              class=" w-110px cursor-pointer "></a>
            
          </div>
          <div class="iphone  absolute -top-14 left-80 max-w-full flex justify-center">
            <img class=" relative z-10" src="../images/games/iphone.svg" alt="">
            <img class=" absolute top-5 z-ziro" src="../images/games/game.svg" alt="">
            <div class="arrows w-20 flex items-center justify-around absolute -bottom-1  border-2 rounded-smm py-2 px-3 bg-orange z-20">
              <img class=" cursor-pointer" src="../images/games/arrow-right.svg" alt="">
               <img class=" mx-1" src="../images/games/line.svg" alt="">
              <img class=" cursor-pointer" src="../images/games/arrow-left.svg" alt="">


            </div>
          </div>
        </div>
      </div>
</div> -->

<!-- Blog -->
<div class="Blog-block mt-40 mb-28 max-w-7xl m-auto l:max-w-full">
  <h1 class='font-semibold text-section mb-20 text-white text-center'><span class="text-red-600 text-section mr-2">-</span>Blog<span class="text-red-600 text-section ml-2">-</span></h1>
  <div class="Blogs">

  </div>
  <div class="flex justify-center">
   <a class="readmore  text-sm text-white rounded-smm cursor-pointer px-9 py-2 " href="/blog">Read More</a>
  </div>
</div>
</div>
<Footer />


</template>

<script>
import { ref } from '@vue/reactivity'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
  components:{Navbar,Footer},
  setup(){
  
   
  },

 
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
