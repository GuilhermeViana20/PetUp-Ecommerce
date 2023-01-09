<template>
    <section v-if="type == 'xl' " id="banner" class="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
        <button class="normal">Explore More</button>
    </section>

    <section v-if="type == 'sm' " id="sm-banner" class="pt-5 pb-5 container">
        <div class="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Learn More</button>
        </div>

        <div class="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcomming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Collection</button>
        </div>
    </section>

    <section id="banner3" class="container">
        <div class="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection - 50% OFF</h3>
        </div>

        <div class="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring / Summer 2022</h3>
        </div>

        <div class="banner-box banner-box3">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>

</template>

<script>
    export default {
            props: ['type'],
    }
</script>

<style scoped>
    #banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("@/assets/img/banner/b2.jpg");
        width: 100%;
        height: 40vh;
        background-size: cover;
        background-position: center;
    }

    #banner h4 {
        color: #fff;
        font-size: 16px;
    }

    #banner h2 {
        color: #fff;
        font-size: 30px;
        padding: 10px 0;
    }

    #banner h2 span {
        color: #ef3636;
    }

    /* 
    *   SM BANNER
    */

    #sm-banner {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    #sm-banner .banner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-image: url("@/assets/img/banner/b17.jpg");
        min-width: 520px;
        height: 30vh;
        background-size: cover;
        background-position: center;
        padding: 40px;
    }

    #sm-banner .banner-box2 {
        background-image: url("@/assets/img/banner/b10.jpg");
    }
    
    #sm-banner h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 300;
    }

    #sm-banner h2 {
        color: #fff;
        font-size: 28px;
        font-weight: 800;
    }

    #sm-banner span {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        padding-bottom: 15px;
    }

    /* 
    *   BANNER 3
    */

    #banner3 {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    #banner3 .banner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-image: url("@/assets/img/banner/b7.jpg");
        min-width: 30%;
        height: 20vh;
        background-size: cover;
        background-position: center;
        padding: 20px;
        margin-bottom: 20px;
    }

    #banner3 .banner-box2 {
        background-image: url("@/assets/img/banner/b4.jpg");
    }

    #banner3 .banner-box3 {
        background-image: url("@/assets/img/banner/b18.jpg");
    }

    #banner3 h2 {
        color: #fff;
        font-weight: 900;
        font-size: 22px;
    }

    #banner3 h3 {
        color: #ec544e;
        font-weight: 800;
        font-size: 15px;
    }
</style>