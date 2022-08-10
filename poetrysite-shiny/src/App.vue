<script setup>
//This is the main app vue file
//import components
import NavBar from './components/NavBar.vue';
import Display from './components/Display.vue';


</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main>

    <Display></Display>
    
  </main>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
.center {
  text-align: center;
}
.vertically-centered{
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
