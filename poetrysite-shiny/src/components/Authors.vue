<script>
import axios from 'axios';
import Modal from './Modal.vue'
// import { MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
  components: {
    Modal
  },
  data: () => ({
    authors: ['Loading...'],
    header: "List of authors",

    modalVisible: true,
    modalData: "string"

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
      console.log(this.header);
    },

    openModal(author) {
      this.modalData = author
      this.modalVisible = true
    }

  }
};
</script>


<template>
  <h3>{{ header }}</h3>
  
    <div>
      <Modal v-if="modalVisible" @close="modalVisible = false" :data="modalData" />

      <template v-for="author in authors">
        <button type="button" @click="openModal(author)"> {{ author }}</button>
      </template>
    </div>

  <!--

  <template v-for="author in authors">
    <ul>
      <label>{{ author }}</label>
    </ul>
  </template>
-->
</template>