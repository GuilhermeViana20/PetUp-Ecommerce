<template>
    <section class="section products-main">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="title text-center">
                        <h2>Nossos Produtos</h2>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div v-for="product in products" class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                    <div class="product">
                        <div class="product-wrap">
                            <a href="#"><img class="img-fluid w-100 mb-3 img-first" :src="product.image" alt="product-img" /></a>
                            <a href="#"><img class="img-fluid w-100 mb-3 img-second" :src="product.image" alt="product-img" /></a>
                        </div>

                        
                        <span v-if="product.in_promotion" class="onsale">Promoção</span>
                        <div class="product-hover-overlay">
                            <a href="#"><i class="bi bi-cart-fill"></i></a>
                            <a href="#"><i class="bi bi-heart-fill"></i></a>
                            </div>
            
                        <div class="product-info">
                            <h2 class="product-title h5 mb-0"><a href="#">{{product.name}}</a></h2>
                            <span class="price">
                                {{ $filters.price(product.price) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <button class="btn btn-main col-3">Ver mais produtos</button>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data () {
            return {
                products: []
            };
        },

        created() {
            this.getProducts();
        },

        methods: {
            getProducts() {
                axios.get("http://127.0.0.1:8000/api/products")
                    .then((res) => {
                        this.products = res.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
    }

</script>