<script>
import { MDBModal, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";

export default {
    props: ['selectedAuthor', 'randomPoemTitle', 'randomPoemLines'],
    emits: ['close'],
    //emit the close method
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
            <MDBModalTitle>
                <h2>{{ randomPoemTitle }} </h2>
            </MDBModalTitle>
            <MDBModalBody>
                <p><i>{{ selectedAuthor }} </i></p>
            </MDBModalBody>
            <p id="lines" v-for="line in randomPoemLines"> {{ line }} </p>
            <MDBModalFooter>
                <MDBBtn id="close" outline="danger" @click="close">Close</MDBBtn>
            </MDBModalFooter>
        </div>
    </div>
</template>

<style>
#lines {
    line-height: 1.6;
    font-weight: normal;
}
#close {
    float: right;
}
</style>