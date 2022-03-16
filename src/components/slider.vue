<template>
<v-carusel 
  :carusel_data='documents'
 />
  
</template>

<script>
import getCollection from '../composables/getCollection'
import vCarusel from '../components/v-carusel.vue'
export default {
  components:{vCarusel},
   setup(){
       const {error,documents} = getCollection('games')
        return{error,documents,}
     
   }


}
</script>

<style>

</style>