<template>
<div class=" ">
  <Navbar />
  <div class=" mt-24 max-w-7xl m-auto flex justify-between items-center md:flex-col">
    <div class="support-block l:max-w-full l:px-5 ">
      <img src="../images/svg/glanak.png" class=" absolute left-0 smm:hidden" alt="">
       <h1 class='font-semibold text-section mb-3 text-white'><span class="text-red-600 text-section mr-2">-</span>Support<span class="text-red-600 text-section ml-2">-</span></h1>
       <p class=" mb-9 text-white text-p w-114 font-light l:max-w-full  ">All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.
      <br>
      <br>
All in on transparency, creativity, and speed. Partner with a tight-knit team of 100+ game lovers who move quickly, talk openly, and play fairly – with a whole lot of energy and creativity.</p>
    </div>
    <img class=" mr-32 smm:mr-0" src="../images/svg/message.png" alt="">
    <img class=" absolute w-44 top-40 right-0 smm:hidden" src="../images/svg/ring.png" alt="">
  </div>

</div>

  <div class="form-message mt-32 mb-28">
    <h1 class='font-semibold text-section text-white text-center'><span class="text-red-600 text-section mr-2">-</span>Contact us<span class="text-red-600 text-section ml-2">-</span></h1>
    <div class="flex justify-center l:px-5">
    <form @submit.prevent="sendEmail" class="flex flex-col w-80 mt-7" >
    <input v-model="name" class=" bg-transparent border-2 rounded-large border-white py-3 px-5 focus:border-red-700 focus:outline-none text-white text-sm" type="text" placeholder="Your Name" name="name" required>
    <input v-model="email" class=" my-4 bg-transparent border-2 rounded-large border-white py-3 px-5 focus:border-red-700 focus:outline-none text-white text-sm" type="email" placeholder="Email" name="email" required>
    <textarea v-model="message" class=" mb-4 bg-transparent border-2 rounded-large border-white py-3 px-5 focus:border-red-700 focus:outline-none h-36  text-white text-sm" name="message" type="message" placeholder="Message" required />

    <input  type="submit" value="Write Us"  class="bg-gradient-to-r from-yellow-400 to-red-600 rounded-large border-2 border-white text-white text-sm font-semibold py-2" />
    
    
    
    </form>

    </div>
  </div>
  <Footer />
  <router-view />
</template>

<script>
import emailjs from 'emailjs-com';
import Navbar from "../components/Navbar.vue"
import Footer from '../components/Footer.vue'
export default {
  components: {Navbar,Footer},
   data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm("service_5zr5s2i","template_3isvrfe", e.target, '_tg2zMnpWdGUrXAIX', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })
      } catch (error) {
          console.log({error})
      }
     
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }

}

</script>

