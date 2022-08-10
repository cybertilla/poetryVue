<script>
import Random from './Random.vue'
import Authors from './Authors.vue';
import { MDBRadio, MDBBtnGroup } from 'mdb-vue-ui-kit';

//this is where the logic for the display lives
//it allows lazy-loading through vue
export default {
  data() {
    return {
      display: "Random"
    };
  },
  components: {
    Random, Authors,
    MDBRadio, MDBBtnGroup
  }
};
</script>


<template>
  <div class="container">
    <div class="d-block">
      <br>
      <p>Choose what to display: </p>
      <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-light" label="Random poem" name="options"
        value="Random" v-model="display" />
      <hr>
      <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-light" label="All authors" name="options"
        value="Authors" v-model="display" />
    </div>
  </div>
  <br>
  <div v-if="display == 'Random'">
    <Random class="note note-light"></Random>
  </div>
  <div v-else-if="display != 'Random'">
    <Authors></Authors>
  </div>
</template>
