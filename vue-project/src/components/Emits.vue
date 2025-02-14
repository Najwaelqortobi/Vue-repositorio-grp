<script setup>
const emit = defineEmits(); // Define the emit function

// Function to emit an event when button is clicked
const sendMessageToParent = () => {
  emit('sendMessage', 'Hello from Child!');
};
</script>

<!-- ChildComponent.vue -->
<template>
  <!-- Button to emit an event to Parent -->
   
  <button @click="sendMessageToParent">Send Message to Parent</button>
</template>


