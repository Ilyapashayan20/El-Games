<template>
 <div class="  hidden  w-full md:flex justify-between z-30 px-20 ">
            <div @click="prevSlide" class="arrow cursor-pointer py-5 px-4 border-2 border-yellow-300 rounded-full hover:bg-blue-400 transition-all">
                <img class=" w-8"  src="../images/games/arrow-right.svg" alt="">
            </div>
            <div @click="nextSlide" class="arrow cursor-pointer py-5 px-4 border-2 border-yellow-300 rounded-full hover:bg-blue-400 transition-all">
                <img class=" w-8"  src="../images/games/arrow-left.svg" alt="">
            </div>
        </div>
   <div class=" max-w-full   pt-24 overflow-hidden  z-0 md:max-w-xl    m-auto ">
       <div class="flex justify-between   max-w-4xl   " :style="{'margin-left': '-' + (20 * sliderIndex) + '%', 'transition': '.4s' }" >
            <v-carusel-item  v-for="item in carusel_data" :key="item.id" :item_data="item"  >
       </v-carusel-item>
       </div>
       <div class=" absolute  top-16 w-full flex justify-between z-20 md:hidden ">
           <div class=" w-36 h-100 m"></div>
            <div class=" w-36 h-100  m "></div>
       </div>
        <div class="  top-52 w-full flex justify-between z-30 px-20 md:hidden ">
            <div @click="prevSlide" class="arrow cursor-pointer py-5 px-4 border-2 border-yellow-300 rounded-full hover:bg-blue-400 transition-all">
                <img class=" w-8"  src="../images/games/arrow-right.svg" alt="">
            </div>
            <div @click="nextSlide" class="arrow cursor-pointer py-5 px-4 border-2 border-yellow-300 rounded-full hover:bg-blue-400 transition-all">
                <img class=" w-8"  src="../images/games/arrow-left.svg" alt="">
            </div>
        </div>
   </div>
</template>

<script>
import vCaruselItem from '../components/v-carusel-item.vue'
export default {
      name : 'v-carusel',
    components:{vCaruselItem},
      props:{
          carusel_data:{
              type: Array,
              default: ()=>[]
          }
      },
      data(){
          return{
              sliderIndex: 0
          }
      },
      methods:{

          prevSlide(){
              if(this.sliderIndex > 0){
                  this.sliderIndex--
                  console.log(this.sliderIndex);
              } else{

                   this.sliderIndex = this.carusel_data.length


              }

          },
           nextSlide(){
               if(this.sliderIndex >= this.carusel_data.length -1){
                   this.sliderIndex = -1
               } 
              
                this.sliderIndex++
                console.log(this.sliderIndex);
          },

      }

}
</script>

<style>
.arrow{
    background: rgba(118, 118, 168, 0.296);
}
.m{
    background: rgb(19, 28, 46,0.7);

}

</style>