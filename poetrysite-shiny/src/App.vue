<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
<NavBar></NavBar>
  </header>

  <main>
      <div class="wrapper">
      <HelloWorld/>
    </div>
  </main>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
