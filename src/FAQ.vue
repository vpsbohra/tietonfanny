<template>
  <div id="FAQ">
    <Header msg="Header"/>
    <About msg="About"/>
    <FaqAbout msg="FaqAbout"/>
    <Footer msg="Footer"/>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import FaqAbout from './components/FaqAbout.vue'

export default {
  name: 'FAQ',
  components: {
    Header,
    About,
    Footer,
    FaqAbout
  }
}
</script>


