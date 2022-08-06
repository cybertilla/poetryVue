<script>
import axios from 'axios';
import Modal from './Modal.vue'
  import { MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";
  import { ref } from 'vue';

export default {
    components: {
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      MDBBtn
    },
    setup() {
      const varyingExampleModal = ref(false);
      const modalContent = ref('');
      return {
        varyingExampleModal,
        modalContent,
      }
    }
  ,
  data: () => ({
    authors: ['Loading...'],
    header: "List of authors"
          }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    //an asynchronous function to get data from the api and assign it to author list
    async fetchData() {
      const response = await axios.get('https://poetrydb.org/author');
      this.authors = response.data.authors;
    }
  }
};
</script>


<template>

<!--

  <h3>{{ header }}</h3>

  <template v-for="author in authors">
    <ul>
      <label>{{ author }}</label>
    </ul>
  </template>
-->

  <MDBBtn
    color="primary"
    aria-controls="varyingExampleModal"
    @click="
      () => {
        modalContent = 'author1';
        varyingExampleModal = true;
      }
    "
  >
    author11
  </MDBBtn>

  
  <MDBModal
    id="varyingExampleModal"
    tabindex="-1"
    labelledby="varyingExampleModalLabel"
    v-model="varyingExampleModal"
  >
 
    <MDBModalBody>

      
      <form>
        <div class="mb-3">
          <label for="recipient-name">Recipient: </label>
          <input
            type="text"
            class="form-control"
            id="recipient-name"
            :value="modalContent"
          />


        </div>

      </form>
    </MDBModalBody>


    <MDBModalFooter>
      <MDBBtn color="secondary" @click="varyingExampleModal = false"> Close </MDBBtn>
    </MDBModalFooter>
  </MDBModal>


</template>