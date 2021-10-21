<template>
<div class="slider-section bg-colour-blue">
    <div class="container">
        <div class="slider-container">
            <h2><span class="white">Lorem</span> Ipsum <span class="white">is</span> simply</h2>
            <hooper :itemsToShow="valuetobeshow" :infiniteScroll="true">
                <slide>
                <div class="card">
                    <div class="card-body p-0">
                        <img src="@/assets/THUMBNAIL-1.png">
                        <div class="card-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="button btn">Vior Plus</a>
                        </div>
                    </div>
                </div>
                </slide>
                <slide>
                <div class="card">
                    <div class="card-body p-0">
                        <img src="@/assets/THUMBNAIL-1.png">
                        <div class="card-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="button btn">Vior Plus</a>
                        </div>
                    </div>
                </div>
                </slide>
                <slide>
                <div class="card">
                    <div class="card-body p-0">
                        <img src="@/assets/THUMBNAIL-1.png">
                        <div class="card-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="button btn">Vior Plus</a>
                        </div>
                    </div>
                </div>
                </slide>
                <slide>
                <div class="card">
                    <div class="card-body p-0">
                        <img src="@/assets/THUMBNAIL-1.png">
                        <div class="card-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="button btn">Vior Plus</a>
                        </div>
                    </div>
                </div>
                </slide>
                <slide>
                <div class="card">
                    <div class="card-body p-0">
                        <img src="@/assets/THUMBNAIL-1.png">
                        <div class="card-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="button btn">Vior Plus</a>
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
  name: 'NewSlider',
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



