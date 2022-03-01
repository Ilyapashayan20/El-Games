<template>
  <div class=" pr-4 pl-4">
      <div class=" pt-4 max-w-screen-xl m-auto  flex justify-between items-center">
          
              <a class="cursor-pointer" href="/"><img src="../images/logo/logo2.svg" alt="el-game"></a>

              <nav class=" w-96 flex justify-between">
                  <router-link active-class="active" class="cursor-pointer text-white text-sm font-medium ml-3 " :to="{name : 'About'}">About Us</router-link>
                  <router-link active-class="active" class="cursor-pointer  text-white text-sm font-medium ml-3" :to="{name : 'Games'}">Games</router-link>
                  <router-link active-class="active" class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Blog'}">Blog</router-link>
                  <router-link  class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Support'}" active-class="active">Support</router-link>
              </nav>
          
      </div>
  </div>
  <router-view />
</template>

<script>
export default {
  
    

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