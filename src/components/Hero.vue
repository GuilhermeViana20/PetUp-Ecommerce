<template>
    <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
    </section>
</template>

<style scoped>
    #hero {
        background-image: url('@/assets/img/hero4.png');
        height: 90vh;
        width: 100%;
        background-size: cover;
        background-position: top 25% right 0;
        padding: 0 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    #hero h4 {
        padding-bottom: 15px;
    }

    #hero h1 {
        color: #088178;
    }

    #hero button {
        background-image: url("@/assets/img/button.png");
        background-color: transparent;
        color: #088178;
        border: 0;
        padding: 14px 80px 14px 65px;
        background-repeat: no-repeat;
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
    }
</style>