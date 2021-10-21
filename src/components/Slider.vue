<template>
<div class="slider-section bg-colour-blue">
    <div class="container">
        <div class="slider-container">
            <h2><span class="white">Lorem</span> Ipsum <span class="white">is</span> simply</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner row w-100 mx-auto">
                    <div class="carousel-item col-md-4 active">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">Vior Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">Vior Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">Vior Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">Vior Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">decouvrir</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                            <div class="card-body p-0">
                                <img src="@/assets/THUMBNAIL-1.png">
                                <div class="card-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <a href="#" class="button btn">Vior Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
                <div class="slider-arrows">
                    <a class="btn btn-outline-secondary mx-1 prev" href="javascript:void(0)" title="Previous">
                        <img src="@/assets/arrow-left.png">
                    </a>
                    <a class="btn btn-outline-secondary mx-1 next" href="javascript:void(0)" title="Next">
                        <img src="@/assets/arrow-right.png">
                    </a>
                </div>			
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    msg: String,
  }
}
</script>