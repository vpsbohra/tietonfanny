<template>
  <div id="FAQ">
    <Header msg="Header"/>
    <PricingHeading msg="PricingHeading"/>
    <HourlyEntry msg="HourlyEntry"/>
    <Footer msg="Footer"/>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import PricingHeading from './components/PricingHeading.vue'
import HourlyEntry from './components/HourlyEntry.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'FAQ',
  components: {
    Header,
    PricingHeading,
    HourlyEntry,
    Footer
  }
}
</script>


