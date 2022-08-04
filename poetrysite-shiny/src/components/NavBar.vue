<script>
  import { MDBBtn, MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarBrand,
    }
  };
</script>

<template>
  <MDBNavbar light bg="light" container>
    <MDBNavbarBrand href="/">Poetry Fetch</MDBNavbarBrand>
  </MDBNavbar>
</template>
