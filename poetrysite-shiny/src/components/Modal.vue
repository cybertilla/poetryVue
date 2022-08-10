<script>
 import { MDBModal, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    props: ['selectedAuthor', 'randomPoemTitle', 'randomPoemLines'],
    emits: ['close'],

    methods: {
        close() {
            this.$emit('close');
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
    <div class="container">
          <div class="center">
        <MDBModalTitle> {{ selectedAuthor }} </MDBModalTitle>
<MDBModalBody >{{ randomPoemTitle }}</MDBModalBody>
<p v-for="line in randomPoemLines"> {{ line }} </p>
    <MDBBtn outline="danger" @click="close">Close</MDBBtn>
    </div>
  </div>
</template>