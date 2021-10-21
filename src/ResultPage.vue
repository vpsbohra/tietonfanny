<template>
    <div class="result">
        <Header msg="Header"/>
        <div class="site-content">
            <div class="container">
                <div class="reult-header">
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                </div>
                <div class="result-section chart">
                    <h4 class="my-3">View 1</h4>
                    <div class="chart-flex">
                        <div class="chart-img">
                            <Chart/>
                        </div>
                        <div class="chart-content">
                            <div class="chart-c-part">
                                <div class="chart-color green">
                                    <span></span>
                                </div>
                                <div class="chart-c-c">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div class="chart-c-part">
                                <div class="chart-color light-blue">
                                    <span></span>
                                </div>
                                <div class="chart-c-c">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div class="chart-c-part">
                                <div class="chart-color red">
                                    <span></span>
                                </div>
                                <div class="chart-c-c">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div class="chart-c-part">
                                <div class="chart-color dark-blue">
                                    <span></span>
                                </div>
                                <div class="chart-c-c">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div class="chart-c-part">
                                <div class="chart-color red">
                                    <span></span>
                                </div>
                                <div class="chart-c-c">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-section progress-cms">
                    <h4 class="my-5">View 2</h4>
                    <ProgressBar msg="ProgressBar"/>
                </div>
            </div>
        </div>
        <Footer msg="Footer"/>
    </div>
</template>
<script>
import Header from './components/Header.vue'
import zingchartVue from 'zingchart-vue';
import Vue from 'vue';
import Footer from './components/Footer.vue'
import Chart from './components/Chart.vue'
import ProgressBar from './components/ProgressBar.vue'
Vue.component('zingchart', zingchartVue);

export default {
    name: 'Homepage',
    components: {
        Header,
        Chart,
        ProgressBar,
        Footer,
    },
}
</script>
