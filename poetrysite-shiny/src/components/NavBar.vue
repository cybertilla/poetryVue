<script>
  import { MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarBrand,
    }
  };
</script>

<template>
  <MDBNavbar light bg="light" container>
    <MDBNavbarBrand href="/">Poetry at Random</MDBNavbarBrand>
  </MDBNavbar>
</template>
