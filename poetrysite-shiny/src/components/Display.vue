<script>
import Random from './Random.vue'
import Authors from './Authors.vue';
 import { MDBRadio, MDBBtnGroup } from 'mdb-vue-ui-kit';
   import { ref } from "vue";


export default {
    data() {
        return {
            display: "Random"
        };
    },
    components: { Random, Authors,
      MDBRadio, MDBBtnGroup
    }};
</script>


<template>
    <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="Random" name="options" value="Random"
      v-model="display" />
    <MDBRadio :btnCheck="true" :wrap="false" labelClass="btn btn-secondary" label="Authors" name="options" value="Authors"
      v-model="display" />

    <div v-if="display == 'Random'">
    <Random></Random>
    </div>
      <div v-else-if="display != 'Random'">
      <Authors></Authors>
      </div>
</template>