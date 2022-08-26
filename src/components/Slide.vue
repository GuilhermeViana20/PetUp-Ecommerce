<template>
    <div id="carouselExampleCaptions" class="carousel slide main-slider slider" data-bs-ride="false">
        <div class="carousel-inner">
            <div class="slider-item carousel-item active" :style="{ backgroundImage: 'url(' + require(`@/assets/images/slide/slide1-1.jpg`) + ')' }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                            <div class="slider-caption">
                                <span class="lead">Oferta animal! </span>
                                <h1 class="mt-2 mb-5">Produtos com até <span class="text-color">70% OFF </span></h1>
                                <a href="#" class="btn btn-main">Comprar Agora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-item carousel-item" :style="{ backgroundImage: 'url(' + require(`@/assets/images/ecommerce/slideshow1-2.jpg`) + ')' }">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                    <div class="slider-caption">
                        <span class="lead">up to 70% off</span>
                        <h1 class="mt-2 mb-5"><span class="text-color">Classic</span> Style</h1>
                        <a href="#" class="btn btn-main">Shop Now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="slider-item carousel-item" :style="{ backgroundImage: 'url(' + require(`@/assets/images/ecommerce/slideshow1-2.jpg`) + ')', backgroundPosition: '50%', backgroundRepeat: 'no-repeat' }">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                    <div class="slider-caption">
                        <span class="lead">Trendy dress</span>
                        <h1 class="mt-2 mb-5"><span class="text-color">Winter </span>Collection</h1>
                        <a href="#" class="btn btn-main">Shop Now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
        </a>

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slide'
    }
</script>