<template>
<div class="banner-section">
    <div class="container">
        <div class="banner-group">
            <div class="col-12">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12">
                        <div class="banner-text">
                            <h2>Votre application <br> <span class="light-green">de Sondage</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#" class="button btn">DECOUVRIR</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="banner-img">
                            <img src="@/assets/banner.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String,
  }
}
</script>