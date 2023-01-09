<template>
	<div class="home">
		<Navbar />
		
		<Hero />

		<Feature class="container" />

		<Products type="featured" />

		<Banner type="xl" />

		<Products type="new" />

		<Banner type="sm" />

		<Newsletter />

		<!-- <Footer /> -->
	</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
import Products from '../components/Products.vue';
import Hero from '../components/Hero.vue';
import Feature from '../components/Feature.vue';
import Banner from '../components/Banner.vue';
import Newsletter from '@/components/Newsletter.vue';

export default {
	name: 'Home',
	components: {
    Navbar,
    Footer,
    Products,
    Hero,
    Feature,
    Banner,
    Newsletter
}
}
</script>
