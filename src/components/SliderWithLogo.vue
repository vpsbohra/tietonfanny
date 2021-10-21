<template>
<div class="slider-section bg-colour-blue">
    <div class="container">
        <div class="slider-container">
            <h2><span class="white">Lorem</span> Ipsum <span class="white">is</span> simply</h2>
            <hooper :itemsToShow="valuetobeshow" :infiniteScroll="true">
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <slide>
                <div class="card">
                            <div class="card-body p-0">
                                <div class="logo-list">
                                    <p><img src="@/assets/logo-list-2.png"></p>
                                    <p><img src="@/assets/logo-list-1.png"></p>
                                </div>
                            </div>
                        </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>
    </div>
</div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'SliderWithLogo',
  props: {
    valuetobeshow:String ,
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
};
</script>



