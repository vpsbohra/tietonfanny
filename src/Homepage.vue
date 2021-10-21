<template>
  <div id="Homepage">
		<router-view></router-view>
    <Header msg="Header"/>
    <Banner msg="Banner"/>
    <NewSlider valuetobeshow="3" />
    <ImageWithText msg="ImageWithText"/>
    <SliderWithLogo valuetobeshow="7"/>
    <ImageWithText2 msg="ImageWithText2"/>
    <HourlyEntry msg="HourlyEntry"/>
    <Contact msg="Contact"/>
    <Footer msg="Footer"/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import ImageWithText from './components/ImageWithText.vue'
import ImageWithText2 from './components/ImageWithText2.vue'
import Banner from './components/Banner.vue'
import SliderWithLogo from './components/SliderWithLogo.vue'
import HourlyEntry from './components/HourlyEntry.vue'
import Contact from './components/Contact.vue'
import NewSlider from './components/NewSlider.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Homepage',
  components: {
    Header,
    NewSlider,
    ImageWithText,
    Banner,
    SliderWithLogo,
    ImageWithText2,
    HourlyEntry,
    Contact,
    Footer
  },
  // data: function(){
  //   if(window.screen.availWidth<=400)
  //   smallSlider:1
  // }
}



</script>


