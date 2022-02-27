<template>
  <div class=" pr-4 pl-4">
      <div class=" pt-4 max-w-screen-lg m-auto  flex justify-between items-center">
          
              <a class="cursor-pointer" href="/"><img src="../images/logo/logo2.svg" alt="el-game"></a>

              <nav class=" w-96 flex justify-between">
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3 " :to="{name : 'About'}">About Us</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Games'}">Games</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Blog'}">Blog</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Support'}">Support</router-link>
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

</style>