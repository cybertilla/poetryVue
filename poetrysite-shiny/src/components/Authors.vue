<script>
import axios from 'axios';
import Modal from './Modal.vue'


export default {
  data: () => ({
    authors: ['Loading...'],
    header: "List of authors",
    showModal: false
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
  },
  components: {
    Modal
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

  <a id="show-modal" @click="showModal = true">
    <template v-for="author in authors">
    <ul>
      <label>{{ author }}</label>
    </ul>
  </template>
  </a>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>