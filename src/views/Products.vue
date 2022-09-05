<template>

    <Navbar />

    <div class="container">

        <nav class="mb-5" aria-label="breadcrumb">
            <div class="row">
                <div class="col">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Produtos</li>
                    </ol>
                </div>
                
                <div class="col float-end d-flex">
                    Ordenar por

                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </nav>

        <div class="row">
            <div class="col-3">
                <div class="filters mb-3">
                    <h6>FILTRAR PRODUTOS <i class="bi bi-filter"></i></h6>
                    <hr />
                    <a href="#"><b>
                        Limpar filtros <i class="bi bi-trash"></i>
                    </b></a>
                </div>

                <div class="categories">
                    <h6>CATEGORIAS</h6>
                    <hr />
                    <ul>
                        <a href="#">
                            <li>Teste</li>
                        </a>
                        <a href="#">
                            <li>Teste 2</li>
                        </a>
                    </ul>
                </div>

                <div class="price">
                    <h6>FAIXA DE PREÇO</h6>
                    <hr />
                    <ul>
                        <a href="#">
                            <li>R$ 0,00 - R$ 25,00 (1990)</li>
                        </a>
                        <a href="#">
                            <li>R$ 25,00 - R$ 50,00 (1906)</li>
                        </a>
                    </ul>
                </div>

                <div class="pet">
                    <h6>PET</h6>
                    <hr />
                    <ul>
                        <a href="#">
                            <li>Cachorros (1990)</li>
                        </a>
                        <a href="#">
                            <li>Gatos (1906)</li>
                        </a>
                    </ul>
                </div>
            
            </div>
        
            <div class="col-9">
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

                                <div v-if="product.in_promotion">
                                    <span class="price price_promotional">{{ $filters.price(product.promotional_price) }}</span>
                                    <span class="price">{{ ' ' + $filters.price(product.price) }} </span>
                                </div>

                                <div v-else>
                                    <span class="price">{{ $filters.price(product.price) }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />

</template>

<script>
    // @ is an alias to /src
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue';
    import axios from 'axios';

export default {
	name: 'Home',
    data () {
        return {
            products: []
        };
    },

	components: {
		Navbar,
		Footer,
	},

    created() {
        this.getProducts();
    },

    methods: {
        getProducts() {
            axios.get("http://127.0.0.1:8000/api/products/all")
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

<style scoped>
    .btn.btn-sm {
        padding: 5px 10px;
        font-size: 16px;
    }

    hr {
        margin: 0.5rem 0;
    }

    .categories ul li,
    .price ul li,
    .pet ul li {
        list-style: none;
    }

    .categories ul,
    .price ul,
    .pet ul {
        padding-left: 0px;
    }
</style>