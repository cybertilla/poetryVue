<script>
 import { MDBModal, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    name: "Modal",     
    //props: ['authorName', 'listOfPoems'],
    emits: ['close'],

    methods: {
        close() {
            this.$emit('close');
        }
    },

  data() {
    return {
      author: {
        name: "Poet Poe",
        listOfPoems: [],
      }
      }
  },

    components: {
        MDBModal,
        MDBModalBody,
        MDBModalTitle,
        MDBModalFooter,
        MDBBtn
    }
};
</script>

<template>
<div>
<MDBModalTitle> {{ author.name }} </MDBModalTitle>
    <MDBBtn @click="close">Cancel</MDBBtn>
    </div>
</template>