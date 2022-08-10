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
.container {
  height: 200px;
  position: relative;
  border: 3px solid green;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
