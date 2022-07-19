<script>
  import { MDBBtn, MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBBtn,
      MDBNavbar,
      MDBNavbarBrand,
    },
  };
</script>

<template>
  <MDBNavbar light bg="light" container>
    <MDBNavbarBrand href="/">Poetry Search</MDBNavbarBrand>
    <MDBBtn>Authors</MDBBtn>
    <MDBBtn>Random</MDBBtn>
  </MDBNavbar>
</template>
