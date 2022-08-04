<script>
import Random from './Random.vue'
import Authors from './Authors.vue';

export default {
    data() {
        return {
            display: "Random"
        };
    },
    components: { Random, Authors }
}

</script>


<template>

  <h2>Display</h2>
  <input type="radio" id="Random" value="Random" v-model="display">
  <label for="Random">Random</label>
  <br>
  <input type="radio" id="Authors" value="Authors" v-model="display">
  <label for="Authors">Authors</label>
  <br>
  <span>Picked: {{ display }}</span>
    <div v-if="(display == 'Random')">
    <Random></Random>
    </div>
      <div v-else-if="display != 'Random'">
      <Authors></Authors>
      </div>
</template>