<script setup>
//This is the main app vue file
//import components
import Authors from './components/Authors.vue'
import NavBar from './components/NavBar.vue';
import Random from './components/Random.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main>
    <div class="wrapper">
      <Authors />
    </div>


    <div class="wrapper">
      <Random></Random>
    </div>
  </main>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
