<template>
    <section id="newsletter">
        <div class="newstext">
            <h4>Sign Up For newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your email address">
            <button class="normal">Sign Up</button>
        </div>
    </section>
</template>

<style scoped>
    #newsletter {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        background-image: url("@/assets/img/banner/b14.png");
        background-repeat: no-repeat;
        background-position: 20% 30%;
        background-color: #041e42;
        padding: 70px;
    }

    #newsletter h4 {
        font-size: 22px;
        font-weight: 700;
        color: #fff;
    }

    #newsletter p {
        font-size: 14px;
        font-weight: 600;
        color: #818ea0;
    }

    #newsletter p span {
        color: #ffbd27;
    }

    #newsletter .form {
        display: flex;
        width: 40%;
    }

    #newsletter input {
        height: 3.125rem;
        padding: 0 1.25em;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
    }
    
    #newsletter button {
        background-color: #088178;
        color: #fff;
        white-space: nowrap;
    }

    #newsletter button:hover {
        background-color: #fff;
        color: #088178;
    }
</style>