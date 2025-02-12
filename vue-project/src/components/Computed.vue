<script setup>
// Import ref and computed from Vue for handling computed properties
import { ref, computed } from 'vue';

// Create a reactive reference for a number (initially 5)
const number = ref(5);

// Use computed when you need a value that automatically updates based on other data.
const doubleNumber = computed(() => number.value * 2);// Automatically updates when number changes

const increment = () => {
  number.value++;
}

const decrement = () => {
  number.value--;
}

const reset = () => {
  number.value = 5;
}

</script>

<template>
  <div>
    <!-- Display the number and its doubled value from the computed property -->
    <p>Number: {{ number }}</p>
    <p>Double: {{ doubleNumber }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Disminuir</button>
    <button @click="reset">Restear</button>
</div>
</template>

<style>
</style>