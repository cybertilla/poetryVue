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
    <MDBNavbarBrand href="/">Poetry Fetch</MDBNavbarBrand>
    <MDBBtn href="/authors">Authors</MDBBtn>
    <MDBBtn href="/random">Random</MDBBtn>
  </MDBNavbar>
</template>
