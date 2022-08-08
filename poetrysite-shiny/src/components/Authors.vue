<script>
import axios from 'axios';
import Modal from './Modal.vue'

export default {
  name: 'AuthorsPage',
  components: {
    Modal
  },
  data() {
    return {
    authorsList: ['Loading...'],
    header: "List of authors",
    modalVisible: false,

      author: {
        name: "Poet Poe",
        listOfPoems: [],
      }
    }
  },
  /*data: () => ({
    authors: ['Loading...'],
    header: "List of authors",

    modalData: []
*/

  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    //an asynchronous function to get data from the api and assign it to author list
    async fetchData() {
      const response = await axios.get('https://poetrydb.org/author');
      this.authorsList = response.data.authors;
      console.log(this.header);
            console.log(this.author)

    },

    async openModal(author) {
      this.author.name = author
      this.modalVisible = true
      console.log(this.author)
    },
    close() {
      this.modalVisible = false;

    }
  }
};
</script>


<template>
{{ header}}
  <div>
    <Modal v-if="modalVisible"
      @close="modalVisible = false" :author.name="author.name" :author.listOfPoems="author.listOfPoems"></modal>
<div>
    <button v-for="author in authorsList" type="button" @click="openModal(author)"> {{ author }} </button>
</div>
  </div>

  <!--
  <h3>{{ header }}</h3>
      <Modal v-if="modalVisible"
      @close="modalVisible = false" 
      @close="callback"
      :data="modalData"/>

  <template v-for="author in authors">
    <ul>
      <label>{{ author }}</label>
    </ul>
  </template>
              @click="close()" 
                    :modalVisible = "modalVisible" 


-->
</template>