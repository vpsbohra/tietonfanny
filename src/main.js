import Vue from 'vue'
import "@/assets/style.css";
import "@/assets/responsive.css";
import Homepage from './Homepage.vue'
import VueRouter from "vue-router";
import FAQ from './FAQ.vue'
import Pricing from './Pricing.vue';
import Feature from './Feature.vue' 
import Main from './Main.vue';
import ResultPage from './ResultPage.vue';
Vue.use(VueRouter);

const routes = [
  {
    name:'Homepage',
    path:'/',
    component:Homepage
  },
  {
    name:'About',  
    path:'/about',
    component:FAQ
  },
  {
    name:'Feature',  
    path:'/feature',
    component:Feature
  },
  {
    name:'Pricing',  
    path:'/pricing',
    component:Pricing
  },
  {
    name:'ResultPage',  
    path:'/result',
    component:ResultPage
  }
]

const router = new VueRouter({
  routes,
});


Vue.config.productionTip = false
new Vue({
  router,
  // render: h => h(ResultPage),
  render: h => h(Main),
}).$mount('#app')
