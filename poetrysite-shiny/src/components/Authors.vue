<script>
//axios handles API requests
import axios from 'axios';
import * as math from 'mathjs';

//the child componen Modal will be used to display info about the authors
import Modal from './Modal.vue';
import { MDBBtn } from "mdb-vue-ui-kit";



export default {
  components: {
    Modal,
    MDBBtn
  },
  //data must be a function
  data() {
    return {
      authorsList: ['Loading...'],
      header: "List of authors",
      modalVisible: false,
      selectedAuthor: "",
      randomPoemTitle: "",
      randomPoemLines: []
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
    },
     
    //when an author's name is clicked, the value is assigned to +????? and modal becomes visible
    async openModal(author) {
      const poemslist = await axios.get('https://poetrydb.org/author/'+author)
      this.selectedAuthor = author;
      const n = math.floor(math.random() * (poemslist.data.length -1));
      this.randomPoemTitle = poemslist.data[n].title
      this.randomPoemLines = poemslist.data[n].lines
      this.modalVisible = true;
    },
    
    //modal becomes invisible when close is emitted
    handleClose() {
      this.modalVisible = false;
    }}
  };


</script>
  <template>

  <div>
    <Modal class="note note-light" v-if="modalVisible" @close=handleClose() :selectedAuthor="selectedAuthor" :randomPoemTitle="randomPoemTitle" :randomPoemLines="randomPoemLines"></modal>
    <div>
<br>
      <MDBBtn v-for="author in authorsList" type="button" @click=openModal(author) outline="dark" rounded> {{ author }} </MDBBtn>
    </div>
  </div>
</template>
