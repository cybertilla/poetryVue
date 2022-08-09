<script>
//axios handles API requests
import axios from 'axios';
//the child componen Modal will be used to display info about the authors
import Modal from './Modal.vue'

export default {
  //  name: 'AuthorsPage',
  components: {
    Modal
  },
  //data must be a function
  data() {
    return {
      authorsList: ['Loading...'],
      header: "List of authors",
      modalVisible: false,
      selectedAuthor: "",
      }
      },
  created() {
    // fetch upon loading
    this.fetchData()
  },
  methods: {
    //an asynchronous function to get data from the api and assign it to author list, substituting "Loading..."
    async fetchData() {
      const response = await axios.get('https://poetrydb.org/author');
      this.authorsList = response.data.authors;
      console.log(this.header);
    },
     
    //when an author's name is clicked, the value is assigned to +????? and modal becomes visible
    openModal(author) {
      this.selectedAuthor = author;
      this.modalVisible = true;
    },
    
    //modal becomes invisible when close is emitted
    handleClose() {
      this.modalVisible = false;
    }}
  };


</script>
  <template>
  {{ header }}
  <div>
    <Modal v-if="modalVisible" @close=handleClose() :selectedAuthor="selectedAuthor"></modal>
    <div>
      <button v-for="author in authorsList" type="button" @click=openModal(author)> {{ author }} </button>
    </div>
  </div>

  <!--
      :author.listOfPoems="author.listOfPoems"
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
