<template>
<div class="image-with-text">
    <div class="container">
        <div class="img-text-inner">
            <h2>Lorem Ipsum <span class="light-green">is simply</span></h2>
            <div class="i-w-inner">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="b-banner-text">
                                <h4>It is a long established</h4>
                                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <a href="#" class="button btn">Vior Plus</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="banner-img">
                                <img src="@/assets/1.png">
                            </div>
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
  name: 'ImageWithText',
  props: {
    msg: String,
  }
}
</script>