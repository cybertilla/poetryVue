<script>
 import { MDBModal, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    emits: 'close',

    methods: {
        close() {
            this.$emit('close');
        }
    },
    props: ['author'],
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
<MDBModalBody>
<MDBModalTitle> {{ props }}</MDBModalTitle>
    <MDBBtn @click="close">Cancel</MDBBtn>
    </MDBModalBody>
    <MDBModalFooter>footer</MDBModalFooter>
</template>