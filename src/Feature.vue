<template>
  <div id="Feature">
    <Header msg="Header"/>
    <FeaturePage msg="FeaturePage"/>
    <Footer msg="Footer"/>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import FeaturePage from './components/FeaturePage.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Feature',
  components: {
    Header,
    FeaturePage,
    Footer
  }
}
</script>