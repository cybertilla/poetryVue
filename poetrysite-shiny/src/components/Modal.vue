<script>
 import { MDBModal, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    props: ['selectedAuthor'],
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
<div>
<MDBModalTitle> {{ selectedAuthor }} </MDBModalTitle>
    <MDBBtn @click="close">Cancel</MDBBtn>
    </div>
</template>