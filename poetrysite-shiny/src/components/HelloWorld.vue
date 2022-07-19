
<script>const API_URL = `https://poetrydb.org/`
import axios from 'axios';

export default {
  data: () => ({
    items: [
       { name: 'Foo' },
       { name: 'Bar' }
     ],
    header: "All authors"
  })
};

//call the api and get author's list
function getAuthors() {
  //do this better with constant URLAPI
  return axios.get('https://poetrydb.org/author');
}

function readAuthors() {
    const authors = getAuthors.results[0].data.authors;

    for (const author of authors) {
      var obj = {};
      obj['name']= author;
      data.items.push(obj);
    }
      console.log(data.items);
  }

readAuthors;

</script>

  <template v-for="item in items">
    <ul>
    <label :for="item">{{ item.name }}</label>
    </ul>
  </template>