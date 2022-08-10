<script>
import axios from 'axios';

export default {
  data: () => ({
    lines: ['Loading...'],
    author: "Author",
    title: "Title"
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    //an asynchronous function to get data from the api and assign 'em to the right data fileds
    async fetchData() {
      const response = await axios.get('https://poetrydb.org/random');
      this.title = response.data[0].title;
      this.lines = response.data[0].lines;
      this.author = response.data[0].author;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="center">
      <h2>{{ title }}</h2>
      <br>
      <p><i>{{ author }}</i></p>
      <br>
      <template v-for="line in lines">
        <ul>
          <label>{{ line }}</label>
        </ul>
      </template>
    </div>
  </div>
</template>