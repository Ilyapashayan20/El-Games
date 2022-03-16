<template>
<div>
       <div  class=" mb-14 mr-3 lm:mr-0 items-center ">
           <div class="flex max-w-xl mx-6 smn:ml-2 smn:max-w-sm l:max-w-xs border-2 border-yellow-600 rounded-3xl bg-blue-a p-6 ">
        <div class=" w-60">
          <h1 class=" text-white font-semibold text-lg l:text-base l:min-w-full">{{ item_data.title }}</h1>
          <p class=" l:w-48 l:text-sm l:mt-6 h-36 smm:w-52 text-white text-p max-w-slide font-light mt-4 mb-14">
         {{ item_data.description }}
          </p>
          <div class="flex justify-between l:flex-col   ">
              <a :href="item_data.linkOne" target="_blanck"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-28 cursor-pointer l:mb-3"></a>
              <a :href="item_data.linkTwo" target="_blanck"><img src="../images/svg/as.svg" alt="AppStore" 
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
             <img class=" h-game-img w-52 absolute top-3 z-ziro" :src="item_data.imgUrl" alt="">
           </div>         
           
          </div>
      </div>
      </div>
</div>

  
</template>

<script>
export default {
      name : 'v-carusel-item',
      props:{
          item_data:{
              type: Array,
              default: ()=>[]
          }
      }

}
</script>

<style>

</style>