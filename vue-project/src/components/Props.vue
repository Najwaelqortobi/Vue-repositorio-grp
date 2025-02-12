<script setup>
const props = defineProps(['message']); // Declare the 'message' prop that the Parent passed
</script>
<!-- ChildComponent.vue -->
<template>
  <!-- Displaying the 'message' prop sent from Parent -->
  <p>Message from Parent: {{ message }}</p>
</template>