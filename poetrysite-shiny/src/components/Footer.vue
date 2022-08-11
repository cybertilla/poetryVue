<script>
  import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBIcon
    },
  };
</script>

<template>
  <MDBFooter :text="['center', 'lg-start', 'muted']">
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2022 Bertilla Fabris, BS in Computer Science, Information Architeture - Malmö University
    </div>
  </MDBFooter>
</template>