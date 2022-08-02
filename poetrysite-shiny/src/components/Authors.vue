<script>
import axios from 'axios';

export default {
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
  <h3>{{ header }}</h3>

  <template v-for="author in authors">
    <ul>
      <label>{{ author }}</label>
    </ul>
  </template>
</template>