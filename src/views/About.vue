<template>
  <Navbar />
  <div class=" flex justify-between  max-w-7xl m-auto mt-20">
    <img class=" absolute right-0 w-28" src="../images/svg/green-cube.svg" alt="">
       <img class=" absolute top-5 left-1/2 top-20 w-32" src="../images/svg/yellow.png" alt="">
    <div v-for="{id,name,text} in abouts" :key="id">
            <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>{{ name }}<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 font-light">{{ text }}</p>      
    </div>
    <div class=" relative">
     
      <img class=" mr-28" src="../images/svg/setings.png" alt="">

    </div>
  </div>
  <img class=" top-80 absolute" src="../images/svg/blue-ring.png" alt="">

    <div class=" flex justify-between items-center  max-w-7xl m-auto mt-1 pr-12 ">
    <img class=" absolute top-720px right-0 w-28" src="../images/svg/Сylinder.svg" alt="">
      
    <div class=" flex items-center relative">
     <img class=" mt-80 relative -left-24 " src="../images/svg/redcone.png" alt="">
      <img class=" ml-14" src="../images/svg/lamp.png" alt="">

    </div>
     <div v-for="{id,name,text} in abouts" :key="id">
            <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>{{ name }}<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 font-light">{{ text }}</p>      
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

        return { abouts }
    }

}
</script>

<style>

</style>