<script setup>
import PageLoader from './components/PageLoader.vue';
import Hintergrund from './components/Hintergrund.vue';
import Nav from './components/Nav.vue';
import Produkte from './components/Produkte.vue';
import Slogan from './components/Slogan.vue';
import Sobremi from './components/Sobremi.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';




</script>

<template>
  <div id="app" class="grid-container">
    <Nav />
    <Slogan />
    <Produkte />
    
  <PageLoader />
  <Hintergrund />
  <Sobremi />
  <Contact />
  <Footer />

  
  
  
 
</div>
</template>

<style scoped>

</style>
