<script setup>
import { ref, watchEffect } from 'vue';

// Variable reactiva
const count = ref(0);

// watchEffect se ejecuta automáticamente cada vez que count cambia
watchEffect(() => {
  console.log(`El valor de count ahora es: ${count.value}`);
});
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="count++">Incrementar</button>
  </div>
</template>
