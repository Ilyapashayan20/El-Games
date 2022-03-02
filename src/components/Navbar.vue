<template>
  <div class=" pr-4 pl-4">
      <div class=" pt-4 max-w-7xl m-auto  flex justify-between items-center">
          
              <a class="cursor-pointer" href="/"><img src="../images/logo/logo2.svg" alt="el-game"></a>

              <nav class=" w-96 flex justify-between smm:hidden">

                  <router-link active-class="active" class="cursor-pointer text-white text-sm font-medium ml-3 smm:mb-6 smm:font-medium " :to="{name : 'About'}">About Us</router-link>
                  <router-link active-class="active" class="cursor-pointer smm:mb-6  text-white text-sm font-medium ml-3 smm:font-medium" :to="{name : 'Games'}">Games</router-link>
                  <router-link active-class="active" class="cursor-pointer smm:mb-6 text-white text-sm font-medium ml-3 smm:font-medium" :to="{name : 'Blog'}">Blog</router-link>
                  <router-link  class="cursor-pointer text-white text-sm font-medium ml-3 smm:mb-6 smm:font-medium" :to="{name : 'Support'}" active-class="active">Support</router-link>
              </nav>
              <img   @click="menuOpen()" class="cursor-pointer hidden  smm:right-4  smm:z-50 " src="../images/icons/Menu.svg" alt="" :class="[open ? 'hidden' : 'smm:block']">
              <img   @click="menuOpen()" class="cursor-pointer hidden smm:fixed smm:right-7 smm:top-7   smm:z-50 " src="../images/icons/x.svg" alt="" :class="[open ? 'smm:block' : 'hidden']">
              

              <!-- Mobile-menu -->
                 <nav  class=" hidden smm:flex smm:flex-col smm:justify-between  smm:fixed smm:top-0  smm:w-56 smm:items-center  smm:bg-blue-menu smm:pt-28 smm:h-screen smm:z-30 smm:pb-5 duration-500  ease-in" :class="[open ?  'right-0' :'-right-full']"   >
                   <div class=" flex flex-col  items-center text-sm " >
                  <router-link active-class="active" class="cursor-pointer text-white text-sm font-medium ml-3 smm:mb-6 smm:font-medium " :to="{name : 'About'}">About Us</router-link>
                  <router-link active-class="active" class="cursor-pointer smm:mb-6  text-white text-sm font-medium ml-3 smm:font-medium" :to="{name : 'Games'}">Games</router-link>
                  <router-link active-class="active" class="cursor-pointer smm:mb-6 text-white text-sm font-medium ml-3 smm:font-medium" :to="{name : 'Blog'}">Blog</router-link>
                  <router-link  class="cursor-pointer text-white text-sm font-medium ml-3 smm:mb-6 smm:font-medium" :to="{name : 'Support'}" active-class="active">Support</router-link>

                   </div>
                   <div class="flex flex-col items-center"> 
                      <div class="socialmedia flex items-center w-32 justify-between mb-6">
                 <div class=" rounded-md p-2 cursor-pointer bg-facebook">
                     <a href="/"><img src="../images/icons/facebook.svg" alt="facebook"></a>
                 </div>
                 <div class="rounded-md py-3 px-2 cursor-pointer bg-youtube">
                     <a href="/">
                     <img src="../images/icons/youtube.svg" alt="youtube">
                     </a>
                 </div>
                 <div class="rounded-md p-2 cursor-pointer bg-instagarm">
                     <a href="/">
                     <img src="../images/icons/instagram.svg" alt="instagram">
                     </a>
                 </div>
              </div>
              <div class="flex flex-col px-9">
                <img class="mb-2" src="../images/svg/gp.svg" alt="">
                 <img src="../images/svg/as.svg" alt="">

              </div>

                   </div>


              </nav>
          
      </div>
  </div>
  <router-view />
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

  setup(){
    let open = ref(false)

    function menuOpen(){
      open.value = !open.value

    }

    return{open ,menuOpen}
  }
  
    

}
</script>

<style>

.ml-3:after {
  display:block;
  padding-bottom: 5px;
  content: '';
  border-bottom: solid 3px #EC1824;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.ml-3:hover:after { transform: scaleX(1); }
.ml-3.fromRight:after{ transform-origin:80% 30%; }
.ml-3.fromLeft:after{  transform-origin:  0% 50%; }

.active{
    border-bottom: solid 2px #EC1824; 
    color-interpolation-filters: auto;
}
</style>