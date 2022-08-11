<script setup>
//This is the main app vue file
//import components
import NavBar from './components/NavBar.vue';
import Display from './components/Display.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <Display></Display>
  </main>
  <Footer></Footer>
</template>
