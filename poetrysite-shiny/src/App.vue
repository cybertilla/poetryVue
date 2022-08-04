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
    <!--
    <div class="wrapper">
      <Authors />
    </div>

export default {
  data() {
    return {
      show: true    }
  }
}
 <button @click="show = !show">Toggle List</button>
        <div v-if="show">



    <div class="wrapper">
      <Random></Random>
    </div>
    -->
  </main>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
