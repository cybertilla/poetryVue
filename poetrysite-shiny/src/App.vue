<script setup>
//This is the main app vue file
//import components
import Authors from './components/Authors.vue'
import NavBar from './components/NavBar.vue';
import Random from './components/Random.vue';

//try conditionals here?



</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main>
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

-->

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
