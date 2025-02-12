<script setup>
import { ref } from "vue";

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const disminuir = () => {
  contador.value--;
}
</script>

<template>
  <div>
    <h3>Contador en Composition: {{ contador }}</h3>
    <button @click="incrementar">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>
<style>
button {
  font-size: 1rem;
  font-family: monospace;
  color: white;
  height: 2rem;
  min-width: 10rem;
  outline: none;
  border: none;
  /* border-radius: 0.2rem; */
  margin: 0 1rem 0 0;
  background-color: #dd0030;
}

</style>
