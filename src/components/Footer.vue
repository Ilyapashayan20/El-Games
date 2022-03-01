<template>
<div class=" border-t-2 border-b-2 border-gray-600 px-7">
  <div class="max-w-screen-xl m-auto py-6 flex justify-between items-center ">
        <a class="cursor-pointer" href="/"><img src="../images/logo/logo2.svg" alt="el-game"></a>

        <nav class=" w-96 flex justify-between mr-10">
                  <router-link active-class="active" class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'About'}">About Us</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Games'} " active-class="active">Games</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Blog'}" active-class="active">Blog</router-link>
                  <router-link class="cursor-pointer text-white text-sm font-medium ml-3" :to="{name : 'Support'}" active-class="active">Support</router-link>
              </nav>
              <div class="socialmedia flex items-center w-32 justify-between">
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
  </div>
</div>
<div class=" my-5 flex justify-between max-w-screen-xl m-auto">
  <h1 class=" text-white opacity-50">© 2022 ELGAMES</h1>
  <h1 class="text-white">Privacy Policy · Terms of Use · GDPR</h1>
</div>
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