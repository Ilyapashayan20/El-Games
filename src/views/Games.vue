<template>
  <Navbar />
<div class=" relative md:mt-16 ">
  <div class=" lg:px-36 lm:px-10 l:px-0 max-w-7xl m-auto flex justify-between items-center md:flex-col ">
        <div class=" l:max-w-full l:px-5 ">
       <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>Games<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 font-light l:max-w-full  ">All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.
      <br>
      <br>
All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.</p>


    </div>
    <div>
      <img src="../images/racet.png" alt="">
    </div>
    <img src="../images/cone-games.png" class=" absolute bottom-0 right-4 smm:hidden" alt="">
      <img src="../images/dd.png" class=" lm:hidden absolute top-0 left-0 smm:hidden" alt="">
     <img src="../images/svg/Spiral.svg" class=" absolute top-0 right-4 smm:hidden" alt="">
     <img src="../images/svg/Сylinder.png" class=" absolute bottom-0 left-6 smm:hidden" alt="">

  </div>
</div>
<div class="all-games px-4 mt-16  max-w-7xl m-auto flex flex-wrap justify-between lm:justify-center   l:px-0">
     <div v-for="game in documents" :key="game.id" class=" mb-32 mr-3 lm:mr-0 items-center ">
           <div class="flex max-w-xl smn:max-w-sm l:max-w-xs border-2 border-yellow-600 rounded-3xl bg-blue-a p-6 ">
        <div class=" w-60">
          <h1 class=" text-white font-semibold text-lg l:text-base l:min-w-full">{{ game.title }}</h1>
          <p class=" l:w-48 l:text-sm l:mt-6 h-36 smm:w-52 text-white text-p max-w-slide font-light mt-4 mb-14">
         {{ game.description }}
          </p>
          <div class="flex justify-between l:flex-col   ">
              <a :href="game.linkOne" target="_blanck"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-28 cursor-pointer l:mb-3"></a>
              <a :href="game.linkTwo" target="_blanck"><img src="../images/svg/as.svg" alt="AppStore" 
              class=" w-28 cursor-pointer "></a>         
          </div>
        </div>
         <div class="iphone ml-5 relative -top-16   smm:top-20 l:top-28 l:right-16 ">
           <div class=" w-52 smn:w-36 h-full relative bg-iphone flex justify-center">
               <img class=" smn:w-36 absolute  z-10" src="../images/games/iphone.svg" alt="">
                <div class="arrows w-20 flex items-center justify-around absolute -bottom-36   border-2 rounded-smm py-2 px-3 bg-yellow-500 z-20 smn:-bottom-4 l:bottom-9">
              <img class=" cursor-pointer" src="../images/games/arrow-right.svg" alt="">
               <img class=" mx-1" src="../images/games/line.svg" alt="">
              <img class=" cursor-pointer" src="../images/games/arrow-left.svg" alt="">
            </div>
             <img class=" h-game-img w-52 absolute top-3 z-ziro" :src="game.imgUrl" alt="">
           </div>         
           
          </div>
      </div>
      </div>

</div>

  
  <Footer />
  <router-view />
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from '../components/Footer.vue'
import getCollection from '../composables/getCollection'
export default {
  components: {Navbar,Footer},
   setup(){
        const {error,documents} = getCollection('games')
        return{error,documents,}
    }

}
</script>

<style>

</style>