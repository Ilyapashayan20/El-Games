<template>
  <Navbar />
  <div class=" l:px-5">
  <div class=" flex justify-between  max-w-7xl m-auto mt-20  px-6 md:flex-wrap smm:max-w-full md:items-center smm:justify-center smm:px-1">
    <img class=" absolute right-0 w-28 smm:hidden" src="../images/svg/green-cube.svg" alt="">
       <img class=" absolute top-5 left-1/2 md:hidden w-32 smm:right-2" src="../images/svg/yellow.png" alt="">
    <div v-for="{id,name,text} in abouts" :key="id" class=" smm:max-w-full">
            <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>{{ name }}<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 smm:max-w-xs font-light s:max-w-full">{{ text }}</p>      
    </div>
    <div class=" ml-32 md:ml-0 md:flex md:items-center md:justify-center w-full">
     
      <img class=" md:mr-0" src="../images/svg/setings.png" alt="">

    </div>
  </div>
  <img class=" top-80 absolute md:hidden" src="../images/svg/blue-ring.png" alt="">

    <div class=" flex justify-between items-center  max-w-7xl m-auto mt-1 pr-12 md:max-w-full smm:flex-col-reverse smm:pr-0  smm:px-1 ">
    <img class=" absolute top-720px right-0 w-28 md:hidden" src="../images/svg/Сylinder.svg" alt="">
      
    <div class=" flex items-center justify-between relative ">
     <img class=" mt-80 relative -left-24 md:hidden " src="../images/svg/redcone.png" alt="">
      <img class=" ml-14 smm:ml-0" src="../images/svg/lamp.png" alt="">

    </div>
     <div v-for="{id,name,text} in abouts" :key="id" class=" smm:max-w-full">
            <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>{{ name }}<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 smm:max-w-xs font-light  s:max-w-full">{{ text }}</p>      
    </div>
  </div>
  </div>

  
  <Footer />
  <router-view />
</template>

<script>

import { useLoadAbouts } from '../firebase/config'
import Navbar from "../components/Navbar.vue"
import Footer from '../components/Footer.vue'

export default {
  components: {Navbar,Footer},
    setup(){

      const abouts = useLoadAbouts()
  

    return{abouts}
    }
}
</script>

<style>

</style>