<script>
  export default {
    props: ['user']
  };
</script>

<template>
    {{ props }}
    <button @click="$emit('close')">Cancel</button>
</template>