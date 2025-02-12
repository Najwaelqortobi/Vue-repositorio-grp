<script setup>
// Import ref and watch from Vue for watching reactive state changes
import { ref, watch } from 'vue';

// Create a reactive reference for count
const count = ref(0);

// Use watch when you need to perform an action every time a value changes and wanna log the old & new value
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

const increment = () => {
  count.value++; 
};
</script>

<template>
  <div>
    <!-- Display the current count -->
    <p>Count: {{ count }}</p>
    
    <!-- Button to increment the count -->
    <button @click="increment">Increment</button>
  </div>
</template>


<style>
</style>