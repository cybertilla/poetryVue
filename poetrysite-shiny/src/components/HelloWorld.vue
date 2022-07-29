<script>
import axios from 'axios';

export default {
  data: () => ({
    authors: ['Loading...'],
    header: "All authors"
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    //an asynchronous function to get data from the api and assign it to data.authors
    async fetchData() {
      const response = await axios.get('https://poetrydb.org/authors');
      const data = response.data.authors;
      this.authors = data;

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