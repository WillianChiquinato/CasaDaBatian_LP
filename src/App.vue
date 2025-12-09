<template>
  <div id="app">
    <Header />
    <Hero />
    <MenuVideo />
    <Location />
    <DishGallery />
    <Instagram />
    <Footer />
  </div>
  <FloatingSupport />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import FloatingSupport from './components/FloatingSupport.vue';
import Hero from './components/Hero.vue';
import MenuVideo from './components/MenuVideo.vue';
import DishGallery from './components/DishGallery.vue';
import Instagram from './components/Instagram.vue';
import Location from './components/Location.vue';
import Footer from './components/Footer.vue';
</script>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
}
</style>
